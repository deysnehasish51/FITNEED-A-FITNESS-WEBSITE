const CACHE_NAME = "my-cache-v1"; 
const urlsToCache = [ 
"/", 
"/index.html",
"/login.html", 
"/css/styles.css",
"/css/login.css",
"/js/script.js", 
"/app.js", 
"/images/bg.jpg",
"/images/loging.jpg", 
"/images/overlay1.webp",
"/images/product1.webp",
"/images/product2.webp",
"/images/product3.webp",
"/images/product4.webp",
"/images/program-img1.webp",
"/images/program-img2.webp",
"/images/program-img3.webp",
"/images/program-img4.webp",
]; 
// Install event: Caches the assets 
self.addEventListener("install", (event) => { 
event.waitUntil( 
caches.open(CACHE_NAME).then((cache) => { 
console.log("Caching assets"); 
return cache.addAll(urlsToCache); 
}) 
); 
}); 
// Fetch event: Serves cached assets 
self.addEventListener("fetch", (event) => { 
event.respondWith( 
caches.match(event.request).then((response) => { 
return response || fetch(event.request); 
}) 
); 
}); 
// Activate event: Clears old caches 
self.addEventListener("activate", (event) => { 
event.waitUntil( 
caches.keys().then((cacheNames) => { 
return Promise.all( 
cacheNames.map((cache) => { 
if (cache !== CACHE_NAME) { 
console.log("Deleting old cache:", cache); 
return caches.delete(cache); 
} 
}) 
); 
}) 
); 
}); 