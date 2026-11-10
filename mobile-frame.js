/* mobile-frame.js
   On a desktop-sized window, show the page inside the iPhone frame (phone.html).
   Inside the frame, mark <html> so mobile-frame.css can switch to in-phone styles,
   and tell the frame which page is showing so its URL stays in sync.
   Loaded in <head> without defer, so the redirect happens before the page renders. */

(function () {
  const page = (location.pathname.split('/').pop() || 'index.html') + location.search;

  if (window.self === window.top) {
    if (window.innerWidth > 600) location.replace('phone.html#' + page);
    return;
  }

  document.documentElement.classList.add('in-phone');
  window.parent.postMessage({ type: 'phone-frame-page', page: page }, '*');
})();
