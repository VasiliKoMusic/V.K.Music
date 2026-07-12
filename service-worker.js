/**
 * V.K.MUSIC Service Worker
 * Enables offline support and caching strategies
 */

const CACHE_NAME = 'vk-music-v1';
const URLS_TO_CACHE = [
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './data/songs.json',
  './data/artists.json',
  './data/albums.json',
  './data/genres.json',
  './data/comments.json',
  './data/statistics.json',
];

// Install event - cache essential files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(URLS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle API requests differently (network first)
  if (url.pathname.includes('/api/')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const cache = caches.open(CACHE_NAME);
            cache.then((c) => c.put(request, response.clone()));
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Cache first strategy for assets
  event.respondWith(
    caches.match(request)
      .then((response) => response || fetch(request))
      .then((response) => {
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }

        const responseToCache = response.clone();
        caches.open(CACHE_NAME)
          .then((cache) => cache.put(request, responseToCache));

        return response;
      })
      .catch(() => {
        // Return offline page or cached response
        return caches.match(request) || new Response('Offline', { status: 503 });
      })
  );
});
