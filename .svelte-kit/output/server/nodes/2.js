

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.KXhwSwne.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/scheduler.a7-2wmif.js","_app/immutable/chunks/index.TKaeQzX4.js","_app/immutable/chunks/Icon.9FdJCtPg.js","_app/immutable/chunks/each.PNlFOTD9.js"];
export const stylesheets = ["_app/immutable/assets/2.WRR3RRRw.css"];
export const fonts = [];
