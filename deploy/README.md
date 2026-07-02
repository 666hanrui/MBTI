# 4C4G Static Deployment Notes

This app is a static Vite build. Do not serve production traffic with `npm run dev`
or `npm run preview`.

Recommended path for the 4 core / 4 GB server at `49.235.153.151`:

1. Build locally or on the server:

   ```bash
   npm ci
   npm run build
   ```

2. Copy `dist/` to the web root:

   ```bash
   sudo mkdir -p /var/www/mbti
   sudo rsync -a --delete dist/ /opt/mbti/dist/
   ```

3. Serve with Nginx using `deploy/nginx.mbti.conf`.

4. Put Cloudflare or another CDN in front if traffic spikes. Cache `/assets/`,
   `/images/`, and `/stickers/`; do not cache `/index.html` aggressively.

Current production domains:

- `544834.xyz`
- `www.544834.xyz`

Current reachable fallback:

- `http://49.235.153.151`

Use `root@49.235.153.151` with `/Users/hanrui/.ssh/shk.pem` for SSH. The old
`/Users/hanrui/Desktop/key.pem` does not match the production public key.

The server currently has no matching public IPv6 address for the DNS AAAA
record. Delete the `AAAA` records unless the cloud instance is explicitly
assigned that public IPv6 and security rules allow ports 80 and 443 over IPv6.

As of the launch deploy, HTTP-01 validation for `544834.xyz` and
`www.544834.xyz` is intercepted by DNSPod/Tencent webblock from Let's Encrypt
validation nodes. The existing certificate only covers `544834.xyz` and expires
on 2026-08-20. To finish domain HTTPS, either remove the domain webblock/finish
the required cloud filing flow, or issue via DNS-01 with a DNSPod API token.

Why this holds up:

- The server only reads static files; there is no Node process per request.
- Fingerprinted Vite assets can be cached for a year.
- Stickers and images are cached for 30 days.
- HTML stays fresh so new deploys take effect quickly.
- Gzip reduces JS/CSS transfer size.

If traffic keeps growing, the next high-impact change is route-level code
splitting so the 104-question MBTI test and 16 challenge packs are downloaded
only when needed.
