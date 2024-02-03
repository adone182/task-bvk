const CACHE_NAME = "my-cache-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/styles/main.css",
        "/scripts/main.js",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("online", (event) => {
  console.log("Aplikasi kembali online");
  const pendingData = localStorage.getItem("pendingData");
  if (pendingData) {
    fetch("url-server", {
      method: "POST",
      body: pendingData,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        localStorage.removeItem("pendingData");
      })
      .catch((error) => {
        console.error("Error syncing data:", error);
      });
  }
});

self.addEventListener("offline", (event) => {
  console.log("Aplikasi berada dalam mode offline");
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    fetch(event.request).then(function (response) {
      if (event.request.method === "POST") {
        response
          .clone()
          .json()
          .then(function (data) {
            localStorage.setItem("pendingData", JSON.stringify(data));
          });
      }
      return response;
    })
  );
});
