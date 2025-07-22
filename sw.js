const CACHE_NAME = 'cska-v2';
const urlsToCache = [
  // Основные файлы
  '/',
  '/index.html',
  '/manifest.json',

  // Изображения
  '/cup1.png',
  '/cup2.png',
  '/cska.jpg',
  '/player1.jpg',
  '/player2.jpg',
  '/player3.jpg',
  '/player4.jpg',
  '/player5.jpg',
  '/player6.jpg',
  '/player7.jpg',
  '/player8.jpg',
  '/player9.jpg',
  '/player10.jpg',

  // Видео (если нужно кэшировать)
  // '/moment1.mp4',
  // '/moment2.mp4',
  // '/moment3.mp4'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .catch(err => console.log('Cache error:', err))
  );
});

self.addEventListener('fetch', event => {
  // Пропускаем кэширование видео
  if (event.request.url.includes('.mp4')) {
    return fetch(event.request);
  }
  
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
