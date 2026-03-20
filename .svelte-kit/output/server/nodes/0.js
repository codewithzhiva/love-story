

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0._OUmVweG.js","_app/immutable/chunks/DGx1muHl.js","_app/immutable/chunks/CDXjoEXO.js"];
export const stylesheets = ["_app/immutable/assets/0.CMfet2_R.css"];
export const fonts = [];
