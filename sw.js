self.addEventListener('install', (event) => {
    console.log('Service Worker instalado!');
    event.waitUntil(
        caches.open('radio-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/radio.html',
                '/manifest.json',
                '/sw.js',
                'https://utilitea.github.io/som/radio.png'
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
