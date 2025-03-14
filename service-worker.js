
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('meu-pwa-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/script.js',
                '/cal-pizza/icon1.png',
                '/cal-pizza/icon2.png',
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
