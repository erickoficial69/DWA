if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,i,c)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}})).then(e=>{const s=c(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-929b33f3"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"eLlftwnlNqtFk6R7omFME"},{url:"/_next/static/chunks/14.adc41edc30311cbf4186.js",revision:"c02c2b33403141f03efb9dea7b59dad3"},{url:"/_next/static/chunks/15.709589a551e288779849.js",revision:"e6723b6527ca64599b041d29aa2aa797"},{url:"/_next/static/chunks/16.8d4a89f0d610f0767442.js",revision:"5f96152eed40b820f1a9704ec21084a7"},{url:"/_next/static/chunks/17.e8dc401aa73c6f544662.js",revision:"4f746e6037305ab552fa034f3e731d70"},{url:"/_next/static/chunks/18.2dbd42ddcdc0c2bad6dd.js",revision:"b844dc056d59630546a1aa26c7e38491"},{url:"/_next/static/chunks/19.12192bdd451220c41cf4.js",revision:"d225492317de42f5673ad3a8a4519e99"},{url:"/_next/static/chunks/1a7c066ce4aded7ac566113d0323868d978b1007.124edfb2c797a48aa6db.js",revision:"ca7bc5a90919237490a417e7a8a038cf"},{url:"/_next/static/chunks/20.aeadff7cdd3543fbbb24.js",revision:"8f7744a7e1532e363854e11c3f1406ed"},{url:"/_next/static/chunks/21.049674176fe24de1f0df.js",revision:"5dfa590daad12a786db80de62dd948ce"},{url:"/_next/static/chunks/commons.7ee17a1e6cc2decd4beb.js",revision:"62cec3a67369ce8e92ff71806f34e2e0"},{url:"/_next/static/chunks/d7eeaac4.8129dc1670e08ca1a8b9.js",revision:"6533e5e351a6f69caef520ed77280d63"},{url:"/_next/static/chunks/framework.8d738cd9f2950118dcb6.js",revision:"8e6204793e3d11a8bedf359bfb6e110d"},{url:"/_next/static/chunks/stencil-polyfills-css-shim.a1779215879852985acb.js",revision:"b79cbd3562d212be12a8ece6911dfd72"},{url:"/_next/static/chunks/stencil-polyfills-dom.39afec4befef9b5721c9.js",revision:"f1a11f5e5199e3a446f6a560b2c6b9c3"},{url:"/_next/static/eLlftwnlNqtFk6R7omFME/_buildManifest.js",revision:"bfbed53f57f7c00ac79e5b3d483f514d"},{url:"/_next/static/eLlftwnlNqtFk6R7omFME/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/eLlftwnlNqtFk6R7omFME/pages/_app.js",revision:"440502dc9b6c6fe6a105a62649ecfd8e"},{url:"/_next/static/eLlftwnlNqtFk6R7omFME/pages/_error.js",revision:"0d31cd2149efecf888bbd1ecfa7bc212"},{url:"/_next/static/eLlftwnlNqtFk6R7omFME/pages/index.js",revision:"6dfd052937fa10fd70551e0ded8ff36b"},{url:"/_next/static/eLlftwnlNqtFk6R7omFME/pages/movilapps.js",revision:"58eb6436b3d41601f81a8f4fdd6c4f26"},{url:"/_next/static/eLlftwnlNqtFk6R7omFME/pages/webapps.js",revision:"a5dd070f2cd6e7f36c5968ec190c5c18"},{url:"/_next/static/runtime/main-5842cf3d4cca33a3d044.js",revision:"fae0a37d1ae8a67f4d097b9581b34e30"},{url:"/_next/static/runtime/polyfills-b6cccdf50789f19d2e76.js",revision:"095e56de66408c1feb86b80266d5463a"},{url:"/_next/static/runtime/webpack-f3e9648d8b4948e4960c.js",revision:"297dcc202b9791d4f93e0eaaeb26cc24"},{url:"/css/dark.css",revision:"0ef26f84bfdb9119d98f868582ed2613"},{url:"/favicon.ico",revision:"412192267449ea67eebabd3e62acfe51"},{url:"/img/APIs.png",revision:"8a02c7756faa4ad389c0836bc584a569"},{url:"/img/backend1.png",revision:"fcc4732aefe39866c4bdb736752dd585"},{url:"/img/codes-white.jpeg",revision:"3e3c589c1d3da8206975385ad2eef65f"},{url:"/img/codes-white.jpg",revision:"775aeae78774bf24666acc2e23810d23"},{url:"/img/codes.gif",revision:"8435638055604717665e0c08ff3cad02"},{url:"/img/database.png",revision:"9c594f6e1f19f9714bffe9af8e1514b4"},{url:"/img/desktop.gif",revision:"c5e4a1e7f108ad2bce71b6271f5fec17"},{url:"/img/graphql.png",revision:"747995a74ae5d32e1132107e25b84784"},{url:"/img/ic_api.png",revision:"072ff39daba638c210dc32618e7cea93"},{url:"/img/ic_ios.jpg",revision:"af9d52efd87b1a6dd3ab1481db9d8c4d"},{url:"/img/loading-chulo.gif",revision:"b1192021a826ce1374b86b65ac44ce25"},{url:"/img/logo.png",revision:"b3ddeadd1651989451188fd954debfd5"},{url:"/img/movil_app1.png",revision:"ec661b4376c0a4503e3908020668f288"},{url:"/img/movilapp.gif",revision:"046ca31d8bab2c5a8d111420e5f1b705"},{url:"/img/optimisation.png",revision:"f126fa7624de107e27298e6a09b25cc9"},{url:"/img/pwa.jpg",revision:"be94542bcc63bf4422c320b8dce32fb0"},{url:"/img/pwa1.png",revision:"f94e4b2c5b0d94cf783456fda0686884"},{url:"/img/pwa_wallpaper.jpg",revision:"fed798e1aba0c659fac6da0e5c1c1859"},{url:"/img/share.png",revision:"cc6acf28076e39dd45a77a851ccd7bb9"},{url:"/img/support.gif",revision:"ec478a56e77b5b8b637aca3af3141b8d"},{url:"/img/wassam.png",revision:"a3761bd8e461952c60b957862c23790e"},{url:"/img/webResponsive.gif",revision:"6890aa616a740e77595909fa8d569aae"},{url:"/ionicons.js",revision:"670227d9729cbbc942070f7d5f0a9d1f"},{url:"/manifest.json",revision:"688128be216cc2f753fe641590f2fcd3"},{url:"/svg/APIs.svg",revision:"042232c0e059287a9eed37e9ccd95245"},{url:"/svg/cloud-computing.svg",revision:"eb06f83be1ec0ad8d39a7f6d2a614754"},{url:"/svg/cms.svg",revision:"65b2e2442c1ba3db84f6f413ee41d3fd"},{url:"/svg/custom2.svg",revision:"44e083d07089b7baa41c167537251a86"},{url:"/svg/descargar.svg",revision:"ed3ca2e3d648a769149b54f84fb15aa9"},{url:"/svg/descargar1.svg",revision:"3029281a06e0a9451cb49530ae53ac0a"},{url:"/svg/desktop.svg",revision:"9baff44f58b99f19c0f4e4baa8938efe"},{url:"/svg/devOps.svg",revision:"ea4d816d52407487337365dbb7649c51"},{url:"/svg/instal.svg",revision:"eac648f025e106afd38cd36bd8e84ead"},{url:"/svg/pwa.svg",revision:"e3067cced35b6b27d99368cde3e29bb5"},{url:"/svg/pwa2.svg",revision:"ce2a0fbeca727e9cbe98cf7db15d6b6d"},{url:"/svg/realTime.svg",revision:"1a7232fdb5f23f981c441ab768ee3e98"},{url:"/svg/servers.svg",revision:"9cbd8f6efe8fe76b94e5778a0d077149"},{url:"/svg/servers_2.svg",revision:"5fb7922038fe5d0c6564f919d3617b65"},{url:"/svg/wifi.svg",revision:"db1ee1eb6b73601c7bac1a677b2994ae"},{url:"/svg/wifi2.svg",revision:"88449adfbc9353213eac13a410257155"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https?:.*/,new e.NetworkFirst({cacheName:"all",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET")}));
