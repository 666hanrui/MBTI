#!/usr/bin/env node
import { readFileSync } from "node:fs";

import { scoreApeskAnswers } from "../src/apeskScoring.mjs";

const MAIN_URL = "https://www.apesk.com/p/main0519.asp";
const SUBMIT_URL = "https://www.apesk.com/p/computer104forpc.asp";
const REPORT_URL = "https://www.apesk.com/p/result_for_gzh.asp?rid=";
const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/126 Safari/537.36";

const logic = JSON.parse(readFileSync("data/apeskLogic.json", "utf8"));

function mulberry32(seed) {
  return function next() {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function answersForSeed(seed) {
  const random = mulberry32(seed);
  const answers = {};
  for (let index = 1; index <= 104; index += 1) {
    answers[index] = random() > 0.5 ? 1 : 0;
  }
  return answers;
}

async function fetchText(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      "user-agent": USER_AGENT,
      ...(options.headers ?? {}),
    },
  });
  if (!response.ok) {
    throw new Error(`${url} returned ${response.status}`);
  }
  return {
    text: await response.text(),
    cookie: response.headers.get("set-cookie") ?? "",
  };
}

function parseToken(html) {
  const match = html.match(/<input name="_token" value="([^"]+)"/);
  if (!match) {
    throw new Error("Could not parse APESK _token");
  }
  return match[1];
}

function parseRid(html) {
  const match = html.match(/result_for_gzh\.asp\?rid=(\d+)/);
  if (!match) {
    throw new Error("Could not parse APESK result rid");
  }
  return match[1];
}

function parseReport(html) {
  const typeMatch = html.match(/<div class="basic-type"[^>]*>\s*([^<]+?)\s*<\/div>/);
  if (!typeMatch) {
    throw new Error("Could not parse report type");
  }
  const fullType = typeMatch[1].trim().match(/[IE][NS][TF][JP]-[AO]-[CH]/)?.[0];
  const dimensions = {};
  const names = {
    精力来源: "EI",
    信息处理: "SN",
    理性感性: "TF",
    生活方式: "JP",
    行为方式: "AO",
    待人接物: "HC",
  };
  const blocks = html.split('<div class="trait">').slice(1, 7);
  for (const block of blocks) {
    const caption = block.match(/<div class="caption">([^<]+)<\/div>/)?.[1]?.trim();
    if (!caption || !names[caption]) continue;
    const counts = [...block.matchAll(/<div class="count">\s*([0-9.]+)%<\/div>/g)].map((m) =>
      Number(m[1]),
    );
    if (counts.length >= 2) {
      dimensions[names[caption]] = [counts[0], counts[1]];
    }
  }
  return { fullType, dimensions };
}

async function submitAndFetchReport(token, cookie, answers) {
  const body = new URLSearchParams({ _token: token, mq: "", feishi: "120" });
  for (let index = 1; index <= 104; index += 1) {
    body.set(`a${index}`, String(answers[index] ?? 0));
  }
  const submit = await fetchText(SUBMIT_URL, {
    method: "POST",
    body,
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      cookie,
      referer: MAIN_URL,
    },
  });
  const rid = parseRid(submit.text);
  const report = await fetchText(REPORT_URL + rid, {
    headers: {
      cookie,
      referer: SUBMIT_URL,
    },
  });
  return { rid, report: parseReport(report.text) };
}

function assertMatches(seed, local, remote, rid) {
  if (local.fullType !== remote.fullType) {
    throw new Error(`seed ${seed} rid ${rid}: ${local.fullType} !== ${remote.fullType}`);
  }
  for (const [axis, values] of Object.entries(remote.dimensions)) {
    const localAxis = local.axes[axis];
    const localValues = [localAxis.leftPercent, localAxis.rightPercent];
    if (localValues[0] !== values[0] || localValues[1] !== values[1]) {
      throw new Error(
        `seed ${seed} rid ${rid}: ${axis} ${localValues.join("/")} !== ${values.join("/")}`,
      );
    }
  }
  console.log(`seed ${seed} ok: ${local.fullType} rid=${rid}`);
}

const seeds = process.argv.slice(2).map(Number);
const validationSeeds = seeds.length ? seeds : [7, 23, 42, 91, 2026];

const main = await fetchText(MAIN_URL);
const token = parseToken(main.text);
const cookie = main.cookie;

for (const seed of validationSeeds) {
  const answers = answersForSeed(seed);
  const local = scoreApeskAnswers(logic, answers);
  const { rid, report } = await submitAndFetchReport(token, cookie, answers);
  assertMatches(seed, local, report, rid);
}
