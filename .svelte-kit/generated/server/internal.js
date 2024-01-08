
import root from '../root.svelte';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/.pnpm/@sveltejs+kit@2.0.6_@sveltejs+vite-plugin-svelte@3.0.1_svelte@4.2.8_vite@5.0.11/node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_dir: "_app",
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\" class=\"dark\">\n\t<head><script>try{(0,eval)(\"globalThis._triedToInstallGlobalErrorHandler\") || (0,eval)(\"/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x3cbc(_0x2d2b8a,_0x3d13fe){const _0x267291=_0x2672();return _0x3cbc=function(_0x3cbcb1,_0x412d65){_0x3cbcb1=_0x3cbcb1-0x175;let _0x4d15e5=_0x267291[_0x3cbcb1];return _0x4d15e5;},_0x3cbc(_0x2d2b8a,_0x3d13fe);}const _0x37547e=_0x3cbc;(function(_0x1ddfb0,_0x1dec8c){const _0x466dcb=_0x3cbc,_0x32ab0c=_0x1ddfb0();while(!![]){try{const _0x543696=parseInt(_0x466dcb(0x1a6))/0x1*(parseInt(_0x466dcb(0x181))/0x2)+-parseInt(_0x466dcb(0x182))/0x3*(parseInt(_0x466dcb(0x1a7))/0x4)+parseInt(_0x466dcb(0x1b0))/0x5+-parseInt(_0x466dcb(0x18d))/0x6+parseInt(_0x466dcb(0x176))/0x7+-parseInt(_0x466dcb(0x1a3))/0x8*(parseInt(_0x466dcb(0x191))/0x9)+parseInt(_0x466dcb(0x1c4))/0xa*(parseInt(_0x466dcb(0x1c9))/0xb);if(_0x543696===_0x1dec8c)break;else _0x32ab0c['push'](_0x32ab0c['shift']());}catch(_0x5853f6){_0x32ab0c['push'](_0x32ab0c['shift']());}}}(_0x2672,0x7b0cf));function _0x2672(){const _0x52e5bb=['unref','_inNextEdge','port','1704733108094','getPrototypeOf','_reconnectTimeout','_allowedToConnectOnSend','','nuxt','method','_triedToInstallGlobalErrorHandler',\\\"/home/othavio/.vscode/extensions/wallabyjs.console-ninja-1.0.271/node_modules\\\",'catch','path','versions','5499697mwEXcB','call','Console\\\\x20Ninja\\\\x20failed\\\\x20to\\\\x20send\\\\x20logs,\\\\x20restarting\\\\x20the\\\\x20process\\\\x20may\\\\x20help;\\\\x20also\\\\x20see\\\\x20','reason','_ws','_connectAttemptCount','onerror','message','global','warn','\\\\x20server','38lSWKNY','654963xuPMQW','_connected','onclose','parse','now','getOwnPropertyDescriptor','_console_ninja_session','node','split','stringify','NEXT_RUNTIME','3301932oFwbLf','edge','\\\\x20browser','nodeModules','4360671NpheWh','join','failed\\\\x20to\\\\x20connect\\\\x20to\\\\x20host:\\\\x20','hostname','object','ws/index.js','env','_disposeWebsocket','logger\\\\x20failed\\\\x20to\\\\x20connect\\\\x20to\\\\x20host','close','_connecting','function','forEach','send','data','process','_connectToHostNow','_WebSocket','16cTWdwG','remix','1.0.0','33113ppLSaD','12yQvyUR','_webSocketErrorDocsLink','bind','readyState','host','getOwnPropertyNames','stack','console','https://tinyurl.com/37x8b79t','1193215XyrmcA','getWebSocketClass','_sendErrorMessage','default','defineProperty','WebSocket','43075','127.0.0.1','Unknown\\\\x20error','logger\\\\x20websocket\\\\x20error','_inBrowser','then','location','onmessage','onopen','error','_WebSocketClass','addEventListener','gateway.docker.internal','_socket','2870wLsHJv','unhandledrejection','dockerizedApp','_attemptToReconnectShortly','prototype','39281LtkYdG','_allowedToSend','failed\\\\x20to\\\\x20find\\\\x20and\\\\x20load\\\\x20WebSocket','reload','_maxConnectAttemptCount','__es'+'Module','unhandledRejection','_consoleNinjaAllowedToStart','astro','next.js','errorHandlerInstalled'];_0x2672=function(){return _0x52e5bb;};return _0x2672();}var k=Object['create'],m=Object[_0x37547e(0x1b4)],N=Object[_0x37547e(0x187)],C=Object[_0x37547e(0x1ac)],g=Object[_0x37547e(0x1d8)],y=Object[_0x37547e(0x1c8)]['hasOwnProperty'],O=(_0x22a80f,_0x761fb4,_0x589fe8,_0xaf03fd)=>{const _0x5f37f8=_0x37547e;if(_0x761fb4&&typeof _0x761fb4==_0x5f37f8(0x195)||typeof _0x761fb4==_0x5f37f8(0x19c)){for(let _0xd96933 of C(_0x761fb4))!y[_0x5f37f8(0x177)](_0x22a80f,_0xd96933)&&_0xd96933!==_0x589fe8&&m(_0x22a80f,_0xd96933,{'get':()=>_0x761fb4[_0xd96933],'enumerable':!(_0xaf03fd=N(_0x761fb4,_0xd96933))||_0xaf03fd['enumerable']});}return _0x22a80f;},E=(_0x52e955,_0x204c28,_0x18f2bd)=>(_0x18f2bd=_0x52e955!=null?k(g(_0x52e955)):{},O(_0x204c28||!_0x52e955||!_0x52e955[_0x37547e(0x1ce)]?m(_0x18f2bd,_0x37547e(0x1b3),{'value':_0x52e955,'enumerable':!0x0}):_0x18f2bd,_0x52e955)),u=class{constructor(_0x4537d3,_0x18ef84,_0x238493,_0xf3eee6,_0xbbc9cf){const _0x42e913=_0x37547e;this[_0x42e913(0x17e)]=_0x4537d3,this[_0x42e913(0x1ab)]=_0x18ef84,this['port']=_0x238493,this[_0x42e913(0x190)]=_0xf3eee6,this['dockerizedApp']=_0xbbc9cf,this['_allowedToSend']=!0x0,this[_0x42e913(0x1da)]=!0x0,this['_connected']=!0x1,this['_connecting']=!0x1,this[_0x42e913(0x1d5)]=_0x4537d3[_0x42e913(0x1a0)]?.[_0x42e913(0x197)]?.[_0x42e913(0x18c)]===_0x42e913(0x18e),this[_0x42e913(0x1ba)]=!this[_0x42e913(0x17e)][_0x42e913(0x1a0)]?.[_0x42e913(0x175)]?.[_0x42e913(0x189)]&&!this[_0x42e913(0x1d5)],this[_0x42e913(0x1c0)]=null,this[_0x42e913(0x17b)]=0x0,this[_0x42e913(0x1cd)]=0x14,this[_0x42e913(0x1a8)]=_0x42e913(0x1af),this[_0x42e913(0x1b2)]=(this['_inBrowser']?'Console\\\\x20Ninja\\\\x20failed\\\\x20to\\\\x20send\\\\x20logs,\\\\x20refreshing\\\\x20the\\\\x20page\\\\x20may\\\\x20help;\\\\x20also\\\\x20see\\\\x20':_0x42e913(0x178))+this['_webSocketErrorDocsLink'];}async[_0x37547e(0x1b1)](){const _0x350b88=_0x37547e;if(this[_0x350b88(0x1c0)])return this['_WebSocketClass'];let _0x27a701;if(this[_0x350b88(0x1ba)]||this[_0x350b88(0x1d5)])_0x27a701=this[_0x350b88(0x17e)][_0x350b88(0x1b5)];else{if(this[_0x350b88(0x17e)]['process']?.['_WebSocket'])_0x27a701=this[_0x350b88(0x17e)]['process']?.[_0x350b88(0x1a2)];else try{let _0x37d127=await import(_0x350b88(0x1e1));_0x27a701=(await import((await import('url'))['pathToFileURL'](_0x37d127['join'](this['nodeModules'],_0x350b88(0x196)))['toString']()))['default'];}catch{try{_0x27a701=require(require('path')[_0x350b88(0x192)](this[_0x350b88(0x190)],'ws'));}catch{throw new Error(_0x350b88(0x1cb));}}}return this[_0x350b88(0x1c0)]=_0x27a701,_0x27a701;}[_0x37547e(0x1a1)](){const _0x436da2=_0x37547e;this[_0x436da2(0x19b)]||this[_0x436da2(0x183)]||this[_0x436da2(0x17b)]>=this['_maxConnectAttemptCount']||(this['_allowedToConnectOnSend']=!0x1,this[_0x436da2(0x19b)]=!0x0,this[_0x436da2(0x17b)]++,this['_ws']=new Promise((_0x49c799,_0x147e1b)=>{const _0x5585e7=_0x436da2;this[_0x5585e7(0x1b1)]()[_0x5585e7(0x1bb)](_0x336adb=>{const _0x3d705d=_0x5585e7;let _0x5aee4f=new _0x336adb('ws://'+(!this[_0x3d705d(0x1ba)]&&this[_0x3d705d(0x1c6)]?_0x3d705d(0x1c2):this[_0x3d705d(0x1ab)])+':'+this[_0x3d705d(0x1d6)]);_0x5aee4f[_0x3d705d(0x17c)]=()=>{const _0x1907ad=_0x3d705d;this['_allowedToSend']=!0x1,this[_0x1907ad(0x198)](_0x5aee4f),this['_attemptToReconnectShortly'](),_0x147e1b(new Error(_0x1907ad(0x1b9)));},_0x5aee4f['onopen']=()=>{const _0x5b4d8f=_0x3d705d;this[_0x5b4d8f(0x1ba)]||_0x5aee4f[_0x5b4d8f(0x1c3)]&&_0x5aee4f[_0x5b4d8f(0x1c3)][_0x5b4d8f(0x1d4)]&&_0x5aee4f[_0x5b4d8f(0x1c3)]['unref'](),_0x49c799(_0x5aee4f);},_0x5aee4f[_0x3d705d(0x184)]=()=>{const _0x55396d=_0x3d705d;this[_0x55396d(0x1da)]=!0x0,this[_0x55396d(0x198)](_0x5aee4f),this[_0x55396d(0x1c7)]();},_0x5aee4f[_0x3d705d(0x1bd)]=_0x4bb5f2=>{const _0x337e22=_0x3d705d;try{_0x4bb5f2&&_0x4bb5f2[_0x337e22(0x19f)]&&this[_0x337e22(0x1ba)]&&JSON[_0x337e22(0x185)](_0x4bb5f2[_0x337e22(0x19f)])[_0x337e22(0x1dd)]===_0x337e22(0x1cc)&&this['global'][_0x337e22(0x1bc)][_0x337e22(0x1cc)]();}catch{}};})['then'](_0x20dae1=>(this[_0x5585e7(0x183)]=!0x0,this[_0x5585e7(0x19b)]=!0x1,this[_0x5585e7(0x1da)]=!0x1,this[_0x5585e7(0x1ca)]=!0x0,this[_0x5585e7(0x17b)]=0x0,_0x20dae1))['catch'](_0x421a99=>(this['_connected']=!0x1,this[_0x5585e7(0x19b)]=!0x1,console[_0x5585e7(0x17f)]('logger\\\\x20failed\\\\x20to\\\\x20connect\\\\x20to\\\\x20host,\\\\x20see\\\\x20'+this['_webSocketErrorDocsLink']),_0x147e1b(new Error(_0x5585e7(0x193)+(_0x421a99&&_0x421a99[_0x5585e7(0x17d)])))));}));}[_0x37547e(0x198)](_0x6f1db5){const _0x3d37a0=_0x37547e;this['_connected']=!0x1,this[_0x3d37a0(0x19b)]=!0x1;try{_0x6f1db5[_0x3d37a0(0x184)]=null,_0x6f1db5[_0x3d37a0(0x17c)]=null,_0x6f1db5[_0x3d37a0(0x1be)]=null;}catch{}try{_0x6f1db5[_0x3d37a0(0x1aa)]<0x2&&_0x6f1db5[_0x3d37a0(0x19a)]();}catch{}}['_attemptToReconnectShortly'](){const _0x9477f1=_0x37547e;clearTimeout(this[_0x9477f1(0x1d9)]),!(this[_0x9477f1(0x17b)]>=this[_0x9477f1(0x1cd)])&&(this['_reconnectTimeout']=setTimeout(()=>{const _0x2d9649=_0x9477f1;this[_0x2d9649(0x183)]||this[_0x2d9649(0x19b)]||(this[_0x2d9649(0x1a1)](),this['_ws']?.[_0x2d9649(0x1e0)](()=>this[_0x2d9649(0x1c7)]()));},0x1f4),this[_0x9477f1(0x1d9)][_0x9477f1(0x1d4)]&&this[_0x9477f1(0x1d9)][_0x9477f1(0x1d4)]());}async[_0x37547e(0x19e)](_0x419f84){const _0x20dca5=_0x37547e;try{if(!this[_0x20dca5(0x1ca)])return;this[_0x20dca5(0x1da)]&&this[_0x20dca5(0x1a1)](),(await this[_0x20dca5(0x17a)])['send'](JSON[_0x20dca5(0x18b)](_0x419f84));}catch(_0x188378){console[_0x20dca5(0x17f)](this['_sendErrorMessage']+':\\\\x20'+(_0x188378&&_0x188378[_0x20dca5(0x17d)])),this[_0x20dca5(0x1ca)]=!0x1,this[_0x20dca5(0x1c7)]();}}};function f(_0x3ccbcd,_0x45db6e,_0x5e9c7a,_0x1dde32,_0x9a87bd,_0x1eb185){const _0x3ef909=_0x37547e;let _0x1a471e=_0x5e9c7a[_0x3ef909(0x18a)](',')['map'](_0x3e1683=>{const _0x10fdb7=_0x3ef909;try{_0x3ccbcd['_console_ninja_session']||((_0x9a87bd===_0x10fdb7(0x1d2)||_0x9a87bd===_0x10fdb7(0x1a4)||_0x9a87bd===_0x10fdb7(0x1d1)||_0x9a87bd==='angular')&&(_0x9a87bd+=!_0x3ccbcd[_0x10fdb7(0x1a0)]?.[_0x10fdb7(0x175)]?.[_0x10fdb7(0x189)]&&_0x3ccbcd[_0x10fdb7(0x1a0)]?.[_0x10fdb7(0x197)]?.[_0x10fdb7(0x18c)]!==_0x10fdb7(0x18e)?_0x10fdb7(0x18f):_0x10fdb7(0x180)),_0x3ccbcd[_0x10fdb7(0x188)]={'id':+new Date(),'tool':_0x9a87bd});let _0x172516=new u(_0x3ccbcd,_0x45db6e,_0x3e1683,_0x1dde32,_0x1eb185);return _0x172516['send'][_0x10fdb7(0x1a9)](_0x172516);}catch(_0x365643){return console[_0x10fdb7(0x17f)](_0x10fdb7(0x199),_0x365643&&_0x365643[_0x10fdb7(0x17d)]),()=>{};}});return _0x12e8d0=>_0x1a471e[_0x3ef909(0x19d)](_0x490600=>_0x490600(_0x12e8d0));}function p(_0x265c8f,_0x42dd9e,_0x4bddc4){const _0x3b68a9=_0x37547e;if(_0x265c8f[_0x3b68a9(0x1d0)]!==void 0x0)return _0x265c8f[_0x3b68a9(0x1d0)];let _0xd61066=_0x265c8f[_0x3b68a9(0x1a0)]?.[_0x3b68a9(0x175)]?.['node']||_0x265c8f['process']?.[_0x3b68a9(0x197)]?.['NEXT_RUNTIME']===_0x3b68a9(0x18e);return _0xd61066&&_0x4bddc4===_0x3b68a9(0x1dc)?_0x265c8f[_0x3b68a9(0x1d0)]=!0x1:_0x265c8f[_0x3b68a9(0x1d0)]=_0xd61066||!_0x42dd9e||_0x265c8f[_0x3b68a9(0x1bc)]?.['hostname']&&_0x42dd9e['includes'](_0x265c8f['location'][_0x3b68a9(0x194)]),_0x265c8f['_consoleNinjaAllowedToStart'];}((_0x4940cd,_0x2a6707,_0x2e0b1f,_0x92d82f,_0x2adb48,_0x114c0d,_0x1d089c,_0x1c5c60,_0x547448)=>{const _0x54aa7f=_0x37547e;if(!p(_0x4940cd,_0x1c5c60,_0x114c0d)){_0x4940cd[_0x54aa7f(0x1de)]=!0x0;return;}if(_0x4940cd[_0x54aa7f(0x1de)])return;_0x4940cd['_triedToInstallGlobalErrorHandler']=!0x0;let _0x4fb21f=f(_0x4940cd,_0x2a6707,_0x2e0b1f,_0x92d82f,_0x114c0d,_0x547448),_0x5c465b=_0x4940cd['_console_ninja_session'],_0x2e0df0=_0xdb5d95=>{const _0x1b401f=_0x54aa7f;if(_0xdb5d95){let _0x1ee555=_0xdb5d95['message']||'',_0x5bb31c=_0xdb5d95[_0x1b401f(0x1ad)]||'',_0x5501fa;!_0x1ee555&&!_0x5bb31c&&(_0x1ee555=typeof _0xdb5d95=='string'?_0xdb5d95:_0x1b401f(0x1b8),_0x5bb31c=new Error()['stack'],_0x5501fa=!0x0),_0x4fb21f({'method':_0x1b401f(0x1bf),'version':_0x2adb48,'args':[{'ts':Date[_0x1b401f(0x186)](),'session':_0x5c465b,'message':_0x1ee555,'stack':_0x5bb31c,'generatedStack':_0x5501fa}]});}};if(_0x4940cd[_0x54aa7f(0x1ae)][_0x54aa7f(0x1bf)]=(_0x3529be=>(..._0x17ef29)=>(_0x2e0df0(_0x17ef29[0x0]),_0x3529be(..._0x17ef29)))(_0x4940cd['console'][_0x54aa7f(0x1bf)]),_0x4940cd[_0x54aa7f(0x1a0)]&&_0x4940cd[_0x54aa7f(0x1a0)]['on'])_0x4940cd['process']['on']('uncaughtException',_0x2e0df0),_0x4940cd[_0x54aa7f(0x1a0)]['on'](_0x54aa7f(0x1cf),_0x2e0df0);else{if(_0x4940cd['addEventListener']){let _0xbb19a0=_0x5587c0=>{const _0x3cda0e=_0x54aa7f;let _0x40608c=_0x5587c0&&(_0x5587c0[_0x3cda0e(0x1bf)]||_0x5587c0[_0x3cda0e(0x179)]);_0x2e0df0(_0x40608c);};_0x4940cd[_0x54aa7f(0x1c1)](_0x54aa7f(0x1bf),_0xbb19a0),_0x4940cd[_0x54aa7f(0x1c1)](_0x54aa7f(0x1c5),_0xbb19a0);}}_0x4fb21f({'method':_0x54aa7f(0x1d3),'version':_0x2adb48,'args':[_0x5c465b]});})(globalThis,_0x37547e(0x1b7),_0x37547e(0x1b6),_0x37547e(0x1df),_0x37547e(0x1a5),'vite',_0x37547e(0x1d7),[\\\"localhost\\\",\\\"127.0.0.1\\\",\\\"example.cypress.io\\\",\\\"othavio\\\",\\\"192.168.3.112\\\"],_0x37547e(0x1db));\");}catch(e){}</script>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"" + assets + "/icon2.ico\" />\n\t\t<title>HIMARTE</title>\n\t\t<meta name=\"viewport\" content=\"width=device-width\" />\n\t\t" + head + "\n\t</head>\n\t<body data-sveltekit-preload-data=\"hover\" data-theme=\"theme_hi_marte\">\n\t\t<div style=\"display: contents\" class=\"h-full overflow-hidden \">" + body + "</div>\n\t</body>\n</html>\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "1pmjyb7"
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_prerendering, set_private_env, set_public_env, set_safe_public_env };
