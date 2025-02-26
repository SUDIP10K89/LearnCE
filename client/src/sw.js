const CACHE_NAME = "my-pwa-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/index.css",
  "/pages/Home.jsx",
  "/pages/SemesterPage.jsx",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});