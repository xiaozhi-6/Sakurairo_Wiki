/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "598506405d52e6d68c93785e7793cf71"
  },
  {
    "url": "about.html",
    "revision": "08dcb1b4fab19b5084c92f67a4422b63"
  },
  {
    "url": "assets/css/0.styles.48266c77.css",
    "revision": "6f124ac5000e343edbb1b0aeed792646"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f6595224.js",
    "revision": "e37dc304be7830235c451deb0a31baca"
  },
  {
    "url": "assets/js/11.377eaa22.js",
    "revision": "c9900891374867f2b960f847a9e48f72"
  },
  {
    "url": "assets/js/12.bfd8a35e.js",
    "revision": "c953859ea58842632a6f81fd8da158b7"
  },
  {
    "url": "assets/js/13.58594347.js",
    "revision": "00a826d41badc6d114c331f4518da88d"
  },
  {
    "url": "assets/js/14.e4fee180.js",
    "revision": "338d414ab8a3793410afd2374fbff9a7"
  },
  {
    "url": "assets/js/15.d584ff9b.js",
    "revision": "4dbed111aa016d831d2b4992a6f6d822"
  },
  {
    "url": "assets/js/16.22c17af5.js",
    "revision": "6bd41bcd6c490a91eab348f0898f2123"
  },
  {
    "url": "assets/js/17.b5c5f152.js",
    "revision": "26d911074570f3ac6d1f2737a942d9b0"
  },
  {
    "url": "assets/js/18.c1706b00.js",
    "revision": "fb83e7ca065af7a832409b66153ff0a6"
  },
  {
    "url": "assets/js/19.67f073a6.js",
    "revision": "2606acdcbf25d5864b34f32bf9644016"
  },
  {
    "url": "assets/js/20.f4287034.js",
    "revision": "70195140113dbb09f57b68c9022738f9"
  },
  {
    "url": "assets/js/21.a8b15113.js",
    "revision": "f500a9a82b23dd346e504e548cce0c1f"
  },
  {
    "url": "assets/js/22.ed46af67.js",
    "revision": "e9cb0997ae994ef3d0e018a52ded2a61"
  },
  {
    "url": "assets/js/3.2c602196.js",
    "revision": "16a1c0f647518d0fb1ec079b4f9502b5"
  },
  {
    "url": "assets/js/4.2939a555.js",
    "revision": "86d037448f56fa2a175d895d304b5ec7"
  },
  {
    "url": "assets/js/5.2590636f.js",
    "revision": "c3d3e20ab68b4b2299080b98c13f003e"
  },
  {
    "url": "assets/js/6.52c8b565.js",
    "revision": "f0cc344418bd1201da9b87b4845cc0df"
  },
  {
    "url": "assets/js/7.4f3910d8.js",
    "revision": "47d6998c4473a4ec8adc5b1b6b5e8e1e"
  },
  {
    "url": "assets/js/8.bac3baf7.js",
    "revision": "8b6aa11756356bb69fdc58af198f988d"
  },
  {
    "url": "assets/js/9.47377419.js",
    "revision": "6b319a05ea5aafb513881139cfc4cc2e"
  },
  {
    "url": "assets/js/app.52af8720.js",
    "revision": "3163e7541579d69fb2de2178b94d1c97"
  },
  {
    "url": "assets/js/vendors~docsearch.cda19412.js",
    "revision": "46195b62fb196de7b91415b1a9873cf1"
  },
  {
    "url": "demo.html",
    "revision": "9ae9806da018ece2255f762f23476222"
  },
  {
    "url": "guide/about.html",
    "revision": "62c9c47b1bdf87ab30c236b7fd9c5abc"
  },
  {
    "url": "guide/feedback.html",
    "revision": "dd451dd6f1c2128d885201e5c2045d19"
  },
  {
    "url": "guide/index.html",
    "revision": "3880b1c1f2f4d278ac8c4a424640c266"
  },
  {
    "url": "guide/webp.html",
    "revision": "15b2e8a74383b554bd83460d06bd5e05"
  },
  {
    "url": "idc.html",
    "revision": "d37ebfbffe1886d99f93229e81b03c24"
  },
  {
    "url": "img/index.gif",
    "revision": "e5b195f9745ee3b93ffef49002acbae6"
  },
  {
    "url": "img/logo.png",
    "revision": "eb3005fefdce0642b3a08d98aae96ce0"
  },
  {
    "url": "img/logo3.png",
    "revision": "595e2676fb8c4f844487f6ca0c4ccf18"
  },
  {
    "url": "img/novel.png",
    "revision": "e24b473891502eccbcd0e662dea9ecda"
  },
  {
    "url": "index.html",
    "revision": "b9eda027cf5d521a6955336eebbb49f7"
  },
  {
    "url": "releases.html",
    "revision": "93dee263368bd8c0441495a65a95835f"
  },
  {
    "url": "sponsors.html",
    "revision": "affd90113f6bed24563c0a2f3676e62c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
