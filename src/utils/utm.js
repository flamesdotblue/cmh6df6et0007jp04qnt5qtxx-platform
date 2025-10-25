export function captureInitialUTM() {
  if (typeof window === 'undefined') return;
  const url = new URL(window.location.href);
  const params = Object.fromEntries(url.searchParams.entries());
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'];
  const utm = {};
  utmKeys.forEach((k) => {
    if (params[k]) utm[k] = params[k];
  });
  utm.referrer = document.referrer || '';
  try {
    const existing = JSON.parse(localStorage.getItem('utmParams') || '{}');
    const toStore = Object.keys(existing).length ? existing : utm; // persist first touch
    localStorage.setItem('utmParams', JSON.stringify(toStore));
  } catch (e) {}
}
