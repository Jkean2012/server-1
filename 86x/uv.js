importScripts('/86x/uv.bundle.js');
importScripts('/86x/uv.config.js');
importScripts('/86x/uv.sw.js');
importScripts('https://arc.io/arc-sw-core.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
