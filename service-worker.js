"use strict";var precacheConfig=[["/websiteabit/index.html","c3ee704e17f815b69fdce7e39b648420"],["/websiteabit/static/css/main.5828fdbe.css","124ed4ed2a8c98c9ef3ee4a28bcff1e1"],["/websiteabit/static/js/main.06bc886b.js","771064dbaceb5e4e92ad4e59a62a1ed1"],["/websiteabit/static/media/Bluebear.ce50874d.jpeg","ce50874d5104d644dd0ff6eabf929455"],["/websiteabit/static/media/ab-it.e8cfb4fb.svg","e8cfb4fb2c2892e27f1a9b2dbd55cc57"],["/websiteabit/static/media/afspraakmanger.9b6e47ad.png","9b6e47ad9e437b2f5e3343e153fd1c50"],["/websiteabit/static/media/app-phone.f32d9a56.png","f32d9a5659063842ac1daa38a374595c"],["/websiteabit/static/media/bbow.a8f6d9ab.png","a8f6d9aba6f95b8fba0d894fb6b8467f"],["/websiteabit/static/media/contently.ea790de5.png","ea790de59e926702c7b1eb5179eef7a9"],["/websiteabit/static/media/cryo.945565d2.png","945565d223539bae17e4236383609b7b"],["/websiteabit/static/media/ethereum.a13e36a6.svg","a13e36a6cc1614431da81d9c5a8c63d2"],["/websiteabit/static/media/horsecoin.9b4cd959.png","9b4cd9597ea329b7327322969a8b4d76"],["/websiteabit/static/media/maisonlux.f31e4ec6.jpg","f31e4ec6bccb04390eb4cb520e5c4f04"],["/websiteabit/static/media/medibib.589e3ec3.png","589e3ec3f54a03b771884f64e77d6b71"],["/websiteabit/static/media/myosotis.18ca5c25.png","18ca5c2584148c11838a83f8c393ea32"],["/websiteabit/static/media/nodejs.673c74c0.svg","673c74c0555ee700aabc046efd7aeee7"],["/websiteabit/static/media/react.911618e9.svg","911618e915bff2d641929bc1ebd6e5d8"],["/websiteabit/static/media/surplaceVZW.7a6df8aa.png","7a6df8aaab2f7f138d02ecd25513a93b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var i=new URL(e);return n&&i.pathname.match(n)||(i.search+=(i.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),i.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),i=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var i="/websiteabit/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(i,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});