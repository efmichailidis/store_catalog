/**
 * Bundle of @staffbase/plugins-client-sdk
 * @file Staffbase plugins client SDK for JavaScript
 * @see https://github.com/Staffbase/plugins-client-sdk#readme
 * @version 3.0.0-alpha.4
 *
 * @author Stefan Staude <stefan.staude@staffbase.com>
 * @author Daniel Große <daniel.grosse@staffbase.com>
 *
 * @copyright  2026
 * @license Apache-2.0
 */
!function(e,a){"object"==typeof exports&&"undefined"!=typeof module?a(exports):"function"==typeof define&&define.amd?define(["exports"],a):a((e="undefined"!=typeof globalThis?globalThis:e||self)["plugins-client-sdk"]={})}(this,(function(e){"use strict";function a(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var n,o,l,t,i,r={exports:{}},c=r.exports;n||(n=1,function(e){var a,n;a=c,n=function(){var e=function(){},a="undefined",n=typeof window!==a&&typeof window.navigator!==a&&/Trident\/|MSIE /.test(window.navigator.userAgent),o=["trace","debug","info","warn","error"],l={},t=null;function i(e,a){var n=e[a];if("function"==typeof n.bind)return n.bind(e);try{return Function.prototype.bind.call(n,e)}catch(a){return function(){return Function.prototype.apply.apply(n,[e,arguments])}}}function r(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function c(){for(var n=this.getLevel(),l=0;l<o.length;l++){var t=o[l];this[t]=l<n?e:this.methodFactory(t,n,this.name)}if(this.log=this.debug,typeof console===a&&n<this.levels.SILENT)return"No console available for logging"}function s(e){return function(){typeof console!==a&&(c.call(this),this[e].apply(this,arguments))}}function d(o,l,t){return function(o){return"debug"===o&&(o="log"),typeof console!==a&&("trace"===o&&n?r:void 0!==console[o]?i(console,o):void 0!==console.log?i(console,"log"):e)}(o)||s.apply(this,arguments)}function m(e,n){var i,r,s,m=this,u="loglevel";function f(){var e;if(typeof window!==a&&u){try{e=window.localStorage[u]}catch(e){}if(typeof e===a)try{var n=window.document.cookie,o=encodeURIComponent(u),l=n.indexOf(o+"=");-1!==l&&(e=/^([^;]+)/.exec(n.slice(l+o.length+1))[1])}catch(e){}return void 0===m.levels[e]&&(e=void 0),e}}function y(e){var a=e;if("string"==typeof a&&void 0!==m.levels[a.toUpperCase()]&&(a=m.levels[a.toUpperCase()]),"number"==typeof a&&a>=0&&a<=m.levels.SILENT)return a;throw new TypeError("log.setLevel() called with invalid level: "+e)}"string"==typeof e?u+=":"+e:"symbol"==typeof e&&(u=void 0),m.name=e,m.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},m.methodFactory=n||d,m.getLevel=function(){return null!=s?s:null!=r?r:i},m.setLevel=function(e,n){return s=y(e),!1!==n&&function(e){var n=(o[e]||"silent").toUpperCase();if(typeof window!==a&&u){try{return void(window.localStorage[u]=n)}catch(e){}try{window.document.cookie=encodeURIComponent(u)+"="+n+";"}catch(e){}}}(s),c.call(m)},m.setDefaultLevel=function(e){r=y(e),f()||m.setLevel(e,!1)},m.resetLevel=function(){s=null,function(){if(typeof window!==a&&u){try{window.localStorage.removeItem(u)}catch(e){}try{window.document.cookie=encodeURIComponent(u)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}(),c.call(m)},m.enableAll=function(e){m.setLevel(m.levels.TRACE,e)},m.disableAll=function(e){m.setLevel(m.levels.SILENT,e)},m.rebuild=function(){if(t!==m&&(i=y(t.getLevel())),c.call(m),t===m)for(var e in l)l[e].rebuild()},i=y(t?t.getLevel():"WARN");var p=f();null!=p&&(s=y(p)),c.call(m)}(t=new m).getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var a=l[e];return a||(a=l[e]=new m(e,t.methodFactory)),a};var u=typeof window!==a?window.log:void 0;return t.noConflict=function(){return typeof window!==a&&window.log===t&&(window.log=u),t},t.getLoggers=function(){return l},t.default=t,t},e.exports?e.exports=n():a.log=n()}(r));var s=i?t:(i=1,t="function"==typeof Object.entries?Object.entries:function(){if(l)return o;l=1;var e=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},a=function(e,a){return Object.prototype.propertyIsEnumerable.call(e,a)};return o=function(n){if(null==n)throw new TypeError("Cannot convert undefined or null to object");var o=[];for(var l in n)e(n,l)&&a(n,l)&&o.push([l,n[l]]);return o}}());const d={ios:"dev-ios",android:"dev-android",version:"app-version",mobile:"app-mobile",native:"app-native",instanceUrl:"instance-url",openLink:"openExternalLink",nativeUpload:"nativeFileUpload",nativeShare:"nativeShareDialog",langInfos:"getLanguageInfos",branchDefaultLang:"getBranchDefaultLanguage",prefContentLang:"getPreferredContentLocale",userContentLocale:"getUserContentLocale"},m=a(s)(d).reduce(((e,a)=>{let[n,o]=a;return e[o]=n,e}),{});var u={af:{key:"af",locale:"af_ZA",name:"Afrikaans",localizedName:"Afrikaans"},am:{key:"am",locale:"am_ET",name:"አማርኛ",localizedName:"Amharic"},ar:{key:"ar",locale:"ar_SA",name:"العربية (المملكة العربية السعودية)",direction:"rtl",localizedName:"Arabic (Saudi Arabia)"},arAE:{key:"arAE",locale:"ar_AE",name:"العربية (الإمارات العربية المتحدة)",direction:"rtl",localizedName:"Arabic (United Arab Emirates)"},arEG:{key:"arEG",locale:"ar_EG",name:"العربية (مصر)",direction:"rtl",localizedName:"Arabic (Egypt)"},bg:{key:"bg",locale:"bg_BG",name:"български",localizedName:"Bulgarian"},bn:{key:"bn",locale:"bn_BD",name:"বাংলা",localizedName:"Bengali"},bs:{key:"bs",locale:"bs_BA",name:"Bosanski",localizedName:"Bosnian"},cs:{key:"cs",locale:"cs_CZ",name:"Čeština",localizedName:"Czech"},cy:{key:"cy",locale:"cy_GB",name:"Cymraeg",localizedName:"Welsh"},da:{key:"da",locale:"da_DK",name:"Dansk",localizedName:"Danish"},de:{key:"de",locale:"de_DE",name:"Deutsch",localizedName:"German"},el:{key:"el",locale:"el_GR",name:"Ελληνικά",localizedName:"Greek"},en:{key:"en",locale:"en_US",name:"English",localizedName:"English"},enGB:{key:"enGB",locale:"en_GB",name:"English (United Kingdom)",localizedName:"English (United Kingdom)"},es:{key:"es",locale:"es_ES",name:"Español (España)",localizedName:"Spanish (Spain)"},esMX:{key:"esMX",locale:"es_MX",name:"Español (México)",localizedName:"Spanish (Mexico)"},et:{key:"et",locale:"et_EE",name:"Eesti keel",localizedName:"Estonian"},fi:{key:"fi",locale:"fi_FI",name:"Suomi",localizedName:"Finnish"},fr:{key:"fr",locale:"fr_FR",name:"Français (France)",localizedName:"French (France)"},frCA:{key:"frCA",locale:"fr_CA",name:"Français (Canada)",localizedName:"French (Canada)"},he:{key:"he",locale:"he_IL",name:"עִבְרִית",direction:"rtl",localizedName:"Hebrew"},hi:{key:"hi",locale:"hi_IN",name:"िन्दी",localizedName:"Hindi"},hk:{key:"hk",locale:"zh_HK",name:"繁體中文",localizedName:"Chinese traditional"},ht:{key:"ht",locale:"ht_HT",name:"kreyòl ayisyen",localizedName:"Haitian Creole"},hr:{key:"hr",locale:"hr_HR",name:"Hrvatski",localizedName:"Croatian"},hu:{key:"hu",locale:"hu_HU",name:"Magyar",localizedName:"Hungarian"},id:{key:"id",locale:"id_ID",name:"Bahasa Indonesia",localizedName:"Indonesian"},is:{key:"is",locale:"is_IS",name:"Íslenska",localizedName:"Icelandic"},it:{key:"it",locale:"it_IT",name:"Italiano",localizedName:"Italian"},ja:{key:"ja",locale:"ja_JP",name:"日本語",localizedName:"Japanese"},kl:{key:"kl",locale:"kl_GL",name:"Kalaallisut",localizedName:"Greenlandic"},km:{key:"km",locale:"km_KH",name:"ខ្មែរ",localizedName:"Khmer"},ko:{key:"ko",locale:"ko_KR",name:"한국어",localizedName:"Korean"},lo:{key:"lo",locale:"lo_LA",name:"ລາວ",localizedName:"Lao"},lt:{key:"lt",locale:"lt_LT",name:"Lietuvių",localizedName:"Lithuanian"},lv:{key:"lv",locale:"lv_LV",name:"Latviešu",localizedName:"Latvian"},mg:{key:"mg",locale:"mg_MG",name:"Malagasy",localizedName:"Malagasy"},mk:{key:"mk",locale:"mk_MK",name:"Македонски",localizedName:"Macedonian"},mh:{key:"mh",locale:"mh_MH",name:"Kajin M̧ajeļ",localizedName:"Marshallese"},mi:{key:"mi",locale:"mi_NZ",name:"Māori",localizedName:"Māori"},mn:{key:"mn",locale:"mn_MN",name:"монгол",localizedName:"Mongolian"},mr:{key:"mr",locale:"mr_IN",name:"मराठी",localizedName:"Marathi"},ms:{key:"ms",locale:"ms_MY",name:"Bahasa Melayu",localizedName:"Malay"},my:{key:"my",locale:"my_MM",name:"Burmese",localizedName:"Burmese"},ne:{key:"ne",locale:"ne_NP",name:"नेपाली",localizedName:"Nepali"},nl:{key:"nl",locale:"nl_NL",name:"Nederlands",localizedName:"Dutch"},nlBE:{key:"nlBE",locale:"nl_BE",name:"Vlaemsch",localizedName:"Flemish"},no:{key:"no",locale:"no_NO",name:"Norsk",localizedName:"Norwegian"},pl:{key:"pl",locale:"pl_PL",name:"Polski",localizedName:"Polish"},pt:{key:"pt",locale:"pt_PT",name:"Português (Portugal)",localizedName:"Portuguese (Portugal)"},ptBR:{key:"ptBR",locale:"pt_BR",name:"Português (Brasil)",localizedName:"Portuguese (Brazil)"},ro:{key:"ro",locale:"ro_RO",name:"Română",localizedName:"Romanian"},ru:{key:"ru",locale:"ru_RU",name:"Русский",localizedName:"Russian"},si:{key:"si",locale:"si_LK",name:"සිංහල",localizedName:"Sinhala"},sk:{key:"sk",locale:"sk_SK",name:"Slovenský",localizedName:"Slovak"},sl:{key:"sl",locale:"sl_SI",name:"Slovenščina",localizedName:"Slovenian"},sq:{key:"sq",locale:"sq_AL",name:"Shqip",localizedName:"Albanian"},sr:{key:"sr",locale:"sr_RS",name:"Српски",localizedName:"Serbian"},so:{key:"so",locale:"so_SO",name:"Af-Soomaali",localizedName:"Somali"},sv:{key:"sv",locale:"sv_SE",name:"Svenska",localizedName:"Swedish"},sw:{key:"sw",locale:"sw_TZ",name:"Swahili",localizedName:"Swahili"},ta:{key:"ta",locale:"ta_IN",name:"தமிழ்",localizedName:"Tamil"},tl:{key:"tl",locale:"tl_PH",name:"Filipino",localizedName:"Filipino"},th:{key:"th",locale:"th_TH",name:"ภาษาไทย",localizedName:"Thai"},tr:{key:"tr",locale:"tr_TR",name:"Türkçe",localizedName:"Turkish"},uk:{key:"uk",locale:"uk_UA",name:"Українська",localizedName:"Ukrainian"},ur:{key:"ur",locale:"ur_PK",name:"اُردُو",direction:"rtl",localizedName:"Urdu"},vi:{key:"vi",locale:"vi_VN",name:"Tiếng Việt",localizedName:"Vietnamese"},zh:{key:"zh",locale:"zh_CN",name:"简体中文",localizedName:"Chinese"},zu:{key:"zu",locale:"zu_ZA",name:"isiZulu",localizedName:"Zulu"}};const f=navigator.userAgent||navigator.vendor||window.opera||"",y=(p=(p=window&&window.navigator.language)&&p.split(/-|_/)[0]||p,-1!==["nb","nn"].indexOf(p)&&(p="no"),"iw"===p&&(p="he"),p);var p;"undefined"!=typeof window&&(window.Staffbase=window.Staffbase||{},window.Staffbase.platform=window.Staffbase.platform||{version:"3.4",mobile:/Android|webOS|iPhone|iPad|BlackBerry|BB10|IEMobile|Opera Mini/i.test(f),native:!1});const g=()=>"ios"===window.Staffbase.platform.native||/iPhone|iPad|iPod/i.test(f),h=e=>{window.open(e,"_blank")},v=()=>u[y]||u.en,k=e=>{const a=v().locale;if(!e)return a;if(Array.isArray(e)){const n=e.indexOf(a);return e[n]||e[0]}{const n=Object.keys(e),o=n.indexOf(a);return n[o]||n[0]}};let w=null;const N=async function(e){for(var a=arguments.length,n=new Array(a>1?a-1:0),o=1;o<a;o++)n[o-1]=arguments[o];switch(e){case d.version:return window.Staffbase.platform.version;case d.native:return(()=>{const e=/safari/i.test(f);return"android"===window.Staffbase.platform.native||"ios"===window.Staffbase.platform.native||!e&&g()})();case d.mobile:return window.Staffbase.platform.mobile;case d.ios:return g();case d.android:return"android"===window.Staffbase.platform.native||/Android/i.test(f);case d.openLink:return h.apply(null,n);case d.langInfos:return(()=>{const e=v();return{contentLanguage:e,branchLanguages:u,branchDefaultLanguage:e,deviceLanguage:e,contentLanguages:u}})();case d.branchDefaultLang:return v();case d.prefContentLang:return k.apply(null,n);case d.userContentLocale:return v().locale;case d.instanceUrl:return window.location.ancestorOrigins&&window.location.ancestorOrigins[0]||document.referrer||"";case d.nativeUpload:case d.nativeShare:return;default:throw new Error("Command "+e+" not supported by driver")}};var z="HELLO",b="SUCCESS",L="INVOCATION",_="ERROR";const S={[d.openLink]:"openLink",[d.nativeUpload]:"nativeFileUpload",[d.nativeShare]:"nativeShareDialog",[d.langInfos]:"getPluginLanguageInfo",[d.prefContentLang]:"getPreferredContentLocale"};let E={};function A(){const e=Math.floor(65536*(1+Math.random())).toString(16).substring(1);return e in E?A():(E[e]={resolve:null,reject:null,promise:null},e)}const I=()=>{const e=A(),a=new Promise((function(a,n){E[e].resolve=a,E[e].reject=n}));return E[e].promise=a,e},C=(e,a)=>{e in E&&(E[e].reject(a),delete E[e])},M=e=>{if(!(e in E))throw new Error("Tried to get an unknown ["+e+"] promise.");return E[e].promise};let B=null;const T=()=>{window.removeEventListener("message",U),B=null},U=async e=>{let a,n,o;try{({data:[a,n,o]}=e)}catch(e){return}switch(a){case b:((e,a)=>{e in E&&(E[e].resolve(a),delete E[e])})(n,o);break;case _:C(n,o);break;default:return}},P=e=>async function(a){switch(a){case d.version:case d.native:case d.mobile:case d.ios:case d.android:case d.branchDefaultLang:case d.instanceUrl:return e[m[a]];case d.langInfos:case d.openLink:case d.nativeUpload:case d.nativeShare:case d.prefContentLang:for(var n=arguments.length,o=new Array(n>1?n-1:0),l=1;l<n;l++)o[l-1]=arguments[l];return R(I())(S[a],o);default:throw new Error("Command "+a+" not supported by driver")}},R=e=>(a,n)=>(window.parent.postMessage([L,e,a,n],"*"),M(e));let D;const O=async()=>{const e=(()=>{if(B)return B;const e=I();let a;B=M(e).then((e=>(window.clearTimeout(a),P((e=>{let{platform:a,language:n,instance:o}=e;return{mobile:a.mobile,version:a.version,native:!!a.native,ios:"ios"===a.native,android:"android"===a.native,langInfos:n,branchDefaultLanguage:n.branchDefaultLanguage,instanceUrl:o&&o.url||""}})(e))))),window.addEventListener("message",U);const n=function(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500;a=window.setTimeout((()=>{o<1200?n(1.2*o):(C(e,"No answer from Staffbase App"),T())}),o),window.parent.postMessage([z,e,[]],"*")};return n(),B})(),a=w||(w=new Promise((e=>{setTimeout((function(){e(N)}),500)})),w),n=[e],o=n.concat(a);return Promise.race(n).then((e=>{D=e})),await Promise.race(o)},x=async function(e){D||(D=O());const a=await D;for(var n=arguments.length,o=new Array(n>1?n-1:0),l=1;l<n;l++)o[l-1]=arguments[l];return a(e,...o)},F=async()=>x(d.version),j=async()=>x(d.native),G=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,H=e=>{if("string"!=typeof e)throw new TypeError("Invalid argument expected string");const a=e.match(G);if(!a)throw new Error(`Invalid argument not valid semver ('${e}' received)`);return a.shift(),a},K=e=>"*"===e||"x"===e||"X"===e,V=e=>{const a=parseInt(e,10);return isNaN(a)?e:a},Z=(e,a)=>{if(K(e)||K(a))return 0;const[n,o]=((e,a)=>typeof e!=typeof a?[String(e),String(a)]:[e,a])(V(e),V(a));return n>o?1:n<o?-1:0},q=(e,a)=>{for(let n=0;n<Math.max(e.length,a.length);n++){const o=Z(e[n]||"0",a[n]||"0");if(0!==o)return o}return 0},X=async()=>x(d.ios),J=async()=>{let[e,a,n]=await Promise.all([j(),F(),X()]);const o=a.indexOf("-");return a=a.substring(0,-1!=o?o:a.length),!(((e,a)=>{const n=H(e),o=H(a),l=n.pop(),t=o.pop(),i=q(n,o);return 0!==i?i:l&&t?q(l.split("."),t.split(".")):l||t?l?-1:1:0})(a,"3.5")<0&&e&&n)};e.deviceCanDownload=async()=>J(),e.getAppVersion=async()=>F(),e.getBranchDefaultLanguage=async()=>(async()=>x(d.langInfos).then((e=>e.branchDefaultLanguage)))(),e.getBranchLanguages=async()=>(async()=>x(d.langInfos).then((e=>e.branchLanguages)))(),e.getContentLanguages=async()=>(async()=>x(d.langInfos).then((e=>e.contentLanguages)))(),e.getInstanceUrl=async()=>(async()=>x(d.instanceUrl))(),e.getPreferredContentLocale=async e=>(async e=>x(d.prefContentLang,e))(e),e.getUserContentLocale=async()=>(async()=>x(d.langInfos).then((e=>e.userContentLocale)))(),e.isAndroidDevice=async()=>(async()=>x(d.android))(),e.isIosDevice=async()=>X(),e.isMobileApp=async()=>(async()=>x(d.mobile))(),e.isNativeApp=async()=>j(),e.openLink=async e=>(async e=>x(d.openLink,e))(e),e.openLinkExternal=async e=>(async e=>x(d.openLink,e,{inAppBrowser:!1}))(e),e.openLinkInternal=async e=>(async e=>x(d.openLink,e,{inAppBrowser:!0}))(e),e.openNativeFileDialog=async()=>x(d.nativeUpload),e.openNativeShareDialog=async e=>(async e=>x(d.nativeShare,e))(e)}));

(function(){
"use strict";
// Endpoint που επιστρέφει { success, items: { stores: [[...]], facilities: [[...]] } }
const API_URL = "/api/sheets";

const coll = new Intl.Collator("el",{numeric:true,sensitivity:"base"});
const nf = new Intl.NumberFormat("el-GR",{maximumFractionDigits:2});
const PALETTE = ["#A92A1F","#D27A22","#3D7A57","#2E5C8A","#7B4D8E","#8A7531","#3F8587","#9A4636","#5A6670","#B08E5C","#6F8B3A","#B24E7A"];
const EMPTY = "\u0000";
const EMPTY_LABEL = "Χωρίς τιμή";

const SCHEMAS = {
  stores:{
    label:"Καταστήματα", one:"κατάστημα", many:"καταστήματα",
    fields:{code:["Κωδικός"],name:["Ονομασία"],type:["Τύπος Καταστήματος"],address:["Διεύθυνση"],tk:["ΤΚ"],city:["Πόλη / Περιοχή"],geo:["Γεωγραφική Περιφέρεια"],network:["ΔΙΚΤΥΟ","Δίκτυο Εξυπηρέτησης"],region:["ΠΕΡΙΦΕΡΕΙΑ"],status:["Κατάσταση"],loctype:["Τύπος τοποθεσίας"],owner:["Ιδιοκτησιακό καθεστώς"],area:["Επιφάνεια ακινήτου (τ.μ.)"],desc:["Ανάλυση / περιγραφή ακινήτου"],email:["Email"],update:["ΤΕΛΕΥΤΑΙΑ ΕΝΗΜΕΡΩΣΗ"]},
    typeLabel:"Τύπος", mixTitle:"Κατανομή ανά τύπο καταστήματος",
    facets:[["type","Τύπος"],["status","Κατάσταση"],["geo","Γεωγρ. περιφέρεια"],["network","Δίκτυο"],["region","Περιφέρεια"],["loctype","Τύπος τοποθεσίας"]]
  },
  facilities:{
    label:"Εγκαταστάσεις", one:"εγκατάσταση", many:"εγκαταστάσεις",
    fields:{code:["Κωδικός Εγκατάστασης","Κωδικός"],name:["Ονομασία"],type:["Κατηγορία Εγκατάστασης"],address:["Διεύθυνση"],tk:["ΤΚ"],city:["Πόλη / Περιοχή"],geo:["Γεωγραφική Περιφέρεια"],network:["Δίκτυο Εξυπηρέτησης","ΔΙΚΤΥΟ"],region:["ΠΕΡΙΦΕΡΕΙΑ"],status:["Κατάσταση"],loctype:["Τύπος τοποθεσίας"],owner:["Ιδιοκτησιακό καθεστώς"],area:["Επιφάνεια ακινήτου (τ.μ.)"],desc:["Ανάλυση / περιγραφή ακινήτου"],email:["Email"],update:["ΤΕΛΕΥΤΑΙΑ ΕΝΗΜΕΡΩΣΗ"]},
    typeLabel:"Κατηγορία", mixTitle:"Κατανομή ανά κατηγορία εγκατάστασης",
    facets:[["type","Κατηγορία"],["status","Κατάσταση"],["geo","Γεωγρ. περιφέρεια"],["network","Δίκτυο"],["loctype","Τύπος τοποθεσίας"]]
  }
};
// Spelling variants of the same store type are merged so filters don't split them.
const TYPE_ALIASES = {"SELF SERVICE":"SELF-SERVICE","FOOD TO GO":"FTG"};

const COLUMNS = [
  {key:"code",label:"Κωδικός",cls:"code"},
  {key:"name",label:"Ονομασία",cls:"name"},
  {key:"type",label:null},
  {key:"city",label:"Τοποθεσία"},
  {key:"map",label:"Χάρτης",nosort:true,cls:"map"},
  {key:"geo",label:"Γεωγρ. περιφέρεια"},
  {key:"network",label:"Δίκτυο"},
  {key:"status",label:"Κατάσταση"},
  {key:"area",label:"Επιφάνεια (τ.μ.)",cls:"num"}
];

const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const fold = s => String(s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
const clean = v => (v==null?"":String(v)).replace(/\s+$/,"").replace(/^\s+/,"");

function parseArea(s){
  const m = clean(s).match(/\d[\d.]*(,\d*)?/);
  if(!m) return null;
  const n = parseFloat(m[0].replace(/\./g,"").replace(",","."));
  return isFinite(n) ? n : null;
}

function buildDataset(kind, rows){
  const sc = SCHEMAS[kind];
  if(!Array.isArray(rows) || !rows.length || !Array.isArray(rows[0])) return null;
  const header = rows[0].map(h=>clean(h).toLowerCase());
  const idx = {};
  for(const [k,names] of Object.entries(sc.fields)){
    idx[k] = -1;
    for(const n of names){ const i = header.indexOf(n.toLowerCase()); if(i>=0){ idx[k]=i; break; } }
  }
  const has = k => idx[k] >= 0;
  let updateNote = "";
  const items = [];
  rows.slice(1).forEach((r,i)=>{
    if(!Array.isArray(r)) return;
    const g = k => has(k) ? clean(r[idx[k]]) : "";
    if(!updateNote && g("update")) updateNote = g("update");
    if(!g("code") && !g("name")) return;
    let type = g("type"); type = TYPE_ALIASES[type.toUpperCase()] || type;
    const it = {
      id: kind+":"+i, code:g("code"), name:g("name"), type, address:g("address"), tk:g("tk"), city:g("city"),
      geo:g("geo"), network:g("network"), region:g("region"), status:g("status"), loctype:g("loctype"),
      owner:g("owner"), areaRaw:g("area"), area:parseArea(g("area")), desc:g("desc"),
      emails: g("email").split(/[\s,;]+/).filter(e=>e.includes("@"))
    };
    it.hay = fold([it.code,it.name,it.address,it.tk,it.tk.replace(/\s/g,""),it.city,it.region,it.network,it.desc,it.emails.join(" ")].join(" | "));
    items.push(it);
  });
  const facets = sc.facets.filter(([k])=>has(k));
  const typeValues = [...new Set(items.map(i=>i.type||EMPTY))]
    .sort((a,b)=>items.filter(i=>(i.type||EMPTY)===b).length - items.filter(i=>(i.type||EMPTY)===a).length);
  const colors = {}; typeValues.forEach((t,i)=>colors[t] = t===EMPTY ? "#8C949B" : PALETTE[i % PALETTE.length]);
  return {kind, sc, items, facets, has, colors, updateNote};
}

const state = {tab:"stores", data:{}, view:{}};
function freshView(){ return {q:"", sel:{}, amin:"", amax:"", anull:false, sort:{key:"name",dir:1}, open:new Set()}; }

function load(json, sourceLabel, keepViews){
  const items = json && json.items;
  if(!items || (!items.stores && !items.facilities)) throw new Error("Το αρχείο δεν περιέχει items.stores ή items.facilities.");
  const data = {};
  for(const k of ["stores","facilities"]){
    if(items[k]){ const d = buildDataset(k, items[k]); if(d) data[k]=d; }
  }
  if(!Object.keys(data).length) throw new Error("Οι πίνακες δεν έχουν την αναμενόμενη μορφή (πρώτη γραμμή επικεφαλίδες, μετά γραμμές τιμών).");
  state.data = data;
  for(const k of Object.keys(data)) if(!keepViews || !state.view[k]) state.view[k] = freshView();
  if(!data[state.tab]) state.tab = Object.keys(data)[0];
  $("source").textContent = sourceLabel;
  renderAll();
}

/* ---------- filtering ---------- */
const D = () => state.data && state.data[state.tab];
const V = () => state.view[state.tab];
const val = (it,k) => it[k] || EMPTY;

function passes(it, v, except){
  for(const [k,set] of Object.entries(v.sel)){
    if(k===except || !set.size) continue;
    if(!set.has(val(it,k))) return false;
  }
  if(except!=="area"){
    if(v.anull){ if(it.area!=null) return false; }
    else{
      const mn = v.amin===""?null:+v.amin, mx = v.amax===""?null:+v.amax;
      if(mn!=null && (it.area==null || it.area<mn)) return false;
      if(mx!=null && (it.area==null || it.area>mx)) return false;
    }
  }
  if(v.q){
    const terms = fold(v.q).split(/\s+/).filter(Boolean);
    for(const t of terms) if(!it.hay.includes(t)) return false;
  }
  return true;
}
function counts(key){
  const d=D(), v=V(), m=new Map();
  for(const it of d.items){ if(passes(it,v,key)){ const x=val(it,key); m.set(x,(m.get(x)||0)+1); } }
  return m;
}
function allValues(key){
  const s=new Set(D().items.map(it=>val(it,key)));
  return [...s].sort((a,b)=> a===EMPTY?1 : b===EMPTY?-1 : coll.compare(a,b));
}
function sortItems(list){
  const {key,dir}=V().sort;
  const get = it => key==="area" ? it.area : (key==="city" ? (it.city||"") : (it[key]||""));
  return list.slice().sort((a,b)=>{
    const x=get(a), y=get(b);
    const ex = x===null||x==="", ey = y===null||y==="";
    if(ex&&ey) return coll.compare(a.name,b.name);
    if(ex) return 1; if(ey) return -1;
    const c = key==="area" ? x-y : coll.compare(x,y);
    return c ? c*dir : coll.compare(a.name,b.name);
  });
}

/* ---------- rendering ---------- */
function renderAll(){ renderTabs(); renderFacetShells(); renderSortSelect(); syncInputs(); render(); }

function renderTabs(){
  $("tabs").innerHTML = Object.values(state.data).map(d=>
    `<button class="tab" role="tab" data-tab="${d.kind}" aria-selected="${d.kind===state.tab}">${esc(d.sc.label)}<span class="count">${d.items.length}</span></button>`
  ).join("");
}
function renderFacetShells(){
  $("facets").innerHTML = D().facets.map(([k,label])=>
    `<details class="facet" data-key="${k}"><summary>${esc(label)}<span class="b"></span></summary><div class="menu"><div class="list"></div><div class="menu-foot"><button class="btn link" data-clear="${k}" type="button">Καθαρισμός</button></div></div></details>`
  ).join("");
}
function renderSortSelect(){
  const opts=[];
  for(const c of COLUMNS){
    if(c.nosort) continue;
    const l = c.label || D().sc.typeLabel;
    if(c.key==="area"){ opts.push(["area:-1",l+": μεγαλύτερη πρώτα"],["area:1",l+": μικρότερη πρώτα"]); }
    else opts.push([c.key+":1",l+": Α→Ω"],[c.key+":-1",l+": Ω→Α"]);
  }
  $("sortsel").innerHTML = opts.map(([v,l])=>`<option value="${v}">Ταξινόμηση: ${esc(l)}</option>`).join("");
}
function syncInputs(){
  const v=V(); $("q").value=v.q; $("amin").value=v.amin; $("amax").value=v.amax; $("anull").checked=v.anull;
}

function render(){
  const d=D(), v=V();
  const list = sortItems(d.items.filter(it=>passes(it,v)));
  renderMix(); renderFacetLists(); renderChips(); renderHead(); renderBody(list);
  $("sortsel").value = v.sort.key+":"+v.sort.dir;
  const total = list.reduce((s,it)=>s+(it.area||0),0);
  const missing = list.filter(it=>it.area==null).length;
  $("count").innerHTML = list.length===d.items.length
    ? `<strong>${list.length}</strong> ${d.sc.many}, συνολική επιφάνεια <strong>${nf.format(total)}</strong> τ.μ.` + (missing?` <span class="muted">(${missing} χωρίς επιφάνεια)</span>`:"")
    : `Εμφανίζονται <strong>${list.length}</strong> από ${d.items.length} ${d.sc.many}, συνολική επιφάνεια <strong>${nf.format(total)}</strong> τ.μ.` + (missing?` <span class="muted">(${missing} χωρίς επιφάνεια)</span>`:"");
  const note = $("note");
  if(d.updateNote){
    const [first,...rest] = d.updateNote.split("\n");
    note.hidden=false;
    note.innerHTML = `<summary>Τελευταία ενημέρωση φύλλου: ${esc(first)}</summary>${rest.length?`<pre>${esc(rest.join("\n"))}</pre>`:""}`;
  } else note.hidden=true;
}

function renderMix(){
  const d=D(), v=V(), c=counts("type"), sel=v.sel.type||new Set();
  const vals = Object.keys(d.colors);
  const totalShown = [...c.values()].reduce((a,b)=>a+b,0);
  const isDim = t => sel.size ? !sel.has(t) : !(c.get(t));
  const lbl = t => t===EMPTY?EMPTY_LABEL:t;
  const barW = $("mix").clientWidth || 800;
  $("mix").innerHTML =
    `<div class="mix-head"><h2>${esc(d.sc.mixTitle)}</h2><span class="muted">Πατήστε έναν τύπο για φιλτράρισμα</span></div>
     <div class="bar">${totalShown ? vals.filter(t=>c.get(t)).map(t=>
       `<button class="seg ${isDim(t)?"dim":""}" style="--n:${c.get(t)};--c:${d.colors[t]}" data-type="${esc(t)}" title="${esc(lbl(t))}: ${c.get(t)}" aria-label="${esc(lbl(t))}, ${c.get(t)}" tabindex="-1">${c.get(t)/totalShown*barW > lbl(t).length*8+20?esc(lbl(t)):""}</button>`).join("") : ""}</div>
     <ul class="legend">${vals.map(t=>
       `<li><button style="--c:${d.colors[t]}" data-type="${esc(t)}" aria-pressed="${sel.has(t)}" class="${isDim(t)?"dim":""}"><span class="sw"></span>${esc(lbl(t))} <span class="n">${c.get(t)||0}</span></button></li>`).join("")}</ul>`;
}

function renderFacetLists(){
  const v=V();
  document.querySelectorAll("#facets details.facet").forEach(det=>{
    const k=det.dataset.key, c=counts(k), sel=v.sel[k]||new Set();
    const focused = document.activeElement && det.contains(document.activeElement) ? document.activeElement.value : null;
    det.querySelector(".list").innerHTML = allValues(k).map(x=>{
      const n=c.get(x)||0;
      return `<label class="${n?"":"zero"}"><input type="checkbox" value="${esc(x)}" ${sel.has(x)?"checked":""}><span class="lbl ${x===EMPTY?"empty-val":""}">${esc(x===EMPTY?EMPTY_LABEL:x)}</span><span class="n">${n}</span></label>`;
    }).join("");
    det.classList.toggle("active", sel.size>0);
    det.querySelector("summary .b").innerHTML = sel.size?`<span class="badge">${sel.size}</span>`:"";
    if(focused!=null){ const el=[...det.querySelectorAll("input")].find(i=>i.value===focused); if(el) el.focus(); }
  });
  const areaOn = v.anull || v.amin!=="" || v.amax!=="";
  $("areaFacet").classList.toggle("active", areaOn);
}

function renderChips(){
  const d=D(), v=V(), chips=[];
  const label = k => (d.facets.find(f=>f[0]===k)||[k,k])[1];
  for(const [k,set] of Object.entries(v.sel)) for(const x of set)
    chips.push(`<button class="chip" data-chip="${k}" data-val="${esc(x)}">${esc(label(k))}: ${esc(x===EMPTY?EMPTY_LABEL:x)}<span class="x" aria-hidden="true">×</span><span class="sr">Αφαίρεση</span></button>`);
  if(v.anull) chips.push(`<button class="chip" data-chip="area">Χωρίς επιφάνεια<span class="x">×</span></button>`);
  else if(v.amin!==""||v.amax!=="") chips.push(`<button class="chip" data-chip="area">Επιφάνεια ${v.amin!==""?"από "+nf.format(v.amin):""} ${v.amax!==""?"έως "+nf.format(v.amax):""} τ.μ.<span class="x">×</span></button>`);
  if(v.q) chips.push(`<button class="chip" data-chip="q">Αναζήτηση: «${esc(v.q)}»<span class="x">×</span></button>`);
  if(chips.length>1) chips.push(`<button class="btn link" data-chip="all">Καθαρισμός όλων</button>`);
  $("chips").innerHTML = chips.join("");
}

function renderHead(){
  const v=V();
  $("thead").innerHTML = "<tr>" + COLUMNS.map(c=>{
    const l = c.label || D().sc.typeLabel;
    if(c.nosort) return `<th class="${c.cls||""}"><span class="th-plain">${esc(l)}</span></th>`;
    const on = v.sort.key===c.key;
    const aria = on ? (v.sort.dir===1?"ascending":"descending") : "none";
    const arrow = on ? (v.sort.dir===1?"▲":"▼") : "▲";
    return `<th class="${c.cls||""}" aria-sort="${aria}"><button data-sort="${c.key}">${esc(l)}<span class="arrow" aria-hidden="true">${arrow}</span></button></th>`;
  }).join("") + `<th aria-label="Λεπτομέρειες"></th></tr>`;
}

const blank = `<span class="blank">—</span>`;
// Google Maps search με τη διεύθυνση, γιατί τα δεδομένα δεν έχουν συντεταγμένες.
function mapsUrl(it){
  const parts = [it.address, [it.tk,it.city].filter(Boolean).join(" ")].filter(Boolean);
  if(!parts.length) return "";
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(parts.join(", ") + ", Ελλάδα");
}
function mapLink(it){
  const u = mapsUrl(it);
  if(!u) return blank;
  const addr = [it.address,[it.tk,it.city].filter(Boolean).join(" ")].filter(Boolean).join(", ");
  return `<a class="maplink" data-addr="${esc(addr)}" href="${esc(u)}" target="_blank" rel="noopener noreferrer" title="Άνοιγμα στο Google Maps (νέα καρτέλα)"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg><span class="sr">Χάρτης για ${esc(it.name||it.code)}, ανοίγει σε νέα καρτέλα</span><span class="ext" aria-hidden="true">↗</span></a>`;
}
const txt = s => s ? esc(s) : blank;

function renderBody(list){
  const d=D(), v=V(), tl=d.sc.typeLabel;
  if(!list.length){
    $("tbody").innerHTML = `<tr><td colspan="${COLUMNS.length+1}" class="empty"><p>Κανένα αποτέλεσμα με αυτά τα φίλτρα.</p><button class="btn" data-chip="all">Καθαρισμός φίλτρων</button></td></tr>`;
    return;
  }
  $("tbody").innerHTML = list.map(it=>{
    const open = v.open.has(it.id);
    const st = it.status==="Σε λειτουργία" ? "ok" : it.status==="Μελλοντικό" ? "future" : "";
    const row = `<tr class="row ${open?"open":""}" data-id="${it.id}">
      <td class="code">${txt(it.code)}</td>
      <td class="name"><button class="nm" aria-expanded="${open}">${txt(it.name)}</button></td>
      <td data-label="${esc(tl)}">${it.type?`<span class="tag" style="--c:${d.colors[it.type]}">${esc(it.type)}</span>`:blank}</td>
      <td data-label="Τοποθεσία"><span>${txt(it.address)}<span class="second">${esc([it.tk,it.city].filter(Boolean).join(" "))||""}</span></span></td>
      <td class="map" data-label="Χάρτης">${mapLink(it)}</td>
      <td data-label="Γεωγρ. περιφέρεια">${txt(it.geo)}</td>
      <td data-label="Δίκτυο"><span>${txt(it.network)}${it.region?`<span class="second">${esc(it.region)}</span>`:""}</span></td>
      <td data-label="Κατάσταση">${it.status?`<span class="status ${st}">${esc(it.status)}</span>`:blank}</td>
      <td class="num" data-label="Επιφάνεια">${it.area!=null?nf.format(it.area):blank}</td>
      <td class="chev muted" aria-hidden="true">${open?"▾":"▸"}</td>
    </tr>`;
    if(!open) return row;
    const items = [
      ["Περιγραφή ακινήτου", txt(it.desc)],
      ["Email", it.emails.length ? it.emails.map(e=>`<a href="mailto:${esc(e)}">${esc(e)}</a>`).join("<br>") : blank],
      ["Διεύθυνση", txt([it.address,[it.tk,it.city].filter(Boolean).join(" ")].filter(Boolean).join(", "))],
      ["Επιφάνεια όπως καταχωρήθηκε", txt(it.areaRaw)]
    ];
    if(d.has("region")) items.push(["Περιφέρεια", txt(it.region)]);
    if(d.has("loctype")) items.push(["Τύπος τοποθεσίας", txt(it.loctype)]);
    return row + `<tr class="detail"><td colspan="${COLUMNS.length+1}"><dl class="dgrid">${items.map(([a,b])=>`<div><dt>${a}</dt><dd>${b}</dd></div>`).join("")}</dl></td></tr>`;
  }).join("");
}

/* ---------- events ---------- */
document.addEventListener("click", e=>{
  const t = e.target.closest("button,summary,a,input,label") || e.target;
  // close other facet menus
  document.querySelectorAll("details.facet[open]").forEach(det=>{ if(!det.contains(e.target)) det.open=false; });

  if(!D()) return;
  const tab = e.target.closest("[data-tab]");
  if(tab){ state.tab=tab.dataset.tab; renderAll(); return; }

  const ty = e.target.closest("[data-type]");
  if(ty){ toggle("type", ty.dataset.type); return; }

  const so = e.target.closest("[data-sort]");
  if(so){ const v=V(), k=so.dataset.sort;
    if(v.sort.key===k) v.sort.dir*=-1; else v.sort={key:k,dir:k==="area"?-1:1};
    render(); return; }

  const cl = e.target.closest("[data-clear]");
  if(cl){ delete V().sel[cl.dataset.clear]; render(); return; }

  const ch = e.target.closest("[data-chip]");
  if(ch){ const v=V(), k=ch.dataset.chip;
    if(k==="all"){ v.sel={}; v.q=""; v.amin=""; v.amax=""; v.anull=false; syncInputs(); }
    else if(k==="q"){ v.q=""; syncInputs(); }
    else if(k==="area"){ v.amin=""; v.amax=""; v.anull=false; syncInputs(); }
    else { const s=v.sel[k]; s && s.delete(ch.dataset.val); }
    render(); return; }

  const row = e.target.closest("tr.row");
  if(row && !e.target.closest("a")){
    const v=V(), id=row.dataset.id;
    v.open.has(id)?v.open.delete(id):v.open.add(id);
    render();
    if(e.detail===0){ const again=document.querySelector(`tr.row[data-id="${CSS.escape(id)}"] .nm`); if(again) again.focus({preventScroll:true}); }
  }
});
function toggle(k,x){
  const v=V(); const s=v.sel[k]||(v.sel[k]=new Set());
  s.has(x)?s.delete(x):s.add(x); render();
}
$("facets").addEventListener("change", e=>{ if(!D()) return;
  const det=e.target.closest("details.facet"); if(!det) return;
  toggle(det.dataset.key, e.target.value);
});
document.addEventListener("keydown", e=>{
  if(e.key==="Escape") document.querySelectorAll("details.facet[open]").forEach(d=>{d.open=false; d.querySelector("summary").focus();});
});
let qt; $("q").addEventListener("input", e=>{ clearTimeout(qt); qt=setTimeout(()=>{ if(!D()) return; V().q=e.target.value.trim(); render(); },120); });
["amin","amax"].forEach(id=>$(id).addEventListener("input", e=>{ if(!D()) return; V()[id]=e.target.value; if(e.target.value) { V().anull=false; $("anull").checked=false; } render(); }));
$("anull").addEventListener("change", e=>{ if(!D()) return; const v=V(); v.anull=e.target.checked; if(v.anull){v.amin="";v.amax="";syncInputs();} render(); });
$("sortsel").addEventListener("change", e=>{ if(!D()) return; const [k,d]=e.target.value.split(":"); V().sort={key:k,dir:+d}; render(); });

/* ---------- loading a new JSON ---------- */
function banner(msg, err){
  $("banner").innerHTML = `<div class="banner ${err?"err":""}" role="status"><span>${msg}</span><button class="btn link" type="button" onclick="this.closest('.banner').remove()">Απόκρυψη</button></div>`;
}
// function readFile(f){
//   if(!f) return;
//   const r=new FileReader();
//   r.onload=()=>{
//     try{
//       load(JSON.parse(r.result), "Δεδομένα από το αρχείο " + f.name, true);
//       const d=state.data;
//       banner(`Φορτώθηκε το ${esc(f.name)}: ${d.stores?d.stores.items.length+" καταστήματα":""}${d.stores&&d.facilities?" και ":""}${d.facilities?d.facilities.items.length+" εγκαταστάσεις":""}. Με «Ανανέωση» επιστρέφετε στα δεδομένα του API.`);
//     }catch(err){ banner(`Δεν φορτώθηκε το ${esc(f.name)}. ${esc(err.message||"Μη έγκυρο JSON.")}`, true); }
//   };
//   r.onerror=()=>banner(`Δεν διαβάστηκε το ${esc(f.name)}.`, true);
//   r.readAsText(f,"utf-8");
// }
// $("file").addEventListener("change", e=>{ readFile(e.target.files[0]); e.target.value=""; });
let dragDepth=0;
window.addEventListener("dragenter", e=>{ if([...(e.dataTransfer?.types||[])].includes("Files")){ dragDepth++; $("drop").classList.add("on"); } });
window.addEventListener("dragleave", ()=>{ if(--dragDepth<=0){ dragDepth=0; $("drop").classList.remove("on"); } });
window.addEventListener("dragover", e=>e.preventDefault());
window.addEventListener("drop", e=>{ e.preventDefault(); dragDepth=0; $("drop").classList.remove("on"); readFile(e.dataTransfer.files[0]); });

/* ---------- Google Maps μέσα σε iframe / Staffbase ----------
   Μέσα στη Staffbase η σελίδα τρέχει σε iframe, όπου ένα απλό target="_blank" μπορεί να
   φορτώσει τον χάρτη μέσα στο πλαίσιο και το Google να τον μπλοκάρει ("refused to connect").
   1) Στη native εφαρμογή Staffbase (κινητό) ζητάμε από την εφαρμογή να ανοίξει τον σύνδεσμο
      στον browser της συσκευής (openLinkExternal).
   2) Στη Staffbase μέσω browser (desktop/web) το openLinkExternal φορτώνει τον σύνδεσμο μέσα
      στο πλαίσιο, όπου το Google τον μπλοκάρει (ERR_BLOCKED_BY_RESPONSE). Εκεί, όπως και σε
      κάθε άλλο iframe, ανοίγουμε ρητά νέα καρτέλα με window.open.
   3) Αν δεν επιτρέπεται κανένα από τα δύο, εμφανίζουμε επιλογές αντιγραφής. */
const inFrame = (()=>{ try{ return window.self !== window.top; }catch(_){ return true; } })();
const SB = window["plugins-client-sdk"] || null;
let staffbaseConnected = false, staffbaseNative = false;
if(inFrame && SB){
  // Η Staffbase απαντά στο HELLO του SDK με SUCCESS. Το παρακολουθούμε για να ξέρουμε ότι η σύνδεση είναι πραγματική.
  window.addEventListener("message", e=>{
    if(e.source!==window.parent || !Array.isArray(e.data) || e.data[0]!=="SUCCESS") return;
    staffbaseConnected = true;
    const payload = e.data[2];
    if(payload && typeof payload==="object" && payload.platform) staffbaseNative = !!payload.platform.native;
  });
  try{ SB.isNativeApp().catch(()=>{}); }catch(_){}  // ξεκινά τη σύνδεση από τη φόρτωση, όχι στο πρώτο κλικ
}
function openInNewWindow(url){
  let w = null;
  try{ w = window.open(url, "_blank"); }catch(_){}
  if(w){ try{ w.opener = null; }catch(_){} return true; }
  return false;
}
document.addEventListener("click", e=>{
  const a = e.target.closest("a.maplink");
  if(!a || !inFrame) return;
  if(e.button!==0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  e.preventDefault(); e.stopPropagation();
  const url = a.href, addr = a.dataset.addr || "";
  if(staffbaseConnected && staffbaseNative){
    SB.openLinkExternal(url)
      .then(ok=>{ if(ok===false) showMapFallback(url, addr); })
      .catch(()=>{ if(!openInNewWindow(url)) showMapFallback(url, addr); });
    return;
  }
  if(!openInNewWindow(url)) showMapFallback(url, addr);
}, true);
function showMapFallback(url, addr){
  const d = $("mapdlg");
  $("mapdlg-addr").textContent = addr;
  $("mapdlg-url").value = url;
  $("mapdlg-status").textContent = "";
  d.dataset.addr = addr;
  if(typeof d.showModal === "function"){ if(!d.open) d.showModal(); } else d.setAttribute("open","");
}
async function copyText(s){
  try{ await navigator.clipboard.writeText(s); return true; }
  catch(_){
    const ta=document.createElement("textarea"); ta.value=s; ta.style.position="fixed"; ta.style.opacity="0";
    $("mapdlg").appendChild(ta); ta.select();
    let ok=false; try{ ok=document.execCommand("copy"); }catch(_){}
    ta.remove(); return ok;
  }
}
$("mapdlg").addEventListener("click", async e=>{
  const d=$("mapdlg");
  if(e.target===d || e.target.closest("[data-close]")){ d.close ? d.close() : d.removeAttribute("open"); return; }
  const c=e.target.closest("[data-copy]"); if(!c) return;
  const what = c.dataset.copy==="url" ? $("mapdlg-url").value : d.dataset.addr;
  const ok = await copyText(what);
  if(ok) $("mapdlg-status").textContent = c.dataset.copy==="url" ? "Ο σύνδεσμος αντιγράφηκε." : "Η διεύθυνση αντιγράφηκε.";
  else { $("mapdlg-url").select(); $("mapdlg-status").textContent = "Η αντιγραφή δεν επιτρέπεται εδώ. Ο σύνδεσμος είναι επιλεγμένος, πατήστε Ctrl+C."; }
});
$("mapdlg-url").addEventListener("focus", e=>e.target.select());

let rt; window.addEventListener("resize",()=>{ clearTimeout(rt); rt=setTimeout(()=>{ if(D()) renderMix(); },150); });
const timeFmt = new Intl.DateTimeFormat("el-GR",{hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});
let inFlight = null;
async function loadFromApi(){
  if(inFlight) inFlight.abort();
  const ctrl = new AbortController(); inFlight = ctrl;
  const timer = setTimeout(()=>ctrl.abort("timeout"), 30000);
  const btn = $("refresh"); btn.disabled = true; btn.classList.add("spin");
  const first = !Object.keys(state.data||{}).length;
  try{
    const res = await fetch(API_URL, {cache:"no-store", credentials:"same-origin", headers:{Accept:"application/json"}, signal:ctrl.signal});
    if(!res.ok) throw new Error(`Το API απάντησε ${res.status}${res.statusText?" "+res.statusText:""}.`);
    let json;
    try{ json = await res.json(); }catch(_){ throw new Error("Η απάντηση του API δεν είναι έγκυρο JSON."); }
    if(json && json.success === false) throw new Error("Το API επέστρεψε success: false" + (json.error||json.message ? ` (${json.error||json.message})` : "") + ".");
    load(json, `Ενημερώθηκε από το API στις ${timeFmt.format(new Date())}`, true);
    $("banner").innerHTML = "";
  }catch(err){
    if(ctrl.signal.aborted && ctrl.signal.reason !== "timeout" && inFlight !== ctrl) return; // αντικαταστάθηκε από νεότερο αίτημα
    const msg = ctrl.signal.reason === "timeout" ? "Το API δεν απάντησε μέσα σε 30 δευτερόλεπτα." :
      (err instanceof TypeError ? "Δεν υπάρχει σύνδεση με το API. Ελέγξτε ότι η σελίδα φιλοξενείται στον ίδιο server με το " + API_URL + "." : err.message);
    banner(`${first ? "Δεν φορτώθηκαν τα δεδομένα" : "Η ανανέωση απέτυχε, εμφανίζονται τα προηγούμενα δεδομένα"}. ${esc(msg)} <button class="btn link" type="button" data-retry>Δοκιμάστε ξανά</button>`, true);
    if(first){
      $("source").textContent = "Τα δεδομένα δεν είναι διαθέσιμα";
      $("tbody").innerHTML = `<tr><td class="loading">Δεν υπάρχουν δεδομένα. Δοκιμάστε ξανά ή φορτώστε ένα αρχείο JSON.</td></tr>`;
    }
  }finally{
    clearTimeout(timer);
    if(inFlight === ctrl){ inFlight = null; btn.disabled = false; btn.classList.remove("spin"); }
  }
}
$("refresh").addEventListener("click", loadFromApi);
document.addEventListener("click", e=>{ if(e.target.closest("[data-retry]")) loadFromApi(); });
loadFromApi();
})();


// if (window.self === window.top) {
//   // Η σελίδα άνοιξε απευθείας (εκτός iframe)
//   document.body.innerHTML = '<h1>403 Forbidden</h1>';
//   // Προαιρετικά: Ανακατεύθυνση στο Staffbase
//   // window.location.href = 'https://your-company.staffbase.com';
// }
