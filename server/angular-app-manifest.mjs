
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/company"
  },
  {
    "renderMode": 2,
    "route": "/careers"
  },
  {
    "renderMode": 1,
    "route": "/careers/*"
  },
  {
    "renderMode": 2,
    "route": "/pricing"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 10046, hash: 'e661f9685f91bdb8cbb9e92ddad7ae2020961e6f14c8af036928bac15a24b5b4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 948, hash: 'b93d5407eee2807f3c04ec81b055e75b57ecc96f86425816aacab237160ee8ad', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 52090, hash: '553f339126bb623552081e3a482ee74f0cec441bf0d8d09798b18955e165c7c2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'company/index.html': {size: 60463, hash: '6c91c43dfc4df9001225e067f90d58dc13289f7f55744af68bc23e2dc1ebbe3c', text: () => import('./assets-chunks/company_index_html.mjs').then(m => m.default)},
    'careers/index.html': {size: 55595, hash: 'c9543341360c576835b1dfca67d724577fb173184167de0cfe3e7b1e16fa499a', text: () => import('./assets-chunks/careers_index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 55618, hash: 'ffb5a0ad1bd6f73f3c358bec2c2b30c4c2e4dda4ed7367dcb144e1bd064c55f5', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'styles-O354L5KN.css': {size: 34482, hash: 'RodDasFK9s0', text: () => import('./assets-chunks/styles-O354L5KN_css.mjs').then(m => m.default)}
  },
};
