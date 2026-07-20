# VENICEVIP Landing Page — Google Apps Script

Mobile-first landing page with:

- Hero animation on the right and content on the left
- Responsive desktop/mobile layout
- Register and LINE CTAs
- Mobile sticky CTA bar
- UTM / fbclid / gclid / ttclid passthrough
- Optional GA4 and Meta Pixel tracking
- Poster fallback and reduced-motion support
- 20+ responsible-use note

## Files

- `Code.gs`
- `Index.html`
- `Styles.html`
- `Scripts.html`
- `assets/venicevip-hero-mobile.mp4` — optimized from the uploaded Flow video
- `assets/venicevip-hero-poster.webp` — fallback poster
- `assets/venicevip-logo-card.webp` — compressed uploaded logo card
- `preview.html` — local visual preview only; do not upload this file to Apps Script

## 1. Host the media files publicly

Apps Script HTML projects do not store or serve MP4/WebP binary assets like a normal hosting folder. Upload the files in `assets/` to a public HTTPS host, such as your existing CloudFront/S3 setup, Cloudflare R2, Firebase Hosting, or another CDN.

You need public URLs similar to:

```text
https://cdn.example.com/venicevip-hero-mobile.mp4
https://cdn.example.com/venicevip-hero-poster.webp
https://cdn.example.com/venicevip-logo-card.webp
```

The MP4 should return the correct `video/mp4` content type and allow normal browser requests. Avoid Google Drive preview URLs for production landing-page video.

## 2. Create the Apps Script project

1. Open `https://script.google.com/`.
2. Create a new project.
3. Keep or rename the first script file to `Code.gs` and paste the supplied code.
4. Add three HTML files named exactly:
   - `Index`
   - `Styles`
   - `Scripts`
5. Paste the matching file contents.

## 3. Configure `Code.gs`

Replace these values:

```javascript
videoUrl: 'PASTE_PUBLIC_MP4_URL_HERE',
posterUrl: 'PASTE_PUBLIC_POSTER_WEBP_URL_HERE',
logoUrl: '',
```

`logoUrl` is optional. If left blank, the landing page displays a clean CSS text logo.

Optional analytics:

```javascript
ga4MeasurementId: 'G-XXXXXXXXXX',
metaPixelId: '123456789012345',
```

Leave them blank when not in use.

## 4. Deploy

1. Click **Deploy → New deployment**.
2. Select **Web app**.
3. Execute as: **Me**.
4. Who has access: **Anyone**.
5. Deploy and copy the `/exec` URL.

After editing the code later, create a new version through **Deploy → Manage deployments → Edit → New version → Deploy**.

## 5. Paid-social URL example

```text
YOUR_WEB_APP_EXEC_URL?utm_source=facebook&utm_medium=paid_social&utm_campaign=venice_launch&utm_content=video_a
```

The page forwards these parameters to the register and LINE destinations:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`
- `fbclid`
- `gclid`
- `ttclid`

## Asset optimization performed

Original uploaded video:

- 1080 × 1920
- 8 seconds
- H.264 + AAC
- about 16.9 MB

Optimized web version included here:

- 720 × 1280
- 8 seconds
- H.264, no audio, fast-start enabled
- about 1.3 MB

This significantly reduces the first-page media payload while preserving the mobile 9:16 composition.

## Important

Before launching paid ads, ensure the page, destination, targeting, claims, age restriction, licensing, and creative all comply with the law and the advertising platform’s current policies. Edit the 20+ notice and any legal copy to match your actual operating requirements.
