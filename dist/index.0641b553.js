// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dhwUG":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bNKaB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _core = require("@uppy/core");
var _coreDefault = parcelHelpers.interopDefault(_core);
var _xhrUpload = require("@uppy/xhr-upload");
var _xhrUploadDefault = parcelHelpers.interopDefault(_xhrUpload);
var _dashboard = require("@uppy/dashboard");
var _dashboardDefault = parcelHelpers.interopDefault(_dashboard);
const uploadUrl = `${"'http://localhost:3000'"}/image`;
const uppy = new (0, _coreDefault.default)().use((0, _dashboardDefault.default), {
    inline: true,
    target: "#drag-drop-area"
}).use((0, _xhrUploadDefault.default), {
    endpoint: uploadUrl,
    fieldName: "userFile",
    formData: true
});
uppy.on("complete", (result)=>{
    console.log(result);
    for (const file of result.successful){
        const url = `${"'http://localhost:3001'"}/${file.response.body.msg}`;
        const link = document.createElement("a");
        link.href = url;
        link.innerHTML = url;
        const li = document.createElement("li");
        li.appendChild(link);
        document.getElementById("links").appendChild(li);
    }
});

},{"@uppy/core":"8Yc3I","@uppy/xhr-upload":"fQbWn","@uppy/dashboard":"9yvGq","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"8Yc3I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _uppyJsDefault.default));
parcelHelpers.export(exports, "Uppy", ()=>(0, _uppyJsDefault.default));
parcelHelpers.export(exports, "UIPlugin", ()=>(0, _uipluginJsDefault.default));
parcelHelpers.export(exports, "BasePlugin", ()=>(0, _basePluginJsDefault.default));
parcelHelpers.export(exports, "debugLogger", ()=>(0, _loggersJs.debugLogger));
var _uppyJs = require("./Uppy.js");
var _uppyJsDefault = parcelHelpers.interopDefault(_uppyJs);
var _uipluginJs = require("./UIPlugin.js");
var _uipluginJsDefault = parcelHelpers.interopDefault(_uipluginJs);
var _basePluginJs = require("./BasePlugin.js");
var _basePluginJsDefault = parcelHelpers.interopDefault(_basePluginJs);
var _loggersJs = require("./loggers.js");

},{"./Uppy.js":"441SU","./UIPlugin.js":"1gCpC","./BasePlugin.js":"k20Jd","./loggers.js":"9mylM","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"441SU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint-disable max-classes-per-file */ /* global AggregateError */ var _translator = require("@uppy/utils/lib/Translator");
var _translatorDefault = parcelHelpers.interopDefault(_translator);
var _namespaceEmitter = require("namespace-emitter");
var _namespaceEmitterDefault = parcelHelpers.interopDefault(_namespaceEmitter);
var _nonSecure = require("nanoid/non-secure");
var _throttleJs = require("lodash/throttle.js");
var _throttleJsDefault = parcelHelpers.interopDefault(_throttleJs);
var _storeDefault = require("@uppy/store-default");
var _storeDefaultDefault = parcelHelpers.interopDefault(_storeDefault);
var _getFileType = require("@uppy/utils/lib/getFileType");
var _getFileTypeDefault = parcelHelpers.interopDefault(_getFileType);
var _getFileNameAndExtension = require("@uppy/utils/lib/getFileNameAndExtension");
var _getFileNameAndExtensionDefault = parcelHelpers.interopDefault(_getFileNameAndExtension);
var _generateFileID = require("@uppy/utils/lib/generateFileID");
var _supportsUploadProgressJs = require("./supportsUploadProgress.js");
var _supportsUploadProgressJsDefault = parcelHelpers.interopDefault(_supportsUploadProgressJs);
var _getFileNameJs = require("./getFileName.js");
var _getFileNameJsDefault = parcelHelpers.interopDefault(_getFileNameJs);
var _loggersJs = require("./loggers.js");
var _restricterJs = require("./Restricter.js");
var _localeJs = require("./locale.js");
var _localeJsDefault = parcelHelpers.interopDefault(_localeJs);
let _Symbol$for, _Symbol$for2;
function _classPrivateFieldLooseBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) throw new TypeError("attempted to use private field on non-instance");
    return receiver;
}
var id = 0;
function _classPrivateFieldLooseKey(name) {
    return "__private_" + id++ + "_" + name;
}
const packageJson = {
    "version": "3.5.1"
};
/**
 * Uppy Core module.
 * Manages plugins, state updates, acts as an event bus,
 * adds/removes files and metadata.
 */ var _plugins = /*#__PURE__*/ _classPrivateFieldLooseKey("plugins");
var _restricter = /*#__PURE__*/ _classPrivateFieldLooseKey("restricter");
var _storeUnsubscribe = /*#__PURE__*/ _classPrivateFieldLooseKey("storeUnsubscribe");
var _emitter = /*#__PURE__*/ _classPrivateFieldLooseKey("emitter");
var _preProcessors = /*#__PURE__*/ _classPrivateFieldLooseKey("preProcessors");
var _uploaders = /*#__PURE__*/ _classPrivateFieldLooseKey("uploaders");
var _postProcessors = /*#__PURE__*/ _classPrivateFieldLooseKey("postProcessors");
var _informAndEmit = /*#__PURE__*/ _classPrivateFieldLooseKey("informAndEmit");
var _checkRequiredMetaFieldsOnFile = /*#__PURE__*/ _classPrivateFieldLooseKey("checkRequiredMetaFieldsOnFile");
var _checkRequiredMetaFields = /*#__PURE__*/ _classPrivateFieldLooseKey("checkRequiredMetaFields");
var _assertNewUploadAllowed = /*#__PURE__*/ _classPrivateFieldLooseKey("assertNewUploadAllowed");
var _transformFile = /*#__PURE__*/ _classPrivateFieldLooseKey("transformFile");
var _startIfAutoProceed = /*#__PURE__*/ _classPrivateFieldLooseKey("startIfAutoProceed");
var _checkAndUpdateFileState = /*#__PURE__*/ _classPrivateFieldLooseKey("checkAndUpdateFileState");
var _addListeners = /*#__PURE__*/ _classPrivateFieldLooseKey("addListeners");
var _updateOnlineStatus = /*#__PURE__*/ _classPrivateFieldLooseKey("updateOnlineStatus");
var _createUpload = /*#__PURE__*/ _classPrivateFieldLooseKey("createUpload");
var _getUpload = /*#__PURE__*/ _classPrivateFieldLooseKey("getUpload");
var _removeUpload = /*#__PURE__*/ _classPrivateFieldLooseKey("removeUpload");
var _runUpload = /*#__PURE__*/ _classPrivateFieldLooseKey("runUpload");
_Symbol$for = Symbol.for("uppy test: getPlugins");
_Symbol$for2 = Symbol.for("uppy test: createUpload");
class Uppy {
    /**
   * Instantiate Uppy
   *
   * @param {object} opts — Uppy options
   */ constructor(_opts){
        /**
     * Run an upload. This picks up where it left off in case the upload is being restored.
     *
     * @private
     */ Object.defineProperty(this, _runUpload, {
            value: _runUpload2
        });
        /**
     * Remove an upload, eg. if it has been canceled or completed.
     *
     * @param {string} uploadID The ID of the upload.
     */ Object.defineProperty(this, _removeUpload, {
            value: _removeUpload2
        });
        Object.defineProperty(this, _getUpload, {
            value: _getUpload2
        });
        /**
     * Create an upload for a bunch of files.
     *
     * @param {Array<string>} fileIDs File IDs to include in this upload.
     * @returns {string} ID of this upload.
     */ Object.defineProperty(this, _createUpload, {
            value: _createUpload2
        });
        /**
     * Registers listeners for all global actions, like:
     * `error`, `file-removed`, `upload-progress`
     */ Object.defineProperty(this, _addListeners, {
            value: _addListeners2
        });
        Object.defineProperty(this, _checkAndUpdateFileState, {
            value: _checkAndUpdateFileState2
        });
        // Schedule an upload if `autoProceed` is enabled.
        Object.defineProperty(this, _startIfAutoProceed, {
            value: _startIfAutoProceed2
        });
        /**
     * Create a file state object based on user-provided `addFile()` options.
     */ Object.defineProperty(this, _transformFile, {
            value: _transformFile2
        });
        Object.defineProperty(this, _assertNewUploadAllowed, {
            value: _assertNewUploadAllowed2
        });
        Object.defineProperty(this, _checkRequiredMetaFields, {
            value: _checkRequiredMetaFields2
        });
        Object.defineProperty(this, _checkRequiredMetaFieldsOnFile, {
            value: _checkRequiredMetaFieldsOnFile2
        });
        /*
    * @constructs
    * @param { Error[] } errors
    * @param { undefined } file
    */ /*
    * @constructs
    * @param { RestrictionError } error
    */ Object.defineProperty(this, _informAndEmit, {
            value: _informAndEmit2
        });
        /** @type {Record<string, BasePlugin[]>} */ Object.defineProperty(this, _plugins, {
            writable: true,
            value: Object.create(null)
        });
        Object.defineProperty(this, _restricter, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _storeUnsubscribe, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _emitter, {
            writable: true,
            value: (0, _namespaceEmitterDefault.default)()
        });
        Object.defineProperty(this, _preProcessors, {
            writable: true,
            value: new Set()
        });
        Object.defineProperty(this, _uploaders, {
            writable: true,
            value: new Set()
        });
        Object.defineProperty(this, _postProcessors, {
            writable: true,
            value: new Set()
        });
        // ___Why throttle at 500ms?
        //    - We must throttle at >250ms for superfocus in Dashboard to work well
        //    (because animation takes 0.25s, and we want to wait for all animations to be over before refocusing).
        //    [Practical Check]: if thottle is at 100ms, then if you are uploading a file,
        //    and click 'ADD MORE FILES', - focus won't activate in Firefox.
        //    - We must throttle at around >500ms to avoid performance lags.
        //    [Practical Check] Firefox, try to upload a big file for a prolonged period of time. Laptop will start to heat up.
        this.calculateProgress = (0, _throttleJsDefault.default)((file, data)=>{
            const fileInState = this.getFile(file == null ? void 0 : file.id);
            if (file == null || !fileInState) {
                this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
                return;
            }
            if (fileInState.progress.percentage === 100) {
                this.log(`Not setting progress for a file that has been already uploaded: ${file.id}`);
                return;
            }
            // bytesTotal may be null or zero; in that case we can't divide by it
            const canHavePercentage = Number.isFinite(data.bytesTotal) && data.bytesTotal > 0;
            this.setFileState(file.id, {
                progress: {
                    ...fileInState.progress,
                    bytesUploaded: data.bytesUploaded,
                    bytesTotal: data.bytesTotal,
                    percentage: canHavePercentage ? Math.round(data.bytesUploaded / data.bytesTotal * 100) : 0
                }
            });
            this.calculateTotalProgress();
        }, 500, {
            leading: true,
            trailing: true
        });
        Object.defineProperty(this, _updateOnlineStatus, {
            writable: true,
            value: this.updateOnlineStatus.bind(this)
        });
        this.defaultLocale = (0, _localeJsDefault.default);
        const defaultOptions = {
            id: "uppy",
            autoProceed: false,
            allowMultipleUploadBatches: true,
            debug: false,
            restrictions: (0, _restricterJs.defaultOptions),
            meta: {},
            onBeforeFileAdded: (file, files)=>!Object.hasOwn(files, file.id),
            onBeforeUpload: (files)=>files,
            store: new (0, _storeDefaultDefault.default)(),
            logger: (0, _loggersJs.justErrorsLogger),
            infoTimeout: 5000
        };
        // Merge default options with the ones set by user,
        // making sure to merge restrictions too
        this.opts = {
            ...defaultOptions,
            ..._opts,
            restrictions: {
                ...defaultOptions.restrictions,
                ..._opts && _opts.restrictions
            }
        };
        // Support debug: true for backwards-compatability, unless logger is set in opts
        // opts instead of this.opts to avoid comparing objects — we set logger: justErrorsLogger in defaultOptions
        if (_opts && _opts.logger && _opts.debug) this.log("You are using a custom `logger`, but also set `debug: true`, which uses built-in logger to output logs to console. Ignoring `debug: true` and using your custom `logger`.", "warning");
        else if (_opts && _opts.debug) this.opts.logger = (0, _loggersJs.debugLogger);
        this.log(`Using Core v${this.constructor.VERSION}`);
        this.i18nInit();
        this.store = this.opts.store;
        this.setState({
            plugins: {},
            files: {},
            currentUploads: {},
            allowNewUpload: true,
            capabilities: {
                uploadProgress: (0, _supportsUploadProgressJsDefault.default)(),
                individualCancellation: true,
                resumableUploads: false
            },
            totalProgress: 0,
            meta: {
                ...this.opts.meta
            },
            info: [],
            recoveredState: null
        });
        _classPrivateFieldLooseBase(this, _restricter)[_restricter] = new (0, _restricterJs.Restricter)(()=>this.opts, this.i18n);
        _classPrivateFieldLooseBase(this, _storeUnsubscribe)[_storeUnsubscribe] = this.store.subscribe((prevState, nextState, patch)=>{
            this.emit("state-update", prevState, nextState, patch);
            this.updateAll(nextState);
        });
        // Exposing uppy object on window for debugging and testing
        if (this.opts.debug && typeof window !== "undefined") window[this.opts.id] = this;
        _classPrivateFieldLooseBase(this, _addListeners)[_addListeners]();
    }
    emit(event) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
        _classPrivateFieldLooseBase(this, _emitter)[_emitter].emit(event, ...args);
    }
    on(event, callback) {
        _classPrivateFieldLooseBase(this, _emitter)[_emitter].on(event, callback);
        return this;
    }
    once(event, callback) {
        _classPrivateFieldLooseBase(this, _emitter)[_emitter].once(event, callback);
        return this;
    }
    off(event, callback) {
        _classPrivateFieldLooseBase(this, _emitter)[_emitter].off(event, callback);
        return this;
    }
    /**
   * Iterate on all plugins and run `update` on them.
   * Called each time state changes.
   *
   */ updateAll(state) {
        this.iteratePlugins((plugin)=>{
            plugin.update(state);
        });
    }
    /**
   * Updates state with a patch
   *
   * @param {object} patch {foo: 'bar'}
   */ setState(patch) {
        this.store.setState(patch);
    }
    /**
   * Returns current state.
   *
   * @returns {object}
   */ getState() {
        return this.store.getState();
    }
    patchFilesState(filesWithNewState) {
        const existingFilesState = this.getState().files;
        this.setState({
            files: {
                ...existingFilesState,
                ...Object.fromEntries(Object.entries(filesWithNewState).map((_ref)=>{
                    let [fileID, newFileState] = _ref;
                    return [
                        fileID,
                        {
                            ...existingFilesState[fileID],
                            ...newFileState
                        }
                    ];
                }))
            }
        });
    }
    /**
   * Shorthand to set state for a specific file.
   */ setFileState(fileID, state) {
        if (!this.getState().files[fileID]) throw new Error(`Can’t set state for ${fileID} (the file could have been removed)`);
        this.patchFilesState({
            [fileID]: state
        });
    }
    i18nInit() {
        const translator = new (0, _translatorDefault.default)([
            this.defaultLocale,
            this.opts.locale
        ]);
        this.i18n = translator.translate.bind(translator);
        this.i18nArray = translator.translateArray.bind(translator);
        this.locale = translator.locale;
    }
    setOptions(newOpts) {
        this.opts = {
            ...this.opts,
            ...newOpts,
            restrictions: {
                ...this.opts.restrictions,
                ...newOpts && newOpts.restrictions
            }
        };
        if (newOpts.meta) this.setMeta(newOpts.meta);
        this.i18nInit();
        if (newOpts.locale) this.iteratePlugins((plugin)=>{
            plugin.setOptions(newOpts);
        });
        // Note: this is not the preact `setState`, it's an internal function that has the same name.
        this.setState(); // so that UI re-renders with new options
    }
    resetProgress() {
        const defaultProgress = {
            percentage: 0,
            bytesUploaded: 0,
            uploadComplete: false,
            uploadStarted: null
        };
        const files = {
            ...this.getState().files
        };
        const updatedFiles = {};
        Object.keys(files).forEach((fileID)=>{
            updatedFiles[fileID] = {
                ...files[fileID],
                progress: {
                    ...files[fileID].progress,
                    ...defaultProgress
                }
            };
        });
        this.setState({
            files: updatedFiles,
            totalProgress: 0,
            allowNewUpload: true,
            error: null,
            recoveredState: null
        });
        this.emit("reset-progress");
    }
    addPreProcessor(fn) {
        _classPrivateFieldLooseBase(this, _preProcessors)[_preProcessors].add(fn);
    }
    removePreProcessor(fn) {
        return _classPrivateFieldLooseBase(this, _preProcessors)[_preProcessors].delete(fn);
    }
    addPostProcessor(fn) {
        _classPrivateFieldLooseBase(this, _postProcessors)[_postProcessors].add(fn);
    }
    removePostProcessor(fn) {
        return _classPrivateFieldLooseBase(this, _postProcessors)[_postProcessors].delete(fn);
    }
    addUploader(fn) {
        _classPrivateFieldLooseBase(this, _uploaders)[_uploaders].add(fn);
    }
    removeUploader(fn) {
        return _classPrivateFieldLooseBase(this, _uploaders)[_uploaders].delete(fn);
    }
    setMeta(data) {
        const updatedMeta = {
            ...this.getState().meta,
            ...data
        };
        const updatedFiles = {
            ...this.getState().files
        };
        Object.keys(updatedFiles).forEach((fileID)=>{
            updatedFiles[fileID] = {
                ...updatedFiles[fileID],
                meta: {
                    ...updatedFiles[fileID].meta,
                    ...data
                }
            };
        });
        this.log("Adding metadata:");
        this.log(data);
        this.setState({
            meta: updatedMeta,
            files: updatedFiles
        });
    }
    setFileMeta(fileID, data) {
        const updatedFiles = {
            ...this.getState().files
        };
        if (!updatedFiles[fileID]) {
            this.log("Was trying to set metadata for a file that has been removed: ", fileID);
            return;
        }
        const newMeta = {
            ...updatedFiles[fileID].meta,
            ...data
        };
        updatedFiles[fileID] = {
            ...updatedFiles[fileID],
            meta: newMeta
        };
        this.setState({
            files: updatedFiles
        });
    }
    /**
   * Get a file object.
   *
   * @param {string} fileID The ID of the file object to return.
   */ getFile(fileID) {
        return this.getState().files[fileID];
    }
    /**
   * Get all files in an array.
   */ getFiles() {
        const { files } = this.getState();
        return Object.values(files);
    }
    getFilesByIds(ids) {
        return ids.map((id)=>this.getFile(id));
    }
    getObjectOfFilesPerState() {
        const { files: filesObject, totalProgress, error } = this.getState();
        const files = Object.values(filesObject);
        const inProgressFiles = files.filter((_ref2)=>{
            let { progress } = _ref2;
            return !progress.uploadComplete && progress.uploadStarted;
        });
        const newFiles = files.filter((file)=>!file.progress.uploadStarted);
        const startedFiles = files.filter((file)=>file.progress.uploadStarted || file.progress.preprocess || file.progress.postprocess);
        const uploadStartedFiles = files.filter((file)=>file.progress.uploadStarted);
        const pausedFiles = files.filter((file)=>file.isPaused);
        const completeFiles = files.filter((file)=>file.progress.uploadComplete);
        const erroredFiles = files.filter((file)=>file.error);
        const inProgressNotPausedFiles = inProgressFiles.filter((file)=>!file.isPaused);
        const processingFiles = files.filter((file)=>file.progress.preprocess || file.progress.postprocess);
        return {
            newFiles,
            startedFiles,
            uploadStartedFiles,
            pausedFiles,
            completeFiles,
            erroredFiles,
            inProgressFiles,
            inProgressNotPausedFiles,
            processingFiles,
            isUploadStarted: uploadStartedFiles.length > 0,
            isAllComplete: totalProgress === 100 && completeFiles.length === files.length && processingFiles.length === 0,
            isAllErrored: !!error && erroredFiles.length === files.length,
            isAllPaused: inProgressFiles.length !== 0 && pausedFiles.length === inProgressFiles.length,
            isUploadInProgress: inProgressFiles.length > 0,
            isSomeGhost: files.some((file)=>file.isGhost)
        };
    }
    validateRestrictions(file, files) {
        if (files === void 0) files = this.getFiles();
        try {
            _classPrivateFieldLooseBase(this, _restricter)[_restricter].validate(files, [
                file
            ]);
        } catch (err) {
            return err;
        }
        return null;
    }
    checkIfFileAlreadyExists(fileID) {
        const { files } = this.getState();
        if (files[fileID] && !files[fileID].isGhost) return true;
        return false;
    }
    /**
   * Add a new file to `state.files`. This will run `onBeforeFileAdded`,
   * try to guess file type in a clever way, check file against restrictions,
   * and start an upload if `autoProceed === true`.
   *
   * @param {object} file object to add
   * @returns {string} id for the added file
   */ addFile(file) {
        _classPrivateFieldLooseBase(this, _assertNewUploadAllowed)[_assertNewUploadAllowed](file);
        const { nextFilesState, validFilesToAdd, errors } = _classPrivateFieldLooseBase(this, _checkAndUpdateFileState)[_checkAndUpdateFileState]([
            file
        ]);
        const restrictionErrors = errors.filter((error)=>error.isRestriction);
        _classPrivateFieldLooseBase(this, _informAndEmit)[_informAndEmit](restrictionErrors);
        if (errors.length > 0) throw errors[0];
        this.setState({
            files: nextFilesState
        });
        const [firstValidFileToAdd] = validFilesToAdd;
        this.emit("file-added", firstValidFileToAdd);
        this.emit("files-added", validFilesToAdd);
        this.log(`Added file: ${firstValidFileToAdd.name}, ${firstValidFileToAdd.id}, mime type: ${firstValidFileToAdd.type}`);
        _classPrivateFieldLooseBase(this, _startIfAutoProceed)[_startIfAutoProceed]();
        return firstValidFileToAdd.id;
    }
    /**
   * Add multiple files to `state.files`. See the `addFile()` documentation.
   *
   * If an error occurs while adding a file, it is logged and the user is notified.
   * This is good for UI plugins, but not for programmatic use.
   * Programmatic users should usually still use `addFile()` on individual files.
   */ addFiles(fileDescriptors) {
        _classPrivateFieldLooseBase(this, _assertNewUploadAllowed)[_assertNewUploadAllowed]();
        const { nextFilesState, validFilesToAdd, errors } = _classPrivateFieldLooseBase(this, _checkAndUpdateFileState)[_checkAndUpdateFileState](fileDescriptors);
        const restrictionErrors = errors.filter((error)=>error.isRestriction);
        _classPrivateFieldLooseBase(this, _informAndEmit)[_informAndEmit](restrictionErrors);
        const nonRestrictionErrors = errors.filter((error)=>!error.isRestriction);
        if (nonRestrictionErrors.length > 0) {
            let message = "Multiple errors occurred while adding files:\n";
            nonRestrictionErrors.forEach((subError)=>{
                message += `\n * ${subError.message}`;
            });
            this.info({
                message: this.i18n("addBulkFilesFailed", {
                    smart_count: nonRestrictionErrors.length
                }),
                details: message
            }, "error", this.opts.infoTimeout);
            if (typeof AggregateError === "function") throw new AggregateError(nonRestrictionErrors, message);
            else {
                const err = new Error(message);
                err.errors = nonRestrictionErrors;
                throw err;
            }
        }
        // OK, we haven't thrown an error, we can start updating state and emitting events now:
        this.setState({
            files: nextFilesState
        });
        validFilesToAdd.forEach((file)=>{
            this.emit("file-added", file);
        });
        this.emit("files-added", validFilesToAdd);
        if (validFilesToAdd.length > 5) this.log(`Added batch of ${validFilesToAdd.length} files`);
        else Object.values(validFilesToAdd).forEach((file)=>{
            this.log(`Added file: ${file.name}\n id: ${file.id}\n type: ${file.type}`);
        });
        if (validFilesToAdd.length > 0) _classPrivateFieldLooseBase(this, _startIfAutoProceed)[_startIfAutoProceed]();
    }
    removeFiles(fileIDs, reason) {
        const { files, currentUploads } = this.getState();
        const updatedFiles = {
            ...files
        };
        const updatedUploads = {
            ...currentUploads
        };
        const removedFiles = Object.create(null);
        fileIDs.forEach((fileID)=>{
            if (files[fileID]) {
                removedFiles[fileID] = files[fileID];
                delete updatedFiles[fileID];
            }
        });
        // Remove files from the `fileIDs` list in each upload.
        function fileIsNotRemoved(uploadFileID) {
            return removedFiles[uploadFileID] === undefined;
        }
        Object.keys(updatedUploads).forEach((uploadID)=>{
            const newFileIDs = currentUploads[uploadID].fileIDs.filter(fileIsNotRemoved);
            // Remove the upload if no files are associated with it anymore.
            if (newFileIDs.length === 0) {
                delete updatedUploads[uploadID];
                return;
            }
            const { capabilities } = this.getState();
            if (newFileIDs.length !== currentUploads[uploadID].fileIDs.length && !capabilities.individualCancellation) throw new Error("individualCancellation is disabled");
            updatedUploads[uploadID] = {
                ...currentUploads[uploadID],
                fileIDs: newFileIDs
            };
        });
        const stateUpdate = {
            currentUploads: updatedUploads,
            files: updatedFiles
        };
        // If all files were removed - allow new uploads,
        // and clear recoveredState
        if (Object.keys(updatedFiles).length === 0) {
            stateUpdate.allowNewUpload = true;
            stateUpdate.error = null;
            stateUpdate.recoveredState = null;
        }
        this.setState(stateUpdate);
        this.calculateTotalProgress();
        const removedFileIDs = Object.keys(removedFiles);
        removedFileIDs.forEach((fileID)=>{
            this.emit("file-removed", removedFiles[fileID], reason);
        });
        if (removedFileIDs.length > 5) this.log(`Removed ${removedFileIDs.length} files`);
        else this.log(`Removed files: ${removedFileIDs.join(", ")}`);
    }
    removeFile(fileID, reason) {
        if (reason === void 0) reason = null;
        this.removeFiles([
            fileID
        ], reason);
    }
    pauseResume(fileID) {
        if (!this.getState().capabilities.resumableUploads || this.getFile(fileID).uploadComplete) return undefined;
        const wasPaused = this.getFile(fileID).isPaused || false;
        const isPaused = !wasPaused;
        this.setFileState(fileID, {
            isPaused
        });
        this.emit("upload-pause", fileID, isPaused);
        return isPaused;
    }
    pauseAll() {
        const updatedFiles = {
            ...this.getState().files
        };
        const inProgressUpdatedFiles = Object.keys(updatedFiles).filter((file)=>{
            return !updatedFiles[file].progress.uploadComplete && updatedFiles[file].progress.uploadStarted;
        });
        inProgressUpdatedFiles.forEach((file)=>{
            const updatedFile = {
                ...updatedFiles[file],
                isPaused: true
            };
            updatedFiles[file] = updatedFile;
        });
        this.setState({
            files: updatedFiles
        });
        this.emit("pause-all");
    }
    resumeAll() {
        const updatedFiles = {
            ...this.getState().files
        };
        const inProgressUpdatedFiles = Object.keys(updatedFiles).filter((file)=>{
            return !updatedFiles[file].progress.uploadComplete && updatedFiles[file].progress.uploadStarted;
        });
        inProgressUpdatedFiles.forEach((file)=>{
            const updatedFile = {
                ...updatedFiles[file],
                isPaused: false,
                error: null
            };
            updatedFiles[file] = updatedFile;
        });
        this.setState({
            files: updatedFiles
        });
        this.emit("resume-all");
    }
    retryAll() {
        const updatedFiles = {
            ...this.getState().files
        };
        const filesToRetry = Object.keys(updatedFiles).filter((file)=>{
            return updatedFiles[file].error;
        });
        filesToRetry.forEach((file)=>{
            const updatedFile = {
                ...updatedFiles[file],
                isPaused: false,
                error: null
            };
            updatedFiles[file] = updatedFile;
        });
        this.setState({
            files: updatedFiles,
            error: null
        });
        this.emit("retry-all", filesToRetry);
        if (filesToRetry.length === 0) return Promise.resolve({
            successful: [],
            failed: []
        });
        const uploadID = _classPrivateFieldLooseBase(this, _createUpload)[_createUpload](filesToRetry, {
            forceAllowNewUpload: true // create new upload even if allowNewUpload: false
        });
        return _classPrivateFieldLooseBase(this, _runUpload)[_runUpload](uploadID);
    }
    cancelAll(_temp) {
        let { reason = "user" } = _temp === void 0 ? {} : _temp;
        this.emit("cancel-all", {
            reason
        });
        // Only remove existing uploads if user is canceling
        if (reason === "user") {
            const { files } = this.getState();
            const fileIDs = Object.keys(files);
            if (fileIDs.length) this.removeFiles(fileIDs, "cancel-all");
            this.setState({
                totalProgress: 0,
                error: null,
                recoveredState: null
            });
        }
    }
    retryUpload(fileID) {
        this.setFileState(fileID, {
            error: null,
            isPaused: false
        });
        this.emit("upload-retry", fileID);
        const uploadID = _classPrivateFieldLooseBase(this, _createUpload)[_createUpload]([
            fileID
        ], {
            forceAllowNewUpload: true // create new upload even if allowNewUpload: false
        });
        return _classPrivateFieldLooseBase(this, _runUpload)[_runUpload](uploadID);
    }
    logout() {
        this.iteratePlugins((plugin)=>{
            if (plugin.provider && plugin.provider.logout) plugin.provider.logout();
        });
    }
    calculateTotalProgress() {
        // calculate total progress, using the number of files currently uploading,
        // multiplied by 100 and the summ of individual progress of each file
        const files = this.getFiles();
        const inProgress = files.filter((file)=>{
            return file.progress.uploadStarted || file.progress.preprocess || file.progress.postprocess;
        });
        if (inProgress.length === 0) {
            this.emit("progress", 0);
            this.setState({
                totalProgress: 0
            });
            return;
        }
        const sizedFiles = inProgress.filter((file)=>file.progress.bytesTotal != null);
        const unsizedFiles = inProgress.filter((file)=>file.progress.bytesTotal == null);
        if (sizedFiles.length === 0) {
            const progressMax = inProgress.length * 100;
            const currentProgress = unsizedFiles.reduce((acc, file)=>{
                return acc + file.progress.percentage;
            }, 0);
            const totalProgress = Math.round(currentProgress / progressMax * 100);
            this.setState({
                totalProgress
            });
            return;
        }
        let totalSize = sizedFiles.reduce((acc, file)=>{
            return acc + file.progress.bytesTotal;
        }, 0);
        const averageSize = totalSize / sizedFiles.length;
        totalSize += averageSize * unsizedFiles.length;
        let uploadedSize = 0;
        sizedFiles.forEach((file)=>{
            uploadedSize += file.progress.bytesUploaded;
        });
        unsizedFiles.forEach((file)=>{
            uploadedSize += averageSize * (file.progress.percentage || 0) / 100;
        });
        let totalProgress = totalSize === 0 ? 0 : Math.round(uploadedSize / totalSize * 100);
        // hot fix, because:
        // uploadedSize ended up larger than totalSize, resulting in 1325% total
        if (totalProgress > 100) totalProgress = 100;
        this.setState({
            totalProgress
        });
        this.emit("progress", totalProgress);
    }
    updateOnlineStatus() {
        const online = typeof window.navigator.onLine !== "undefined" ? window.navigator.onLine : true;
        if (!online) {
            this.emit("is-offline");
            this.info(this.i18n("noInternetConnection"), "error", 0);
            this.wasOffline = true;
        } else {
            this.emit("is-online");
            if (this.wasOffline) {
                this.emit("back-online");
                this.info(this.i18n("connectedToInternet"), "success", 3000);
                this.wasOffline = false;
            }
        }
    }
    getID() {
        return this.opts.id;
    }
    /**
   * Registers a plugin with Core.
   *
   * @param {object} Plugin object
   * @param {object} [opts] object with options to be passed to Plugin
   * @returns {object} self for chaining
   */ // eslint-disable-next-line no-shadow
    use(Plugin, opts) {
        if (typeof Plugin !== "function") {
            const msg = `Expected a plugin class, but got ${Plugin === null ? "null" : typeof Plugin}.` + " Please verify that the plugin was imported and spelled correctly.";
            throw new TypeError(msg);
        }
        // Instantiate
        const plugin = new Plugin(this, opts);
        const pluginId = plugin.id;
        if (!pluginId) throw new Error("Your plugin must have an id");
        if (!plugin.type) throw new Error("Your plugin must have a type");
        const existsPluginAlready = this.getPlugin(pluginId);
        if (existsPluginAlready) {
            const msg = `Already found a plugin named '${existsPluginAlready.id}'. ` + `Tried to use: '${pluginId}'.\n` + "Uppy plugins must have unique `id` options. See https://uppy.io/docs/plugins/#id.";
            throw new Error(msg);
        }
        if (Plugin.VERSION) this.log(`Using ${pluginId} v${Plugin.VERSION}`);
        if (plugin.type in _classPrivateFieldLooseBase(this, _plugins)[_plugins]) _classPrivateFieldLooseBase(this, _plugins)[_plugins][plugin.type].push(plugin);
        else _classPrivateFieldLooseBase(this, _plugins)[_plugins][plugin.type] = [
            plugin
        ];
        plugin.install();
        return this;
    }
    /**
   * Find one Plugin by name.
   *
   * @param {string} id plugin id
   * @returns {BasePlugin|undefined}
   */ getPlugin(id) {
        for (const plugins of Object.values(_classPrivateFieldLooseBase(this, _plugins)[_plugins])){
            const foundPlugin = plugins.find((plugin)=>plugin.id === id);
            if (foundPlugin != null) return foundPlugin;
        }
        return undefined;
    }
    [_Symbol$for](type) {
        return _classPrivateFieldLooseBase(this, _plugins)[_plugins][type];
    }
    /**
   * Iterate through all `use`d plugins.
   *
   * @param {Function} method that will be run on each plugin
   */ iteratePlugins(method) {
        Object.values(_classPrivateFieldLooseBase(this, _plugins)[_plugins]).flat(1).forEach(method);
    }
    /**
   * Uninstall and remove a plugin.
   *
   * @param {object} instance The plugin instance to remove.
   */ removePlugin(instance) {
        this.log(`Removing plugin ${instance.id}`);
        this.emit("plugin-remove", instance);
        if (instance.uninstall) instance.uninstall();
        const list = _classPrivateFieldLooseBase(this, _plugins)[_plugins][instance.type];
        // list.indexOf failed here, because Vue3 converted the plugin instance
        // to a Proxy object, which failed the strict comparison test:
        // obj !== objProxy
        const index = list.findIndex((item)=>item.id === instance.id);
        if (index !== -1) list.splice(index, 1);
        const state = this.getState();
        const updatedState = {
            plugins: {
                ...state.plugins,
                [instance.id]: undefined
            }
        };
        this.setState(updatedState);
    }
    /**
   * Uninstall all plugins and close down this Uppy instance.
   */ close(_temp2) {
        let { reason } = _temp2 === void 0 ? {} : _temp2;
        this.log(`Closing Uppy instance ${this.opts.id}: removing all files and uninstalling plugins`);
        this.cancelAll({
            reason
        });
        _classPrivateFieldLooseBase(this, _storeUnsubscribe)[_storeUnsubscribe]();
        this.iteratePlugins((plugin)=>{
            this.removePlugin(plugin);
        });
        if (typeof window !== "undefined" && window.removeEventListener) {
            window.removeEventListener("online", _classPrivateFieldLooseBase(this, _updateOnlineStatus)[_updateOnlineStatus]);
            window.removeEventListener("offline", _classPrivateFieldLooseBase(this, _updateOnlineStatus)[_updateOnlineStatus]);
        }
    }
    hideInfo() {
        const { info } = this.getState();
        this.setState({
            info: info.slice(1)
        });
        this.emit("info-hidden");
    }
    /**
   * Set info message in `state.info`, so that UI plugins like `Informer`
   * can display the message.
   *
   * @param {string | object} message Message to be displayed by the informer
   * @param {string} [type]
   * @param {number} [duration]
   */ info(message, type, duration) {
        if (type === void 0) type = "info";
        if (duration === void 0) duration = 3000;
        const isComplexMessage = typeof message === "object";
        this.setState({
            info: [
                ...this.getState().info,
                {
                    type,
                    message: isComplexMessage ? message.message : message,
                    details: isComplexMessage ? message.details : null
                }
            ]
        });
        setTimeout(()=>this.hideInfo(), duration);
        this.emit("info-visible");
    }
    /**
   * Passes messages to a function, provided in `opts.logger`.
   * If `opts.logger: Uppy.debugLogger` or `opts.debug: true`, logs to the browser console.
   *
   * @param {string|object} message to log
   * @param {string} [type] optional `error` or `warning`
   */ log(message, type) {
        const { logger } = this.opts;
        switch(type){
            case "error":
                logger.error(message);
                break;
            case "warning":
                logger.warn(message);
                break;
            default:
                logger.debug(message);
                break;
        }
    }
    /**
   * Restore an upload by its ID.
   */ restore(uploadID) {
        this.log(`Core: attempting to restore upload "${uploadID}"`);
        if (!this.getState().currentUploads[uploadID]) {
            _classPrivateFieldLooseBase(this, _removeUpload)[_removeUpload](uploadID);
            return Promise.reject(new Error("Nonexistent upload"));
        }
        return _classPrivateFieldLooseBase(this, _runUpload)[_runUpload](uploadID);
    }
    [_Symbol$for2]() {
        return _classPrivateFieldLooseBase(this, _createUpload)[_createUpload](...arguments);
    }
    /**
   * Add data to an upload's result object.
   *
   * @param {string} uploadID The ID of the upload.
   * @param {object} data Data properties to add to the result object.
   */ addResultData(uploadID, data) {
        if (!_classPrivateFieldLooseBase(this, _getUpload)[_getUpload](uploadID)) {
            this.log(`Not setting result for an upload that has been removed: ${uploadID}`);
            return;
        }
        const { currentUploads } = this.getState();
        const currentUpload = {
            ...currentUploads[uploadID],
            result: {
                ...currentUploads[uploadID].result,
                ...data
            }
        };
        this.setState({
            currentUploads: {
                ...currentUploads,
                [uploadID]: currentUpload
            }
        });
    }
    /**
   * Start an upload for all the files that are not currently being uploaded.
   *
   * @returns {Promise}
   */ upload() {
        var _classPrivateFieldLoo;
        if (!((_classPrivateFieldLoo = _classPrivateFieldLooseBase(this, _plugins)[_plugins].uploader) != null && _classPrivateFieldLoo.length)) this.log("No uploader type plugins are used", "warning");
        let { files } = this.getState();
        const onBeforeUploadResult = this.opts.onBeforeUpload(files);
        if (onBeforeUploadResult === false) return Promise.reject(new Error("Not starting the upload because onBeforeUpload returned false"));
        if (onBeforeUploadResult && typeof onBeforeUploadResult === "object") {
            files = onBeforeUploadResult;
            // Updating files in state, because uploader plugins receive file IDs,
            // and then fetch the actual file object from state
            this.setState({
                files
            });
        }
        return Promise.resolve().then(()=>_classPrivateFieldLooseBase(this, _restricter)[_restricter].validateMinNumberOfFiles(files)).catch((err)=>{
            _classPrivateFieldLooseBase(this, _informAndEmit)[_informAndEmit]([
                err
            ]);
            throw err;
        }).then(()=>{
            if (!_classPrivateFieldLooseBase(this, _checkRequiredMetaFields)[_checkRequiredMetaFields](files)) throw new (0, _restricterJs.RestrictionError)(this.i18n("missingRequiredMetaField"));
        }).catch((err)=>{
            // Doing this in a separate catch because we already emited and logged
            // all the errors in `checkRequiredMetaFields` so we only throw a generic
            // missing fields error here.
            throw err;
        }).then(()=>{
            const { currentUploads } = this.getState();
            // get a list of files that are currently assigned to uploads
            const currentlyUploadingFiles = Object.values(currentUploads).flatMap((curr)=>curr.fileIDs);
            const waitingFileIDs = [];
            Object.keys(files).forEach((fileID)=>{
                const file = this.getFile(fileID);
                // if the file hasn't started uploading and hasn't already been assigned to an upload..
                if (!file.progress.uploadStarted && currentlyUploadingFiles.indexOf(fileID) === -1) waitingFileIDs.push(file.id);
            });
            const uploadID = _classPrivateFieldLooseBase(this, _createUpload)[_createUpload](waitingFileIDs);
            return _classPrivateFieldLooseBase(this, _runUpload)[_runUpload](uploadID);
        }).catch((err)=>{
            this.emit("error", err);
            this.log(err, "error");
            throw err;
        });
    }
}
function _informAndEmit2(errors) {
    for (const error of errors){
        const { file, isRestriction } = error;
        if (isRestriction) this.emit("restriction-failed", file, error);
        else this.emit("error", error);
        this.log(error, "warning");
    }
    const userFacingErrors = errors.filter((error)=>error.isUserFacing);
    // don't flood the user: only show the first 4 toasts
    const maxNumToShow = 4;
    const firstErrors = userFacingErrors.slice(0, maxNumToShow);
    const additionalErrors = userFacingErrors.slice(maxNumToShow);
    firstErrors.forEach((_ref3)=>{
        let { message, details = "" } = _ref3;
        this.info({
            message,
            details
        }, "error", this.opts.infoTimeout);
    });
    if (additionalErrors.length > 0) this.info({
        message: this.i18n("additionalRestrictionsFailed", {
            count: additionalErrors.length
        })
    });
}
function _checkRequiredMetaFieldsOnFile2(file) {
    const { missingFields, error } = _classPrivateFieldLooseBase(this, _restricter)[_restricter].getMissingRequiredMetaFields(file);
    if (missingFields.length > 0) {
        this.setFileState(file.id, {
            missingRequiredMetaFields: missingFields
        });
        this.log(error.message);
        this.emit("restriction-failed", file, error);
        return false;
    }
    return true;
}
function _checkRequiredMetaFields2(files) {
    let success = true;
    for (const file of Object.values(files))if (!_classPrivateFieldLooseBase(this, _checkRequiredMetaFieldsOnFile)[_checkRequiredMetaFieldsOnFile](file)) success = false;
    return success;
}
function _assertNewUploadAllowed2(file) {
    const { allowNewUpload } = this.getState();
    if (allowNewUpload === false) {
        const error = new (0, _restricterJs.RestrictionError)(this.i18n("noMoreFilesAllowed"), {
            file
        });
        _classPrivateFieldLooseBase(this, _informAndEmit)[_informAndEmit]([
            error
        ]);
        throw error;
    }
}
function _transformFile2(fileDescriptorOrFile) {
    // Uppy expects files in { name, type, size, data } format.
    // If the actual File object is passed from input[type=file] or drag-drop,
    // we normalize it to match Uppy file object
    const fileDescriptor = fileDescriptorOrFile instanceof File ? {
        name: fileDescriptorOrFile.name,
        type: fileDescriptorOrFile.type,
        size: fileDescriptorOrFile.size,
        data: fileDescriptorOrFile
    } : fileDescriptorOrFile;
    const fileType = (0, _getFileTypeDefault.default)(fileDescriptor);
    const fileName = (0, _getFileNameJsDefault.default)(fileType, fileDescriptor);
    const fileExtension = (0, _getFileNameAndExtensionDefault.default)(fileName).extension;
    const isRemote = Boolean(fileDescriptor.isRemote);
    const id = (0, _generateFileID.getSafeFileId)(fileDescriptor);
    const meta = fileDescriptor.meta || {};
    meta.name = fileName;
    meta.type = fileType;
    // `null` means the size is unknown.
    const size = Number.isFinite(fileDescriptor.data.size) ? fileDescriptor.data.size : null;
    return {
        source: fileDescriptor.source || "",
        id,
        name: fileName,
        extension: fileExtension || "",
        meta: {
            ...this.getState().meta,
            ...meta
        },
        type: fileType,
        data: fileDescriptor.data,
        progress: {
            percentage: 0,
            bytesUploaded: 0,
            bytesTotal: size,
            uploadComplete: false,
            uploadStarted: null
        },
        size,
        isRemote,
        remote: fileDescriptor.remote || "",
        preview: fileDescriptor.preview
    };
}
function _startIfAutoProceed2() {
    if (this.opts.autoProceed && !this.scheduledAutoProceed) this.scheduledAutoProceed = setTimeout(()=>{
        this.scheduledAutoProceed = null;
        this.upload().catch((err)=>{
            if (!err.isRestriction) this.log(err.stack || err.message || err);
        });
    }, 4);
}
function _checkAndUpdateFileState2(filesToAdd) {
    const { files: existingFiles } = this.getState();
    // create a copy of the files object only once
    const nextFilesState = {
        ...existingFiles
    };
    const validFilesToAdd = [];
    const errors = [];
    for (const fileToAdd of filesToAdd)try {
        var _existingFiles$newFil;
        let newFile = _classPrivateFieldLooseBase(this, _transformFile)[_transformFile](fileToAdd);
        // If a file has been recovered (Golden Retriever), but we were unable to recover its data (probably too large),
        // users are asked to re-select these half-recovered files and then this method will be called again.
        // In order to keep the progress, meta and everthing else, we keep the existing file,
        // but we replace `data`, and we remove `isGhost`, because the file is no longer a ghost now
        if ((_existingFiles$newFil = existingFiles[newFile.id]) != null && _existingFiles$newFil.isGhost) {
            const { isGhost, ...existingFileState } = existingFiles[newFile.id];
            newFile = {
                ...existingFileState,
                data: fileToAdd.data
            };
            this.log(`Replaced the blob in the restored ghost file: ${newFile.name}, ${newFile.id}`);
        }
        const onBeforeFileAddedResult = this.opts.onBeforeFileAdded(newFile, nextFilesState);
        if (!onBeforeFileAddedResult && this.checkIfFileAlreadyExists(newFile.id)) throw new (0, _restricterJs.RestrictionError)(this.i18n("noDuplicates", {
            fileName: newFile.name
        }), {
            file: fileToAdd
        });
        if (onBeforeFileAddedResult === false) // Don’t show UI info for this error, as it should be done by the developer
        throw new (0, _restricterJs.RestrictionError)("Cannot add the file because onBeforeFileAdded returned false.", {
            isUserFacing: false,
            file: fileToAdd
        });
        else if (typeof onBeforeFileAddedResult === "object" && onBeforeFileAddedResult !== null) newFile = onBeforeFileAddedResult;
        _classPrivateFieldLooseBase(this, _restricter)[_restricter].validateSingleFile(newFile);
        // need to add it to the new local state immediately, so we can use the state to validate the next files too
        nextFilesState[newFile.id] = newFile;
        validFilesToAdd.push(newFile);
    } catch (err) {
        errors.push(err);
    }
    try {
        // need to run this separately because it's much more slow, so if we run it inside the for-loop it will be very slow
        // when many files are added
        _classPrivateFieldLooseBase(this, _restricter)[_restricter].validateAggregateRestrictions(Object.values(existingFiles), validFilesToAdd);
    } catch (err) {
        errors.push(err);
        // If we have any aggregate error, don't allow adding this batch
        return {
            nextFilesState: existingFiles,
            validFilesToAdd: [],
            errors
        };
    }
    return {
        nextFilesState,
        validFilesToAdd,
        errors
    };
}
function _addListeners2() {
    /**
   * @param {Error} error
   * @param {object} [file]
   * @param {object} [response]
   */ const errorHandler = (error, file, response)=>{
        let errorMsg = error.message || "Unknown error";
        if (error.details) errorMsg += ` ${error.details}`;
        this.setState({
            error: errorMsg
        });
        if (file != null && file.id in this.getState().files) this.setFileState(file.id, {
            error: errorMsg,
            response
        });
    };
    this.on("error", errorHandler);
    this.on("upload-error", (file, error, response)=>{
        errorHandler(error, file, response);
        if (typeof error === "object" && error.message) {
            this.log(error.message, "error");
            const newError = new Error(this.i18n("failedToUpload", {
                file: file == null ? void 0 : file.name
            }));
            newError.isUserFacing = true; // todo maybe don't do this with all errors?
            newError.details = error.message;
            if (error.details) newError.details += ` ${error.details}`;
            _classPrivateFieldLooseBase(this, _informAndEmit)[_informAndEmit]([
                newError
            ]);
        } else _classPrivateFieldLooseBase(this, _informAndEmit)[_informAndEmit]([
            error
        ]);
    });
    let uploadStalledWarningRecentlyEmitted;
    this.on("upload-stalled", (error, files)=>{
        const { message } = error;
        const details = files.map((file)=>file.meta.name).join(", ");
        if (!uploadStalledWarningRecentlyEmitted) {
            this.info({
                message,
                details
            }, "warning", this.opts.infoTimeout);
            uploadStalledWarningRecentlyEmitted = setTimeout(()=>{
                uploadStalledWarningRecentlyEmitted = null;
            }, this.opts.infoTimeout);
        }
        this.log(`${message} ${details}`.trim(), "warning");
    });
    this.on("upload", ()=>{
        this.setState({
            error: null
        });
    });
    const onUploadStarted = (files)=>{
        const filesFiltered = files.filter((file)=>{
            const exists = file != null && this.getFile(file.id);
            if (!exists) this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
            return exists;
        });
        const filesState = Object.fromEntries(filesFiltered.map((file)=>[
                file.id,
                {
                    progress: {
                        uploadStarted: Date.now(),
                        uploadComplete: false,
                        percentage: 0,
                        bytesUploaded: 0,
                        bytesTotal: file.size
                    }
                }
            ]));
        this.patchFilesState(filesState);
    };
    this.on("upload-start", (files)=>{
        files.forEach((file)=>{
            // todo backward compat, remove this event in a next major
            this.emit("upload-started", file);
        });
        onUploadStarted(files);
    });
    this.on("upload-progress", this.calculateProgress);
    this.on("upload-success", (file, uploadResp)=>{
        if (file == null || !this.getFile(file.id)) {
            this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
            return;
        }
        const currentProgress = this.getFile(file.id).progress;
        this.setFileState(file.id, {
            progress: {
                ...currentProgress,
                postprocess: _classPrivateFieldLooseBase(this, _postProcessors)[_postProcessors].size > 0 ? {
                    mode: "indeterminate"
                } : null,
                uploadComplete: true,
                percentage: 100,
                bytesUploaded: currentProgress.bytesTotal
            },
            response: uploadResp,
            uploadURL: uploadResp.uploadURL,
            isPaused: false
        });
        // Remote providers sometimes don't tell us the file size,
        // but we can know how many bytes we uploaded once the upload is complete.
        if (file.size == null) this.setFileState(file.id, {
            size: uploadResp.bytesUploaded || currentProgress.bytesTotal
        });
        this.calculateTotalProgress();
    });
    this.on("preprocess-progress", (file, progress)=>{
        if (file == null || !this.getFile(file.id)) {
            this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
            return;
        }
        this.setFileState(file.id, {
            progress: {
                ...this.getFile(file.id).progress,
                preprocess: progress
            }
        });
    });
    this.on("preprocess-complete", (file)=>{
        if (file == null || !this.getFile(file.id)) {
            this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
            return;
        }
        const files = {
            ...this.getState().files
        };
        files[file.id] = {
            ...files[file.id],
            progress: {
                ...files[file.id].progress
            }
        };
        delete files[file.id].progress.preprocess;
        this.setState({
            files
        });
    });
    this.on("postprocess-progress", (file, progress)=>{
        if (file == null || !this.getFile(file.id)) {
            this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
            return;
        }
        this.setFileState(file.id, {
            progress: {
                ...this.getState().files[file.id].progress,
                postprocess: progress
            }
        });
    });
    this.on("postprocess-complete", (file)=>{
        if (file == null || !this.getFile(file.id)) {
            this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
            return;
        }
        const files = {
            ...this.getState().files
        };
        files[file.id] = {
            ...files[file.id],
            progress: {
                ...files[file.id].progress
            }
        };
        delete files[file.id].progress.postprocess;
        this.setState({
            files
        });
    });
    this.on("restored", ()=>{
        // Files may have changed--ensure progress is still accurate.
        this.calculateTotalProgress();
    });
    this.on("dashboard:file-edit-complete", (file)=>{
        if (file) _classPrivateFieldLooseBase(this, _checkRequiredMetaFieldsOnFile)[_checkRequiredMetaFieldsOnFile](file);
    });
    // show informer if offline
    if (typeof window !== "undefined" && window.addEventListener) {
        window.addEventListener("online", _classPrivateFieldLooseBase(this, _updateOnlineStatus)[_updateOnlineStatus]);
        window.addEventListener("offline", _classPrivateFieldLooseBase(this, _updateOnlineStatus)[_updateOnlineStatus]);
        setTimeout(_classPrivateFieldLooseBase(this, _updateOnlineStatus)[_updateOnlineStatus], 3000);
    }
}
function _createUpload2(fileIDs, opts) {
    if (opts === void 0) opts = {};
    // uppy.retryAll sets this to true — when retrying we want to ignore `allowNewUpload: false`
    const { forceAllowNewUpload = false } = opts;
    const { allowNewUpload, currentUploads } = this.getState();
    if (!allowNewUpload && !forceAllowNewUpload) throw new Error("Cannot create a new upload: already uploading.");
    const uploadID = (0, _nonSecure.nanoid)();
    this.emit("upload", {
        id: uploadID,
        fileIDs
    });
    this.setState({
        allowNewUpload: this.opts.allowMultipleUploadBatches !== false && this.opts.allowMultipleUploads !== false,
        currentUploads: {
            ...currentUploads,
            [uploadID]: {
                fileIDs,
                step: 0,
                result: {}
            }
        }
    });
    return uploadID;
}
function _getUpload2(uploadID) {
    const { currentUploads } = this.getState();
    return currentUploads[uploadID];
}
function _removeUpload2(uploadID) {
    const currentUploads = {
        ...this.getState().currentUploads
    };
    delete currentUploads[uploadID];
    this.setState({
        currentUploads
    });
}
async function _runUpload2(uploadID) {
    const getCurrentUpload = ()=>{
        const { currentUploads } = this.getState();
        return currentUploads[uploadID];
    };
    let currentUpload = getCurrentUpload();
    const steps = [
        ..._classPrivateFieldLooseBase(this, _preProcessors)[_preProcessors],
        ..._classPrivateFieldLooseBase(this, _uploaders)[_uploaders],
        ..._classPrivateFieldLooseBase(this, _postProcessors)[_postProcessors]
    ];
    try {
        for(let step = currentUpload.step || 0; step < steps.length; step++){
            if (!currentUpload) break;
            const fn = steps[step];
            this.setState({
                currentUploads: {
                    ...this.getState().currentUploads,
                    [uploadID]: {
                        ...currentUpload,
                        step
                    }
                }
            });
            const { fileIDs } = currentUpload;
            // TODO give this the `updatedUpload` object as its only parameter maybe?
            // Otherwise when more metadata may be added to the upload this would keep getting more parameters
            await fn(fileIDs, uploadID);
            // Update currentUpload value in case it was modified asynchronously.
            currentUpload = getCurrentUpload();
        }
    } catch (err) {
        _classPrivateFieldLooseBase(this, _removeUpload)[_removeUpload](uploadID);
        throw err;
    }
    // Set result data.
    if (currentUpload) {
        // Mark postprocessing step as complete if necessary; this addresses a case where we might get
        // stuck in the postprocessing UI while the upload is fully complete.
        // If the postprocessing steps do not do any work, they may not emit postprocessing events at
        // all, and never mark the postprocessing as complete. This is fine on its own but we
        // introduced code in the @uppy/core upload-success handler to prepare postprocessing progress
        // state if any postprocessors are registered. That is to avoid a "flash of completed state"
        // before the postprocessing plugins can emit events.
        //
        // So, just in case an upload with postprocessing plugins *has* completed *without* emitting
        // postprocessing completion, we do it instead.
        currentUpload.fileIDs.forEach((fileID)=>{
            const file = this.getFile(fileID);
            if (file && file.progress.postprocess) this.emit("postprocess-complete", file);
        });
        const files = currentUpload.fileIDs.map((fileID)=>this.getFile(fileID));
        const successful = files.filter((file)=>!file.error);
        const failed = files.filter((file)=>file.error);
        await this.addResultData(uploadID, {
            successful,
            failed,
            uploadID
        });
        // Update currentUpload value in case it was modified asynchronously.
        currentUpload = getCurrentUpload();
    }
    // Emit completion events.
    // This is in a separate function so that the `currentUploads` variable
    // always refers to the latest state. In the handler right above it refers
    // to an outdated object without the `.result` property.
    let result;
    if (currentUpload) {
        result = currentUpload.result;
        this.emit("complete", result);
        _classPrivateFieldLooseBase(this, _removeUpload)[_removeUpload](uploadID);
    }
    if (result == null) this.log(`Not setting result for an upload that has been removed: ${uploadID}`);
    return result;
}
Uppy.VERSION = packageJson.version;
exports.default = Uppy;

},{"@uppy/utils/lib/Translator":"drNUc","namespace-emitter":"aodWM","nanoid/non-secure":"fO50M","lodash/throttle.js":"lAb0D","@uppy/store-default":"9plqC","@uppy/utils/lib/getFileType":"6iuDp","@uppy/utils/lib/getFileNameAndExtension":"5OTD9","@uppy/utils/lib/generateFileID":"j5zUd","./supportsUploadProgress.js":"3cWhh","./getFileName.js":"b7dcc","./loggers.js":"9mylM","./Restricter.js":"7azxx","./locale.js":"2pFtF","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"drNUc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hasPropertyJs = require("./hasProperty.js");
var _hasPropertyJsDefault = parcelHelpers.interopDefault(_hasPropertyJs);
function _classPrivateFieldLooseBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) throw new TypeError("attempted to use private field on non-instance");
    return receiver;
}
var id = 0;
function _classPrivateFieldLooseKey(name) {
    return "__private_" + id++ + "_" + name;
}
function insertReplacement(source, rx, replacement) {
    const newParts = [];
    source.forEach((chunk)=>{
        // When the source contains multiple placeholders for interpolation,
        // we should ignore chunks that are not strings, because those
        // can be JSX objects and will be otherwise incorrectly turned into strings.
        // Without this condition we’d get this: [object Object] hello [object Object] my <button>
        if (typeof chunk !== "string") return newParts.push(chunk);
        return rx[Symbol.split](chunk).forEach((raw, i, list)=>{
            if (raw !== "") newParts.push(raw);
            // Interlace with the `replacement` value
            if (i < list.length - 1) newParts.push(replacement);
        });
    });
    return newParts;
}
/**
 * Takes a string with placeholder variables like `%{smart_count} file selected`
 * and replaces it with values from options `{smart_count: 5}`
 *
 * @license https://github.com/airbnb/polyglot.js/blob/master/LICENSE
 * taken from https://github.com/airbnb/polyglot.js/blob/master/lib/polyglot.js#L299
 *
 * @param {string} phrase that needs interpolation, with placeholders
 * @param {object} options with values that will be used to replace placeholders
 * @returns {any[]} interpolated
 */ function interpolate(phrase, options) {
    const dollarRegex = /\$/g;
    const dollarBillsYall = "$$$$";
    let interpolated = [
        phrase
    ];
    if (options == null) return interpolated;
    for (const arg of Object.keys(options))if (arg !== "_") {
        // Ensure replacement value is escaped to prevent special $-prefixed
        // regex replace tokens. the "$$$$" is needed because each "$" needs to
        // be escaped with "$" itself, and we need two in the resulting output.
        let replacement = options[arg];
        if (typeof replacement === "string") replacement = dollarRegex[Symbol.replace](replacement, dollarBillsYall);
        // We create a new `RegExp` each time instead of using a more-efficient
        // string replace so that the same argument can be replaced multiple times
        // in the same phrase.
        interpolated = insertReplacement(interpolated, new RegExp(`%\\{${arg}\\}`, "g"), replacement);
    }
    return interpolated;
}
/**
 * Translates strings with interpolation & pluralization support.
 * Extensible with custom dictionaries and pluralization functions.
 *
 * Borrows heavily from and inspired by Polyglot https://github.com/airbnb/polyglot.js,
 * basically a stripped-down version of it. Differences: pluralization functions are not hardcoded
 * and can be easily added among with dictionaries, nested objects are used for pluralization
 * as opposed to `||||` delimeter
 *
 * Usage example: `translator.translate('files_chosen', {smart_count: 3})`
 */ var _apply = /*#__PURE__*/ _classPrivateFieldLooseKey("apply");
class Translator {
    /**
   * @param {object|Array<object>} locales - locale or list of locales.
   */ constructor(locales){
        Object.defineProperty(this, _apply, {
            value: _apply2
        });
        this.locale = {
            strings: {},
            pluralize (n) {
                if (n === 1) return 0;
                return 1;
            }
        };
        if (Array.isArray(locales)) locales.forEach(_classPrivateFieldLooseBase(this, _apply)[_apply], this);
        else _classPrivateFieldLooseBase(this, _apply)[_apply](locales);
    }
    /**
   * Public translate method
   *
   * @param {string} key
   * @param {object} options with values that will be used later to replace placeholders in string
   * @returns {string} translated (and interpolated)
   */ translate(key, options) {
        return this.translateArray(key, options).join("");
    }
    /**
   * Get a translation and return the translated and interpolated parts as an array.
   *
   * @param {string} key
   * @param {object} options with values that will be used to replace placeholders
   * @returns {Array} The translated and interpolated parts, in order.
   */ translateArray(key, options) {
        if (!(0, _hasPropertyJsDefault.default)(this.locale.strings, key)) throw new Error(`missing string: ${key}`);
        const string = this.locale.strings[key];
        const hasPluralForms = typeof string === "object";
        if (hasPluralForms) {
            if (options && typeof options.smart_count !== "undefined") {
                const plural = this.locale.pluralize(options.smart_count);
                return interpolate(string[plural], options);
            }
            throw new Error("Attempted to use a string with plural forms, but no value was given for %{smart_count}");
        }
        return interpolate(string, options);
    }
}
exports.default = Translator;
function _apply2(locale) {
    if (!(locale != null && locale.strings)) return;
    const prevLocale = this.locale;
    this.locale = {
        ...prevLocale,
        strings: {
            ...prevLocale.strings,
            ...locale.strings
        }
    };
    this.locale.pluralize = locale.pluralize || prevLocale.pluralize;
}

},{"./hasProperty.js":"klmpU","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"klmpU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>has);
function has(object, key) {
    return Object.prototype.hasOwnProperty.call(object, key);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"dIF6m":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"aodWM":[function(require,module,exports) {
/**
* Create an event emitter with namespaces
* @name createNamespaceEmitter
* @example
* var emitter = require('./index')()
*
* emitter.on('*', function () {
*   console.log('all events emitted', this.event)
* })
*
* emitter.on('example', function () {
*   console.log('example event emitted')
* })
*/ module.exports = function createNamespaceEmitter() {
    var emitter = {};
    var _fns = emitter._fns = {};
    /**
  * Emit an event. Optionally namespace the event. Handlers are fired in the order in which they were added with exact matches taking precedence. Separate the namespace and event with a `:`
  * @name emit
  * @param {String} event – the name of the event, with optional namespace
  * @param {...*} data – up to 6 arguments that are passed to the event listener
  * @example
  * emitter.emit('example')
  * emitter.emit('demo:test')
  * emitter.emit('data', { example: true}, 'a string', 1)
  */ emitter.emit = function emit(event, arg1, arg2, arg3, arg4, arg5, arg6) {
        var toEmit = getListeners(event);
        if (toEmit.length) emitAll(event, toEmit, [
            arg1,
            arg2,
            arg3,
            arg4,
            arg5,
            arg6
        ]);
    };
    /**
  * Create en event listener.
  * @name on
  * @param {String} event
  * @param {Function} fn
  * @example
  * emitter.on('example', function () {})
  * emitter.on('demo', function () {})
  */ emitter.on = function on(event, fn) {
        if (!_fns[event]) _fns[event] = [];
        _fns[event].push(fn);
    };
    /**
  * Create en event listener that fires once.
  * @name once
  * @param {String} event
  * @param {Function} fn
  * @example
  * emitter.once('example', function () {})
  * emitter.once('demo', function () {})
  */ emitter.once = function once(event, fn) {
        function one() {
            fn.apply(this, arguments);
            emitter.off(event, one);
        }
        this.on(event, one);
    };
    /**
  * Stop listening to an event. Stop all listeners on an event by only passing the event name. Stop a single listener by passing that event handler as a callback.
  * You must be explicit about what will be unsubscribed: `emitter.off('demo')` will unsubscribe an `emitter.on('demo')` listener,
  * `emitter.off('demo:example')` will unsubscribe an `emitter.on('demo:example')` listener
  * @name off
  * @param {String} event
  * @param {Function} [fn] – the specific handler
  * @example
  * emitter.off('example')
  * emitter.off('demo', function () {})
  */ emitter.off = function off(event, fn) {
        var keep = [];
        if (event && fn) {
            var fns = this._fns[event];
            var i = 0;
            var l = fns ? fns.length : 0;
            for(i; i < l; i++)if (fns[i] !== fn) keep.push(fns[i]);
        }
        keep.length ? this._fns[event] = keep : delete this._fns[event];
    };
    function getListeners(e) {
        var out = _fns[e] ? _fns[e] : [];
        var idx = e.indexOf(":");
        var args = idx === -1 ? [
            e
        ] : [
            e.substring(0, idx),
            e.substring(idx + 1)
        ];
        var keys = Object.keys(_fns);
        var i = 0;
        var l = keys.length;
        for(i; i < l; i++){
            var key = keys[i];
            if (key === "*") out = out.concat(_fns[key]);
            if (args.length === 2 && args[0] === key) {
                out = out.concat(_fns[key]);
                break;
            }
        }
        return out;
    }
    function emitAll(e, fns, args) {
        var i = 0;
        var l = fns.length;
        for(i; i < l; i++){
            if (!fns[i]) break;
            fns[i].event = e;
            fns[i].apply(fns[i], args);
        }
    }
    return emitter;
};

},{}],"fO50M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "customAlphabet", ()=>customAlphabet);
parcelHelpers.export(exports, "nanoid", ()=>nanoid);
let urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let customAlphabet = (alphabet, defaultSize = 21)=>{
    return (size = defaultSize)=>{
        let id = "";
        let i = size;
        while(i--)id += alphabet[Math.random() * alphabet.length | 0];
        return id;
    };
};
let nanoid = (size = 21)=>{
    let id = "";
    let i = size;
    while(i--)id += urlAlphabet[Math.random() * 64 | 0];
    return id;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"lAb0D":[function(require,module,exports) {
var debounce = require("5b383646e2c7b4c6"), isObject = require("a29ce0b3e78d037d");
/** Error message constants. */ var FUNC_ERROR_TEXT = "Expected a function";
/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */ function throttle(func, wait, options) {
    var leading = true, trailing = true;
    if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
    if (isObject(options)) {
        leading = "leading" in options ? !!options.leading : leading;
        trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    return debounce(func, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
    });
}
module.exports = throttle;

},{"5b383646e2c7b4c6":"bv6vy","a29ce0b3e78d037d":"cGhqJ"}],"bv6vy":[function(require,module,exports) {
var isObject = require("3b174a999d6a40ac"), now = require("575b2317167ce20d"), toNumber = require("a13332670c5c0f63");
/** Error message constants. */ var FUNC_ERROR_TEXT = "Expected a function";
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max, nativeMin = Math.min;
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */ function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }
    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) return trailingEdge(time);
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
        timerId = undefined;
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) return invokeFunc(time);
        lastArgs = lastThis = undefined;
        return result;
    }
    function cancel() {
        if (timerId !== undefined) clearTimeout(timerId);
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function flush() {
        return timerId === undefined ? result : trailingEdge(now());
    }
    function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (timerId === undefined) return leadingEdge(lastCallTime);
            if (maxing) {
                // Handle invocations in a tight loop.
                clearTimeout(timerId);
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) timerId = setTimeout(timerExpired, wait);
        return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
}
module.exports = debounce;

},{"3b174a999d6a40ac":"cGhqJ","575b2317167ce20d":"kOH6e","a13332670c5c0f63":"12NaH"}],"cGhqJ":[function(require,module,exports) {
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
}
module.exports = isObject;

},{}],"kOH6e":[function(require,module,exports) {
var root = require("6439589d9d88d885");
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */ var now = function() {
    return root.Date.now();
};
module.exports = now;

},{"6439589d9d88d885":"dSYUs"}],"dSYUs":[function(require,module,exports) {
var freeGlobal = require("cd92e8811deaabf5");
/** Detect free variable `self`. */ var freeSelf = typeof self == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function("return this")();
module.exports = root;

},{"cd92e8811deaabf5":"kAk32"}],"kAk32":[function(require,module,exports) {
/** Detect free variable `global` from Node.js. */ var global = arguments[3];
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
module.exports = freeGlobal;

},{}],"12NaH":[function(require,module,exports) {
var baseTrim = require("261e89907fb89d78"), isObject = require("faaa289d287a34a5"), isSymbol = require("47b3bd23f771891");
/** Used as references for various `Number` constants. */ var NAN = 0 / 0;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == "number") return value;
    if (isSymbol(value)) return NAN;
    if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
    }
    if (typeof value != "string") return value === 0 ? value : +value;
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = toNumber;

},{"261e89907fb89d78":"eUJZ3","faaa289d287a34a5":"cGhqJ","47b3bd23f771891":"i3BHC"}],"eUJZ3":[function(require,module,exports) {
var trimmedEndIndex = require("985d3c9be7b51937");
/** Used to match leading whitespace. */ var reTrimStart = /^\s+/;
/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */ function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
module.exports = baseTrim;

},{"985d3c9be7b51937":"hHJmS"}],"hHJmS":[function(require,module,exports) {
/** Used to match a single whitespace character. */ var reWhitespace = /\s/;
/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */ function trimmedEndIndex(string) {
    var index = string.length;
    while(index-- && reWhitespace.test(string.charAt(index)));
    return index;
}
module.exports = trimmedEndIndex;

},{}],"i3BHC":[function(require,module,exports) {
var baseGetTag = require("6118c0d5630f51ce"), isObjectLike = require("74644060ad1a1d3c");
/** `Object#toString` result references. */ var symbolTag = "[object Symbol]";
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
module.exports = isSymbol;

},{"6118c0d5630f51ce":"lOnbo","74644060ad1a1d3c":"3BLi4"}],"lOnbo":[function(require,module,exports) {
var Symbol = require("68a84eb98c5d3fa2"), getRawTag = require("9b2aaf31b7bdd837"), objectToString = require("46d5beb3375f8a28");
/** `Object#toString` result references. */ var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
/** Built-in value references. */ var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    if (value == null) return value === undefined ? undefinedTag : nullTag;
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
module.exports = baseGetTag;

},{"68a84eb98c5d3fa2":"7lsL9","9b2aaf31b7bdd837":"995sO","46d5beb3375f8a28":"bmE3g"}],"7lsL9":[function(require,module,exports) {
var root = require("9ff1abd51ad45ac0");
/** Built-in value references. */ var Symbol = root.Symbol;
module.exports = Symbol;

},{"9ff1abd51ad45ac0":"dSYUs"}],"995sO":[function(require,module,exports) {
var Symbol = require("e9b4533b2a68f814");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/** Built-in value references. */ var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
        value[symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) value[symToStringTag] = tag;
        else delete value[symToStringTag];
    }
    return result;
}
module.exports = getRawTag;

},{"e9b4533b2a68f814":"7lsL9"}],"bmE3g":[function(require,module,exports) {
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
    return nativeObjectToString.call(value);
}
module.exports = objectToString;

},{}],"3BLi4":[function(require,module,exports) {
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return value != null && typeof value == "object";
}
module.exports = isObjectLike;

},{}],"9plqC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateFieldLooseBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) throw new TypeError("attempted to use private field on non-instance");
    return receiver;
}
var id = 0;
function _classPrivateFieldLooseKey(name) {
    return "__private_" + id++ + "_" + name;
}
const packageJson = {
    "version": "3.0.4"
};
/**
 * Default store that keeps state in a simple object.
 */ var _callbacks = /*#__PURE__*/ _classPrivateFieldLooseKey("callbacks");
var _publish = /*#__PURE__*/ _classPrivateFieldLooseKey("publish");
class DefaultStore {
    constructor(){
        Object.defineProperty(this, _publish, {
            value: _publish2
        });
        Object.defineProperty(this, _callbacks, {
            writable: true,
            value: new Set()
        });
        this.state = {};
    }
    getState() {
        return this.state;
    }
    setState(patch) {
        const prevState = {
            ...this.state
        };
        const nextState = {
            ...this.state,
            ...patch
        };
        this.state = nextState;
        _classPrivateFieldLooseBase(this, _publish)[_publish](prevState, nextState, patch);
    }
    subscribe(listener) {
        _classPrivateFieldLooseBase(this, _callbacks)[_callbacks].add(listener);
        return ()=>{
            _classPrivateFieldLooseBase(this, _callbacks)[_callbacks].delete(listener);
        };
    }
}
function _publish2() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    _classPrivateFieldLooseBase(this, _callbacks)[_callbacks].forEach((listener)=>{
        listener(...args);
    });
}
DefaultStore.VERSION = packageJson.version;
exports.default = DefaultStore;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"6iuDp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getFileType);
var _getFileNameAndExtensionJs = require("./getFileNameAndExtension.js");
var _getFileNameAndExtensionJsDefault = parcelHelpers.interopDefault(_getFileNameAndExtensionJs);
var _mimeTypesJs = require("./mimeTypes.js");
var _mimeTypesJsDefault = parcelHelpers.interopDefault(_mimeTypesJs);
function getFileType(file) {
    var _getFileNameAndExtens;
    if (file.type) return file.type;
    const fileExtension = file.name ? (_getFileNameAndExtens = (0, _getFileNameAndExtensionJsDefault.default)(file.name).extension) == null ? void 0 : _getFileNameAndExtens.toLowerCase() : null;
    if (fileExtension && fileExtension in (0, _mimeTypesJsDefault.default)) // else, see if we can map extension to a mime type
    return (0, _mimeTypesJsDefault.default)[fileExtension];
    // if all fails, fall back to a generic byte stream type
    return "application/octet-stream";
}

},{"./getFileNameAndExtension.js":"5OTD9","./mimeTypes.js":"4YSGU","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"5OTD9":[function(require,module,exports) {
/**
 * Takes a full filename string and returns an object {name, extension}
 *
 * @param {string} fullFileName
 * @returns {object} {name, extension}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getFileNameAndExtension);
function getFileNameAndExtension(fullFileName) {
    const lastDot = fullFileName.lastIndexOf(".");
    // these count as no extension: "no-dot", "trailing-dot."
    if (lastDot === -1 || lastDot === fullFileName.length - 1) return {
        name: fullFileName,
        extension: undefined
    };
    return {
        name: fullFileName.slice(0, lastDot),
        extension: fullFileName.slice(lastDot + 1)
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"4YSGU":[function(require,module,exports) {
// ___Why not add the mime-types package?
//    It's 19.7kB gzipped, and we only need mime types for well-known extensions (for file previews).
// ___Where to take new extensions from?
//    https://github.com/jshttp/mime-db/blob/master/db.json
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    md: "text/markdown",
    markdown: "text/markdown",
    mp4: "video/mp4",
    mp3: "audio/mp3",
    svg: "image/svg+xml",
    jpg: "image/jpeg",
    png: "image/png",
    webp: "image/webp",
    gif: "image/gif",
    heic: "image/heic",
    heif: "image/heif",
    yaml: "text/yaml",
    yml: "text/yaml",
    csv: "text/csv",
    tsv: "text/tab-separated-values",
    tab: "text/tab-separated-values",
    avi: "video/x-msvideo",
    mks: "video/x-matroska",
    mkv: "video/x-matroska",
    mov: "video/quicktime",
    dicom: "application/dicom",
    doc: "application/msword",
    docm: "application/vnd.ms-word.document.macroenabled.12",
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    dot: "application/msword",
    dotm: "application/vnd.ms-word.template.macroenabled.12",
    dotx: "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
    xla: "application/vnd.ms-excel",
    xlam: "application/vnd.ms-excel.addin.macroenabled.12",
    xlc: "application/vnd.ms-excel",
    xlf: "application/x-xliff+xml",
    xlm: "application/vnd.ms-excel",
    xls: "application/vnd.ms-excel",
    xlsb: "application/vnd.ms-excel.sheet.binary.macroenabled.12",
    xlsm: "application/vnd.ms-excel.sheet.macroenabled.12",
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    xlt: "application/vnd.ms-excel",
    xltm: "application/vnd.ms-excel.template.macroenabled.12",
    xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
    xlw: "application/vnd.ms-excel",
    txt: "text/plain",
    text: "text/plain",
    conf: "text/plain",
    log: "text/plain",
    pdf: "application/pdf",
    zip: "application/zip",
    "7z": "application/x-7z-compressed",
    rar: "application/x-rar-compressed",
    tar: "application/x-tar",
    gz: "application/gzip",
    dmg: "application/x-apple-diskimage"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"j5zUd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>generateFileID);
parcelHelpers.export(exports, "getSafeFileId", ()=>getSafeFileId);
var _getFileTypeJs = require("./getFileType.js");
var _getFileTypeJsDefault = parcelHelpers.interopDefault(_getFileTypeJs);
function encodeCharacter(character) {
    return character.charCodeAt(0).toString(32);
}
function encodeFilename(name) {
    let suffix = "";
    return name.replace(/[^A-Z0-9]/ig, (character)=>{
        suffix += `-${encodeCharacter(character)}`;
        return "/";
    }) + suffix;
}
function generateFileID(file) {
    // It's tempting to do `[items].filter(Boolean).join('-')` here, but that
    // is slower! simple string concatenation is fast
    let id = "uppy";
    if (typeof file.name === "string") id += `-${encodeFilename(file.name.toLowerCase())}`;
    if (file.type !== undefined) id += `-${file.type}`;
    if (file.meta && typeof file.meta.relativePath === "string") id += `-${encodeFilename(file.meta.relativePath.toLowerCase())}`;
    if (file.data.size !== undefined) id += `-${file.data.size}`;
    if (file.data.lastModified !== undefined) id += `-${file.data.lastModified}`;
    return id;
}
// If the provider has a stable, unique ID, then we can use that to identify the file.
// Then we don't have to generate our own ID, and we can add the same file many times if needed (different path)
function hasFileStableId(file) {
    if (!file.isRemote || !file.remote) return false;
    // These are the providers that it seems like have stable IDs for their files. The other's I haven't checked yet.
    const stableIdProviders = new Set([
        "box",
        "dropbox",
        "drive",
        "facebook",
        "unsplash"
    ]);
    return stableIdProviders.has(file.remote.provider);
}
function getSafeFileId(file) {
    if (hasFileStableId(file)) return file.id;
    const fileType = (0, _getFileTypeJsDefault.default)(file);
    return generateFileID({
        ...file,
        type: fileType
    });
}

},{"./getFileType.js":"6iuDp","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"3cWhh":[function(require,module,exports) {
// Edge 15.x does not fire 'progress' events on uploads.
// See https://github.com/transloadit/uppy/issues/945
// And https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12224510/
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>supportsUploadProgress);
function supportsUploadProgress(userAgent) {
    // Allow passing in userAgent for tests
    if (userAgent == null && typeof navigator !== "undefined") // eslint-disable-next-line no-param-reassign
    userAgent = navigator.userAgent;
    // Assume it works because basically everything supports progress events.
    if (!userAgent) return true;
    const m = /Edge\/(\d+\.\d+)/.exec(userAgent);
    if (!m) return true;
    const edgeVersion = m[1];
    let [major, minor] = edgeVersion.split(".");
    major = parseInt(major, 10);
    minor = parseInt(minor, 10);
    // Worked before:
    // Edge 40.15063.0.0
    // Microsoft EdgeHTML 15.15063
    if (major < 15 || major === 15 && minor < 15063) return true;
    // Fixed in:
    // Microsoft EdgeHTML 18.18218
    if (major > 18 || major === 18 && minor >= 18218) return true;
    // other versions don't work.
    return false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"b7dcc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getFileName);
function getFileName(fileType, fileDescriptor) {
    if (fileDescriptor.name) return fileDescriptor.name;
    if (fileType.split("/")[0] === "image") return `${fileType.split("/")[0]}.${fileType.split("/")[1]}`;
    return "noname";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"9mylM":[function(require,module,exports) {
/* eslint-disable no-console */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "justErrorsLogger", ()=>justErrorsLogger);
parcelHelpers.export(exports, "debugLogger", ()=>debugLogger);
var _getTimeStamp = require("@uppy/utils/lib/getTimeStamp");
var _getTimeStampDefault = parcelHelpers.interopDefault(_getTimeStamp);
// Swallow all logs, except errors.
// default if logger is not set or debug: false
const justErrorsLogger = {
    debug: ()=>{},
    warn: ()=>{},
    error: function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        return console.error(`[Uppy] [${(0, _getTimeStampDefault.default)()}]`, ...args);
    }
};
// Print logs to console with namespace + timestamp,
// set by logger: Uppy.debugLogger or debug: true
const debugLogger = {
    debug: function() {
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        return console.debug(`[Uppy] [${(0, _getTimeStampDefault.default)()}]`, ...args);
    },
    warn: function() {
        for(var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++)args[_key3] = arguments[_key3];
        return console.warn(`[Uppy] [${(0, _getTimeStampDefault.default)()}]`, ...args);
    },
    error: function() {
        for(var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++)args[_key4] = arguments[_key4];
        return console.error(`[Uppy] [${(0, _getTimeStampDefault.default)()}]`, ...args);
    }
};

},{"@uppy/utils/lib/getTimeStamp":"683bH","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"683bH":[function(require,module,exports) {
/**
 * Adds zero to strings shorter than two characters.
 *
 * @param {number} number
 * @returns {string}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getTimeStamp);
function pad(number) {
    return number < 10 ? `0${number}` : number.toString();
}
function getTimeStamp() {
    const date = new Date();
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());
    return `${hours}:${minutes}:${seconds}`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"7azxx":[function(require,module,exports) {
/* eslint-disable max-classes-per-file, class-methods-use-this */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Restricter", ()=>Restricter);
parcelHelpers.export(exports, "defaultOptions", ()=>defaultOptions);
parcelHelpers.export(exports, "RestrictionError", ()=>RestrictionError);
var _prettierBytes = require("@transloadit/prettier-bytes");
var _prettierBytesDefault = parcelHelpers.interopDefault(_prettierBytes);
var _mimeMatch = require("mime-match");
var _mimeMatchDefault = parcelHelpers.interopDefault(_mimeMatch);
const defaultOptions = {
    maxFileSize: null,
    minFileSize: null,
    maxTotalFileSize: null,
    maxNumberOfFiles: null,
    minNumberOfFiles: null,
    allowedFileTypes: null,
    requiredMetaFields: []
};
class RestrictionError extends Error {
    constructor(message, _temp){
        let { isUserFacing = true, file } = _temp === void 0 ? {} : _temp;
        super(message);
        this.isRestriction = true;
        this.isUserFacing = isUserFacing;
        if (file != null) this.file = file; // only some restriction errors are related to a particular file
    }
}
class Restricter {
    constructor(getOpts, i18n){
        this.i18n = i18n;
        this.getOpts = ()=>{
            const opts = getOpts();
            if (opts.restrictions.allowedFileTypes != null && !Array.isArray(opts.restrictions.allowedFileTypes)) throw new TypeError("`restrictions.allowedFileTypes` must be an array");
            return opts;
        };
    }
    // Because these operations are slow, we cannot run them for every file (if we are adding multiple files)
    validateAggregateRestrictions(existingFiles, addingFiles) {
        const { maxTotalFileSize, maxNumberOfFiles } = this.getOpts().restrictions;
        if (maxNumberOfFiles) {
            const nonGhostFiles = existingFiles.filter((f)=>!f.isGhost);
            if (nonGhostFiles.length + addingFiles.length > maxNumberOfFiles) throw new RestrictionError(`${this.i18n("youCanOnlyUploadX", {
                smart_count: maxNumberOfFiles
            })}`);
        }
        if (maxTotalFileSize) {
            let totalFilesSize = existingFiles.reduce((total, f)=>total + f.size, 0);
            for (const addingFile of addingFiles)if (addingFile.size != null) {
                // We can't check maxTotalFileSize if the size is unknown.
                totalFilesSize += addingFile.size;
                if (totalFilesSize > maxTotalFileSize) throw new RestrictionError(this.i18n("exceedsSize", {
                    size: (0, _prettierBytesDefault.default)(maxTotalFileSize),
                    file: addingFile.name
                }));
            }
        }
    }
    validateSingleFile(file) {
        const { maxFileSize, minFileSize, allowedFileTypes } = this.getOpts().restrictions;
        if (allowedFileTypes) {
            const isCorrectFileType = allowedFileTypes.some((type)=>{
                // check if this is a mime-type
                if (type.includes("/")) {
                    if (!file.type) return false;
                    return (0, _mimeMatchDefault.default)(file.type.replace(/;.*?$/, ""), type);
                }
                // otherwise this is likely an extension
                if (type[0] === "." && file.extension) return file.extension.toLowerCase() === type.slice(1).toLowerCase();
                return false;
            });
            if (!isCorrectFileType) {
                const allowedFileTypesString = allowedFileTypes.join(", ");
                throw new RestrictionError(this.i18n("youCanOnlyUploadFileTypes", {
                    types: allowedFileTypesString
                }), {
                    file
                });
            }
        }
        // We can't check maxFileSize if the size is unknown.
        if (maxFileSize && file.size != null && file.size > maxFileSize) throw new RestrictionError(this.i18n("exceedsSize", {
            size: (0, _prettierBytesDefault.default)(maxFileSize),
            file: file.name
        }), {
            file
        });
        // We can't check minFileSize if the size is unknown.
        if (minFileSize && file.size != null && file.size < minFileSize) throw new RestrictionError(this.i18n("inferiorSize", {
            size: (0, _prettierBytesDefault.default)(minFileSize)
        }), {
            file
        });
    }
    validate(existingFiles, addingFiles) {
        addingFiles.forEach((addingFile)=>{
            this.validateSingleFile(addingFile);
        });
        this.validateAggregateRestrictions(existingFiles, addingFiles);
    }
    validateMinNumberOfFiles(files) {
        const { minNumberOfFiles } = this.getOpts().restrictions;
        if (Object.keys(files).length < minNumberOfFiles) throw new RestrictionError(this.i18n("youHaveToAtLeastSelectX", {
            smart_count: minNumberOfFiles
        }));
    }
    getMissingRequiredMetaFields(file) {
        const error = new RestrictionError(this.i18n("missingRequiredMetaFieldOnFile", {
            fileName: file.name
        }));
        const { requiredMetaFields } = this.getOpts().restrictions;
        const missingFields = [];
        for (const field of requiredMetaFields)if (!Object.hasOwn(file.meta, field) || file.meta[field] === "") missingFields.push(field);
        return {
            missingFields,
            error
        };
    }
}

},{"@transloadit/prettier-bytes":"8PwYK","mime-match":"d4viF","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"8PwYK":[function(require,module,exports) {
// Adapted from https://github.com/Flet/prettier-bytes/
// Changing 1000 bytes to 1024, so we can keep uppercase KB vs kB
// ISC License (c) Dan Flettre https://github.com/Flet/prettier-bytes/blob/master/LICENSE
module.exports = function prettierBytes(num) {
    if (typeof num !== "number" || isNaN(num)) throw new TypeError(`Expected a number, got ${typeof num}`);
    const neg = num < 0;
    const units = [
        "B",
        "KB",
        "MB",
        "GB",
        "TB",
        "PB",
        "EB",
        "ZB",
        "YB"
    ];
    if (neg) num = -num;
    if (num < 1) return `${(neg ? "-" : "") + num} B`;
    const exponent = Math.min(Math.floor(Math.log(num) / Math.log(1024)), units.length - 1);
    num = Number(num / Math.pow(1024, exponent));
    const unit = units[exponent];
    if (num >= 10 || num % 1 === 0) // Do not show decimals when the number is two-digit, or if the number has no
    // decimal component.
    return `${(neg ? "-" : "") + num.toFixed(0)} ${unit}`;
    return `${(neg ? "-" : "") + num.toFixed(1)} ${unit}`;
};

},{}],"d4viF":[function(require,module,exports) {
var wildcard = require("c44ce5314d8170bc");
var reMimePartSplit = /[\/\+\.]/;
/**
  # mime-match

  A simple function to checker whether a target mime type matches a mime-type
  pattern (e.g. image/jpeg matches image/jpeg OR image/*).

  ## Example Usage

  <<< example.js

**/ module.exports = function(target, pattern) {
    function test(pattern) {
        var result = wildcard(pattern, target, reMimePartSplit);
        // ensure that we have a valid mime type (should have two parts)
        return result && result.length >= 2;
    }
    return pattern ? test(pattern.split(";")[0]) : test;
};

},{"c44ce5314d8170bc":"ak3zb"}],"ak3zb":[function(require,module,exports) {
/* jshint node: true */ "use strict";
/**
  # wildcard

  Very simple wildcard matching, which is designed to provide the same
  functionality that is found in the
  [eve](https://github.com/adobe-webplatform/eve) eventing library.

  ## Usage

  It works with strings:

  <<< examples/strings.js

  Arrays:

  <<< examples/arrays.js

  Objects (matching against keys):

  <<< examples/objects.js

  While the library works in Node, if you are are looking for file-based
  wildcard matching then you should have a look at:

  <https://github.com/isaacs/node-glob>
**/ function WildcardMatcher(text, separator) {
    this.text = text = text || "";
    this.hasWild = ~text.indexOf("*");
    this.separator = separator;
    this.parts = text.split(separator);
}
WildcardMatcher.prototype.match = function(input) {
    var matches = true;
    var parts = this.parts;
    var ii;
    var partsCount = parts.length;
    var testParts;
    if (typeof input == "string" || input instanceof String) {
        if (!this.hasWild && this.text != input) matches = false;
        else {
            testParts = (input || "").split(this.separator);
            for(ii = 0; matches && ii < partsCount; ii++){
                if (parts[ii] === "*") continue;
                else if (ii < testParts.length) matches = parts[ii] === testParts[ii];
                else matches = false;
            }
            // If matches, then return the component parts
            matches = matches && testParts;
        }
    } else if (typeof input.splice == "function") {
        matches = [];
        for(ii = input.length; ii--;)if (this.match(input[ii])) matches[matches.length] = input[ii];
    } else if (typeof input == "object") {
        matches = {};
        for(var key in input)if (this.match(key)) matches[key] = input[key];
    }
    return matches;
};
module.exports = function(text, test, separator) {
    var matcher = new WildcardMatcher(text, separator || /[\/\.]/);
    if (typeof test != "undefined") return matcher.match(test);
    return matcher;
};

},{}],"2pFtF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    strings: {
        addBulkFilesFailed: {
            0: "Failed to add %{smart_count} file due to an internal error",
            1: "Failed to add %{smart_count} files due to internal errors"
        },
        youCanOnlyUploadX: {
            0: "You can only upload %{smart_count} file",
            1: "You can only upload %{smart_count} files"
        },
        youHaveToAtLeastSelectX: {
            0: "You have to select at least %{smart_count} file",
            1: "You have to select at least %{smart_count} files"
        },
        exceedsSize: "%{file} exceeds maximum allowed size of %{size}",
        missingRequiredMetaField: "Missing required meta fields",
        missingRequiredMetaFieldOnFile: "Missing required meta fields in %{fileName}",
        inferiorSize: "This file is smaller than the allowed size of %{size}",
        youCanOnlyUploadFileTypes: "You can only upload: %{types}",
        noMoreFilesAllowed: "Cannot add more files",
        noDuplicates: "Cannot add the duplicate file '%{fileName}', it already exists",
        companionError: "Connection with Companion failed",
        authAborted: "Authentication aborted",
        companionUnauthorizeHint: "To unauthorize to your %{provider} account, please go to %{url}",
        failedToUpload: "Failed to upload %{file}",
        noInternetConnection: "No Internet connection",
        connectedToInternet: "Connected to the Internet",
        // Strings for remote providers
        noFilesFound: "You have no files or folders here",
        noSearchResults: "Unfortunately, there are no results for this search",
        selectX: {
            0: "Select %{smart_count}",
            1: "Select %{smart_count}"
        },
        allFilesFromFolderNamed: "All files from folder %{name}",
        openFolderNamed: "Open folder %{name}",
        cancel: "Cancel",
        logOut: "Log out",
        filter: "Filter",
        resetFilter: "Reset filter",
        loading: "Loading...",
        loadedXFiles: "Loaded %{numFiles} files",
        authenticateWithTitle: "Please authenticate with %{pluginName} to select files",
        authenticateWith: "Connect to %{pluginName}",
        signInWithGoogle: "Sign in with Google",
        searchImages: "Search for images",
        enterTextToSearch: "Enter text to search for images",
        search: "Search",
        resetSearch: "Reset search",
        emptyFolderAdded: "No files were added from empty folder",
        addedNumFiles: "Added %{numFiles} file(s)",
        folderAlreadyAdded: 'The folder "%{folder}" was already added',
        folderAdded: {
            0: "Added %{smart_count} file from %{folder}",
            1: "Added %{smart_count} files from %{folder}"
        },
        additionalRestrictionsFailed: "%{count} additional restrictions were not fulfilled"
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"1gCpC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
var _findDOMElement = require("@uppy/utils/lib/findDOMElement");
var _findDOMElementDefault = parcelHelpers.interopDefault(_findDOMElement);
var _getTextDirection = require("@uppy/utils/lib/getTextDirection");
var _getTextDirectionDefault = parcelHelpers.interopDefault(_getTextDirection);
var _basePluginJs = require("./BasePlugin.js");
var _basePluginJsDefault = parcelHelpers.interopDefault(_basePluginJs);
function _classPrivateFieldLooseBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) throw new TypeError("attempted to use private field on non-instance");
    return receiver;
}
var id = 0;
function _classPrivateFieldLooseKey(name) {
    return "__private_" + id++ + "_" + name;
}
/**
 * Defer a frequent call to the microtask queue.
 *
 * @param {() => T} fn
 * @returns {Promise<T>}
 */ function debounce(fn) {
    let calling = null;
    let latestArgs = null;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        latestArgs = args;
        if (!calling) calling = Promise.resolve().then(()=>{
            calling = null;
            // At this point `args` may be different from the most
            // recent state, if multiple calls happened since this task
            // was queued. So we use the `latestArgs`, which definitely
            // is the most recent call.
            return fn(...latestArgs);
        });
        return calling;
    };
}
/**
 * UIPlugin is the extended version of BasePlugin to incorporate rendering with Preact.
 * Use this for plugins that need a user interface.
 *
 * For plugins without an user interface, see BasePlugin.
 */ var _updateUI = /*#__PURE__*/ _classPrivateFieldLooseKey("updateUI");
class UIPlugin extends (0, _basePluginJsDefault.default) {
    constructor(){
        super(...arguments);
        Object.defineProperty(this, _updateUI, {
            writable: true,
            value: void 0
        });
    }
    getTargetPlugin(target) {
        let targetPlugin;
        if (typeof target === "object" && target instanceof UIPlugin) // Targeting a plugin *instance*
        targetPlugin = target;
        else if (typeof target === "function") {
            // Targeting a plugin type
            const Target = target;
            // Find the target plugin instance.
            this.uppy.iteratePlugins((p)=>{
                if (p instanceof Target) targetPlugin = p;
            });
        }
        return targetPlugin;
    }
    /**
   * Check if supplied `target` is a DOM element or an `object`.
   * If it’s an object — target is a plugin, and we search `plugins`
   * for a plugin with same name and return its target.
   */ mount(target, plugin) {
        const callerPluginName = plugin.id;
        const targetElement = (0, _findDOMElementDefault.default)(target);
        if (targetElement) {
            this.isTargetDOMEl = true;
            // When target is <body> with a single <div> element,
            // Preact thinks it’s the Uppy root element in there when doing a diff,
            // and destroys it. So we are creating a fragment (could be empty div)
            const uppyRootElement = document.createElement("div");
            uppyRootElement.classList.add("uppy-Root");
            // API for plugins that require a synchronous rerender.
            _classPrivateFieldLooseBase(this, _updateUI)[_updateUI] = debounce((state)=>{
                // plugin could be removed, but this.rerender is debounced below,
                // so it could still be called even after uppy.removePlugin or uppy.close
                // hence the check
                if (!this.uppy.getPlugin(this.id)) return;
                (0, _preact.render)(this.render(state), uppyRootElement);
                this.afterUpdate();
            });
            this.uppy.log(`Installing ${callerPluginName} to a DOM element '${target}'`);
            if (this.opts.replaceTargetContent) // Doing render(h(null), targetElement), which should have been
            // a better way, since because the component might need to do additional cleanup when it is removed,
            // stopped working — Preact just adds null into target, not replacing
            targetElement.innerHTML = "";
            (0, _preact.render)(this.render(this.uppy.getState()), uppyRootElement);
            this.el = uppyRootElement;
            targetElement.appendChild(uppyRootElement);
            // Set the text direction if the page has not defined one.
            uppyRootElement.dir = this.opts.direction || (0, _getTextDirectionDefault.default)(uppyRootElement) || "ltr";
            this.onMount();
            return this.el;
        }
        const targetPlugin = this.getTargetPlugin(target);
        if (targetPlugin) {
            this.uppy.log(`Installing ${callerPluginName} to ${targetPlugin.id}`);
            this.parent = targetPlugin;
            this.el = targetPlugin.addTarget(plugin);
            this.onMount();
            return this.el;
        }
        this.uppy.log(`Not installing ${callerPluginName}`);
        let message = `Invalid target option given to ${callerPluginName}.`;
        if (typeof target === "function") message += " The given target is not a Plugin class. Please check that you're not specifying a React Component instead of a plugin. If you are using @uppy/* packages directly, make sure you have only 1 version of @uppy/core installed: run `npm ls @uppy/core` on the command line and verify that all the versions match and are deduped correctly.";
        else message += "If you meant to target an HTML element, please make sure that the element exists. Check that the <script> tag initializing Uppy is right before the closing </body> tag at the end of the page. (see https://github.com/transloadit/uppy/issues/1042)\n\nIf you meant to target a plugin, please confirm that your `import` statements or `require` calls are correct.";
        throw new Error(message);
    }
    update(state) {
        if (this.el != null) {
            var _classPrivateFieldLoo, _classPrivateFieldLoo2;
            (_classPrivateFieldLoo = (_classPrivateFieldLoo2 = _classPrivateFieldLooseBase(this, _updateUI))[_updateUI]) == null || _classPrivateFieldLoo.call(_classPrivateFieldLoo2, state);
        }
    }
    unmount() {
        if (this.isTargetDOMEl) {
            var _this$el;
            (_this$el = this.el) == null || _this$el.remove();
        }
        this.onUnmount();
    }
    // eslint-disable-next-line class-methods-use-this
    onMount() {}
    // eslint-disable-next-line class-methods-use-this
    onUnmount() {}
}
exports.default = UIPlugin;

},{"preact":"26zcy","@uppy/utils/lib/findDOMElement":"arliH","@uppy/utils/lib/getTextDirection":"b31de","./BasePlugin.js":"k20Jd","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"26zcy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Component", ()=>b);
parcelHelpers.export(exports, "Fragment", ()=>k);
parcelHelpers.export(exports, "cloneElement", ()=>F);
parcelHelpers.export(exports, "createContext", ()=>G);
parcelHelpers.export(exports, "createElement", ()=>y);
parcelHelpers.export(exports, "createRef", ()=>_);
parcelHelpers.export(exports, "h", ()=>y);
parcelHelpers.export(exports, "hydrate", ()=>E);
parcelHelpers.export(exports, "isValidElement", ()=>t);
parcelHelpers.export(exports, "options", ()=>l);
parcelHelpers.export(exports, "render", ()=>B);
parcelHelpers.export(exports, "toChildArray", ()=>C);
var n, l, u, t, i, o, r, f, e, c = {}, s = [], a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, v = Array.isArray;
function h(n, l) {
    for(var u in l)n[u] = l[u];
    return n;
}
function p(n) {
    var l = n.parentNode;
    l && l.removeChild(n);
}
function y(l, u, t) {
    var i, o, r, f = {};
    for(r in u)"key" == r ? i = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];
    if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : t), "function" == typeof l && null != l.defaultProps) for(r in l.defaultProps)void 0 === f[r] && (f[r] = l.defaultProps[r]);
    return d(l, f, i, o, null);
}
function d(n, t, i, o, r) {
    var f = {
        type: n,
        props: t,
        key: i,
        ref: o,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == r ? ++u : r
    };
    return null == r && null != l.vnode && l.vnode(f), f;
}
function _() {
    return {
        current: null
    };
}
function k(n) {
    return n.children;
}
function b(n, l) {
    this.props = n, this.context = l;
}
function g(n, l) {
    if (null == l) return n.__ ? g(n.__, n.__.__k.indexOf(n) + 1) : null;
    for(var u; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) return u.__d || u.__e;
    return "function" == typeof n.type ? g(n) : null;
}
function m(n) {
    var l, u;
    if (null != (n = n.__) && null != n.__c) {
        for(n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) {
            n.__e = n.__c.base = u.__e;
            break;
        }
        return m(n);
    }
}
function w(n) {
    (!n.__d && (n.__d = !0) && i.push(n) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(x);
}
function x() {
    var n, l, u, t, o, r, e, c, s;
    for(i.sort(f); n = i.shift();)n.__d && (l = i.length, t = void 0, o = void 0, r = void 0, c = (e = (u = n).__v).__e, (s = u.__P) && (t = [], o = [], (r = h({}, e)).__v = e.__v + 1, z(s, e, r, u.__n, void 0 !== s.ownerSVGElement, null != e.__h ? [
        c
    ] : null, t, null == c ? g(e) : c, e.__h, o), L(t, e, o), e.__e != c && m(e)), i.length > l && i.sort(f));
    x.__r = 0;
}
function P(n, l, u, t, i, o, r, f, e, a, h) {
    var p, y, _, b, m, w, x, P, C, D = 0, H = t && t.__k || s, I = H.length, T = I, j = l.length;
    for(u.__k = [], p = 0; p < j; p++)null != (b = u.__k[p] = null == (b = l[p]) || "boolean" == typeof b || "function" == typeof b ? null : "string" == typeof b || "number" == typeof b || "bigint" == typeof b ? d(null, b, null, null, b) : v(b) ? d(k, {
        children: b
    }, null, null, null) : b.__b > 0 ? d(b.type, b.props, b.key, b.ref ? b.ref : null, b.__v) : b) ? (b.__ = u, b.__b = u.__b + 1, -1 === (P = A(b, H, x = p + D, T)) ? _ = c : (_ = H[P] || c, H[P] = void 0, T--), z(n, b, _, i, o, r, f, e, a, h), m = b.__e, (y = b.ref) && _.ref != y && (_.ref && N(_.ref, null, b), h.push(y, b.__c || m, b)), null != m && (null == w && (w = m), (C = _ === c || null === _.__v) ? -1 == P && D-- : P !== x && (P === x + 1 ? D++ : P > x ? T > j - x ? D += P - x : D-- : D = P < x && P == x - 1 ? P - x : 0), x = p + D, "function" != typeof b.type || P === x && _.__k !== b.__k ? "function" == typeof b.type || P === x && !C ? void 0 !== b.__d ? (e = b.__d, b.__d = void 0) : e = m.nextSibling : e = S(n, m, e) : e = $(b, e, n), "function" == typeof u.type && (u.__d = e))) : (_ = H[p]) && null == _.key && _.__e && (_.__e == e && (_.__ = t, e = g(_)), O(_, _, !1), H[p] = null);
    for(u.__e = w, p = I; p--;)null != H[p] && ("function" == typeof u.type && null != H[p].__e && H[p].__e == u.__d && (u.__d = H[p].__e.nextSibling), O(H[p], H[p]));
}
function $(n, l, u) {
    for(var t, i = n.__k, o = 0; i && o < i.length; o++)(t = i[o]) && (t.__ = n, l = "function" == typeof t.type ? $(t, l, u) : S(u, t.__e, l));
    return l;
}
function C(n, l) {
    return l = l || [], null == n || "boolean" == typeof n || (v(n) ? n.some(function(n) {
        C(n, l);
    }) : l.push(n)), l;
}
function S(n, l, u) {
    return null == u || u.parentNode !== n ? n.insertBefore(l, null) : l == u && null != l.parentNode || n.insertBefore(l, u), l.nextSibling;
}
function A(n, l, u, t) {
    var i = n.key, o = n.type, r = u - 1, f = u + 1, e = l[u];
    if (null === e || e && i == e.key && o === e.type) return u;
    if (t > (null != e ? 1 : 0)) for(; r >= 0 || f < l.length;){
        if (r >= 0) {
            if ((e = l[r]) && i == e.key && o === e.type) return r;
            r--;
        }
        if (f < l.length) {
            if ((e = l[f]) && i == e.key && o === e.type) return f;
            f++;
        }
    }
    return -1;
}
function D(n, l, u, t, i) {
    var o;
    for(o in u)"children" === o || "key" === o || o in l || I(n, o, null, u[o], t);
    for(o in l)i && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || I(n, o, l[o], u[o], t);
}
function H(n, l, u) {
    "-" === l[0] ? n.setProperty(l, null == u ? "" : u) : n[l] = null == u ? "" : "number" != typeof u || a.test(l) ? u : u + "px";
}
function I(n, l, u, t, i) {
    var o;
    n: if ("style" === l) {
        if ("string" == typeof u) n.style.cssText = u;
        else {
            if ("string" == typeof t && (n.style.cssText = t = ""), t) for(l in t)u && l in u || H(n.style, l, "");
            if (u) for(l in u)t && u[l] === t[l] || H(n.style, l, u[l]);
        }
    } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/(PointerCapture)$|Capture$/, "$1")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? t ? u.u = t.u : (u.u = Date.now(), n.addEventListener(l, o ? j : T, o)) : n.removeEventListener(l, o ? j : T, o);
    else if ("dangerouslySetInnerHTML" !== l) {
        if (i) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l && "height" !== l && "href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && "rowSpan" !== l && "colSpan" !== l && "role" !== l && l in n) try {
            n[l] = null == u ? "" : u;
            break n;
        } catch (n) {}
        "function" == typeof u || (null == u || !1 === u && "-" !== l[4] ? n.removeAttribute(l) : n.setAttribute(l, u));
    }
}
function T(n) {
    var u = this.l[n.type + !1];
    if (n.t) {
        if (n.t <= u.u) return;
    } else n.t = Date.now();
    return u(l.event ? l.event(n) : n);
}
function j(n) {
    return this.l[n.type + !0](l.event ? l.event(n) : n);
}
function z(n, u, t, i, o, r, f, e, c, s) {
    var a, p, y, d, _, g, m, w, x, $, C, S, A, D, H, I = u.type;
    if (void 0 !== u.constructor) return null;
    null != t.__h && (c = t.__h, e = u.__e = t.__e, u.__h = null, r = [
        e
    ]), (a = l.__b) && a(u);
    n: if ("function" == typeof I) try {
        if (w = u.props, x = (a = I.contextType) && i[a.__c], $ = a ? x ? x.props.value : a.__ : i, t.__c ? m = (p = u.__c = t.__c).__ = p.__E : ("prototype" in I && I.prototype.render ? u.__c = p = new I(w, $) : (u.__c = p = new b(w, $), p.constructor = I, p.render = q), x && x.sub(p), p.props = w, p.state || (p.state = {}), p.context = $, p.__n = i, y = p.__d = !0, p.__h = [], p._sb = []), null == p.__s && (p.__s = p.state), null != I.getDerivedStateFromProps && (p.__s == p.state && (p.__s = h({}, p.__s)), h(p.__s, I.getDerivedStateFromProps(w, p.__s))), d = p.props, _ = p.state, p.__v = u, y) null == I.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), null != p.componentDidMount && p.__h.push(p.componentDidMount);
        else {
            if (null == I.getDerivedStateFromProps && w !== d && null != p.componentWillReceiveProps && p.componentWillReceiveProps(w, $), !p.__e && (null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(w, p.__s, $) || u.__v === t.__v)) {
                for(u.__v !== t.__v && (p.props = w, p.state = p.__s, p.__d = !1), u.__e = t.__e, u.__k = t.__k, u.__k.forEach(function(n) {
                    n && (n.__ = u);
                }), C = 0; C < p._sb.length; C++)p.__h.push(p._sb[C]);
                p._sb = [], p.__h.length && f.push(p);
                break n;
            }
            null != p.componentWillUpdate && p.componentWillUpdate(w, p.__s, $), null != p.componentDidUpdate && p.__h.push(function() {
                p.componentDidUpdate(d, _, g);
            });
        }
        if (p.context = $, p.props = w, p.__P = n, p.__e = !1, S = l.__r, A = 0, "prototype" in I && I.prototype.render) {
            for(p.state = p.__s, p.__d = !1, S && S(u), a = p.render(p.props, p.state, p.context), D = 0; D < p._sb.length; D++)p.__h.push(p._sb[D]);
            p._sb = [];
        } else do p.__d = !1, S && S(u), a = p.render(p.props, p.state, p.context), p.state = p.__s;
        while (p.__d && ++A < 25);
        p.state = p.__s, null != p.getChildContext && (i = h(h({}, i), p.getChildContext())), y || null == p.getSnapshotBeforeUpdate || (g = p.getSnapshotBeforeUpdate(d, _)), P(n, v(H = null != a && a.type === k && null == a.key ? a.props.children : a) ? H : [
            H
        ], u, t, i, o, r, f, e, c, s), p.base = u.__e, u.__h = null, p.__h.length && f.push(p), m && (p.__E = p.__ = null);
    } catch (n) {
        u.__v = null, (c || null != r) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), l.__e(n, u, t);
    }
    else null == r && u.__v === t.__v ? (u.__k = t.__k, u.__e = t.__e) : u.__e = M(t.__e, u, t, i, o, r, f, c, s);
    (a = l.diffed) && a(u);
}
function L(n, u, t) {
    for(var i = 0; i < t.length; i++)N(t[i], t[++i], t[++i]);
    l.__c && l.__c(u, n), n.some(function(u) {
        try {
            n = u.__h, u.__h = [], n.some(function(n) {
                n.call(u);
            });
        } catch (n) {
            l.__e(n, u.__v);
        }
    });
}
function M(l, u, t, i, o, r, f, e, s) {
    var a, h, y, d = t.props, _ = u.props, k = u.type, b = 0;
    if ("svg" === k && (o = !0), null != r) {
        for(; b < r.length; b++)if ((a = r[b]) && "setAttribute" in a == !!k && (k ? a.localName === k : 3 === a.nodeType)) {
            l = a, r[b] = null;
            break;
        }
    }
    if (null == l) {
        if (null === k) return document.createTextNode(_);
        l = o ? document.createElementNS("http://www.w3.org/2000/svg", k) : document.createElement(k, _.is && _), r = null, e = !1;
    }
    if (null === k) d === _ || e && l.data === _ || (l.data = _);
    else {
        if (r = r && n.call(l.childNodes), h = (d = t.props || c).dangerouslySetInnerHTML, y = _.dangerouslySetInnerHTML, !e) {
            if (null != r) for(d = {}, b = 0; b < l.attributes.length; b++)d[l.attributes[b].name] = l.attributes[b].value;
            (y || h) && (y && (h && y.__html == h.__html || y.__html === l.innerHTML) || (l.innerHTML = y && y.__html || ""));
        }
        if (D(l, _, d, o, e), y) u.__k = [];
        else if (P(l, v(b = u.props.children) ? b : [
            b
        ], u, t, i, o && "foreignObject" !== k, r, f, r ? r[0] : t.__k && g(t, 0), e, s), null != r) for(b = r.length; b--;)null != r[b] && p(r[b]);
        e || ("value" in _ && void 0 !== (b = _.value) && (b !== l.value || "progress" === k && !b || "option" === k && b !== d.value) && I(l, "value", b, d.value, !1), "checked" in _ && void 0 !== (b = _.checked) && b !== l.checked && I(l, "checked", b, d.checked, !1));
    }
    return l;
}
function N(n, u, t) {
    try {
        "function" == typeof n ? n(u) : n.current = u;
    } catch (n) {
        l.__e(n, t);
    }
}
function O(n, u, t) {
    var i, o;
    if (l.unmount && l.unmount(n), (i = n.ref) && (i.current && i.current !== n.__e || N(i, null, u)), null != (i = n.__c)) {
        if (i.componentWillUnmount) try {
            i.componentWillUnmount();
        } catch (n) {
            l.__e(n, u);
        }
        i.base = i.__P = null, n.__c = void 0;
    }
    if (i = n.__k) for(o = 0; o < i.length; o++)i[o] && O(i[o], u, t || "function" != typeof n.type);
    t || null == n.__e || p(n.__e), n.__ = n.__e = n.__d = void 0;
}
function q(n, l, u) {
    return this.constructor(n, u);
}
function B(u, t, i) {
    var o, r, f, e;
    l.__ && l.__(u, t), r = (o = "function" == typeof i) ? null : i && i.__k || t.__k, f = [], e = [], z(t, u = (!o && i || t).__k = y(k, null, [
        u
    ]), r || c, c, void 0 !== t.ownerSVGElement, !o && i ? [
        i
    ] : r ? null : t.firstChild ? n.call(t.childNodes) : null, f, !o && i ? i : r ? r.__e : t.firstChild, o, e), L(f, u, e);
}
function E(n, l) {
    B(n, l, E);
}
function F(l, u, t) {
    var i, o, r, f, e = h({}, l.props);
    for(r in l.type && l.type.defaultProps && (f = l.type.defaultProps), u)"key" == r ? i = u[r] : "ref" == r ? o = u[r] : e[r] = void 0 === u[r] && void 0 !== f ? f[r] : u[r];
    return arguments.length > 2 && (e.children = arguments.length > 3 ? n.call(arguments, 2) : t), d(l.type, e, i || l.key, o || l.ref, null);
}
function G(n, l) {
    var u = {
        __c: l = "__cC" + e++,
        __: n,
        Consumer: function(n, l) {
            return n.children(l);
        },
        Provider: function(n) {
            var u, t;
            return this.getChildContext || (u = [], (t = {})[l] = this, this.getChildContext = function() {
                return t;
            }, this.shouldComponentUpdate = function(n) {
                this.props.value !== n.value && u.some(function(n) {
                    n.__e = !0, w(n);
                });
            }, this.sub = function(n) {
                u.push(n);
                var l = n.componentWillUnmount;
                n.componentWillUnmount = function() {
                    u.splice(u.indexOf(n), 1), l && l.call(n);
                };
            }), n.children;
        }
    };
    return u.Provider.__ = u.Consumer.contextType = u;
}
n = s.slice, l = {
    __e: function(n, l, u, t) {
        for(var i, o, r; l = l.__;)if ((i = l.__c) && !i.__) try {
            if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(n)), r = i.__d), null != i.componentDidCatch && (i.componentDidCatch(n, t || {}), r = i.__d), r) return i.__E = i;
        } catch (l) {
            n = l;
        }
        throw n;
    }
}, u = 0, t = function(n) {
    return null != n && void 0 === n.constructor;
}, b.prototype.setState = function(n, l) {
    var u;
    u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof n && (n = n(h({}, u), this.props)), n && h(u, n), null != n && this.__v && (l && this._sb.push(l), w(this));
}, b.prototype.forceUpdate = function(n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), w(this));
}, b.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n, l) {
    return n.__v.__b - l.__v.__b;
}, x.__r = 0, e = 0;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"arliH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>findDOMElement);
var _isDOMElementJs = require("./isDOMElement.js");
var _isDOMElementJsDefault = parcelHelpers.interopDefault(_isDOMElementJs);
function findDOMElement(element, context) {
    if (context === void 0) context = document;
    if (typeof element === "string") return context.querySelector(element);
    if ((0, _isDOMElementJsDefault.default)(element)) return element;
    return null;
}

},{"./isDOMElement.js":"5rjpH","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"5rjpH":[function(require,module,exports) {
/**
 * Check if an object is a DOM element. Duck-typing based on `nodeType`.
 *
 * @param {*} obj
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isDOMElement);
function isDOMElement(obj) {
    return (obj == null ? void 0 : obj.nodeType) === Node.ELEMENT_NODE;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"b31de":[function(require,module,exports) {
/**
 * Get the declared text direction for an element.
 *
 * @param {Node} element
 * @returns {string|undefined}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getTextDirection(element) {
    var _element;
    // There is another way to determine text direction using getComputedStyle(), as done here:
    // https://github.com/pencil-js/text-direction/blob/2a235ce95089b3185acec3b51313cbba921b3811/text-direction.js
    //
    // We do not use that approach because we are interested specifically in the _declared_ text direction.
    // If no text direction is declared, we have to provide our own explicit text direction so our
    // bidirectional CSS style sheets work.
    while(element && !element.dir)// eslint-disable-next-line no-param-reassign
    element = element.parentNode;
    return (_element = element) == null ? void 0 : _element.dir;
}
exports.default = getTextDirection;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"k20Jd":[function(require,module,exports) {
/**
 * Core plugin logic that all plugins share.
 *
 * BasePlugin does not contain DOM rendering so it can be used for plugins
 * without a user interface.
 *
 * See `Plugin` for the extended version with Preact rendering for interfaces.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _translator = require("@uppy/utils/lib/Translator");
var _translatorDefault = parcelHelpers.interopDefault(_translator);
class BasePlugin {
    constructor(uppy, opts){
        if (opts === void 0) opts = {};
        this.uppy = uppy;
        this.opts = opts;
    }
    getPluginState() {
        const { plugins } = this.uppy.getState();
        return plugins[this.id] || {};
    }
    setPluginState(update) {
        const { plugins } = this.uppy.getState();
        this.uppy.setState({
            plugins: {
                ...plugins,
                [this.id]: {
                    ...plugins[this.id],
                    ...update
                }
            }
        });
    }
    setOptions(newOpts) {
        this.opts = {
            ...this.opts,
            ...newOpts
        };
        this.setPluginState(); // so that UI re-renders with new options
        this.i18nInit();
    }
    i18nInit() {
        const translator = new (0, _translatorDefault.default)([
            this.defaultLocale,
            this.uppy.locale,
            this.opts.locale
        ]);
        this.i18n = translator.translate.bind(translator);
        this.i18nArray = translator.translateArray.bind(translator);
        this.setPluginState(); // so that UI re-renders and we see the updated locale
    }
    /**
   * Extendable methods
   * ==================
   * These methods are here to serve as an overview of the extendable methods as well as
   * making them not conditional in use, such as `if (this.afterUpdate)`.
   */ // eslint-disable-next-line class-methods-use-this
    addTarget() {
        throw new Error("Extend the addTarget method to add your plugin to another plugin's target");
    }
    // eslint-disable-next-line class-methods-use-this
    install() {}
    // eslint-disable-next-line class-methods-use-this
    uninstall() {}
    /**
   * Called when plugin is mounted, whether in DOM or into another plugin.
   * Needed because sometimes plugins are mounted separately/after `install`,
   * so this.el and this.parent might not be available in `install`.
   * This is the case with @uppy/react plugins, for example.
   */ render() {
        throw new Error("Extend the render method to add your plugin to a DOM element");
    }
    // eslint-disable-next-line class-methods-use-this
    update() {}
    // Called after every state update, after everything's mounted. Debounced.
    // eslint-disable-next-line class-methods-use-this
    afterUpdate() {}
}
exports.default = BasePlugin;

},{"@uppy/utils/lib/Translator":"drNUc","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"fQbWn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _basePluginJs = require("@uppy/core/lib/BasePlugin.js");
var _basePluginJsDefault = parcelHelpers.interopDefault(_basePluginJs);
var _nonSecure = require("nanoid/non-secure");
var _companionClient = require("@uppy/companion-client");
var _eventManager = require("@uppy/utils/lib/EventManager");
var _eventManagerDefault = parcelHelpers.interopDefault(_eventManager);
var _progressTimeout = require("@uppy/utils/lib/ProgressTimeout");
var _progressTimeoutDefault = parcelHelpers.interopDefault(_progressTimeout);
var _rateLimitedQueue = require("@uppy/utils/lib/RateLimitedQueue");
var _networkError = require("@uppy/utils/lib/NetworkError");
var _networkErrorDefault = parcelHelpers.interopDefault(_networkError);
var _isNetworkError = require("@uppy/utils/lib/isNetworkError");
var _isNetworkErrorDefault = parcelHelpers.interopDefault(_isNetworkError);
var _fileFilters = require("@uppy/utils/lib/fileFilters");
var _localeJs = require("./locale.js");
var _localeJsDefault = parcelHelpers.interopDefault(_localeJs);
function _classPrivateFieldLooseBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) throw new TypeError("attempted to use private field on non-instance");
    return receiver;
}
var id = 0;
function _classPrivateFieldLooseKey(name) {
    return "__private_" + id++ + "_" + name;
}
const packageJson = {
    "version": "3.4.1"
};
function buildResponseError(xhr, err) {
    let error = err;
    // No error message
    if (!error) error = new Error("Upload error");
    // Got an error message string
    if (typeof error === "string") error = new Error(error);
    // Got something else
    if (!(error instanceof Error)) error = Object.assign(new Error("Upload error"), {
        data: error
    });
    if ((0, _isNetworkErrorDefault.default)(xhr)) {
        error = new (0, _networkErrorDefault.default)(error, xhr);
        return error;
    }
    error.request = xhr;
    return error;
}
/**
 * Set `data.type` in the blob to `file.meta.type`,
 * because we might have detected a more accurate file type in Uppy
 * https://stackoverflow.com/a/50875615
 *
 * @param {object} file File object with `data`, `size` and `meta` properties
 * @returns {object} blob updated with the new `type` set from `file.meta.type`
 */ function setTypeInBlob(file) {
    const dataWithUpdatedType = file.data.slice(0, file.data.size, file.meta.type);
    return dataWithUpdatedType;
}
var _uploadLocalFile = /*#__PURE__*/ _classPrivateFieldLooseKey("uploadLocalFile");
var _uploadBundle = /*#__PURE__*/ _classPrivateFieldLooseKey("uploadBundle");
var _getCompanionClientArgs = /*#__PURE__*/ _classPrivateFieldLooseKey("getCompanionClientArgs");
var _uploadFiles = /*#__PURE__*/ _classPrivateFieldLooseKey("uploadFiles");
var _handleUpload = /*#__PURE__*/ _classPrivateFieldLooseKey("handleUpload");
class XHRUpload extends (0, _basePluginJsDefault.default) {
    constructor(uppy, _opts){
        super(uppy, _opts);
        Object.defineProperty(this, _uploadFiles, {
            value: _uploadFiles2
        });
        Object.defineProperty(this, _getCompanionClientArgs, {
            value: _getCompanionClientArgs2
        });
        Object.defineProperty(this, _uploadBundle, {
            value: _uploadBundle2
        });
        Object.defineProperty(this, _uploadLocalFile, {
            value: _uploadLocalFile2
        });
        Object.defineProperty(this, _handleUpload, {
            writable: true,
            value: async (fileIDs)=>{
                if (fileIDs.length === 0) {
                    this.uppy.log("[XHRUpload] No files to upload!");
                    return;
                }
                // No limit configured by the user, and no RateLimitedQueue passed in by a "parent" plugin
                // (basically just AwsS3) using the internal symbol
                if (this.opts.limit === 0 && !this.opts[0, _rateLimitedQueue.internalRateLimitedQueue]) this.uppy.log("[XHRUpload] When uploading multiple files at once, consider setting the `limit` option (to `10` for example), to limit the number of concurrent uploads, which helps prevent memory and network issues: https://uppy.io/docs/xhr-upload/#limit-0", "warning");
                this.uppy.log("[XHRUpload] Uploading...");
                const files = this.uppy.getFilesByIds(fileIDs);
                const filesFiltered = (0, _fileFilters.filterNonFailedFiles)(files);
                const filesToEmit = (0, _fileFilters.filterFilesToEmitUploadStarted)(filesFiltered);
                this.uppy.emit("upload-start", filesToEmit);
                if (this.opts.bundle) {
                    // if bundle: true, we don’t support remote uploads
                    const isSomeFileRemote = filesFiltered.some((file)=>file.isRemote);
                    if (isSomeFileRemote) throw new Error("Can’t upload remote files when the `bundle: true` option is set");
                    if (typeof this.opts.headers === "function") throw new TypeError("`headers` may not be a function when the `bundle: true` option is set");
                    await _classPrivateFieldLooseBase(this, _uploadBundle)[_uploadBundle](filesFiltered);
                } else await _classPrivateFieldLooseBase(this, _uploadFiles)[_uploadFiles](filesFiltered);
            }
        });
        this.type = "uploader";
        this.id = this.opts.id || "XHRUpload";
        this.title = "XHRUpload";
        this.defaultLocale = (0, _localeJsDefault.default);
        // Default options
        const defaultOptions = {
            formData: true,
            fieldName: _opts.bundle ? "files[]" : "file",
            method: "post",
            allowedMetaFields: null,
            responseUrlFieldName: "url",
            bundle: false,
            headers: {},
            timeout: 30000,
            limit: 5,
            withCredentials: false,
            responseType: "",
            /**
       * @param {string} responseText the response body string
       */ getResponseData (responseText) {
                let parsedResponse = {};
                try {
                    parsedResponse = JSON.parse(responseText);
                } catch (err) {
                    uppy.log(err);
                }
                return parsedResponse;
            },
            /**
       *
       * @param {string} _ the response body string
       * @param {XMLHttpRequest | respObj} response the response object (XHR or similar)
       */ getResponseError (_, response) {
                let error = new Error("Upload error");
                if ((0, _isNetworkErrorDefault.default)(response)) error = new (0, _networkErrorDefault.default)(error, response);
                return error;
            },
            /**
       * Check if the response from the upload endpoint indicates that the upload was successful.
       *
       * @param {number} status the response status code
       */ validateStatus (status) {
                return status >= 200 && status < 300;
            }
        };
        this.opts = {
            ...defaultOptions,
            ..._opts
        };
        this.i18nInit();
        // Simultaneous upload limiting is shared across all uploads with this plugin.
        if ((0, _rateLimitedQueue.internalRateLimitedQueue) in this.opts) this.requests = this.opts[0, _rateLimitedQueue.internalRateLimitedQueue];
        else this.requests = new (0, _rateLimitedQueue.RateLimitedQueue)(this.opts.limit);
        if (this.opts.bundle && !this.opts.formData) throw new Error("`opts.formData` must be true when `opts.bundle` is enabled.");
        if ((_opts == null ? void 0 : _opts.allowedMetaFields) === undefined && "metaFields" in this.opts) throw new Error("The `metaFields` option has been renamed to `allowedMetaFields`.");
        this.uploaderEvents = Object.create(null);
    }
    getOptions(file) {
        const overrides = this.uppy.getState().xhrUpload;
        const { headers } = this.opts;
        const opts = {
            ...this.opts,
            ...overrides || {},
            ...file.xhrUpload || {},
            headers: {}
        };
        // Support for `headers` as a function, only in the XHRUpload settings.
        // Options set by other plugins in Uppy state or on the files themselves are still merged in afterward.
        //
        // ```js
        // headers: (file) => ({ expires: file.meta.expires })
        // ```
        if (typeof headers === "function") opts.headers = headers(file);
        else Object.assign(opts.headers, this.opts.headers);
        if (overrides) Object.assign(opts.headers, overrides.headers);
        if (file.xhrUpload) Object.assign(opts.headers, file.xhrUpload.headers);
        return opts;
    }
    // eslint-disable-next-line class-methods-use-this
    addMetadata(formData, meta, opts) {
        const allowedMetaFields = Array.isArray(opts.allowedMetaFields) ? opts.allowedMetaFields : Object.keys(meta); // Send along all fields by default.
        allowedMetaFields.forEach((item)=>{
            if (Array.isArray(meta[item])) // In this case we don't transform `item` to add brackets, it's up to
            // the user to add the brackets so it won't be overridden.
            meta[item].forEach((subItem)=>formData.append(item, subItem));
            else formData.append(item, meta[item]);
        });
    }
    createFormDataUpload(file, opts) {
        const formPost = new FormData();
        this.addMetadata(formPost, file.meta, opts);
        const dataWithUpdatedType = setTypeInBlob(file);
        if (file.name) formPost.append(opts.fieldName, dataWithUpdatedType, file.meta.name);
        else formPost.append(opts.fieldName, dataWithUpdatedType);
        return formPost;
    }
    createBundledUpload(files, opts) {
        const formPost = new FormData();
        const { meta } = this.uppy.getState();
        this.addMetadata(formPost, meta, opts);
        files.forEach((file)=>{
            const options = this.getOptions(file);
            const dataWithUpdatedType = setTypeInBlob(file);
            if (file.name) formPost.append(options.fieldName, dataWithUpdatedType, file.name);
            else formPost.append(options.fieldName, dataWithUpdatedType);
        });
        return formPost;
    }
    install() {
        if (this.opts.bundle) {
            const { capabilities } = this.uppy.getState();
            this.uppy.setState({
                capabilities: {
                    ...capabilities,
                    individualCancellation: false
                }
            });
        }
        this.uppy.addUploader(_classPrivateFieldLooseBase(this, _handleUpload)[_handleUpload]);
    }
    uninstall() {
        if (this.opts.bundle) {
            const { capabilities } = this.uppy.getState();
            this.uppy.setState({
                capabilities: {
                    ...capabilities,
                    individualCancellation: true
                }
            });
        }
        this.uppy.removeUploader(_classPrivateFieldLooseBase(this, _handleUpload)[_handleUpload]);
    }
}
exports.default = XHRUpload;
async function _uploadLocalFile2(file, current, total) {
    const opts = this.getOptions(file);
    this.uppy.log(`uploading ${current} of ${total}`);
    return new Promise((resolve, reject)=>{
        const data = opts.formData ? this.createFormDataUpload(file, opts) : file.data;
        const xhr = new XMLHttpRequest();
        const eventManager = new (0, _eventManagerDefault.default)(this.uppy);
        this.uploaderEvents[file.id] = eventManager;
        let queuedRequest;
        const timer = new (0, _progressTimeoutDefault.default)(opts.timeout, ()=>{
            const error = new Error(this.i18n("uploadStalled", {
                seconds: Math.ceil(opts.timeout / 1000)
            }));
            this.uppy.emit("upload-stalled", error, [
                file
            ]);
        });
        const id = (0, _nonSecure.nanoid)();
        xhr.upload.addEventListener("loadstart", ()=>{
            this.uppy.log(`[XHRUpload] ${id} started`);
        });
        xhr.upload.addEventListener("progress", (ev)=>{
            this.uppy.log(`[XHRUpload] ${id} progress: ${ev.loaded} / ${ev.total}`);
            // Begin checking for timeouts when progress starts, instead of loading,
            // to avoid timing out requests on browser concurrency queue
            timer.progress();
            if (ev.lengthComputable) this.uppy.emit("upload-progress", file, {
                uploader: this,
                bytesUploaded: ev.loaded,
                bytesTotal: ev.total
            });
        });
        xhr.addEventListener("load", ()=>{
            this.uppy.log(`[XHRUpload] ${id} finished`);
            timer.done();
            queuedRequest.done();
            if (this.uploaderEvents[file.id]) {
                this.uploaderEvents[file.id].remove();
                this.uploaderEvents[file.id] = null;
            }
            if (opts.validateStatus(xhr.status, xhr.responseText, xhr)) {
                const body = opts.getResponseData(xhr.responseText, xhr);
                const uploadURL = body[opts.responseUrlFieldName];
                const uploadResp = {
                    status: xhr.status,
                    body,
                    uploadURL
                };
                this.uppy.emit("upload-success", file, uploadResp);
                if (uploadURL) this.uppy.log(`Download ${file.name} from ${uploadURL}`);
                return resolve(file);
            }
            const body = opts.getResponseData(xhr.responseText, xhr);
            const error = buildResponseError(xhr, opts.getResponseError(xhr.responseText, xhr));
            const response = {
                status: xhr.status,
                body
            };
            this.uppy.emit("upload-error", file, error, response);
            return reject(error);
        });
        xhr.addEventListener("error", ()=>{
            this.uppy.log(`[XHRUpload] ${id} errored`);
            timer.done();
            queuedRequest.done();
            if (this.uploaderEvents[file.id]) {
                this.uploaderEvents[file.id].remove();
                this.uploaderEvents[file.id] = null;
            }
            const error = buildResponseError(xhr, opts.getResponseError(xhr.responseText, xhr));
            this.uppy.emit("upload-error", file, error);
            return reject(error);
        });
        xhr.open(opts.method.toUpperCase(), opts.endpoint, true);
        // IE10 does not allow setting `withCredentials` and `responseType`
        // before `open()` is called.
        xhr.withCredentials = opts.withCredentials;
        if (opts.responseType !== "") xhr.responseType = opts.responseType;
        queuedRequest = this.requests.run(()=>{
            // When using an authentication system like JWT, the bearer token goes as a header. This
            // header needs to be fresh each time the token is refreshed so computing and setting the
            // headers just before the upload starts enables this kind of authentication to work properly.
            // Otherwise, half-way through the list of uploads the token could be stale and the upload would fail.
            const currentOpts = this.getOptions(file);
            Object.keys(currentOpts.headers).forEach((header)=>{
                xhr.setRequestHeader(header, currentOpts.headers[header]);
            });
            xhr.send(data);
            return ()=>{
                timer.done();
                xhr.abort();
            };
        });
        eventManager.onFileRemove(file.id, ()=>{
            queuedRequest.abort();
            reject(new Error("File removed"));
        });
        eventManager.onCancelAll(file.id, (_ref)=>{
            let { reason } = _ref;
            if (reason === "user") queuedRequest.abort();
            reject(new Error("Upload cancelled"));
        });
    });
}
function _uploadBundle2(files) {
    return new Promise((resolve, reject)=>{
        const { endpoint } = this.opts;
        const { method } = this.opts;
        const optsFromState = this.uppy.getState().xhrUpload;
        const formData = this.createBundledUpload(files, {
            ...this.opts,
            ...optsFromState || {}
        });
        const xhr = new XMLHttpRequest();
        const emitError = (error)=>{
            files.forEach((file)=>{
                this.uppy.emit("upload-error", file, error);
            });
        };
        const timer = new (0, _progressTimeoutDefault.default)(this.opts.timeout, ()=>{
            const error = new Error(this.i18n("uploadStalled", {
                seconds: Math.ceil(this.opts.timeout / 1000)
            }));
            this.uppy.emit("upload-stalled", error, files);
        });
        xhr.upload.addEventListener("loadstart", ()=>{
            this.uppy.log("[XHRUpload] started uploading bundle");
            timer.progress();
        });
        xhr.upload.addEventListener("progress", (ev)=>{
            timer.progress();
            if (!ev.lengthComputable) return;
            files.forEach((file)=>{
                this.uppy.emit("upload-progress", file, {
                    uploader: this,
                    bytesUploaded: ev.loaded / ev.total * file.size,
                    bytesTotal: file.size
                });
            });
        });
        xhr.addEventListener("load", (ev)=>{
            timer.done();
            if (this.opts.validateStatus(ev.target.status, xhr.responseText, xhr)) {
                const body = this.opts.getResponseData(xhr.responseText, xhr);
                const uploadResp = {
                    status: ev.target.status,
                    body
                };
                files.forEach((file)=>{
                    this.uppy.emit("upload-success", file, uploadResp);
                });
                return resolve();
            }
            const error = this.opts.getResponseError(xhr.responseText, xhr) || new Error("Upload error");
            error.request = xhr;
            emitError(error);
            return reject(error);
        });
        xhr.addEventListener("error", ()=>{
            timer.done();
            const error = this.opts.getResponseError(xhr.responseText, xhr) || new Error("Upload error");
            emitError(error);
            return reject(error);
        });
        this.uppy.on("cancel-all", function(_temp) {
            let { reason } = _temp === void 0 ? {} : _temp;
            if (reason !== "user") return;
            timer.done();
            xhr.abort();
        });
        xhr.open(method.toUpperCase(), endpoint, true);
        // IE10 does not allow setting `withCredentials` and `responseType`
        // before `open()` is called.
        xhr.withCredentials = this.opts.withCredentials;
        if (this.opts.responseType !== "") xhr.responseType = this.opts.responseType;
        Object.keys(this.opts.headers).forEach((header)=>{
            xhr.setRequestHeader(header, this.opts.headers[header]);
        });
        xhr.send(formData);
    });
}
function _getCompanionClientArgs2(file) {
    const opts = this.getOptions(file);
    const allowedMetaFields = Array.isArray(opts.allowedMetaFields) ? opts.allowedMetaFields : Object.keys(file.meta);
    return {
        ...file.remote.body,
        protocol: "multipart",
        endpoint: opts.endpoint,
        size: file.data.size,
        fieldname: opts.fieldName,
        metadata: Object.fromEntries(allowedMetaFields.map((name)=>[
                name,
                file.meta[name]
            ])),
        httpMethod: opts.method,
        useFormData: opts.formData,
        headers: opts.headers
    };
}
async function _uploadFiles2(files) {
    await Promise.allSettled(files.map((file, i)=>{
        const current = parseInt(i, 10) + 1;
        const total = files.length;
        if (file.isRemote) {
            // INFO: the url plugin needs to use RequestClient,
            // while others use Provider
            const Client = file.remote.providerOptions.provider ? (0, _companionClient.Provider) : (0, _companionClient.RequestClient);
            const getQueue = ()=>this.requests;
            const client = new Client(this.uppy, file.remote.providerOptions, getQueue);
            const controller = new AbortController();
            const removedHandler = (removedFile)=>{
                if (removedFile.id === file.id) controller.abort();
            };
            this.uppy.on("file-removed", removedHandler);
            const uploadPromise = client.uploadRemoteFile(file, _classPrivateFieldLooseBase(this, _getCompanionClientArgs)[_getCompanionClientArgs](file), {
                signal: controller.signal
            });
            this.requests.wrapSyncFunction(()=>{
                this.uppy.off("file-removed", removedHandler);
            }, {
                priority: -1
            })();
            return uploadPromise;
        }
        return _classPrivateFieldLooseBase(this, _uploadLocalFile)[_uploadLocalFile](file, current, total);
    }));
}
// eslint-disable-next-line global-require
XHRUpload.VERSION = packageJson.version;

},{"@uppy/core/lib/BasePlugin.js":"k20Jd","nanoid/non-secure":"fO50M","@uppy/companion-client":"lBJb4","@uppy/utils/lib/EventManager":"4ACj0","@uppy/utils/lib/ProgressTimeout":"WofHi","@uppy/utils/lib/RateLimitedQueue":"dsRHW","@uppy/utils/lib/NetworkError":"fXTTv","@uppy/utils/lib/isNetworkError":"6hFz9","@uppy/utils/lib/fileFilters":"01ZH8","./locale.js":"dLclj","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"lBJb4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Manages communications with Companion
 */ parcelHelpers.export(exports, "RequestClient", ()=>(0, _requestClientJsDefault.default));
parcelHelpers.export(exports, "Provider", ()=>(0, _providerJsDefault.default));
parcelHelpers.export(exports, "SearchProvider", ()=>(0, _searchProviderJsDefault.default));
parcelHelpers.export(exports, "Socket", ()=>(0, _socketJsDefault.default));
var _requestClientJs = require("./RequestClient.js");
var _requestClientJsDefault = parcelHelpers.interopDefault(_requestClientJs);
var _providerJs = require("./Provider.js");
var _providerJsDefault = parcelHelpers.interopDefault(_providerJs);
var _searchProviderJs = require("./SearchProvider.js");
var _searchProviderJsDefault = parcelHelpers.interopDefault(_searchProviderJs);
var _socketJs = require("./Socket.js");
var _socketJsDefault = parcelHelpers.interopDefault(_socketJs);
"use strict";

},{"./RequestClient.js":"6e7Nv","./Provider.js":"ii4FY","./SearchProvider.js":"8J3sP","./Socket.js":"9KJKk","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"6e7Nv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _fetchWithNetworkError = require("@uppy/utils/lib/fetchWithNetworkError");
var _fetchWithNetworkErrorDefault = parcelHelpers.interopDefault(_fetchWithNetworkError);
var _errorWithCause = require("@uppy/utils/lib/ErrorWithCause");
var _errorWithCauseDefault = parcelHelpers.interopDefault(_errorWithCause);
var _emitSocketProgress = require("@uppy/utils/lib/emitSocketProgress");
var _emitSocketProgressDefault = parcelHelpers.interopDefault(_emitSocketProgress);
var _getSocketHost = require("@uppy/utils/lib/getSocketHost");
var _getSocketHostDefault = parcelHelpers.interopDefault(_getSocketHost);
var _eventManager = require("@uppy/utils/lib/EventManager");
var _eventManagerDefault = parcelHelpers.interopDefault(_eventManager);
var _authErrorJs = require("./AuthError.js");
var _authErrorJsDefault = parcelHelpers.interopDefault(_authErrorJs);
var _socketJs = require("./Socket.js");
var _socketJsDefault = parcelHelpers.interopDefault(_socketJs);
"use strict";
let _Symbol$for;
function _classPrivateFieldLooseBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) throw new TypeError("attempted to use private field on non-instance");
    return receiver;
}
var id = 0;
function _classPrivateFieldLooseKey(name) {
    return "__private_" + id++ + "_" + name;
}
const packageJson = {
    "version": "3.4.1"
}; // Remove the trailing slash so we can always safely append /xyz.
function stripSlash(url) {
    return url.replace(/\/$/, "");
}
async function handleJSONResponse(res) {
    if (res.status === 401) throw new (0, _authErrorJsDefault.default)();
    const jsonPromise = res.json();
    if (res.ok) return jsonPromise;
    let errMsg = `Failed request with status: ${res.status}. ${res.statusText}`;
    try {
        const errData = await jsonPromise;
        errMsg = errData.message ? `${errMsg} message: ${errData.message}` : errMsg;
        errMsg = errData.requestId ? `${errMsg} request-Id: ${errData.requestId}` : errMsg;
    } catch  {
    /* if the response contains invalid JSON, let's ignore the error */ }
    throw new Error(errMsg);
}
// todo pull out into core instead?
const allowedHeadersCache = new Map();
var _companionHeaders = /*#__PURE__*/ _classPrivateFieldLooseKey("companionHeaders");
var _getUrl = /*#__PURE__*/ _classPrivateFieldLooseKey("getUrl");
var _requestSocketToken = /*#__PURE__*/ _classPrivateFieldLooseKey("requestSocketToken");
_Symbol$for = Symbol.for("uppy test: getCompanionHeaders");
class RequestClient {
    constructor(uppy, opts, getQueue){
        Object.defineProperty(this, _getUrl, {
            value: _getUrl2
        });
        Object.defineProperty(this, _companionHeaders, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _requestSocketToken, {
            writable: true,
            value: async (file, postBody)=>{
                if (file.remote.url == null) throw new Error("Cannot connect to an undefined URL");
                const res = await this.post(file.remote.url, {
                    ...file.remote.body,
                    ...postBody
                });
                return res.token;
            }
        });
        this.uppy = uppy;
        this.opts = opts;
        this.getQueue = getQueue;
        this.onReceiveResponse = this.onReceiveResponse.bind(this);
        _classPrivateFieldLooseBase(this, _companionHeaders)[_companionHeaders] = opts == null ? void 0 : opts.companionHeaders;
    }
    setCompanionHeaders(headers) {
        _classPrivateFieldLooseBase(this, _companionHeaders)[_companionHeaders] = headers;
    }
    [_Symbol$for]() {
        return _classPrivateFieldLooseBase(this, _companionHeaders)[_companionHeaders];
    }
    get hostname() {
        const { companion } = this.uppy.getState();
        const host = this.opts.companionUrl;
        return stripSlash(companion && companion[host] ? companion[host] : host);
    }
    async headers() {
        const defaultHeaders = {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Uppy-Versions": `@uppy/companion-client=${RequestClient.VERSION}`
        };
        return {
            ...defaultHeaders,
            ..._classPrivateFieldLooseBase(this, _companionHeaders)[_companionHeaders]
        };
    }
    onReceiveResponse(_ref) {
        let { headers } = _ref;
        const state = this.uppy.getState();
        const companion = state.companion || {};
        const host = this.opts.companionUrl;
        // Store the self-identified domain name for the Companion instance we just hit.
        if (headers.has("i-am") && headers.get("i-am") !== companion[host]) this.uppy.setState({
            companion: {
                ...companion,
                [host]: headers.get("i-am")
            }
        });
    }
    /*
    Preflight was added to avoid breaking change between older Companion-client versions and
    newer Companion versions and vice-versa. Usually the break will manifest via CORS errors because a
    version of companion-client could be sending certain headers to a version of Companion server that
    does not support those headers. In which case, the default preflight would lead to CORS.
    So to avoid those errors, we do preflight ourselves, to see what headers the Companion server
    we are communicating with allows. And based on that, companion-client knows what headers to
    send and what headers to not send.
     The preflight only happens once throughout the life-cycle of a certain
    Companion-client <-> Companion-server pair (allowedHeadersCache).
    Subsequent requests use the cached result of the preflight.
    However if there is an error retrieving the allowed headers, we will try again next time
  */ async preflight(path) {
        const allowedHeadersCached = allowedHeadersCache.get(this.hostname);
        if (allowedHeadersCached != null) return allowedHeadersCached;
        const fallbackAllowedHeaders = [
            "accept",
            "content-type",
            "uppy-auth-token"
        ];
        const promise = (async ()=>{
            try {
                const response = await fetch(_classPrivateFieldLooseBase(this, _getUrl)[_getUrl](path), {
                    method: "OPTIONS"
                });
                const header = response.headers.get("access-control-allow-headers");
                if (header == null || header === "*") {
                    allowedHeadersCache.set(this.hostname, fallbackAllowedHeaders);
                    return fallbackAllowedHeaders;
                }
                this.uppy.log(`[CompanionClient] adding allowed preflight headers to companion cache: ${this.hostname} ${header}`);
                const allowedHeaders = header.split(",").map((headerName)=>headerName.trim().toLowerCase());
                allowedHeadersCache.set(this.hostname, allowedHeaders);
                return allowedHeaders;
            } catch (err) {
                this.uppy.log(`[CompanionClient] unable to make preflight request ${err}`, "warning");
                // If the user gets a network error or similar, we should try preflight
                // again next time, or else we might get incorrect behaviour.
                allowedHeadersCache.delete(this.hostname); // re-fetch next time
                return fallbackAllowedHeaders;
            }
        })();
        allowedHeadersCache.set(this.hostname, promise);
        return promise;
    }
    async preflightAndHeaders(path) {
        const [allowedHeaders, headers] = await Promise.all([
            this.preflight(path),
            this.headers()
        ]);
        // filter to keep only allowed Headers
        return Object.fromEntries(Object.entries(headers).filter((_ref2)=>{
            let [header] = _ref2;
            if (!allowedHeaders.includes(header.toLowerCase())) {
                this.uppy.log(`[CompanionClient] excluding disallowed header ${header}`);
                return false;
            }
            return true;
        }));
    }
    /** @protected */ async request(_ref3) {
        let { path, method = "GET", data, skipPostResponse, signal } = _ref3;
        try {
            const headers = await this.preflightAndHeaders(path);
            const response = await (0, _fetchWithNetworkErrorDefault.default)(_classPrivateFieldLooseBase(this, _getUrl)[_getUrl](path), {
                method,
                signal,
                headers,
                credentials: this.opts.companionCookiesRule || "same-origin",
                body: data ? JSON.stringify(data) : null
            });
            if (!skipPostResponse) this.onReceiveResponse(response);
            return handleJSONResponse(response);
        } catch (err) {
            if (err != null && err.isAuthError) throw err;
            throw new (0, _errorWithCauseDefault.default)(`Could not ${method} ${_classPrivateFieldLooseBase(this, _getUrl)[_getUrl](path)}`, {
                cause: err
            });
        }
    }
    async get(path, options) {
        if (options === void 0) options = undefined;
        // TODO: remove boolean support for options that was added for backward compatibility.
        // eslint-disable-next-line no-param-reassign
        if (typeof options === "boolean") options = {
            skipPostResponse: options
        };
        return this.request({
            ...options,
            path
        });
    }
    async post(path, data, options) {
        if (options === void 0) options = undefined;
        // TODO: remove boolean support for options that was added for backward compatibility.
        // eslint-disable-next-line no-param-reassign
        if (typeof options === "boolean") options = {
            skipPostResponse: options
        };
        return this.request({
            ...options,
            path,
            method: "POST",
            data
        });
    }
    async delete(path, data, options) {
        if (data === void 0) data = undefined;
        // TODO: remove boolean support for options that was added for backward compatibility.
        // eslint-disable-next-line no-param-reassign
        if (typeof options === "boolean") options = {
            skipPostResponse: options
        };
        return this.request({
            ...options,
            path,
            method: "DELETE",
            data
        });
    }
    async uploadRemoteFile(file, reqBody, options) {
        if (options === void 0) options = {};
        try {
            if (file.serverToken) return await this.connectToServerSocket(file, this.getQueue());
            const queueRequestSocketToken = this.getQueue().wrapPromiseFunction(_classPrivateFieldLooseBase(this, _requestSocketToken)[_requestSocketToken], {
                priority: -1
            });
            const serverToken = await queueRequestSocketToken(file, reqBody).abortOn(options.signal);
            if (!this.uppy.getState().files[file.id]) return undefined;
            this.uppy.setFileState(file.id, {
                serverToken
            });
            return await this.connectToServerSocket(this.uppy.getFile(file.id), this.getQueue());
        } catch (err) {
            var _err$cause;
            if ((err == null || (_err$cause = err.cause) == null ? void 0 : _err$cause.name) === "AbortError") // The file upload was aborted, it’s not an error
            return undefined;
            this.uppy.setFileState(file.id, {
                serverToken: undefined
            });
            this.uppy.emit("upload-error", file, err);
            throw err;
        }
    }
    /**
   * @param {UppyFile} file
   */ async connectToServerSocket(file, queue) {
        return new Promise((resolve, reject)=>{
            const token = file.serverToken;
            const host = (0, _getSocketHostDefault.default)(file.remote.companionUrl);
            const socket = new (0, _socketJsDefault.default)({
                target: `${host}/api/${token}`,
                autoOpen: false
            });
            const eventManager = new (0, _eventManagerDefault.default)(this.uppy);
            let queuedRequest;
            eventManager.onFileRemove(file.id, ()=>{
                socket.send("cancel", {});
                queuedRequest.abort();
                resolve(`upload ${file.id} was removed`);
            });
            eventManager.onPause(file.id, (isPaused)=>{
                if (isPaused) {
                    // Remove this file from the queue so another file can start in its place.
                    socket.send("pause", {});
                    queuedRequest.abort();
                } else {
                    // Resuming an upload should be queued, else you could pause and then
                    // resume a queued upload to make it skip the queue.
                    queuedRequest.abort();
                    queuedRequest = queue.run(()=>{
                        socket.open();
                        socket.send("resume", {});
                        return ()=>{};
                    });
                }
            });
            eventManager.onPauseAll(file.id, ()=>{
                socket.send("pause", {});
                queuedRequest.abort();
            });
            eventManager.onCancelAll(file.id, function(_temp) {
                let { reason } = _temp === void 0 ? {} : _temp;
                if (reason === "user") {
                    socket.send("cancel", {});
                    queuedRequest.abort();
                }
                resolve(`upload ${file.id} was canceled`);
            });
            eventManager.onResumeAll(file.id, ()=>{
                queuedRequest.abort();
                if (file.error) socket.send("pause", {});
                queuedRequest = queue.run(()=>{
                    socket.open();
                    socket.send("resume", {});
                    return ()=>{};
                });
            });
            eventManager.onRetry(file.id, ()=>{
                // Only do the retry if the upload is actually in progress;
                // else we could try to send these messages when the upload is still queued.
                // We may need a better check for this since the socket may also be closed
                // for other reasons, like network failures.
                if (socket.isOpen) {
                    socket.send("pause", {});
                    socket.send("resume", {});
                }
            });
            eventManager.onRetryAll(file.id, ()=>{
                // See the comment in the onRetry() call
                if (socket.isOpen) {
                    socket.send("pause", {});
                    socket.send("resume", {});
                }
            });
            socket.on("progress", (progressData)=>(0, _emitSocketProgressDefault.default)(this, progressData, file));
            socket.on("error", (errData)=>{
                const { message } = errData.error;
                const error = Object.assign(new Error(message), {
                    cause: errData.error
                });
                // If the remote retry optimisation should not be used,
                // close the socket—this will tell companion to clear state and delete the file.
                if (!this.opts.useFastRemoteRetry) // Remove the serverToken so that a new one will be created for the retry.
                this.uppy.setFileState(file.id, {
                    serverToken: null
                });
                else socket.close();
                this.uppy.emit("upload-error", file, error);
                queuedRequest.done();
                reject(error);
            });
            socket.on("success", (data)=>{
                const uploadResp = {
                    uploadURL: data.url
                };
                this.uppy.emit("upload-success", file, uploadResp);
                queuedRequest.done();
                socket.close();
                resolve();
            });
            queuedRequest = queue.run(()=>{
                if (file.isPaused) socket.send("pause", {});
                else socket.open();
                return ()=>{};
            });
        });
    }
}
exports.default = RequestClient;
function _getUrl2(url) {
    if (/^(https?:|)\/\//.test(url)) return url;
    return `${this.hostname}/${url}`;
}
RequestClient.VERSION = packageJson.version;

},{"@uppy/utils/lib/fetchWithNetworkError":"hcjky","@uppy/utils/lib/ErrorWithCause":"8Ox14","@uppy/utils/lib/emitSocketProgress":"6WpdT","@uppy/utils/lib/getSocketHost":"2HzF5","@uppy/utils/lib/EventManager":"4ACj0","./AuthError.js":"d4oBY","./Socket.js":"9KJKk","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"hcjky":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>fetchWithNetworkError);
var _networkErrorJs = require("./NetworkError.js");
var _networkErrorJsDefault = parcelHelpers.interopDefault(_networkErrorJs);
function fetchWithNetworkError() {
    return fetch(...arguments).catch((err)=>{
        if (err.name === "AbortError") throw err;
        else throw new (0, _networkErrorJsDefault.default)(err);
    });
}

},{"./NetworkError.js":"fXTTv","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"fXTTv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class NetworkError extends Error {
    constructor(error, xhr){
        if (xhr === void 0) xhr = null;
        super(`This looks like a network error, the endpoint might be blocked by an internet provider or a firewall.`);
        this.cause = error;
        this.isNetworkError = true;
        this.request = xhr;
    }
}
exports.default = NetworkError;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"8Ox14":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hasPropertyJs = require("./hasProperty.js");
var _hasPropertyJsDefault = parcelHelpers.interopDefault(_hasPropertyJs);
class ErrorWithCause extends Error {
    constructor(message, options){
        if (options === void 0) options = {};
        super(message);
        this.cause = options.cause;
        if (this.cause && (0, _hasPropertyJsDefault.default)(this.cause, "isNetworkError")) this.isNetworkError = this.cause.isNetworkError;
    }
}
exports.default = ErrorWithCause;

},{"./hasProperty.js":"klmpU","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"6WpdT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _throttleJs = require("lodash/throttle.js");
var _throttleJsDefault = parcelHelpers.interopDefault(_throttleJs);
function emitSocketProgress(uploader, progressData, file) {
    const { progress, bytesUploaded, bytesTotal } = progressData;
    if (progress) {
        uploader.uppy.log(`Upload progress: ${progress}`);
        uploader.uppy.emit("upload-progress", file, {
            uploader,
            bytesUploaded,
            bytesTotal
        });
    }
}
exports.default = (0, _throttleJsDefault.default)(emitSocketProgress, 300, {
    leading: true,
    trailing: true
});

},{"lodash/throttle.js":"lAb0D","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"2HzF5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getSocketHost);
function getSocketHost(url) {
    // get the host domain
    const regex = /^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i;
    const host = regex.exec(url)[1];
    const socketProtocol = /^http:\/\//i.test(url) ? "ws" : "wss";
    return `${socketProtocol}://${host}`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"4ACj0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateFieldLooseBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) throw new TypeError("attempted to use private field on non-instance");
    return receiver;
}
var id = 0;
function _classPrivateFieldLooseKey(name) {
    return "__private_" + id++ + "_" + name;
}
var _uppy = /*#__PURE__*/ _classPrivateFieldLooseKey("uppy");
var _events = /*#__PURE__*/ _classPrivateFieldLooseKey("events");
class EventManager {
    constructor(uppy){
        Object.defineProperty(this, _uppy, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _events, {
            writable: true,
            value: []
        });
        _classPrivateFieldLooseBase(this, _uppy)[_uppy] = uppy;
    }
    on(event, fn) {
        _classPrivateFieldLooseBase(this, _events)[_events].push([
            event,
            fn
        ]);
        return _classPrivateFieldLooseBase(this, _uppy)[_uppy].on(event, fn);
    }
    remove() {
        for (const [event, fn] of _classPrivateFieldLooseBase(this, _events)[_events].splice(0))_classPrivateFieldLooseBase(this, _uppy)[_uppy].off(event, fn);
    }
    onFilePause(fileID, cb) {
        this.on("upload-pause", (targetFileID, isPaused)=>{
            if (fileID === targetFileID) cb(isPaused);
        });
    }
    onFileRemove(fileID, cb) {
        this.on("file-removed", (file)=>{
            if (fileID === file.id) cb(file.id);
        });
    }
    onPause(fileID, cb) {
        this.on("upload-pause", (targetFileID, isPaused)=>{
            if (fileID === targetFileID) // const isPaused = this.#uppy.pauseResume(fileID)
            cb(isPaused);
        });
    }
    onRetry(fileID, cb) {
        this.on("upload-retry", (targetFileID)=>{
            if (fileID === targetFileID) cb();
        });
    }
    onRetryAll(fileID, cb) {
        this.on("retry-all", ()=>{
            if (!_classPrivateFieldLooseBase(this, _uppy)[_uppy].getFile(fileID)) return;
            cb();
        });
    }
    onPauseAll(fileID, cb) {
        this.on("pause-all", ()=>{
            if (!_classPrivateFieldLooseBase(this, _uppy)[_uppy].getFile(fileID)) return;
            cb();
        });
    }
    onCancelAll(fileID, eventHandler) {
        var _this = this;
        this.on("cancel-all", function() {
            if (!_classPrivateFieldLooseBase(_this, _uppy)[_uppy].getFile(fileID)) return;
            eventHandler(...arguments);
        });
    }
    onResumeAll(fileID, cb) {
        this.on("resume-all", ()=>{
            if (!_classPrivateFieldLooseBase(this, _uppy)[_uppy].getFile(fileID)) return;
            cb();
        });
    }
}
exports.default = EventManager;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"d4oBY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
class AuthError extends Error {
    constructor(){
        super("Authorization required");
        this.name = "AuthError";
        this.isAuthError = true;
    }
}
exports.default = AuthError;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"9KJKk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _namespaceEmitter = require("namespace-emitter");
var _namespaceEmitterDefault = parcelHelpers.interopDefault(_namespaceEmitter);
let _Symbol$for, _Symbol$for2;
function _classPrivateFieldLooseBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) throw new TypeError("attempted to use private field on non-instance");
    return receiver;
}
var id = 0;
function _classPrivateFieldLooseKey(name) {
    return "__private_" + id++ + "_" + name;
}
var _queued = /*#__PURE__*/ _classPrivateFieldLooseKey("queued");
var _emitter = /*#__PURE__*/ _classPrivateFieldLooseKey("emitter");
var _isOpen = /*#__PURE__*/ _classPrivateFieldLooseKey("isOpen");
var _socket = /*#__PURE__*/ _classPrivateFieldLooseKey("socket");
var _handleMessage = /*#__PURE__*/ _classPrivateFieldLooseKey("handleMessage");
_Symbol$for = Symbol.for("uppy test: getSocket");
_Symbol$for2 = Symbol.for("uppy test: getQueued");
class UppySocket {
    constructor(opts){
        Object.defineProperty(this, _queued, {
            writable: true,
            value: []
        });
        Object.defineProperty(this, _emitter, {
            writable: true,
            value: (0, _namespaceEmitterDefault.default)()
        });
        Object.defineProperty(this, _isOpen, {
            writable: true,
            value: false
        });
        Object.defineProperty(this, _socket, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _handleMessage, {
            writable: true,
            value: (e)=>{
                try {
                    const message = JSON.parse(e.data);
                    this.emit(message.action, message.payload);
                } catch (err) {
                    // TODO: use a more robust error handler.
                    console.log(err); // eslint-disable-line no-console
                }
            }
        });
        this.opts = opts;
        if (!opts || opts.autoOpen !== false) this.open();
    }
    get isOpen() {
        return _classPrivateFieldLooseBase(this, _isOpen)[_isOpen];
    }
    [_Symbol$for]() {
        return _classPrivateFieldLooseBase(this, _socket)[_socket];
    }
    [_Symbol$for2]() {
        return _classPrivateFieldLooseBase(this, _queued)[_queued];
    }
    open() {
        if (_classPrivateFieldLooseBase(this, _socket)[_socket] != null) return;
        _classPrivateFieldLooseBase(this, _socket)[_socket] = new WebSocket(this.opts.target);
        _classPrivateFieldLooseBase(this, _socket)[_socket].onopen = ()=>{
            _classPrivateFieldLooseBase(this, _isOpen)[_isOpen] = true;
            while(_classPrivateFieldLooseBase(this, _queued)[_queued].length > 0 && _classPrivateFieldLooseBase(this, _isOpen)[_isOpen]){
                const first = _classPrivateFieldLooseBase(this, _queued)[_queued].shift();
                this.send(first.action, first.payload);
            }
        };
        _classPrivateFieldLooseBase(this, _socket)[_socket].onclose = ()=>{
            _classPrivateFieldLooseBase(this, _isOpen)[_isOpen] = false;
            _classPrivateFieldLooseBase(this, _socket)[_socket] = null;
        };
        _classPrivateFieldLooseBase(this, _socket)[_socket].onmessage = _classPrivateFieldLooseBase(this, _handleMessage)[_handleMessage];
    }
    close() {
        var _classPrivateFieldLoo;
        (_classPrivateFieldLoo = _classPrivateFieldLooseBase(this, _socket)[_socket]) == null || _classPrivateFieldLoo.close();
    }
    send(action, payload) {
        // attach uuid
        if (!_classPrivateFieldLooseBase(this, _isOpen)[_isOpen]) {
            _classPrivateFieldLooseBase(this, _queued)[_queued].push({
                action,
                payload
            });
            return;
        }
        _classPrivateFieldLooseBase(this, _socket)[_socket].send(JSON.stringify({
            action,
            payload
        }));
    }
    on(action, handler) {
        _classPrivateFieldLooseBase(this, _emitter)[_emitter].on(action, handler);
    }
    emit(action, payload) {
        _classPrivateFieldLooseBase(this, _emitter)[_emitter].emit(action, payload);
    }
    once(action, handler) {
        _classPrivateFieldLooseBase(this, _emitter)[_emitter].once(action, handler);
    }
}
exports.default = UppySocket;

},{"namespace-emitter":"aodWM","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"ii4FY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _requestClientJs = require("./RequestClient.js");
var _requestClientJsDefault = parcelHelpers.interopDefault(_requestClientJs);
var _tokenStorageJs = require("./tokenStorage.js");
"use strict";
function _classPrivateFieldLooseBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) throw new TypeError("attempted to use private field on non-instance");
    return receiver;
}
var id = 0;
function _classPrivateFieldLooseKey(name) {
    return "__private_" + id++ + "_" + name;
}
const getName = (id)=>{
    return id.split("-").map((s)=>s.charAt(0).toUpperCase() + s.slice(1)).join(" ");
};
function getOrigin() {
    // eslint-disable-next-line no-restricted-globals
    return location.origin;
}
function getRegex(value) {
    if (typeof value === "string") return new RegExp(`^${value}$`);
    if (value instanceof RegExp) return value;
    return undefined;
}
function isOriginAllowed(origin, allowedOrigin) {
    const patterns = Array.isArray(allowedOrigin) ? allowedOrigin.map(getRegex) : [
        getRegex(allowedOrigin)
    ];
    return patterns.some((pattern)=>(pattern == null ? void 0 : pattern.test(origin)) || (pattern == null ? void 0 : pattern.test(`${origin}/`))); // allowing for trailing '/'
}
var _refreshingTokenPromise = /*#__PURE__*/ _classPrivateFieldLooseKey("refreshingTokenPromise");
var _getAuthToken = /*#__PURE__*/ _classPrivateFieldLooseKey("getAuthToken");
var _removeAuthToken = /*#__PURE__*/ _classPrivateFieldLooseKey("removeAuthToken");
class Provider extends (0, _requestClientJsDefault.default) {
    constructor(uppy, opts, getQueue){
        super(uppy, opts, getQueue);
        Object.defineProperty(this, _removeAuthToken, {
            value: _removeAuthToken2
        });
        Object.defineProperty(this, _getAuthToken, {
            value: _getAuthToken2
        });
        Object.defineProperty(this, _refreshingTokenPromise, {
            writable: true,
            value: void 0
        });
        this.provider = opts.provider;
        this.id = this.provider;
        this.name = this.opts.name || getName(this.id);
        this.pluginId = this.opts.pluginId;
        this.tokenKey = `companion-${this.pluginId}-auth-token`;
        this.companionKeysParams = this.opts.companionKeysParams;
        this.preAuthToken = null;
    }
    async headers() {
        const [headers, token] = await Promise.all([
            super.headers(),
            _classPrivateFieldLooseBase(this, _getAuthToken)[_getAuthToken]()
        ]);
        const authHeaders = {};
        if (token) authHeaders["uppy-auth-token"] = token;
        if (this.companionKeysParams) authHeaders["uppy-credentials-params"] = btoa(JSON.stringify({
            params: this.companionKeysParams
        }));
        return {
            ...headers,
            ...authHeaders
        };
    }
    onReceiveResponse(response) {
        super.onReceiveResponse(response);
        const plugin = this.uppy.getPlugin(this.pluginId);
        const oldAuthenticated = plugin.getPluginState().authenticated;
        const authenticated = oldAuthenticated ? response.status !== 401 : response.status < 400;
        plugin.setPluginState({
            authenticated
        });
        return response;
    }
    async setAuthToken(token) {
        return this.uppy.getPlugin(this.pluginId).storage.setItem(this.tokenKey, token);
    }
    /**
   * Ensure we have a preauth token if necessary. Attempts to fetch one if we don't,
   * or rejects if loading one fails.
   */ async ensurePreAuth() {
        if (this.companionKeysParams && !this.preAuthToken) {
            await this.fetchPreAuthToken();
            if (!this.preAuthToken) throw new Error("Could not load authentication data required for third-party login. Please try again later.");
        }
    }
    authUrl(queries) {
        if (queries === void 0) queries = {};
        const params = new URLSearchParams({
            state: btoa(JSON.stringify({
                origin: getOrigin()
            })),
            ...queries
        });
        if (this.preAuthToken) params.set("uppyPreAuthToken", this.preAuthToken);
        return `${this.hostname}/${this.id}/connect?${params}`;
    }
    async login(queries) {
        await this.ensurePreAuth();
        return new Promise((resolve, reject)=>{
            const link = this.authUrl(queries);
            const authWindow = window.open(link, "_blank");
            const handleToken = (e)=>{
                if (e.source !== authWindow) {
                    this.uppy.log.warn("ignoring event from unknown source", e);
                    return;
                }
                const { companionAllowedHosts } = this.uppy.getPlugin(this.pluginId).opts;
                if (!isOriginAllowed(e.origin, companionAllowedHosts)) {
                    reject(new Error(`rejecting event from ${e.origin} vs allowed pattern ${companionAllowedHosts}`));
                    return;
                }
                // Check if it's a string before doing the JSON.parse to maintain support
                // for older Companion versions that used object references
                const data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
                if (data.error) {
                    const { uppy } = this;
                    const message = uppy.i18n("authAborted");
                    uppy.info({
                        message
                    }, "warning", 5000);
                    reject(new Error("auth aborted"));
                    return;
                }
                if (!data.token) {
                    reject(new Error("did not receive token from auth window"));
                    return;
                }
                authWindow.close();
                window.removeEventListener("message", handleToken);
                this.setAuthToken(data.token);
                resolve();
            };
            window.addEventListener("message", handleToken);
        });
    }
    refreshTokenUrl() {
        return `${this.hostname}/${this.id}/refresh-token`;
    }
    fileUrl(id) {
        return `${this.hostname}/${this.id}/get/${id}`;
    }
    /** @protected */ async request() {
        await _classPrivateFieldLooseBase(this, _refreshingTokenPromise)[_refreshingTokenPromise];
        try {
            // throw Object.assign(new Error(), { isAuthError: true }) // testing simulate access token expired (to refresh token)
            // A better way to test this is for example with Google Drive:
            // While uploading, go to your google account settings,
            // "Third-party apps & services", then click "Companion" and "Remove access".
            return await super.request(...arguments);
        } catch (err) {
            // only handle auth errors (401 from provider), and only handle them if we have a (refresh) token
            if (!err.isAuthError || !await _classPrivateFieldLooseBase(this, _getAuthToken)[_getAuthToken]()) throw err;
            if (_classPrivateFieldLooseBase(this, _refreshingTokenPromise)[_refreshingTokenPromise] == null) // Many provider requests may be starting at once, however refresh token should only be called once.
            // Once a refresh token operation has started, we need all other request to wait for this operation (atomically)
            _classPrivateFieldLooseBase(this, _refreshingTokenPromise)[_refreshingTokenPromise] = (async ()=>{
                try {
                    const response = await super.request({
                        path: this.refreshTokenUrl(),
                        method: "POST"
                    });
                    await this.setAuthToken(response.uppyAuthToken);
                } catch (refreshTokenErr) {
                    if (refreshTokenErr.isAuthError) // if refresh-token has failed with auth error, delete token, so we don't keep trying to refresh in future
                    await _classPrivateFieldLooseBase(this, _removeAuthToken)[_removeAuthToken]();
                    throw err;
                } finally{
                    _classPrivateFieldLooseBase(this, _refreshingTokenPromise)[_refreshingTokenPromise] = undefined;
                }
            })();
            await _classPrivateFieldLooseBase(this, _refreshingTokenPromise)[_refreshingTokenPromise];
            // now retry the request with our new refresh token
            return super.request(...arguments);
        }
    }
    async fetchPreAuthToken() {
        if (!this.companionKeysParams) return;
        try {
            const res = await this.post(`${this.id}/preauth/`, {
                params: this.companionKeysParams
            });
            this.preAuthToken = res.token;
        } catch (err) {
            this.uppy.log(`[CompanionClient] unable to fetch preAuthToken ${err}`, "warning");
        }
    }
    list(directory, options) {
        return this.get(`${this.id}/list/${directory || ""}`, options);
    }
    async logout(options) {
        const response = await this.get(`${this.id}/logout`, options);
        await _classPrivateFieldLooseBase(this, _removeAuthToken)[_removeAuthToken]();
        return response;
    }
    static initPlugin(plugin, opts, defaultOpts) {
        /* eslint-disable no-param-reassign */ plugin.type = "acquirer";
        plugin.files = [];
        if (defaultOpts) plugin.opts = {
            ...defaultOpts,
            ...opts
        };
        if (opts.serverUrl || opts.serverPattern) throw new Error("`serverUrl` and `serverPattern` have been renamed to `companionUrl` and `companionAllowedHosts` respectively in the 0.30.5 release. Please consult the docs (for example, https://uppy.io/docs/instagram/ for the Instagram plugin) and use the updated options.`");
        if (opts.companionAllowedHosts) {
            const pattern = opts.companionAllowedHosts;
            // validate companionAllowedHosts param
            if (typeof pattern !== "string" && !Array.isArray(pattern) && !(pattern instanceof RegExp)) throw new TypeError(`${plugin.id}: the option "companionAllowedHosts" must be one of string, Array, RegExp`);
            plugin.opts.companionAllowedHosts = pattern;
        } else if (/^(?!https?:\/\/).*$/i.test(opts.companionUrl)) // does not start with https://
        plugin.opts.companionAllowedHosts = `https://${opts.companionUrl.replace(/^\/\//, "")}`;
        else plugin.opts.companionAllowedHosts = new URL(opts.companionUrl).origin;
        plugin.storage = plugin.opts.storage || _tokenStorageJs;
    /* eslint-enable no-param-reassign */ }
}
exports.default = Provider;
async function _getAuthToken2() {
    return this.uppy.getPlugin(this.pluginId).storage.getItem(this.tokenKey);
}
async function _removeAuthToken2() {
    return this.uppy.getPlugin(this.pluginId).storage.removeItem(this.tokenKey);
}

},{"./RequestClient.js":"6e7Nv","./tokenStorage.js":"agApW","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"agApW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * This module serves as an Async wrapper for LocalStorage
 */ parcelHelpers.export(exports, "setItem", ()=>setItem);
parcelHelpers.export(exports, "getItem", ()=>getItem);
parcelHelpers.export(exports, "removeItem", ()=>removeItem);
"use strict";
function setItem(key, value) {
    return new Promise((resolve)=>{
        localStorage.setItem(key, value);
        resolve();
    });
}
function getItem(key) {
    return Promise.resolve(localStorage.getItem(key));
}
function removeItem(key) {
    return new Promise((resolve)=>{
        localStorage.removeItem(key);
        resolve();
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"8J3sP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _requestClientJs = require("./RequestClient.js");
var _requestClientJsDefault = parcelHelpers.interopDefault(_requestClientJs);
"use strict";
const getName = (id)=>{
    return id.split("-").map((s)=>s.charAt(0).toUpperCase() + s.slice(1)).join(" ");
};
class SearchProvider extends (0, _requestClientJsDefault.default) {
    constructor(uppy, opts){
        super(uppy, opts);
        this.provider = opts.provider;
        this.id = this.provider;
        this.name = this.opts.name || getName(this.id);
        this.pluginId = this.opts.pluginId;
    }
    fileUrl(id) {
        return `${this.hostname}/search/${this.id}/get/${id}`;
    }
    search(text, queries) {
        return this.get(`search/${this.id}/list?q=${encodeURIComponent(text)}${queries ? `&${queries}` : ""}`);
    }
}
exports.default = SearchProvider;

},{"./RequestClient.js":"6e7Nv","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"WofHi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateFieldLooseBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) throw new TypeError("attempted to use private field on non-instance");
    return receiver;
}
var id = 0;
function _classPrivateFieldLooseKey(name) {
    return "__private_" + id++ + "_" + name;
}
var _aliveTimer = /*#__PURE__*/ _classPrivateFieldLooseKey("aliveTimer");
var _isDone = /*#__PURE__*/ _classPrivateFieldLooseKey("isDone");
var _onTimedOut = /*#__PURE__*/ _classPrivateFieldLooseKey("onTimedOut");
var _timeout = /*#__PURE__*/ _classPrivateFieldLooseKey("timeout");
/**
 * Helper to abort upload requests if there has not been any progress for `timeout` ms.
 * Create an instance using `timer = new ProgressTimeout(10000, onTimeout)`
 * Call `timer.progress()` to signal that there has been progress of any kind.
 * Call `timer.done()` when the upload has completed.
 */ class ProgressTimeout {
    constructor(timeout, timeoutHandler){
        Object.defineProperty(this, _aliveTimer, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _isDone, {
            writable: true,
            value: false
        });
        Object.defineProperty(this, _onTimedOut, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _timeout, {
            writable: true,
            value: void 0
        });
        _classPrivateFieldLooseBase(this, _timeout)[_timeout] = timeout;
        _classPrivateFieldLooseBase(this, _onTimedOut)[_onTimedOut] = timeoutHandler;
    }
    progress() {
        // Some browsers fire another progress event when the upload is
        // cancelled, so we have to ignore progress after the timer was
        // told to stop.
        if (_classPrivateFieldLooseBase(this, _isDone)[_isDone]) return;
        if (_classPrivateFieldLooseBase(this, _timeout)[_timeout] > 0) {
            clearTimeout(_classPrivateFieldLooseBase(this, _aliveTimer)[_aliveTimer]);
            _classPrivateFieldLooseBase(this, _aliveTimer)[_aliveTimer] = setTimeout(_classPrivateFieldLooseBase(this, _onTimedOut)[_onTimedOut], _classPrivateFieldLooseBase(this, _timeout)[_timeout]);
        }
    }
    done() {
        if (!_classPrivateFieldLooseBase(this, _isDone)[_isDone]) {
            clearTimeout(_classPrivateFieldLooseBase(this, _aliveTimer)[_aliveTimer]);
            _classPrivateFieldLooseBase(this, _aliveTimer)[_aliveTimer] = null;
            _classPrivateFieldLooseBase(this, _isDone)[_isDone] = true;
        }
    }
}
exports.default = ProgressTimeout;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"dsRHW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RateLimitedQueue", ()=>RateLimitedQueue);
parcelHelpers.export(exports, "internalRateLimitedQueue", ()=>internalRateLimitedQueue);
function _classPrivateFieldLooseBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) throw new TypeError("attempted to use private field on non-instance");
    return receiver;
}
var id = 0;
function _classPrivateFieldLooseKey(name) {
    return "__private_" + id++ + "_" + name;
}
function createCancelError(cause) {
    return new Error("Cancelled", {
        cause
    });
}
function abortOn(signal) {
    if (signal != null) {
        var _this$then;
        const abortPromise = ()=>this.abort(signal.reason);
        signal.addEventListener("abort", abortPromise, {
            once: true
        });
        const removeAbortListener = ()=>{
            signal.removeEventListener("abort", abortPromise);
        };
        (_this$then = this.then) == null || _this$then.call(this, removeAbortListener, removeAbortListener);
    }
    return this;
}
var _activeRequests = /*#__PURE__*/ _classPrivateFieldLooseKey("activeRequests");
var _queuedHandlers = /*#__PURE__*/ _classPrivateFieldLooseKey("queuedHandlers");
var _paused = /*#__PURE__*/ _classPrivateFieldLooseKey("paused");
var _pauseTimer = /*#__PURE__*/ _classPrivateFieldLooseKey("pauseTimer");
var _downLimit = /*#__PURE__*/ _classPrivateFieldLooseKey("downLimit");
var _upperLimit = /*#__PURE__*/ _classPrivateFieldLooseKey("upperLimit");
var _rateLimitingTimer = /*#__PURE__*/ _classPrivateFieldLooseKey("rateLimitingTimer");
var _call = /*#__PURE__*/ _classPrivateFieldLooseKey("call");
var _queueNext = /*#__PURE__*/ _classPrivateFieldLooseKey("queueNext");
var _next = /*#__PURE__*/ _classPrivateFieldLooseKey("next");
var _queue = /*#__PURE__*/ _classPrivateFieldLooseKey("queue");
var _dequeue = /*#__PURE__*/ _classPrivateFieldLooseKey("dequeue");
var _resume = /*#__PURE__*/ _classPrivateFieldLooseKey("resume");
var _increaseLimit = /*#__PURE__*/ _classPrivateFieldLooseKey("increaseLimit");
class RateLimitedQueue {
    constructor(limit){
        Object.defineProperty(this, _dequeue, {
            value: _dequeue2
        });
        Object.defineProperty(this, _queue, {
            value: _queue2
        });
        Object.defineProperty(this, _next, {
            value: _next2
        });
        Object.defineProperty(this, _queueNext, {
            value: _queueNext2
        });
        Object.defineProperty(this, _call, {
            value: _call2
        });
        Object.defineProperty(this, _activeRequests, {
            writable: true,
            value: 0
        });
        Object.defineProperty(this, _queuedHandlers, {
            writable: true,
            value: []
        });
        Object.defineProperty(this, _paused, {
            writable: true,
            value: false
        });
        Object.defineProperty(this, _pauseTimer, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _downLimit, {
            writable: true,
            value: 1
        });
        Object.defineProperty(this, _upperLimit, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _rateLimitingTimer, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _resume, {
            writable: true,
            value: ()=>this.resume()
        });
        Object.defineProperty(this, _increaseLimit, {
            writable: true,
            value: ()=>{
                if (_classPrivateFieldLooseBase(this, _paused)[_paused]) {
                    _classPrivateFieldLooseBase(this, _rateLimitingTimer)[_rateLimitingTimer] = setTimeout(_classPrivateFieldLooseBase(this, _increaseLimit)[_increaseLimit], 0);
                    return;
                }
                _classPrivateFieldLooseBase(this, _downLimit)[_downLimit] = this.limit;
                this.limit = Math.ceil((_classPrivateFieldLooseBase(this, _upperLimit)[_upperLimit] + _classPrivateFieldLooseBase(this, _downLimit)[_downLimit]) / 2);
                for(let i = _classPrivateFieldLooseBase(this, _downLimit)[_downLimit]; i <= this.limit; i++)_classPrivateFieldLooseBase(this, _queueNext)[_queueNext]();
                if (_classPrivateFieldLooseBase(this, _upperLimit)[_upperLimit] - _classPrivateFieldLooseBase(this, _downLimit)[_downLimit] > 3) _classPrivateFieldLooseBase(this, _rateLimitingTimer)[_rateLimitingTimer] = setTimeout(_classPrivateFieldLooseBase(this, _increaseLimit)[_increaseLimit], 2000);
                else _classPrivateFieldLooseBase(this, _downLimit)[_downLimit] = Math.floor(_classPrivateFieldLooseBase(this, _downLimit)[_downLimit] / 2);
            }
        });
        if (typeof limit !== "number" || limit === 0) this.limit = Infinity;
        else this.limit = limit;
    }
    run(fn, queueOptions) {
        if (!_classPrivateFieldLooseBase(this, _paused)[_paused] && _classPrivateFieldLooseBase(this, _activeRequests)[_activeRequests] < this.limit) return _classPrivateFieldLooseBase(this, _call)[_call](fn);
        return _classPrivateFieldLooseBase(this, _queue)[_queue](fn, queueOptions);
    }
    wrapSyncFunction(fn, queueOptions) {
        var _this = this;
        return function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            const queuedRequest = _this.run(()=>{
                fn(...args);
                queueMicrotask(()=>queuedRequest.done());
                return ()=>{};
            }, queueOptions);
            return {
                abortOn,
                abort () {
                    queuedRequest.abort();
                }
            };
        };
    }
    wrapPromiseFunction(fn, queueOptions) {
        var _this2 = this;
        return function() {
            for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
            let queuedRequest;
            const outerPromise = new Promise((resolve, reject)=>{
                queuedRequest = _this2.run(()=>{
                    let cancelError;
                    let innerPromise;
                    try {
                        innerPromise = Promise.resolve(fn(...args));
                    } catch (err) {
                        innerPromise = Promise.reject(err);
                    }
                    innerPromise.then((result)=>{
                        if (cancelError) reject(cancelError);
                        else {
                            queuedRequest.done();
                            resolve(result);
                        }
                    }, (err)=>{
                        if (cancelError) reject(cancelError);
                        else {
                            queuedRequest.done();
                            reject(err);
                        }
                    });
                    return (cause)=>{
                        cancelError = createCancelError(cause);
                    };
                }, queueOptions);
            });
            outerPromise.abort = (cause)=>{
                queuedRequest.abort(cause);
            };
            outerPromise.abortOn = abortOn;
            return outerPromise;
        };
    }
    resume() {
        _classPrivateFieldLooseBase(this, _paused)[_paused] = false;
        clearTimeout(_classPrivateFieldLooseBase(this, _pauseTimer)[_pauseTimer]);
        for(let i = 0; i < this.limit; i++)_classPrivateFieldLooseBase(this, _queueNext)[_queueNext]();
    }
    /**
   * Freezes the queue for a while or indefinitely.
   *
   * @param {number | null } [duration] Duration for the pause to happen, in milliseconds.
   *                                    If omitted, the queue won't resume automatically.
   */ pause(duration) {
        if (duration === void 0) duration = null;
        _classPrivateFieldLooseBase(this, _paused)[_paused] = true;
        clearTimeout(_classPrivateFieldLooseBase(this, _pauseTimer)[_pauseTimer]);
        if (duration != null) _classPrivateFieldLooseBase(this, _pauseTimer)[_pauseTimer] = setTimeout(_classPrivateFieldLooseBase(this, _resume)[_resume], duration);
    }
    /**
   * Pauses the queue for a duration, and lower the limit of concurrent requests
   * when the queue resumes. When the queue resumes, it tries to progressively
   * increase the limit in `this.#increaseLimit` until another call is made to
   * `this.rateLimit`.
   * Call this function when using the RateLimitedQueue for network requests and
   * the remote server responds with 429 HTTP code.
   *
   * @param {number} duration in milliseconds.
   */ rateLimit(duration) {
        clearTimeout(_classPrivateFieldLooseBase(this, _rateLimitingTimer)[_rateLimitingTimer]);
        this.pause(duration);
        if (this.limit > 1 && Number.isFinite(this.limit)) {
            _classPrivateFieldLooseBase(this, _upperLimit)[_upperLimit] = this.limit - 1;
            this.limit = _classPrivateFieldLooseBase(this, _downLimit)[_downLimit];
            _classPrivateFieldLooseBase(this, _rateLimitingTimer)[_rateLimitingTimer] = setTimeout(_classPrivateFieldLooseBase(this, _increaseLimit)[_increaseLimit], duration);
        }
    }
    get isPaused() {
        return _classPrivateFieldLooseBase(this, _paused)[_paused];
    }
}
function _call2(fn) {
    _classPrivateFieldLooseBase(this, _activeRequests)[_activeRequests] += 1;
    let done = false;
    let cancelActive;
    try {
        cancelActive = fn();
    } catch (err) {
        _classPrivateFieldLooseBase(this, _activeRequests)[_activeRequests] -= 1;
        throw err;
    }
    return {
        abort: (cause)=>{
            if (done) return;
            done = true;
            _classPrivateFieldLooseBase(this, _activeRequests)[_activeRequests] -= 1;
            cancelActive(cause);
            _classPrivateFieldLooseBase(this, _queueNext)[_queueNext]();
        },
        done: ()=>{
            if (done) return;
            done = true;
            _classPrivateFieldLooseBase(this, _activeRequests)[_activeRequests] -= 1;
            _classPrivateFieldLooseBase(this, _queueNext)[_queueNext]();
        }
    };
}
function _queueNext2() {
    // Do it soon but not immediately, this allows clearing out the entire queue synchronously
    // one by one without continuously _advancing_ it (and starting new tasks before immediately
    // aborting them)
    queueMicrotask(()=>_classPrivateFieldLooseBase(this, _next)[_next]());
}
function _next2() {
    if (_classPrivateFieldLooseBase(this, _paused)[_paused] || _classPrivateFieldLooseBase(this, _activeRequests)[_activeRequests] >= this.limit) return;
    if (_classPrivateFieldLooseBase(this, _queuedHandlers)[_queuedHandlers].length === 0) return;
    // Dispatch the next request, and update the abort/done handlers
    // so that cancelling it does the Right Thing (and doesn't just try
    // to dequeue an already-running request).
    const next = _classPrivateFieldLooseBase(this, _queuedHandlers)[_queuedHandlers].shift();
    const handler = _classPrivateFieldLooseBase(this, _call)[_call](next.fn);
    next.abort = handler.abort;
    next.done = handler.done;
}
function _queue2(fn, options) {
    if (options === void 0) options = {};
    const handler = {
        fn,
        priority: options.priority || 0,
        abort: ()=>{
            _classPrivateFieldLooseBase(this, _dequeue)[_dequeue](handler);
        },
        done: ()=>{
            throw new Error("Cannot mark a queued request as done: this indicates a bug");
        }
    };
    const index = _classPrivateFieldLooseBase(this, _queuedHandlers)[_queuedHandlers].findIndex((other)=>{
        return handler.priority > other.priority;
    });
    if (index === -1) _classPrivateFieldLooseBase(this, _queuedHandlers)[_queuedHandlers].push(handler);
    else _classPrivateFieldLooseBase(this, _queuedHandlers)[_queuedHandlers].splice(index, 0, handler);
    return handler;
}
function _dequeue2(handler) {
    const index = _classPrivateFieldLooseBase(this, _queuedHandlers)[_queuedHandlers].indexOf(handler);
    if (index !== -1) _classPrivateFieldLooseBase(this, _queuedHandlers)[_queuedHandlers].splice(index, 1);
}
const internalRateLimitedQueue = Symbol("__queue");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"6hFz9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isNetworkError(xhr) {
    if (!xhr) return false;
    return xhr.readyState !== 0 && xhr.readyState !== 4 || xhr.status === 0;
}
exports.default = isNetworkError;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"01ZH8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "filterNonFailedFiles", ()=>filterNonFailedFiles);
// Don't double-emit upload-started for Golden Retriever-restored files that were already started
parcelHelpers.export(exports, "filterFilesToEmitUploadStarted", ()=>filterFilesToEmitUploadStarted);
function filterNonFailedFiles(files) {
    const hasError = (file)=>"error" in file && file.error;
    return files.filter((file)=>!hasError(file));
}
function filterFilesToEmitUploadStarted(files) {
    return files.filter((file)=>!file.progress.uploadStarted || !file.isRestored);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"dLclj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    strings: {
        // Shown in the Informer if an upload is being canceled because it stalled for too long.
        uploadStalled: "Upload has not made any progress for %{seconds} seconds. You may want to retry it."
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"9yvGq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _dashboardJsDefault.default));
var _dashboardJs = require("./Dashboard.js");
var _dashboardJsDefault = parcelHelpers.interopDefault(_dashboardJs);

},{"./Dashboard.js":"kOvaJ","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"kOvaJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _core = require("@uppy/core");
var _statusBar = require("@uppy/status-bar");
var _statusBarDefault = parcelHelpers.interopDefault(_statusBar);
var _informer = require("@uppy/informer");
var _informerDefault = parcelHelpers.interopDefault(_informer);
var _thumbnailGenerator = require("@uppy/thumbnail-generator");
var _thumbnailGeneratorDefault = parcelHelpers.interopDefault(_thumbnailGenerator);
var _findAllDOMElements = require("@uppy/utils/lib/findAllDOMElements");
var _findAllDOMElementsDefault = parcelHelpers.interopDefault(_findAllDOMElements);
var _toArray = require("@uppy/utils/lib/toArray");
var _toArrayDefault = parcelHelpers.interopDefault(_toArray);
var _getDroppedFiles = require("@uppy/utils/lib/getDroppedFiles");
var _getDroppedFilesDefault = parcelHelpers.interopDefault(_getDroppedFiles);
var _providerViews = require("@uppy/provider-views");
var _nonSecure = require("nanoid/non-secure");
var _memoizeOne = require("memoize-one");
var _memoizeOneDefault = parcelHelpers.interopDefault(_memoizeOne);
var _trapFocusJs = require("./utils/trapFocus.js");
var _createSuperFocusJs = require("./utils/createSuperFocus.js");
var _createSuperFocusJsDefault = parcelHelpers.interopDefault(_createSuperFocusJs);
var _dashboardJs = require("./components/Dashboard.js");
var _dashboardJsDefault = parcelHelpers.interopDefault(_dashboardJs);
var _localeJs = require("./locale.js");
var _localeJsDefault = parcelHelpers.interopDefault(_localeJs);
function _classPrivateFieldLooseBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) throw new TypeError("attempted to use private field on non-instance");
    return receiver;
}
var id = 0;
function _classPrivateFieldLooseKey(name) {
    return "__private_" + id++ + "_" + name;
}
const packageJson = {
    "version": "3.5.4"
};
const memoize = (0, _memoizeOneDefault.default).default || (0, _memoizeOneDefault.default);
const TAB_KEY = 9;
const ESC_KEY = 27;
function createPromise() {
    const o = {};
    o.promise = new Promise((resolve, reject)=>{
        o.resolve = resolve;
        o.reject = reject;
    });
    return o;
}
/**
 * Dashboard UI with previews, metadata editing, tabs for various services and more
 */ var _disabledNodes = /*#__PURE__*/ _classPrivateFieldLooseKey("disabledNodes");
var _generateLargeThumbnailIfSingleFile = /*#__PURE__*/ _classPrivateFieldLooseKey("generateLargeThumbnailIfSingleFile");
var _openFileEditorWhenFilesAdded = /*#__PURE__*/ _classPrivateFieldLooseKey("openFileEditorWhenFilesAdded");
var _attachRenderFunctionToTarget = /*#__PURE__*/ _classPrivateFieldLooseKey("attachRenderFunctionToTarget");
var _isTargetSupported = /*#__PURE__*/ _classPrivateFieldLooseKey("isTargetSupported");
var _getAcquirers = /*#__PURE__*/ _classPrivateFieldLooseKey("getAcquirers");
var _getProgressIndicators = /*#__PURE__*/ _classPrivateFieldLooseKey("getProgressIndicators");
var _getEditors = /*#__PURE__*/ _classPrivateFieldLooseKey("getEditors");
class Dashboard extends (0, _core.UIPlugin) {
    constructor(uppy, _opts){
        var _this;
        super(uppy, _opts);
        _this = this;
        Object.defineProperty(this, _disabledNodes, {
            writable: true,
            value: null
        });
        this.removeTarget = (plugin)=>{
            const pluginState = this.getPluginState();
            // filter out the one we want to remove
            const newTargets = pluginState.targets.filter((target)=>target.id !== plugin.id);
            this.setPluginState({
                targets: newTargets
            });
        };
        this.addTarget = (plugin)=>{
            const callerPluginId = plugin.id || plugin.constructor.name;
            const callerPluginName = plugin.title || callerPluginId;
            const callerPluginType = plugin.type;
            if (callerPluginType !== "acquirer" && callerPluginType !== "progressindicator" && callerPluginType !== "editor") {
                const msg = "Dashboard: can only be targeted by plugins of types: acquirer, progressindicator, editor";
                this.uppy.log(msg, "error");
                return undefined;
            }
            const target = {
                id: callerPluginId,
                name: callerPluginName,
                type: callerPluginType
            };
            const state = this.getPluginState();
            const newTargets = state.targets.slice();
            newTargets.push(target);
            this.setPluginState({
                targets: newTargets
            });
            return this.el;
        };
        this.hideAllPanels = ()=>{
            const state = this.getPluginState();
            const update = {
                activePickerPanel: false,
                showAddFilesPanel: false,
                activeOverlayType: null,
                fileCardFor: null,
                showFileEditor: false
            };
            if (state.activePickerPanel === update.activePickerPanel && state.showAddFilesPanel === update.showAddFilesPanel && state.showFileEditor === update.showFileEditor && state.activeOverlayType === update.activeOverlayType) // avoid doing a state update if nothing changed
            return;
            this.setPluginState(update);
            this.uppy.emit("dashboard:close-panel", state.activePickerPanel.id);
        };
        this.showPanel = (id)=>{
            const { targets } = this.getPluginState();
            const activePickerPanel = targets.filter((target)=>{
                return target.type === "acquirer" && target.id === id;
            })[0];
            this.setPluginState({
                activePickerPanel,
                activeOverlayType: "PickerPanel"
            });
            this.uppy.emit("dashboard:show-panel", id);
        };
        this.canEditFile = (file)=>{
            const { targets } = this.getPluginState();
            const editors = _classPrivateFieldLooseBase(this, _getEditors)[_getEditors](targets);
            return editors.some((target)=>this.uppy.getPlugin(target.id).canEditFile(file));
        };
        this.openFileEditor = (file)=>{
            const { targets } = this.getPluginState();
            const editors = _classPrivateFieldLooseBase(this, _getEditors)[_getEditors](targets);
            this.setPluginState({
                showFileEditor: true,
                fileCardFor: file.id || null,
                activeOverlayType: "FileEditor"
            });
            editors.forEach((editor)=>{
                this.uppy.getPlugin(editor.id).selectFile(file);
            });
        };
        this.saveFileEditor = ()=>{
            const { targets } = this.getPluginState();
            const editors = _classPrivateFieldLooseBase(this, _getEditors)[_getEditors](targets);
            editors.forEach((editor)=>{
                this.uppy.getPlugin(editor.id).save();
            });
            this.hideAllPanels();
        };
        this.openModal = ()=>{
            const { promise, resolve } = createPromise();
            // save scroll position
            this.savedScrollPosition = window.pageYOffset;
            // save active element, so we can restore focus when modal is closed
            this.savedActiveElement = document.activeElement;
            if (this.opts.disablePageScrollWhenModalOpen) document.body.classList.add("uppy-Dashboard-isFixed");
            if (this.opts.animateOpenClose && this.getPluginState().isClosing) {
                const handler = ()=>{
                    this.setPluginState({
                        isHidden: false
                    });
                    this.el.removeEventListener("animationend", handler, false);
                    resolve();
                };
                this.el.addEventListener("animationend", handler, false);
            } else {
                this.setPluginState({
                    isHidden: false
                });
                resolve();
            }
            if (this.opts.browserBackButtonClose) this.updateBrowserHistory();
            // handle ESC and TAB keys in modal dialog
            document.addEventListener("keydown", this.handleKeyDownInModal);
            this.uppy.emit("dashboard:modal-open");
            return promise;
        };
        this.closeModal = function(opts) {
            if (opts === void 0) opts = {};
            const { // Whether the modal is being closed by the user (`true`) or by other means (e.g. browser back button)
            manualClose = true } = opts;
            const { isHidden, isClosing } = _this.getPluginState();
            if (isHidden || isClosing) // short-circuit if animation is ongoing
            return undefined;
            const { promise, resolve } = createPromise();
            if (_this.opts.disablePageScrollWhenModalOpen) document.body.classList.remove("uppy-Dashboard-isFixed");
            if (_this.opts.animateOpenClose) {
                _this.setPluginState({
                    isClosing: true
                });
                const handler = ()=>{
                    _this.setPluginState({
                        isHidden: true,
                        isClosing: false
                    });
                    _this.superFocus.cancel();
                    _this.savedActiveElement.focus();
                    _this.el.removeEventListener("animationend", handler, false);
                    resolve();
                };
                _this.el.addEventListener("animationend", handler, false);
            } else {
                _this.setPluginState({
                    isHidden: true
                });
                _this.superFocus.cancel();
                _this.savedActiveElement.focus();
                resolve();
            }
            // handle ESC and TAB keys in modal dialog
            document.removeEventListener("keydown", _this.handleKeyDownInModal);
            if (manualClose) {
                if (_this.opts.browserBackButtonClose) {
                    var _history$state;
                    // Make sure that the latest entry in the history state is our modal name
                    // eslint-disable-next-line no-restricted-globals
                    if ((_history$state = history.state) != null && _history$state[_this.modalName]) // Go back in history to clear out the entry we created (ultimately closing the modal)
                    // eslint-disable-next-line no-restricted-globals
                    history.back();
                }
            }
            _this.uppy.emit("dashboard:modal-closed");
            return promise;
        };
        this.isModalOpen = ()=>{
            return !this.getPluginState().isHidden || false;
        };
        this.requestCloseModal = ()=>{
            if (this.opts.onRequestCloseModal) return this.opts.onRequestCloseModal();
            return this.closeModal();
        };
        this.setDarkModeCapability = (isDarkModeOn)=>{
            const { capabilities } = this.uppy.getState();
            this.uppy.setState({
                capabilities: {
                    ...capabilities,
                    darkMode: isDarkModeOn
                }
            });
        };
        this.handleSystemDarkModeChange = (event)=>{
            const isDarkModeOnNow = event.matches;
            this.uppy.log(`[Dashboard] Dark mode is ${isDarkModeOnNow ? "on" : "off"}`);
            this.setDarkModeCapability(isDarkModeOnNow);
        };
        this.toggleFileCard = (show, fileID)=>{
            const file = this.uppy.getFile(fileID);
            if (show) this.uppy.emit("dashboard:file-edit-start", file);
            else this.uppy.emit("dashboard:file-edit-complete", file);
            this.setPluginState({
                fileCardFor: show ? fileID : null,
                activeOverlayType: show ? "FileCard" : null
            });
        };
        this.toggleAddFilesPanel = (show)=>{
            this.setPluginState({
                showAddFilesPanel: show,
                activeOverlayType: show ? "AddFiles" : null
            });
        };
        this.addFiles = (files)=>{
            const descriptors = files.map((file)=>({
                    source: this.id,
                    name: file.name,
                    type: file.type,
                    data: file,
                    meta: {
                        // path of the file relative to the ancestor directory the user selected.
                        // e.g. 'docs/Old Prague/airbnb.pdf'
                        relativePath: file.relativePath || file.webkitRelativePath || null
                    }
                }));
            try {
                this.uppy.addFiles(descriptors);
            } catch (err) {
                this.uppy.log(err);
            }
        };
        // ___Why make insides of Dashboard invisible until first ResizeObserver event is emitted?
        //    ResizeOberserver doesn't emit the first resize event fast enough, users can see the jump from one .uppy-size-- to
        //    another (e.g. in Safari)
        // ___Why not apply visibility property to .uppy-Dashboard-inner?
        //    Because ideally, acc to specs, ResizeObserver should see invisible elements as of width 0. So even though applying
        //    invisibility to .uppy-Dashboard-inner works now, it may not work in the future.
        this.startListeningToResize = ()=>{
            // Watch for Dashboard container (`.uppy-Dashboard-inner`) resize
            // and update containerWidth/containerHeight in plugin state accordingly.
            // Emits first event on initialization.
            this.resizeObserver = new ResizeObserver((entries)=>{
                const uppyDashboardInnerEl = entries[0];
                const { width, height } = uppyDashboardInnerEl.contentRect;
                this.setPluginState({
                    containerWidth: width,
                    containerHeight: height,
                    areInsidesReadyToBeVisible: true
                });
            });
            this.resizeObserver.observe(this.el.querySelector(".uppy-Dashboard-inner"));
            // If ResizeObserver fails to emit an event telling us what size to use - default to the mobile view
            this.makeDashboardInsidesVisibleAnywayTimeout = setTimeout(()=>{
                const pluginState = this.getPluginState();
                const isModalAndClosed = !this.opts.inline && pluginState.isHidden;
                if (// We might want to enable this in the future
                // if ResizeObserver hasn't yet fired,
                !pluginState.areInsidesReadyToBeVisible && !isModalAndClosed) {
                    this.uppy.log("[Dashboard] resize event didn’t fire on time: defaulted to mobile layout", "warning");
                    this.setPluginState({
                        areInsidesReadyToBeVisible: true
                    });
                }
            }, 1000);
        };
        this.stopListeningToResize = ()=>{
            this.resizeObserver.disconnect();
            clearTimeout(this.makeDashboardInsidesVisibleAnywayTimeout);
        };
        // Records whether we have been interacting with uppy right now,
        // which is then used to determine whether state updates should trigger a refocusing.
        this.recordIfFocusedOnUppyRecently = (event)=>{
            if (this.el.contains(event.target)) this.ifFocusedOnUppyRecently = true;
            else {
                this.ifFocusedOnUppyRecently = false;
                // ___Why run this.superFocus.cancel here when it already runs in superFocusOnEachUpdate?
                //    Because superFocus is debounced, when we move from Uppy to some other element on the page,
                //    previously run superFocus sometimes hits and moves focus back to Uppy.
                this.superFocus.cancel();
            }
        };
        this.disableInteractiveElements = (disable)=>{
            var _classPrivateFieldLoo;
            const NODES_TO_DISABLE = [
                "a[href]",
                "input:not([disabled])",
                "select:not([disabled])",
                "textarea:not([disabled])",
                "button:not([disabled])",
                '[role="button"]:not([disabled])'
            ];
            const nodesToDisable = (_classPrivateFieldLoo = _classPrivateFieldLooseBase(this, _disabledNodes)[_disabledNodes]) != null ? _classPrivateFieldLoo : (0, _toArrayDefault.default)(this.el.querySelectorAll(NODES_TO_DISABLE)).filter((node)=>!node.classList.contains("uppy-Dashboard-close"));
            for (const node of nodesToDisable)// Links can’t have `disabled` attr, so we use `aria-disabled` for a11y
            if (node.tagName === "A") node.setAttribute("aria-disabled", disable);
            else node.disabled = disable;
            if (disable) _classPrivateFieldLooseBase(this, _disabledNodes)[_disabledNodes] = nodesToDisable;
            else _classPrivateFieldLooseBase(this, _disabledNodes)[_disabledNodes] = null;
            this.dashboardIsDisabled = disable;
        };
        this.updateBrowserHistory = ()=>{
            var _history$state2;
            // Ensure history state does not already contain our modal name to avoid double-pushing
            // eslint-disable-next-line no-restricted-globals
            if (!((_history$state2 = history.state) != null && _history$state2[this.modalName])) // Push to history so that the page is not lost on browser back button press
            // eslint-disable-next-line no-restricted-globals
            history.pushState({
                // eslint-disable-next-line no-restricted-globals
                ...history.state,
                [this.modalName]: true
            }, "");
            // Listen for back button presses
            window.addEventListener("popstate", this.handlePopState, false);
        };
        this.handlePopState = (event)=>{
            var _event$state;
            // Close the modal if the history state no longer contains our modal name
            if (this.isModalOpen() && (!event.state || !event.state[this.modalName])) this.closeModal({
                manualClose: false
            });
            // When the browser back button is pressed and uppy is now the latest entry
            // in the history but the modal is closed, fix the history by removing the
            // uppy history entry.
            // This occurs when another entry is added into the history state while the
            // modal is open, and then the modal gets manually closed.
            // Solves PR #575 (https://github.com/transloadit/uppy/pull/575)
            if (!this.isModalOpen() && (_event$state = event.state) != null && _event$state[this.modalName]) // eslint-disable-next-line no-restricted-globals
            history.back();
        };
        this.handleKeyDownInModal = (event)=>{
            // close modal on esc key press
            if (event.keyCode === ESC_KEY) this.requestCloseModal(event);
            // trap focus on tab key press
            if (event.keyCode === TAB_KEY) _trapFocusJs.forModal(event, this.getPluginState().activeOverlayType, this.el);
        };
        this.handleClickOutside = ()=>{
            if (this.opts.closeModalOnClickOutside) this.requestCloseModal();
        };
        this.handlePaste = (event)=>{
            // Let any acquirer plugin (Url/Webcam/etc.) handle pastes to the root
            this.uppy.iteratePlugins((plugin)=>{
                if (plugin.type === "acquirer") // Every Plugin with .type acquirer can define handleRootPaste(event)
                plugin.handleRootPaste == null || plugin.handleRootPaste(event);
            });
            // Add all dropped files
            const files = (0, _toArrayDefault.default)(event.clipboardData.files);
            if (files.length > 0) {
                this.uppy.log("[Dashboard] Files pasted");
                this.addFiles(files);
            }
        };
        this.handleInputChange = (event)=>{
            event.preventDefault();
            const files = (0, _toArrayDefault.default)(event.target.files);
            if (files.length > 0) {
                this.uppy.log("[Dashboard] Files selected through input");
                this.addFiles(files);
            }
        };
        this.handleDragOver = (event)=>{
            var _this$opts$onDragOver, _this$opts;
            event.preventDefault();
            event.stopPropagation();
            // Check if some plugin can handle the datatransfer without files —
            // for instance, the Url plugin can import a url
            const canSomePluginHandleRootDrop = ()=>{
                let somePluginCanHandleRootDrop = true;
                this.uppy.iteratePlugins((plugin)=>{
                    if (plugin.canHandleRootDrop != null && plugin.canHandleRootDrop(event)) somePluginCanHandleRootDrop = true;
                });
                return somePluginCanHandleRootDrop;
            };
            // Check if the "type" of the datatransfer object includes files
            const doesEventHaveFiles = ()=>{
                const { types } = event.dataTransfer;
                return types.some((type)=>type === "Files");
            };
            // Deny drop, if no plugins can handle datatransfer, there are no files,
            // or when opts.disabled is set, or new uploads are not allowed
            const somePluginCanHandleRootDrop = canSomePluginHandleRootDrop(event);
            const hasFiles = doesEventHaveFiles(event);
            if (!somePluginCanHandleRootDrop && !hasFiles || this.opts.disabled || this.opts.disableLocalFiles && (hasFiles || !somePluginCanHandleRootDrop) || !this.uppy.getState().allowNewUpload) {
                event.dataTransfer.dropEffect = "none"; // eslint-disable-line no-param-reassign
                clearTimeout(this.removeDragOverClassTimeout);
                return;
            }
            // Add a small (+) icon on drop
            // (and prevent browsers from interpreting this as files being _moved_ into the
            // browser, https://github.com/transloadit/uppy/issues/1978).
            event.dataTransfer.dropEffect = "copy"; // eslint-disable-line no-param-reassign
            clearTimeout(this.removeDragOverClassTimeout);
            this.setPluginState({
                isDraggingOver: true
            });
            (_this$opts$onDragOver = (_this$opts = this.opts).onDragOver) == null || _this$opts$onDragOver.call(_this$opts, event);
        };
        this.handleDragLeave = (event)=>{
            var _this$opts$onDragLeav, _this$opts2;
            event.preventDefault();
            event.stopPropagation();
            clearTimeout(this.removeDragOverClassTimeout);
            // Timeout against flickering, this solution is taken from drag-drop library.
            // Solution with 'pointer-events: none' didn't work across browsers.
            this.removeDragOverClassTimeout = setTimeout(()=>{
                this.setPluginState({
                    isDraggingOver: false
                });
            }, 50);
            (_this$opts$onDragLeav = (_this$opts2 = this.opts).onDragLeave) == null || _this$opts$onDragLeav.call(_this$opts2, event);
        };
        this.handleDrop = async (event)=>{
            var _this$opts$onDrop, _this$opts3;
            event.preventDefault();
            event.stopPropagation();
            clearTimeout(this.removeDragOverClassTimeout);
            this.setPluginState({
                isDraggingOver: false
            });
            // Let any acquirer plugin (Url/Webcam/etc.) handle drops to the root
            this.uppy.iteratePlugins((plugin)=>{
                if (plugin.type === "acquirer") // Every Plugin with .type acquirer can define handleRootDrop(event)
                plugin.handleRootDrop == null || plugin.handleRootDrop(event);
            });
            // Add all dropped files
            let executedDropErrorOnce = false;
            const logDropError = (error)=>{
                this.uppy.log(error, "error");
                // In practice all drop errors are most likely the same,
                // so let's just show one to avoid overwhelming the user
                if (!executedDropErrorOnce) {
                    this.uppy.info(error.message, "error");
                    executedDropErrorOnce = true;
                }
            };
            this.uppy.log("[Dashboard] Processing dropped files");
            // Add all dropped files
            const files = await (0, _getDroppedFilesDefault.default)(event.dataTransfer, {
                logDropError
            });
            if (files.length > 0) {
                this.uppy.log("[Dashboard] Files dropped");
                this.addFiles(files);
            }
            (_this$opts$onDrop = (_this$opts3 = this.opts).onDrop) == null || _this$opts$onDrop.call(_this$opts3, event);
        };
        this.handleRequestThumbnail = (file)=>{
            if (!this.opts.waitForThumbnailsBeforeUpload) this.uppy.emit("thumbnail:request", file);
        };
        /**
     * We cancel thumbnail requests when a file item component unmounts to avoid
     * clogging up the queue when the user scrolls past many elements.
     */ this.handleCancelThumbnail = (file)=>{
            if (!this.opts.waitForThumbnailsBeforeUpload) this.uppy.emit("thumbnail:cancel", file);
        };
        this.handleKeyDownInInline = (event)=>{
            // Trap focus on tab key press.
            if (event.keyCode === TAB_KEY) _trapFocusJs.forInline(event, this.getPluginState().activeOverlayType, this.el);
        };
        // ___Why do we listen to the 'paste' event on a document instead of onPaste={props.handlePaste} prop,
        //    or this.el.addEventListener('paste')?
        //    Because (at least) Chrome doesn't handle paste if focus is on some button, e.g. 'My Device'.
        //    => Therefore, the best option is to listen to all 'paste' events, and only react to them when we are focused on our
        //       particular Uppy instance.
        // ___Why do we still need onPaste={props.handlePaste} for the DashboardUi?
        //    Because if we click on the 'Drop files here' caption e.g., `document.activeElement` will be 'body'. Which means our
        //    standard determination of whether we're pasting into our Uppy instance won't work.
        //    => Therefore, we need a traditional onPaste={props.handlePaste} handler too.
        this.handlePasteOnBody = (event)=>{
            const isFocusInOverlay = this.el.contains(document.activeElement);
            if (isFocusInOverlay) this.handlePaste(event);
        };
        this.handleComplete = (_ref)=>{
            let { failed } = _ref;
            if (this.opts.closeAfterFinish && failed.length === 0) // All uploads are done
            this.requestCloseModal();
        };
        this.handleCancelRestore = ()=>{
            this.uppy.emit("restore-canceled");
        };
        Object.defineProperty(this, _generateLargeThumbnailIfSingleFile, {
            writable: true,
            value: ()=>{
                if (this.opts.disableThumbnailGenerator) return;
                const LARGE_THUMBNAIL = 600;
                const files = this.uppy.getFiles();
                if (files.length === 1) {
                    const thumbnailGenerator = this.uppy.getPlugin(`${this.id}:ThumbnailGenerator`);
                    thumbnailGenerator == null || thumbnailGenerator.setOptions({
                        thumbnailWidth: LARGE_THUMBNAIL
                    });
                    const fileForThumbnail = {
                        ...files[0],
                        preview: undefined
                    };
                    thumbnailGenerator.requestThumbnail(fileForThumbnail).then(()=>{
                        thumbnailGenerator == null || thumbnailGenerator.setOptions({
                            thumbnailWidth: this.opts.thumbnailWidth
                        });
                    });
                }
            }
        });
        Object.defineProperty(this, _openFileEditorWhenFilesAdded, {
            writable: true,
            value: (files)=>{
                const firstFile = files[0];
                if (this.canEditFile(firstFile)) this.openFileEditor(firstFile);
            }
        });
        this.initEvents = ()=>{
            // Modal open button
            if (this.opts.trigger && !this.opts.inline) {
                const showModalTrigger = (0, _findAllDOMElementsDefault.default)(this.opts.trigger);
                if (showModalTrigger) showModalTrigger.forEach((trigger)=>trigger.addEventListener("click", this.openModal));
                else this.uppy.log("Dashboard modal trigger not found. Make sure `trigger` is set in Dashboard options, unless you are planning to call `dashboard.openModal()` method yourself", "warning");
            }
            this.startListeningToResize();
            document.addEventListener("paste", this.handlePasteOnBody);
            this.uppy.on("plugin-remove", this.removeTarget);
            this.uppy.on("file-added", this.hideAllPanels);
            this.uppy.on("dashboard:modal-closed", this.hideAllPanels);
            this.uppy.on("file-editor:complete", this.hideAllPanels);
            this.uppy.on("complete", this.handleComplete);
            this.uppy.on("files-added", _classPrivateFieldLooseBase(this, _generateLargeThumbnailIfSingleFile)[_generateLargeThumbnailIfSingleFile]);
            this.uppy.on("file-removed", _classPrivateFieldLooseBase(this, _generateLargeThumbnailIfSingleFile)[_generateLargeThumbnailIfSingleFile]);
            // ___Why fire on capture?
            //    Because this.ifFocusedOnUppyRecently needs to change before onUpdate() fires.
            document.addEventListener("focus", this.recordIfFocusedOnUppyRecently, true);
            document.addEventListener("click", this.recordIfFocusedOnUppyRecently, true);
            if (this.opts.inline) this.el.addEventListener("keydown", this.handleKeyDownInInline);
            if (this.opts.autoOpenFileEditor) this.uppy.on("files-added", _classPrivateFieldLooseBase(this, _openFileEditorWhenFilesAdded)[_openFileEditorWhenFilesAdded]);
        };
        this.removeEvents = ()=>{
            const showModalTrigger = (0, _findAllDOMElementsDefault.default)(this.opts.trigger);
            if (!this.opts.inline && showModalTrigger) showModalTrigger.forEach((trigger)=>trigger.removeEventListener("click", this.openModal));
            this.stopListeningToResize();
            document.removeEventListener("paste", this.handlePasteOnBody);
            window.removeEventListener("popstate", this.handlePopState, false);
            this.uppy.off("plugin-remove", this.removeTarget);
            this.uppy.off("file-added", this.hideAllPanels);
            this.uppy.off("dashboard:modal-closed", this.hideAllPanels);
            this.uppy.off("file-editor:complete", this.hideAllPanels);
            this.uppy.off("complete", this.handleComplete);
            this.uppy.off("files-added", _classPrivateFieldLooseBase(this, _generateLargeThumbnailIfSingleFile)[_generateLargeThumbnailIfSingleFile]);
            this.uppy.off("file-removed", _classPrivateFieldLooseBase(this, _generateLargeThumbnailIfSingleFile)[_generateLargeThumbnailIfSingleFile]);
            document.removeEventListener("focus", this.recordIfFocusedOnUppyRecently);
            document.removeEventListener("click", this.recordIfFocusedOnUppyRecently);
            if (this.opts.inline) this.el.removeEventListener("keydown", this.handleKeyDownInInline);
            if (this.opts.autoOpenFileEditor) this.uppy.off("files-added", _classPrivateFieldLooseBase(this, _openFileEditorWhenFilesAdded)[_openFileEditorWhenFilesAdded]);
        };
        this.superFocusOnEachUpdate = ()=>{
            const isFocusInUppy = this.el.contains(document.activeElement);
            // When focus is lost on the page (== focus is on body for most browsers, or focus is null for IE11)
            const isFocusNowhere = document.activeElement === document.body || document.activeElement === null;
            const isInformerHidden = this.uppy.getState().info.length === 0;
            const isModal = !this.opts.inline;
            if (// If update is connected to showing the Informer - let the screen reader calmly read it.
            isInformerHidden && // If we are in a modal - always superfocus without concern for other elements
            // on the page (user is unlikely to want to interact with the rest of the page)
            (isModal || isFocusInUppy || isFocusNowhere && this.ifFocusedOnUppyRecently)) this.superFocus(this.el, this.getPluginState().activeOverlayType);
            else this.superFocus.cancel();
        };
        this.afterUpdate = ()=>{
            if (this.opts.disabled && !this.dashboardIsDisabled) {
                this.disableInteractiveElements(true);
                return;
            }
            if (!this.opts.disabled && this.dashboardIsDisabled) this.disableInteractiveElements(false);
            this.superFocusOnEachUpdate();
        };
        this.saveFileCard = (meta, fileID)=>{
            this.uppy.setFileMeta(fileID, meta);
            this.toggleFileCard(false, fileID);
        };
        Object.defineProperty(this, _attachRenderFunctionToTarget, {
            writable: true,
            value: (target)=>{
                const plugin = this.uppy.getPlugin(target.id);
                return {
                    ...target,
                    icon: plugin.icon || this.opts.defaultPickerIcon,
                    render: plugin.render
                };
            }
        });
        Object.defineProperty(this, _isTargetSupported, {
            writable: true,
            value: (target)=>{
                const plugin = this.uppy.getPlugin(target.id);
                // If the plugin does not provide a `supported` check, assume the plugin works everywhere.
                if (typeof plugin.isSupported !== "function") return true;
                return plugin.isSupported();
            }
        });
        Object.defineProperty(this, _getAcquirers, {
            writable: true,
            value: memoize((targets)=>{
                return targets.filter((target)=>target.type === "acquirer" && _classPrivateFieldLooseBase(this, _isTargetSupported)[_isTargetSupported](target)).map(_classPrivateFieldLooseBase(this, _attachRenderFunctionToTarget)[_attachRenderFunctionToTarget]);
            })
        });
        Object.defineProperty(this, _getProgressIndicators, {
            writable: true,
            value: memoize((targets)=>{
                return targets.filter((target)=>target.type === "progressindicator").map(_classPrivateFieldLooseBase(this, _attachRenderFunctionToTarget)[_attachRenderFunctionToTarget]);
            })
        });
        Object.defineProperty(this, _getEditors, {
            writable: true,
            value: memoize((targets)=>{
                return targets.filter((target)=>target.type === "editor").map(_classPrivateFieldLooseBase(this, _attachRenderFunctionToTarget)[_attachRenderFunctionToTarget]);
            })
        });
        this.render = (state)=>{
            const pluginState = this.getPluginState();
            const { files, capabilities, allowNewUpload } = state;
            const { newFiles, uploadStartedFiles, completeFiles, erroredFiles, inProgressFiles, inProgressNotPausedFiles, processingFiles, isUploadStarted, isAllComplete, isAllErrored, isAllPaused } = this.uppy.getObjectOfFilesPerState();
            const acquirers = _classPrivateFieldLooseBase(this, _getAcquirers)[_getAcquirers](pluginState.targets);
            const progressindicators = _classPrivateFieldLooseBase(this, _getProgressIndicators)[_getProgressIndicators](pluginState.targets);
            const editors = _classPrivateFieldLooseBase(this, _getEditors)[_getEditors](pluginState.targets);
            let theme;
            if (this.opts.theme === "auto") theme = capabilities.darkMode ? "dark" : "light";
            else theme = this.opts.theme;
            if ([
                "files",
                "folders",
                "both"
            ].indexOf(this.opts.fileManagerSelectionType) < 0) {
                this.opts.fileManagerSelectionType = "files";
                // eslint-disable-next-line no-console
                console.warn(`Unsupported option for "fileManagerSelectionType". Using default of "${this.opts.fileManagerSelectionType}".`);
            }
            return (0, _dashboardJsDefault.default)({
                state,
                isHidden: pluginState.isHidden,
                files,
                newFiles,
                uploadStartedFiles,
                completeFiles,
                erroredFiles,
                inProgressFiles,
                inProgressNotPausedFiles,
                processingFiles,
                isUploadStarted,
                isAllComplete,
                isAllErrored,
                isAllPaused,
                totalFileCount: Object.keys(files).length,
                totalProgress: state.totalProgress,
                allowNewUpload,
                acquirers,
                theme,
                disabled: this.opts.disabled,
                disableLocalFiles: this.opts.disableLocalFiles,
                direction: this.opts.direction,
                activePickerPanel: pluginState.activePickerPanel,
                showFileEditor: pluginState.showFileEditor,
                saveFileEditor: this.saveFileEditor,
                disableInteractiveElements: this.disableInteractiveElements,
                animateOpenClose: this.opts.animateOpenClose,
                isClosing: pluginState.isClosing,
                progressindicators,
                editors,
                autoProceed: this.uppy.opts.autoProceed,
                id: this.id,
                closeModal: this.requestCloseModal,
                handleClickOutside: this.handleClickOutside,
                handleInputChange: this.handleInputChange,
                handlePaste: this.handlePaste,
                inline: this.opts.inline,
                showPanel: this.showPanel,
                hideAllPanels: this.hideAllPanels,
                i18n: this.i18n,
                i18nArray: this.i18nArray,
                uppy: this.uppy,
                note: this.opts.note,
                recoveredState: state.recoveredState,
                metaFields: pluginState.metaFields,
                resumableUploads: capabilities.resumableUploads || false,
                individualCancellation: capabilities.individualCancellation,
                isMobileDevice: capabilities.isMobileDevice,
                fileCardFor: pluginState.fileCardFor,
                toggleFileCard: this.toggleFileCard,
                toggleAddFilesPanel: this.toggleAddFilesPanel,
                showAddFilesPanel: pluginState.showAddFilesPanel,
                saveFileCard: this.saveFileCard,
                openFileEditor: this.openFileEditor,
                canEditFile: this.canEditFile,
                width: this.opts.width,
                height: this.opts.height,
                showLinkToFileUploadResult: this.opts.showLinkToFileUploadResult,
                fileManagerSelectionType: this.opts.fileManagerSelectionType,
                proudlyDisplayPoweredByUppy: this.opts.proudlyDisplayPoweredByUppy,
                hideCancelButton: this.opts.hideCancelButton,
                hideRetryButton: this.opts.hideRetryButton,
                hidePauseResumeButton: this.opts.hidePauseResumeButton,
                showRemoveButtonAfterComplete: this.opts.showRemoveButtonAfterComplete,
                containerWidth: pluginState.containerWidth,
                containerHeight: pluginState.containerHeight,
                areInsidesReadyToBeVisible: pluginState.areInsidesReadyToBeVisible,
                isTargetDOMEl: this.isTargetDOMEl,
                parentElement: this.el,
                allowedFileTypes: this.uppy.opts.restrictions.allowedFileTypes,
                maxNumberOfFiles: this.uppy.opts.restrictions.maxNumberOfFiles,
                requiredMetaFields: this.uppy.opts.restrictions.requiredMetaFields,
                showSelectedFiles: this.opts.showSelectedFiles,
                showNativePhotoCameraButton: this.opts.showNativePhotoCameraButton,
                showNativeVideoCameraButton: this.opts.showNativeVideoCameraButton,
                nativeCameraFacingMode: this.opts.nativeCameraFacingMode,
                singleFileFullScreen: this.opts.singleFileFullScreen,
                handleCancelRestore: this.handleCancelRestore,
                handleRequestThumbnail: this.handleRequestThumbnail,
                handleCancelThumbnail: this.handleCancelThumbnail,
                // drag props
                isDraggingOver: pluginState.isDraggingOver,
                handleDragOver: this.handleDragOver,
                handleDragLeave: this.handleDragLeave,
                handleDrop: this.handleDrop
            });
        };
        this.discoverProviderPlugins = ()=>{
            this.uppy.iteratePlugins((plugin)=>{
                if (plugin && !plugin.target && plugin.opts && plugin.opts.target === this.constructor) this.addTarget(plugin);
            });
        };
        this.install = ()=>{
            // Set default state for Dashboard
            this.setPluginState({
                isHidden: true,
                fileCardFor: null,
                activeOverlayType: null,
                showAddFilesPanel: false,
                activePickerPanel: false,
                showFileEditor: false,
                metaFields: this.opts.metaFields,
                targets: [],
                // We'll make them visible once .containerWidth is determined
                areInsidesReadyToBeVisible: false,
                isDraggingOver: false
            });
            const { inline, closeAfterFinish } = this.opts;
            if (inline && closeAfterFinish) throw new Error("[Dashboard] `closeAfterFinish: true` cannot be used on an inline Dashboard, because an inline Dashboard cannot be closed at all. Either set `inline: false`, or disable the `closeAfterFinish` option.");
            const { allowMultipleUploads, allowMultipleUploadBatches } = this.uppy.opts;
            if ((allowMultipleUploads || allowMultipleUploadBatches) && closeAfterFinish) this.uppy.log("[Dashboard] When using `closeAfterFinish`, we recommended setting the `allowMultipleUploadBatches` option to `false` in the Uppy constructor. See https://uppy.io/docs/uppy/#allowMultipleUploads-true", "warning");
            const { target } = this.opts;
            if (target) this.mount(target, this);
            const plugins = this.opts.plugins || [];
            plugins.forEach((pluginID)=>{
                const plugin = this.uppy.getPlugin(pluginID);
                if (plugin) plugin.mount(this, plugin);
            });
            if (!this.opts.disableStatusBar) this.uppy.use((0, _statusBarDefault.default), {
                id: `${this.id}:StatusBar`,
                target: this,
                hideUploadButton: this.opts.hideUploadButton,
                hideRetryButton: this.opts.hideRetryButton,
                hidePauseResumeButton: this.opts.hidePauseResumeButton,
                hideCancelButton: this.opts.hideCancelButton,
                showProgressDetails: this.opts.showProgressDetails,
                hideAfterFinish: this.opts.hideProgressAfterFinish,
                locale: this.opts.locale,
                doneButtonHandler: this.opts.doneButtonHandler
            });
            if (!this.opts.disableInformer) this.uppy.use((0, _informerDefault.default), {
                id: `${this.id}:Informer`,
                target: this
            });
            if (!this.opts.disableThumbnailGenerator) this.uppy.use((0, _thumbnailGeneratorDefault.default), {
                id: `${this.id}:ThumbnailGenerator`,
                thumbnailWidth: this.opts.thumbnailWidth,
                thumbnailHeight: this.opts.thumbnailHeight,
                thumbnailType: this.opts.thumbnailType,
                waitForThumbnailsBeforeUpload: this.opts.waitForThumbnailsBeforeUpload,
                // If we don't block on thumbnails, we can lazily generate them
                lazy: !this.opts.waitForThumbnailsBeforeUpload
            });
            // Dark Mode / theme
            this.darkModeMediaQuery = typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
            const isDarkModeOnFromTheStart = this.darkModeMediaQuery ? this.darkModeMediaQuery.matches : false;
            this.uppy.log(`[Dashboard] Dark mode is ${isDarkModeOnFromTheStart ? "on" : "off"}`);
            this.setDarkModeCapability(isDarkModeOnFromTheStart);
            if (this.opts.theme === "auto") this.darkModeMediaQuery.addListener(this.handleSystemDarkModeChange);
            this.discoverProviderPlugins();
            this.initEvents();
        };
        this.uninstall = ()=>{
            if (!this.opts.disableInformer) {
                const informer = this.uppy.getPlugin(`${this.id}:Informer`);
                // Checking if this plugin exists, in case it was removed by uppy-core
                // before the Dashboard was.
                if (informer) this.uppy.removePlugin(informer);
            }
            if (!this.opts.disableStatusBar) {
                const statusBar = this.uppy.getPlugin(`${this.id}:StatusBar`);
                if (statusBar) this.uppy.removePlugin(statusBar);
            }
            if (!this.opts.disableThumbnailGenerator) {
                const thumbnail = this.uppy.getPlugin(`${this.id}:ThumbnailGenerator`);
                if (thumbnail) this.uppy.removePlugin(thumbnail);
            }
            const plugins = this.opts.plugins || [];
            plugins.forEach((pluginID)=>{
                const plugin = this.uppy.getPlugin(pluginID);
                if (plugin) plugin.unmount();
            });
            if (this.opts.theme === "auto") this.darkModeMediaQuery.removeListener(this.handleSystemDarkModeChange);
            this.unmount();
            this.removeEvents();
        };
        this.id = this.opts.id || "Dashboard";
        this.title = "Dashboard";
        this.type = "orchestrator";
        this.modalName = `uppy-Dashboard-${(0, _nonSecure.nanoid)()}`;
        this.defaultLocale = (0, _localeJsDefault.default);
        // set default options, must be kept in sync with packages/@uppy/react/src/DashboardModal.js
        const defaultOptions = {
            target: "body",
            metaFields: [],
            trigger: null,
            inline: false,
            width: 750,
            height: 550,
            thumbnailWidth: 280,
            thumbnailType: "image/jpeg",
            waitForThumbnailsBeforeUpload: false,
            defaultPickerIcon: (0, _providerViews.defaultPickerIcon),
            showLinkToFileUploadResult: false,
            showProgressDetails: false,
            hideUploadButton: false,
            hideCancelButton: false,
            hideRetryButton: false,
            hidePauseResumeButton: false,
            hideProgressAfterFinish: false,
            doneButtonHandler: ()=>{
                this.uppy.cancelAll();
                this.requestCloseModal();
            },
            note: null,
            closeModalOnClickOutside: false,
            closeAfterFinish: false,
            singleFileFullScreen: true,
            disableStatusBar: false,
            disableInformer: false,
            disableThumbnailGenerator: false,
            disablePageScrollWhenModalOpen: true,
            animateOpenClose: true,
            fileManagerSelectionType: "files",
            proudlyDisplayPoweredByUppy: true,
            onRequestCloseModal: ()=>this.closeModal(),
            showSelectedFiles: true,
            showRemoveButtonAfterComplete: false,
            browserBackButtonClose: false,
            showNativePhotoCameraButton: false,
            showNativeVideoCameraButton: false,
            theme: "light",
            autoOpenFileEditor: false,
            disabled: false,
            disableLocalFiles: false
        };
        // merge default options with the ones set by user
        this.opts = {
            ...defaultOptions,
            ..._opts
        };
        this.i18nInit();
        this.superFocus = (0, _createSuperFocusJsDefault.default)();
        this.ifFocusedOnUppyRecently = false;
        // Timeouts
        this.makeDashboardInsidesVisibleAnywayTimeout = null;
        this.removeDragOverClassTimeout = null;
    }
}
exports.default = Dashboard;
Dashboard.VERSION = packageJson.version;

},{"@uppy/core":"8Yc3I","@uppy/status-bar":"1WRwV","@uppy/informer":"4kwcq","@uppy/thumbnail-generator":"l3oHE","@uppy/utils/lib/findAllDOMElements":"hWi7F","@uppy/utils/lib/toArray":"dNhb7","@uppy/utils/lib/getDroppedFiles":"60s19","@uppy/provider-views":"iH2s1","nanoid/non-secure":"fO50M","memoize-one":"ajWd5","./utils/trapFocus.js":"8EP9J","./utils/createSuperFocus.js":"cBIHv","./components/Dashboard.js":"jYTp2","./locale.js":"18n1g","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"1WRwV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _statusBarJsDefault.default));
var _statusBarJs = require("./StatusBar.js");
var _statusBarJsDefault = parcelHelpers.interopDefault(_statusBarJs);

},{"./StatusBar.js":"kbHmL","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"kbHmL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _core = require("@uppy/core");
var _emaFilter = require("@uppy/utils/lib/emaFilter");
var _emaFilterDefault = parcelHelpers.interopDefault(_emaFilter);
var _getTextDirection = require("@uppy/utils/lib/getTextDirection");
var _getTextDirectionDefault = parcelHelpers.interopDefault(_getTextDirection);
var _statusBarStatesJs = require("./StatusBarStates.js");
var _statusBarStatesJsDefault = parcelHelpers.interopDefault(_statusBarStatesJs);
var _statusBarUIJs = require("./StatusBarUI.js");
var _statusBarUIJsDefault = parcelHelpers.interopDefault(_statusBarUIJs);
var _localeJs = require("./locale.js");
var _localeJsDefault = parcelHelpers.interopDefault(_localeJs);
function _classPrivateFieldLooseBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) throw new TypeError("attempted to use private field on non-instance");
    return receiver;
}
var id = 0;
function _classPrivateFieldLooseKey(name) {
    return "__private_" + id++ + "_" + name;
}
const packageJson = {
    "version": "3.2.4"
};
const speedFilterHalfLife = 2000;
const ETAFilterHalfLife = 2000;
function getUploadingState(error, isAllComplete, recoveredState, files) {
    if (error) return (0, _statusBarStatesJsDefault.default).STATE_ERROR;
    if (isAllComplete) return (0, _statusBarStatesJsDefault.default).STATE_COMPLETE;
    if (recoveredState) return (0, _statusBarStatesJsDefault.default).STATE_WAITING;
    let state = (0, _statusBarStatesJsDefault.default).STATE_WAITING;
    const fileIDs = Object.keys(files);
    for(let i = 0; i < fileIDs.length; i++){
        const { progress } = files[fileIDs[i]];
        // If ANY files are being uploaded right now, show the uploading state.
        if (progress.uploadStarted && !progress.uploadComplete) return (0, _statusBarStatesJsDefault.default).STATE_UPLOADING;
        // If files are being preprocessed AND postprocessed at this time, we show the
        // preprocess state. If any files are being uploaded we show uploading.
        if (progress.preprocess && state !== (0, _statusBarStatesJsDefault.default).STATE_UPLOADING) state = (0, _statusBarStatesJsDefault.default).STATE_PREPROCESSING;
        // If NO files are being preprocessed or uploaded right now, but some files are
        // being postprocessed, show the postprocess state.
        if (progress.postprocess && state !== (0, _statusBarStatesJsDefault.default).STATE_UPLOADING && state !== (0, _statusBarStatesJsDefault.default).STATE_PREPROCESSING) state = (0, _statusBarStatesJsDefault.default).STATE_POSTPROCESSING;
    }
    return state;
}
/**
 * StatusBar: renders a status bar with upload/pause/resume/cancel/retry buttons,
 * progress percentage and time remaining.
 */ var _lastUpdateTime = /*#__PURE__*/ _classPrivateFieldLooseKey("lastUpdateTime");
var _previousUploadedBytes = /*#__PURE__*/ _classPrivateFieldLooseKey("previousUploadedBytes");
var _previousSpeed = /*#__PURE__*/ _classPrivateFieldLooseKey("previousSpeed");
var _previousETA = /*#__PURE__*/ _classPrivateFieldLooseKey("previousETA");
var _computeSmoothETA = /*#__PURE__*/ _classPrivateFieldLooseKey("computeSmoothETA");
var _onUploadStart = /*#__PURE__*/ _classPrivateFieldLooseKey("onUploadStart");
class StatusBar extends (0, _core.UIPlugin) {
    constructor(uppy, opts){
        super(uppy, opts);
        Object.defineProperty(this, _computeSmoothETA, {
            value: _computeSmoothETA2
        });
        Object.defineProperty(this, _lastUpdateTime, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _previousUploadedBytes, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _previousSpeed, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _previousETA, {
            writable: true,
            value: void 0
        });
        this.startUpload = ()=>{
            return this.uppy.upload().catch(()=>{
            // Error logged in Core
            });
        };
        Object.defineProperty(this, _onUploadStart, {
            writable: true,
            value: ()=>{
                const { recoveredState } = this.uppy.getState();
                _classPrivateFieldLooseBase(this, _previousSpeed)[_previousSpeed] = null;
                _classPrivateFieldLooseBase(this, _previousETA)[_previousETA] = null;
                if (recoveredState) {
                    _classPrivateFieldLooseBase(this, _previousUploadedBytes)[_previousUploadedBytes] = Object.values(recoveredState.files).reduce((pv, _ref)=>{
                        let { progress } = _ref;
                        return pv + progress.bytesUploaded;
                    }, 0);
                    // We don't set `#lastUpdateTime` at this point because the upload won't
                    // actually resume until the user asks for it.
                    this.uppy.emit("restore-confirmed");
                    return;
                }
                _classPrivateFieldLooseBase(this, _lastUpdateTime)[_lastUpdateTime] = performance.now();
                _classPrivateFieldLooseBase(this, _previousUploadedBytes)[_previousUploadedBytes] = 0;
            }
        });
        this.id = this.opts.id || "StatusBar";
        this.title = "StatusBar";
        this.type = "progressindicator";
        this.defaultLocale = (0, _localeJsDefault.default);
        // set default options, must be kept in sync with @uppy/react/src/StatusBar.js
        const defaultOptions = {
            target: "body",
            hideUploadButton: false,
            hideRetryButton: false,
            hidePauseResumeButton: false,
            hideCancelButton: false,
            showProgressDetails: false,
            hideAfterFinish: true,
            doneButtonHandler: null
        };
        this.opts = {
            ...defaultOptions,
            ...opts
        };
        this.i18nInit();
        this.render = this.render.bind(this);
        this.install = this.install.bind(this);
    }
    render(state) {
        const { capabilities, files, allowNewUpload, totalProgress, error, recoveredState } = state;
        const { newFiles, startedFiles, completeFiles, isUploadStarted, isAllComplete, isAllErrored, isAllPaused, isUploadInProgress, isSomeGhost } = this.uppy.getObjectOfFilesPerState();
        // If some state was recovered, we want to show Upload button/counter
        // for all the files, because in this case it’s not an Upload button,
        // but “Confirm Restore Button”
        const newFilesOrRecovered = recoveredState ? Object.values(files) : newFiles;
        const resumableUploads = !!capabilities.resumableUploads;
        const supportsUploadProgress = capabilities.uploadProgress !== false;
        let totalSize = 0;
        let totalUploadedSize = 0;
        startedFiles.forEach((file)=>{
            totalSize += file.progress.bytesTotal || 0;
            totalUploadedSize += file.progress.bytesUploaded || 0;
        });
        const totalETA = _classPrivateFieldLooseBase(this, _computeSmoothETA)[_computeSmoothETA]({
            uploaded: totalUploadedSize,
            total: totalSize,
            remaining: totalSize - totalUploadedSize
        });
        return (0, _statusBarUIJsDefault.default)({
            error,
            uploadState: getUploadingState(error, isAllComplete, recoveredState, state.files || {}),
            allowNewUpload,
            totalProgress,
            totalSize,
            totalUploadedSize,
            isAllComplete: false,
            isAllPaused,
            isAllErrored,
            isUploadStarted,
            isUploadInProgress,
            isSomeGhost,
            recoveredState,
            complete: completeFiles.length,
            newFiles: newFilesOrRecovered.length,
            numUploads: startedFiles.length,
            totalETA,
            files,
            i18n: this.i18n,
            uppy: this.uppy,
            startUpload: this.startUpload,
            doneButtonHandler: this.opts.doneButtonHandler,
            resumableUploads,
            supportsUploadProgress,
            showProgressDetails: this.opts.showProgressDetails,
            hideUploadButton: this.opts.hideUploadButton,
            hideRetryButton: this.opts.hideRetryButton,
            hidePauseResumeButton: this.opts.hidePauseResumeButton,
            hideCancelButton: this.opts.hideCancelButton,
            hideAfterFinish: this.opts.hideAfterFinish,
            isTargetDOMEl: this.isTargetDOMEl
        });
    }
    onMount() {
        // Set the text direction if the page has not defined one.
        const element = this.el;
        const direction = (0, _getTextDirectionDefault.default)(element);
        if (!direction) element.dir = "ltr";
    }
    install() {
        const { target } = this.opts;
        if (target) this.mount(target, this);
        this.uppy.on("upload", _classPrivateFieldLooseBase(this, _onUploadStart)[_onUploadStart]);
        // To cover the use case where the status bar is installed while the upload
        // has started, we set `lastUpdateTime` right away.
        _classPrivateFieldLooseBase(this, _lastUpdateTime)[_lastUpdateTime] = performance.now();
        _classPrivateFieldLooseBase(this, _previousUploadedBytes)[_previousUploadedBytes] = this.uppy.getFiles().reduce((pv, file)=>pv + file.progress.bytesUploaded, 0);
    }
    uninstall() {
        this.unmount();
        this.uppy.off("upload", _classPrivateFieldLooseBase(this, _onUploadStart)[_onUploadStart]);
    }
}
exports.default = StatusBar;
function _computeSmoothETA2(totalBytes) {
    var _classPrivateFieldLoo, _classPrivateFieldLoo2;
    if (totalBytes.total === 0 || totalBytes.remaining === 0) return 0;
    // When state is restored, lastUpdateTime is still nullish at this point.
    (_classPrivateFieldLoo2 = (_classPrivateFieldLoo = _classPrivateFieldLooseBase(this, _lastUpdateTime))[_lastUpdateTime]) != null ? _classPrivateFieldLoo2 : _classPrivateFieldLoo[_lastUpdateTime] = performance.now();
    const dt = performance.now() - _classPrivateFieldLooseBase(this, _lastUpdateTime)[_lastUpdateTime];
    if (dt === 0) {
        var _classPrivateFieldLoo3;
        return Math.round(((_classPrivateFieldLoo3 = _classPrivateFieldLooseBase(this, _previousETA)[_previousETA]) != null ? _classPrivateFieldLoo3 : 0) / 100) / 10;
    }
    const uploadedBytesSinceLastTick = totalBytes.uploaded - _classPrivateFieldLooseBase(this, _previousUploadedBytes)[_previousUploadedBytes];
    _classPrivateFieldLooseBase(this, _previousUploadedBytes)[_previousUploadedBytes] = totalBytes.uploaded;
    // uploadedBytesSinceLastTick can be negative in some cases (packet loss?)
    // in which case, we wait for next tick to update ETA.
    if (uploadedBytesSinceLastTick <= 0) {
        var _classPrivateFieldLoo4;
        return Math.round(((_classPrivateFieldLoo4 = _classPrivateFieldLooseBase(this, _previousETA)[_previousETA]) != null ? _classPrivateFieldLoo4 : 0) / 100) / 10;
    }
    const currentSpeed = uploadedBytesSinceLastTick / dt;
    const filteredSpeed = _classPrivateFieldLooseBase(this, _previousSpeed)[_previousSpeed] == null ? currentSpeed : (0, _emaFilterDefault.default)(currentSpeed, _classPrivateFieldLooseBase(this, _previousSpeed)[_previousSpeed], speedFilterHalfLife, dt);
    _classPrivateFieldLooseBase(this, _previousSpeed)[_previousSpeed] = filteredSpeed;
    const instantETA = totalBytes.remaining / filteredSpeed;
    const updatedPreviousETA = Math.max(_classPrivateFieldLooseBase(this, _previousETA)[_previousETA] - dt, 0);
    const filteredETA = _classPrivateFieldLooseBase(this, _previousETA)[_previousETA] == null ? instantETA : (0, _emaFilterDefault.default)(instantETA, updatedPreviousETA, ETAFilterHalfLife, dt);
    _classPrivateFieldLooseBase(this, _previousETA)[_previousETA] = filteredETA;
    _classPrivateFieldLooseBase(this, _lastUpdateTime)[_lastUpdateTime] = performance.now();
    return Math.round(filteredETA / 100) / 10;
}
StatusBar.VERSION = packageJson.version;

},{"@uppy/core":"8Yc3I","@uppy/utils/lib/emaFilter":"1Ywbi","@uppy/utils/lib/getTextDirection":"b31de","./StatusBarStates.js":"jRMYJ","./StatusBarUI.js":"jbThu","./locale.js":"6YiXF","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"1Ywbi":[function(require,module,exports) {
/**
 * Low-pass filter using Exponential Moving Averages (aka exponential smoothing)
 * Filters a sequence of values by updating the mixing the previous output value
 * with the new input using the exponential window function
 *
 * @param {*} newValue the n-th value of the sequence
 * @param {*} previousSmoothedValue the exponential average of the first n-1 values
 * @param {*} halfLife value of `dt` to move the smoothed value halfway between `previousFilteredValue` and `newValue`
 * @param {*} dt time elapsed between adding the (n-1)th and the n-th values
 * @returns the exponential average of the first n values
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>emaFilter);
function emaFilter(newValue, previousSmoothedValue, halfLife, dt) {
    if (halfLife === 0 || newValue === previousSmoothedValue) return newValue;
    if (dt === 0) return previousSmoothedValue;
    return newValue + (previousSmoothedValue - newValue) * 2 ** (-dt / halfLife);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"jRMYJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    STATE_ERROR: "error",
    STATE_WAITING: "waiting",
    STATE_PREPROCESSING: "preprocessing",
    STATE_UPLOADING: "uploading",
    STATE_POSTPROCESSING: "postprocessing",
    STATE_COMPLETE: "complete"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"jbThu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>StatusBar);
var _preact = require("preact");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _statusBarStatesJs = require("./StatusBarStates.js");
var _statusBarStatesJsDefault = parcelHelpers.interopDefault(_statusBarStatesJs);
var _calculateProcessingProgressJs = require("./calculateProcessingProgress.js");
var _calculateProcessingProgressJsDefault = parcelHelpers.interopDefault(_calculateProcessingProgressJs);
var _componentsJs = require("./Components.js");
const { STATE_ERROR, STATE_WAITING, STATE_PREPROCESSING, STATE_UPLOADING, STATE_POSTPROCESSING, STATE_COMPLETE } = (0, _statusBarStatesJsDefault.default);
function StatusBar(props) {
    const { newFiles, allowNewUpload, isUploadInProgress, isAllPaused, resumableUploads, error, hideUploadButton, hidePauseResumeButton, hideCancelButton, hideRetryButton, recoveredState, uploadState, totalProgress, files, supportsUploadProgress, hideAfterFinish, isSomeGhost, doneButtonHandler, isUploadStarted, i18n, startUpload, uppy, isAllComplete, showProgressDetails, numUploads, complete, totalSize, totalETA, totalUploadedSize } = props;
    function getProgressValue() {
        switch(uploadState){
            case STATE_POSTPROCESSING:
            case STATE_PREPROCESSING:
                {
                    const progress = (0, _calculateProcessingProgressJsDefault.default)(files);
                    if (progress.mode === "determinate") return progress.value * 100;
                    return totalProgress;
                }
            case STATE_ERROR:
                return null;
            case STATE_UPLOADING:
                if (!supportsUploadProgress) return null;
                return totalProgress;
            default:
                return totalProgress;
        }
    }
    function getIsIndeterminate() {
        switch(uploadState){
            case STATE_POSTPROCESSING:
            case STATE_PREPROCESSING:
                {
                    const { mode } = (0, _calculateProcessingProgressJsDefault.default)(files);
                    return mode === "indeterminate";
                }
            case STATE_UPLOADING:
                if (!supportsUploadProgress) return true;
                return false;
            default:
                return false;
        }
    }
    function getIsHidden() {
        if (recoveredState) return false;
        switch(uploadState){
            case STATE_WAITING:
                return hideUploadButton || newFiles === 0;
            case STATE_COMPLETE:
                return hideAfterFinish;
            default:
                return false;
        }
    }
    const progressValue = getProgressValue();
    const isHidden = getIsHidden();
    const width = progressValue != null ? progressValue : 100;
    const showUploadBtn = !error && newFiles && !isUploadInProgress && !isAllPaused && allowNewUpload && !hideUploadButton;
    const showCancelBtn = !hideCancelButton && uploadState !== STATE_WAITING && uploadState !== STATE_COMPLETE;
    const showPauseResumeBtn = resumableUploads && !hidePauseResumeButton && uploadState === STATE_UPLOADING;
    const showRetryBtn = error && !isAllComplete && !hideRetryButton;
    const showDoneBtn = doneButtonHandler && uploadState === STATE_COMPLETE;
    const progressClassNames = (0, _classnamesDefault.default)("uppy-StatusBar-progress", {
        "is-indeterminate": getIsIndeterminate()
    });
    const statusBarClassNames = (0, _classnamesDefault.default)("uppy-StatusBar", `is-${uploadState}`, {
        "has-ghosts": isSomeGhost
    });
    return (0, _preact.h)("div", {
        className: statusBarClassNames,
        "aria-hidden": isHidden
    }, (0, _preact.h)("div", {
        className: progressClassNames,
        style: {
            width: `${width}%`
        },
        role: "progressbar",
        "aria-label": `${width}%`,
        "aria-valuetext": `${width}%`,
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-valuenow": progressValue
    }), (()=>{
        switch(uploadState){
            case STATE_PREPROCESSING:
            case STATE_POSTPROCESSING:
                return (0, _preact.h)((0, _componentsJs.ProgressBarProcessing), {
                    progress: (0, _calculateProcessingProgressJsDefault.default)(files)
                });
            case STATE_COMPLETE:
                return (0, _preact.h)((0, _componentsJs.ProgressBarComplete), {
                    i18n: i18n
                });
            case STATE_ERROR:
                return (0, _preact.h)((0, _componentsJs.ProgressBarError), {
                    error: error,
                    i18n: i18n,
                    numUploads: numUploads,
                    complete: complete
                });
            case STATE_UPLOADING:
                return (0, _preact.h)((0, _componentsJs.ProgressBarUploading), {
                    i18n: i18n,
                    supportsUploadProgress: supportsUploadProgress,
                    totalProgress: totalProgress,
                    showProgressDetails: showProgressDetails,
                    isUploadStarted: isUploadStarted,
                    isAllComplete: isAllComplete,
                    isAllPaused: isAllPaused,
                    newFiles: newFiles,
                    numUploads: numUploads,
                    complete: complete,
                    totalUploadedSize: totalUploadedSize,
                    totalSize: totalSize,
                    totalETA: totalETA,
                    startUpload: startUpload
                });
            default:
                return null;
        }
    })(), (0, _preact.h)("div", {
        className: "uppy-StatusBar-actions"
    }, recoveredState || showUploadBtn ? (0, _preact.h)((0, _componentsJs.UploadBtn), {
        newFiles: newFiles,
        isUploadStarted: isUploadStarted,
        recoveredState: recoveredState,
        i18n: i18n,
        isSomeGhost: isSomeGhost,
        startUpload: startUpload,
        uploadState: uploadState
    }) : null, showRetryBtn ? (0, _preact.h)((0, _componentsJs.RetryBtn), {
        i18n: i18n,
        uppy: uppy
    }) : null, showPauseResumeBtn ? (0, _preact.h)((0, _componentsJs.PauseResumeButton), {
        isAllPaused: isAllPaused,
        i18n: i18n,
        isAllComplete: isAllComplete,
        resumableUploads: resumableUploads,
        uppy: uppy
    }) : null, showCancelBtn ? (0, _preact.h)((0, _componentsJs.CancelBtn), {
        i18n: i18n,
        uppy: uppy
    }) : null, showDoneBtn ? (0, _preact.h)((0, _componentsJs.DoneBtn), {
        i18n: i18n,
        doneButtonHandler: doneButtonHandler
    }) : null));
}

},{"preact":"26zcy","classnames":"jocGM","./StatusBarStates.js":"jRMYJ","./calculateProcessingProgress.js":"1Fjg2","./Components.js":"goSSW","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"jocGM":[function(require,module,exports) {
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ /* global define */ (function() {
    "use strict";
    var hasOwn = {}.hasOwnProperty;
    var nativeCodeString = "[native code]";
    function classNames() {
        var classes = [];
        for(var i = 0; i < arguments.length; i++){
            var arg = arguments[i];
            if (!arg) continue;
            var argType = typeof arg;
            if (argType === "string" || argType === "number") classes.push(arg);
            else if (Array.isArray(arg)) {
                if (arg.length) {
                    var inner = classNames.apply(null, arg);
                    if (inner) classes.push(inner);
                }
            } else if (argType === "object") {
                if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
                    classes.push(arg.toString());
                    continue;
                }
                for(var key in arg)if (hasOwn.call(arg, key) && arg[key]) classes.push(key);
            }
        }
        return classes.join(" ");
    }
    if (0, module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
    } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) // register as 'classnames', consistent with npm package name
    define("classnames", [], function() {
        return classNames;
    });
    else window.classNames = classNames;
})();

},{}],"1Fjg2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>calculateProcessingProgress);
function calculateProcessingProgress(files) {
    const values = [];
    let mode;
    let message;
    for (const { progress } of Object.values(files)){
        const { preprocess, postprocess } = progress;
        // In the future we should probably do this differently. For now we'll take the
        // mode and message from the first file…
        if (message == null && (preprocess || postprocess)) ({ mode, message } = preprocess || postprocess);
        if ((preprocess == null ? void 0 : preprocess.mode) === "determinate") values.push(preprocess.value);
        if ((postprocess == null ? void 0 : postprocess.mode) === "determinate") values.push(postprocess.value);
    }
    const value = values.reduce((total, progressValue)=>{
        return total + progressValue / values.length;
    }, 0);
    return {
        mode,
        message,
        value
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"goSSW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UploadBtn", ()=>UploadBtn);
parcelHelpers.export(exports, "RetryBtn", ()=>RetryBtn);
parcelHelpers.export(exports, "CancelBtn", ()=>CancelBtn);
parcelHelpers.export(exports, "PauseResumeButton", ()=>PauseResumeButton);
parcelHelpers.export(exports, "DoneBtn", ()=>DoneBtn);
parcelHelpers.export(exports, "LoadingSpinner", ()=>LoadingSpinner);
parcelHelpers.export(exports, "ProgressDetails", ()=>ProgressDetails);
parcelHelpers.export(exports, "ProgressBarProcessing", ()=>ProgressBarProcessing);
parcelHelpers.export(exports, "ProgressBarError", ()=>ProgressBarError);
parcelHelpers.export(exports, "ProgressBarUploading", ()=>ProgressBarUploading);
parcelHelpers.export(exports, "ProgressBarComplete", ()=>ProgressBarComplete);
var _preact = require("preact");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _prettierBytes = require("@transloadit/prettier-bytes");
var _prettierBytesDefault = parcelHelpers.interopDefault(_prettierBytes);
var _prettyETA = require("@uppy/utils/lib/prettyETA");
var _prettyETADefault = parcelHelpers.interopDefault(_prettyETA);
var _statusBarStatesJs = require("./StatusBarStates.js");
var _statusBarStatesJsDefault = parcelHelpers.interopDefault(_statusBarStatesJs);
const DOT = `\u00B7`;
const renderDot = ()=>` ${DOT} `;
function UploadBtn(props) {
    const { newFiles, isUploadStarted, recoveredState, i18n, uploadState, isSomeGhost, startUpload } = props;
    const uploadBtnClassNames = (0, _classnamesDefault.default)("uppy-u-reset", "uppy-c-btn", "uppy-StatusBar-actionBtn", "uppy-StatusBar-actionBtn--upload", {
        "uppy-c-btn-primary": uploadState === (0, _statusBarStatesJsDefault.default).STATE_WAITING
    }, {
        "uppy-StatusBar-actionBtn--disabled": isSomeGhost
    });
    const uploadBtnText = newFiles && isUploadStarted && !recoveredState ? i18n("uploadXNewFiles", {
        smart_count: newFiles
    }) : i18n("uploadXFiles", {
        smart_count: newFiles
    });
    return (0, _preact.h)("button", {
        type: "button",
        className: uploadBtnClassNames,
        "aria-label": i18n("uploadXFiles", {
            smart_count: newFiles
        }),
        onClick: startUpload,
        disabled: isSomeGhost,
        "data-uppy-super-focusable": true
    }, uploadBtnText);
}
function RetryBtn(props) {
    const { i18n, uppy } = props;
    return (0, _preact.h)("button", {
        type: "button",
        className: "uppy-u-reset uppy-c-btn uppy-StatusBar-actionBtn uppy-StatusBar-actionBtn--retry",
        "aria-label": i18n("retryUpload"),
        onClick: ()=>uppy.retryAll().catch(()=>{}),
        "data-uppy-super-focusable": true,
        "data-cy": "retry"
    }, (0, _preact.h)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        className: "uppy-c-icon",
        width: "8",
        height: "10",
        viewBox: "0 0 8 10"
    }, (0, _preact.h)("path", {
        d: "M4 2.408a2.75 2.75 0 1 0 2.75 2.75.626.626 0 0 1 1.25.018v.023a4 4 0 1 1-4-4.041V.25a.25.25 0 0 1 .389-.208l2.299 1.533a.25.25 0 0 1 0 .416l-2.3 1.533A.25.25 0 0 1 4 3.316v-.908z"
    })), i18n("retry"));
}
function CancelBtn(props) {
    const { i18n, uppy } = props;
    return (0, _preact.h)("button", {
        type: "button",
        className: "uppy-u-reset uppy-StatusBar-actionCircleBtn",
        title: i18n("cancel"),
        "aria-label": i18n("cancel"),
        onClick: ()=>uppy.cancelAll(),
        "data-cy": "cancel",
        "data-uppy-super-focusable": true
    }, (0, _preact.h)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        className: "uppy-c-icon",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16"
    }, (0, _preact.h)("g", {
        fill: "none",
        fillRule: "evenodd"
    }, (0, _preact.h)("circle", {
        fill: "#888",
        cx: "8",
        cy: "8",
        r: "8"
    }), (0, _preact.h)("path", {
        fill: "#FFF",
        d: "M9.283 8l2.567 2.567-1.283 1.283L8 9.283 5.433 11.85 4.15 10.567 6.717 8 4.15 5.433 5.433 4.15 8 6.717l2.567-2.567 1.283 1.283z"
    }))));
}
function PauseResumeButton(props) {
    const { isAllPaused, i18n, isAllComplete, resumableUploads, uppy } = props;
    const title = isAllPaused ? i18n("resume") : i18n("pause");
    function togglePauseResume() {
        if (isAllComplete) return null;
        if (!resumableUploads) return uppy.cancelAll();
        if (isAllPaused) return uppy.resumeAll();
        return uppy.pauseAll();
    }
    return (0, _preact.h)("button", {
        title: title,
        "aria-label": title,
        className: "uppy-u-reset uppy-StatusBar-actionCircleBtn",
        type: "button",
        onClick: togglePauseResume,
        "data-cy": "togglePauseResume",
        "data-uppy-super-focusable": true
    }, (0, _preact.h)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        className: "uppy-c-icon",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16"
    }, (0, _preact.h)("g", {
        fill: "none",
        fillRule: "evenodd"
    }, (0, _preact.h)("circle", {
        fill: "#888",
        cx: "8",
        cy: "8",
        r: "8"
    }), (0, _preact.h)("path", {
        fill: "#FFF",
        d: isAllPaused ? "M6 4.25L11.5 8 6 11.75z" : "M5 4.5h2v7H5v-7zm4 0h2v7H9v-7z"
    }))));
}
function DoneBtn(props) {
    const { i18n, doneButtonHandler } = props;
    return (0, _preact.h)("button", {
        type: "button",
        className: "uppy-u-reset uppy-c-btn uppy-StatusBar-actionBtn uppy-StatusBar-actionBtn--done",
        onClick: doneButtonHandler,
        "data-uppy-super-focusable": true
    }, i18n("done"));
}
function LoadingSpinner() {
    return (0, _preact.h)("svg", {
        className: "uppy-StatusBar-spinner",
        "aria-hidden": "true",
        focusable: "false",
        width: "14",
        height: "14"
    }, (0, _preact.h)("path", {
        d: "M13.983 6.547c-.12-2.509-1.64-4.893-3.939-5.936-2.48-1.127-5.488-.656-7.556 1.094C.524 3.367-.398 6.048.162 8.562c.556 2.495 2.46 4.52 4.94 5.183 2.932.784 5.61-.602 7.256-3.015-1.493 1.993-3.745 3.309-6.298 2.868-2.514-.434-4.578-2.349-5.153-4.84a6.226 6.226 0 0 1 2.98-6.778C6.34.586 9.74 1.1 11.373 3.493c.407.596.693 1.282.842 1.988.127.598.073 1.197.161 1.794.078.525.543 1.257 1.15.864.525-.341.49-1.05.456-1.592-.007-.15.02.3 0 0",
        fillRule: "evenodd"
    }));
}
function ProgressBarProcessing(props) {
    const { progress } = props;
    const { value, mode, message } = progress;
    const roundedValue = Math.round(value * 100);
    const dot = `\u00B7`;
    return (0, _preact.h)("div", {
        className: "uppy-StatusBar-content"
    }, (0, _preact.h)(LoadingSpinner, null), mode === "determinate" ? `${roundedValue}% ${dot} ` : "", message);
}
function ProgressDetails(props) {
    const { numUploads, complete, totalUploadedSize, totalSize, totalETA, i18n } = props;
    const ifShowFilesUploadedOfTotal = numUploads > 1;
    return (0, _preact.h)("div", {
        className: "uppy-StatusBar-statusSecondary"
    }, ifShowFilesUploadedOfTotal && i18n("filesUploadedOfTotal", {
        complete,
        smart_count: numUploads
    }), (0, _preact.h)("span", {
        className: "uppy-StatusBar-additionalInfo"
    }, ifShowFilesUploadedOfTotal && renderDot(), i18n("dataUploadedOfTotal", {
        complete: (0, _prettierBytesDefault.default)(totalUploadedSize),
        total: (0, _prettierBytesDefault.default)(totalSize)
    }), renderDot(), i18n("xTimeLeft", {
        time: (0, _prettyETADefault.default)(totalETA)
    })));
}
function FileUploadCount(props) {
    const { i18n, complete, numUploads } = props;
    return (0, _preact.h)("div", {
        className: "uppy-StatusBar-statusSecondary"
    }, i18n("filesUploadedOfTotal", {
        complete,
        smart_count: numUploads
    }));
}
function UploadNewlyAddedFiles(props) {
    const { i18n, newFiles, startUpload } = props;
    const uploadBtnClassNames = (0, _classnamesDefault.default)("uppy-u-reset", "uppy-c-btn", "uppy-StatusBar-actionBtn", "uppy-StatusBar-actionBtn--uploadNewlyAdded");
    return (0, _preact.h)("div", {
        className: "uppy-StatusBar-statusSecondary"
    }, (0, _preact.h)("div", {
        className: "uppy-StatusBar-statusSecondaryHint"
    }, i18n("xMoreFilesAdded", {
        smart_count: newFiles
    })), (0, _preact.h)("button", {
        type: "button",
        className: uploadBtnClassNames,
        "aria-label": i18n("uploadXFiles", {
            smart_count: newFiles
        }),
        onClick: startUpload
    }, i18n("upload")));
}
function ProgressBarUploading(props) {
    const { i18n, supportsUploadProgress, totalProgress, showProgressDetails, isUploadStarted, isAllComplete, isAllPaused, newFiles, numUploads, complete, totalUploadedSize, totalSize, totalETA, startUpload } = props;
    const showUploadNewlyAddedFiles = newFiles && isUploadStarted;
    if (!isUploadStarted || isAllComplete) return null;
    const title = isAllPaused ? i18n("paused") : i18n("uploading");
    function renderProgressDetails() {
        if (!isAllPaused && !showUploadNewlyAddedFiles && showProgressDetails) {
            if (supportsUploadProgress) return (0, _preact.h)(ProgressDetails, {
                numUploads: numUploads,
                complete: complete,
                totalUploadedSize: totalUploadedSize,
                totalSize: totalSize,
                totalETA: totalETA,
                i18n: i18n
            });
            return (0, _preact.h)(FileUploadCount, {
                i18n: i18n,
                complete: complete,
                numUploads: numUploads
            });
        }
        return null;
    }
    return (0, _preact.h)("div", {
        className: "uppy-StatusBar-content",
        "aria-label": title,
        title: title
    }, !isAllPaused ? (0, _preact.h)(LoadingSpinner, null) : null, (0, _preact.h)("div", {
        className: "uppy-StatusBar-status"
    }, (0, _preact.h)("div", {
        className: "uppy-StatusBar-statusPrimary"
    }, supportsUploadProgress ? `${title}: ${totalProgress}%` : title), renderProgressDetails(), showUploadNewlyAddedFiles ? (0, _preact.h)(UploadNewlyAddedFiles, {
        i18n: i18n,
        newFiles: newFiles,
        startUpload: startUpload
    }) : null));
}
function ProgressBarComplete(props) {
    const { i18n } = props;
    return (0, _preact.h)("div", {
        className: "uppy-StatusBar-content",
        role: "status",
        title: i18n("complete")
    }, (0, _preact.h)("div", {
        className: "uppy-StatusBar-status"
    }, (0, _preact.h)("div", {
        className: "uppy-StatusBar-statusPrimary"
    }, (0, _preact.h)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        className: "uppy-StatusBar-statusIndicator uppy-c-icon",
        width: "15",
        height: "11",
        viewBox: "0 0 15 11"
    }, (0, _preact.h)("path", {
        d: "M.414 5.843L1.627 4.63l3.472 3.472L13.202 0l1.212 1.213L5.1 10.528z"
    })), i18n("complete"))));
}
function ProgressBarError(props) {
    const { error, i18n, complete, numUploads } = props;
    function displayErrorAlert() {
        const errorMessage = `${i18n("uploadFailed")} \n\n ${error}`;
        // eslint-disable-next-line no-alert
        alert(errorMessage); // TODO: move to custom alert implementation
    }
    return (0, _preact.h)("div", {
        className: "uppy-StatusBar-content",
        title: i18n("uploadFailed")
    }, (0, _preact.h)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        className: "uppy-StatusBar-statusIndicator uppy-c-icon",
        width: "11",
        height: "11",
        viewBox: "0 0 11 11"
    }, (0, _preact.h)("path", {
        d: "M4.278 5.5L0 1.222 1.222 0 5.5 4.278 9.778 0 11 1.222 6.722 5.5 11 9.778 9.778 11 5.5 6.722 1.222 11 0 9.778z"
    })), (0, _preact.h)("div", {
        className: "uppy-StatusBar-status"
    }, (0, _preact.h)("div", {
        className: "uppy-StatusBar-statusPrimary"
    }, i18n("uploadFailed"), (0, _preact.h)("button", {
        className: "uppy-u-reset uppy-StatusBar-details",
        "aria-label": i18n("showErrorDetails"),
        "data-microtip-position": "top-right",
        "data-microtip-size": "medium",
        onClick: displayErrorAlert,
        type: "button"
    }, "?")), (0, _preact.h)(FileUploadCount, {
        i18n: i18n,
        complete: complete,
        numUploads: numUploads
    })));
}

},{"preact":"26zcy","classnames":"jocGM","@transloadit/prettier-bytes":"8PwYK","@uppy/utils/lib/prettyETA":"1QnNU","./StatusBarStates.js":"jRMYJ","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"1QnNU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>prettyETA);
var _secondsToTimeJs = require("./secondsToTime.js");
var _secondsToTimeJsDefault = parcelHelpers.interopDefault(_secondsToTimeJs);
function prettyETA(seconds) {
    const time = (0, _secondsToTimeJsDefault.default)(seconds);
    // Only display hours and minutes if they are greater than 0 but always
    // display minutes if hours is being displayed
    // Display a leading zero if the there is a preceding unit: 1m 05s, but 5s
    const hoursStr = time.hours === 0 ? "" : `${time.hours}h`;
    const minutesStr = time.minutes === 0 ? "" : `${time.hours === 0 ? time.minutes : ` ${time.minutes.toString(10).padStart(2, "0")}`}m`;
    const secondsStr = time.hours !== 0 ? "" : `${time.minutes === 0 ? time.seconds : ` ${time.seconds.toString(10).padStart(2, "0")}`}s`;
    return `${hoursStr}${minutesStr}${secondsStr}`;
}

},{"./secondsToTime.js":"gGKGj","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"gGKGj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>secondsToTime);
function secondsToTime(rawSeconds) {
    const hours = Math.floor(rawSeconds / 3600) % 24;
    const minutes = Math.floor(rawSeconds / 60) % 60;
    const seconds = Math.floor(rawSeconds % 60);
    return {
        hours,
        minutes,
        seconds
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"6YiXF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    strings: {
        // Shown in the status bar while files are being uploaded.
        uploading: "Uploading",
        // Shown in the status bar once all files have been uploaded.
        complete: "Complete",
        // Shown in the status bar if an upload failed.
        uploadFailed: "Upload failed",
        // Shown in the status bar while the upload is paused.
        paused: "Paused",
        // Used as the label for the button that retries an upload.
        retry: "Retry",
        // Used as the label for the button that cancels an upload.
        cancel: "Cancel",
        // Used as the label for the button that pauses an upload.
        pause: "Pause",
        // Used as the label for the button that resumes an upload.
        resume: "Resume",
        // Used as the label for the button that resets the upload state after an upload
        done: "Done",
        // When `showProgressDetails` is set, shows the number of files that have been fully uploaded so far.
        filesUploadedOfTotal: {
            0: "%{complete} of %{smart_count} file uploaded",
            1: "%{complete} of %{smart_count} files uploaded"
        },
        // When `showProgressDetails` is set, shows the amount of bytes that have been uploaded so far.
        dataUploadedOfTotal: "%{complete} of %{total}",
        // When `showProgressDetails` is set, shows an estimation of how long the upload will take to complete.
        xTimeLeft: "%{time} left",
        // Used as the label for the button that starts an upload.
        uploadXFiles: {
            0: "Upload %{smart_count} file",
            1: "Upload %{smart_count} files"
        },
        // Used as the label for the button that starts an upload, if another upload has been started in the past
        // and new files were added later.
        uploadXNewFiles: {
            0: "Upload +%{smart_count} file",
            1: "Upload +%{smart_count} files"
        },
        upload: "Upload",
        retryUpload: "Retry upload",
        xMoreFilesAdded: {
            0: "%{smart_count} more file added",
            1: "%{smart_count} more files added"
        },
        showErrorDetails: "Show error details"
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"4kwcq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _informerJsDefault.default));
var _informerJs = require("./Informer.js");
var _informerJsDefault = parcelHelpers.interopDefault(_informerJs);

},{"./Informer.js":"lAC0a","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"lAC0a":[function(require,module,exports) {
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions  */ /* eslint-disable jsx-a11y/click-events-have-key-events */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
var _core = require("@uppy/core");
var _fadeInJs = require("./FadeIn.js");
var _fadeInJsDefault = parcelHelpers.interopDefault(_fadeInJs);
var _transitionGroupJs = require("./TransitionGroup.js");
var _transitionGroupJsDefault = parcelHelpers.interopDefault(_transitionGroupJs);
const packageJson = {
    "version": "3.0.3"
};
class Informer extends (0, _core.UIPlugin) {
    constructor(uppy, opts){
        super(uppy, opts);
        this.render = (state)=>{
            return (0, _preact.h)("div", {
                className: "uppy uppy-Informer"
            }, (0, _preact.h)((0, _transitionGroupJsDefault.default), null, state.info.map((info)=>(0, _preact.h)((0, _fadeInJsDefault.default), {
                    key: info.message
                }, (0, _preact.h)("p", {
                    role: "alert"
                }, info.message, " ", info.details && (0, _preact.h)("span", {
                    "aria-label": info.details,
                    "data-microtip-position": "top-left",
                    "data-microtip-size": "medium",
                    role: "tooltip",
                    onClick: ()=>alert(`${info.message} \n\n ${info.details}`)
                }, "?"))))));
        };
        this.type = "progressindicator";
        this.id = this.opts.id || "Informer";
        this.title = "Informer";
        // set default options
        const defaultOptions = {};
        // merge default options with the ones set by user
        this.opts = {
            ...defaultOptions,
            ...opts
        };
    }
    install() {
        const { target } = this.opts;
        if (target) this.mount(target, this);
    }
}
exports.default = Informer;
Informer.VERSION = packageJson.version;

},{"preact":"26zcy","@uppy/core":"8Yc3I","./FadeIn.js":"8zDYl","./TransitionGroup.js":"5dFwl","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"8zDYl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
const TRANSITION_MS = 300;
class FadeIn extends (0, _preact.Component) {
    constructor(){
        super(...arguments);
        this.ref = (0, _preact.createRef)();
    }
    componentWillEnter(callback) {
        this.ref.current.style.opacity = "1";
        this.ref.current.style.transform = "none";
        setTimeout(callback, TRANSITION_MS);
    }
    componentWillLeave(callback) {
        this.ref.current.style.opacity = "0";
        this.ref.current.style.transform = "translateY(350%)";
        setTimeout(callback, TRANSITION_MS);
    }
    render() {
        const { children } = this.props;
        return (0, _preact.h)("div", {
            className: "uppy-Informer-animated",
            ref: this.ref
        }, children);
    }
}
exports.default = FadeIn;

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"5dFwl":[function(require,module,exports) {
/* eslint-disable */ /**
 * @source https://github.com/developit/preact-transition-group
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
function assign(obj, props) {
    return Object.assign(obj, props);
}
function getKey(vnode, fallback) {
    var _vnode$key;
    return (_vnode$key = vnode == null ? void 0 : vnode.key) != null ? _vnode$key : fallback;
}
function linkRef(component, name) {
    const cache = component._ptgLinkedRefs || (component._ptgLinkedRefs = {});
    return cache[name] || (cache[name] = (c)=>{
        component.refs[name] = c;
    });
}
function getChildMapping(children) {
    const out = {};
    for(let i = 0; i < children.length; i++)if (children[i] != null) {
        const key = getKey(children[i], i.toString(36));
        out[key] = children[i];
    }
    return out;
}
function mergeChildMappings(prev, next) {
    prev = prev || {};
    next = next || {};
    const getValueForKey = (key)=>next.hasOwnProperty(key) ? next[key] : prev[key];
    // For each key of `next`, the list of keys to insert before that key in
    // the combined list
    const nextKeysPending = {};
    let pendingKeys = [];
    for(const prevKey in prev){
        if (next.hasOwnProperty(prevKey)) {
            if (pendingKeys.length) {
                nextKeysPending[prevKey] = pendingKeys;
                pendingKeys = [];
            }
        } else pendingKeys.push(prevKey);
    }
    const childMapping = {};
    for(const nextKey in next){
        if (nextKeysPending.hasOwnProperty(nextKey)) for(let i = 0; i < nextKeysPending[nextKey].length; i++){
            const pendingNextKey = nextKeysPending[nextKey][i];
            childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
        }
        childMapping[nextKey] = getValueForKey(nextKey);
    }
    // Finally, add the keys which didn't appear before any key in `next`
    for(let i = 0; i < pendingKeys.length; i++)childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    return childMapping;
}
const identity = (i)=>i;
class TransitionGroup extends (0, _preact.Component) {
    constructor(props, context){
        super(props, context);
        this.refs = {};
        this.state = {
            children: getChildMapping((0, _preact.toChildArray)((0, _preact.toChildArray)(this.props.children)) || [])
        };
        this.performAppear = this.performAppear.bind(this);
        this.performEnter = this.performEnter.bind(this);
        this.performLeave = this.performLeave.bind(this);
    }
    componentWillMount() {
        this.currentlyTransitioningKeys = {};
        this.keysToAbortLeave = [];
        this.keysToEnter = [];
        this.keysToLeave = [];
    }
    componentDidMount() {
        const initialChildMapping = this.state.children;
        for(const key in initialChildMapping)if (initialChildMapping[key]) // this.performAppear(getKey(initialChildMapping[key], key));
        this.performAppear(key);
    }
    componentWillReceiveProps(nextProps) {
        const nextChildMapping = getChildMapping((0, _preact.toChildArray)(nextProps.children) || []);
        const prevChildMapping = this.state.children;
        this.setState((prevState)=>({
                children: mergeChildMappings(prevState.children, nextChildMapping)
            }));
        let key;
        for(key in nextChildMapping)if (nextChildMapping.hasOwnProperty(key)) {
            const hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
            // We should re-enter the component and abort its leave function
            if (nextChildMapping[key] && hasPrev && this.currentlyTransitioningKeys[key]) {
                this.keysToEnter.push(key);
                this.keysToAbortLeave.push(key);
            } else if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) this.keysToEnter.push(key);
        }
        for(key in prevChildMapping)if (prevChildMapping.hasOwnProperty(key)) {
            const hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
            if (prevChildMapping[key] && !hasNext && !this.currentlyTransitioningKeys[key]) this.keysToLeave.push(key);
        }
    }
    componentDidUpdate() {
        const { keysToEnter } = this;
        this.keysToEnter = [];
        keysToEnter.forEach(this.performEnter);
        const { keysToLeave } = this;
        this.keysToLeave = [];
        keysToLeave.forEach(this.performLeave);
    }
    _finishAbort(key) {
        const idx = this.keysToAbortLeave.indexOf(key);
        if (idx !== -1) this.keysToAbortLeave.splice(idx, 1);
    }
    performAppear(key) {
        this.currentlyTransitioningKeys[key] = true;
        const component = this.refs[key];
        if (component != null && component.componentWillAppear) component.componentWillAppear(this._handleDoneAppearing.bind(this, key));
        else this._handleDoneAppearing(key);
    }
    _handleDoneAppearing(key) {
        const component = this.refs[key];
        if (component != null && component.componentDidAppear) component.componentDidAppear();
        delete this.currentlyTransitioningKeys[key];
        this._finishAbort(key);
        const currentChildMapping = getChildMapping((0, _preact.toChildArray)(this.props.children) || []);
        if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) // This was removed before it had fully appeared. Remove it.
        this.performLeave(key);
    }
    performEnter(key) {
        this.currentlyTransitioningKeys[key] = true;
        const component = this.refs[key];
        if (component != null && component.componentWillEnter) component.componentWillEnter(this._handleDoneEntering.bind(this, key));
        else this._handleDoneEntering(key);
    }
    _handleDoneEntering(key) {
        const component = this.refs[key];
        if (component != null && component.componentDidEnter) component.componentDidEnter();
        delete this.currentlyTransitioningKeys[key];
        this._finishAbort(key);
        const currentChildMapping = getChildMapping((0, _preact.toChildArray)(this.props.children) || []);
        if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) // This was removed before it had fully entered. Remove it.
        this.performLeave(key);
    }
    performLeave(key) {
        // If we should immediately abort this leave function,
        // don't run the leave transition at all.
        const idx = this.keysToAbortLeave.indexOf(key);
        if (idx !== -1) return;
        this.currentlyTransitioningKeys[key] = true;
        const component = this.refs[key];
        if (component != null && component.componentWillLeave) component.componentWillLeave(this._handleDoneLeaving.bind(this, key));
        else // Note that this is somewhat dangerous b/c it calls setState()
        // again, effectively mutating the component before all the work
        // is done.
        this._handleDoneLeaving(key);
    }
    _handleDoneLeaving(key) {
        // If we should immediately abort the leave,
        // then skip this altogether
        const idx = this.keysToAbortLeave.indexOf(key);
        if (idx !== -1) return;
        const component = this.refs[key];
        if (component != null && component.componentDidLeave) component.componentDidLeave();
        delete this.currentlyTransitioningKeys[key];
        const currentChildMapping = getChildMapping((0, _preact.toChildArray)(this.props.children) || []);
        if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) // This entered again before it fully left. Add it again.
        this.performEnter(key);
        else {
            const children = assign({}, this.state.children);
            delete children[key];
            this.setState({
                children
            });
        }
    }
    render(_ref, _ref2) {
        let { childFactory, transitionLeave, transitionName, transitionAppear, transitionEnter, transitionLeaveTimeout, transitionEnterTimeout, transitionAppearTimeout, component, ...props } = _ref;
        let { children } = _ref2;
        // TODO: we could get rid of the need for the wrapper node
        // by cloning a single child
        const childrenToRender = Object.entries(children).map((_ref3)=>{
            let [key, child] = _ref3;
            if (!child) return undefined;
            const ref = linkRef(this, key);
            return (0, _preact.cloneElement)(childFactory(child), {
                ref,
                key
            });
        }).filter(Boolean);
        return (0, _preact.h)(component, props, childrenToRender);
    }
}
TransitionGroup.defaultProps = {
    component: "span",
    childFactory: identity
};
exports.default = TransitionGroup;

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"l3oHE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _core = require("@uppy/core");
var _dataURItoBlob = require("@uppy/utils/lib/dataURItoBlob");
var _dataURItoBlobDefault = parcelHelpers.interopDefault(_dataURItoBlob);
var _isObjectURL = require("@uppy/utils/lib/isObjectURL");
var _isObjectURLDefault = parcelHelpers.interopDefault(_isObjectURL);
var _isPreviewSupported = require("@uppy/utils/lib/isPreviewSupported");
var _isPreviewSupportedDefault = parcelHelpers.interopDefault(_isPreviewSupported);
var _miniEsmMjs = require("exifr/dist/mini.esm.mjs");
var _localeJs = require("./locale.js");
var _localeJsDefault = parcelHelpers.interopDefault(_localeJs);
const packageJson = {
    "version": "3.0.5"
};
/**
 * Save a <canvas> element's content to a Blob object.
 *
 * @param {HTMLCanvasElement} canvas
 * @returns {Promise}
 */ function canvasToBlob(canvas, type, quality) {
    try {
        canvas.getContext("2d").getImageData(0, 0, 1, 1);
    } catch (err) {
        if (err.code === 18) return Promise.reject(new Error("cannot read image, probably an svg with external resources"));
    }
    if (canvas.toBlob) return new Promise((resolve)=>{
        canvas.toBlob(resolve, type, quality);
    }).then((blob)=>{
        if (blob === null) throw new Error("cannot read image, probably an svg with external resources");
        return blob;
    });
    return Promise.resolve().then(()=>{
        return (0, _dataURItoBlobDefault.default)(canvas.toDataURL(type, quality), {});
    }).then((blob)=>{
        if (blob === null) throw new Error("could not extract blob, probably an old browser");
        return blob;
    });
}
function rotateImage(image, translate) {
    let w = image.width;
    let h = image.height;
    if (translate.deg === 90 || translate.deg === 270) {
        w = image.height;
        h = image.width;
    }
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const context = canvas.getContext("2d");
    context.translate(w / 2, h / 2);
    if (translate.canvas) {
        context.rotate(translate.rad);
        context.scale(translate.scaleX, translate.scaleY);
    }
    context.drawImage(image, -image.width / 2, -image.height / 2, image.width, image.height);
    return canvas;
}
/**
 * Make sure the image doesn’t exceed browser/device canvas limits.
 * For ios with 256 RAM and ie
 */ function protect(image) {
    // https://stackoverflow.com/questions/6081483/maximum-size-of-a-canvas-element
    const ratio = image.width / image.height;
    const maxSquare = 5000000; // ios max canvas square
    const maxSize = 4096; // ie max canvas dimensions
    let maxW = Math.floor(Math.sqrt(maxSquare * ratio));
    let maxH = Math.floor(maxSquare / Math.sqrt(maxSquare * ratio));
    if (maxW > maxSize) {
        maxW = maxSize;
        maxH = Math.round(maxW / ratio);
    }
    if (maxH > maxSize) {
        maxH = maxSize;
        maxW = Math.round(ratio * maxH);
    }
    if (image.width > maxW) {
        const canvas = document.createElement("canvas");
        canvas.width = maxW;
        canvas.height = maxH;
        canvas.getContext("2d").drawImage(image, 0, 0, maxW, maxH);
        return canvas;
    }
    return image;
}
class ThumbnailGenerator extends (0, _core.UIPlugin) {
    constructor(uppy, opts){
        super(uppy, opts);
        this.onFileAdded = (file)=>{
            if (!file.preview && file.data && (0, _isPreviewSupportedDefault.default)(file.type) && !file.isRemote) this.addToQueue(file.id);
        };
        /**
     * Cancel a lazy request for a thumbnail if the thumbnail has not yet been generated.
     */ this.onCancelRequest = (file)=>{
            const index = this.queue.indexOf(file.id);
            if (index !== -1) this.queue.splice(index, 1);
        };
        /**
     * Clean up the thumbnail for a file. Cancel lazy requests and free the thumbnail URL.
     */ this.onFileRemoved = (file)=>{
            const index = this.queue.indexOf(file.id);
            if (index !== -1) this.queue.splice(index, 1);
            // Clean up object URLs.
            if (file.preview && (0, _isObjectURLDefault.default)(file.preview)) URL.revokeObjectURL(file.preview);
        };
        this.onRestored = ()=>{
            const restoredFiles = this.uppy.getFiles().filter((file)=>file.isRestored);
            restoredFiles.forEach((file)=>{
                // Only add blob URLs; they are likely invalid after being restored.
                if (!file.preview || (0, _isObjectURLDefault.default)(file.preview)) this.addToQueue(file.id);
            });
        };
        this.onAllFilesRemoved = ()=>{
            this.queue = [];
        };
        this.waitUntilAllProcessed = (fileIDs)=>{
            fileIDs.forEach((fileID)=>{
                const file = this.uppy.getFile(fileID);
                this.uppy.emit("preprocess-progress", file, {
                    mode: "indeterminate",
                    message: this.i18n("generatingThumbnails")
                });
            });
            const emitPreprocessCompleteForAll = ()=>{
                fileIDs.forEach((fileID)=>{
                    const file = this.uppy.getFile(fileID);
                    this.uppy.emit("preprocess-complete", file);
                });
            };
            return new Promise((resolve)=>{
                if (this.queueProcessing) this.uppy.once("thumbnail:all-generated", ()=>{
                    emitPreprocessCompleteForAll();
                    resolve();
                });
                else {
                    emitPreprocessCompleteForAll();
                    resolve();
                }
            });
        };
        this.type = "modifier";
        this.id = this.opts.id || "ThumbnailGenerator";
        this.title = "Thumbnail Generator";
        this.queue = [];
        this.queueProcessing = false;
        this.defaultThumbnailDimension = 200;
        this.thumbnailType = this.opts.thumbnailType || "image/jpeg";
        this.defaultLocale = (0, _localeJsDefault.default);
        const defaultOptions = {
            thumbnailWidth: null,
            thumbnailHeight: null,
            waitForThumbnailsBeforeUpload: false,
            lazy: false
        };
        this.opts = {
            ...defaultOptions,
            ...opts
        };
        this.i18nInit();
        if (this.opts.lazy && this.opts.waitForThumbnailsBeforeUpload) throw new Error("ThumbnailGenerator: The `lazy` and `waitForThumbnailsBeforeUpload` options are mutually exclusive. Please ensure at most one of them is set to `true`.");
    }
    /**
   * Create a thumbnail for the given Uppy file object.
   *
   * @param {{data: Blob}} file
   * @param {number} targetWidth
   * @param {number} targetHeight
   * @returns {Promise}
   */ createThumbnail(file, targetWidth, targetHeight) {
        const originalUrl = URL.createObjectURL(file.data);
        const onload = new Promise((resolve, reject)=>{
            const image = new Image();
            image.src = originalUrl;
            image.addEventListener("load", ()=>{
                URL.revokeObjectURL(originalUrl);
                resolve(image);
            });
            image.addEventListener("error", (event)=>{
                URL.revokeObjectURL(originalUrl);
                reject(event.error || new Error("Could not create thumbnail"));
            });
        });
        const orientationPromise = (0, _miniEsmMjs.rotation)(file.data).catch(()=>1);
        return Promise.all([
            onload,
            orientationPromise
        ]).then((_ref)=>{
            let [image, orientation] = _ref;
            const dimensions = this.getProportionalDimensions(image, targetWidth, targetHeight, orientation.deg);
            const rotatedImage = rotateImage(image, orientation);
            const resizedImage = this.resizeImage(rotatedImage, dimensions.width, dimensions.height);
            return canvasToBlob(resizedImage, this.thumbnailType, 80);
        }).then((blob)=>{
            return URL.createObjectURL(blob);
        });
    }
    /**
   * Get the new calculated dimensions for the given image and a target width
   * or height. If both width and height are given, only width is taken into
   * account. If neither width nor height are given, the default dimension
   * is used.
   */ getProportionalDimensions(img, width, height, rotation) {
        // eslint-disable-line no-shadow
        let aspect = img.width / img.height;
        if (rotation === 90 || rotation === 270) aspect = img.height / img.width;
        if (width != null) return {
            width,
            height: Math.round(width / aspect)
        };
        if (height != null) return {
            width: Math.round(height * aspect),
            height
        };
        return {
            width: this.defaultThumbnailDimension,
            height: Math.round(this.defaultThumbnailDimension / aspect)
        };
    }
    /**
   * Resize an image to the target `width` and `height`.
   *
   * Returns a Canvas with the resized image on it.
   */ // eslint-disable-next-line class-methods-use-this
    resizeImage(image, targetWidth, targetHeight) {
        // Resizing in steps refactored to use a solution from
        // https://blog.uploadcare.com/image-resize-in-browsers-is-broken-e38eed08df01
        let img = protect(image);
        let steps = Math.ceil(Math.log2(img.width / targetWidth));
        if (steps < 1) steps = 1;
        let sW = targetWidth * 2 ** (steps - 1);
        let sH = targetHeight * 2 ** (steps - 1);
        const x = 2;
        while(steps--){
            const canvas = document.createElement("canvas");
            canvas.width = sW;
            canvas.height = sH;
            canvas.getContext("2d").drawImage(img, 0, 0, sW, sH);
            img = canvas;
            sW = Math.round(sW / x);
            sH = Math.round(sH / x);
        }
        return img;
    }
    /**
   * Set the preview URL for a file.
   */ setPreviewURL(fileID, preview) {
        this.uppy.setFileState(fileID, {
            preview
        });
    }
    addToQueue(item) {
        this.queue.push(item);
        if (this.queueProcessing === false) this.processQueue();
    }
    processQueue() {
        this.queueProcessing = true;
        if (this.queue.length > 0) {
            const current = this.uppy.getFile(this.queue.shift());
            if (!current) {
                this.uppy.log("[ThumbnailGenerator] file was removed before a thumbnail could be generated, but not removed from the queue. This is probably a bug", "error");
                return Promise.resolve();
            }
            return this.requestThumbnail(current).catch(()=>{}) // eslint-disable-line node/handle-callback-err
            .then(()=>this.processQueue());
        }
        this.queueProcessing = false;
        this.uppy.log("[ThumbnailGenerator] Emptied thumbnail queue");
        this.uppy.emit("thumbnail:all-generated");
        return Promise.resolve();
    }
    requestThumbnail(file) {
        if ((0, _isPreviewSupportedDefault.default)(file.type) && !file.isRemote) return this.createThumbnail(file, this.opts.thumbnailWidth, this.opts.thumbnailHeight).then((preview)=>{
            this.setPreviewURL(file.id, preview);
            this.uppy.log(`[ThumbnailGenerator] Generated thumbnail for ${file.id}`);
            this.uppy.emit("thumbnail:generated", this.uppy.getFile(file.id), preview);
        }).catch((err)=>{
            this.uppy.log(`[ThumbnailGenerator] Failed thumbnail for ${file.id}:`, "warning");
            this.uppy.log(err, "warning");
            this.uppy.emit("thumbnail:error", this.uppy.getFile(file.id), err);
        });
        return Promise.resolve();
    }
    install() {
        this.uppy.on("file-removed", this.onFileRemoved);
        this.uppy.on("cancel-all", this.onAllFilesRemoved);
        if (this.opts.lazy) {
            this.uppy.on("thumbnail:request", this.onFileAdded);
            this.uppy.on("thumbnail:cancel", this.onCancelRequest);
        } else {
            this.uppy.on("file-added", this.onFileAdded);
            this.uppy.on("restored", this.onRestored);
        }
        if (this.opts.waitForThumbnailsBeforeUpload) this.uppy.addPreProcessor(this.waitUntilAllProcessed);
    }
    uninstall() {
        this.uppy.off("file-removed", this.onFileRemoved);
        this.uppy.off("cancel-all", this.onAllFilesRemoved);
        if (this.opts.lazy) {
            this.uppy.off("thumbnail:request", this.onFileAdded);
            this.uppy.off("thumbnail:cancel", this.onCancelRequest);
        } else {
            this.uppy.off("file-added", this.onFileAdded);
            this.uppy.off("restored", this.onRestored);
        }
        if (this.opts.waitForThumbnailsBeforeUpload) this.uppy.removePreProcessor(this.waitUntilAllProcessed);
    }
}
exports.default = ThumbnailGenerator;
ThumbnailGenerator.VERSION = packageJson.version;

},{"@uppy/core":"8Yc3I","@uppy/utils/lib/dataURItoBlob":"9jBl6","@uppy/utils/lib/isObjectURL":"9767I","@uppy/utils/lib/isPreviewSupported":"aJHxI","exifr/dist/mini.esm.mjs":"9oYPf","./locale.js":"aODlA","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"9jBl6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>dataURItoBlob);
const DATA_URL_PATTERN = /^data:([^/]+\/[^,;]+(?:[^,]*?))(;base64)?,([\s\S]*)$/;
function dataURItoBlob(dataURI, opts, toFile) {
    var _ref, _opts$mimeType;
    // get the base64 data
    const dataURIData = DATA_URL_PATTERN.exec(dataURI);
    // user may provide mime type, if not get it from data URI
    const mimeType = (_ref = (_opts$mimeType = opts.mimeType) != null ? _opts$mimeType : dataURIData == null ? void 0 : dataURIData[1]) != null ? _ref : "plain/text";
    let data;
    if (dataURIData[2] != null) {
        const binary = atob(decodeURIComponent(dataURIData[3]));
        const bytes = new Uint8Array(binary.length);
        for(let i = 0; i < binary.length; i++)bytes[i] = binary.charCodeAt(i);
        data = [
            bytes
        ];
    } else data = [
        decodeURIComponent(dataURIData[3])
    ];
    // Convert to a File?
    if (toFile) return new File(data, opts.name || "", {
        type: mimeType
    });
    return new Blob(data, {
        type: mimeType
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"9767I":[function(require,module,exports) {
/**
 * Check if a URL string is an object URL from `URL.createObjectURL`.
 *
 * @param {string} url
 * @returns {boolean}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isObjectURL);
function isObjectURL(url) {
    return url.startsWith("blob:");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"aJHxI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isPreviewSupported);
function isPreviewSupported(fileType) {
    if (!fileType) return false;
    // list of images that browsers can preview
    return /^[^/]+\/(jpe?g|gif|png|svg|svg\+xml|bmp|webp|avif)$/.test(fileType);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"9oYPf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Exifr", ()=>H);
parcelHelpers.export(exports, "Options", ()=>R);
parcelHelpers.export(exports, "allFormatters", ()=>M);
parcelHelpers.export(exports, "chunkedProps", ()=>L);
parcelHelpers.export(exports, "createDictionary", ()=>x);
parcelHelpers.export(exports, "extendDictionary", ()=>C);
parcelHelpers.export(exports, "fetchUrlAsArrayBuffer", ()=>S);
parcelHelpers.export(exports, "fileParsers", ()=>m);
parcelHelpers.export(exports, "fileReaders", ()=>b);
parcelHelpers.export(exports, "gps", ()=>fe);
parcelHelpers.export(exports, "gpsOnlyOptions", ()=>he);
parcelHelpers.export(exports, "inheritables", ()=>E);
parcelHelpers.export(exports, "orientation", ()=>ce);
parcelHelpers.export(exports, "orientationOnlyOptions", ()=>de);
parcelHelpers.export(exports, "otherSegments", ()=>T);
parcelHelpers.export(exports, "parse", ()=>Y);
parcelHelpers.export(exports, "readBlobAsArrayBuffer", ()=>A);
parcelHelpers.export(exports, "rotateCanvas", ()=>ge);
parcelHelpers.export(exports, "rotateCss", ()=>me);
parcelHelpers.export(exports, "rotation", ()=>ye);
parcelHelpers.export(exports, "rotations", ()=>pe);
parcelHelpers.export(exports, "segmentParsers", ()=>y);
parcelHelpers.export(exports, "segments", ()=>z);
parcelHelpers.export(exports, "segmentsAndBlocks", ()=>F);
parcelHelpers.export(exports, "tagKeys", ()=>B);
parcelHelpers.export(exports, "tagRevivers", ()=>I);
parcelHelpers.export(exports, "tagValues", ()=>V);
parcelHelpers.export(exports, "thumbnail", ()=>oe);
parcelHelpers.export(exports, "thumbnailOnlyOptions", ()=>le);
parcelHelpers.export(exports, "thumbnailUrl", ()=>ue);
parcelHelpers.export(exports, "tiffBlocks", ()=>P);
parcelHelpers.export(exports, "tiffExtractables", ()=>j);
var global = arguments[3];
var process = require("65f3b98d38aa6adf");
var Buffer = require("a0f0a047e4453a09").Buffer;
function e(e, t, s) {
    return t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = s, e;
}
var t = "undefined" != typeof self ? self : global;
const s = "undefined" != typeof navigator, i = s && "undefined" == typeof HTMLImageElement, n = !("undefined" == typeof global || "undefined" == typeof process || !process.versions || !process.versions.node), r = t.Buffer, a = !!r, h = (e)=>void 0 !== e;
function f(e) {
    return void 0 === e || (e instanceof Map ? 0 === e.size : 0 === Object.values(e).filter(h).length);
}
function l(e) {
    let t = new Error(e);
    throw delete t.stack, t;
}
function o(e) {
    let t = function(e) {
        let t = 0;
        return e.ifd0.enabled && (t += 1024), e.exif.enabled && (t += 2048), e.makerNote && (t += 2048), e.userComment && (t += 1024), e.gps.enabled && (t += 512), e.interop.enabled && (t += 100), e.ifd1.enabled && (t += 1024), t + 2048;
    }(e);
    return e.jfif.enabled && (t += 50), e.xmp.enabled && (t += 2e4), e.iptc.enabled && (t += 14e3), e.icc.enabled && (t += 6e3), t;
}
const u = (e)=>String.fromCharCode.apply(null, e), d = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8") : void 0;
class c {
    static from(e, t) {
        return e instanceof this && e.le === t ? e : new c(e, void 0, void 0, t);
    }
    constructor(e, t = 0, s, i){
        if ("boolean" == typeof i && (this.le = i), Array.isArray(e) && (e = new Uint8Array(e)), 0 === e) this.byteOffset = 0, this.byteLength = 0;
        else if (e instanceof ArrayBuffer) {
            void 0 === s && (s = e.byteLength - t);
            let i = new DataView(e, t, s);
            this._swapDataView(i);
        } else if (e instanceof Uint8Array || e instanceof DataView || e instanceof c) {
            void 0 === s && (s = e.byteLength - t), (t += e.byteOffset) + s > e.byteOffset + e.byteLength && l("Creating view outside of available memory in ArrayBuffer");
            let i = new DataView(e.buffer, t, s);
            this._swapDataView(i);
        } else if ("number" == typeof e) {
            let t = new DataView(new ArrayBuffer(e));
            this._swapDataView(t);
        } else l("Invalid input argument for BufferView: " + e);
    }
    _swapArrayBuffer(e) {
        this._swapDataView(new DataView(e));
    }
    _swapBuffer(e) {
        this._swapDataView(new DataView(e.buffer, e.byteOffset, e.byteLength));
    }
    _swapDataView(e) {
        this.dataView = e, this.buffer = e.buffer, this.byteOffset = e.byteOffset, this.byteLength = e.byteLength;
    }
    _lengthToEnd(e) {
        return this.byteLength - e;
    }
    set(e, t, s = c) {
        return e instanceof DataView || e instanceof c ? e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e instanceof ArrayBuffer && (e = new Uint8Array(e)), e instanceof Uint8Array || l("BufferView.set(): Invalid data argument."), this.toUint8().set(e, t), new s(this, t, e.byteLength);
    }
    subarray(e, t) {
        return t = t || this._lengthToEnd(e), new c(this, e, t);
    }
    toUint8() {
        return new Uint8Array(this.buffer, this.byteOffset, this.byteLength);
    }
    getUint8Array(e, t) {
        return new Uint8Array(this.buffer, this.byteOffset + e, t);
    }
    getString(e = 0, t = this.byteLength) {
        let s = this.getUint8Array(e, t);
        var i;
        return i = s, d ? d.decode(i) : a ? Buffer.from(i).toString("utf8") : decodeURIComponent(escape(u(i)));
    }
    getLatin1String(e = 0, t = this.byteLength) {
        let s = this.getUint8Array(e, t);
        return u(s);
    }
    getUnicodeString(e = 0, t = this.byteLength) {
        const s = [];
        for(let i = 0; i < t && e + i < this.byteLength; i += 2)s.push(this.getUint16(e + i));
        return u(s);
    }
    getInt8(e) {
        return this.dataView.getInt8(e);
    }
    getUint8(e) {
        return this.dataView.getUint8(e);
    }
    getInt16(e, t = this.le) {
        return this.dataView.getInt16(e, t);
    }
    getInt32(e, t = this.le) {
        return this.dataView.getInt32(e, t);
    }
    getUint16(e, t = this.le) {
        return this.dataView.getUint16(e, t);
    }
    getUint32(e, t = this.le) {
        return this.dataView.getUint32(e, t);
    }
    getFloat32(e, t = this.le) {
        return this.dataView.getFloat32(e, t);
    }
    getFloat64(e, t = this.le) {
        return this.dataView.getFloat64(e, t);
    }
    getFloat(e, t = this.le) {
        return this.dataView.getFloat32(e, t);
    }
    getDouble(e, t = this.le) {
        return this.dataView.getFloat64(e, t);
    }
    getUintBytes(e, t, s) {
        switch(t){
            case 1:
                return this.getUint8(e, s);
            case 2:
                return this.getUint16(e, s);
            case 4:
                return this.getUint32(e, s);
            case 8:
                return this.getUint64 && this.getUint64(e, s);
        }
    }
    getUint(e, t, s) {
        switch(t){
            case 8:
                return this.getUint8(e, s);
            case 16:
                return this.getUint16(e, s);
            case 32:
                return this.getUint32(e, s);
            case 64:
                return this.getUint64 && this.getUint64(e, s);
        }
    }
    toString(e) {
        return this.dataView.toString(e, this.constructor.name);
    }
    ensureChunk() {}
}
function p(e, t) {
    l(`${e} '${t}' was not loaded, try using full build of exifr.`);
}
class g extends Map {
    constructor(e){
        super(), this.kind = e;
    }
    get(e, t) {
        return this.has(e) || p(this.kind, e), t && (e in t || function(e, t) {
            l(`Unknown ${e} '${t}'.`);
        }(this.kind, e), t[e].enabled || p(this.kind, e)), super.get(e);
    }
    keyList() {
        return Array.from(this.keys());
    }
}
var m = new g("file parser"), y = new g("segment parser"), b = new g("file reader");
let w = t.fetch;
function k(e, t) {
    var i;
    return (i = e).startsWith("data:") || i.length > 1e4 ? v(e, t, "base64") : n && e.includes("://") ? O(e, t, "url", S) : n ? v(e, t, "fs") : s ? O(e, t, "url", S) : void l("Invalid input argument");
}
async function O(e, t, s, i) {
    return b.has(s) ? v(e, t, s) : i ? async function(e, t) {
        let s = await t(e);
        return new c(s);
    }(e, i) : void l(`Parser ${s} is not loaded`);
}
async function v(e, t, s) {
    let i = new (b.get(s))(e, t);
    return await i.read(), i;
}
const S = (e)=>w(e).then((e)=>e.arrayBuffer()), A = (e)=>new Promise((t, s)=>{
        let i = new FileReader;
        i.onloadend = ()=>t(i.result || new ArrayBuffer), i.onerror = s, i.readAsArrayBuffer(e);
    });
class U extends Map {
    get tagKeys() {
        return this.allKeys || (this.allKeys = Array.from(this.keys())), this.allKeys;
    }
    get tagValues() {
        return this.allValues || (this.allValues = Array.from(this.values())), this.allValues;
    }
}
function x(e, t, s) {
    let i = new U;
    for (let [e, t] of s)i.set(e, t);
    if (Array.isArray(t)) for (let s of t)e.set(s, i);
    else e.set(t, i);
    return i;
}
function C(e, t, s) {
    let i, n = e.get(t);
    for (i of s)n.set(i[0], i[1]);
}
const B = new Map, V = new Map, I = new Map, L = [
    "chunked",
    "firstChunkSize",
    "firstChunkSizeNode",
    "firstChunkSizeBrowser",
    "chunkSize",
    "chunkLimit"
], T = [
    "jfif",
    "xmp",
    "icc",
    "iptc",
    "ihdr"
], z = [
    "tiff",
    ...T
], P = [
    "ifd0",
    "ifd1",
    "exif",
    "gps",
    "interop"
], F = [
    ...z,
    ...P
], j = [
    "makerNote",
    "userComment"
], E = [
    "translateKeys",
    "translateValues",
    "reviveValues",
    "multiSegment"
], M = [
    ...E,
    "sanitize",
    "mergeOutput",
    "silentErrors"
];
class _ {
    get translate() {
        return this.translateKeys || this.translateValues || this.reviveValues;
    }
}
class D extends _ {
    get needed() {
        return this.enabled || this.deps.size > 0;
    }
    constructor(t, s, i, n){
        if (super(), e(this, "enabled", !1), e(this, "skip", new Set), e(this, "pick", new Set), e(this, "deps", new Set), e(this, "translateKeys", !1), e(this, "translateValues", !1), e(this, "reviveValues", !1), this.key = t, this.enabled = s, this.parse = this.enabled, this.applyInheritables(n), this.canBeFiltered = P.includes(t), this.canBeFiltered && (this.dict = B.get(t)), void 0 !== i) {
            if (Array.isArray(i)) this.parse = this.enabled = !0, this.canBeFiltered && i.length > 0 && this.translateTagSet(i, this.pick);
            else if ("object" == typeof i) {
                if (this.enabled = !0, this.parse = !1 !== i.parse, this.canBeFiltered) {
                    let { pick: e, skip: t } = i;
                    e && e.length > 0 && this.translateTagSet(e, this.pick), t && t.length > 0 && this.translateTagSet(t, this.skip);
                }
                this.applyInheritables(i);
            } else !0 === i || !1 === i ? this.parse = this.enabled = i : l(`Invalid options argument: ${i}`);
        }
    }
    applyInheritables(e) {
        let t, s;
        for (t of E)s = e[t], void 0 !== s && (this[t] = s);
    }
    translateTagSet(e, t) {
        if (this.dict) {
            let s, i, { tagKeys: n, tagValues: r } = this.dict;
            for (s of e)"string" == typeof s ? (i = r.indexOf(s), -1 === i && (i = n.indexOf(Number(s))), -1 !== i && t.add(Number(n[i]))) : t.add(s);
        } else for (let s of e)t.add(s);
    }
    finalizeFilters() {
        !this.enabled && this.deps.size > 0 ? (this.enabled = !0, X(this.pick, this.deps)) : this.enabled && this.pick.size > 0 && X(this.pick, this.deps);
    }
}
var N = {
    jfif: !1,
    tiff: !0,
    xmp: !1,
    icc: !1,
    iptc: !1,
    ifd0: !0,
    ifd1: !1,
    exif: !0,
    gps: !0,
    interop: !1,
    ihdr: void 0,
    makerNote: !1,
    userComment: !1,
    multiSegment: !1,
    skip: [],
    pick: [],
    translateKeys: !0,
    translateValues: !0,
    reviveValues: !0,
    sanitize: !0,
    mergeOutput: !0,
    silentErrors: !0,
    chunked: !0,
    firstChunkSize: void 0,
    firstChunkSizeNode: 512,
    firstChunkSizeBrowser: 65536,
    chunkSize: 65536,
    chunkLimit: 5
}, $ = new Map;
class R extends _ {
    static useCached(e) {
        let t = $.get(e);
        return void 0 !== t || (t = new this(e), $.set(e, t)), t;
    }
    constructor(e){
        super(), !0 === e ? this.setupFromTrue() : void 0 === e ? this.setupFromUndefined() : Array.isArray(e) ? this.setupFromArray(e) : "object" == typeof e ? this.setupFromObject(e) : l(`Invalid options argument ${e}`), void 0 === this.firstChunkSize && (this.firstChunkSize = s ? this.firstChunkSizeBrowser : this.firstChunkSizeNode), this.mergeOutput && (this.ifd1.enabled = !1), this.filterNestedSegmentTags(), this.traverseTiffDependencyTree(), this.checkLoadedPlugins();
    }
    setupFromUndefined() {
        let e;
        for (e of L)this[e] = N[e];
        for (e of M)this[e] = N[e];
        for (e of j)this[e] = N[e];
        for (e of F)this[e] = new D(e, N[e], void 0, this);
    }
    setupFromTrue() {
        let e;
        for (e of L)this[e] = N[e];
        for (e of M)this[e] = N[e];
        for (e of j)this[e] = !0;
        for (e of F)this[e] = new D(e, !0, void 0, this);
    }
    setupFromArray(e) {
        let t;
        for (t of L)this[t] = N[t];
        for (t of M)this[t] = N[t];
        for (t of j)this[t] = N[t];
        for (t of F)this[t] = new D(t, !1, void 0, this);
        this.setupGlobalFilters(e, void 0, P);
    }
    setupFromObject(e) {
        let t;
        for (t of (P.ifd0 = P.ifd0 || P.image, P.ifd1 = P.ifd1 || P.thumbnail, Object.assign(this, e), L))this[t] = W(e[t], N[t]);
        for (t of M)this[t] = W(e[t], N[t]);
        for (t of j)this[t] = W(e[t], N[t]);
        for (t of z)this[t] = new D(t, N[t], e[t], this);
        for (t of P)this[t] = new D(t, N[t], e[t], this.tiff);
        this.setupGlobalFilters(e.pick, e.skip, P, F), !0 === e.tiff ? this.batchEnableWithBool(P, !0) : !1 === e.tiff ? this.batchEnableWithUserValue(P, e) : Array.isArray(e.tiff) ? this.setupGlobalFilters(e.tiff, void 0, P) : "object" == typeof e.tiff && this.setupGlobalFilters(e.tiff.pick, e.tiff.skip, P);
    }
    batchEnableWithBool(e, t) {
        for (let s of e)this[s].enabled = t;
    }
    batchEnableWithUserValue(e, t) {
        for (let s of e){
            let e = t[s];
            this[s].enabled = !1 !== e && void 0 !== e;
        }
    }
    setupGlobalFilters(e, t, s, i = s) {
        if (e && e.length) {
            for (let e of i)this[e].enabled = !1;
            let t = K(e, s);
            for (let [e, s] of t)X(this[e].pick, s), this[e].enabled = !0;
        } else if (t && t.length) {
            let e = K(t, s);
            for (let [t, s] of e)X(this[t].skip, s);
        }
    }
    filterNestedSegmentTags() {
        let { ifd0: e, exif: t, xmp: s, iptc: i, icc: n } = this;
        this.makerNote ? t.deps.add(37500) : t.skip.add(37500), this.userComment ? t.deps.add(37510) : t.skip.add(37510), s.enabled || e.skip.add(700), i.enabled || e.skip.add(33723), n.enabled || e.skip.add(34675);
    }
    traverseTiffDependencyTree() {
        let { ifd0: e, exif: t, gps: s, interop: i } = this;
        i.needed && (t.deps.add(40965), e.deps.add(40965)), t.needed && e.deps.add(34665), s.needed && e.deps.add(34853), this.tiff.enabled = P.some((e)=>!0 === this[e].enabled) || this.makerNote || this.userComment;
        for (let e of P)this[e].finalizeFilters();
    }
    get onlyTiff() {
        return !T.map((e)=>this[e].enabled).some((e)=>!0 === e) && this.tiff.enabled;
    }
    checkLoadedPlugins() {
        for (let e of z)this[e].enabled && !y.has(e) && p("segment parser", e);
    }
}
function K(e, t) {
    let s, i, n, r, a = [];
    for (n of t){
        for (r of (s = B.get(n), i = [], s))(e.includes(r[0]) || e.includes(r[1])) && i.push(r[0]);
        i.length && a.push([
            n,
            i
        ]);
    }
    return a;
}
function W(e, t) {
    return void 0 !== e ? e : void 0 !== t ? t : void 0;
}
function X(e, t) {
    for (let s of t)e.add(s);
}
e(R, "default", N);
class H {
    constructor(t){
        e(this, "parsers", {}), e(this, "output", {}), e(this, "errors", []), e(this, "pushToErrors", (e)=>this.errors.push(e)), this.options = R.useCached(t);
    }
    async read(e) {
        this.file = await function(e, t) {
            return "string" == typeof e ? k(e, t) : s && !i && e instanceof HTMLImageElement ? k(e.src, t) : e instanceof Uint8Array || e instanceof ArrayBuffer || e instanceof DataView ? new c(e) : s && e instanceof Blob ? O(e, t, "blob", A) : void l("Invalid input argument");
        }(e, this.options);
    }
    setup() {
        if (this.fileParser) return;
        let { file: e } = this, t = e.getUint16(0);
        for (let [s, i] of m)if (i.canHandle(e, t)) return this.fileParser = new i(this.options, this.file, this.parsers), e[s] = !0;
        this.file.close && this.file.close(), l("Unknown file format");
    }
    async parse() {
        let { output: e, errors: t } = this;
        var s;
        return this.setup(), this.options.silentErrors ? (await this.executeParsers().catch(this.pushToErrors), t.push(...this.fileParser.errors)) : await this.executeParsers(), this.file.close && this.file.close(), this.options.silentErrors && t.length > 0 && (e.errors = t), f(s = e) ? void 0 : s;
    }
    async executeParsers() {
        let { output: e } = this;
        await this.fileParser.parse();
        let t = Object.values(this.parsers).map(async (t)=>{
            let s = await t.parse();
            t.assignToOutput(e, s);
        });
        this.options.silentErrors && (t = t.map((e)=>e.catch(this.pushToErrors))), await Promise.all(t);
    }
    async extractThumbnail() {
        this.setup();
        let { options: e, file: t } = this, s = y.get("tiff", e);
        var i;
        if (t.tiff ? i = {
            start: 0,
            type: "tiff"
        } : t.jpeg && (i = await this.fileParser.getOrFindSegment("tiff")), void 0 === i) return;
        let n = await this.fileParser.ensureSegmentChunk(i), r = this.parsers.tiff = new s(n, e, t), a = await r.extractThumbnail();
        return t.close && t.close(), a;
    }
}
async function Y(e, t) {
    let s = new H(t);
    return await s.read(e), s.parse();
}
var G = Object.freeze({
    __proto__: null,
    parse: Y,
    Exifr: H,
    fileParsers: m,
    segmentParsers: y,
    fileReaders: b,
    tagKeys: B,
    tagValues: V,
    tagRevivers: I,
    createDictionary: x,
    extendDictionary: C,
    fetchUrlAsArrayBuffer: S,
    readBlobAsArrayBuffer: A,
    chunkedProps: L,
    otherSegments: T,
    segments: z,
    tiffBlocks: P,
    segmentsAndBlocks: F,
    tiffExtractables: j,
    inheritables: E,
    allFormatters: M,
    Options: R
});
class J {
    static findPosition(e, t) {
        let s = e.getUint16(t + 2) + 2, i = "function" == typeof this.headerLength ? this.headerLength(e, t, s) : this.headerLength, n = t + i, r = s - i;
        return {
            offset: t,
            length: s,
            headerLength: i,
            start: n,
            size: r,
            end: n + r
        };
    }
    static parse(e, t = {}) {
        return new this(e, new R({
            [this.type]: t
        }), e).parse();
    }
    normalizeInput(e) {
        return e instanceof c ? e : new c(e);
    }
    constructor(t, s = {}, i){
        e(this, "errors", []), e(this, "raw", new Map), e(this, "handleError", (e)=>{
            if (!this.options.silentErrors) throw e;
            this.errors.push(e.message);
        }), this.chunk = this.normalizeInput(t), this.file = i, this.type = this.constructor.type, this.globalOptions = this.options = s, this.localOptions = s[this.type], this.canTranslate = this.localOptions && this.localOptions.translate;
    }
    translate() {
        this.canTranslate && (this.translated = this.translateBlock(this.raw, this.type));
    }
    get output() {
        return this.translated ? this.translated : this.raw ? Object.fromEntries(this.raw) : void 0;
    }
    translateBlock(e, t) {
        let s = I.get(t), i = V.get(t), n = B.get(t), r = this.options[t], a = r.reviveValues && !!s, h = r.translateValues && !!i, f = r.translateKeys && !!n, l = {};
        for (let [t, r] of e)a && s.has(t) ? r = s.get(t)(r) : h && i.has(t) && (r = this.translateValue(r, i.get(t))), f && n.has(t) && (t = n.get(t) || t), l[t] = r;
        return l;
    }
    translateValue(e, t) {
        return t[e] || t.DEFAULT || e;
    }
    assignToOutput(e, t) {
        this.assignObjectToOutput(e, this.constructor.type, t);
    }
    assignObjectToOutput(e, t, s) {
        if (this.globalOptions.mergeOutput) return Object.assign(e, s);
        e[t] ? Object.assign(e[t], s) : e[t] = s;
    }
}
e(J, "headerLength", 4), e(J, "type", void 0), e(J, "multiSegment", !1), e(J, "canHandle", ()=>!1);
function q(e) {
    return 192 === e || 194 === e || 196 === e || 219 === e || 221 === e || 218 === e || 254 === e;
}
function Q(e) {
    return e >= 224 && e <= 239;
}
function Z(e, t, s) {
    for (let [i, n] of y)if (n.canHandle(e, t, s)) return i;
}
class ee extends class {
    constructor(t, s, i){
        e(this, "errors", []), e(this, "ensureSegmentChunk", async (e)=>{
            let t = e.start, s = e.size || 65536;
            if (this.file.chunked) {
                if (this.file.available(t, s)) e.chunk = this.file.subarray(t, s);
                else try {
                    e.chunk = await this.file.readChunk(t, s);
                } catch (t) {
                    l(`Couldn't read segment: ${JSON.stringify(e)}. ${t.message}`);
                }
            } else this.file.byteLength > t + s ? e.chunk = this.file.subarray(t, s) : void 0 === e.size ? e.chunk = this.file.subarray(t) : l("Segment unreachable: " + JSON.stringify(e));
            return e.chunk;
        }), this.extendOptions && this.extendOptions(t), this.options = t, this.file = s, this.parsers = i;
    }
    injectSegment(e, t) {
        this.options[e].enabled && this.createParser(e, t);
    }
    createParser(e, t) {
        let s = new (y.get(e))(t, this.options, this.file);
        return this.parsers[e] = s;
    }
    createParsers(e) {
        for (let t of e){
            let { type: e, chunk: s } = t, i = this.options[e];
            if (i && i.enabled) {
                let t = this.parsers[e];
                t && t.append || t || this.createParser(e, s);
            }
        }
    }
    async readSegments(e) {
        let t = e.map(this.ensureSegmentChunk);
        await Promise.all(t);
    }
} {
    constructor(...t){
        super(...t), e(this, "appSegments", []), e(this, "jpegSegments", []), e(this, "unknownSegments", []);
    }
    static canHandle(e, t) {
        return 65496 === t;
    }
    async parse() {
        await this.findAppSegments(), await this.readSegments(this.appSegments), this.mergeMultiSegments(), this.createParsers(this.mergedAppSegments || this.appSegments);
    }
    setupSegmentFinderArgs(e) {
        !0 === e ? (this.findAll = !0, this.wanted = new Set(y.keyList())) : (e = void 0 === e ? y.keyList().filter((e)=>this.options[e].enabled) : e.filter((e)=>this.options[e].enabled && y.has(e)), this.findAll = !1, this.remaining = new Set(e), this.wanted = new Set(e)), this.unfinishedMultiSegment = !1;
    }
    async findAppSegments(e = 0, t) {
        this.setupSegmentFinderArgs(t);
        let { file: s, findAll: i, wanted: n, remaining: r } = this;
        if (!i && this.file.chunked && (i = Array.from(n).some((e)=>{
            let t = y.get(e), s = this.options[e];
            return t.multiSegment && s.multiSegment;
        }), i && await this.file.readWhole()), e = this.findAppSegmentsInRange(e, s.byteLength), !this.options.onlyTiff && s.chunked) {
            let t = !1;
            for(; r.size > 0 && !t && (s.canReadNextChunk || this.unfinishedMultiSegment);){
                let { nextChunkOffset: i } = s, n = this.appSegments.some((e)=>!this.file.available(e.offset || e.start, e.length || e.size));
                if (t = e > i && !n ? !await s.readNextChunk(e) : !await s.readNextChunk(i), void 0 === (e = this.findAppSegmentsInRange(e, s.byteLength))) return;
            }
        }
    }
    findAppSegmentsInRange(e, t) {
        t -= 2;
        let s, i, n, r, a, h, { file: f, findAll: l, wanted: o, remaining: u, options: d } = this;
        for(; e < t; e++)if (255 === f.getUint8(e)) {
            if (s = f.getUint8(e + 1), Q(s)) {
                if (i = f.getUint16(e + 2), n = Z(f, e, i), n && o.has(n) && (r = y.get(n), a = r.findPosition(f, e), h = d[n], a.type = n, this.appSegments.push(a), !l && (r.multiSegment && h.multiSegment ? (this.unfinishedMultiSegment = a.chunkNumber < a.chunkCount, this.unfinishedMultiSegment || u.delete(n)) : u.delete(n), 0 === u.size))) break;
                d.recordUnknownSegments && (a = J.findPosition(f, e), a.marker = s, this.unknownSegments.push(a)), e += i + 1;
            } else if (q(s)) {
                if (i = f.getUint16(e + 2), 218 === s && !1 !== d.stopAfterSos) return;
                d.recordJpegSegments && this.jpegSegments.push({
                    offset: e,
                    length: i,
                    marker: s
                }), e += i + 1;
            }
        }
        return e;
    }
    mergeMultiSegments() {
        if (!this.appSegments.some((e)=>e.multiSegment)) return;
        let e = function(e, t) {
            let s, i, n, r = new Map;
            for(let a = 0; a < e.length; a++)s = e[a], i = s[t], r.has(i) ? n = r.get(i) : r.set(i, n = []), n.push(s);
            return Array.from(r);
        }(this.appSegments, "type");
        this.mergedAppSegments = e.map(([e, t])=>{
            let s = y.get(e, this.options);
            if (s.handleMultiSegments) return {
                type: e,
                chunk: s.handleMultiSegments(t)
            };
            return t[0];
        });
    }
    getSegment(e) {
        return this.appSegments.find((t)=>t.type === e);
    }
    async getOrFindSegment(e) {
        let t = this.getSegment(e);
        return void 0 === t && (await this.findAppSegments(0, [
            e
        ]), t = this.getSegment(e)), t;
    }
}
e(ee, "type", "jpeg"), m.set("jpeg", ee);
const te = [
    void 0,
    1,
    1,
    2,
    4,
    8,
    1,
    1,
    2,
    4,
    8,
    4,
    8,
    4
];
class se extends J {
    parseHeader() {
        var e = this.chunk.getUint16();
        18761 === e ? this.le = !0 : 19789 === e && (this.le = !1), this.chunk.le = this.le, this.headerParsed = !0;
    }
    parseTags(e, t, s = new Map) {
        let { pick: i, skip: n } = this.options[t];
        i = new Set(i);
        let r = i.size > 0, a = 0 === n.size, h = this.chunk.getUint16(e);
        e += 2;
        for(let f = 0; f < h; f++){
            let h = this.chunk.getUint16(e);
            if (r) {
                if (i.has(h) && (s.set(h, this.parseTag(e, h, t)), i.delete(h), 0 === i.size)) break;
            } else !a && n.has(h) || s.set(h, this.parseTag(e, h, t));
            e += 12;
        }
        return s;
    }
    parseTag(e, t, s) {
        let { chunk: i } = this, n = i.getUint16(e + 2), r = i.getUint32(e + 4), a = te[n];
        if (a * r <= 4 ? e += 8 : e = i.getUint32(e + 8), (n < 1 || n > 13) && l(`Invalid TIFF value type. block: ${s.toUpperCase()}, tag: ${t.toString(16)}, type: ${n}, offset ${e}`), e > i.byteLength && l(`Invalid TIFF value offset. block: ${s.toUpperCase()}, tag: ${t.toString(16)}, type: ${n}, offset ${e} is outside of chunk size ${i.byteLength}`), 1 === n) return i.getUint8Array(e, r);
        if (2 === n) return "" === (h = (function(e) {
            for(; e.endsWith("\x00");)e = e.slice(0, -1);
            return e;
        })(h = i.getString(e, r)).trim()) ? void 0 : h;
        var h;
        if (7 === n) return i.getUint8Array(e, r);
        if (1 === r) return this.parseTagValue(n, e);
        {
            let t = new (function(e) {
                switch(e){
                    case 1:
                        return Uint8Array;
                    case 3:
                        return Uint16Array;
                    case 4:
                        return Uint32Array;
                    case 5:
                        return Array;
                    case 6:
                        return Int8Array;
                    case 8:
                        return Int16Array;
                    case 9:
                        return Int32Array;
                    case 10:
                        return Array;
                    case 11:
                        return Float32Array;
                    case 12:
                        return Float64Array;
                    default:
                        return Array;
                }
            }(n))(r), s = a;
            for(let i = 0; i < r; i++)t[i] = this.parseTagValue(n, e), e += s;
            return t;
        }
    }
    parseTagValue(e, t) {
        let { chunk: s } = this;
        switch(e){
            case 1:
                return s.getUint8(t);
            case 3:
                return s.getUint16(t);
            case 4:
                return s.getUint32(t);
            case 5:
                return s.getUint32(t) / s.getUint32(t + 4);
            case 6:
                return s.getInt8(t);
            case 8:
                return s.getInt16(t);
            case 9:
                return s.getInt32(t);
            case 10:
                return s.getInt32(t) / s.getInt32(t + 4);
            case 11:
                return s.getFloat(t);
            case 12:
                return s.getDouble(t);
            case 13:
                return s.getUint32(t);
            default:
                l(`Invalid tiff type ${e}`);
        }
    }
}
class ie extends se {
    static canHandle(e, t) {
        return 225 === e.getUint8(t + 1) && 1165519206 === e.getUint32(t + 4) && 0 === e.getUint16(t + 8);
    }
    async parse() {
        this.parseHeader();
        let { options: e } = this;
        return e.ifd0.enabled && await this.parseIfd0Block(), e.exif.enabled && await this.safeParse("parseExifBlock"), e.gps.enabled && await this.safeParse("parseGpsBlock"), e.interop.enabled && await this.safeParse("parseInteropBlock"), e.ifd1.enabled && await this.safeParse("parseThumbnailBlock"), this.createOutput();
    }
    safeParse(e) {
        let t = this[e]();
        return void 0 !== t.catch && (t = t.catch(this.handleError)), t;
    }
    findIfd0Offset() {
        void 0 === this.ifd0Offset && (this.ifd0Offset = this.chunk.getUint32(4));
    }
    findIfd1Offset() {
        if (void 0 === this.ifd1Offset) {
            this.findIfd0Offset();
            let e = this.chunk.getUint16(this.ifd0Offset), t = this.ifd0Offset + 2 + 12 * e;
            this.ifd1Offset = this.chunk.getUint32(t);
        }
    }
    parseBlock(e, t) {
        let s = new Map;
        return this[t] = s, this.parseTags(e, t, s), s;
    }
    async parseIfd0Block() {
        if (this.ifd0) return;
        let { file: e } = this;
        this.findIfd0Offset(), this.ifd0Offset < 8 && l("Malformed EXIF data"), !e.chunked && this.ifd0Offset > e.byteLength && l(`IFD0 offset points to outside of file.\nthis.ifd0Offset: ${this.ifd0Offset}, file.byteLength: ${e.byteLength}`), e.tiff && await e.ensureChunk(this.ifd0Offset, o(this.options));
        let t = this.parseBlock(this.ifd0Offset, "ifd0");
        return 0 !== t.size ? (this.exifOffset = t.get(34665), this.interopOffset = t.get(40965), this.gpsOffset = t.get(34853), this.xmp = t.get(700), this.iptc = t.get(33723), this.icc = t.get(34675), this.options.sanitize && (t.delete(34665), t.delete(40965), t.delete(34853), t.delete(700), t.delete(33723), t.delete(34675)), t) : void 0;
    }
    async parseExifBlock() {
        if (this.exif) return;
        if (this.ifd0 || await this.parseIfd0Block(), void 0 === this.exifOffset) return;
        this.file.tiff && await this.file.ensureChunk(this.exifOffset, o(this.options));
        let e = this.parseBlock(this.exifOffset, "exif");
        return this.interopOffset || (this.interopOffset = e.get(40965)), this.makerNote = e.get(37500), this.userComment = e.get(37510), this.options.sanitize && (e.delete(40965), e.delete(37500), e.delete(37510)), this.unpack(e, 41728), this.unpack(e, 41729), e;
    }
    unpack(e, t) {
        let s = e.get(t);
        s && 1 === s.length && e.set(t, s[0]);
    }
    async parseGpsBlock() {
        if (this.gps) return;
        if (this.ifd0 || await this.parseIfd0Block(), void 0 === this.gpsOffset) return;
        let e = this.parseBlock(this.gpsOffset, "gps");
        return e && e.has(2) && e.has(4) && (e.set("latitude", ne(...e.get(2), e.get(1))), e.set("longitude", ne(...e.get(4), e.get(3)))), e;
    }
    async parseInteropBlock() {
        if (!this.interop && (this.ifd0 || await this.parseIfd0Block(), void 0 !== this.interopOffset || this.exif || await this.parseExifBlock(), void 0 !== this.interopOffset)) return this.parseBlock(this.interopOffset, "interop");
    }
    async parseThumbnailBlock(e = !1) {
        if (!this.ifd1 && !this.ifd1Parsed && (!this.options.mergeOutput || e)) return this.findIfd1Offset(), this.ifd1Offset > 0 && (this.parseBlock(this.ifd1Offset, "ifd1"), this.ifd1Parsed = !0), this.ifd1;
    }
    async extractThumbnail() {
        if (this.headerParsed || this.parseHeader(), this.ifd1Parsed || await this.parseThumbnailBlock(!0), void 0 === this.ifd1) return;
        let e = this.ifd1.get(513), t = this.ifd1.get(514);
        return this.chunk.getUint8Array(e, t);
    }
    get image() {
        return this.ifd0;
    }
    get thumbnail() {
        return this.ifd1;
    }
    createOutput() {
        let e, t, s, i = {};
        for (t of P)if (e = this[t], !f(e)) {
            if (s = this.canTranslate ? this.translateBlock(e, t) : Object.fromEntries(e), this.options.mergeOutput) {
                if ("ifd1" === t) continue;
                Object.assign(i, s);
            } else i[t] = s;
        }
        return this.makerNote && (i.makerNote = this.makerNote), this.userComment && (i.userComment = this.userComment), i;
    }
    assignToOutput(e, t) {
        if (this.globalOptions.mergeOutput) Object.assign(e, t);
        else for (let [s, i] of Object.entries(t))this.assignObjectToOutput(e, s, i);
    }
}
function ne(e, t, s, i) {
    var n = e + t / 60 + s / 3600;
    return "S" !== i && "W" !== i || (n *= -1), n;
}
e(ie, "type", "tiff"), e(ie, "headerLength", 10), y.set("tiff", ie);
var re = Object.freeze({
    __proto__: null,
    default: G,
    Exifr: H,
    fileParsers: m,
    segmentParsers: y,
    fileReaders: b,
    tagKeys: B,
    tagValues: V,
    tagRevivers: I,
    createDictionary: x,
    extendDictionary: C,
    fetchUrlAsArrayBuffer: S,
    readBlobAsArrayBuffer: A,
    chunkedProps: L,
    otherSegments: T,
    segments: z,
    tiffBlocks: P,
    segmentsAndBlocks: F,
    tiffExtractables: j,
    inheritables: E,
    allFormatters: M,
    Options: R,
    parse: Y
});
const ae = {
    ifd0: !1,
    ifd1: !1,
    exif: !1,
    gps: !1,
    interop: !1,
    sanitize: !1,
    reviveValues: !0,
    translateKeys: !1,
    translateValues: !1,
    mergeOutput: !1
}, he = Object.assign({}, ae, {
    firstChunkSize: 4e4,
    gps: [
        1,
        2,
        3,
        4
    ]
});
async function fe(e) {
    let t = new H(he);
    await t.read(e);
    let s = await t.parse();
    if (s && s.gps) {
        let { latitude: e, longitude: t } = s.gps;
        return {
            latitude: e,
            longitude: t
        };
    }
}
const le = Object.assign({}, ae, {
    tiff: !1,
    ifd1: !0,
    mergeOutput: !1
});
async function oe(e) {
    let t = new H(le);
    await t.read(e);
    let s = await t.extractThumbnail();
    return s && a ? r.from(s) : s;
}
async function ue(e) {
    let t = await this.thumbnail(e);
    if (void 0 !== t) {
        let e = new Blob([
            t
        ]);
        return URL.createObjectURL(e);
    }
}
const de = Object.assign({}, ae, {
    firstChunkSize: 4e4,
    ifd0: [
        274
    ]
});
async function ce(e) {
    let t = new H(de);
    await t.read(e);
    let s = await t.parse();
    if (s && s.ifd0) return s.ifd0[274];
}
const pe = Object.freeze({
    1: {
        dimensionSwapped: !1,
        scaleX: 1,
        scaleY: 1,
        deg: 0,
        rad: 0
    },
    2: {
        dimensionSwapped: !1,
        scaleX: -1,
        scaleY: 1,
        deg: 0,
        rad: 0
    },
    3: {
        dimensionSwapped: !1,
        scaleX: 1,
        scaleY: 1,
        deg: 180,
        rad: 180 * Math.PI / 180
    },
    4: {
        dimensionSwapped: !1,
        scaleX: -1,
        scaleY: 1,
        deg: 180,
        rad: 180 * Math.PI / 180
    },
    5: {
        dimensionSwapped: !0,
        scaleX: 1,
        scaleY: -1,
        deg: 90,
        rad: 90 * Math.PI / 180
    },
    6: {
        dimensionSwapped: !0,
        scaleX: 1,
        scaleY: 1,
        deg: 90,
        rad: 90 * Math.PI / 180
    },
    7: {
        dimensionSwapped: !0,
        scaleX: 1,
        scaleY: -1,
        deg: 270,
        rad: 270 * Math.PI / 180
    },
    8: {
        dimensionSwapped: !0,
        scaleX: 1,
        scaleY: 1,
        deg: 270,
        rad: 270 * Math.PI / 180
    }
});
let ge = !0, me = !0;
if ("object" == typeof navigator) {
    let e = navigator.userAgent;
    if (e.includes("iPad") || e.includes("iPhone")) {
        let t = e.match(/OS (\d+)_(\d+)/);
        if (t) {
            let [, e, s] = t, i = Number(e) + .1 * Number(s);
            ge = i < 13.4, me = !1;
        }
    } else if (e.includes("OS X 10")) {
        let [, t] = e.match(/OS X 10[_.](\d+)/);
        ge = me = Number(t) < 15;
    }
    if (e.includes("Chrome/")) {
        let [, t] = e.match(/Chrome\/(\d+)/);
        ge = me = Number(t) < 81;
    } else if (e.includes("Firefox/")) {
        let [, t] = e.match(/Firefox\/(\d+)/);
        ge = me = Number(t) < 77;
    }
}
async function ye(e) {
    let t = await ce(e);
    return Object.assign({
        canvas: ge,
        css: me
    }, pe[t]);
}
class be extends c {
    constructor(...t){
        super(...t), e(this, "ranges", new we), 0 !== this.byteLength && this.ranges.add(0, this.byteLength);
    }
    _tryExtend(e, t, s) {
        if (0 === e && 0 === this.byteLength && s) {
            let e = new DataView(s.buffer || s, s.byteOffset, s.byteLength);
            this._swapDataView(e);
        } else {
            let s = e + t;
            if (s > this.byteLength) {
                let { dataView: e } = this._extend(s);
                this._swapDataView(e);
            }
        }
    }
    _extend(e) {
        let t;
        t = a ? r.allocUnsafe(e) : new Uint8Array(e);
        let s = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return t.set(new Uint8Array(this.buffer, this.byteOffset, this.byteLength), 0), {
            uintView: t,
            dataView: s
        };
    }
    subarray(e, t, s = !1) {
        return t = t || this._lengthToEnd(e), s && this._tryExtend(e, t), this.ranges.add(e, t), super.subarray(e, t);
    }
    set(e, t, s = !1) {
        s && this._tryExtend(t, e.byteLength, e);
        let i = super.set(e, t);
        return this.ranges.add(t, i.byteLength), i;
    }
    async ensureChunk(e, t) {
        this.chunked && (this.ranges.available(e, t) || await this.readChunk(e, t));
    }
    available(e, t) {
        return this.ranges.available(e, t);
    }
}
class we {
    constructor(){
        e(this, "list", []);
    }
    get length() {
        return this.list.length;
    }
    add(e, t, s = 0) {
        let i = e + t, n = this.list.filter((t)=>ke(e, t.offset, i) || ke(e, t.end, i));
        if (n.length > 0) {
            e = Math.min(e, ...n.map((e)=>e.offset)), i = Math.max(i, ...n.map((e)=>e.end)), t = i - e;
            let s = n.shift();
            s.offset = e, s.length = t, s.end = i, this.list = this.list.filter((e)=>!n.includes(e));
        } else this.list.push({
            offset: e,
            length: t,
            end: i
        });
    }
    available(e, t) {
        let s = e + t;
        return this.list.some((t)=>t.offset <= e && s <= t.end);
    }
}
function ke(e, t, s) {
    return e <= t && t <= s;
}
class Oe extends be {
    constructor(t, s){
        super(0), e(this, "chunksRead", 0), this.input = t, this.options = s;
    }
    async readWhole() {
        this.chunked = !1, await this.readChunk(this.nextChunkOffset);
    }
    async readChunked() {
        this.chunked = !0, await this.readChunk(0, this.options.firstChunkSize);
    }
    async readNextChunk(e = this.nextChunkOffset) {
        if (this.fullyRead) return this.chunksRead++, !1;
        let t = this.options.chunkSize, s = await this.readChunk(e, t);
        return !!s && s.byteLength === t;
    }
    async readChunk(e, t) {
        if (this.chunksRead++, 0 !== (t = this.safeWrapAddress(e, t))) return this._readChunk(e, t);
    }
    safeWrapAddress(e, t) {
        return void 0 !== this.size && e + t > this.size ? Math.max(0, this.size - e) : t;
    }
    get nextChunkOffset() {
        if (0 !== this.ranges.list.length) return this.ranges.list[0].length;
    }
    get canReadNextChunk() {
        return this.chunksRead < this.options.chunkLimit;
    }
    get fullyRead() {
        return void 0 !== this.size && this.nextChunkOffset === this.size;
    }
    read() {
        return this.options.chunked ? this.readChunked() : this.readWhole();
    }
    close() {}
}
b.set("blob", class extends Oe {
    async readWhole() {
        this.chunked = !1;
        let e = await A(this.input);
        this._swapArrayBuffer(e);
    }
    readChunked() {
        return this.chunked = !0, this.size = this.input.size, super.readChunked();
    }
    async _readChunk(e, t) {
        let s = t ? e + t : void 0, i = this.input.slice(e, s), n = await A(i);
        return this.set(n, e, !0);
    }
});
exports.default = re;

},{"65f3b98d38aa6adf":"d5jf4","a0f0a047e4453a09":"fCgem","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"fCgem":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ "use strict";
const base64 = require("9c62938f1dccc73c");
const ieee754 = require("aceacb6a4531a9d2");
const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" // eslint-disable-line dot-notation
 ? Symbol["for"]("nodejs.util.inspect.custom") // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === "string") return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== "number") throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
    if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case "ascii":
        case "latin1":
        case "binary":
            return len;
        case "utf8":
        case "utf-8":
            return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return len * 2;
        case "hex":
            return len >>> 1;
        case "base64":
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return "";
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return "";
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return "";
    if (!encoding) encoding = "utf8";
    while(true)switch(encoding){
        case "hex":
            return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
            return utf8Slice(this, start, end);
        case "ascii":
            return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
            return latin1Slice(this, start, end);
        case "base64":
            return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = "";
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === "string") val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i;
    if (dir) {
        let foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = "utf8";
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    if (!encoding) encoding = "utf8";
    let loweredCase = false;
    for(;;)switch(encoding){
        case "hex":
            return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
            return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
            return asciiWrite(this, string, offset, length);
        case "base64":
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = "";
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = "";
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset + --byteLength];
    let mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let i = byteLength;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 2 ** 16 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let i = byteLength - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = byteLength - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError("targetStart out of bounds");
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== "string") throw new TypeError("encoding must be a string");
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === "number") val = val & 255;
    else if (typeof val === "boolean") val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === "number") for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, "message", {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, "code", {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return "Attempt to access memory outside buffer bounds";
}, RangeError);
E("ERR_INVALID_ARG_TYPE", function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E("ERR_OUT_OF_RANGE", function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += "n";
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = "";
    let i = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength) {
    validateNumber(offset, "offset");
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) boundsError(offset, buf.length - (byteLength + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset, byteLength);
}
function validateNumber(value, name) {
    if (typeof value !== "number") throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split("=")[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, "");
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return "";
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + "=";
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error("Invalid code point");
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
}

},{"9c62938f1dccc73c":"eIiSV","aceacb6a4531a9d2":"cO95r"}],"eIiSV":[function(require,module,exports) {
"use strict";
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join("");
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + "==");
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + "=");
    }
    return parts.join("");
}

},{}],"cO95r":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"aODlA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    strings: {
        generatingThumbnails: "Generating thumbnails..."
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"hWi7F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>findAllDOMElements);
var _isDOMElementJs = require("./isDOMElement.js");
var _isDOMElementJsDefault = parcelHelpers.interopDefault(_isDOMElementJs);
function findAllDOMElements(element) {
    if (typeof element === "string") {
        const elements = document.querySelectorAll(element);
        return elements.length === 0 ? null : Array.from(elements);
    }
    if (typeof element === "object" && (0, _isDOMElementJsDefault.default)(element)) return [
        element
    ];
    return null;
}

},{"./isDOMElement.js":"5rjpH","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"dNhb7":[function(require,module,exports) {
/**
 * Converts list into array
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = Array.from;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"60s19":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getDroppedFiles);
var _indexJs = require("./utils/webkitGetAsEntryApi/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _fallbackApiJs = require("./utils/fallbackApi.js");
var _fallbackApiJsDefault = parcelHelpers.interopDefault(_fallbackApiJs);
async function getDroppedFiles(dataTransfer, _temp) {
    let { logDropError = ()=>{} } = _temp === void 0 ? {} : _temp;
    // Get all files from all subdirs. Works (at least) in Chrome, Mozilla, and Safari
    try {
        const accumulator = [];
        for await (const file of (0, _indexJsDefault.default)(dataTransfer, logDropError))accumulator.push(file);
        return accumulator;
    // Otherwise just return all first-order files
    } catch  {
        return (0, _fallbackApiJsDefault.default)(dataTransfer);
    }
}

},{"./utils/webkitGetAsEntryApi/index.js":"gp8hG","./utils/fallbackApi.js":"fASKj","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"gp8hG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getFilesFromDataTransfer);
var _getFilesAndDirectoriesFromDirectoryJs = require("./getFilesAndDirectoriesFromDirectory.js");
var _getFilesAndDirectoriesFromDirectoryJsDefault = parcelHelpers.interopDefault(_getFilesAndDirectoriesFromDirectoryJs);
/**
 * Polyfill for the new (experimental) getAsFileSystemHandle API (using the popular webkitGetAsEntry behind the scenes)
 * so that we can switch to the getAsFileSystemHandle API once it (hopefully) becomes standard
 */ function getAsFileSystemHandleFromEntry(entry, logDropError) {
    if (entry == null) return entry;
    return {
        // eslint-disable-next-line no-nested-ternary
        kind: entry.isFile ? "file" : entry.isDirectory ? "directory" : undefined,
        name: entry.name,
        getFile () {
            return new Promise((resolve, reject)=>entry.file(resolve, reject));
        },
        async *values () {
            // If the file is a directory.
            const directoryReader = entry.createReader();
            const entries = await new Promise((resolve)=>{
                (0, _getFilesAndDirectoriesFromDirectoryJsDefault.default)(directoryReader, [], logDropError, {
                    onSuccess: (dirEntries)=>resolve(dirEntries.map((file)=>getAsFileSystemHandleFromEntry(file, logDropError)))
                });
            });
            yield* entries;
        }
    };
}
function createPromiseToAddFileOrParseDirectory(entry, relativePath, lastResortFile) {
    try {
        if (lastResortFile === void 0) lastResortFile = undefined;
        return async function*() {
            const getNextRelativePath = ()=>`${relativePath}/${entry.name}`;
            // For each dropped item, - make sure it's a file/directory, and start deepening in!
            if (entry.kind === "file") {
                const file = await entry.getFile();
                if (file != null) {
                    file.relativePath = relativePath ? getNextRelativePath() : null;
                    yield file;
                } else if (lastResortFile != null) yield lastResortFile;
            } else if (entry.kind === "directory") for await (const handle of entry.values())// Recurse on the directory, appending the dir name to the relative path
            yield* createPromiseToAddFileOrParseDirectory(handle, relativePath ? getNextRelativePath() : entry.name);
            else if (lastResortFile != null) yield lastResortFile;
        }();
    } catch (e) {
        return Promise.reject(e);
    }
}
async function* getFilesFromDataTransfer(dataTransfer, logDropError) {
    // Retrieving the dropped items must happen synchronously
    // otherwise only the first item gets treated and the other ones are garbage collected.
    // https://github.com/transloadit/uppy/pull/3998
    const fileSystemHandles = await Promise.all(Array.from(dataTransfer.items, async (item)=>{
        var _fileSystemHandle;
        let fileSystemHandle;
        // TODO enable getAsFileSystemHandle API once we can get it working with subdirectories
        // IMPORTANT: Need to check isSecureContext *before* calling getAsFileSystemHandle
        // or else Chrome will crash when running in HTTP: https://github.com/transloadit/uppy/issues/4133
        // if (window.isSecureContext && item.getAsFileSystemHandle != null) entry = await item.getAsFileSystemHandle()
        // `webkitGetAsEntry` exists in all popular browsers (including non-WebKit browsers),
        // however it may be renamed to getAsEntry() in the future, so you should code defensively, looking for both.
        // from https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/webkitGetAsEntry
        const getAsEntry = ()=>typeof item.getAsEntry === "function" ? item.getAsEntry() : item.webkitGetAsEntry();
        // eslint-disable-next-line prefer-const
        (_fileSystemHandle = fileSystemHandle) != null ? _fileSystemHandle : fileSystemHandle = getAsFileSystemHandleFromEntry(getAsEntry(), logDropError);
        return {
            fileSystemHandle,
            lastResortFile: item.getAsFile() // can be used as a fallback in case other methods fail
        };
    }));
    for (const { lastResortFile, fileSystemHandle } of fileSystemHandles){
        // fileSystemHandle and lastResortFile can be null when we drop an url.
        if (fileSystemHandle != null) try {
            yield* createPromiseToAddFileOrParseDirectory(fileSystemHandle, "", lastResortFile);
        } catch (err) {
            // Example: If dropping a symbolic link, Chromium will throw:
            // "DOMException: A requested file or directory could not be found at the time an operation was processed.",
            // So we will use lastResortFile instead. See https://github.com/transloadit/uppy/issues/3505.
            if (lastResortFile != null) yield lastResortFile;
            else logDropError(err);
        }
        else if (lastResortFile != null) yield lastResortFile;
    }
}

},{"./getFilesAndDirectoriesFromDirectory.js":"67RAR","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"67RAR":[function(require,module,exports) {
/**
 * Recursive function, calls the original callback() when the directory is entirely parsed.
 *
 * @param {FileSystemDirectoryReader} directoryReader
 * @param {Array} oldEntries
 * @param {Function} logDropError
 * @param {Function} callback - called with ([ all files and directories in that directoryReader ])
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getFilesAndDirectoriesFromDirectory);
function getFilesAndDirectoriesFromDirectory(directoryReader, oldEntries, logDropError, _ref) {
    let { onSuccess } = _ref;
    directoryReader.readEntries((entries)=>{
        const newEntries = [
            ...oldEntries,
            ...entries
        ];
        // According to the FileSystem API spec, getFilesAndDirectoriesFromDirectory()
        // must be called until it calls the onSuccess with an empty array.
        if (entries.length) queueMicrotask(()=>{
            getFilesAndDirectoriesFromDirectory(directoryReader, newEntries, logDropError, {
                onSuccess
            });
        });
        else onSuccess(newEntries);
    }, // Make sure we resolve on error anyway, it's fine if only one directory couldn't be parsed!
    (error)=>{
        logDropError(error);
        onSuccess(oldEntries);
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"fASKj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>fallbackApi);
var _toArrayJs = require("../../toArray.js");
var _toArrayJsDefault = parcelHelpers.interopDefault(_toArrayJs);
function fallbackApi(dataTransfer) {
    const files = (0, _toArrayJsDefault.default)(dataTransfer.files);
    return Promise.resolve(files);
}

},{"../../toArray.js":"dNhb7","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"iH2s1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProviderViews", ()=>(0, _indexJsDefault.default));
parcelHelpers.export(exports, "defaultPickerIcon", ()=>(0, _indexJs.defaultPickerIcon));
parcelHelpers.export(exports, "SearchProviderViews", ()=>(0, _indexJsDefault1.default));
var _indexJs = require("./ProviderView/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("./SearchProviderView/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);

},{"./ProviderView/index.js":"fZVuT","./SearchProviderView/index.js":"8O8l1","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"fZVuT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _providerViewJsDefault.default));
parcelHelpers.export(exports, "defaultPickerIcon", ()=>(0, _providerViewJs.defaultPickerIcon));
var _providerViewJs = require("./ProviderView.js");
var _providerViewJsDefault = parcelHelpers.interopDefault(_providerViewJs);

},{"./ProviderView.js":"7hzbx","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"7hzbx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultPickerIcon", ()=>defaultPickerIcon);
var _preact = require("preact");
// eslint-disable-next-line import/no-unresolved
var _dist = require("p-queue/dist");
var _distDefault = parcelHelpers.interopDefault(_dist);
var _generateFileID = require("@uppy/utils/lib/generateFileID");
var _authViewJs = require("./AuthView.js");
var _authViewJsDefault = parcelHelpers.interopDefault(_authViewJs);
var _headerJs = require("./Header.js");
var _headerJsDefault = parcelHelpers.interopDefault(_headerJs);
var _browserJs = require("../Browser.js");
var _browserJsDefault = parcelHelpers.interopDefault(_browserJs);
var _loaderJs = require("../Loader.js");
var _loaderJsDefault = parcelHelpers.interopDefault(_loaderJs);
var _closeWrapperJs = require("../CloseWrapper.js");
var _closeWrapperJsDefault = parcelHelpers.interopDefault(_closeWrapperJs);
var _viewJs = require("../View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
function _classPrivateFieldLooseBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) throw new TypeError("attempted to use private field on non-instance");
    return receiver;
}
var id = 0;
function _classPrivateFieldLooseKey(name) {
    return "__private_" + id++ + "_" + name;
}
const packageJson = {
    "version": "3.5.0"
};
function formatBreadcrumbs(breadcrumbs) {
    return breadcrumbs.slice(1).map((directory)=>directory.name).join("/");
}
function prependPath(path, component) {
    if (!path) return component;
    return `${path}/${component}`;
}
function defaultPickerIcon() {
    return (0, _preact.h)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        width: "30",
        height: "30",
        viewBox: "0 0 30 30"
    }, (0, _preact.h)("path", {
        d: "M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15zm4.258-12.676v6.846h-8.426v-6.846H5.204l9.82-12.364 9.82 12.364H19.26z"
    }));
}
/**
 * Class to easily generate generic views for Provider plugins
 */ var _abortController = /*#__PURE__*/ _classPrivateFieldLooseKey("abortController");
var _withAbort = /*#__PURE__*/ _classPrivateFieldLooseKey("withAbort");
var _list = /*#__PURE__*/ _classPrivateFieldLooseKey("list");
var _listFilesAndFolders = /*#__PURE__*/ _classPrivateFieldLooseKey("listFilesAndFolders");
var _recursivelyListAllFiles = /*#__PURE__*/ _classPrivateFieldLooseKey("recursivelyListAllFiles");
class ProviderView extends (0, _viewJsDefault.default) {
    /**
   * @param {object} plugin instance of the plugin
   * @param {object} opts
   */ constructor(plugin, opts){
        super(plugin, opts);
        // set default options
        Object.defineProperty(this, _recursivelyListAllFiles, {
            value: _recursivelyListAllFiles2
        });
        Object.defineProperty(this, _listFilesAndFolders, {
            value: _listFilesAndFolders2
        });
        Object.defineProperty(this, _list, {
            value: _list2
        });
        Object.defineProperty(this, _withAbort, {
            value: _withAbort2
        });
        Object.defineProperty(this, _abortController, {
            writable: true,
            value: void 0
        });
        const defaultOptions = {
            viewType: "list",
            showTitles: true,
            showFilter: true,
            showBreadcrumbs: true,
            loadAllFiles: false
        };
        // merge default options with the ones set by user
        this.opts = {
            ...defaultOptions,
            ...opts
        };
        // Logic
        this.filterQuery = this.filterQuery.bind(this);
        this.clearFilter = this.clearFilter.bind(this);
        this.getFolder = this.getFolder.bind(this);
        this.getNextFolder = this.getNextFolder.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuth = this.handleAuth.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.donePicking = this.donePicking.bind(this);
        // Visual
        this.render = this.render.bind(this);
        // Set default state for the plugin
        this.plugin.setPluginState({
            authenticated: false,
            files: [],
            folders: [],
            breadcrumbs: [],
            filterInput: "",
            isSearchVisible: false,
            currentSelection: []
        });
    }
    // eslint-disable-next-line class-methods-use-this
    tearDown() {
    // Nothing.
    }
    /**
   * Select a folder based on its id: fetches the folder and then updates state with its contents
   * TODO rename to something better like selectFolder or navigateToFolder (breaking change?)
   *
   * @param  {string} requestPath
   * the path we need to use when sending list request to companion (for some providers it's different from ID)
   * @param  {string} name used in the UI and to build the absDirPath
   * @returns {Promise}   Folders/files in folder
   */ async getFolder(requestPath, name) {
        this.setLoading(true);
        try {
            await _classPrivateFieldLooseBase(this, _withAbort)[_withAbort](async (signal)=>{
                this.lastCheckbox = undefined;
                let { breadcrumbs } = this.plugin.getPluginState();
                const index = breadcrumbs.findIndex((dir)=>requestPath === dir.requestPath);
                if (index !== -1) // means we navigated back to a known directory (already in the stack), so cut the stack off there
                breadcrumbs = breadcrumbs.slice(0, index + 1);
                else // we have navigated into a new (unknown) folder, add it to the stack
                breadcrumbs = [
                    ...breadcrumbs,
                    {
                        requestPath,
                        name
                    }
                ];
                this.nextPagePath = requestPath;
                let files = [];
                let folders = [];
                do {
                    const { files: newFiles, folders: newFolders } = await _classPrivateFieldLooseBase(this, _listFilesAndFolders)[_listFilesAndFolders]({
                        breadcrumbs,
                        signal
                    });
                    files = files.concat(newFiles);
                    folders = folders.concat(newFolders);
                    this.setLoading(this.plugin.uppy.i18n("loadedXFiles", {
                        numFiles: files.length + folders.length
                    }));
                }while (this.opts.loadAllFiles && this.nextPagePath);
                this.plugin.setPluginState({
                    folders,
                    files,
                    breadcrumbs,
                    filterInput: ""
                });
            });
        } catch (err) {
            this.handleError(err);
        } finally{
            this.setLoading(false);
        }
    }
    /**
   * Fetches new folder
   *
   * @param  {object} folder
   */ getNextFolder(folder) {
        this.getFolder(folder.requestPath, folder.name);
        this.lastCheckbox = undefined;
    }
    /**
   * Removes session token on client side.
   */ async logout() {
        try {
            await _classPrivateFieldLooseBase(this, _withAbort)[_withAbort](async (signal)=>{
                const res = await this.provider.logout({
                    signal
                });
                if (res.ok) {
                    if (!res.revoked) {
                        const message = this.plugin.uppy.i18n("companionUnauthorizeHint", {
                            provider: this.plugin.title,
                            url: res.manual_revoke_url
                        });
                        this.plugin.uppy.info(message, "info", 7000);
                    }
                    const newState = {
                        authenticated: false,
                        files: [],
                        folders: [],
                        breadcrumbs: [],
                        filterInput: ""
                    };
                    this.plugin.setPluginState(newState);
                }
            });
        } catch (err) {
            this.handleError(err);
        }
    }
    filterQuery(input) {
        this.plugin.setPluginState({
            filterInput: input
        });
    }
    clearFilter() {
        this.plugin.setPluginState({
            filterInput: ""
        });
    }
    async handleAuth() {
        const clientVersion = `@uppy/provider-views=${ProviderView.VERSION}`;
        try {
            await this.provider.login({
                uppyVersions: clientVersion
            });
            this.plugin.setPluginState({
                authenticated: true
            });
            this.preFirstRender();
        } catch (e) {
            this.plugin.uppy.log(`login failed: ${e.message}`);
        }
    }
    async handleScroll(event) {
        if (this.shouldHandleScroll(event) && this.nextPagePath) {
            this.isHandlingScroll = true;
            try {
                await _classPrivateFieldLooseBase(this, _withAbort)[_withAbort](async (signal)=>{
                    const { files, folders, breadcrumbs } = this.plugin.getPluginState();
                    const { files: newFiles, folders: newFolders } = await _classPrivateFieldLooseBase(this, _listFilesAndFolders)[_listFilesAndFolders]({
                        breadcrumbs,
                        signal
                    });
                    const combinedFiles = files.concat(newFiles);
                    const combinedFolders = folders.concat(newFolders);
                    this.plugin.setPluginState({
                        folders: combinedFolders,
                        files: combinedFiles
                    });
                });
            } catch (error) {
                this.handleError(error);
            } finally{
                this.isHandlingScroll = false;
            }
        }
    }
    async donePicking() {
        this.setLoading(true);
        try {
            await _classPrivateFieldLooseBase(this, _withAbort)[_withAbort](async (signal)=>{
                const { currentSelection } = this.plugin.getPluginState();
                const messages = [];
                const newFiles = [];
                for (const selectedItem of currentSelection){
                    const { requestPath } = selectedItem;
                    const withRelDirPath = (newItem)=>({
                            ...newItem,
                            // calculate the file's path relative to the user's selected item's path
                            // see https://github.com/transloadit/uppy/pull/4537#issuecomment-1614236655
                            relDirPath: newItem.absDirPath.replace(selectedItem.absDirPath, "").replace(/^\//, "")
                        });
                    if (selectedItem.isFolder) {
                        let isEmpty = true;
                        let numNewFiles = 0;
                        const queue = new (0, _distDefault.default)({
                            concurrency: 6
                        });
                        const onFiles = (files)=>{
                            for (const newFile of files){
                                const tagFile = this.getTagFile(newFile);
                                const id = (0, _generateFileID.getSafeFileId)(tagFile);
                                // If the same folder is added again, we don't want to send
                                // X amount of duplicate file notifications, we want to say
                                // the folder was already added. This checks if all files are duplicate,
                                // if that's the case, we don't add the files.
                                if (!this.plugin.uppy.checkIfFileAlreadyExists(id)) {
                                    newFiles.push(withRelDirPath(newFile));
                                    numNewFiles++;
                                    this.setLoading(this.plugin.uppy.i18n("addedNumFiles", {
                                        numFiles: numNewFiles
                                    }));
                                }
                                isEmpty = false;
                            }
                        };
                        await _classPrivateFieldLooseBase(this, _recursivelyListAllFiles)[_recursivelyListAllFiles]({
                            requestPath,
                            absDirPath: prependPath(selectedItem.absDirPath, selectedItem.name),
                            relDirPath: selectedItem.name,
                            queue,
                            onFiles,
                            signal
                        });
                        await queue.onIdle();
                        let message;
                        if (isEmpty) message = this.plugin.uppy.i18n("emptyFolderAdded");
                        else if (numNewFiles === 0) message = this.plugin.uppy.i18n("folderAlreadyAdded", {
                            folder: selectedItem.name
                        });
                        else // TODO we don't really know at this point whether any files were actually added
                        // (only later after addFiles has been called) so we should probably rewrite this.
                        // Example: If all files fail to add due to restriction error, it will still say "Added 100 files from folder"
                        message = this.plugin.uppy.i18n("folderAdded", {
                            smart_count: numNewFiles,
                            folder: selectedItem.name
                        });
                        messages.push(message);
                    } else newFiles.push(withRelDirPath(selectedItem));
                }
                // Note: this.plugin.uppy.addFiles must be only run once we are done fetching all files,
                // because it will cause the loading screen to disappear,
                // and that will allow the user to start the upload, so we need to make sure we have
                // finished all async operations before we add any file
                // see https://github.com/transloadit/uppy/pull/4384
                this.plugin.uppy.log("Adding remote provider files");
                this.plugin.uppy.addFiles(newFiles.map((file)=>this.getTagFile(file)));
                this.plugin.setPluginState({
                    filterInput: ""
                });
                messages.forEach((message)=>this.plugin.uppy.info(message));
                this.clearSelection();
            });
        } catch (err) {
            this.handleError(err);
        } finally{
            this.setLoading(false);
        }
    }
    render(state, viewOptions) {
        var _this = this;
        if (viewOptions === void 0) viewOptions = {};
        const { authenticated, didFirstRender } = this.plugin.getPluginState();
        const { i18n } = this.plugin.uppy;
        if (!didFirstRender) this.preFirstRender();
        const targetViewOptions = {
            ...this.opts,
            ...viewOptions
        };
        const { files, folders, filterInput, loading, currentSelection } = this.plugin.getPluginState();
        const { isChecked, toggleCheckbox, recordShiftKeyPress, filterItems } = this;
        const hasInput = filterInput !== "";
        const pluginIcon = this.plugin.icon || defaultPickerIcon;
        const headerProps = {
            showBreadcrumbs: targetViewOptions.showBreadcrumbs,
            getFolder: this.getFolder,
            breadcrumbs: this.plugin.getPluginState().breadcrumbs,
            pluginIcon,
            title: this.plugin.title,
            logout: this.logout,
            username: this.username,
            i18n
        };
        const browserProps = {
            isChecked,
            toggleCheckbox,
            recordShiftKeyPress,
            currentSelection,
            files: hasInput ? filterItems(files) : files,
            folders: hasInput ? filterItems(folders) : folders,
            username: this.username,
            getNextFolder: this.getNextFolder,
            getFolder: this.getFolder,
            loadAllFiles: this.opts.loadAllFiles,
            // For SearchFilterInput component
            showSearchFilter: targetViewOptions.showFilter,
            search: this.filterQuery,
            clearSearch: this.clearFilter,
            searchTerm: filterInput,
            searchOnInput: true,
            searchInputLabel: i18n("filter"),
            clearSearchLabel: i18n("resetFilter"),
            noResultsLabel: i18n("noFilesFound"),
            logout: this.logout,
            handleScroll: this.handleScroll,
            done: this.donePicking,
            cancel: this.cancelPicking,
            headerComponent: (0, _headerJsDefault.default)(headerProps),
            title: this.plugin.title,
            viewType: targetViewOptions.viewType,
            showTitles: targetViewOptions.showTitles,
            showBreadcrumbs: targetViewOptions.showBreadcrumbs,
            pluginIcon,
            i18n: this.plugin.uppy.i18n,
            uppyFiles: this.plugin.uppy.getFiles(),
            validateRestrictions: function() {
                return _this.plugin.uppy.validateRestrictions(...arguments);
            }
        };
        if (loading) return (0, _preact.h)((0, _closeWrapperJsDefault.default), {
            onUnmount: this.clearSelection
        }, (0, _preact.h)((0, _loaderJsDefault.default), {
            i18n: this.plugin.uppy.i18n,
            loading: loading
        }));
        if (!authenticated) return (0, _preact.h)((0, _closeWrapperJsDefault.default), {
            onUnmount: this.clearSelection
        }, (0, _preact.h)((0, _authViewJsDefault.default), {
            pluginName: this.plugin.title,
            pluginIcon: pluginIcon,
            handleAuth: this.handleAuth,
            i18n: this.plugin.uppy.i18n,
            i18nArray: this.plugin.uppy.i18nArray
        }));
        return (0, _preact.h)((0, _closeWrapperJsDefault.default), {
            onUnmount: this.clearSelection
        }, (0, _preact.h)((0, _browserJsDefault.default), browserProps));
    }
}
exports.default = ProviderView;
async function _withAbort2(op) {
    var _classPrivateFieldLoo;
    // prevent multiple requests in parallel from causing race conditions
    (_classPrivateFieldLoo = _classPrivateFieldLooseBase(this, _abortController)[_abortController]) == null || _classPrivateFieldLoo.abort();
    const abortController = new AbortController();
    _classPrivateFieldLooseBase(this, _abortController)[_abortController] = abortController;
    const cancelRequest = ()=>{
        abortController.abort();
        this.clearSelection();
    };
    try {
        this.plugin.uppy.on("dashboard:close-panel", cancelRequest);
        this.plugin.uppy.on("cancel-all", cancelRequest);
        await op(abortController.signal);
    } finally{
        this.plugin.uppy.off("dashboard:close-panel", cancelRequest);
        this.plugin.uppy.off("cancel-all", cancelRequest);
        _classPrivateFieldLooseBase(this, _abortController)[_abortController] = undefined;
    }
}
async function _list2(_ref) {
    let { requestPath, absDirPath, signal } = _ref;
    const { username, nextPagePath, items } = await this.provider.list(requestPath, {
        signal
    });
    this.username = username || this.username;
    return {
        items: items.map((item)=>({
                ...item,
                absDirPath
            })),
        nextPagePath
    };
}
async function _listFilesAndFolders2(_ref2) {
    let { breadcrumbs, signal } = _ref2;
    const absDirPath = formatBreadcrumbs(breadcrumbs);
    const { items, nextPagePath } = await _classPrivateFieldLooseBase(this, _list)[_list]({
        requestPath: this.nextPagePath,
        absDirPath,
        signal
    });
    this.nextPagePath = nextPagePath;
    const files = [];
    const folders = [];
    items.forEach((item)=>{
        if (item.isFolder) folders.push(item);
        else files.push(item);
    });
    return {
        files,
        folders
    };
}
async function _recursivelyListAllFiles2(_ref3) {
    let { requestPath, absDirPath, relDirPath, queue, onFiles, signal } = _ref3;
    let curPath = requestPath;
    while(curPath){
        const res = await _classPrivateFieldLooseBase(this, _list)[_list]({
            requestPath: curPath,
            absDirPath,
            signal
        });
        curPath = res.nextPagePath;
        const files = res.items.filter((item)=>!item.isFolder);
        const folders = res.items.filter((item)=>item.isFolder);
        onFiles(files);
        // recursively queue call to self for each folder
        const promises = folders.map(async (folder)=>queue.add(async ()=>_classPrivateFieldLooseBase(this, _recursivelyListAllFiles)[_recursivelyListAllFiles]({
                    requestPath: folder.requestPath,
                    absDirPath: prependPath(absDirPath, folder.name),
                    relDirPath: prependPath(relDirPath, folder.name),
                    queue,
                    onFiles,
                    signal
                })));
        await Promise.all(promises); // in case we get an error
    }
}
ProviderView.VERSION = packageJson.version;

},{"preact":"26zcy","@uppy/utils/lib/generateFileID":"j5zUd","./AuthView.js":"3jNx2","./Header.js":"ivCZy","../Browser.js":"gv99t","../Loader.js":"1rn3q","../CloseWrapper.js":"hWaNK","../View.js":"97Pp8","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m","p-queue/dist":"3KoWO"}],"3jNx2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
function GoogleIcon() {
    return (0, _preact.h)("svg", {
        width: "26",
        height: "26",
        viewBox: "0 0 26 26",
        xmlns: "http://www.w3.org/2000/svg"
    }, (0, _preact.h)("g", {
        fill: "none",
        "fill-rule": "evenodd"
    }, (0, _preact.h)("circle", {
        fill: "#FFF",
        cx: "13",
        cy: "13",
        r: "13"
    }), (0, _preact.h)("path", {
        d: "M21.64 13.205c0-.639-.057-1.252-.164-1.841H13v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z",
        fill: "#4285F4",
        "fill-rule": "nonzero"
    }), (0, _preact.h)("path", {
        d: "M13 22c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H4.957v2.332A8.997 8.997 0 0013 22z",
        fill: "#34A853",
        "fill-rule": "nonzero"
    }), (0, _preact.h)("path", {
        d: "M7.964 14.71A5.41 5.41 0 017.682 13c0-.593.102-1.17.282-1.71V8.958H4.957A8.996 8.996 0 004 13c0 1.452.348 2.827.957 4.042l3.007-2.332z",
        fill: "#FBBC05",
        "fill-rule": "nonzero"
    }), (0, _preact.h)("path", {
        d: "M13 7.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C17.463 4.891 15.426 4 13 4a8.997 8.997 0 00-8.043 4.958l3.007 2.332C8.672 9.163 10.656 7.58 13 7.58z",
        fill: "#EA4335",
        "fill-rule": "nonzero"
    }), (0, _preact.h)("path", {
        d: "M4 4h18v18H4z"
    })));
}
function AuthView(props) {
    const { pluginName, pluginIcon, i18nArray, handleAuth } = props;
    // In order to comply with Google's brand we need to create a different button
    // for the Google Drive plugin
    const isGoogleDrive = pluginName === "Google Drive";
    const pluginNameComponent = (0, _preact.h)("span", {
        className: "uppy-Provider-authTitleName"
    }, pluginName, (0, _preact.h)("br", null));
    return (0, _preact.h)("div", {
        className: "uppy-Provider-auth"
    }, (0, _preact.h)("div", {
        className: "uppy-Provider-authIcon"
    }, pluginIcon()), (0, _preact.h)("div", {
        className: "uppy-Provider-authTitle"
    }, i18nArray("authenticateWithTitle", {
        pluginName: pluginNameComponent
    })), isGoogleDrive ? (0, _preact.h)("button", {
        type: "button",
        className: "uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Provider-authBtn uppy-Provider-btn-google",
        onClick: handleAuth,
        "data-uppy-super-focusable": true
    }, (0, _preact.h)(GoogleIcon, null), i18nArray("signInWithGoogle")) : (0, _preact.h)("button", {
        type: "button",
        className: "uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Provider-authBtn",
        onClick: handleAuth,
        "data-uppy-super-focusable": true
    }, i18nArray("authenticateWith", {
        pluginName
    })));
}
exports.default = AuthView;

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"ivCZy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _userJs = require("./User.js");
var _userJsDefault = parcelHelpers.interopDefault(_userJs);
var _breadcrumbsJs = require("../Breadcrumbs.js");
var _breadcrumbsJsDefault = parcelHelpers.interopDefault(_breadcrumbsJs);
exports.default = (props)=>{
    const components = [];
    if (props.showBreadcrumbs) components.push((0, _breadcrumbsJsDefault.default)({
        getFolder: props.getFolder,
        breadcrumbs: props.breadcrumbs,
        breadcrumbsIcon: props.pluginIcon && props.pluginIcon(),
        title: props.title
    }));
    components.push((0, _userJsDefault.default)({
        logout: props.logout,
        username: props.username,
        i18n: props.i18n
    }));
    return components;
};

},{"./User.js":"lAFhh","../Breadcrumbs.js":"8u3En","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"lAFhh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
exports.default = (_ref)=>{
    let { i18n, logout, username } = _ref;
    return [
        (0, _preact.h)("span", {
            className: "uppy-ProviderBrowser-user",
            key: "username"
        }, username),
        (0, _preact.h)("button", {
            type: "button",
            onClick: logout,
            className: "uppy-u-reset uppy-c-btn uppy-ProviderBrowser-userLogout",
            key: "logout"
        }, i18n("logOut"))
    ];
};

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"8u3En":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
const Breadcrumb = (props)=>{
    const { getFolder, title, isLast } = props;
    return (0, _preact.h)((0, _preact.Fragment), null, (0, _preact.h)("button", {
        type: "button",
        className: "uppy-u-reset uppy-c-btn",
        onClick: getFolder
    }, title), !isLast ? " / " : "");
};
exports.default = (props)=>{
    const { getFolder, title, breadcrumbsIcon, breadcrumbs } = props;
    return (0, _preact.h)("div", {
        className: "uppy-Provider-breadcrumbs"
    }, (0, _preact.h)("div", {
        className: "uppy-Provider-breadcrumbsIcon"
    }, breadcrumbsIcon), breadcrumbs.map((directory, i)=>(0, _preact.h)(Breadcrumb, {
            key: directory.id,
            getFolder: ()=>getFolder(directory.requestPath),
            title: i === 0 ? title : directory.name,
            isLast: i + 1 === breadcrumbs.length
        })));
};

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"gv99t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _remoteFileObjToLocal = require("@uppy/utils/lib/remoteFileObjToLocal");
var _remoteFileObjToLocalDefault = parcelHelpers.interopDefault(_remoteFileObjToLocal);
var _hooks = require("preact/hooks");
var _virtualList = require("@uppy/utils/lib/VirtualList");
var _virtualListDefault = parcelHelpers.interopDefault(_virtualList);
var _searchFilterInputJs = require("./SearchFilterInput.js");
var _searchFilterInputJsDefault = parcelHelpers.interopDefault(_searchFilterInputJs);
var _footerActionsJs = require("./FooterActions.js");
var _footerActionsJsDefault = parcelHelpers.interopDefault(_footerActionsJs);
var _indexJs = require("./Item/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
const VIRTUAL_SHARED_DIR = "shared-with-me";
function ListItem(props) {
    const { currentSelection, uppyFiles, viewType, isChecked, toggleCheckbox, recordShiftKeyPress, showTitles, i18n, validateRestrictions, getNextFolder, columns, f } = props;
    if (f.isFolder) {
        var _isChecked;
        return (0, _indexJsDefault.default)({
            columns,
            showTitles,
            viewType,
            i18n,
            id: f.id,
            title: f.name,
            getItemIcon: ()=>f.icon,
            isChecked: isChecked(f),
            toggleCheckbox: (event)=>toggleCheckbox(event, f),
            recordShiftKeyPress,
            type: "folder",
            isDisabled: (_isChecked = isChecked(f)) == null ? void 0 : _isChecked.loading,
            isCheckboxDisabled: f.id === VIRTUAL_SHARED_DIR,
            handleFolderClick: ()=>getNextFolder(f)
        });
    }
    const restrictionError = validateRestrictions((0, _remoteFileObjToLocalDefault.default)(f), [
        ...uppyFiles,
        ...currentSelection
    ]);
    return (0, _indexJsDefault.default)({
        id: f.id,
        title: f.name,
        author: f.author,
        getItemIcon: ()=>f.icon,
        isChecked: isChecked(f),
        toggleCheckbox: (event)=>toggleCheckbox(event, f),
        recordShiftKeyPress,
        columns,
        showTitles,
        viewType,
        i18n,
        type: "file",
        isDisabled: restrictionError && !isChecked(f),
        restrictionError
    });
}
function Browser(props) {
    const { currentSelection, folders, files, uppyFiles, viewType, headerComponent, showBreadcrumbs, isChecked, toggleCheckbox, recordShiftKeyPress, handleScroll, showTitles, i18n, validateRestrictions, isLoading, showSearchFilter, search, searchTerm, clearSearch, searchOnInput, searchInputLabel, clearSearchLabel, getNextFolder, cancel, done, columns, noResultsLabel, loadAllFiles } = props;
    const selected = currentSelection.length;
    const rows = (0, _hooks.useMemo)(()=>[
            ...folders,
            ...files
        ], [
        folders,
        files
    ]);
    return (0, _preact.h)("div", {
        className: (0, _classnamesDefault.default)("uppy-ProviderBrowser", `uppy-ProviderBrowser-viewType--${viewType}`)
    }, headerComponent && (0, _preact.h)("div", {
        className: "uppy-ProviderBrowser-header"
    }, (0, _preact.h)("div", {
        className: (0, _classnamesDefault.default)("uppy-ProviderBrowser-headerBar", !showBreadcrumbs && "uppy-ProviderBrowser-headerBar--simple")
    }, headerComponent)), showSearchFilter && (0, _preact.h)("div", {
        class: "uppy-ProviderBrowser-searchFilter"
    }, (0, _preact.h)((0, _searchFilterInputJsDefault.default), {
        search: search,
        searchTerm: searchTerm,
        clearSearch: clearSearch,
        inputLabel: searchInputLabel,
        clearSearchLabel: clearSearchLabel,
        inputClassName: "uppy-ProviderBrowser-searchFilterInput",
        searchOnInput: searchOnInput
    })), (()=>{
        if (isLoading) return (0, _preact.h)("div", {
            className: "uppy-Provider-loading"
        }, (0, _preact.h)("span", null, i18n("loading")));
        if (!folders.length && !files.length) return (0, _preact.h)("div", {
            className: "uppy-Provider-empty"
        }, noResultsLabel);
        if (loadAllFiles) return (0, _preact.h)("div", {
            className: "uppy-ProviderBrowser-body"
        }, (0, _preact.h)("ul", {
            className: "uppy-ProviderBrowser-list"
        }, (0, _preact.h)((0, _virtualListDefault.default), {
            data: rows,
            renderRow: (f)=>(0, _preact.h)(ListItem, {
                    currentSelection: currentSelection,
                    uppyFiles: uppyFiles,
                    viewType: viewType,
                    isChecked: isChecked,
                    toggleCheckbox: toggleCheckbox,
                    recordShiftKeyPress: recordShiftKeyPress,
                    showTitles: showTitles,
                    i18n: i18n,
                    validateRestrictions: validateRestrictions,
                    getNextFolder: getNextFolder,
                    columns: columns,
                    f: f
                }),
            rowHeight: 31
        })));
        return (0, _preact.h)("div", {
            className: "uppy-ProviderBrowser-body"
        }, (0, _preact.h)("ul", {
            className: "uppy-ProviderBrowser-list",
            onScroll: handleScroll,
            role: "listbox",
            tabIndex: "-1"
        }, rows.map((f)=>(0, _preact.h)(ListItem, {
                currentSelection: currentSelection,
                uppyFiles: uppyFiles,
                viewType: viewType,
                isChecked: isChecked,
                toggleCheckbox: toggleCheckbox,
                recordShiftKeyPress: recordShiftKeyPress,
                showTitles: showTitles,
                i18n: i18n,
                validateRestrictions: validateRestrictions,
                getNextFolder: getNextFolder,
                columns: columns,
                f: f
            }))));
    })(), selected > 0 && (0, _preact.h)((0, _footerActionsJsDefault.default), {
        selected: selected,
        done: done,
        cancel: cancel,
        i18n: i18n
    }));
}
exports.default = Browser;

},{"preact":"26zcy","classnames":"jocGM","@uppy/utils/lib/remoteFileObjToLocal":"isB4H","preact/hooks":"eZN76","@uppy/utils/lib/VirtualList":"a0n20","./SearchFilterInput.js":"XI8jz","./FooterActions.js":"eeZZi","./Item/index.js":"cw9pn","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"isB4H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>remoteFileObjToLocal);
var _getFileNameAndExtensionJs = require("./getFileNameAndExtension.js");
var _getFileNameAndExtensionJsDefault = parcelHelpers.interopDefault(_getFileNameAndExtensionJs);
function remoteFileObjToLocal(file) {
    return {
        ...file,
        type: file.mimeType,
        extension: file.name ? (0, _getFileNameAndExtensionJsDefault.default)(file.name).extension : null
    };
}

},{"./getFileNameAndExtension.js":"5OTD9","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"eZN76":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useCallback", ()=>T);
parcelHelpers.export(exports, "useContext", ()=>q);
parcelHelpers.export(exports, "useDebugValue", ()=>x);
parcelHelpers.export(exports, "useEffect", ()=>p);
parcelHelpers.export(exports, "useErrorBoundary", ()=>P);
parcelHelpers.export(exports, "useId", ()=>V);
parcelHelpers.export(exports, "useImperativeHandle", ()=>A);
parcelHelpers.export(exports, "useLayoutEffect", ()=>y);
parcelHelpers.export(exports, "useMemo", ()=>F);
parcelHelpers.export(exports, "useReducer", ()=>s);
parcelHelpers.export(exports, "useRef", ()=>_);
parcelHelpers.export(exports, "useState", ()=>h);
var _preact = require("preact");
var t, r, u, i, o = 0, f = [], c = [], e = (0, _preact.options).__b, a = (0, _preact.options).__r, v = (0, _preact.options).diffed, l = (0, _preact.options).__c, m = (0, _preact.options).unmount;
function d(t, u) {
    (0, _preact.options).__h && (0, _preact.options).__h(r, t, o || u), o = 0;
    var i = r.__H || (r.__H = {
        __: [],
        __h: []
    });
    return t >= i.__.length && i.__.push({
        __V: c
    }), i.__[t];
}
function h(n) {
    return o = 1, s(B, n);
}
function s(n, u, i) {
    var o = d(t++, 2);
    if (o.t = n, !o.__c && (o.__ = [
        i ? i(u) : B(void 0, u),
        function(n) {
            var t = o.__N ? o.__N[0] : o.__[0], r = o.t(t, n);
            t !== r && (o.__N = [
                r,
                o.__[1]
            ], o.__c.setState({}));
        }
    ], o.__c = r, !r.u)) {
        var f = function(n, t, r) {
            if (!o.__c.__H) return !0;
            var u = o.__c.__H.__.filter(function(n) {
                return n.__c;
            });
            if (u.every(function(n) {
                return !n.__N;
            })) return !c || c.call(this, n, t, r);
            var i = !1;
            return u.forEach(function(n) {
                if (n.__N) {
                    var t = n.__[0];
                    n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
                }
            }), !(!i && o.__c.props === n) && (!c || c.call(this, n, t, r));
        };
        r.u = !0;
        var c = r.shouldComponentUpdate, e = r.componentWillUpdate;
        r.componentWillUpdate = function(n, t, r) {
            if (this.__e) {
                var u = c;
                c = void 0, f(n, t, r), c = u;
            }
            e && e.call(this, n, t, r);
        }, r.shouldComponentUpdate = f;
    }
    return o.__N || o.__;
}
function p(u, i) {
    var o = d(t++, 3);
    !(0, _preact.options).__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__H.__h.push(o));
}
function y(u, i) {
    var o = d(t++, 4);
    !(0, _preact.options).__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__h.push(o));
}
function _(n) {
    return o = 5, F(function() {
        return {
            current: n
        };
    }, []);
}
function A(n, t, r) {
    o = 6, y(function() {
        return "function" == typeof n ? (n(t()), function() {
            return n(null);
        }) : n ? (n.current = t(), function() {
            return n.current = null;
        }) : void 0;
    }, null == r ? r : r.concat(n));
}
function F(n, r) {
    var u = d(t++, 7);
    return z(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;
}
function T(n, t) {
    return o = 8, F(function() {
        return n;
    }, t);
}
function q(n) {
    var u = r.context[n.__c], i = d(t++, 9);
    return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r)), u.props.value) : n.__;
}
function x(t, r) {
    (0, _preact.options).useDebugValue && (0, _preact.options).useDebugValue(r ? r(t) : t);
}
function P(n) {
    var u = d(t++, 10), i = h();
    return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function(n, t) {
        u.__ && u.__(n, t), i[1](n);
    }), [
        i[0],
        function() {
            i[1](void 0);
        }
    ];
}
function V() {
    var n = d(t++, 11);
    if (!n.__) {
        for(var u = r.__v; null !== u && !u.__m && null !== u.__;)u = u.__;
        var i = u.__m || (u.__m = [
            0,
            0
        ]);
        n.__ = "P" + i[0] + "-" + i[1]++;
    }
    return n.__;
}
function b() {
    for(var t; t = f.shift();)if (t.__P && t.__H) try {
        t.__H.__h.forEach(k), t.__H.__h.forEach(w), t.__H.__h = [];
    } catch (r) {
        t.__H.__h = [], (0, _preact.options).__e(r, t.__v);
    }
}
(0, _preact.options).__b = function(n) {
    r = null, e && e(n);
}, (0, _preact.options).__r = function(n) {
    a && a(n), t = 0;
    var i = (r = n.__c).__H;
    i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function(n) {
        n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;
    })) : (i.__h.forEach(k), i.__h.forEach(w), i.__h = [], t = 0)), u = r;
}, (0, _preact.options).diffed = function(t) {
    v && v(t);
    var o = t.__c;
    o && o.__H && (o.__H.__h.length && (1 !== f.push(o) && i === (0, _preact.options).requestAnimationFrame || ((i = (0, _preact.options).requestAnimationFrame) || j)(b)), o.__H.__.forEach(function(n) {
        n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;
    })), u = r = null;
}, (0, _preact.options).__c = function(t, r) {
    r.some(function(t) {
        try {
            t.__h.forEach(k), t.__h = t.__h.filter(function(n) {
                return !n.__ || w(n);
            });
        } catch (u) {
            r.some(function(n) {
                n.__h && (n.__h = []);
            }), r = [], (0, _preact.options).__e(u, t.__v);
        }
    }), l && l(t, r);
}, (0, _preact.options).unmount = function(t) {
    m && m(t);
    var r, u = t.__c;
    u && u.__H && (u.__H.__.forEach(function(n) {
        try {
            k(n);
        } catch (n) {
            r = n;
        }
    }), u.__H = void 0, r && (0, _preact.options).__e(r, u.__v));
};
var g = "function" == typeof requestAnimationFrame;
function j(n) {
    var t, r = function() {
        clearTimeout(u), g && cancelAnimationFrame(t), setTimeout(n);
    }, u = setTimeout(r, 100);
    g && (t = requestAnimationFrame(r));
}
function k(n) {
    var t = r, u = n.__c;
    "function" == typeof u && (n.__c = void 0, u()), r = t;
}
function w(n) {
    var t = r;
    n.__c = n.__(), r = t;
}
function z(n, t) {
    return !n || n.length !== t.length || t.some(function(t, r) {
        return t !== n[r];
    });
}
function B(n, t) {
    return "function" == typeof t ? t(n) : t;
}

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"a0n20":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Adapted from preact-virtual-list: https://github.com/developit/preact-virtual-list
 *
 * © 2016 Jason Miller
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * Adaptations:
 * - Added role=presentation to helper elements
 * - Tweaked styles for Uppy's Dashboard use case
 */ var _preact = require("preact");
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
const STYLE_INNER = {
    position: "relative",
    // Disabled for our use case: the wrapper elements around FileList already deal with overflow,
    // and this additional property would hide things that we want to show.
    //
    // overflow: 'hidden',
    width: "100%",
    minHeight: "100%"
};
const STYLE_CONTENT = {
    position: "absolute",
    top: 0,
    left: 0,
    // Because the `top` value gets set to some offset, this `height` being 100% would make the scrollbar
    // stretch far beyond the content. For our use case, the content div actually can get its height from
    // the elements inside it, so we don't need to specify a `height` property at all.
    //
    // height: '100%',
    width: "100%",
    overflow: "visible"
};
class VirtualList extends (0, _preact.Component) {
    constructor(props){
        super(props);
        // The currently focused node, used to retain focus when the visible rows change.
        // To avoid update loops, this should not cause state updates, so it's kept as a plain property.
        this.handleScroll = ()=>{
            this.setState({
                offset: this.base.scrollTop
            });
        };
        this.handleResize = ()=>{
            this.resize();
        };
        this.focusElement = null;
        this.state = {
            offset: 0,
            height: 0
        };
    }
    componentDidMount() {
        this.resize();
        window.addEventListener("resize", this.handleResize);
    }
    // TODO: refactor to stable lifecycle method
    // eslint-disable-next-line
    componentWillUpdate() {
        if (this.base.contains(document.activeElement)) this.focusElement = document.activeElement;
    }
    componentDidUpdate() {
        // Maintain focus when rows are added and removed.
        if (this.focusElement && this.focusElement.parentNode && document.activeElement !== this.focusElement) this.focusElement.focus();
        this.focusElement = null;
        this.resize();
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }
    resize() {
        const { height } = this.state;
        if (height !== this.base.offsetHeight) this.setState({
            height: this.base.offsetHeight
        });
    }
    render(_ref) {
        let { data, rowHeight, renderRow, overscanCount = 10, ...props } = _ref;
        const { offset, height } = this.state;
        // first visible row index
        let start = Math.floor(offset / rowHeight);
        // actual number of visible rows (without overscan)
        let visibleRowCount = Math.floor(height / rowHeight);
        // Overscan: render blocks of rows modulo an overscan row count
        // This dramatically reduces DOM writes during scrolling
        if (overscanCount) {
            start = Math.max(0, start - start % overscanCount);
            visibleRowCount += overscanCount;
        }
        // last visible + overscan row index + padding to allow keyboard focus to travel past the visible area
        const end = start + visibleRowCount + 4;
        // data slice currently in viewport plus overscan items
        const selection = data.slice(start, end);
        const styleInner = {
            ...STYLE_INNER,
            height: data.length * rowHeight
        };
        const styleContent = {
            ...STYLE_CONTENT,
            top: start * rowHeight
        };
        // The `role="presentation"` attributes ensure that these wrapper elements are not treated as list
        // items by accessibility and outline tools.
        return(// eslint-disable-next-line react/jsx-props-no-spreading
        (0, _preact.h)("div", _extends({
            onScroll: this.handleScroll
        }, props), (0, _preact.h)("div", {
            role: "presentation",
            style: styleInner
        }, (0, _preact.h)("div", {
            role: "presentation",
            style: styleContent
        }, selection.map(renderRow)))));
    }
}
exports.default = VirtualList;

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"XI8jz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>SearchFilterInput);
var _preact = require("preact");
var _hooks = require("preact/hooks");
var _nonSecure = require("nanoid/non-secure");
function SearchFilterInput(props) {
    const { search, searchOnInput, searchTerm, showButton, inputLabel, clearSearchLabel, buttonLabel, clearSearch, inputClassName, buttonCSSClassName } = props;
    const [searchText, setSearchText] = (0, _hooks.useState)(searchTerm != null ? searchTerm : "");
    // const debouncedSearch = debounce((q) => search(q), 1000)
    const validateAndSearch = (0, _hooks.useCallback)((ev)=>{
        ev.preventDefault();
        search(searchText);
    }, [
        search,
        searchText
    ]);
    const handleInput = (0, _hooks.useCallback)((ev)=>{
        const inputValue = ev.target.value;
        setSearchText(inputValue);
        if (searchOnInput) search(inputValue);
    }, [
        setSearchText,
        searchOnInput,
        search
    ]);
    const handleReset = ()=>{
        setSearchText("");
        if (clearSearch) clearSearch();
    };
    const [form] = (0, _hooks.useState)(()=>{
        const formEl = document.createElement("form");
        formEl.setAttribute("tabindex", "-1");
        formEl.id = (0, _nonSecure.nanoid)();
        return formEl;
    });
    (0, _hooks.useEffect)(()=>{
        document.body.appendChild(form);
        form.addEventListener("submit", validateAndSearch);
        return ()=>{
            form.removeEventListener("submit", validateAndSearch);
            document.body.removeChild(form);
        };
    }, [
        form,
        validateAndSearch
    ]);
    return (0, _preact.h)((0, _preact.Fragment), null, (0, _preact.h)("input", {
        className: `uppy-u-reset ${inputClassName}`,
        type: "search",
        "aria-label": inputLabel,
        placeholder: inputLabel,
        value: searchText,
        onInput: handleInput,
        form: form.id,
        "data-uppy-super-focusable": true
    }), !showButton && (0, _preact.h)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        class: "uppy-c-icon uppy-ProviderBrowser-searchFilterIcon",
        width: "12",
        height: "12",
        viewBox: "0 0 12 12"
    }, (0, _preact.h)("path", {
        d: "M8.638 7.99l3.172 3.172a.492.492 0 1 1-.697.697L7.91 8.656a4.977 4.977 0 0 1-2.983.983C2.206 9.639 0 7.481 0 4.819 0 2.158 2.206 0 4.927 0c2.721 0 4.927 2.158 4.927 4.82a4.74 4.74 0 0 1-1.216 3.17zm-3.71.685c2.176 0 3.94-1.726 3.94-3.856 0-2.129-1.764-3.855-3.94-3.855C2.75.964.984 2.69.984 4.819c0 2.13 1.765 3.856 3.942 3.856z"
    })), !showButton && searchText && (0, _preact.h)("button", {
        className: "uppy-u-reset uppy-ProviderBrowser-searchFilterReset",
        type: "button",
        "aria-label": clearSearchLabel,
        title: clearSearchLabel,
        onClick: handleReset
    }, (0, _preact.h)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        className: "uppy-c-icon",
        viewBox: "0 0 19 19"
    }, (0, _preact.h)("path", {
        d: "M17.318 17.232L9.94 9.854 9.586 9.5l-.354.354-7.378 7.378h.707l-.62-.62v.706L9.318 9.94l.354-.354-.354-.354L1.94 1.854v.707l.62-.62h-.706l7.378 7.378.354.354.354-.354 7.378-7.378h-.707l.622.62v-.706L9.854 9.232l-.354.354.354.354 7.378 7.378.708-.707-7.38-7.378v.708l7.38-7.38.353-.353-.353-.353-.622-.622-.353-.353-.354.352-7.378 7.38h.708L2.56 1.23 2.208.88l-.353.353-.622.62-.353.355.352.353 7.38 7.38v-.708l-7.38 7.38-.353.353.352.353.622.622.353.353.354-.353 7.38-7.38h-.708l7.38 7.38z"
    }))), showButton && (0, _preact.h)("button", {
        className: `uppy-u-reset uppy-c-btn uppy-c-btn-primary ${buttonCSSClassName}`,
        type: "submit",
        form: form.id
    }, buttonLabel));
}

},{"preact":"26zcy","preact/hooks":"eZN76","nanoid/non-secure":"fO50M","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"eeZZi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
exports.default = (_ref)=>{
    let { cancel, done, i18n, selected } = _ref;
    return (0, _preact.h)("div", {
        className: "uppy-ProviderBrowser-footer"
    }, (0, _preact.h)("button", {
        className: "uppy-u-reset uppy-c-btn uppy-c-btn-primary",
        onClick: done,
        type: "button"
    }, i18n("selectX", {
        smart_count: selected
    })), (0, _preact.h)("button", {
        className: "uppy-u-reset uppy-c-btn uppy-c-btn-link",
        onClick: cancel,
        type: "button"
    }, i18n("cancel")));
};

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"cw9pn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _itemIconJs = require("./components/ItemIcon.js");
var _itemIconJsDefault = parcelHelpers.interopDefault(_itemIconJs);
var _gridLiJs = require("./components/GridLi.js");
var _gridLiJsDefault = parcelHelpers.interopDefault(_gridLiJs);
var _listLiJs = require("./components/ListLi.js");
var _listLiJsDefault = parcelHelpers.interopDefault(_listLiJs);
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
exports.default = (props)=>{
    const { author, getItemIcon, isChecked, isDisabled, viewType } = props;
    const itemIconString = getItemIcon();
    const className = (0, _classnamesDefault.default)("uppy-ProviderBrowserItem", {
        "uppy-ProviderBrowserItem--selected": isChecked
    }, {
        "uppy-ProviderBrowserItem--disabled": isDisabled
    }, {
        "uppy-ProviderBrowserItem--noPreview": itemIconString === "video"
    });
    const itemIconEl = (0, _preact.h)((0, _itemIconJsDefault.default), {
        itemIconString: itemIconString
    });
    switch(viewType){
        case "grid":
            return (0, _preact.h)((0, _gridLiJsDefault.default), _extends({}, props, {
                className: className,
                itemIconEl: itemIconEl
            }));
        case "list":
            return(// eslint-disable-next-line react/jsx-props-no-spreading
            (0, _preact.h)((0, _listLiJsDefault.default), _extends({}, props, {
                className: className,
                itemIconEl: itemIconEl
            })));
        case "unsplash":
            return(// eslint-disable-next-line react/jsx-props-no-spreading
            (0, _preact.h)((0, _gridLiJsDefault.default), _extends({}, props, {
                className: className,
                itemIconEl: itemIconEl
            }), (0, _preact.h)("a", {
                href: `${author.url}?utm_source=Companion&utm_medium=referral`,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "uppy-ProviderBrowserItem-author",
                tabIndex: "-1"
            }, author.name)));
        default:
            throw new Error(`There is no such type ${viewType}`);
    }
};

},{"preact":"26zcy","classnames":"jocGM","./components/ItemIcon.js":"2E3m0","./components/GridLi.js":"4jz1F","./components/ListLi.js":"bT8OV","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"2E3m0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
function FileIcon() {
    return (0, _preact.h)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        className: "uppy-c-icon",
        width: 11,
        height: 14.5,
        viewBox: "0 0 44 58"
    }, (0, _preact.h)("path", {
        d: "M27.437.517a1 1 0 0 0-.094.03H4.25C2.037.548.217 2.368.217 4.58v48.405c0 2.212 1.82 4.03 4.03 4.03H39.03c2.21 0 4.03-1.818 4.03-4.03V15.61a1 1 0 0 0-.03-.28 1 1 0 0 0 0-.093 1 1 0 0 0-.03-.032 1 1 0 0 0 0-.03 1 1 0 0 0-.032-.063 1 1 0 0 0-.03-.063 1 1 0 0 0-.032 0 1 1 0 0 0-.03-.063 1 1 0 0 0-.032-.03 1 1 0 0 0-.03-.063 1 1 0 0 0-.063-.062l-14.593-14a1 1 0 0 0-.062-.062A1 1 0 0 0 28 .708a1 1 0 0 0-.374-.157 1 1 0 0 0-.156 0 1 1 0 0 0-.03-.03l-.003-.003zM4.25 2.547h22.218v9.97c0 2.21 1.82 4.03 4.03 4.03h10.564v36.438a2.02 2.02 0 0 1-2.032 2.032H4.25c-1.13 0-2.032-.9-2.032-2.032V4.58c0-1.13.902-2.032 2.03-2.032zm24.218 1.345l10.375 9.937.75.718H30.5c-1.13 0-2.032-.9-2.032-2.03V3.89z"
    }));
}
function FolderIcon() {
    return (0, _preact.h)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        className: "uppy-c-icon",
        style: {
            minWidth: 16,
            marginRight: 3
        },
        viewBox: "0 0 276.157 276.157"
    }, (0, _preact.h)("path", {
        d: "M273.08 101.378c-3.3-4.65-8.86-7.32-15.254-7.32h-24.34V67.59c0-10.2-8.3-18.5-18.5-18.5h-85.322c-3.63 0-9.295-2.875-11.436-5.805l-6.386-8.735c-4.982-6.814-15.104-11.954-23.546-11.954H58.73c-9.292 0-18.638 6.608-21.737 15.372l-2.033 5.752c-.958 2.71-4.72 5.37-7.596 5.37H18.5C8.3 49.09 0 57.39 0 67.59v167.07c0 .886.16 1.73.443 2.52.152 3.306 1.18 6.424 3.053 9.064 3.3 4.652 8.86 7.32 15.255 7.32h188.487c11.395 0 23.27-8.425 27.035-19.18l40.677-116.188c2.11-6.035 1.43-12.164-1.87-16.816zM18.5 64.088h8.864c9.295 0 18.64-6.607 21.738-15.37l2.032-5.75c.96-2.712 4.722-5.373 7.597-5.373h29.565c3.63 0 9.295 2.876 11.437 5.806l6.386 8.735c4.982 6.815 15.104 11.954 23.546 11.954h85.322c1.898 0 3.5 1.602 3.5 3.5v26.47H69.34c-11.395 0-23.27 8.423-27.035 19.178L15 191.23V67.59c0-1.898 1.603-3.5 3.5-3.5zm242.29 49.15l-40.676 116.188c-1.674 4.78-7.812 9.135-12.877 9.135H18.75c-1.447 0-2.576-.372-3.02-.997-.442-.625-.422-1.814.057-3.18l40.677-116.19c1.674-4.78 7.812-9.134 12.877-9.134h188.487c1.448 0 2.577.372 3.02.997.443.625.423 1.814-.056 3.18z"
    }));
}
function VideoIcon() {
    return (0, _preact.h)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        style: {
            width: 16,
            marginRight: 4
        },
        viewBox: "0 0 58 58"
    }, (0, _preact.h)("path", {
        d: "M36.537 28.156l-11-7a1.005 1.005 0 0 0-1.02-.033C24.2 21.3 24 21.635 24 22v14a1 1 0 0 0 1.537.844l11-7a1.002 1.002 0 0 0 0-1.688zM26 34.18V23.82L34.137 29 26 34.18z"
    }), (0, _preact.h)("path", {
        d: "M57 6H1a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h56a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zM10 28H2v-9h8v9zm-8 2h8v9H2v-9zm10 10V8h34v42H12V40zm44-12h-8v-9h8v9zm-8 2h8v9h-8v-9zm8-22v9h-8V8h8zM2 8h8v9H2V8zm0 42v-9h8v9H2zm54 0h-8v-9h8v9z"
    }));
}
exports.default = (props)=>{
    const { itemIconString } = props;
    if (itemIconString === null) return undefined;
    switch(itemIconString){
        case "file":
            return (0, _preact.h)(FileIcon, null);
        case "folder":
            return (0, _preact.h)(FolderIcon, null);
        case "video":
            return (0, _preact.h)(VideoIcon, null);
        default:
            {
                const { alt } = props;
                return (0, _preact.h)("img", {
                    src: itemIconString,
                    alt: alt,
                    loading: "lazy",
                    width: 16,
                    height: 16
                });
            }
    }
};

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"4jz1F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
function GridListItem(props) {
    const { className, isDisabled, restrictionError, isChecked, title, itemIconEl, showTitles, toggleCheckbox, recordShiftKeyPress, id, children } = props;
    const checkBoxClassName = (0, _classnamesDefault.default)("uppy-u-reset", "uppy-ProviderBrowserItem-checkbox", "uppy-ProviderBrowserItem-checkbox--grid", {
        "uppy-ProviderBrowserItem-checkbox--is-checked": isChecked
    });
    return (0, _preact.h)("li", {
        className: className,
        title: isDisabled ? restrictionError == null ? void 0 : restrictionError.message : null
    }, (0, _preact.h)("input", {
        type: "checkbox",
        className: checkBoxClassName,
        onChange: toggleCheckbox,
        onKeyDown: recordShiftKeyPress,
        onMouseDown: recordShiftKeyPress,
        name: "listitem",
        id: id,
        checked: isChecked,
        disabled: isDisabled,
        "data-uppy-super-focusable": true
    }), (0, _preact.h)("label", {
        htmlFor: id,
        "aria-label": title,
        className: "uppy-u-reset uppy-ProviderBrowserItem-inner"
    }, itemIconEl, showTitles && title, children));
}
exports.default = GridListItem;

},{"preact":"26zcy","classnames":"jocGM","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"bT8OV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
// if folder:
//   + checkbox (selects all files from folder)
//   + folder name (opens folder)
// if file:
//   + checkbox (selects file)
//   + file name (selects file)
function ListItem(props) {
    const { className, isDisabled, restrictionError, isCheckboxDisabled, isChecked, toggleCheckbox, recordShiftKeyPress, type, id, itemIconEl, title, handleFolderClick, showTitles, i18n } = props;
    return (0, _preact.h)("li", {
        className: className,
        title: isDisabled ? restrictionError == null ? void 0 : restrictionError.message : null
    }, !isCheckboxDisabled ? (0, _preact.h)("input", {
        type: "checkbox",
        className: `uppy-u-reset uppy-ProviderBrowserItem-checkbox ${isChecked ? "uppy-ProviderBrowserItem-checkbox--is-checked" : ""}`,
        onChange: toggleCheckbox,
        onKeyDown: recordShiftKeyPress,
        onMouseDown: recordShiftKeyPress,
        name: "listitem",
        id: id,
        checked: isChecked,
        "aria-label": type === "file" ? null : i18n("allFilesFromFolderNamed", {
            name: title
        }),
        disabled: isDisabled,
        "data-uppy-super-focusable": true
    }) : null, type === "file" ? // label for a checkbox
    (0, _preact.h)("label", {
        htmlFor: id,
        className: "uppy-u-reset uppy-ProviderBrowserItem-inner"
    }, (0, _preact.h)("div", {
        className: "uppy-ProviderBrowserItem-iconWrap"
    }, itemIconEl), showTitles && title) : // button to open a folder
    (0, _preact.h)("button", {
        type: "button",
        className: "uppy-u-reset uppy-c-btn uppy-ProviderBrowserItem-inner",
        onClick: handleFolderClick,
        "aria-label": i18n("openFolderNamed", {
            name: title
        })
    }, (0, _preact.h)("div", {
        className: "uppy-ProviderBrowserItem-iconWrap"
    }, itemIconEl), showTitles && (0, _preact.h)("span", null, title)));
}
exports.default = ListItem;

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"1rn3q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
exports.default = (_ref)=>{
    let { i18n, loading } = _ref;
    return (0, _preact.h)("div", {
        className: "uppy-Provider-loading"
    }, (0, _preact.h)("span", null, i18n("loading")), typeof loading === "string" && // todo improve this, see discussion in https://github.com/transloadit/uppy/pull/4399#discussion_r1162564445
    (0, _preact.h)("span", {
        style: {
            marginTop: ".7em"
        }
    }, loading));
};

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"hWaNK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
class CloseWrapper extends (0, _preact.Component) {
    componentWillUnmount() {
        const { onUnmount } = this.props;
        onUnmount();
    }
    render() {
        const { children } = this.props;
        return (0, _preact.toChildArray)(children)[0];
    }
}
exports.default = CloseWrapper;

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"97Pp8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getFileType = require("@uppy/utils/lib/getFileType");
var _getFileTypeDefault = parcelHelpers.interopDefault(_getFileType);
var _isPreviewSupported = require("@uppy/utils/lib/isPreviewSupported");
var _isPreviewSupportedDefault = parcelHelpers.interopDefault(_isPreviewSupported);
var _remoteFileObjToLocal = require("@uppy/utils/lib/remoteFileObjToLocal");
var _remoteFileObjToLocalDefault = parcelHelpers.interopDefault(_remoteFileObjToLocal);
class View {
    constructor(plugin, opts){
        this.filterItems = (items)=>{
            const state = this.plugin.getPluginState();
            if (!state.filterInput || state.filterInput === "") return items;
            return items.filter((folder)=>{
                return folder.name.toLowerCase().indexOf(state.filterInput.toLowerCase()) !== -1;
            });
        };
        this.recordShiftKeyPress = (e)=>{
            this.isShiftKeyPressed = e.shiftKey;
        };
        /**
     * Toggles file/folder checkbox to on/off state while updating files list.
     *
     * Note that some extra complexity comes from supporting shift+click to
     * toggle multiple checkboxes at once, which is done by getting all files
     * in between last checked file and current one.
     */ this.toggleCheckbox = (e, file)=>{
            e.stopPropagation();
            e.preventDefault();
            e.currentTarget.focus();
            const { folders, files } = this.plugin.getPluginState();
            const items = this.filterItems(folders.concat(files));
            // Shift-clicking selects a single consecutive list of items
            // starting at the previous click.
            if (this.lastCheckbox && this.isShiftKeyPressed) {
                const { currentSelection } = this.plugin.getPluginState();
                const prevIndex = items.indexOf(this.lastCheckbox);
                const currentIndex = items.indexOf(file);
                const newSelection = prevIndex < currentIndex ? items.slice(prevIndex, currentIndex + 1) : items.slice(currentIndex, prevIndex + 1);
                const reducedNewSelection = [];
                // Check restrictions on each file in currentSelection,
                // reduce it to only contain files that pass restrictions
                for (const item of newSelection){
                    const { uppy } = this.plugin;
                    const restrictionError = uppy.validateRestrictions((0, _remoteFileObjToLocalDefault.default)(item), [
                        ...uppy.getFiles(),
                        ...reducedNewSelection
                    ]);
                    if (!restrictionError) reducedNewSelection.push(item);
                    else uppy.info({
                        message: restrictionError.message
                    }, "error", uppy.opts.infoTimeout);
                }
                this.plugin.setPluginState({
                    currentSelection: [
                        ...new Set([
                            ...currentSelection,
                            ...reducedNewSelection
                        ])
                    ]
                });
                return;
            }
            this.lastCheckbox = file;
            const { currentSelection } = this.plugin.getPluginState();
            if (this.isChecked(file)) this.plugin.setPluginState({
                currentSelection: currentSelection.filter((item)=>item.id !== file.id)
            });
            else this.plugin.setPluginState({
                currentSelection: currentSelection.concat([
                    file
                ])
            });
        };
        this.isChecked = (file)=>{
            const { currentSelection } = this.plugin.getPluginState();
            // comparing id instead of the file object, because the reference to the object
            // changes when we switch folders, and the file list is updated
            return currentSelection.some((item)=>item.id === file.id);
        };
        this.plugin = plugin;
        this.provider = opts.provider;
        this.isHandlingScroll = false;
        this.preFirstRender = this.preFirstRender.bind(this);
        this.handleError = this.handleError.bind(this);
        this.clearSelection = this.clearSelection.bind(this);
        this.cancelPicking = this.cancelPicking.bind(this);
    }
    preFirstRender() {
        this.plugin.setPluginState({
            didFirstRender: true
        });
        this.plugin.onFirstRender();
    }
    // eslint-disable-next-line class-methods-use-this
    shouldHandleScroll(event) {
        const { scrollHeight, scrollTop, offsetHeight } = event.target;
        const scrollPosition = scrollHeight - (scrollTop + offsetHeight);
        return scrollPosition < 50 && !this.isHandlingScroll;
    }
    clearSelection() {
        this.plugin.setPluginState({
            currentSelection: [],
            filterInput: ""
        });
    }
    cancelPicking() {
        this.clearSelection();
        const dashboard = this.plugin.uppy.getPlugin("Dashboard");
        if (dashboard) dashboard.hideAllPanels();
    }
    handleError(error) {
        var _error$cause;
        const { uppy } = this.plugin;
        const message = uppy.i18n("companionError");
        uppy.log(error.toString());
        if (error.isAuthError || ((_error$cause = error.cause) == null ? void 0 : _error$cause.name) === "AbortError") // authError just means we're not authenticated, don't show to user
        // AbortError means the user has clicked "cancel" on an operation
        return;
        uppy.info({
            message,
            details: error.toString()
        }, "error", 5000);
    }
    // todo document what is a "tagFile" or get rid of this concept
    getTagFile(file) {
        const tagFile = {
            id: file.id,
            source: this.plugin.id,
            data: file,
            name: file.name || file.id,
            type: file.mimeType,
            isRemote: true,
            meta: {},
            body: {
                fileId: file.id
            },
            remote: {
                companionUrl: this.plugin.opts.companionUrl,
                url: `${this.provider.fileUrl(file.requestPath)}`,
                body: {
                    fileId: file.id
                },
                providerOptions: this.provider.opts,
                providerName: this.provider.name,
                provider: this.provider.provider
            }
        };
        const fileType = (0, _getFileTypeDefault.default)(tagFile);
        // TODO Should we just always use the thumbnail URL if it exists?
        if (fileType && (0, _isPreviewSupportedDefault.default)(fileType)) tagFile.preview = file.thumbnail;
        if (file.author) {
            if (file.author.name != null) tagFile.meta.authorName = String(file.author.name);
            if (file.author.url) tagFile.meta.authorUrl = file.author.url;
        }
        // add relativePath similar to non-remote files: https://github.com/transloadit/uppy/pull/4486#issuecomment-1579203717
        if (file.relDirPath != null) tagFile.meta.relativePath = file.relDirPath ? `${file.relDirPath}/${tagFile.name}` : null;
        // and absolutePath (with leading slash) https://github.com/transloadit/uppy/pull/4537#issuecomment-1614236655
        if (file.absDirPath != null) tagFile.meta.absolutePath = file.absDirPath ? `/${file.absDirPath}/${tagFile.name}` : `/${tagFile.name}`;
        return tagFile;
    }
    setLoading(loading) {
        this.plugin.setPluginState({
            loading
        });
    }
}
exports.default = View;

},{"@uppy/utils/lib/getFileType":"6iuDp","@uppy/utils/lib/isPreviewSupported":"aJHxI","@uppy/utils/lib/remoteFileObjToLocal":"isB4H","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"3KoWO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
The error thrown by `queue.add()` when a job is aborted before it is run. See `signal`.
*/ parcelHelpers.export(exports, "AbortError", ()=>AbortError);
var _eventemitter3 = require("eventemitter3");
var _pTimeout = require("p-timeout");
var _pTimeoutDefault = parcelHelpers.interopDefault(_pTimeout);
var _priorityQueueJs = require("./priority-queue.js");
var _priorityQueueJsDefault = parcelHelpers.interopDefault(_priorityQueueJs);
var __classPrivateFieldSet = undefined && undefined.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = undefined && undefined.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PQueue_instances, _PQueue_carryoverConcurrencyCount, _PQueue_isIntervalIgnored, _PQueue_intervalCount, _PQueue_intervalCap, _PQueue_interval, _PQueue_intervalEnd, _PQueue_intervalId, _PQueue_timeoutId, _PQueue_queue, _PQueue_queueClass, _PQueue_pending, _PQueue_concurrency, _PQueue_isPaused, _PQueue_throwOnTimeout, _PQueue_doesIntervalAllowAnother_get, _PQueue_doesConcurrentAllowAnother_get, _PQueue_next, _PQueue_onResumeInterval, _PQueue_isIntervalPaused_get, _PQueue_tryToStartAnother, _PQueue_initializeIntervalIfNeeded, _PQueue_onInterval, _PQueue_processQueue, _PQueue_throwOnAbort, _PQueue_onEvent;
class AbortError extends Error {
}
/**
Promise queue with concurrency control.
*/ class PQueue extends (0, _eventemitter3.EventEmitter) {
    // TODO: The `throwOnTimeout` option should affect the return types of `add()` and `addAll()`
    constructor(options){
        var _a, _b, _c, _d;
        super();
        _PQueue_instances.add(this);
        _PQueue_carryoverConcurrencyCount.set(this, void 0);
        _PQueue_isIntervalIgnored.set(this, void 0);
        _PQueue_intervalCount.set(this, 0);
        _PQueue_intervalCap.set(this, void 0);
        _PQueue_interval.set(this, void 0);
        _PQueue_intervalEnd.set(this, 0);
        _PQueue_intervalId.set(this, void 0);
        _PQueue_timeoutId.set(this, void 0);
        _PQueue_queue.set(this, void 0);
        _PQueue_queueClass.set(this, void 0);
        _PQueue_pending.set(this, 0);
        // The `!` is needed because of https://github.com/microsoft/TypeScript/issues/32194
        _PQueue_concurrency.set(this, void 0);
        _PQueue_isPaused.set(this, void 0);
        _PQueue_throwOnTimeout.set(this, void 0);
        /**
        Per-operation timeout in milliseconds. Operations fulfill once `timeout` elapses if they haven't already.
    
        Applies to each future operation.
        */ Object.defineProperty(this, "timeout", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        options = {
            carryoverConcurrencyCount: false,
            intervalCap: Number.POSITIVE_INFINITY,
            interval: 0,
            concurrency: Number.POSITIVE_INFINITY,
            autoStart: true,
            queueClass: (0, _priorityQueueJsDefault.default),
            ...options
        };
        if (!(typeof options.intervalCap === "number" && options.intervalCap >= 1)) throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${(_b = (_a = options.intervalCap) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""}\` (${typeof options.intervalCap})`);
        if (options.interval === undefined || !(Number.isFinite(options.interval) && options.interval >= 0)) throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${(_d = (_c = options.interval) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : ""}\` (${typeof options.interval})`);
        __classPrivateFieldSet(this, _PQueue_carryoverConcurrencyCount, options.carryoverConcurrencyCount, "f");
        __classPrivateFieldSet(this, _PQueue_isIntervalIgnored, options.intervalCap === Number.POSITIVE_INFINITY || options.interval === 0, "f");
        __classPrivateFieldSet(this, _PQueue_intervalCap, options.intervalCap, "f");
        __classPrivateFieldSet(this, _PQueue_interval, options.interval, "f");
        __classPrivateFieldSet(this, _PQueue_queue, new options.queueClass(), "f");
        __classPrivateFieldSet(this, _PQueue_queueClass, options.queueClass, "f");
        this.concurrency = options.concurrency;
        this.timeout = options.timeout;
        __classPrivateFieldSet(this, _PQueue_throwOnTimeout, options.throwOnTimeout === true, "f");
        __classPrivateFieldSet(this, _PQueue_isPaused, options.autoStart === false, "f");
    }
    get concurrency() {
        return __classPrivateFieldGet(this, _PQueue_concurrency, "f");
    }
    set concurrency(newConcurrency) {
        if (!(typeof newConcurrency === "number" && newConcurrency >= 1)) throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${newConcurrency}\` (${typeof newConcurrency})`);
        __classPrivateFieldSet(this, _PQueue_concurrency, newConcurrency, "f");
        __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_processQueue).call(this);
    }
    async add(function_, options = {}) {
        options = {
            timeout: this.timeout,
            throwOnTimeout: __classPrivateFieldGet(this, _PQueue_throwOnTimeout, "f"),
            ...options
        };
        return new Promise((resolve, reject)=>{
            __classPrivateFieldGet(this, _PQueue_queue, "f").enqueue(async ()=>{
                var _a;
                var _b, _c;
                __classPrivateFieldSet(this, _PQueue_pending, (_b = __classPrivateFieldGet(this, _PQueue_pending, "f"), _b++, _b), "f");
                __classPrivateFieldSet(this, _PQueue_intervalCount, (_c = __classPrivateFieldGet(this, _PQueue_intervalCount, "f"), _c++, _c), "f");
                try {
                    // TODO: Use options.signal?.throwIfAborted() when targeting Node.js 18
                    if ((_a = options.signal) === null || _a === void 0 ? void 0 : _a.aborted) // TODO: Use ABORT_ERR code when targeting Node.js 16 (https://nodejs.org/docs/latest-v16.x/api/errors.html#abort_err)
                    throw new AbortError("The task was aborted.");
                    let operation = function_({
                        signal: options.signal
                    });
                    if (options.timeout) operation = (0, _pTimeoutDefault.default)(Promise.resolve(operation), options.timeout);
                    if (options.signal) operation = Promise.race([
                        operation,
                        __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_throwOnAbort).call(this, options.signal)
                    ]);
                    const result = await operation;
                    resolve(result);
                    this.emit("completed", result);
                } catch (error) {
                    if (error instanceof (0, _pTimeout.TimeoutError) && !options.throwOnTimeout) {
                        resolve();
                        return;
                    }
                    reject(error);
                    this.emit("error", error);
                } finally{
                    __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_next).call(this);
                }
            }, options);
            this.emit("add");
            __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_tryToStartAnother).call(this);
        });
    }
    async addAll(functions, options) {
        return Promise.all(functions.map(async (function_)=>this.add(function_, options)));
    }
    /**
    Start (or resume) executing enqueued tasks within concurrency limit. No need to call this if queue is not paused (via `options.autoStart = false` or by `.pause()` method.)
    */ start() {
        if (!__classPrivateFieldGet(this, _PQueue_isPaused, "f")) return this;
        __classPrivateFieldSet(this, _PQueue_isPaused, false, "f");
        __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_processQueue).call(this);
        return this;
    }
    /**
    Put queue execution on hold.
    */ pause() {
        __classPrivateFieldSet(this, _PQueue_isPaused, true, "f");
    }
    /**
    Clear the queue.
    */ clear() {
        __classPrivateFieldSet(this, _PQueue_queue, new (__classPrivateFieldGet(this, _PQueue_queueClass, "f"))(), "f");
    }
    /**
    Can be called multiple times. Useful if you for example add additional items at a later time.

    @returns A promise that settles when the queue becomes empty.
    */ async onEmpty() {
        // Instantly resolve if the queue is empty
        if (__classPrivateFieldGet(this, _PQueue_queue, "f").size === 0) return;
        await __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_onEvent).call(this, "empty");
    }
    /**
    @returns A promise that settles when the queue size is less than the given limit: `queue.size < limit`.

    If you want to avoid having the queue grow beyond a certain size you can `await queue.onSizeLessThan()` before adding a new item.

    Note that this only limits the number of items waiting to start. There could still be up to `concurrency` jobs already running that this call does not include in its calculation.
    */ async onSizeLessThan(limit) {
        // Instantly resolve if the queue is empty.
        if (__classPrivateFieldGet(this, _PQueue_queue, "f").size < limit) return;
        await __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_onEvent).call(this, "next", ()=>__classPrivateFieldGet(this, _PQueue_queue, "f").size < limit);
    }
    /**
    The difference with `.onEmpty` is that `.onIdle` guarantees that all work from the queue has finished. `.onEmpty` merely signals that the queue is empty, but it could mean that some promises haven't completed yet.

    @returns A promise that settles when the queue becomes empty, and all promises have completed; `queue.size === 0 && queue.pending === 0`.
    */ async onIdle() {
        // Instantly resolve if none pending and if nothing else is queued
        if (__classPrivateFieldGet(this, _PQueue_pending, "f") === 0 && __classPrivateFieldGet(this, _PQueue_queue, "f").size === 0) return;
        await __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_onEvent).call(this, "idle");
    }
    /**
    Size of the queue, the number of queued items waiting to run.
    */ get size() {
        return __classPrivateFieldGet(this, _PQueue_queue, "f").size;
    }
    /**
    Size of the queue, filtered by the given options.

    For example, this can be used to find the number of items remaining in the queue with a specific priority level.
    */ sizeBy(options) {
        // eslint-disable-next-line unicorn/no-array-callback-reference
        return __classPrivateFieldGet(this, _PQueue_queue, "f").filter(options).length;
    }
    /**
    Number of running items (no longer in the queue).
    */ get pending() {
        return __classPrivateFieldGet(this, _PQueue_pending, "f");
    }
    /**
    Whether the queue is currently paused.
    */ get isPaused() {
        return __classPrivateFieldGet(this, _PQueue_isPaused, "f");
    }
}
_PQueue_carryoverConcurrencyCount = new WeakMap(), _PQueue_isIntervalIgnored = new WeakMap(), _PQueue_intervalCount = new WeakMap(), _PQueue_intervalCap = new WeakMap(), _PQueue_interval = new WeakMap(), _PQueue_intervalEnd = new WeakMap(), _PQueue_intervalId = new WeakMap(), _PQueue_timeoutId = new WeakMap(), _PQueue_queue = new WeakMap(), _PQueue_queueClass = new WeakMap(), _PQueue_pending = new WeakMap(), _PQueue_concurrency = new WeakMap(), _PQueue_isPaused = new WeakMap(), _PQueue_throwOnTimeout = new WeakMap(), _PQueue_instances = new WeakSet(), _PQueue_doesIntervalAllowAnother_get = function _PQueue_doesIntervalAllowAnother_get() {
    return __classPrivateFieldGet(this, _PQueue_isIntervalIgnored, "f") || __classPrivateFieldGet(this, _PQueue_intervalCount, "f") < __classPrivateFieldGet(this, _PQueue_intervalCap, "f");
}, _PQueue_doesConcurrentAllowAnother_get = function _PQueue_doesConcurrentAllowAnother_get() {
    return __classPrivateFieldGet(this, _PQueue_pending, "f") < __classPrivateFieldGet(this, _PQueue_concurrency, "f");
}, _PQueue_next = function _PQueue_next() {
    var _a;
    __classPrivateFieldSet(this, _PQueue_pending, (_a = __classPrivateFieldGet(this, _PQueue_pending, "f"), _a--, _a), "f");
    __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_tryToStartAnother).call(this);
    this.emit("next");
}, _PQueue_onResumeInterval = function _PQueue_onResumeInterval() {
    __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_onInterval).call(this);
    __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_initializeIntervalIfNeeded).call(this);
    __classPrivateFieldSet(this, _PQueue_timeoutId, undefined, "f");
}, _PQueue_isIntervalPaused_get = function _PQueue_isIntervalPaused_get() {
    const now = Date.now();
    if (__classPrivateFieldGet(this, _PQueue_intervalId, "f") === undefined) {
        const delay = __classPrivateFieldGet(this, _PQueue_intervalEnd, "f") - now;
        if (delay < 0) // Act as the interval was done
        // We don't need to resume it here because it will be resumed on line 160
        __classPrivateFieldSet(this, _PQueue_intervalCount, __classPrivateFieldGet(this, _PQueue_carryoverConcurrencyCount, "f") ? __classPrivateFieldGet(this, _PQueue_pending, "f") : 0, "f");
        else {
            // Act as the interval is pending
            if (__classPrivateFieldGet(this, _PQueue_timeoutId, "f") === undefined) __classPrivateFieldSet(this, _PQueue_timeoutId, setTimeout(()=>{
                __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_onResumeInterval).call(this);
            }, delay), "f");
            return true;
        }
    }
    return false;
}, _PQueue_tryToStartAnother = function _PQueue_tryToStartAnother() {
    if (__classPrivateFieldGet(this, _PQueue_queue, "f").size === 0) {
        // We can clear the interval ("pause")
        // Because we can redo it later ("resume")
        if (__classPrivateFieldGet(this, _PQueue_intervalId, "f")) clearInterval(__classPrivateFieldGet(this, _PQueue_intervalId, "f"));
        __classPrivateFieldSet(this, _PQueue_intervalId, undefined, "f");
        this.emit("empty");
        if (__classPrivateFieldGet(this, _PQueue_pending, "f") === 0) this.emit("idle");
        return false;
    }
    if (!__classPrivateFieldGet(this, _PQueue_isPaused, "f")) {
        const canInitializeInterval = !__classPrivateFieldGet(this, _PQueue_instances, "a", _PQueue_isIntervalPaused_get);
        if (__classPrivateFieldGet(this, _PQueue_instances, "a", _PQueue_doesIntervalAllowAnother_get) && __classPrivateFieldGet(this, _PQueue_instances, "a", _PQueue_doesConcurrentAllowAnother_get)) {
            const job = __classPrivateFieldGet(this, _PQueue_queue, "f").dequeue();
            if (!job) return false;
            this.emit("active");
            job();
            if (canInitializeInterval) __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_initializeIntervalIfNeeded).call(this);
            return true;
        }
    }
    return false;
}, _PQueue_initializeIntervalIfNeeded = function _PQueue_initializeIntervalIfNeeded() {
    if (__classPrivateFieldGet(this, _PQueue_isIntervalIgnored, "f") || __classPrivateFieldGet(this, _PQueue_intervalId, "f") !== undefined) return;
    __classPrivateFieldSet(this, _PQueue_intervalId, setInterval(()=>{
        __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_onInterval).call(this);
    }, __classPrivateFieldGet(this, _PQueue_interval, "f")), "f");
    __classPrivateFieldSet(this, _PQueue_intervalEnd, Date.now() + __classPrivateFieldGet(this, _PQueue_interval, "f"), "f");
}, _PQueue_onInterval = function _PQueue_onInterval() {
    if (__classPrivateFieldGet(this, _PQueue_intervalCount, "f") === 0 && __classPrivateFieldGet(this, _PQueue_pending, "f") === 0 && __classPrivateFieldGet(this, _PQueue_intervalId, "f")) {
        clearInterval(__classPrivateFieldGet(this, _PQueue_intervalId, "f"));
        __classPrivateFieldSet(this, _PQueue_intervalId, undefined, "f");
    }
    __classPrivateFieldSet(this, _PQueue_intervalCount, __classPrivateFieldGet(this, _PQueue_carryoverConcurrencyCount, "f") ? __classPrivateFieldGet(this, _PQueue_pending, "f") : 0, "f");
    __classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_processQueue).call(this);
}, _PQueue_processQueue = function _PQueue_processQueue() {
    // eslint-disable-next-line no-empty
    while(__classPrivateFieldGet(this, _PQueue_instances, "m", _PQueue_tryToStartAnother).call(this));
}, _PQueue_throwOnAbort = async function _PQueue_throwOnAbort(signal) {
    return new Promise((_resolve, reject)=>{
        signal.addEventListener("abort", ()=>{
            // TODO: Reject with signal.throwIfAborted() when targeting Node.js 18
            // TODO: Use ABORT_ERR code when targeting Node.js 16 (https://nodejs.org/docs/latest-v16.x/api/errors.html#abort_err)
            reject(new AbortError("The task was aborted."));
        }, {
            once: true
        });
    });
}, _PQueue_onEvent = async function _PQueue_onEvent(event, filter) {
    return new Promise((resolve)=>{
        const listener = ()=>{
            if (filter && !filter()) return;
            this.off(event, listener);
            resolve();
        };
        this.on(event, listener);
    });
};
exports.default = PQueue;

},{"eventemitter3":"3fnfh","p-timeout":"2j2Zi","./priority-queue.js":"grf7X","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"3fnfh":[function(require,module,exports) {
"use strict";
var has = Object.prototype.hasOwnProperty, prefix = "~";
/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */ function Events() {}
//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
    Events.prototype = Object.create(null);
    //
    // This hack is needed because the `__proto__` property is still inherited in
    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
    //
    if (!new Events().__proto__) prefix = false;
}
/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */ function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
}
/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */ function addListener(emitter, event, fn, context, once) {
    if (typeof fn !== "function") throw new TypeError("The listener must be a function");
    var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
    if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
    else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
    else emitter._events[evt] = [
        emitter._events[evt],
        listener
    ];
    return emitter;
}
/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */ function clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0) emitter._events = new Events();
    else delete emitter._events[evt];
}
/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */ function EventEmitter() {
    this._events = new Events();
    this._eventsCount = 0;
}
/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */ EventEmitter.prototype.eventNames = function eventNames() {
    var names = [], events, name;
    if (this._eventsCount === 0) return names;
    for(name in events = this._events)if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
    if (Object.getOwnPropertySymbols) return names.concat(Object.getOwnPropertySymbols(events));
    return names;
};
/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */ EventEmitter.prototype.listeners = function listeners(event) {
    var evt = prefix ? prefix + event : event, handlers = this._events[evt];
    if (!handlers) return [];
    if (handlers.fn) return [
        handlers.fn
    ];
    for(var i = 0, l = handlers.length, ee = new Array(l); i < l; i++)ee[i] = handlers[i].fn;
    return ee;
};
/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */ EventEmitter.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix ? prefix + event : event, listeners = this._events[evt];
    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
};
/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */ EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return false;
    var listeners = this._events[evt], len = arguments.length, args, i;
    if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
        switch(len){
            case 1:
                return listeners.fn.call(listeners.context), true;
            case 2:
                return listeners.fn.call(listeners.context, a1), true;
            case 3:
                return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
                return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for(i = 1, args = new Array(len - 1); i < len; i++)args[i - 1] = arguments[i];
        listeners.fn.apply(listeners.context, args);
    } else {
        var length = listeners.length, j;
        for(i = 0; i < length; i++){
            if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
            switch(len){
                case 1:
                    listeners[i].fn.call(listeners[i].context);
                    break;
                case 2:
                    listeners[i].fn.call(listeners[i].context, a1);
                    break;
                case 3:
                    listeners[i].fn.call(listeners[i].context, a1, a2);
                    break;
                case 4:
                    listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                    break;
                default:
                    if (!args) for(j = 1, args = new Array(len - 1); j < len; j++)args[j - 1] = arguments[j];
                    listeners[i].fn.apply(listeners[i].context, args);
            }
        }
    }
    return true;
};
/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.on = function on(event, fn, context) {
    return addListener(this, event, fn, context, false);
};
/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.once = function once(event, fn, context) {
    return addListener(this, event, fn, context, true);
};
/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return this;
    if (!fn) {
        clearEvent(this, evt);
        return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) clearEvent(this, evt);
    } else {
        for(var i = 0, events = [], length = listeners.length; i < length; i++)if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) events.push(listeners[i]);
        //
        // Reset the array, or remove it completely if we have no more listeners.
        //
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
    }
    return this;
};
/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
    } else {
        this._events = new Events();
        this._eventsCount = 0;
    }
    return this;
};
//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;
//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;
//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;
module.exports = EventEmitter;

},{}],"2j2Zi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TimeoutError", ()=>TimeoutError);
/**
An error to be thrown when the request is aborted by AbortController.
DOMException is thrown instead of this Error when DOMException is available.
*/ parcelHelpers.export(exports, "AbortError", ()=>AbortError);
parcelHelpers.export(exports, "default", ()=>pTimeout);
class TimeoutError extends Error {
    constructor(message){
        super(message);
        this.name = "TimeoutError";
    }
}
class AbortError extends Error {
    constructor(message){
        super();
        this.name = "AbortError";
        this.message = message;
    }
}
/**
TODO: Remove AbortError and just throw DOMException when targeting Node 18.
*/ const getDOMException = (errorMessage)=>globalThis.DOMException === undefined ? new AbortError(errorMessage) : new DOMException(errorMessage);
/**
TODO: Remove below function and just 'reject(signal.reason)' when targeting Node 18.
*/ const getAbortedReason = (signal)=>{
    const reason = signal.reason === undefined ? getDOMException("This operation was aborted.") : signal.reason;
    return reason instanceof Error ? reason : getDOMException(reason);
};
function pTimeout(promise, milliseconds, fallback, options) {
    let timer;
    const cancelablePromise = new Promise((resolve, reject)=>{
        if (typeof milliseconds !== "number" || Math.sign(milliseconds) !== 1) throw new TypeError(`Expected \`milliseconds\` to be a positive number, got \`${milliseconds}\``);
        if (milliseconds === Number.POSITIVE_INFINITY) {
            resolve(promise);
            return;
        }
        options = {
            customTimers: {
                setTimeout,
                clearTimeout
            },
            ...options
        };
        if (options.signal) {
            const { signal } = options;
            if (signal.aborted) reject(getAbortedReason(signal));
            signal.addEventListener("abort", ()=>{
                reject(getAbortedReason(signal));
            });
        }
        timer = options.customTimers.setTimeout.call(undefined, ()=>{
            if (typeof fallback === "function") {
                try {
                    resolve(fallback());
                } catch (error) {
                    reject(error);
                }
                return;
            }
            const message = typeof fallback === "string" ? fallback : `Promise timed out after ${milliseconds} milliseconds`;
            const timeoutError = fallback instanceof Error ? fallback : new TimeoutError(message);
            if (typeof promise.cancel === "function") promise.cancel();
            reject(timeoutError);
        }, milliseconds);
        (async ()=>{
            try {
                resolve(await promise);
            } catch (error) {
                reject(error);
            } finally{
                options.customTimers.clearTimeout.call(undefined, timer);
            }
        })();
    });
    cancelablePromise.clear = ()=>{
        clearTimeout(timer);
        timer = undefined;
    };
    return cancelablePromise;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"grf7X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _lowerBoundJs = require("./lower-bound.js");
var _lowerBoundJsDefault = parcelHelpers.interopDefault(_lowerBoundJs);
var __classPrivateFieldGet = undefined && undefined.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PriorityQueue_queue;
class PriorityQueue {
    constructor(){
        _PriorityQueue_queue.set(this, []);
    }
    enqueue(run, options) {
        options = {
            priority: 0,
            ...options
        };
        const element = {
            priority: options.priority,
            run
        };
        if (this.size && __classPrivateFieldGet(this, _PriorityQueue_queue, "f")[this.size - 1].priority >= options.priority) {
            __classPrivateFieldGet(this, _PriorityQueue_queue, "f").push(element);
            return;
        }
        const index = (0, _lowerBoundJsDefault.default)(__classPrivateFieldGet(this, _PriorityQueue_queue, "f"), element, (a, b)=>b.priority - a.priority);
        __classPrivateFieldGet(this, _PriorityQueue_queue, "f").splice(index, 0, element);
    }
    dequeue() {
        const item = __classPrivateFieldGet(this, _PriorityQueue_queue, "f").shift();
        return item === null || item === void 0 ? void 0 : item.run;
    }
    filter(options) {
        return __classPrivateFieldGet(this, _PriorityQueue_queue, "f").filter((element)=>element.priority === options.priority).map((element)=>element.run);
    }
    get size() {
        return __classPrivateFieldGet(this, _PriorityQueue_queue, "f").length;
    }
}
_PriorityQueue_queue = new WeakMap();
exports.default = PriorityQueue;

},{"./lower-bound.js":"etZjf","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"etZjf":[function(require,module,exports) {
// Port of lower_bound from https://en.cppreference.com/w/cpp/algorithm/lower_bound
// Used to compute insertion index to keep queue sorted after insertion
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>lowerBound);
function lowerBound(array, value, comparator) {
    let first = 0;
    let count = array.length;
    while(count > 0){
        const step = Math.trunc(count / 2);
        let it = first + step;
        if (comparator(array[it], value) <= 0) {
            first = ++it;
            count -= step + 1;
        } else count = step;
    }
    return first;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"8O8l1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _searchProviderViewJsDefault.default));
var _searchProviderViewJs = require("./SearchProviderView.js");
var _searchProviderViewJsDefault = parcelHelpers.interopDefault(_searchProviderViewJs);

},{"./SearchProviderView.js":"g4fAN","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"g4fAN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
var _searchFilterInputJs = require("../SearchFilterInput.js");
var _searchFilterInputJsDefault = parcelHelpers.interopDefault(_searchFilterInputJs);
var _browserJs = require("../Browser.js");
var _browserJsDefault = parcelHelpers.interopDefault(_browserJs);
var _closeWrapperJs = require("../CloseWrapper.js");
var _closeWrapperJsDefault = parcelHelpers.interopDefault(_closeWrapperJs);
var _viewJs = require("../View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
function _classPrivateFieldLooseBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) throw new TypeError("attempted to use private field on non-instance");
    return receiver;
}
var id = 0;
function _classPrivateFieldLooseKey(name) {
    return "__private_" + id++ + "_" + name;
}
const packageJson = {
    "version": "3.5.0"
};
/**
 * SearchProviderView, used for Unsplash and future image search providers.
 * Extends generic View, shared with regular providers like Google Drive and Instagram.
 */ var _updateFilesAndInputMode = /*#__PURE__*/ _classPrivateFieldLooseKey("updateFilesAndInputMode");
class SearchProviderView extends (0, _viewJsDefault.default) {
    /**
   * @param {object} plugin instance of the plugin
   * @param {object} opts
   */ constructor(plugin, opts){
        super(plugin, opts);
        // set default options
        Object.defineProperty(this, _updateFilesAndInputMode, {
            value: _updateFilesAndInputMode2
        });
        const defaultOptions = {
            viewType: "grid",
            showTitles: false,
            showFilter: false,
            showBreadcrumbs: false
        };
        // merge default options with the ones set by user
        this.opts = {
            ...defaultOptions,
            ...opts
        };
        // Logic
        this.search = this.search.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
        this.resetPluginState = this.resetPluginState.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.donePicking = this.donePicking.bind(this);
        // Visual
        this.render = this.render.bind(this);
        this.defaultState = {
            isInputMode: true,
            files: [],
            folders: [],
            breadcrumbs: [],
            filterInput: "",
            currentSelection: [],
            searchTerm: null
        };
        // Set default state for the plugin
        this.plugin.setPluginState(this.defaultState);
    }
    // eslint-disable-next-line class-methods-use-this
    tearDown() {
    // Nothing.
    }
    resetPluginState() {
        this.plugin.setPluginState(this.defaultState);
    }
    async search(query) {
        const { searchTerm } = this.plugin.getPluginState();
        if (query && query === searchTerm) // no need to search again as this is the same as the previous search
        return;
        this.setLoading(true);
        try {
            const res = await this.provider.search(query);
            _classPrivateFieldLooseBase(this, _updateFilesAndInputMode)[_updateFilesAndInputMode](res, []);
        } catch (err) {
            this.handleError(err);
        } finally{
            this.setLoading(false);
        }
    }
    clearSearch() {
        this.plugin.setPluginState({
            currentSelection: [],
            files: [],
            searchTerm: null
        });
    }
    async handleScroll(event) {
        const query = this.nextPageQuery || null;
        if (this.shouldHandleScroll(event) && query) {
            this.isHandlingScroll = true;
            try {
                const { files, searchTerm } = this.plugin.getPluginState();
                const response = await this.provider.search(searchTerm, query);
                _classPrivateFieldLooseBase(this, _updateFilesAndInputMode)[_updateFilesAndInputMode](response, files);
            } catch (error) {
                this.handleError(error);
            } finally{
                this.isHandlingScroll = false;
            }
        }
    }
    donePicking() {
        const { currentSelection } = this.plugin.getPluginState();
        this.plugin.uppy.log("Adding remote search provider files");
        this.plugin.uppy.addFiles(currentSelection.map((file)=>this.getTagFile(file)));
        this.resetPluginState();
    }
    render(state, viewOptions) {
        var _this = this;
        if (viewOptions === void 0) viewOptions = {};
        const { didFirstRender, isInputMode, searchTerm } = this.plugin.getPluginState();
        const { i18n } = this.plugin.uppy;
        if (!didFirstRender) this.preFirstRender();
        const targetViewOptions = {
            ...this.opts,
            ...viewOptions
        };
        const { files, folders, filterInput, loading, currentSelection } = this.plugin.getPluginState();
        const { isChecked, toggleCheckbox, filterItems, recordShiftKeyPress } = this;
        const hasInput = filterInput !== "";
        const browserProps = {
            isChecked,
            toggleCheckbox,
            recordShiftKeyPress,
            currentSelection,
            files: hasInput ? filterItems(files) : files,
            folders: hasInput ? filterItems(folders) : folders,
            handleScroll: this.handleScroll,
            done: this.donePicking,
            cancel: this.cancelPicking,
            // For SearchFilterInput component
            showSearchFilter: targetViewOptions.showFilter,
            search: this.search,
            clearSearch: this.clearSearch,
            searchTerm,
            searchOnInput: false,
            searchInputLabel: i18n("search"),
            clearSearchLabel: i18n("resetSearch"),
            noResultsLabel: i18n("noSearchResults"),
            title: this.plugin.title,
            viewType: targetViewOptions.viewType,
            showTitles: targetViewOptions.showTitles,
            showFilter: targetViewOptions.showFilter,
            isLoading: loading,
            showBreadcrumbs: targetViewOptions.showBreadcrumbs,
            pluginIcon: this.plugin.icon,
            i18n,
            uppyFiles: this.plugin.uppy.getFiles(),
            validateRestrictions: function() {
                return _this.plugin.uppy.validateRestrictions(...arguments);
            }
        };
        if (isInputMode) return (0, _preact.h)((0, _closeWrapperJsDefault.default), {
            onUnmount: this.resetPluginState
        }, (0, _preact.h)("div", {
            className: "uppy-SearchProvider"
        }, (0, _preact.h)((0, _searchFilterInputJsDefault.default), {
            search: this.search,
            clearSelection: this.clearSelection,
            inputLabel: i18n("enterTextToSearch"),
            buttonLabel: i18n("searchImages"),
            inputClassName: "uppy-c-textInput uppy-SearchProvider-input",
            buttonCSSClassName: "uppy-SearchProvider-searchButton",
            showButton: true
        })));
        return (0, _preact.h)((0, _closeWrapperJsDefault.default), {
            onUnmount: this.resetPluginState
        }, (0, _preact.h)((0, _browserJsDefault.default), browserProps));
    }
}
exports.default = SearchProviderView;
function _updateFilesAndInputMode2(res, files) {
    this.nextPageQuery = res.nextPageQuery;
    res.items.forEach((item)=>{
        files.push(item);
    });
    this.plugin.setPluginState({
        currentSelection: [],
        isInputMode: false,
        files,
        searchTerm: res.searchedFor
    });
}
SearchProviderView.VERSION = packageJson.version;

},{"preact":"26zcy","../SearchFilterInput.js":"XI8jz","../Browser.js":"gv99t","../CloseWrapper.js":"hWaNK","../View.js":"97Pp8","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"ajWd5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>memoizeOne);
var safeIsNaN = Number.isNaN || function ponyfill(value) {
    return typeof value === "number" && value !== value;
};
function isEqual(first, second) {
    if (first === second) return true;
    if (safeIsNaN(first) && safeIsNaN(second)) return true;
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) return false;
    for(var i = 0; i < newInputs.length; i++){
        if (!isEqual(newInputs[i], lastInputs[i])) return false;
    }
    return true;
}
function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) isEqual = areInputsEqual;
    var cache = null;
    function memoized() {
        var newArgs = [];
        for(var _i = 0; _i < arguments.length; _i++)newArgs[_i] = arguments[_i];
        if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) return cache.lastResult;
        var lastResult = resultFn.apply(this, newArgs);
        cache = {
            lastResult: lastResult,
            lastArgs: newArgs,
            lastThis: this
        };
        return lastResult;
    }
    memoized.clear = function clear() {
        cache = null;
    };
    return memoized;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"8EP9J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Traps focus inside of the currently open overlay (e.g. Dashboard, or e.g. Instagram),
// never lets focus disappear from the modal.
parcelHelpers.export(exports, "forModal", ()=>trapFocus);
// Traps focus inside of the currently open overlay, unless overlay is null - then let the user tab away.
parcelHelpers.export(exports, "forInline", ()=>forInline);
var _toArray = require("@uppy/utils/lib/toArray");
var _toArrayDefault = parcelHelpers.interopDefault(_toArray);
var _focusableElements = require("@uppy/utils/lib/FOCUSABLE_ELEMENTS");
var _focusableElementsDefault = parcelHelpers.interopDefault(_focusableElements);
var _getActiveOverlayElJs = require("./getActiveOverlayEl.js");
var _getActiveOverlayElJsDefault = parcelHelpers.interopDefault(_getActiveOverlayElJs);
function focusOnFirstNode(event, nodes) {
    const node = nodes[0];
    if (node) {
        node.focus();
        event.preventDefault();
    }
}
function focusOnLastNode(event, nodes) {
    const node = nodes[nodes.length - 1];
    if (node) {
        node.focus();
        event.preventDefault();
    }
}
// ___Why not just use (focusedItemIndex === -1)?
//    Firefox thinks <ul> is focusable, but we don't have <ul>s in our FOCUSABLE_ELEMENTS. Which means that if we tab into
//    the <ul>, code will think that we are not in the active overlay, and we should focusOnFirstNode() of the currently
//    active overlay!
//    [Practical check] if we use (focusedItemIndex === -1), instagram provider in firefox will never get focus on its pics
//    in the <ul>.
function isFocusInOverlay(activeOverlayEl) {
    return activeOverlayEl.contains(document.activeElement);
}
function trapFocus(event, activeOverlayType, dashboardEl) {
    const activeOverlayEl = (0, _getActiveOverlayElJsDefault.default)(dashboardEl, activeOverlayType);
    const focusableNodes = (0, _toArrayDefault.default)(activeOverlayEl.querySelectorAll((0, _focusableElementsDefault.default)));
    const focusedItemIndex = focusableNodes.indexOf(document.activeElement);
    // If we pressed tab, and focus is not yet within the current overlay - focus on
    // the first element within the current overlay.
    // This is a safety measure (for when user returns from another tab e.g.), most
    // plugins will try to focus on some important element as it loads.
    if (!isFocusInOverlay(activeOverlayEl)) focusOnFirstNode(event, focusableNodes);
    else if (event.shiftKey && focusedItemIndex === 0) focusOnLastNode(event, focusableNodes);
    else if (!event.shiftKey && focusedItemIndex === focusableNodes.length - 1) focusOnFirstNode(event, focusableNodes);
}
function forInline(event, activeOverlayType, dashboardEl) {
    // ___When we're in the bare 'Drop files here, paste, browse or import from' screen
    if (activeOverlayType === null) ;
    else // Trap the focus inside this overlay!
    // User can close the overlay (click 'Done') if they want to travel away from Uppy.
    trapFocus(event, activeOverlayType, dashboardEl);
}

},{"@uppy/utils/lib/toArray":"dNhb7","@uppy/utils/lib/FOCUSABLE_ELEMENTS":"90MW0","./getActiveOverlayEl.js":"iE9jr","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"90MW0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = [
    'a[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])',
    'area[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])',
    "input:not([disabled]):not([inert]):not([aria-hidden])",
    "select:not([disabled]):not([inert]):not([aria-hidden])",
    "textarea:not([disabled]):not([inert]):not([aria-hidden])",
    "button:not([disabled]):not([inert]):not([aria-hidden])",
    'iframe:not([tabindex^="-"]):not([inert]):not([aria-hidden])',
    'object:not([tabindex^="-"]):not([inert]):not([aria-hidden])',
    'embed:not([tabindex^="-"]):not([inert]):not([aria-hidden])',
    '[contenteditable]:not([tabindex^="-"]):not([inert]):not([aria-hidden])',
    '[tabindex]:not([tabindex^="-"]):not([inert]):not([aria-hidden])'
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"iE9jr":[function(require,module,exports) {
/**
 * @returns {HTMLElement} - either dashboard element, or the overlay that's most on top
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getActiveOverlayEl);
function getActiveOverlayEl(dashboardEl, activeOverlayType) {
    if (activeOverlayType) {
        const overlayEl = dashboardEl.querySelector(`[data-uppy-paneltype="${activeOverlayType}"]`);
        // if an overlay is already mounted
        if (overlayEl) return overlayEl;
    }
    return dashboardEl;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"cBIHv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>createSuperFocus);
var _debounceJs = require("lodash/debounce.js");
var _debounceJsDefault = parcelHelpers.interopDefault(_debounceJs);
var _focusableElements = require("@uppy/utils/lib/FOCUSABLE_ELEMENTS");
var _focusableElementsDefault = parcelHelpers.interopDefault(_focusableElements);
var _getActiveOverlayElJs = require("./getActiveOverlayEl.js");
var _getActiveOverlayElJsDefault = parcelHelpers.interopDefault(_getActiveOverlayElJs);
function createSuperFocus() {
    let lastFocusWasOnSuperFocusableEl = false;
    const superFocus = (dashboardEl, activeOverlayType)=>{
        const overlayEl = (0, _getActiveOverlayElJsDefault.default)(dashboardEl, activeOverlayType);
        const isFocusInOverlay = overlayEl.contains(document.activeElement);
        // If focus is already in the topmost overlay, AND on last update we focused on the superfocusable
        // element - then leave focus up to the user.
        // [Practical check] without this line, typing in the search input in googledrive overlay won't work.
        if (isFocusInOverlay && lastFocusWasOnSuperFocusableEl) return;
        const superFocusableEl = overlayEl.querySelector("[data-uppy-super-focusable]");
        // If we are already in the topmost overlay, AND there are no super focusable elements yet, - leave focus up to the user.
        // [Practical check] without this line, if you are in an empty folder in google drive, and something's uploading in the
        // bg, - focus will be jumping to Done all the time.
        if (isFocusInOverlay && !superFocusableEl) return;
        if (superFocusableEl) {
            superFocusableEl.focus({
                preventScroll: true
            });
            lastFocusWasOnSuperFocusableEl = true;
        } else {
            const firstEl = overlayEl.querySelector((0, _focusableElementsDefault.default));
            firstEl == null || firstEl.focus({
                preventScroll: true
            });
            lastFocusWasOnSuperFocusableEl = false;
        }
    };
    // ___Why do we need to debounce?
    //    1. To deal with animations: overlay changes via animations, which results in the DOM updating AFTER plugin.update()
    //       already executed.
    //    [Practical check] without debounce, if we open the Url overlay, and click 'Done', Dashboard won't get focused again.
    //    [Practical check] if we delay 250ms instead of 260ms - IE11 won't get focused in same situation.
    //    2. Performance: there can be many state update()s in a second, and this function is called every time.
    return (0, _debounceJsDefault.default)(superFocus, 260);
}

},{"lodash/debounce.js":"bv6vy","@uppy/utils/lib/FOCUSABLE_ELEMENTS":"90MW0","./getActiveOverlayEl.js":"iE9jr","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"jYTp2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Dashboard);
var _preact = require("preact");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _isDragDropSupported = require("@uppy/utils/lib/isDragDropSupported");
var _isDragDropSupportedDefault = parcelHelpers.interopDefault(_isDragDropSupported);
var _fileListJs = require("./FileList.js");
var _fileListJsDefault = parcelHelpers.interopDefault(_fileListJs);
var _addFilesJs = require("./AddFiles.js");
var _addFilesJsDefault = parcelHelpers.interopDefault(_addFilesJs);
var _addFilesPanelJs = require("./AddFilesPanel.js");
var _addFilesPanelJsDefault = parcelHelpers.interopDefault(_addFilesPanelJs);
var _pickerPanelContentJs = require("./PickerPanelContent.js");
var _pickerPanelContentJsDefault = parcelHelpers.interopDefault(_pickerPanelContentJs);
var _editorPanelJs = require("./EditorPanel.js");
var _editorPanelJsDefault = parcelHelpers.interopDefault(_editorPanelJs);
var _pickerPanelTopBarJs = require("./PickerPanelTopBar.js");
var _pickerPanelTopBarJsDefault = parcelHelpers.interopDefault(_pickerPanelTopBarJs);
var _indexJs = require("./FileCard/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _slideJs = require("./Slide.js");
var _slideJsDefault = parcelHelpers.interopDefault(_slideJs);
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
// http://dev.edenspiekermann.com/2016/02/11/introducing-accessible-modal-dialog
// https://github.com/ghosh/micromodal
const WIDTH_XL = 900;
const WIDTH_LG = 700;
const WIDTH_MD = 576;
const HEIGHT_MD = 330;
function Dashboard(props) {
    const isNoFiles = props.totalFileCount === 0;
    const isSingleFile = props.totalFileCount === 1;
    const isSizeMD = props.containerWidth > WIDTH_MD;
    const isSizeHeightMD = props.containerHeight > HEIGHT_MD;
    const dashboardClassName = (0, _classnamesDefault.default)({
        "uppy-Dashboard": true,
        "uppy-Dashboard--isDisabled": props.disabled,
        "uppy-Dashboard--animateOpenClose": props.animateOpenClose,
        "uppy-Dashboard--isClosing": props.isClosing,
        "uppy-Dashboard--isDraggingOver": props.isDraggingOver,
        "uppy-Dashboard--modal": !props.inline,
        "uppy-size--md": props.containerWidth > WIDTH_MD,
        "uppy-size--lg": props.containerWidth > WIDTH_LG,
        "uppy-size--xl": props.containerWidth > WIDTH_XL,
        "uppy-size--height-md": props.containerHeight > HEIGHT_MD,
        // We might want to enable this in the future
        // 'uppy-size--height-lg': props.containerHeight > HEIGHT_LG,
        // 'uppy-size--height-xl': props.containerHeight > HEIGHT_XL,
        "uppy-Dashboard--isAddFilesPanelVisible": props.showAddFilesPanel,
        "uppy-Dashboard--isInnerWrapVisible": props.areInsidesReadyToBeVisible,
        // Only enable “centered single file” mode when Dashboard is tall enough
        "uppy-Dashboard--singleFile": props.singleFileFullScreen && isSingleFile && isSizeHeightMD
    });
    // Important: keep these in sync with the percent width values in `src/components/FileItem/index.scss`.
    let itemsPerRow = 1; // mobile
    if (props.containerWidth > WIDTH_XL) itemsPerRow = 5;
    else if (props.containerWidth > WIDTH_LG) itemsPerRow = 4;
    else if (props.containerWidth > WIDTH_MD) itemsPerRow = 3;
    const showFileList = props.showSelectedFiles && !isNoFiles;
    const numberOfFilesForRecovery = props.recoveredState ? Object.keys(props.recoveredState.files).length : null;
    const numberOfGhosts = props.files ? Object.keys(props.files).filter((fileID)=>props.files[fileID].isGhost).length : null;
    const renderRestoredText = ()=>{
        if (numberOfGhosts > 0) return props.i18n("recoveredXFiles", {
            smart_count: numberOfGhosts
        });
        return props.i18n("recoveredAllFiles");
    };
    const dashboard = (0, _preact.h)("div", {
        className: dashboardClassName,
        "data-uppy-theme": props.theme,
        "data-uppy-num-acquirers": props.acquirers.length,
        "data-uppy-drag-drop-supported": !props.disableLocalFiles && (0, _isDragDropSupportedDefault.default)(),
        "aria-hidden": props.inline ? "false" : props.isHidden,
        "aria-disabled": props.disabled,
        "aria-label": !props.inline ? props.i18n("dashboardWindowTitle") : props.i18n("dashboardTitle"),
        onPaste: props.handlePaste,
        onDragOver: props.handleDragOver,
        onDragLeave: props.handleDragLeave,
        onDrop: props.handleDrop
    }, (0, _preact.h)("div", {
        "aria-hidden": "true",
        className: "uppy-Dashboard-overlay",
        tabIndex: -1,
        onClick: props.handleClickOutside
    }), (0, _preact.h)("div", {
        className: "uppy-Dashboard-inner",
        "aria-modal": !props.inline && "true",
        role: !props.inline && "dialog",
        style: {
            width: props.inline && props.width ? props.width : "",
            height: props.inline && props.height ? props.height : ""
        }
    }, !props.inline ? (0, _preact.h)("button", {
        className: "uppy-u-reset uppy-Dashboard-close",
        type: "button",
        "aria-label": props.i18n("closeModal"),
        title: props.i18n("closeModal"),
        onClick: props.closeModal
    }, (0, _preact.h)("span", {
        "aria-hidden": "true"
    }, "\xd7")) : null, (0, _preact.h)("div", {
        className: "uppy-Dashboard-innerWrap"
    }, (0, _preact.h)("div", {
        className: "uppy-Dashboard-dropFilesHereHint"
    }, props.i18n("dropHint")), showFileList && (0, _preact.h)((0, _pickerPanelTopBarJsDefault.default), props), numberOfFilesForRecovery && (0, _preact.h)("div", {
        className: "uppy-Dashboard-serviceMsg"
    }, (0, _preact.h)("svg", {
        className: "uppy-Dashboard-serviceMsg-icon",
        "aria-hidden": "true",
        focusable: "false",
        width: "21",
        height: "16",
        viewBox: "0 0 24 19"
    }, (0, _preact.h)("g", {
        transform: "translate(0 -1)",
        fill: "none",
        fillRule: "evenodd"
    }, (0, _preact.h)("path", {
        d: "M12.857 1.43l10.234 17.056A1 1 0 0122.234 20H1.766a1 1 0 01-.857-1.514L11.143 1.429a1 1 0 011.714 0z",
        fill: "#FFD300"
    }), (0, _preact.h)("path", {
        fill: "#000",
        d: "M11 6h2l-.3 8h-1.4z"
    }), (0, _preact.h)("circle", {
        fill: "#000",
        cx: "12",
        cy: "17",
        r: "1"
    }))), (0, _preact.h)("strong", {
        className: "uppy-Dashboard-serviceMsg-title"
    }, props.i18n("sessionRestored")), (0, _preact.h)("div", {
        className: "uppy-Dashboard-serviceMsg-text"
    }, renderRestoredText())), showFileList ? (0, _preact.h)((0, _fileListJsDefault.default), {
        id: props.id,
        error: props.error,
        i18n: props.i18n,
        uppy: props.uppy,
        files: props.files,
        acquirers: props.acquirers,
        resumableUploads: props.resumableUploads,
        hideRetryButton: props.hideRetryButton,
        hidePauseResumeButton: props.hidePauseResumeButton,
        hideCancelButton: props.hideCancelButton,
        showLinkToFileUploadResult: props.showLinkToFileUploadResult,
        showRemoveButtonAfterComplete: props.showRemoveButtonAfterComplete,
        isWide: props.isWide,
        metaFields: props.metaFields,
        toggleFileCard: props.toggleFileCard,
        handleRequestThumbnail: props.handleRequestThumbnail,
        handleCancelThumbnail: props.handleCancelThumbnail,
        recoveredState: props.recoveredState,
        individualCancellation: props.individualCancellation,
        openFileEditor: props.openFileEditor,
        canEditFile: props.canEditFile,
        toggleAddFilesPanel: props.toggleAddFilesPanel,
        isSingleFile: isSingleFile,
        itemsPerRow: itemsPerRow
    }) : // eslint-disable-next-line react/jsx-props-no-spreading
    (0, _preact.h)((0, _addFilesJsDefault.default), _extends({}, props, {
        isSizeMD: isSizeMD
    })), (0, _preact.h)((0, _slideJsDefault.default), null, props.showAddFilesPanel ? (0, _preact.h)((0, _addFilesPanelJsDefault.default), _extends({
        key: "AddFiles"
    }, props, {
        isSizeMD: isSizeMD
    })) : null), (0, _preact.h)((0, _slideJsDefault.default), null, props.fileCardFor ? (0, _preact.h)((0, _indexJsDefault.default), _extends({
        key: "FileCard"
    }, props)) : null), (0, _preact.h)((0, _slideJsDefault.default), null, props.activePickerPanel ? (0, _preact.h)((0, _pickerPanelContentJsDefault.default), _extends({
        key: "Picker"
    }, props)) : null), (0, _preact.h)((0, _slideJsDefault.default), null, props.showFileEditor ? (0, _preact.h)((0, _editorPanelJsDefault.default), _extends({
        key: "Editor"
    }, props)) : null), (0, _preact.h)("div", {
        className: "uppy-Dashboard-progressindicators"
    }, props.progressindicators.map((target)=>{
        return props.uppy.getPlugin(target.id).render(props.state);
    })))));
    return dashboard;
}

},{"preact":"26zcy","classnames":"jocGM","@uppy/utils/lib/isDragDropSupported":"6HDaW","./FileList.js":"2J8Ll","./AddFiles.js":"k9J6m","./AddFilesPanel.js":"1WaAU","./PickerPanelContent.js":"ensLV","./EditorPanel.js":"hMrcr","./PickerPanelTopBar.js":"bWlc7","./FileCard/index.js":"9INb2","./Slide.js":"bxIi0","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"6HDaW":[function(require,module,exports) {
/**
 * Checks if the browser supports Drag & Drop (not supported on mobile devices, for example).
 *
 * @returns {boolean}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isDragDropSupported);
function isDragDropSupported() {
    const div = document.body;
    if (!("draggable" in div) || !("ondragstart" in div && "ondrop" in div)) return false;
    if (!("FormData" in window)) return false;
    if (!("FileReader" in window)) return false;
    return true;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"2J8Ll":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
var _hooks = require("preact/hooks");
var _virtualList = require("@uppy/utils/lib/VirtualList");
var _virtualListDefault = parcelHelpers.interopDefault(_virtualList);
var _indexJs = require("./FileItem/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function chunks(list, size) {
    const chunked = [];
    let currentChunk = [];
    list.forEach((item)=>{
        if (currentChunk.length < size) currentChunk.push(item);
        else {
            chunked.push(currentChunk);
            currentChunk = [
                item
            ];
        }
    });
    if (currentChunk.length) chunked.push(currentChunk);
    return chunked;
}
exports.default = (_ref)=>{
    let { id, error, i18n, uppy, files, acquirers, resumableUploads, hideRetryButton, hidePauseResumeButton, hideCancelButton, showLinkToFileUploadResult, showRemoveButtonAfterComplete, isWide, metaFields, isSingleFile, toggleFileCard, handleRequestThumbnail, handleCancelThumbnail, recoveredState, individualCancellation, itemsPerRow, openFileEditor, canEditFile, toggleAddFilesPanel, containerWidth, containerHeight } = _ref;
    // It's not great that this is hardcoded!
    // It's ESPECIALLY not great that this is checking against `itemsPerRow`!
    const rowHeight = itemsPerRow === 1 ? 71 : 200;
    // Sort files by file.isGhost, ghost files first, only if recoveredState is present
    const rows = (0, _hooks.useMemo)(()=>{
        const sortByGhostComesFirst = (file1, file2)=>files[file2].isGhost - files[file1].isGhost;
        const fileIds = Object.keys(files);
        if (recoveredState) fileIds.sort(sortByGhostComesFirst);
        return chunks(fileIds, itemsPerRow);
    }, [
        files,
        itemsPerRow,
        recoveredState
    ]);
    const renderRow = (row)=>// The `role="presentation` attribute ensures that the list items are properly
        // associated with the `VirtualList` element.
        // We use the first file ID as the key—this should not change across scroll rerenders
        (0, _preact.h)("div", {
            class: "uppy-Dashboard-filesInner",
            role: "presentation",
            key: row[0]
        }, row.map((fileID)=>(0, _preact.h)((0, _indexJsDefault.default), {
                key: fileID,
                uppy: uppy,
                id: id,
                error: error,
                i18n: i18n,
                acquirers: acquirers,
                resumableUploads: resumableUploads,
                individualCancellation: individualCancellation,
                hideRetryButton: hideRetryButton,
                hidePauseResumeButton: hidePauseResumeButton,
                hideCancelButton: hideCancelButton,
                showLinkToFileUploadResult: showLinkToFileUploadResult,
                showRemoveButtonAfterComplete: showRemoveButtonAfterComplete,
                isWide: isWide,
                metaFields: metaFields,
                recoveredState: recoveredState,
                isSingleFile: isSingleFile,
                containerWidth: containerWidth,
                containerHeight: containerHeight,
                toggleFileCard: toggleFileCard,
                handleRequestThumbnail: handleRequestThumbnail,
                handleCancelThumbnail: handleCancelThumbnail,
                role: "listitem",
                openFileEditor: openFileEditor,
                canEditFile: canEditFile,
                toggleAddFilesPanel: toggleAddFilesPanel,
                file: files[fileID]
            })));
    if (isSingleFile) return (0, _preact.h)("div", {
        class: "uppy-Dashboard-files"
    }, renderRow(rows[0]));
    return (0, _preact.h)((0, _virtualListDefault.default), {
        class: "uppy-Dashboard-files",
        role: "list",
        data: rows,
        renderRow: renderRow,
        rowHeight: rowHeight
    });
};

},{"preact":"26zcy","preact/hooks":"eZN76","@uppy/utils/lib/VirtualList":"a0n20","./FileItem/index.js":"bZmZu","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"bZmZu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _isShallowEqual = require("is-shallow-equal");
var _isShallowEqualDefault = parcelHelpers.interopDefault(_isShallowEqual);
var _indexJs = require("./FilePreviewAndLink/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("./FileProgress/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("./FileInfo/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("./Buttons/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
class FileItem extends (0, _preact.Component) {
    componentDidMount() {
        const { file } = this.props;
        if (!file.preview) this.props.handleRequestThumbnail(file);
    }
    shouldComponentUpdate(nextProps) {
        return !(0, _isShallowEqualDefault.default)(this.props, nextProps);
    }
    // VirtualList mounts FileItems again and they emit `thumbnail:request`
    // Otherwise thumbnails are broken or missing after Golden Retriever restores files
    componentDidUpdate() {
        const { file } = this.props;
        if (!file.preview) this.props.handleRequestThumbnail(file);
    }
    componentWillUnmount() {
        const { file } = this.props;
        if (!file.preview) this.props.handleCancelThumbnail(file);
    }
    render() {
        const { file } = this.props;
        const isProcessing = file.progress.preprocess || file.progress.postprocess;
        const isUploaded = file.progress.uploadComplete && !isProcessing && !file.error;
        const uploadInProgressOrComplete = file.progress.uploadStarted || isProcessing;
        const uploadInProgress = file.progress.uploadStarted && !file.progress.uploadComplete || isProcessing;
        const error = file.error || false;
        // File that Golden Retriever was able to partly restore (only meta, not blob),
        // users still need to re-add it, so it’s a ghost
        const { isGhost } = file;
        let showRemoveButton = this.props.individualCancellation ? !isUploaded : !uploadInProgress && !isUploaded;
        if (isUploaded && this.props.showRemoveButtonAfterComplete) showRemoveButton = true;
        const dashboardItemClass = (0, _classnamesDefault.default)({
            "uppy-Dashboard-Item": true,
            "is-inprogress": uploadInProgress && !this.props.recoveredState,
            "is-processing": isProcessing,
            "is-complete": isUploaded,
            "is-error": !!error,
            "is-resumable": this.props.resumableUploads,
            "is-noIndividualCancellation": !this.props.individualCancellation,
            "is-ghost": isGhost
        });
        return (0, _preact.h)("div", {
            className: dashboardItemClass,
            id: `uppy_${file.id}`,
            role: this.props.role
        }, (0, _preact.h)("div", {
            className: "uppy-Dashboard-Item-preview"
        }, (0, _preact.h)((0, _indexJsDefault.default), {
            file: file,
            showLinkToFileUploadResult: this.props.showLinkToFileUploadResult,
            i18n: this.props.i18n,
            toggleFileCard: this.props.toggleFileCard,
            metaFields: this.props.metaFields
        }), (0, _preact.h)((0, _indexJsDefault1.default), {
            uppy: this.props.uppy,
            file: file,
            error: error,
            isUploaded: isUploaded,
            hideRetryButton: this.props.hideRetryButton,
            hideCancelButton: this.props.hideCancelButton,
            hidePauseResumeButton: this.props.hidePauseResumeButton,
            recoveredState: this.props.recoveredState,
            showRemoveButtonAfterComplete: this.props.showRemoveButtonAfterComplete,
            resumableUploads: this.props.resumableUploads,
            individualCancellation: this.props.individualCancellation,
            i18n: this.props.i18n
        })), (0, _preact.h)("div", {
            className: "uppy-Dashboard-Item-fileInfoAndButtons"
        }, (0, _preact.h)((0, _indexJsDefault2.default), {
            file: file,
            id: this.props.id,
            acquirers: this.props.acquirers,
            containerWidth: this.props.containerWidth,
            containerHeight: this.props.containerHeight,
            i18n: this.props.i18n,
            toggleAddFilesPanel: this.props.toggleAddFilesPanel,
            toggleFileCard: this.props.toggleFileCard,
            metaFields: this.props.metaFields,
            isSingleFile: this.props.isSingleFile
        }), (0, _preact.h)((0, _indexJsDefault3.default), {
            file: file,
            metaFields: this.props.metaFields,
            showLinkToFileUploadResult: this.props.showLinkToFileUploadResult,
            showRemoveButton: showRemoveButton,
            canEditFile: this.props.canEditFile,
            uploadInProgressOrComplete: uploadInProgressOrComplete,
            toggleFileCard: this.props.toggleFileCard,
            openFileEditor: this.props.openFileEditor,
            uppy: this.props.uppy,
            i18n: this.props.i18n
        })));
    }
}
exports.default = FileItem;

},{"preact":"26zcy","classnames":"jocGM","is-shallow-equal":"89gFr","./FilePreviewAndLink/index.js":"ibdCs","./FileProgress/index.js":"dX7tW","./FileInfo/index.js":"hCYts","./Buttons/index.js":"C500d","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"89gFr":[function(require,module,exports) {
module.exports = function isShallowEqual(a, b) {
    if (a === b) return true;
    for(var i in a)if (!(i in b)) return false;
    for(var i in b)if (a[i] !== b[i]) return false;
    return true;
};

},{}],"ibdCs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>FilePreviewAndLink);
var _preact = require("preact");
var _filePreviewJs = require("../../FilePreview.js");
var _filePreviewJsDefault = parcelHelpers.interopDefault(_filePreviewJs);
var _metaErrorMessageJs = require("../MetaErrorMessage.js");
var _metaErrorMessageJsDefault = parcelHelpers.interopDefault(_metaErrorMessageJs);
var _getFileTypeIconJs = require("../../../utils/getFileTypeIcon.js");
var _getFileTypeIconJsDefault = parcelHelpers.interopDefault(_getFileTypeIconJs);
function FilePreviewAndLink(props) {
    const { file, i18n, toggleFileCard, metaFields, showLinkToFileUploadResult } = props;
    const white = "rgba(255, 255, 255, 0.5)";
    const previewBackgroundColor = file.preview ? white : (0, _getFileTypeIconJsDefault.default)(props.file.type).color;
    return (0, _preact.h)("div", {
        className: "uppy-Dashboard-Item-previewInnerWrap",
        style: {
            backgroundColor: previewBackgroundColor
        }
    }, showLinkToFileUploadResult && file.uploadURL && (0, _preact.h)("a", {
        className: "uppy-Dashboard-Item-previewLink",
        href: file.uploadURL,
        rel: "noreferrer noopener",
        target: "_blank",
        "aria-label": file.meta.name
    }, (0, _preact.h)("span", {
        hidden: true
    }, file.meta.name)), (0, _preact.h)((0, _filePreviewJsDefault.default), {
        file: file
    }), (0, _preact.h)((0, _metaErrorMessageJsDefault.default), {
        file: file,
        i18n: i18n,
        toggleFileCard: toggleFileCard,
        metaFields: metaFields
    }));
}

},{"preact":"26zcy","../../FilePreview.js":"gCySX","../MetaErrorMessage.js":"9mcUm","../../../utils/getFileTypeIcon.js":"eifNe","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"gCySX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>FilePreview);
var _preact = require("preact");
var _getFileTypeIconJs = require("../utils/getFileTypeIcon.js");
var _getFileTypeIconJsDefault = parcelHelpers.interopDefault(_getFileTypeIconJs);
function FilePreview(props) {
    const { file } = props;
    if (file.preview) return (0, _preact.h)("img", {
        className: "uppy-Dashboard-Item-previewImg",
        alt: file.name,
        src: file.preview
    });
    const { color, icon } = (0, _getFileTypeIconJsDefault.default)(file.type);
    return (0, _preact.h)("div", {
        className: "uppy-Dashboard-Item-previewIconWrap"
    }, (0, _preact.h)("span", {
        className: "uppy-Dashboard-Item-previewIcon",
        style: {
            color
        }
    }, icon), (0, _preact.h)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        className: "uppy-Dashboard-Item-previewIconBg",
        width: "58",
        height: "76",
        viewBox: "0 0 58 76"
    }, (0, _preact.h)("rect", {
        fill: "#FFF",
        width: "58",
        height: "76",
        rx: "3",
        fillRule: "evenodd"
    })));
}

},{"preact":"26zcy","../utils/getFileTypeIcon.js":"eifNe","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"eifNe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getIconByMime);
var _preact = require("preact");
function iconImage() {
    return (0, _preact.h)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        width: "25",
        height: "25",
        viewBox: "0 0 25 25"
    }, (0, _preact.h)("g", {
        fill: "#686DE0",
        fillRule: "evenodd"
    }, (0, _preact.h)("path", {
        d: "M5 7v10h15V7H5zm0-1h15a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z",
        fillRule: "nonzero"
    }), (0, _preact.h)("path", {
        d: "M6.35 17.172l4.994-5.026a.5.5 0 0 1 .707 0l2.16 2.16 3.505-3.505a.5.5 0 0 1 .707 0l2.336 2.31-.707.72-1.983-1.97-3.505 3.505a.5.5 0 0 1-.707 0l-2.16-2.159-3.938 3.939-1.409.026z",
        fillRule: "nonzero"
    }), (0, _preact.h)("circle", {
        cx: "7.5",
        cy: "9.5",
        r: "1.5"
    })));
}
function iconAudio() {
    return (0, _preact.h)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        className: "uppy-c-icon",
        width: "25",
        height: "25",
        viewBox: "0 0 25 25"
    }, (0, _preact.h)("path", {
        d: "M9.5 18.64c0 1.14-1.145 2-2.5 2s-2.5-.86-2.5-2c0-1.14 1.145-2 2.5-2 .557 0 1.079.145 1.5.396V7.25a.5.5 0 0 1 .379-.485l9-2.25A.5.5 0 0 1 18.5 5v11.64c0 1.14-1.145 2-2.5 2s-2.5-.86-2.5-2c0-1.14 1.145-2 2.5-2 .557 0 1.079.145 1.5.396V8.67l-8 2v7.97zm8-11v-2l-8 2v2l8-2zM7 19.64c.855 0 1.5-.484 1.5-1s-.645-1-1.5-1-1.5.484-1.5 1 .645 1 1.5 1zm9-2c.855 0 1.5-.484 1.5-1s-.645-1-1.5-1-1.5.484-1.5 1 .645 1 1.5 1z",
        fill: "#049BCF",
        fillRule: "nonzero"
    }));
}
function iconVideo() {
    return (0, _preact.h)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        className: "uppy-c-icon",
        width: "25",
        height: "25",
        viewBox: "0 0 25 25"
    }, (0, _preact.h)("path", {
        d: "M16 11.834l4.486-2.691A1 1 0 0 1 22 10v6a1 1 0 0 1-1.514.857L16 14.167V17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2.834zM15 9H5v8h10V9zm1 4l5 3v-6l-5 3z",
        fill: "#19AF67",
        fillRule: "nonzero"
    }));
}
function iconPDF() {
    return (0, _preact.h)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        className: "uppy-c-icon",
        width: "25",
        height: "25",
        viewBox: "0 0 25 25"
    }, (0, _preact.h)("path", {
        d: "M9.766 8.295c-.691-1.843-.539-3.401.747-3.726 1.643-.414 2.505.938 2.39 3.299-.039.79-.194 1.662-.537 3.148.324.49.66.967 1.055 1.51.17.231.382.488.629.757 1.866-.128 3.653.114 4.918.655 1.487.635 2.192 1.685 1.614 2.84-.566 1.133-1.839 1.084-3.416.249-1.141-.604-2.457-1.634-3.51-2.707a13.467 13.467 0 0 0-2.238.426c-1.392 4.051-4.534 6.453-5.707 4.572-.986-1.58 1.38-4.206 4.914-5.375.097-.322.185-.656.264-1.001.08-.353.306-1.31.407-1.737-.678-1.059-1.2-2.031-1.53-2.91zm2.098 4.87c-.033.144-.068.287-.104.427l.033-.01-.012.038a14.065 14.065 0 0 1 1.02-.197l-.032-.033.052-.004a7.902 7.902 0 0 1-.208-.271c-.197-.27-.38-.526-.555-.775l-.006.028-.002-.003c-.076.323-.148.632-.186.8zm5.77 2.978c1.143.605 1.832.632 2.054.187.26-.519-.087-1.034-1.113-1.473-.911-.39-2.175-.608-3.55-.608.845.766 1.787 1.459 2.609 1.894zM6.559 18.789c.14.223.693.16 1.425-.413.827-.648 1.61-1.747 2.208-3.206-2.563 1.064-4.102 2.867-3.633 3.62zm5.345-10.97c.088-1.793-.351-2.48-1.146-2.28-.473.119-.564 1.05-.056 2.405.213.566.52 1.188.908 1.859.18-.858.268-1.453.294-1.984z",
        fill: "#E2514A",
        fillRule: "nonzero"
    }));
}
function iconArchive() {
    return (0, _preact.h)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        width: "25",
        height: "25",
        viewBox: "0 0 25 25"
    }, (0, _preact.h)("path", {
        d: "M10.45 2.05h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5V2.55a.5.5 0 0 1 .5-.5zm2.05 1.024h1.05a.5.5 0 0 1 .5.5V3.6a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5v-.001zM10.45 0h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-2.05 3.074h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-2.05 1.024h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm-2.05 1.025h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-1.656 3.074l-.82 5.946c.52.302 1.174.458 1.976.458.803 0 1.455-.156 1.975-.458l-.82-5.946h-2.311zm0-1.025h2.312c.512 0 .946.378 1.015.885l.82 5.946c.056.412-.142.817-.501 1.026-.686.398-1.515.597-2.49.597-.974 0-1.804-.199-2.49-.597a1.025 1.025 0 0 1-.5-1.026l.819-5.946c.07-.507.503-.885 1.015-.885zm.545 6.6a.5.5 0 0 1-.397-.561l.143-.999a.5.5 0 0 1 .495-.429h.74a.5.5 0 0 1 .495.43l.143.998a.5.5 0 0 1-.397.561c-.404.08-.819.08-1.222 0z",
        fill: "#00C469",
        fillRule: "nonzero"
    }));
}
function iconFile() {
    return (0, _preact.h)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        className: "uppy-c-icon",
        width: "25",
        height: "25",
        viewBox: "0 0 25 25"
    }, (0, _preact.h)("g", {
        fill: "#A7AFB7",
        fillRule: "nonzero"
    }, (0, _preact.h)("path", {
        d: "M5.5 22a.5.5 0 0 1-.5-.5v-18a.5.5 0 0 1 .5-.5h10.719a.5.5 0 0 1 .367.16l3.281 3.556a.5.5 0 0 1 .133.339V21.5a.5.5 0 0 1-.5.5h-14zm.5-1h13V7.25L16 4H6v17z"
    }), (0, _preact.h)("path", {
        d: "M15 4v3a1 1 0 0 0 1 1h3V7h-3V4h-1z"
    })));
}
function iconText() {
    return (0, _preact.h)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        className: "uppy-c-icon",
        width: "25",
        height: "25",
        viewBox: "0 0 25 25"
    }, (0, _preact.h)("path", {
        d: "M4.5 7h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1 0-1zm0 3h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 3h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 3h10a.5.5 0 1 1 0 1h-10a.5.5 0 1 1 0-1z",
        fill: "#5A5E69",
        fillRule: "nonzero"
    }));
}
function getIconByMime(fileType) {
    const defaultChoice = {
        color: "#838999",
        icon: iconFile()
    };
    if (!fileType) return defaultChoice;
    const fileTypeGeneral = fileType.split("/")[0];
    const fileTypeSpecific = fileType.split("/")[1];
    // Text
    if (fileTypeGeneral === "text") return {
        color: "#5a5e69",
        icon: iconText()
    };
    // Image
    if (fileTypeGeneral === "image") return {
        color: "#686de0",
        icon: iconImage()
    };
    // Audio
    if (fileTypeGeneral === "audio") return {
        color: "#068dbb",
        icon: iconAudio()
    };
    // Video
    if (fileTypeGeneral === "video") return {
        color: "#19af67",
        icon: iconVideo()
    };
    // PDF
    if (fileTypeGeneral === "application" && fileTypeSpecific === "pdf") return {
        color: "#e25149",
        icon: iconPDF()
    };
    // Archive
    const archiveTypes = [
        "zip",
        "x-7z-compressed",
        "x-rar-compressed",
        "x-tar",
        "x-gzip",
        "x-apple-diskimage"
    ];
    if (fileTypeGeneral === "application" && archiveTypes.indexOf(fileTypeSpecific) !== -1) return {
        color: "#00C469",
        icon: iconArchive()
    };
    return defaultChoice;
}

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"9mcUm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>renderMissingMetaFieldsError);
var _preact = require("preact");
const metaFieldIdToName = (metaFieldId, metaFields)=>{
    const fields = typeof metaFields === "function" ? metaFields() : metaFields;
    const field = fields.filter((f)=>f.id === metaFieldId);
    return field[0].name;
};
function renderMissingMetaFieldsError(props) {
    const { file, toggleFileCard, i18n, metaFields } = props;
    const { missingRequiredMetaFields } = file;
    if (!(missingRequiredMetaFields != null && missingRequiredMetaFields.length)) return null;
    const metaFieldsString = missingRequiredMetaFields.map((missingMetaField)=>metaFieldIdToName(missingMetaField, metaFields)).join(", ");
    return (0, _preact.h)("div", {
        className: "uppy-Dashboard-Item-errorMessage"
    }, i18n("missingRequiredMetaFields", {
        smart_count: missingRequiredMetaFields.length,
        fields: metaFieldsString
    }), " ", (0, _preact.h)("button", {
        type: "button",
        class: "uppy-u-reset uppy-Dashboard-Item-errorMessageBtn",
        onClick: ()=>toggleFileCard(true, file.id)
    }, i18n("editFile")));
}

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"dX7tW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>FileProgress);
var _preact = require("preact");
function onPauseResumeCancelRetry(props) {
    if (props.isUploaded) return;
    if (props.error && !props.hideRetryButton) {
        props.uppy.retryUpload(props.file.id);
        return;
    }
    if (props.resumableUploads && !props.hidePauseResumeButton) props.uppy.pauseResume(props.file.id);
    else if (props.individualCancellation && !props.hideCancelButton) props.uppy.removeFile(props.file.id);
}
function progressIndicatorTitle(props) {
    if (props.isUploaded) return props.i18n("uploadComplete");
    if (props.error) return props.i18n("retryUpload");
    if (props.resumableUploads) {
        if (props.file.isPaused) return props.i18n("resumeUpload");
        return props.i18n("pauseUpload");
    }
    if (props.individualCancellation) return props.i18n("cancelUpload");
    return "";
}
function ProgressIndicatorButton(props) {
    return (0, _preact.h)("div", {
        className: "uppy-Dashboard-Item-progress"
    }, (0, _preact.h)("button", {
        className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-progressIndicator",
        type: "button",
        "aria-label": progressIndicatorTitle(props),
        title: progressIndicatorTitle(props),
        onClick: ()=>onPauseResumeCancelRetry(props)
    }, props.children));
}
function ProgressCircleContainer(_ref) {
    let { children } = _ref;
    return (0, _preact.h)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        width: "70",
        height: "70",
        viewBox: "0 0 36 36",
        className: "uppy-c-icon uppy-Dashboard-Item-progressIcon--circle"
    }, children);
}
function ProgressCircle(_ref2) {
    let { progress } = _ref2;
    // circle length equals 2 * PI * R
    const circleLength = 2 * Math.PI * 15;
    return (0, _preact.h)("g", null, (0, _preact.h)("circle", {
        className: "uppy-Dashboard-Item-progressIcon--bg",
        r: "15",
        cx: "18",
        cy: "18",
        "stroke-width": "2",
        fill: "none"
    }), (0, _preact.h)("circle", {
        className: "uppy-Dashboard-Item-progressIcon--progress",
        r: "15",
        cx: "18",
        cy: "18",
        transform: "rotate(-90, 18, 18)",
        fill: "none",
        "stroke-width": "2",
        "stroke-dasharray": circleLength,
        "stroke-dashoffset": circleLength - circleLength / 100 * progress
    }));
}
function FileProgress(props) {
    // Nothing if upload has not started
    if (!props.file.progress.uploadStarted) return null;
    // Green checkmark when complete
    if (props.isUploaded) return (0, _preact.h)("div", {
        className: "uppy-Dashboard-Item-progress"
    }, (0, _preact.h)("div", {
        className: "uppy-Dashboard-Item-progressIndicator"
    }, (0, _preact.h)(ProgressCircleContainer, null, (0, _preact.h)("circle", {
        r: "15",
        cx: "18",
        cy: "18",
        fill: "#1bb240"
    }), (0, _preact.h)("polygon", {
        className: "uppy-Dashboard-Item-progressIcon--check",
        transform: "translate(2, 3)",
        points: "14 22.5 7 15.2457065 8.99985857 13.1732815 14 18.3547104 22.9729883 9 25 11.1005634"
    }))));
    if (props.recoveredState) return undefined;
    // Retry button for error
    if (props.error && !props.hideRetryButton) return(// eslint-disable-next-line react/jsx-props-no-spreading
    (0, _preact.h)(ProgressIndicatorButton, props, (0, _preact.h)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        className: "uppy-c-icon uppy-Dashboard-Item-progressIcon--retry",
        width: "28",
        height: "31",
        viewBox: "0 0 16 19"
    }, (0, _preact.h)("path", {
        d: "M16 11a8 8 0 1 1-8-8v2a6 6 0 1 0 6 6h2z"
    }), (0, _preact.h)("path", {
        d: "M7.9 3H10v2H7.9z"
    }), (0, _preact.h)("path", {
        d: "M8.536.5l3.535 3.536-1.414 1.414L7.12 1.914z"
    }), (0, _preact.h)("path", {
        d: "M10.657 2.621l1.414 1.415L8.536 7.57 7.12 6.157z"
    }))));
    // Pause/resume button for resumable uploads
    if (props.resumableUploads && !props.hidePauseResumeButton) return(// eslint-disable-next-line react/jsx-props-no-spreading
    (0, _preact.h)(ProgressIndicatorButton, props, (0, _preact.h)(ProgressCircleContainer, null, (0, _preact.h)(ProgressCircle, {
        progress: props.file.progress.percentage
    }), props.file.isPaused ? (0, _preact.h)("polygon", {
        className: "uppy-Dashboard-Item-progressIcon--play",
        transform: "translate(3, 3)",
        points: "12 20 12 10 20 15"
    }) : (0, _preact.h)("g", {
        className: "uppy-Dashboard-Item-progressIcon--pause",
        transform: "translate(14.5, 13)"
    }, (0, _preact.h)("rect", {
        x: "0",
        y: "0",
        width: "2",
        height: "10",
        rx: "0"
    }), (0, _preact.h)("rect", {
        x: "5",
        y: "0",
        width: "2",
        height: "10",
        rx: "0"
    })))));
    // Cancel button for non-resumable uploads if individualCancellation is supported (not bundled)
    if (!props.resumableUploads && props.individualCancellation && !props.hideCancelButton) return(// eslint-disable-next-line react/jsx-props-no-spreading
    (0, _preact.h)(ProgressIndicatorButton, props, (0, _preact.h)(ProgressCircleContainer, null, (0, _preact.h)(ProgressCircle, {
        progress: props.file.progress.percentage
    }), (0, _preact.h)("polygon", {
        className: "cancel",
        transform: "translate(2, 2)",
        points: "19.8856516 11.0625 16 14.9481516 12.1019737 11.0625 11.0625 12.1143484 14.9481516 16 11.0625 19.8980263 12.1019737 20.9375 16 17.0518484 19.8856516 20.9375 20.9375 19.8980263 17.0518484 16 20.9375 12"
    }))));
    // Just progress when buttons are disabled
    return (0, _preact.h)("div", {
        className: "uppy-Dashboard-Item-progress"
    }, (0, _preact.h)("div", {
        className: "uppy-Dashboard-Item-progressIndicator"
    }, (0, _preact.h)(ProgressCircleContainer, null, (0, _preact.h)(ProgressCircle, {
        progress: props.file.progress.percentage
    }))));
}

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"hCYts":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>FileInfo);
var _preact = require("preact");
var _prettierBytes = require("@transloadit/prettier-bytes");
var _prettierBytesDefault = parcelHelpers.interopDefault(_prettierBytes);
var _truncateString = require("@uppy/utils/lib/truncateString");
var _truncateStringDefault = parcelHelpers.interopDefault(_truncateString);
var _metaErrorMessageJs = require("../MetaErrorMessage.js");
var _metaErrorMessageJsDefault = parcelHelpers.interopDefault(_metaErrorMessageJs);
const renderFileName = (props)=>{
    const { author, name } = props.file.meta;
    function getMaxNameLength() {
        if (props.isSingleFile && props.containerHeight >= 350) return 90;
        if (props.containerWidth <= 352) return 35;
        if (props.containerWidth <= 576) return 60;
        // When `author` is present, we want to make sure
        // the file name fits on one line so we can place
        // the author on the second line.
        return author ? 20 : 30;
    }
    return (0, _preact.h)("div", {
        className: "uppy-Dashboard-Item-name",
        title: name
    }, (0, _truncateStringDefault.default)(name, getMaxNameLength()));
};
const renderAuthor = (props)=>{
    const { author } = props.file.meta;
    const { providerName } = props.file.remote;
    const dot = `\u00B7`;
    if (!author) return null;
    return (0, _preact.h)("div", {
        className: "uppy-Dashboard-Item-author"
    }, (0, _preact.h)("a", {
        href: `${author.url}?utm_source=Companion&utm_medium=referral`,
        target: "_blank",
        rel: "noopener noreferrer"
    }, (0, _truncateStringDefault.default)(author.name, 13)), providerName ? (0, _preact.h)((0, _preact.Fragment), null, ` ${dot} `, providerName, ` ${dot} `) : null);
};
const renderFileSize = (props)=>props.file.size && (0, _preact.h)("div", {
        className: "uppy-Dashboard-Item-statusSize"
    }, (0, _prettierBytesDefault.default)(props.file.size));
const ReSelectButton = (props)=>props.file.isGhost && (0, _preact.h)("span", null, " • ", (0, _preact.h)("button", {
        className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-reSelect",
        type: "button",
        onClick: props.toggleAddFilesPanel
    }, props.i18n("reSelect")));
const ErrorButton = (_ref)=>{
    let { file, onClick } = _ref;
    if (file.error) return (0, _preact.h)("button", {
        className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-errorDetails",
        "aria-label": file.error,
        "data-microtip-position": "bottom",
        "data-microtip-size": "medium",
        onClick: onClick,
        type: "button"
    }, "?");
    return null;
};
function FileInfo(props) {
    const { file } = props;
    return (0, _preact.h)("div", {
        className: "uppy-Dashboard-Item-fileInfo",
        "data-uppy-file-source": file.source
    }, (0, _preact.h)("div", {
        className: "uppy-Dashboard-Item-fileName"
    }, renderFileName(props), (0, _preact.h)(ErrorButton, {
        file: props.file,
        onClick: ()=>alert(props.file.error) // TODO: move to a custom alert implementation
    })), (0, _preact.h)("div", {
        className: "uppy-Dashboard-Item-status"
    }, renderAuthor(props), renderFileSize(props), ReSelectButton(props)), (0, _preact.h)((0, _metaErrorMessageJsDefault.default), {
        file: props.file,
        i18n: props.i18n,
        toggleFileCard: props.toggleFileCard,
        metaFields: props.metaFields
    }));
}

},{"preact":"26zcy","@transloadit/prettier-bytes":"lriJ1","@uppy/utils/lib/truncateString":"9UidX","../MetaErrorMessage.js":"9mcUm","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"lriJ1":[function(require,module,exports) {
// Adapted from https://github.com/Flet/prettier-bytes/
// Changing 1000 bytes to 1024, so we can keep uppercase KB vs kB
// ISC License (c) Dan Flettre https://github.com/Flet/prettier-bytes/blob/master/LICENSE
module.exports = function prettierBytes(num) {
    if (typeof num !== "number" || isNaN(num)) throw new TypeError("Expected a number, got " + typeof num);
    var neg = num < 0;
    var units = [
        "B",
        "KB",
        "MB",
        "GB",
        "TB",
        "PB",
        "EB",
        "ZB",
        "YB"
    ];
    if (neg) num = -num;
    if (num < 1) return (neg ? "-" : "") + num + " B";
    var exponent = Math.min(Math.floor(Math.log(num) / Math.log(1024)), units.length - 1);
    num = Number(num / Math.pow(1024, exponent));
    var unit = units[exponent];
    if (num >= 10 || num % 1 === 0) // Do not show decimals when the number is two-digit, or if the number has no
    // decimal component.
    return (neg ? "-" : "") + num.toFixed(0) + " " + unit;
    else return (neg ? "-" : "") + num.toFixed(1) + " " + unit;
};

},{}],"9UidX":[function(require,module,exports) {
/**
 * Truncates a string to the given number of chars (maxLength) by inserting '...' in the middle of that string.
 * Partially taken from https://stackoverflow.com/a/5723274/3192470.
 *
 * @param {string} string - string to be truncated
 * @param {number} maxLength - maximum size of the resulting string
 * @returns {string}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>truncateString);
const separator = "...";
function truncateString(string, maxLength) {
    // Return the empty string if maxLength is zero
    if (maxLength === 0) return "";
    // Return original string if it's already shorter than maxLength
    if (string.length <= maxLength) return string;
    // Return truncated substring appended of the ellipsis char if string can't be meaningfully truncated
    if (maxLength <= separator.length + 1) return `${string.slice(0, maxLength - 1)}…`;
    const charsToShow = maxLength - separator.length;
    const frontChars = Math.ceil(charsToShow / 2);
    const backChars = Math.floor(charsToShow / 2);
    return string.slice(0, frontChars) + separator + string.slice(-backChars);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"C500d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Buttons);
var _preact = require("preact");
var _copyToClipboardJs = require("../../../utils/copyToClipboard.js");
var _copyToClipboardJsDefault = parcelHelpers.interopDefault(_copyToClipboardJs);
function EditButton(_ref) {
    let { file, uploadInProgressOrComplete, metaFields, canEditFile, i18n, onClick } = _ref;
    if (!uploadInProgressOrComplete && metaFields && metaFields.length > 0 || !uploadInProgressOrComplete && canEditFile(file)) return (0, _preact.h)("button", {
        className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-action uppy-Dashboard-Item-action--edit",
        type: "button",
        "aria-label": i18n("editFileWithFilename", {
            file: file.meta.name
        }),
        title: i18n("editFileWithFilename", {
            file: file.meta.name
        }),
        onClick: ()=>onClick()
    }, (0, _preact.h)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        className: "uppy-c-icon",
        width: "14",
        height: "14",
        viewBox: "0 0 14 14"
    }, (0, _preact.h)("g", {
        fillRule: "evenodd"
    }, (0, _preact.h)("path", {
        d: "M1.5 10.793h2.793A1 1 0 0 0 5 10.5L11.5 4a1 1 0 0 0 0-1.414L9.707.793a1 1 0 0 0-1.414 0l-6.5 6.5A1 1 0 0 0 1.5 8v2.793zm1-1V8L9 1.5l1.793 1.793-6.5 6.5H2.5z",
        fillRule: "nonzero"
    }), (0, _preact.h)("rect", {
        x: "1",
        y: "12.293",
        width: "11",
        height: "1",
        rx: ".5"
    }), (0, _preact.h)("path", {
        fillRule: "nonzero",
        d: "M6.793 2.5L9.5 5.207l.707-.707L7.5 1.793z"
    }))));
    return null;
}
function RemoveButton(_ref2) {
    let { i18n, onClick, file } = _ref2;
    return (0, _preact.h)("button", {
        className: "uppy-u-reset uppy-Dashboard-Item-action uppy-Dashboard-Item-action--remove",
        type: "button",
        "aria-label": i18n("removeFile", {
            file: file.meta.name
        }),
        title: i18n("removeFile", {
            file: file.meta.name
        }),
        onClick: ()=>onClick()
    }, (0, _preact.h)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        className: "uppy-c-icon",
        width: "18",
        height: "18",
        viewBox: "0 0 18 18"
    }, (0, _preact.h)("path", {
        d: "M9 0C4.034 0 0 4.034 0 9s4.034 9 9 9 9-4.034 9-9-4.034-9-9-9z"
    }), (0, _preact.h)("path", {
        fill: "#FFF",
        d: "M13 12.222l-.778.778L9 9.778 5.778 13 5 12.222 8.222 9 5 5.778 5.778 5 9 8.222 12.222 5l.778.778L9.778 9z"
    })));
}
const copyLinkToClipboard = (event, props)=>{
    (0, _copyToClipboardJsDefault.default)(props.file.uploadURL, props.i18n("copyLinkToClipboardFallback")).then(()=>{
        props.uppy.log("Link copied to clipboard.");
        props.uppy.info(props.i18n("copyLinkToClipboardSuccess"), "info", 3000);
    }).catch(props.uppy.log)// avoid losing focus
    .then(()=>event.target.focus({
            preventScroll: true
        }));
};
function CopyLinkButton(props) {
    const { i18n } = props;
    return (0, _preact.h)("button", {
        className: "uppy-u-reset uppy-Dashboard-Item-action uppy-Dashboard-Item-action--copyLink",
        type: "button",
        "aria-label": i18n("copyLink"),
        title: i18n("copyLink"),
        onClick: (event)=>copyLinkToClipboard(event, props)
    }, (0, _preact.h)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        className: "uppy-c-icon",
        width: "14",
        height: "14",
        viewBox: "0 0 14 12"
    }, (0, _preact.h)("path", {
        d: "M7.94 7.703a2.613 2.613 0 0 1-.626 2.681l-.852.851a2.597 2.597 0 0 1-1.849.766A2.616 2.616 0 0 1 2.764 7.54l.852-.852a2.596 2.596 0 0 1 2.69-.625L5.267 7.099a1.44 1.44 0 0 0-.833.407l-.852.851a1.458 1.458 0 0 0 1.03 2.486c.39 0 .755-.152 1.03-.426l.852-.852c.231-.231.363-.522.406-.824l1.04-1.038zm4.295-5.937A2.596 2.596 0 0 0 10.387 1c-.698 0-1.355.272-1.849.766l-.852.851a2.614 2.614 0 0 0-.624 2.688l1.036-1.036c.041-.304.173-.6.407-.833l.852-.852c.275-.275.64-.426 1.03-.426a1.458 1.458 0 0 1 1.03 2.486l-.852.851a1.442 1.442 0 0 1-.824.406l-1.04 1.04a2.596 2.596 0 0 0 2.683-.628l.851-.85a2.616 2.616 0 0 0 0-3.697zm-6.88 6.883a.577.577 0 0 0 .82 0l3.474-3.474a.579.579 0 1 0-.819-.82L5.355 7.83a.579.579 0 0 0 0 .819z"
    })));
}
function Buttons(props) {
    const { uppy, file, uploadInProgressOrComplete, canEditFile, metaFields, showLinkToFileUploadResult, showRemoveButton, i18n, toggleFileCard, openFileEditor } = props;
    const editAction = ()=>{
        if (metaFields && metaFields.length > 0) toggleFileCard(true, file.id);
        else openFileEditor(file);
    };
    return (0, _preact.h)("div", {
        className: "uppy-Dashboard-Item-actionWrapper"
    }, (0, _preact.h)(EditButton, {
        i18n: i18n,
        file: file,
        uploadInProgressOrComplete: uploadInProgressOrComplete,
        canEditFile: canEditFile,
        metaFields: metaFields,
        onClick: editAction
    }), showLinkToFileUploadResult && file.uploadURL ? (0, _preact.h)(CopyLinkButton, {
        file: file,
        uppy: uppy,
        i18n: i18n
    }) : null, showRemoveButton ? (0, _preact.h)(RemoveButton, {
        i18n: i18n,
        file: file,
        uppy: uppy,
        onClick: ()=>props.uppy.removeFile(file.id, "removed-by-user")
    }) : null);
}

},{"preact":"26zcy","../../../utils/copyToClipboard.js":"lB5VA","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"lB5VA":[function(require,module,exports) {
/**
 * Copies text to clipboard by creating an almost invisible textarea,
 * adding text there, then running execCommand('copy').
 * Falls back to prompt() when the easy way fails (hello, Safari!)
 * From http://stackoverflow.com/a/30810322
 *
 * @param {string} textToCopy
 * @param {string} fallbackString
 * @returns {Promise}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>copyToClipboard);
function copyToClipboard(textToCopy, fallbackString) {
    if (fallbackString === void 0) fallbackString = "Copy the URL below";
    return new Promise((resolve)=>{
        const textArea = document.createElement("textarea");
        textArea.setAttribute("style", {
            position: "fixed",
            top: 0,
            left: 0,
            width: "2em",
            height: "2em",
            padding: 0,
            border: "none",
            outline: "none",
            boxShadow: "none",
            background: "transparent"
        });
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        const magicCopyFailed = ()=>{
            document.body.removeChild(textArea);
            // eslint-disable-next-line no-alert
            window.prompt(fallbackString, textToCopy);
            resolve();
        };
        try {
            const successful = document.execCommand("copy");
            if (!successful) return magicCopyFailed("copy command unavailable");
            document.body.removeChild(textArea);
            return resolve();
        } catch (err) {
            document.body.removeChild(textArea);
            return magicCopyFailed(err);
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"k9J6m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
let _Symbol$for;
_Symbol$for = Symbol.for("uppy test: disable unused locale key warning");
class AddFiles extends (0, _preact.Component) {
    constructor(){
        super(...arguments);
        this.triggerFileInputClick = ()=>{
            this.fileInput.click();
        };
        this.triggerFolderInputClick = ()=>{
            this.folderInput.click();
        };
        this.triggerVideoCameraInputClick = ()=>{
            this.mobileVideoFileInput.click();
        };
        this.triggerPhotoCameraInputClick = ()=>{
            this.mobilePhotoFileInput.click();
        };
        this.onFileInputChange = (event)=>{
            this.props.handleInputChange(event);
            // We clear the input after a file is selected, because otherwise
            // change event is not fired in Chrome and Safari when a file
            // with the same name is selected.
            // ___Why not use value="" on <input/> instead?
            //    Because if we use that method of clearing the input,
            //    Chrome will not trigger change if we drop the same file twice (Issue #768).
            event.target.value = null; // eslint-disable-line no-param-reassign
        };
        this.renderHiddenInput = (isFolder, refCallback)=>{
            return (0, _preact.h)("input", {
                className: "uppy-Dashboard-input",
                hidden: true,
                "aria-hidden": "true",
                tabIndex: -1,
                webkitdirectory: isFolder,
                type: "file",
                name: "files[]",
                multiple: this.props.maxNumberOfFiles !== 1,
                onChange: this.onFileInputChange,
                accept: this.props.allowedFileTypes,
                ref: refCallback
            });
        };
        this.renderHiddenCameraInput = (type, nativeCameraFacingMode, refCallback)=>{
            const typeToAccept = {
                photo: "image/*",
                video: "video/*"
            };
            const accept = typeToAccept[type];
            return (0, _preact.h)("input", {
                className: "uppy-Dashboard-input",
                hidden: true,
                "aria-hidden": "true",
                tabIndex: -1,
                type: "file",
                name: `camera-${type}`,
                onChange: this.onFileInputChange,
                capture: nativeCameraFacingMode,
                accept: accept,
                ref: refCallback
            });
        };
        this.renderMyDeviceAcquirer = ()=>{
            return (0, _preact.h)("div", {
                className: "uppy-DashboardTab",
                role: "presentation",
                "data-uppy-acquirer-id": "MyDevice"
            }, (0, _preact.h)("button", {
                type: "button",
                className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
                role: "tab",
                tabIndex: 0,
                "data-uppy-super-focusable": true,
                onClick: this.triggerFileInputClick
            }, (0, _preact.h)("div", {
                className: "uppy-DashboardTab-inner"
            }, (0, _preact.h)("svg", {
                className: "uppy-DashboardTab-iconMyDevice",
                "aria-hidden": "true",
                focusable: "false",
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            }, (0, _preact.h)("path", {
                d: "M8.45 22.087l-1.305-6.674h17.678l-1.572 6.674H8.45zm4.975-12.412l1.083 1.765a.823.823 0 00.715.386h7.951V13.5H8.587V9.675h4.838zM26.043 13.5h-1.195v-2.598c0-.463-.336-.75-.798-.75h-8.356l-1.082-1.766A.823.823 0 0013.897 8H7.728c-.462 0-.815.256-.815.718V13.5h-.956a.97.97 0 00-.746.37.972.972 0 00-.19.81l1.724 8.565c.095.44.484.755.933.755H24c.44 0 .824-.3.929-.727l2.043-8.568a.972.972 0 00-.176-.825.967.967 0 00-.753-.38z",
                fill: "currentcolor",
                "fill-rule": "evenodd"
            }))), (0, _preact.h)("div", {
                className: "uppy-DashboardTab-name"
            }, this.props.i18n("myDevice"))));
        };
        this.renderPhotoCamera = ()=>{
            return (0, _preact.h)("div", {
                className: "uppy-DashboardTab",
                role: "presentation",
                "data-uppy-acquirer-id": "MobilePhotoCamera"
            }, (0, _preact.h)("button", {
                type: "button",
                className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
                role: "tab",
                tabIndex: 0,
                "data-uppy-super-focusable": true,
                onClick: this.triggerPhotoCameraInputClick
            }, (0, _preact.h)("div", {
                className: "uppy-DashboardTab-inner"
            }, (0, _preact.h)("svg", {
                "aria-hidden": "true",
                focusable: "false",
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            }, (0, _preact.h)("path", {
                d: "M23.5 9.5c1.417 0 2.5 1.083 2.5 2.5v9.167c0 1.416-1.083 2.5-2.5 2.5h-15c-1.417 0-2.5-1.084-2.5-2.5V12c0-1.417 1.083-2.5 2.5-2.5h2.917l1.416-2.167C13 7.167 13.25 7 13.5 7h5c.25 0 .5.167.667.333L20.583 9.5H23.5zM16 11.417a4.706 4.706 0 00-4.75 4.75 4.704 4.704 0 004.75 4.75 4.703 4.703 0 004.75-4.75c0-2.663-2.09-4.75-4.75-4.75zm0 7.825c-1.744 0-3.076-1.332-3.076-3.074 0-1.745 1.333-3.077 3.076-3.077 1.744 0 3.074 1.333 3.074 3.076s-1.33 3.075-3.074 3.075z",
                fill: "#02B383",
                "fill-rule": "nonzero"
            }))), (0, _preact.h)("div", {
                className: "uppy-DashboardTab-name"
            }, this.props.i18n("takePictureBtn"))));
        };
        this.renderVideoCamera = ()=>{
            return (0, _preact.h)("div", {
                className: "uppy-DashboardTab",
                role: "presentation",
                "data-uppy-acquirer-id": "MobileVideoCamera"
            }, (0, _preact.h)("button", {
                type: "button",
                className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
                role: "tab",
                tabIndex: 0,
                "data-uppy-super-focusable": true,
                onClick: this.triggerVideoCameraInputClick
            }, (0, _preact.h)("div", {
                className: "uppy-DashboardTab-inner"
            }, (0, _preact.h)("svg", {
                "aria-hidden": "true",
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            }, (0, _preact.h)("path", {
                fill: "#FF675E",
                fillRule: "nonzero",
                d: "m21.254 14.277 2.941-2.588c.797-.313 1.243.818 1.09 1.554-.01 2.094.02 4.189-.017 6.282-.126.915-1.145 1.08-1.58.34l-2.434-2.142c-.192.287-.504 1.305-.738.468-.104-1.293-.028-2.596-.05-3.894.047-.312.381.823.426 1.069.063-.384.206-.744.362-1.09zm-12.939-3.73c3.858.013 7.717-.025 11.574.02.912.129 1.492 1.237 1.351 2.217-.019 2.412.04 4.83-.03 7.239-.17 1.025-1.166 1.59-2.029 1.429-3.705-.012-7.41.025-11.114-.019-.913-.129-1.492-1.237-1.352-2.217.018-2.404-.036-4.813.029-7.214.136-.82.83-1.473 1.571-1.454z "
            }))), (0, _preact.h)("div", {
                className: "uppy-DashboardTab-name"
            }, this.props.i18n("recordVideoBtn"))));
        };
        this.renderBrowseButton = (text, onClickFn)=>{
            const numberOfAcquirers = this.props.acquirers.length;
            return (0, _preact.h)("button", {
                type: "button",
                className: "uppy-u-reset uppy-c-btn uppy-Dashboard-browse",
                onClick: onClickFn,
                "data-uppy-super-focusable": numberOfAcquirers === 0
            }, text);
        };
        this.renderDropPasteBrowseTagline = (numberOfAcquirers)=>{
            const browseFiles = this.renderBrowseButton(this.props.i18n("browseFiles"), this.triggerFileInputClick);
            const browseFolders = this.renderBrowseButton(this.props.i18n("browseFolders"), this.triggerFolderInputClick);
            // in order to keep the i18n CamelCase and options lower (as are defaults) we will want to transform a lower
            // to Camel
            const lowerFMSelectionType = this.props.fileManagerSelectionType;
            const camelFMSelectionType = lowerFMSelectionType.charAt(0).toUpperCase() + lowerFMSelectionType.slice(1);
            return (0, _preact.h)("div", {
                class: "uppy-Dashboard-AddFiles-title"
            }, // eslint-disable-next-line no-nested-ternary
            this.props.disableLocalFiles ? this.props.i18n("importFiles") : numberOfAcquirers > 0 ? this.props.i18nArray(`dropPasteImport${camelFMSelectionType}`, {
                browseFiles,
                browseFolders,
                browse: browseFiles
            }) : this.props.i18nArray(`dropPaste${camelFMSelectionType}`, {
                browseFiles,
                browseFolders,
                browse: browseFiles
            }));
        };
        this.renderAcquirer = (acquirer)=>{
            return (0, _preact.h)("div", {
                className: "uppy-DashboardTab",
                role: "presentation",
                "data-uppy-acquirer-id": acquirer.id
            }, (0, _preact.h)("button", {
                type: "button",
                className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
                role: "tab",
                tabIndex: 0,
                "data-cy": acquirer.id,
                "aria-controls": `uppy-DashboardContent-panel--${acquirer.id}`,
                "aria-selected": this.props.activePickerPanel.id === acquirer.id,
                "data-uppy-super-focusable": true,
                onClick: ()=>this.props.showPanel(acquirer.id)
            }, (0, _preact.h)("div", {
                className: "uppy-DashboardTab-inner"
            }, acquirer.icon()), (0, _preact.h)("div", {
                className: "uppy-DashboardTab-name"
            }, acquirer.name)));
        };
        this.renderAcquirers = (acquirers)=>{
            // Group last two buttons, so we don’t end up with
            // just one button on a new line
            const acquirersWithoutLastTwo = [
                ...acquirers
            ];
            const lastTwoAcquirers = acquirersWithoutLastTwo.splice(acquirers.length - 2, acquirers.length);
            return (0, _preact.h)((0, _preact.Fragment), null, acquirersWithoutLastTwo.map((acquirer)=>this.renderAcquirer(acquirer)), (0, _preact.h)("span", {
                role: "presentation",
                style: {
                    "white-space": "nowrap"
                }
            }, lastTwoAcquirers.map((acquirer)=>this.renderAcquirer(acquirer))));
        };
        this.renderSourcesList = (acquirers, disableLocalFiles)=>{
            const { showNativePhotoCameraButton, showNativeVideoCameraButton } = this.props;
            let list = [];
            const myDeviceKey = "myDevice";
            if (!disableLocalFiles) {
                list.push({
                    key: myDeviceKey,
                    elements: this.renderMyDeviceAcquirer()
                });
                if (showNativePhotoCameraButton) list.push({
                    key: "nativePhotoCameraButton",
                    elements: this.renderPhotoCamera()
                });
                if (showNativeVideoCameraButton) list.push({
                    key: "nativePhotoCameraButton",
                    elements: this.renderVideoCamera()
                });
            }
            list.push(...acquirers.map((acquirer)=>({
                    key: acquirer.id,
                    elements: this.renderAcquirer(acquirer)
                })));
            // doesn't make sense to show only a lonely "My Device"
            const hasOnlyMyDevice = list.length === 1 && list[0].key === myDeviceKey;
            if (hasOnlyMyDevice) list = [];
            // Group last two buttons, so we don’t end up with
            // just one button on a new line
            const listWithoutLastTwo = [
                ...list
            ];
            const lastTwo = listWithoutLastTwo.splice(list.length - 2, list.length);
            const renderList = (l)=>l.map((_ref)=>{
                    let { key, elements } = _ref;
                    return (0, _preact.h)((0, _preact.Fragment), {
                        key: key
                    }, elements);
                });
            return (0, _preact.h)((0, _preact.Fragment), null, this.renderDropPasteBrowseTagline(list.length), (0, _preact.h)("div", {
                className: "uppy-Dashboard-AddFiles-list",
                role: "tablist"
            }, renderList(listWithoutLastTwo), (0, _preact.h)("span", {
                role: "presentation",
                style: {
                    "white-space": "nowrap"
                }
            }, renderList(lastTwo))));
        };
    }
    [_Symbol$for]() {
        // Those are actually used in `renderDropPasteBrowseTagline` method.
        this.props.i18nArray("dropPasteBoth");
        this.props.i18nArray("dropPasteFiles");
        this.props.i18nArray("dropPasteFolders");
        this.props.i18nArray("dropPasteImportBoth");
        this.props.i18nArray("dropPasteImportFiles");
        this.props.i18nArray("dropPasteImportFolders");
    }
    renderPoweredByUppy() {
        const { i18nArray } = this.props;
        const uppyBranding = (0, _preact.h)("span", null, (0, _preact.h)("svg", {
            "aria-hidden": "true",
            focusable: "false",
            className: "uppy-c-icon uppy-Dashboard-poweredByIcon",
            width: "11",
            height: "11",
            viewBox: "0 0 11 11"
        }, (0, _preact.h)("path", {
            d: "M7.365 10.5l-.01-4.045h2.612L5.5.806l-4.467 5.65h2.604l.01 4.044h3.718z",
            fillRule: "evenodd"
        })), (0, _preact.h)("span", {
            className: "uppy-Dashboard-poweredByUppy"
        }, "Uppy"));
        const linkText = i18nArray("poweredBy", {
            uppy: uppyBranding
        });
        return (0, _preact.h)("a", {
            tabIndex: "-1",
            href: "https://uppy.io",
            rel: "noreferrer noopener",
            target: "_blank",
            className: "uppy-Dashboard-poweredBy"
        }, linkText);
    }
    render() {
        const { showNativePhotoCameraButton, showNativeVideoCameraButton, nativeCameraFacingMode } = this.props;
        return (0, _preact.h)("div", {
            className: "uppy-Dashboard-AddFiles"
        }, this.renderHiddenInput(false, (ref)=>{
            this.fileInput = ref;
        }), this.renderHiddenInput(true, (ref)=>{
            this.folderInput = ref;
        }), showNativePhotoCameraButton && this.renderHiddenCameraInput("photo", nativeCameraFacingMode, (ref)=>{
            this.mobilePhotoFileInput = ref;
        }), showNativeVideoCameraButton && this.renderHiddenCameraInput("video", nativeCameraFacingMode, (ref)=>{
            this.mobileVideoFileInput = ref;
        }), this.renderSourcesList(this.props.acquirers, this.props.disableLocalFiles), (0, _preact.h)("div", {
            className: "uppy-Dashboard-AddFiles-info"
        }, this.props.note && (0, _preact.h)("div", {
            className: "uppy-Dashboard-note"
        }, this.props.note), this.props.proudlyDisplayPoweredByUppy && this.renderPoweredByUppy(this.props)));
    }
}
exports.default = AddFiles;

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"1WaAU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _addFilesJs = require("./AddFiles.js");
var _addFilesJsDefault = parcelHelpers.interopDefault(_addFilesJs);
const AddFilesPanel = (props)=>{
    return (0, _preact.h)("div", {
        className: (0, _classnamesDefault.default)("uppy-Dashboard-AddFilesPanel", props.className),
        "data-uppy-panelType": "AddFiles",
        "aria-hidden": !props.showAddFilesPanel
    }, (0, _preact.h)("div", {
        className: "uppy-DashboardContent-bar"
    }, (0, _preact.h)("div", {
        className: "uppy-DashboardContent-title",
        role: "heading",
        "aria-level": "1"
    }, props.i18n("addingMoreFiles")), (0, _preact.h)("button", {
        className: "uppy-DashboardContent-back",
        type: "button",
        onClick: ()=>props.toggleAddFilesPanel(false)
    }, props.i18n("back"))), (0, _preact.h)((0, _addFilesJsDefault.default), props));
};
exports.default = AddFilesPanel;

},{"preact":"26zcy","classnames":"jocGM","./AddFiles.js":"k9J6m","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"ensLV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _ignoreEventJs = require("../utils/ignoreEvent.js");
var _ignoreEventJsDefault = parcelHelpers.interopDefault(_ignoreEventJs);
function PickerPanelContent(_ref) {
    let { activePickerPanel, className, hideAllPanels, i18n, state, uppy } = _ref;
    return (0, _preact.h)("div", {
        className: (0, _classnamesDefault.default)("uppy-DashboardContent-panel", className),
        role: "tabpanel",
        "data-uppy-panelType": "PickerPanel",
        id: `uppy-DashboardContent-panel--${activePickerPanel.id}`,
        onDragOver: (0, _ignoreEventJsDefault.default),
        onDragLeave: (0, _ignoreEventJsDefault.default),
        onDrop: (0, _ignoreEventJsDefault.default),
        onPaste: (0, _ignoreEventJsDefault.default)
    }, (0, _preact.h)("div", {
        className: "uppy-DashboardContent-bar"
    }, (0, _preact.h)("div", {
        className: "uppy-DashboardContent-title",
        role: "heading",
        "aria-level": "1"
    }, i18n("importFrom", {
        name: activePickerPanel.name
    })), (0, _preact.h)("button", {
        className: "uppy-DashboardContent-back",
        type: "button",
        onClick: hideAllPanels
    }, i18n("cancel"))), (0, _preact.h)("div", {
        className: "uppy-DashboardContent-panelBody"
    }, uppy.getPlugin(activePickerPanel.id).render(state)));
}
exports.default = PickerPanelContent;

},{"preact":"26zcy","classnames":"jocGM","../utils/ignoreEvent.js":"j8mHZ","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"j8mHZ":[function(require,module,exports) {
// ignore drop/paste events if they are not in input or textarea —
// otherwise when Url plugin adds drop/paste listeners to this.el,
// draging UI elements or pasting anything into any field triggers those events —
// Url treats them as URLs that need to be imported
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function ignoreEvent(ev) {
    const { tagName } = ev.target;
    if (tagName === "INPUT" || tagName === "TEXTAREA") {
        ev.stopPropagation();
        return;
    }
    ev.preventDefault();
    ev.stopPropagation();
}
exports.default = ignoreEvent;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"hMrcr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
function EditorPanel(props) {
    const file = props.files[props.fileCardFor];
    const handleCancel = ()=>{
        props.uppy.emit("file-editor:cancel", file);
        props.hideAllPanels();
    };
    return (0, _preact.h)("div", {
        className: (0, _classnamesDefault.default)("uppy-DashboardContent-panel", props.className),
        role: "tabpanel",
        "data-uppy-panelType": "FileEditor",
        id: "uppy-DashboardContent-panel--editor"
    }, (0, _preact.h)("div", {
        className: "uppy-DashboardContent-bar"
    }, (0, _preact.h)("div", {
        className: "uppy-DashboardContent-title",
        role: "heading",
        "aria-level": "1"
    }, props.i18nArray("editing", {
        file: (0, _preact.h)("span", {
            className: "uppy-DashboardContent-titleFile"
        }, file.meta ? file.meta.name : file.name)
    })), (0, _preact.h)("button", {
        className: "uppy-DashboardContent-back",
        type: "button",
        onClick: handleCancel
    }, props.i18n("cancel")), (0, _preact.h)("button", {
        className: "uppy-DashboardContent-save",
        type: "button",
        onClick: props.saveFileEditor
    }, props.i18n("save"))), (0, _preact.h)("div", {
        className: "uppy-DashboardContent-panelBody"
    }, props.editors.map((target)=>{
        return props.uppy.getPlugin(target.id).render(props.state);
    })));
}
exports.default = EditorPanel;

},{"preact":"26zcy","classnames":"jocGM","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"bWlc7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
const uploadStates = {
    STATE_ERROR: "error",
    STATE_WAITING: "waiting",
    STATE_PREPROCESSING: "preprocessing",
    STATE_UPLOADING: "uploading",
    STATE_POSTPROCESSING: "postprocessing",
    STATE_COMPLETE: "complete",
    STATE_PAUSED: "paused"
};
function getUploadingState(isAllErrored, isAllComplete, isAllPaused, files) {
    if (files === void 0) files = {};
    if (isAllErrored) return uploadStates.STATE_ERROR;
    if (isAllComplete) return uploadStates.STATE_COMPLETE;
    if (isAllPaused) return uploadStates.STATE_PAUSED;
    let state = uploadStates.STATE_WAITING;
    const fileIDs = Object.keys(files);
    for(let i = 0; i < fileIDs.length; i++){
        const { progress } = files[fileIDs[i]];
        // If ANY files are being uploaded right now, show the uploading state.
        if (progress.uploadStarted && !progress.uploadComplete) return uploadStates.STATE_UPLOADING;
        // If files are being preprocessed AND postprocessed at this time, we show the
        // preprocess state. If any files are being uploaded we show uploading.
        if (progress.preprocess && state !== uploadStates.STATE_UPLOADING) state = uploadStates.STATE_PREPROCESSING;
        // If NO files are being preprocessed or uploaded right now, but some files are
        // being postprocessed, show the postprocess state.
        if (progress.postprocess && state !== uploadStates.STATE_UPLOADING && state !== uploadStates.STATE_PREPROCESSING) state = uploadStates.STATE_POSTPROCESSING;
    }
    return state;
}
function UploadStatus(_ref) {
    let { files, i18n, isAllComplete, isAllErrored, isAllPaused, inProgressNotPausedFiles, newFiles, processingFiles } = _ref;
    const uploadingState = getUploadingState(isAllErrored, isAllComplete, isAllPaused, files);
    switch(uploadingState){
        case "uploading":
            return i18n("uploadingXFiles", {
                smart_count: inProgressNotPausedFiles.length
            });
        case "preprocessing":
        case "postprocessing":
            return i18n("processingXFiles", {
                smart_count: processingFiles.length
            });
        case "paused":
            return i18n("uploadPaused");
        case "waiting":
            return i18n("xFilesSelected", {
                smart_count: newFiles.length
            });
        case "complete":
            return i18n("uploadComplete");
        case "error":
            return i18n("error");
        default:
    }
}
function PanelTopBar(props) {
    const { i18n, isAllComplete, hideCancelButton, maxNumberOfFiles, toggleAddFilesPanel, uppy } = props;
    let { allowNewUpload } = props;
    // TODO maybe this should be done in ../Dashboard.jsx, then just pass that down as `allowNewUpload`
    if (allowNewUpload && maxNumberOfFiles) // eslint-disable-next-line react/destructuring-assignment
    allowNewUpload = props.totalFileCount < props.maxNumberOfFiles;
    return (0, _preact.h)("div", {
        className: "uppy-DashboardContent-bar"
    }, !isAllComplete && !hideCancelButton ? (0, _preact.h)("button", {
        className: "uppy-DashboardContent-back",
        type: "button",
        onClick: ()=>uppy.cancelAll()
    }, i18n("cancel")) : (0, _preact.h)("div", null), (0, _preact.h)("div", {
        className: "uppy-DashboardContent-title",
        role: "heading",
        "aria-level": "1"
    }, (0, _preact.h)(UploadStatus, props)), allowNewUpload ? (0, _preact.h)("button", {
        className: "uppy-DashboardContent-addMore",
        type: "button",
        "aria-label": i18n("addMoreFiles"),
        title: i18n("addMoreFiles"),
        onClick: ()=>toggleAddFilesPanel(true)
    }, (0, _preact.h)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        className: "uppy-c-icon",
        width: "15",
        height: "15",
        viewBox: "0 0 15 15"
    }, (0, _preact.h)("path", {
        d: "M8 6.5h6a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H8v6a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V8h-6a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h6v-6A.5.5 0 0 1 7 0h.5a.5.5 0 0 1 .5.5v6z"
    })), (0, _preact.h)("span", {
        className: "uppy-DashboardContent-addMoreCaption"
    }, i18n("addMore"))) : (0, _preact.h)("div", null));
}
exports.default = PanelTopBar;

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"9INb2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>FileCard);
var _preact = require("preact");
var _hooks = require("preact/hooks");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _nonSecure = require("nanoid/non-secure");
var _getFileTypeIconJs = require("../../utils/getFileTypeIcon.js");
var _getFileTypeIconJsDefault = parcelHelpers.interopDefault(_getFileTypeIconJs);
var _ignoreEventJs = require("../../utils/ignoreEvent.js");
var _ignoreEventJsDefault = parcelHelpers.interopDefault(_ignoreEventJs);
var _filePreviewJs = require("../FilePreview.js");
var _filePreviewJsDefault = parcelHelpers.interopDefault(_filePreviewJs);
var _renderMetaFieldsJs = require("./RenderMetaFields.js");
var _renderMetaFieldsJsDefault = parcelHelpers.interopDefault(_renderMetaFieldsJs);
function FileCard(props) {
    var _getMetaFields;
    const { files, fileCardFor, toggleFileCard, saveFileCard, metaFields, requiredMetaFields, openFileEditor, i18n, i18nArray, className, canEditFile } = props;
    const getMetaFields = ()=>{
        return typeof metaFields === "function" ? metaFields(files[fileCardFor]) : metaFields;
    };
    const file = files[fileCardFor];
    const computedMetaFields = (_getMetaFields = getMetaFields()) != null ? _getMetaFields : [];
    const showEditButton = canEditFile(file);
    const storedMetaData = {};
    computedMetaFields.forEach((field)=>{
        var _file$meta$field$id;
        storedMetaData[field.id] = (_file$meta$field$id = file.meta[field.id]) != null ? _file$meta$field$id : "";
    });
    const [formState, setFormState] = (0, _hooks.useState)(storedMetaData);
    const handleSave = (0, _hooks.useCallback)((ev)=>{
        ev.preventDefault();
        saveFileCard(formState, fileCardFor);
    }, [
        saveFileCard,
        formState,
        fileCardFor
    ]);
    const updateMeta = (newVal, name)=>{
        setFormState({
            ...formState,
            [name]: newVal
        });
    };
    const handleCancel = ()=>{
        toggleFileCard(false);
    };
    const [form] = (0, _hooks.useState)(()=>{
        const formEl = document.createElement("form");
        formEl.setAttribute("tabindex", "-1");
        formEl.id = (0, _nonSecure.nanoid)();
        return formEl;
    });
    (0, _hooks.useEffect)(()=>{
        document.body.appendChild(form);
        form.addEventListener("submit", handleSave);
        return ()=>{
            form.removeEventListener("submit", handleSave);
            document.body.removeChild(form);
        };
    }, [
        form,
        handleSave
    ]);
    return (0, _preact.h)("div", {
        className: (0, _classnamesDefault.default)("uppy-Dashboard-FileCard", className),
        "data-uppy-panelType": "FileCard",
        onDragOver: (0, _ignoreEventJsDefault.default),
        onDragLeave: (0, _ignoreEventJsDefault.default),
        onDrop: (0, _ignoreEventJsDefault.default),
        onPaste: (0, _ignoreEventJsDefault.default)
    }, (0, _preact.h)("div", {
        className: "uppy-DashboardContent-bar"
    }, (0, _preact.h)("div", {
        className: "uppy-DashboardContent-title",
        role: "heading",
        "aria-level": "1"
    }, i18nArray("editing", {
        file: (0, _preact.h)("span", {
            className: "uppy-DashboardContent-titleFile"
        }, file.meta ? file.meta.name : file.name)
    })), (0, _preact.h)("button", {
        className: "uppy-DashboardContent-back",
        type: "button",
        form: form.id,
        title: i18n("finishEditingFile"),
        onClick: handleCancel
    }, i18n("cancel"))), (0, _preact.h)("div", {
        className: "uppy-Dashboard-FileCard-inner"
    }, (0, _preact.h)("div", {
        className: "uppy-Dashboard-FileCard-preview",
        style: {
            backgroundColor: (0, _getFileTypeIconJsDefault.default)(file.type).color
        }
    }, (0, _preact.h)((0, _filePreviewJsDefault.default), {
        file: file
    }), showEditButton && (0, _preact.h)("button", {
        type: "button",
        className: "uppy-u-reset uppy-c-btn uppy-Dashboard-FileCard-edit",
        onClick: (event)=>{
            // When opening the image editor we want to save any meta fields changes.
            // Otherwise it's confusing for the user to click save in the editor,
            // but the changes here are discarded. This bypasses validation,
            // but we are okay with that.
            handleSave(event);
            openFileEditor(file);
        }
    }, i18n("editFile"))), (0, _preact.h)("div", {
        className: "uppy-Dashboard-FileCard-info"
    }, (0, _preact.h)((0, _renderMetaFieldsJsDefault.default), {
        computedMetaFields: computedMetaFields,
        requiredMetaFields: requiredMetaFields,
        updateMeta: updateMeta,
        form: form,
        formState: formState
    })), (0, _preact.h)("div", {
        className: "uppy-Dashboard-FileCard-actions"
    }, (0, _preact.h)("button", {
        className: "uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Dashboard-FileCard-actionsBtn",
        type: "submit",
        form: form.id
    }, i18n("saveChanges")), (0, _preact.h)("button", {
        className: "uppy-u-reset uppy-c-btn uppy-c-btn-link uppy-Dashboard-FileCard-actionsBtn",
        type: "button",
        onClick: handleCancel,
        form: form.id
    }, i18n("cancel")))));
}

},{"preact":"26zcy","preact/hooks":"eZN76","classnames":"jocGM","nanoid/non-secure":"fO50M","../../utils/getFileTypeIcon.js":"eifNe","../../utils/ignoreEvent.js":"j8mHZ","../FilePreview.js":"gCySX","./RenderMetaFields.js":"bta7h","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"bta7h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>RenderMetaFields);
var _preact = require("preact");
function RenderMetaFields(props) {
    const { computedMetaFields, requiredMetaFields, updateMeta, form, formState } = props;
    const fieldCSSClasses = {
        text: "uppy-u-reset uppy-c-textInput uppy-Dashboard-FileCard-input"
    };
    return computedMetaFields.map((field)=>{
        const id = `uppy-Dashboard-FileCard-input-${field.id}`;
        const required = requiredMetaFields.includes(field.id);
        return (0, _preact.h)("fieldset", {
            key: field.id,
            className: "uppy-Dashboard-FileCard-fieldset"
        }, (0, _preact.h)("label", {
            className: "uppy-Dashboard-FileCard-label",
            htmlFor: id
        }, field.name), field.render !== undefined ? field.render({
            value: formState[field.id],
            onChange: (newVal)=>updateMeta(newVal, field.id),
            fieldCSSClasses,
            required,
            form: form.id
        }, (0, _preact.h)) : (0, _preact.h)("input", {
            className: fieldCSSClasses.text,
            id: id,
            form: form.id,
            type: field.type || "text",
            required: required,
            value: formState[field.id],
            placeholder: field.placeholder,
            onInput: (ev)=>updateMeta(ev.target.value, field.id),
            "data-uppy-super-focusable": true
        }));
    });
}

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"bxIi0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
const transitionName = "uppy-transition-slideDownUp";
const duration = 250;
/**
 * Vertical slide transition.
 *
 * This can take a _single_ child component, which _must_ accept a `className` prop.
 *
 * Currently this is specific to the `uppy-transition-slideDownUp` transition,
 * but it should be simple to extend this for any type of single-element
 * transition by setting the CSS name and duration as props.
 */ class Slide extends (0, _preact.Component) {
    constructor(props){
        super(props);
        this.state = {
            cachedChildren: null,
            className: ""
        };
    }
    // TODO: refactor to stable lifecycle method
    // eslint-disable-next-line
    componentWillUpdate(nextProps) {
        const { cachedChildren } = this.state;
        const child = (0, _preact.toChildArray)(nextProps.children)[0];
        if (cachedChildren === child) return null;
        const patch = {
            cachedChildren: child
        };
        // Enter transition
        if (child && !cachedChildren) {
            patch.className = `${transitionName}-enter`;
            cancelAnimationFrame(this.animationFrame);
            clearTimeout(this.leaveTimeout);
            this.leaveTimeout = undefined;
            this.animationFrame = requestAnimationFrame(()=>{
                // Force it to render before we add the active class
                // this.base.getBoundingClientRect()
                this.setState({
                    className: `${transitionName}-enter ${transitionName}-enter-active`
                });
                this.enterTimeout = setTimeout(()=>{
                    this.setState({
                        className: ""
                    });
                }, duration);
            });
        }
        // Leave transition
        if (cachedChildren && !child && this.leaveTimeout === undefined) {
            patch.cachedChildren = cachedChildren;
            patch.className = `${transitionName}-leave`;
            cancelAnimationFrame(this.animationFrame);
            clearTimeout(this.enterTimeout);
            this.enterTimeout = undefined;
            this.animationFrame = requestAnimationFrame(()=>{
                this.setState({
                    className: `${transitionName}-leave ${transitionName}-leave-active`
                });
                this.leaveTimeout = setTimeout(()=>{
                    this.setState({
                        cachedChildren: null,
                        className: ""
                    });
                }, duration);
            });
        }
        // eslint-disable-next-line
        this.setState(patch);
    }
    render() {
        const { cachedChildren, className } = this.state;
        if (!cachedChildren) return null;
        return (0, _preact.cloneElement)(cachedChildren, {
            className: (0, _classnamesDefault.default)(className, cachedChildren.props.className)
        });
    }
}
exports.default = Slide;

},{"preact":"26zcy","classnames":"jocGM","@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}],"18n1g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    strings: {
        // When `inline: false`, used as the screen reader label for the button that closes the modal.
        closeModal: "Close Modal",
        // Used as the screen reader label for the plus (+) button that shows the “Add more files” screen
        addMoreFiles: "Add more files",
        addingMoreFiles: "Adding more files",
        // Used as the header for import panels, e.g., “Import from Google Drive”.
        importFrom: "Import from %{name}",
        // When `inline: false`, used as the screen reader label for the dashboard modal.
        dashboardWindowTitle: "Uppy Dashboard Window (Press escape to close)",
        // When `inline: true`, used as the screen reader label for the dashboard area.
        dashboardTitle: "Uppy Dashboard",
        // Shown in the Informer when a link to a file was copied to the clipboard.
        copyLinkToClipboardSuccess: "Link copied to clipboard.",
        // Used when a link cannot be copied automatically — the user has to select the text from the
        // input element below this string.
        copyLinkToClipboardFallback: "Copy the URL below",
        // Used as the hover title and screen reader label for buttons that copy a file link.
        copyLink: "Copy link",
        back: "Back",
        // Used as the screen reader label for buttons that remove a file.
        removeFile: "Remove file",
        // Used as the screen reader label for buttons that open the metadata editor panel for a file.
        editFile: "Edit file",
        // Shown in the panel header for the metadata editor. Rendered as “Editing image.png”.
        editing: "Editing %{file}",
        // Shown on the main upload screen when an upload error occurs
        error: "Error",
        // Used as the screen reader label for the button that saves metadata edits and returns to the
        // file list view.
        finishEditingFile: "Finish editing file",
        saveChanges: "Save changes",
        // Used as the label for the tab button that opens the system file selection dialog.
        myDevice: "My Device",
        dropHint: "Drop your files here",
        // Used as the hover text and screen reader label for file progress indicators when
        // they have been fully uploaded.
        uploadComplete: "Upload complete",
        uploadPaused: "Upload paused",
        // Used as the hover text and screen reader label for the buttons to resume paused uploads.
        resumeUpload: "Resume upload",
        // Used as the hover text and screen reader label for the buttons to pause uploads.
        pauseUpload: "Pause upload",
        // Used as the hover text and screen reader label for the buttons to retry failed uploads.
        retryUpload: "Retry upload",
        // Used as the hover text and screen reader label for the buttons to cancel uploads.
        cancelUpload: "Cancel upload",
        // Used in a title, how many files are currently selected
        xFilesSelected: {
            0: "%{smart_count} file selected",
            1: "%{smart_count} files selected"
        },
        uploadingXFiles: {
            0: "Uploading %{smart_count} file",
            1: "Uploading %{smart_count} files"
        },
        processingXFiles: {
            0: "Processing %{smart_count} file",
            1: "Processing %{smart_count} files"
        },
        // The "powered by Uppy" link at the bottom of the Dashboard.
        poweredBy: "Powered by %{uppy}",
        addMore: "Add more",
        editFileWithFilename: "Edit file %{file}",
        save: "Save",
        cancel: "Cancel",
        dropPasteFiles: "Drop files here or %{browseFiles}",
        dropPasteFolders: "Drop files here or %{browseFolders}",
        dropPasteBoth: "Drop files here, %{browseFiles} or %{browseFolders}",
        dropPasteImportFiles: "Drop files here, %{browseFiles} or import from:",
        dropPasteImportFolders: "Drop files here, %{browseFolders} or import from:",
        dropPasteImportBoth: "Drop files here, %{browseFiles}, %{browseFolders} or import from:",
        importFiles: "Import files from:",
        browseFiles: "browse files",
        browseFolders: "browse folders",
        recoveredXFiles: {
            0: "We could not fully recover 1 file. Please re-select it and resume the upload.",
            1: "We could not fully recover %{smart_count} files. Please re-select them and resume the upload."
        },
        recoveredAllFiles: "We restored all files. You can now resume the upload.",
        sessionRestored: "Session restored",
        reSelect: "Re-select",
        missingRequiredMetaFields: {
            0: "Missing required meta field: %{fields}.",
            1: "Missing required meta fields: %{fields}."
        },
        // Used for native device camera buttons on mobile
        takePictureBtn: "Take Picture",
        recordVideoBtn: "Record Video"
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIF6m"}]},["dhwUG","bNKaB"], "bNKaB", "parcelRequire94c2")

//# sourceMappingURL=index.0641b553.js.map
