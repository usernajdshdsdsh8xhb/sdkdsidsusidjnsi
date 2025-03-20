'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "eca815723527c8a415a76dcc7e1a7bf1",
"assets/AssetManifest.bin.json": "42bb6414b2f12875de2583645f15b12f",
"assets/AssetManifest.json": "1f90ef22b213c9eda6098458c495ad7e",
"assets/assets/data/response.json": "d87bc6392e54509c53628dced5a3d54e",
"assets/assets/fonts/Cairo-Bold.ttf": "b7a5d1a7cd375f0dac4bc961d1a87f7e",
"assets/assets/fonts/Cairo-Italic.ttf": "e91fe223ff5faf8883431b88ebb32161",
"assets/assets/fonts/Cairo-Regular.ttf": "e0b2ab6ebf5064459f042b036284d1e3",
"assets/assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/assets/fonts/Montserrat-Italic.ttf": "a7063e0c0f0cb546ad45e9e24b27bd3b",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/images/1.jpg": "f29514c62b94d0142adbe368fe53c05e",
"assets/assets/images/alarm_notification.png": "a0ec44f9c41765bac11715d753ae67ff",
"assets/assets/images/beta-version.png": "45a0644d46530cf68bfc25a5a400bb5c",
"assets/assets/images/beta_square_launcher.jpg": "7b20f1cf38182c16774d8c17173d3bf4",
"assets/assets/images/blue_logo.png": "3b89839038f080a40a495ca815e594df",
"assets/assets/images/b_fifth.png": "3e0ee9a70a47b8f437acc6cc15365015",
"assets/assets/images/b_fourth.png": "b00b4e430f2cbd302bc151c2111bcd72",
"assets/assets/images/b_second.png": "9cad73e5e2f0bc83c90a93730863700c",
"assets/assets/images/b_third.png": "151a69e762f236674b1ed521ecf497f7",
"assets/assets/images/choose_subject.png": "a94838da4b66e438473ca24b74a1ac99",
"assets/assets/images/circle_microscope.png": "087132bf85412e37d0d851d065867344",
"assets/assets/images/code_icon.png": "5b5a8ec48f6b3eeadbd293ac2a029151",
"assets/assets/images/collections.png": "23592a0a9ba94c9b3d036cd7a3dd12dc",
"assets/assets/images/college_choose.png": "928895f201c8ab83b3fa67e8b8804cfa",
"assets/assets/images/coming_soon.png": "3749f346951e8a356318f39a04e27131",
"assets/assets/images/corrected_questions.png": "d314d1fbf0a5e99654f05c789e9ffbfd",
"assets/assets/images/correct_answers.png": "002a4737a44da6773106fa92c5b67a3e",
"assets/assets/images/empty_folder.png": "36a44db338679d82888d76e684d9559e",
"assets/assets/images/favourite_questions.png": "b8320317bbb5b14d7c1565c1c46fdcb4",
"assets/assets/images/file.png": "bca51572a9fc53bff37e04a5f3a4179b",
"assets/assets/images/green_check.png": "4dfbdaa6206607a118351bccef637868",
"assets/assets/images/hamburg_menu.png": "4ae14b820c6d209e4fbe66b06adc2bff",
"assets/assets/images/home_semester.png": "92e6f5b87cbaf7125eb69e4b74f6fad9",
"assets/assets/images/ic_launcher.jpg": "f9ae9ca9616e6a2eae80b9c8633ab8ee",
"assets/assets/images/ic_launcher.png": "23a485baba2efa72ef922e7598e9d3c0",
"assets/assets/images/link_notification.png": "f41c221638b33ab7582e62c8d9c58eff",
"assets/assets/images/lock.png": "b66988741ac7db64ae1646eddda94a80",
"assets/assets/images/message_notification.png": "73d15ebc6a8c7947f31f2f554bde008c",
"assets/assets/images/news_notification.png": "fec469b4d0135be796c2673e3a5a4f9b",
"assets/assets/images/number_of_banks.png": "33d51aa00391b681a2933d02ce97f043",
"assets/assets/images/number_of_questions.png": "904d8b092cf939bd2870434797f6d14a",
"assets/assets/images/number_of_tags.png": "fe290dbaa192c361a379e722e242f6b4",
"assets/assets/images/o_fifth.png": "b4671f59f65c1e35f250fe109110713e",
"assets/assets/images/o_fourth.png": "44db6c636443f1e4d9e1ba3b1fda1022",
"assets/assets/images/o_second.png": "444ceb2a454f9f337f75b64175a2b3c2",
"assets/assets/images/o_third.png": "cd6d435e499284868114d75b62fd122f",
"assets/assets/images/practical.png": "fc2edb136527debfdf0e18eeff3ff5e9",
"assets/assets/images/practical_sample.png": "73211e82533d0bb3d9ddb4208f1b44ab",
"assets/assets/images/reset_answers.png": "08d4689d785aad2ee9efbf896faabc93",
"assets/assets/images/semester_choose.png": "3c6e0edc03bfe0381ef365201557d0f5",
"assets/assets/images/solve_questions.png": "ce6d56584a7a9d459d563b9f3f967afb",
"assets/assets/images/soon.png": "3749f346951e8a356318f39a04e27131",
"assets/assets/images/stages.png": "bc18885271d19535a3232029e1230ac8",
"assets/assets/images/subject_choose.png": "0bc21d79189725429eaef0aa5640651c",
"assets/assets/images/timer.png": "4d642afb549ecdf764bf19d1320661b0",
"assets/assets/images/two_cards.png": "15bb00eb5995c9bb6d0154a762d2093a",
"assets/assets/images/two_cards_dark.png": "7daf6664a41d9a1890b3bea5410e69df",
"assets/assets/images/unlock.png": "e7809adee1651d5a58923fa956b50621",
"assets/assets/images/video.png": "7ffefb8dd20c3bc54892dc3fcc75065a",
"assets/FontManifest.json": "e6178f540c8fea745c2eb4a3c1dbf229",
"assets/fonts/MaterialIcons-Regular.otf": "15363bd1100c9f1d01fb9092456398a2",
"assets/NOTICES": "b466202b0e421d64f8dfc1b245262a31",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/progress_dialog_null_safe/assets/double_ring_loading_io.gif": "a03b96c4f7bef9fd9ed90eb516267a11",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "6f6695d96e602f939115fe487f253c2e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f8cfe1f275c5d2cfa7e524414e177162",
"/": "f8cfe1f275c5d2cfa7e524414e177162",
"main.dart.js": "ef93bb8f3f0cbd105fbf8c435bced4e2",
"manifest.json": "4a4a73fbc93fa6eeac67d84d4789aed4",
"version.json": "806da51023354985b86d6345c820fe04"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
