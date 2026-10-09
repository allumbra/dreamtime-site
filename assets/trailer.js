(() => {
  const frame = document.querySelector('[data-trailer]');
  const raw = window.DREAMTIME_CONFIG?.patidaTrailerUrl;
  if (!frame || !raw) return;
  let id;
  try {
    const url = new URL(raw);
    if (url.protocol !== 'https:') return;
    if (url.hostname === 'youtu.be') id = url.pathname.slice(1);
    else if (['youtube.com', 'www.youtube.com', 'm.youtube.com', 'www.youtube-nocookie.com'].includes(url.hostname)) {
      if (url.pathname === '/watch') id = url.searchParams.get('v');
      else id = url.pathname.match(/^\/(?:embed|shorts)\/([^/]+)\/?$/)?.[1];
    }
  } catch { return; }
  if (!/^[A-Za-z0-9_-]{11}$/.test(id || '')) return;
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube-nocookie.com/embed/${id}`;
  iframe.title = 'Patida official trailer';
  iframe.loading = 'lazy';
  iframe.allow = 'encrypted-media; picture-in-picture; fullscreen';
  iframe.allowFullscreen = true;
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';
  frame.replaceChildren(iframe);
})();
