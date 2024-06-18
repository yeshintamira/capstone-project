"use strict";(self.webpackChunkcapstone_project=self.webpackChunkcapstone_project||[]).push([[75],{75:(t,e,n)=>{n.d(e,{UU:()=>B});var r=n(621),i=n(961),s=n(932);class o extends Error{constructor(t){super(t),this.__isStorageError=!0,this.name="StorageError"}}function a(t){return"object"==typeof t&&null!==t&&"__isStorageError"in t}class u extends o{constructor(t,e){super(t),this.name="StorageApiError",this.status=e}toJSON(){return{name:this.name,message:this.message,status:this.status}}}class h extends o{constructor(t,e){super(t),this.name="StorageUnknownError",this.originalError=e}}const c=t=>{let e;return e=t||("undefined"==typeof fetch?(...t)=>Promise.resolve().then(n.bind(n,907)).then((({default:e})=>e(...t))):fetch),(...t)=>e(...t)};var l=function(t,e,n,r){return new(n||(n=Promise))((function(i,s){function o(t){try{u(r.next(t))}catch(t){s(t)}}function a(t){try{u(r.throw(t))}catch(t){s(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}u((r=r.apply(t,e||[])).next())}))};const d=t=>t.msg||t.message||t.error_description||t.error||JSON.stringify(t),f=(t,e)=>l(void 0,void 0,void 0,(function*(){const r=yield(i=void 0,s=void 0,o=void 0,a=function*(){return"undefined"==typeof Response?(yield Promise.resolve().then(n.bind(n,907))).Response:Response},new(o||(o=Promise))((function(t,e){function n(t){try{u(a.next(t))}catch(t){e(t)}}function r(t){try{u(a.throw(t))}catch(t){e(t)}}function u(e){var i;e.done?t(e.value):(i=e.value,i instanceof o?i:new o((function(t){t(i)}))).then(n,r)}u((a=a.apply(i,s||[])).next())})));var i,s,o,a;t instanceof r?t.json().then((n=>{e(new u(d(n),t.status||500))})).catch((t=>{e(new h(d(t),t))})):e(new h(d(t),t))})),p=(t,e,n,r)=>{const i={method:t,headers:(null==e?void 0:e.headers)||{}};return"GET"===t?i:(i.headers=Object.assign({"Content-Type":"application/json"},null==e?void 0:e.headers),i.body=JSON.stringify(r),Object.assign(Object.assign({},i),n))};function v(t,e,n,r,i,s){return l(this,void 0,void 0,(function*(){return new Promise(((o,a)=>{t(n,p(e,r,i,s)).then((t=>{if(!t.ok)throw t;return(null==r?void 0:r.noResolveJson)?t:t.json()})).then((t=>o(t))).catch((t=>f(t,a)))}))}))}function g(t,e,n,r){return l(this,void 0,void 0,(function*(){return v(t,"GET",e,n,r)}))}function y(t,e,n,r,i){return l(this,void 0,void 0,(function*(){return v(t,"POST",e,r,i,n)}))}function b(t,e,n,r,i){return l(this,void 0,void 0,(function*(){return v(t,"DELETE",e,r,i,n)}))}var m=function(t,e,n,r){return new(n||(n=Promise))((function(i,s){function o(t){try{u(r.next(t))}catch(t){s(t)}}function a(t){try{u(r.throw(t))}catch(t){s(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}u((r=r.apply(t,e||[])).next())}))};const w={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},$={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class j{constructor(t,e={},n,r){this.url=t,this.headers=e,this.bucketId=n,this.fetch=c(r)}uploadOrUpdate(t,e,n,r){return m(this,void 0,void 0,(function*(){try{let i;const s=Object.assign(Object.assign({},$),r),o=Object.assign(Object.assign({},this.headers),"POST"===t&&{"x-upsert":String(s.upsert)});"undefined"!=typeof Blob&&n instanceof Blob?(i=new FormData,i.append("cacheControl",s.cacheControl),i.append("",n)):"undefined"!=typeof FormData&&n instanceof FormData?(i=n,i.append("cacheControl",s.cacheControl)):(i=n,o["cache-control"]=`max-age=${s.cacheControl}`,o["content-type"]=s.contentType);const a=this._removeEmptyFolders(e),u=this._getFinalPath(a),h=yield this.fetch(`${this.url}/object/${u}`,Object.assign({method:t,body:i,headers:o},(null==s?void 0:s.duplex)?{duplex:s.duplex}:{})),c=yield h.json();return h.ok?{data:{path:a,id:c.Id,fullPath:c.Key},error:null}:{data:null,error:c}}catch(t){if(a(t))return{data:null,error:t};throw t}}))}upload(t,e,n){return m(this,void 0,void 0,(function*(){return this.uploadOrUpdate("POST",t,e,n)}))}uploadToSignedUrl(t,e,n,r){return m(this,void 0,void 0,(function*(){const i=this._removeEmptyFolders(t),s=this._getFinalPath(i),o=new URL(this.url+`/object/upload/sign/${s}`);o.searchParams.set("token",e);try{let t;const e=Object.assign({upsert:$.upsert},r),s=Object.assign(Object.assign({},this.headers),{"x-upsert":String(e.upsert)});"undefined"!=typeof Blob&&n instanceof Blob?(t=new FormData,t.append("cacheControl",e.cacheControl),t.append("",n)):"undefined"!=typeof FormData&&n instanceof FormData?(t=n,t.append("cacheControl",e.cacheControl)):(t=n,s["cache-control"]=`max-age=${e.cacheControl}`,s["content-type"]=e.contentType);const a=yield this.fetch(o.toString(),{method:"PUT",body:t,headers:s}),u=yield a.json();return a.ok?{data:{path:i,fullPath:u.Key},error:null}:{data:null,error:u}}catch(t){if(a(t))return{data:null,error:t};throw t}}))}createSignedUploadUrl(t,e){return m(this,void 0,void 0,(function*(){try{let n=this._getFinalPath(t);const r=Object.assign({},this.headers);(null==e?void 0:e.upsert)&&(r["x-upsert"]="true");const i=yield y(this.fetch,`${this.url}/object/upload/sign/${n}`,{},{headers:r}),s=new URL(this.url+i.url),a=s.searchParams.get("token");if(!a)throw new o("No token returned by API");return{data:{signedUrl:s.toString(),path:t,token:a},error:null}}catch(t){if(a(t))return{data:null,error:t};throw t}}))}update(t,e,n){return m(this,void 0,void 0,(function*(){return this.uploadOrUpdate("PUT",t,e,n)}))}move(t,e,n){return m(this,void 0,void 0,(function*(){try{return{data:yield y(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:t,destinationKey:e,destinationBucket:null==n?void 0:n.destinationBucket},{headers:this.headers}),error:null}}catch(t){if(a(t))return{data:null,error:t};throw t}}))}copy(t,e,n){return m(this,void 0,void 0,(function*(){try{return{data:{path:(yield y(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:t,destinationKey:e,destinationBucket:null==n?void 0:n.destinationBucket},{headers:this.headers})).Key},error:null}}catch(t){if(a(t))return{data:null,error:t};throw t}}))}createSignedUrl(t,e,n){return m(this,void 0,void 0,(function*(){try{let r=this._getFinalPath(t),i=yield y(this.fetch,`${this.url}/object/sign/${r}`,Object.assign({expiresIn:e},(null==n?void 0:n.transform)?{transform:n.transform}:{}),{headers:this.headers});const s=(null==n?void 0:n.download)?`&download=${!0===n.download?"":n.download}`:"";return i={signedUrl:encodeURI(`${this.url}${i.signedURL}${s}`)},{data:i,error:null}}catch(t){if(a(t))return{data:null,error:t};throw t}}))}createSignedUrls(t,e,n){return m(this,void 0,void 0,(function*(){try{const r=yield y(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:e,paths:t},{headers:this.headers}),i=(null==n?void 0:n.download)?`&download=${!0===n.download?"":n.download}`:"";return{data:r.map((t=>Object.assign(Object.assign({},t),{signedUrl:t.signedURL?encodeURI(`${this.url}${t.signedURL}${i}`):null}))),error:null}}catch(t){if(a(t))return{data:null,error:t};throw t}}))}download(t,e){return m(this,void 0,void 0,(function*(){const n=void 0!==(null==e?void 0:e.transform)?"render/image/authenticated":"object",r=this.transformOptsToQueryString((null==e?void 0:e.transform)||{}),i=r?`?${r}`:"";try{const e=this._getFinalPath(t),r=yield g(this.fetch,`${this.url}/${n}/${e}${i}`,{headers:this.headers,noResolveJson:!0});return{data:yield r.blob(),error:null}}catch(t){if(a(t))return{data:null,error:t};throw t}}))}getPublicUrl(t,e){const n=this._getFinalPath(t),r=[],i=(null==e?void 0:e.download)?`download=${!0===e.download?"":e.download}`:"";""!==i&&r.push(i);const s=void 0!==(null==e?void 0:e.transform)?"render/image":"object",o=this.transformOptsToQueryString((null==e?void 0:e.transform)||{});""!==o&&r.push(o);let a=r.join("&");return""!==a&&(a=`?${a}`),{data:{publicUrl:encodeURI(`${this.url}/${s}/public/${n}${a}`)}}}remove(t){return m(this,void 0,void 0,(function*(){try{return{data:yield b(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:t},{headers:this.headers}),error:null}}catch(t){if(a(t))return{data:null,error:t};throw t}}))}list(t,e,n){return m(this,void 0,void 0,(function*(){try{const r=Object.assign(Object.assign(Object.assign({},w),e),{prefix:t||""});return{data:yield y(this.fetch,`${this.url}/object/list/${this.bucketId}`,r,{headers:this.headers},n),error:null}}catch(t){if(a(t))return{data:null,error:t};throw t}}))}_getFinalPath(t){return`${this.bucketId}/${t}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(t){const e=[];return t.width&&e.push(`width=${t.width}`),t.height&&e.push(`height=${t.height}`),t.resize&&e.push(`resize=${t.resize}`),t.format&&e.push(`format=${t.format}`),t.quality&&e.push(`quality=${t.quality}`),e.join("&")}}const k={"X-Client-Info":"storage-js/2.6.0"};var O=function(t,e,n,r){return new(n||(n=Promise))((function(i,s){function o(t){try{u(r.next(t))}catch(t){s(t)}}function a(t){try{u(r.throw(t))}catch(t){s(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}u((r=r.apply(t,e||[])).next())}))};class U{constructor(t,e={},n){this.url=t,this.headers=Object.assign(Object.assign({},k),e),this.fetch=c(n)}listBuckets(){return O(this,void 0,void 0,(function*(){try{return{data:yield g(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(t){if(a(t))return{data:null,error:t};throw t}}))}getBucket(t){return O(this,void 0,void 0,(function*(){try{return{data:yield g(this.fetch,`${this.url}/bucket/${t}`,{headers:this.headers}),error:null}}catch(t){if(a(t))return{data:null,error:t};throw t}}))}createBucket(t,e={public:!1}){return O(this,void 0,void 0,(function*(){try{return{data:yield y(this.fetch,`${this.url}/bucket`,{id:t,name:t,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:this.headers}),error:null}}catch(t){if(a(t))return{data:null,error:t};throw t}}))}updateBucket(t,e){return O(this,void 0,void 0,(function*(){try{const n=yield function(t,e,n,r,i){return l(this,void 0,void 0,(function*(){return v(t,"PUT",e,r,undefined,n)}))}(this.fetch,`${this.url}/bucket/${t}`,{id:t,name:t,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:this.headers});return{data:n,error:null}}catch(t){if(a(t))return{data:null,error:t};throw t}}))}emptyBucket(t){return O(this,void 0,void 0,(function*(){try{return{data:yield y(this.fetch,`${this.url}/bucket/${t}/empty`,{},{headers:this.headers}),error:null}}catch(t){if(a(t))return{data:null,error:t};throw t}}))}deleteBucket(t){return O(this,void 0,void 0,(function*(){try{return{data:yield b(this.fetch,`${this.url}/bucket/${t}`,{},{headers:this.headers}),error:null}}catch(t){if(a(t))return{data:null,error:t};throw t}}))}}class _ extends U{constructor(t,e={},n){super(t,e,n)}from(t){return new j(this.url,this.headers,t,this.fetch)}}let S="";S="undefined"!=typeof Deno?"deno":"undefined"!=typeof document?"web":"undefined"!=typeof navigator&&"ReactNative"===navigator.product?"react-native":"node";const T={headers:{"X-Client-Info":`supabase-js-${S}/2.43.5`}},C={schema:"public"},x={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},E={};var P=n(907);const I=t=>{let e;return e=t||("undefined"==typeof fetch?P.default:fetch),(...t)=>e(...t)},R=(t,e,n)=>{const r=I(n),i="undefined"==typeof Headers?P.Headers:Headers;return(n,s)=>{return o=void 0,a=void 0,h=function*(){var o;const a=null!==(o=yield e())&&void 0!==o?o:t;let u=new i(null==s?void 0:s.headers);return u.has("apikey")||u.set("apikey",t),u.has("Authorization")||u.set("Authorization",`Bearer ${a}`),r(n,Object.assign(Object.assign({},s),{headers:u}))},new((u=void 0)||(u=Promise))((function(t,e){function n(t){try{i(h.next(t))}catch(t){e(t)}}function r(t){try{i(h.throw(t))}catch(t){e(t)}}function i(e){var i;e.done?t(e.value):(i=e.value,i instanceof u?i:new u((function(t){t(i)}))).then(n,r)}i((h=h.apply(o,a||[])).next())}));var o,a,u,h}};var A=n(712);class F extends A.UJ{constructor(t){super(t)}}class K{constructor(t,e,n){var r,s,o;if(this.supabaseUrl=t,this.supabaseKey=e,!t)throw new Error("supabaseUrl is required.");if(!e)throw new Error("supabaseKey is required.");const a=t.replace(/\/$/,"");this.realtimeUrl=`${a}/realtime/v1`.replace(/^http/i,"ws"),this.authUrl=`${a}/auth/v1`,this.storageUrl=`${a}/storage/v1`,this.functionsUrl=`${a}/functions/v1`;const u=`sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,h=function(t,e){const{db:n,auth:r,realtime:i,global:s}=t,{db:o,auth:a,realtime:u,global:h}=e;return{db:Object.assign(Object.assign({},o),n),auth:Object.assign(Object.assign({},a),r),realtime:Object.assign(Object.assign({},u),i),global:Object.assign(Object.assign({},h),s)}}(null!=n?n:{},{db:C,realtime:E,auth:Object.assign(Object.assign({},x),{storageKey:u}),global:T});this.storageKey=null!==(r=h.auth.storageKey)&&void 0!==r?r:"",this.headers=null!==(s=h.global.headers)&&void 0!==s?s:{},this.auth=this._initSupabaseAuthClient(null!==(o=h.auth)&&void 0!==o?o:{},this.headers,h.global.fetch),this.fetch=R(e,this._getAccessToken.bind(this),h.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers},h.realtime)),this.rest=new i.tE(`${a}/rest/v1`,{headers:this.headers,schema:h.db.schema,fetch:this.fetch}),this._listenForAuthEvents()}get functions(){return new r.F(this.functionsUrl,{headers:this.headers,customFetch:this.fetch})}get storage(){return new _(this.storageUrl,this.headers,this.fetch)}from(t){return this.rest.from(t)}schema(t){return this.rest.schema(t)}rpc(t,e={},n={}){return this.rest.rpc(t,e,n)}channel(t,e={config:{}}){return this.realtime.channel(t,e)}getChannels(){return this.realtime.getChannels()}removeChannel(t){return this.realtime.removeChannel(t)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var t,e,n,r,i,s;return n=this,r=void 0,s=function*(){const{data:n}=yield this.auth.getSession();return null!==(e=null===(t=n.session)||void 0===t?void 0:t.access_token)&&void 0!==e?e:null},new((i=void 0)||(i=Promise))((function(t,e){function o(t){try{u(s.next(t))}catch(t){e(t)}}function a(t){try{u(s.throw(t))}catch(t){e(t)}}function u(e){var n;e.done?t(e.value):(n=e.value,n instanceof i?n:new i((function(t){t(n)}))).then(o,a)}u((s=s.apply(n,r||[])).next())}))}_initSupabaseAuthClient({autoRefreshToken:t,persistSession:e,detectSessionInUrl:n,storage:r,storageKey:i,flowType:s,debug:o},a,u){var h;const c={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new F({url:this.authUrl,headers:Object.assign(Object.assign({},c),a),storageKey:i,autoRefreshToken:t,persistSession:e,detectSessionInUrl:n,storage:r,flowType:s,debug:o,fetch:u,hasCustomAuthorizationHeader:null!==(h="Authorization"in this.headers)&&void 0!==h&&h})}_initRealtimeClient(t){return new s.d1(this.realtimeUrl,Object.assign(Object.assign({},t),{params:Object.assign({apikey:this.supabaseKey},null==t?void 0:t.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange(((t,e)=>{this._handleTokenChanged(t,"CLIENT",null==e?void 0:e.access_token)}))}_handleTokenChanged(t,e,n){"TOKEN_REFRESHED"!==t&&"SIGNED_IN"!==t||this.changedAccessToken===n?"SIGNED_OUT"===t&&(this.realtime.setAuth(this.supabaseKey),"STORAGE"==e&&this.auth.signOut(),this.changedAccessToken=void 0):(this.realtime.setAuth(null!=n?n:null),this.changedAccessToken=n)}}const B=(t,e,n)=>new K(t,e,n)}}]);
//# sourceMappingURL=75.bundle.js.map