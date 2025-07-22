const CACHE_NAME = 'cska-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/styles.css',
  '/script.js',
  '/icons/icon-192.png',  
  '/icons/icon-512.png',
  '/videos/moment1.mp4',  
  '/videos/moment2.mp4',
  '/videos/moment3.mp4'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
