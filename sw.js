const urlToCache = [
    "main.js"
  
  ];
  
  self.addEventListener("install", function (event) {
  
    event.waitUntil(
  
      caches.open("v1").then(function (cache) {
  
        console.log("cache aberta");
  
        cache.addAll(urlToCache);
  
      })
  
    );
  
  });
  
  
  
  self.addEventListener("activate", (event) => {
  
    event.waitUntil(self.clients.claim());
  
  });
  
  self.addEventListener("fetch", (event) => {
  
    event.respondWith(
  
      caches.match(event.request).then((response) => {
  
        return response || fetch(event.request);
  
      })
  
    );
  
  });