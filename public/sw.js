
const version = 2;
let staticName = `staticCache-${version}`;

let assets = [
    '/',
    '/index.html',
    'themes/dot/assets/css/style.css',
    'themes/dot/assets/js/script.js',
    '/about',
    '/macos',
    '/windows',
    '/faq',
    '/offline',
    '/404.html',
    '/offline',
    '/404.html'
];

let imageAssets = [
    '/images/nature.jpg',
    '/manifest.json',
    '/appicons'
]

let fontName = `fontCache-${version}`;
let dynamicName = `dynamicCache-${version}`;
let imageName = `imageCache-${version}`;

self.addEventListener('install', (e) => {
    console.log(`Version ${version} installed`);

    e.waitUntil(
        caches.open(staticName)
        .then((cache) => {
            cache.addAll(assets).then(() => {
                console.log(`${staticName} has been updated.`);
            },
            (err) => {
                console.warn(`failed to update ${staticName}.`);
            });
        })
        .then(() => {
            caches.open(imageName).then((cache) => {
                cache.addAll(imageAssets).then(() => {
                    console.log(`${imageName} has been updated`);
                },
                (err) => {
                    console.warn(`failed to update ${imageName}`);
                })
            })
        })
    )
})

self.addEventListener('activate', (e) => {
    console.log('activated (this message comes from sw.js)');
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => {
                    if (key != staticName) {
                        return true;
                    }
                })
                .map((key) => caches.delete(key))
            ).then((empties) => {})
        })
    )
});

self.addEventListener('fetch', (e) => {
    console.log(`fetch request for: ${e.request.url}`);

    e.respondWith(
        caches.match(e.request).then((cacheRes) => {
           return (
               cacheRes ||
                fetch(e.request).then((fetchResponse) => {
                    let type = fetchResponse.headers.get('content-type');
                    if ((type && type.match(/^text\/css/i)) || e.request.url.match(/fonts.googleleapis.com/i)) {
                        console.log(`save a CSS file ${e.request.url}`);
                        return caches.open(dynamicName).then((cache) => {
                            cache.put(e.request, fetchResponse.clone());
                            return fetchResponse;
                        });
                    } else if ((type && type.match(/^font\//i))) {
                        console.log(`save a font file ${e.request.url}`);
                        return caches.open(fontName).then((cache) => {
                            cache.put(e.request, fetchResponse.clone());
                            return fetchResponse;
                        });
                    } else if (type && type.match(/^image\//i)) {
                        console.log(`save an image file ${e.request.url}`);
                        return caches.open(imageName).then((cache) => {
                            cache.put(e.request, fetchResponse.clone());
                            return fetchResponse;
                        });
                    } else {
                        console.log(`other save ${e.request.url}`);
                        return caches.open(dynamicName).then((cache) => {
                            cache.put(e.request, fetchResponse.clone());
                            return fetchResponse;
                        })
                    }
                })
           )
        })
    )
})
