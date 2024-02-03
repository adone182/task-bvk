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

  if (event.request.method === "POST") {
    event.respondWith(
      fetch(event.request.clone()).then((response) => {
        if (response.ok) {
          return response
            .clone()
            .json()
            .then((data) => {
              localStorage.setItem("watchList", JSON.stringify(data));
              return response;
            });
        }
      })
    );
  }
});

self.addEventListener("online", (event) => {
  console.log("Aplikasi kembali online");
  if (navigator.onLine) {
    const watchList = localStorage.getItem("watchList");
    if (watchList) {
      fetch("url-server", {
        method: "POST",
        body: watchList,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          localStorage.removeItem("watchList");
        })
        .catch((error) => {
          console.error("Error syncing data:", error);
        });
    }
  }
});

self.addEventListener("offline", (event) => {
  console.log("Aplikasi berada dalam mode offline");
});
