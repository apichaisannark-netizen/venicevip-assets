/**
 * VENICEVIP Landing Page — Google Apps Script Web App
 *
 * 1) Upload the optimized MP4 / poster / logo to a public HTTPS host.
 * 2) Paste the public URLs into APP_CONFIG below.
 * 3) Deploy as Web app: Execute as Me, Who has access: Anyone.
 */

const APP_CONFIG = Object.freeze({
  brandName: 'VENICEVIP',

  // Conversion destinations
  registerUrl: 'https://auto.venicevip.net/register?uplineid=Mjk4NDI=&openExternalBrowser=1',
  lineUrl: 'https://line.me/R/ti/p/@278uqmut?ts=07142114&oat_content=url',

  // REQUIRED: public HTTPS asset URLs. Apps Script cannot serve local MP4/WebP files directly.
  videoUrl: 'https://apichaisannark-netizen.github.io/venicevip-assets/venicevip-hero-mobile.mp4',
  posterUrl: 'https://apichaisannark-netizen.github.io/venicevip-assets/venicevip-hero-poster.webp',

  // Optional. Leave blank to use the CSS text logo.
  logoUrl: '',

  // Optional analytics. Leave blank to disable.
  ga4MeasurementId: '',       // Example: G-XXXXXXXXXX
  metaPixelId: '',            // Example: 123456789012345

  // Content
  eyebrow: 'PLATFORM ONLINE ระดับพรีเมียม',
  headingLine1: 'สมัครง่าย.',
  headingLine2: 'รวดเร็ว.',
  headingLine3: 'พร้อมบริการ.',
  descriptionLine1: 'เปิดประสบการณ์ออนไลน์กับ VENICEVIP',
  descriptionLine2: 'สมัครสมาชิกได้ง่าย พร้อมทีมงานให้คำแนะนำตลอดวัน',

  // Compliance copy — edit to match your actual legal/operating requirements.
  minimumAgeText: 'สำหรับผู้ที่มีอายุ 20 ปีขึ้นไป โปรดใช้บริการอย่างมีความรับผิดชอบ',
});

function doGet() {
  const template = HtmlService.createTemplateFromFile('Index');
  template.appConfigJson = JSON.stringify(APP_CONFIG);

  return template
    .evaluate()
    .setTitle('VENICEVIP | สมัครสมาชิก')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1, viewport-fit=cover');
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
