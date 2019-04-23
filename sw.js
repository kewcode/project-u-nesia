const version = "1";
const cacheName = `u-nesia-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
          `/`,
          `/fonts/themify.eot`,
          `/fonts/themify.svg`,
          `/fonts/themify.ttf`,
          `/fonts/themify.woff`,
          `/css/bootstrap.min.css`,
          `/css/owl.carousel.min.css`,
          `/css/style.css`,
          `/css/themify-icons.css`,
          `/images/appleicon.png`,
          `/images/client.png`,
          `/images/dualphone.png`,
          `/images/favicon.png`,
          `/images/graphic.png`,
          `/images/iphonex.png`,
          `/images/logo.png`,
          `/images/perspective.png`,
          `/images/playicon.png`,
          `/images/screen1.jpg`,
          `/images/screen2.jpg`,
          `/images/screen3.jpg`,
          `/js/bootstrap.bundle.min.js`,
          `/js/jquery-3.2.1.min.js`,
          `/js/owl.carousel.min.js`,
          `/js/script.js`,
          `index.html`
        ])
        .then(() => self.skipWaiting());
    })
  );
});


self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});


self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
    .then(cache => cache.match(event.request, {
      ignoreSearch: true
    }))
    .then(response => {
      return response || fetch(event.request);
    })
  );
});