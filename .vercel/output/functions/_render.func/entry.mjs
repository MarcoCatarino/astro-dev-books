import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint__dQ8CgCy.mjs';
import { manifest } from './manifest_YPWNxaHN.mjs';
import { onRequest } from './_noop-middleware.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_C0fQk5yP.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_CYYZzcUR.mjs')],
]);;

const _page0 = () => import('./pages/libro/_id_.astro.mjs');
const _page1 = () => import('./pages/index.astro.mjs');
const _page2 = () => import('./pages/_image.astro.mjs');
const pageMap = new Map([
    ["src/pages/libro/[id].astro", _page0],
    ["src/pages/index.astro", _page1],
    ["node_modules/.pnpm/astro@5.0.0-beta.1_rollup@4.22.4_typescript@5.6.2/node_modules/astro/dist/assets/endpoint/generic.js", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "e304c4d6-6d4e-42fb-9b03-3c39c0bb9fae",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
