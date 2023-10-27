const P="modulepreload",C=function(e){return"/"+e},b={},L=function(t,r,i){if(!r||r.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(r.map(n=>{if(n=C(n),n in b)return;b[n]=!0;const s=n.endsWith(".css"),o=s?'[rel="stylesheet"]':"";if(!!i)for(let g=a.length-1;g>=0;g--){const l=a[g];if(l.href===n&&(!s||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${o}`))return;const h=document.createElement("link");if(h.rel=s?"stylesheet":P,s||(h.as="script",h.crossOrigin=""),h.href=n,document.head.appendChild(h),s)return new Promise((g,l)=>{h.addEventListener("load",g),h.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t()).catch(n=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=n,window.dispatchEvent(s),!s.defaultPrevented)throw n})},ne={name:"MissingMediaQueryDirective",title:"Missing value for `client:media` directive.",message:'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided'},ae={name:"NoMatchingRenderer",title:"No matching renderer found.",message:(e,t,r,i)=>`Unable to render \`${e}\`.

${i>0?`There ${r?"are":"is"} ${i} renderer${r?"s":""} configured in your \`astro.config.mjs\` file,
but ${r?"none were":"it was not"} able to server-side render \`${e}\`.`:`No valid renderer was found ${t?`for the \`.${t}\` file extension.`:"for this file extension."}`}`,hint:e=>`Did you mean to enable the ${e} integration?

See https://docs.astro.build/en/core-concepts/framework-components/ for more information on how to install and configure integrations.`},oe={name:"NoClientEntrypoint",title:"No client entrypoint specified in renderer.",message:(e,t,r)=>`\`${e}\` component has a \`client:${t}\` directive, but no client entrypoint was provided by \`${r}\`.`,hint:"See https://docs.astro.build/en/reference/integrations-reference/#addrenderer-option for more information on how to configure your renderer."},ce={name:"NoClientOnlyHint",title:"Missing hint on client:only directive.",message:e=>`Unable to render \`${e}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`,hint:e=>`Did you mean to pass \`client:only="${e}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only`},le={name:"NoMatchingImport",title:"No import found for component.",message:e=>`Could not render \`${e}\`. No matching import has been found for \`${e}\`.`,hint:"Please make sure the component is properly imported."},me={name:"InvalidComponentArgs",title:"Invalid component arguments.",message:e=>`Invalid arguments passed to${e?` <${e}>`:""} component.`,hint:"Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`."},he={name:"ImageMissingAlt",title:"Missing alt property.",message:"The alt property is required.",hint:"The `alt` property is important for the purpose of accessibility, without it users using screen readers or other assistive technologies won't be able to understand what your image is supposed to represent. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-alt for more information."},N={name:"InvalidImageService",title:"Error while loading image service.",message:"There was an error loading the configured image service. Please see the stack trace for more information."},v={name:"MissingImageDimension",title:"Missing image dimensions",message:(e,t)=>`Missing ${e==="both"?"width and height attributes":`${e} attribute`} for ${t}. When using remote images, both dimensions are always required in order to avoid CLS.`,hint:"If your image is inside your `src` folder, you probably meant to import it instead. See [the Imports guide for more information](https://docs.astro.build/en/guides/imports/#other-assets)."},S={name:"UnsupportedImageFormat",title:"Unsupported image format",message:(e,t,r)=>`Received unsupported format \`${e}\` from \`${t}\`. Currently only ${r.join(", ")} are supported by our image services.`,hint:"Using an `img` tag directly instead of the `Image` component might be what you're looking for."},_={name:"UnsupportedImageConversion",title:"Unsupported image conversion",message:"Converting between vector (such as SVGs) and raster (such as PNGs and JPEGs) images is not currently supported."},I={name:"ExpectedImage",title:"Expected src to be an image.",message:(e,t,r)=>`Expected \`src\` property for \`getImage\` or \`<Image />\` to be either an ESM imported image or a string with the path of a remote image. Received \`${e}\` (type: \`${t}\`).

Full serialized options received: \`${r}\`.`,hint:"This error can often happen because of a wrong path. Make sure the path to your image is correct. If you're passing an async function, make sure to call and await it."},$={name:"ExpectedImageOptions",title:"Expected image options.",message:e=>`Expected getImage() parameter to be an object. Received \`${e}\`.`},x={name:"IncompatibleDescriptorOptions",title:"Cannot set both `densities` and `widths`",message:"Only one of `densities` or `widths` can be specified. In most cases, you'll probably want to use only `widths` if you require specific widths.",hint:"Those attributes are used to construct a `srcset` attribute, which cannot have both `x` and `w` descriptors."},M={name:"LocalImageUsedWrongly",title:"Local images must be imported.",message:e=>`\`Image\`'s and \`getImage\`'s \`src\` parameter must be an imported image or an URL, it cannot be a string filepath. Received \`${e}\`.`,hint:"If you want to use an image from your `src` folder, you need to either import it or if the image is coming from a content collection, use the [image() schema helper](https://docs.astro.build/en/guides/images/#images-in-content-collections) See https://docs.astro.build/en/guides/images/#src-required for more information on the `src` property."},de={name:"AstroGlobUsedOutside",title:"Astro.glob() used outside of an Astro file.",message:e=>`\`Astro.glob(${e})\` can only be used in \`.astro\` files. \`import.meta.glob(${e})\` can be used instead to achieve a similar result.`,hint:"See Vite's documentation on `import.meta.glob` for more information: https://vitejs.dev/guide/features.html#glob-import"},ge={name:"AstroGlobNoMatch",title:"Astro.glob() did not match any files.",message:e=>`\`Astro.glob(${e})\` did not return any matching files. Check the pattern for typos.`},j={name:"MissingSharp",title:"Could not find Sharp.",message:"Could not find Sharp. Please install Sharp (`sharp`) manually into your project or migrate to another image service.",hint:"See Sharp's installation instructions for more information: https://sharp.pixelplumbing.com/install. If you are not relying on `astro:assets` to optimize, transform, or process any images, you can configure a passthrough image service instead of installing Sharp. See https://docs.astro.build/en/reference/errors/missing-sharp for more information.\n\nSee https://docs.astro.build/en/guides/images/#default-image-service for more information on how to migrate to another image service."},ue={name:"UnknownContentCollectionError",title:"Unknown Content Collection Error."};function k(e){return e.replace(/\r\n|\r(?!\n)|\n/g,`
`)}function q(e,t){if(!t||t.line===void 0||t.column===void 0)return"";const r=k(e).split(`
`).map(s=>s.replace(/\t/g,"  ")),i=[];for(let s=-2;s<=2;s++)r[t.line+s]&&i.push(t.line+s);let a=0;for(const s of i){let o=`> ${s}`;o.length>a&&(a=o.length)}let n="";for(const s of i){const o=s===t.line-1;n+=o?"> ":"  ",n+=`${s+1} | ${r[s]}
`,o&&(n+=`${Array.from({length:a}).join(" ")}  | ${Array.from({length:t.column}).join(" ")}^
`)}return n}class d extends Error{loc;title;hint;frame;type="AstroError";constructor(t,...r){super(...r);const{name:i,title:a,message:n,stack:s,location:o,hint:c,frame:h}=t;this.title=a,this.name=i,n&&(this.message=n),this.stack=s||this.stack,this.loc=o,this.hint=c,this.frame=h}setLocation(t){this.loc=t}setName(t){this.name=t}setMessage(t){this.message=t}setHint(t){this.hint=t}setFrame(t,r){this.frame=q(t,r)}static is(t){return t.type==="AstroError"}}function fe(e){return e[0]==="/"?e:"/"+e}function F(e){return e.endsWith("/")?e.slice(0,e.length-1):e}function D(e){return e.startsWith("/")?e.substring(1):e}function H(e){return e.replace(/^\/|\/$/g,"")}function z(e){return typeof e=="string"||e instanceof String}function G(...e){return e.filter(z).map((t,r)=>r===0?F(t):r===e.length-1?D(t):H(t)).join("/")}function W(e){return/^(http|ftp|https|ws):?\/\//.test(e)||e.startsWith("data:")}const A=["jpeg","jpg","png","tiff","webp","gif","svg","avif"],E="webp";function V(e){return e?"transform"in e:!1}function B(e){let t=parseInt(e);return Number.isNaN(t)?e:t}const f={validateOptions(e){if(!e.src||typeof e.src!="string"&&typeof e.src!="object")throw new d({...I,message:I.message(JSON.stringify(e.src),typeof e.src,JSON.stringify(e,(t,r)=>r===void 0?null:r))});if(p(e.src)){if(!A.includes(e.src.format))throw new d({...S,message:S.message(e.src.format,e.src.src,A)});if(e.widths&&e.densities)throw new d(x);if(e.src.format==="svg"&&(e.format="svg"),e.src.format==="svg"&&e.format!=="svg"||e.src.format!=="svg"&&e.format==="svg")throw new d(_)}else{if(e.src.startsWith("/@fs/")||!W(e.src)&&!e.src.startsWith("/"))throw new d({...M,message:M.message(e.src)});let t;if(!e.width&&!e.height?t="both":!e.width&&e.height?t="width":e.width&&!e.height&&(t="height"),t)throw new d({...v,message:v.message(t,e.src)})}return e.format||(e.format=E),e.width&&(e.width=Math.round(e.width)),e.height&&(e.height=Math.round(e.height)),e},getHTMLAttributes(e){const{targetWidth:t,targetHeight:r}=T(e),{src:i,width:a,height:n,format:s,quality:o,densities:c,widths:h,formats:g,...l}=e;return{...l,width:t,height:r,loading:l.loading??"lazy",decoding:l.decoding??"async"}},getSrcSet(e){const t=[],{targetWidth:r}=T(e),{widths:i,densities:a}=e,n=e.format??E;let s=e.width,o=1/0;p(e.src)&&(s=e.src.width,o=s);const{width:c,height:h,...g}=e,l=[];if(a){const u=a.map(m=>typeof m=="number"?m:parseFloat(m)),w=u.sort().map(m=>Math.round(r*m));l.push(...w.map((m,R)=>({maxTargetWidth:Math.min(m,o),descriptor:`${u[R]}x`})))}else i&&l.push(...i.map(u=>({maxTargetWidth:Math.min(u,o),descriptor:`${u}w`})));for(const{maxTargetWidth:u,descriptor:w}of l){const m={...g};u!==s?m.width=u:e.width&&e.height&&(m.width=e.width,m.height=e.height),t.push({transform:m,descriptor:w,attributes:{type:`image/${n}`}})}return t},getURL(e,t){const r=new URLSearchParams;if(p(e.src))r.append("href",e.src.src);else if(Z(e.src,t))r.append("href",e.src);else return e.src;return Object.entries({w:"width",h:"height",q:"quality",f:"format"}).forEach(([n,s])=>{e[s]&&r.append(n,e[s].toString())}),`${G("/","/_image")}?${r}`},parseURL(e){const t=e.searchParams;return t.has("href")?{src:t.get("href"),width:t.has("w")?parseInt(t.get("w")):void 0,height:t.has("h")?parseInt(t.get("h")):void 0,format:t.get("f"),quality:t.get("q")}:void 0}};function T(e){let t=e.width,r=e.height;if(p(e.src)){const i=e.src.width/e.src.height;r&&!t?t=Math.round(r*i):t&&!r?r=Math.round(t/i):!t&&!r&&(t=e.src.width,r=e.src.height)}return{targetWidth:t,targetHeight:r}}function J(e,t){return K(e,t.protocol)&&O(e,t.hostname,!0)&&Q(e,t.port)&&X(e,t.pathname,!0)}function Q(e,t){return!t||t===e.port}function K(e,t){return!t||t===e.protocol.slice(0,-1)}function O(e,t,r){if(t){if(!r||!t.startsWith("*"))return t===e.hostname;if(t.startsWith("**.")){const i=t.slice(2);return i!==e.hostname&&e.hostname.endsWith(i)}else if(t.startsWith("*.")){const i=t.slice(1);return e.hostname.replace(i,"").split(".").filter(Boolean).length===1}}else return!0;return!1}function X(e,t,r){if(t){if(!r||!t.endsWith("*"))return t===e.pathname;if(t.endsWith("/**")){const i=t.slice(0,-2);return i!==e.pathname&&e.pathname.startsWith(i)}else if(t.endsWith("/*")){const i=t.slice(0,-1);return e.pathname.replace(i,"").split("/").filter(Boolean).length===1}}else return!0;return!1}function p(e){return typeof e=="object"}function Y(e){return typeof e=="string"}function Z(e,{domains:t=[],remotePatterns:r=[]}){if(!W(e))return!1;const i=new URL(e);return t.some(a=>O(i,a))||r.some(a=>J(i,a))}async function ee(){if(!globalThis?.astroAsset?.imageService){const{default:e}=await L(()=>Promise.resolve().then(()=>se),void 0).catch(t=>{const r=new d(N);throw r.cause=t,r});return globalThis.astroAsset||(globalThis.astroAsset={}),globalThis.astroAsset.imageService=e,e}return globalThis.astroAsset.imageService}async function pe(e,t){if(!e||typeof e!="object")throw new d({...$,message:$.message(JSON.stringify(e))});const r=await ee(),i={...e,src:typeof e.src=="object"&&"then"in e.src?(await e.src).default??await e.src:e.src},a=r.validateOptions?await r.validateOptions(i,t):i,n=r.getSrcSet?await r.getSrcSet(a,t):[];let s=await r.getURL(a,t),o=await Promise.all(n.map(async c=>({url:await r.getURL(c.transform,t),descriptor:c.descriptor,attributes:c.attributes})));return V(r)&&globalThis.astroAsset.addStaticImage&&!(Y(a.src)&&s===a.src)&&(s=globalThis.astroAsset.addStaticImage(a),o=n.map(c=>({url:globalThis.astroAsset.addStaticImage(c.transform),descriptor:c.descriptor,attributes:c.attributes}))),{rawOptions:i,options:a,src:s,srcSet:{values:o,attribute:o.map(c=>`${c.url} ${c.descriptor}`).join(", ")},attributes:r.getHTMLAttributes!==void 0?await r.getHTMLAttributes(a,t):{}}}let y;const U={low:25,mid:50,high:80,max:100};async function te(){let e;try{e=(await L(()=>import("./index.8bce36f9.js").then(t=>t.i),["_astro/index.8bce36f9.js","_astro/index.f1f2c4b1.js"])).default}catch{throw new d(j)}return e}const re={validateOptions:f.validateOptions,getURL:f.getURL,parseURL:f.parseURL,getHTMLAttributes:f.getHTMLAttributes,getSrcSet:f.getSrcSet,async transform(e,t){y||(y=await te());const r=t;if(r.format==="svg")return{data:e,format:"svg"};let i=y(e,{failOnError:!1,pages:-1});if(i.rotate(),r.height&&!r.width?i.resize({height:Math.round(r.height)}):r.width&&i.resize({width:Math.round(r.width)}),r.format){let s;if(r.quality){const o=B(r.quality);typeof o=="number"?s=o:s=r.quality in U?U[r.quality]:void 0}i.toFormat(r.format,{quality:s})}const{data:a,info:n}=await i.toBuffer({resolveWithObject:!0});return{data:a,format:n.format}}};var ie=re;const se=Object.freeze(Object.defineProperty({__proto__:null,default:ie},Symbol.toStringTag,{value:"Module"}));export{d as A,me as I,ne as M,le as N,ue as U,L as _,ce as a,ae as b,oe as c,de as d,ge as e,he as f,pe as g,p as i,fe as p};