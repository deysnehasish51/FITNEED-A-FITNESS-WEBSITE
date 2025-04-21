const CACHE_NAME = "fitneed-cache-v1";
const urlsToCache = [
  "index.html",
  "login.html",
  "manifest.json",
  "css/style.css",
  "css/login.css",
  "js/script.js",
  "images/bg.jpg",
  "images/login.jpg",
  "images/overlay1.png",
  "images/product1.webp",
  "images/product2.webp",
  "images/product3.webp",
  "images/product4.webp",
  "images/program-img1.webp",
  "images/program-img2.webp",
  "images/program-img3.webp",
  "images/program-img4.webp",
  "images/program-img1.jpg",
  "images/program-img2.jpg",
  "images/program-img3.jpg",
  "images/program-img4.jpg"
];

// Install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[ServiceWorker] Caching app shell");
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate event
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("[ServiceWorker] Deleting old cache:", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch event
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }).catch(() => {
      // Optional fallback page
      return caches.match("offline.html");
    })
  );
});
