"use strict";(self.webpackChunkcapstone_project=self.webpackChunkcapstone_project||[]).push([[932],{932:(e,t,s)=>{s.d(t,{d1:()=>P});const i={"X-Client-Info":"realtime-js/2.9.5"};var n,o,r,a,c,h,l,d;!function(e){e[e.connecting=0]="connecting",e[e.open=1]="open",e[e.closing=2]="closing",e[e.closed=3]="closed"}(n||(n={})),(d=o||(o={})).closed="closed",d.errored="errored",d.joined="joined",d.joining="joining",d.leaving="leaving",function(e){e.close="phx_close",e.error="phx_error",e.join="phx_join",e.reply="phx_reply",e.leave="phx_leave",e.access_token="access_token"}(r||(r={})),function(e){e.websocket="websocket"}(a||(a={})),function(e){e.Connecting="connecting",e.Open="open",e.Closing="closing",e.Closed="closed"}(c||(c={}));class u{constructor(e,t){this.callback=e,this.timerCalc=t,this.timer=void 0,this.tries=0,this.callback=e,this.timerCalc=t}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout((()=>{this.tries=this.tries+1,this.callback()}),this.timerCalc(this.tries+1))}}class p{constructor(){this.HEADER_LENGTH=1}decode(e,t){return e.constructor===ArrayBuffer?t(this._binaryDecode(e)):t("string"==typeof e?JSON.parse(e):{})}_binaryDecode(e){const t=new DataView(e),s=new TextDecoder;return this._decodeBroadcast(e,t,s)}_decodeBroadcast(e,t,s){const i=t.getUint8(1),n=t.getUint8(2);let o=this.HEADER_LENGTH+2;const r=s.decode(e.slice(o,o+i));o+=i;const a=s.decode(e.slice(o,o+n));return o+=n,{ref:null,topic:r,event:a,payload:JSON.parse(s.decode(e.slice(o,e.byteLength)))}}}class f{constructor(e,t,s={},i=1e4){this.channel=e,this.event=t,this.payload=s,this.timeout=i,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(e){this.timeout=e,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(e){this.payload=Object.assign(Object.assign({},this.payload),e)}receive(e,t){var s;return this._hasReceived(e)&&t(null===(s=this.receivedResp)||void 0===s?void 0:s.response),this.recHooks.push({status:e,callback:t}),this}startTimeout(){this.timeoutTimer||(this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref),this.channel._on(this.refEvent,{},(e=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=e,this._matchReceive(e)})),this.timeoutTimer=setTimeout((()=>{this.trigger("timeout",{})}),this.timeout))}trigger(e,t){this.refEvent&&this.channel._trigger(this.refEvent,{status:e,response:t})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:e,response:t}){this.recHooks.filter((t=>t.status===e)).forEach((e=>e.callback(t)))}_hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}}!function(e){e.SYNC="sync",e.JOIN="join",e.LEAVE="leave"}(h||(h={}));class m{constructor(e,t){this.channel=e,this.state={},this.pendingDiffs=[],this.joinRef=null,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const s=(null==t?void 0:t.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(s.state,{},(e=>{const{onJoin:t,onLeave:s,onSync:i}=this.caller;this.joinRef=this.channel._joinRef(),this.state=m.syncState(this.state,e,t,s),this.pendingDiffs.forEach((e=>{this.state=m.syncDiff(this.state,e,t,s)})),this.pendingDiffs=[],i()})),this.channel._on(s.diff,{},(e=>{const{onJoin:t,onLeave:s,onSync:i}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(e):(this.state=m.syncDiff(this.state,e,t,s),i())})),this.onJoin(((e,t,s)=>{this.channel._trigger("presence",{event:"join",key:e,currentPresences:t,newPresences:s})})),this.onLeave(((e,t,s)=>{this.channel._trigger("presence",{event:"leave",key:e,currentPresences:t,leftPresences:s})})),this.onSync((()=>{this.channel._trigger("presence",{event:"sync"})}))}static syncState(e,t,s,i){const n=this.cloneDeep(e),o=this.transformState(t),r={},a={};return this.map(n,((e,t)=>{o[e]||(a[e]=t)})),this.map(o,((e,t)=>{const s=n[e];if(s){const i=t.map((e=>e.presence_ref)),n=s.map((e=>e.presence_ref)),o=t.filter((e=>n.indexOf(e.presence_ref)<0)),c=s.filter((e=>i.indexOf(e.presence_ref)<0));o.length>0&&(r[e]=o),c.length>0&&(a[e]=c)}else r[e]=t})),this.syncDiff(n,{joins:r,leaves:a},s,i)}static syncDiff(e,t,s,i){const{joins:n,leaves:o}={joins:this.transformState(t.joins),leaves:this.transformState(t.leaves)};return s||(s=()=>{}),i||(i=()=>{}),this.map(n,((t,i)=>{var n;const o=null!==(n=e[t])&&void 0!==n?n:[];if(e[t]=this.cloneDeep(i),o.length>0){const s=e[t].map((e=>e.presence_ref)),i=o.filter((e=>s.indexOf(e.presence_ref)<0));e[t].unshift(...i)}s(t,o,i)})),this.map(o,((t,s)=>{let n=e[t];if(!n)return;const o=s.map((e=>e.presence_ref));n=n.filter((e=>o.indexOf(e.presence_ref)<0)),e[t]=n,i(t,n,s),0===n.length&&delete e[t]})),e}static map(e,t){return Object.getOwnPropertyNames(e).map((s=>t(s,e[s])))}static transformState(e){return e=this.cloneDeep(e),Object.getOwnPropertyNames(e).reduce(((t,s)=>{const i=e[s];return t[s]="metas"in i?i.metas.map((e=>(e.presence_ref=e.phx_ref,delete e.phx_ref,delete e.phx_ref_prev,e))):i,t}),{})}static cloneDeep(e){return JSON.parse(JSON.stringify(e))}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}!function(e){e.abstime="abstime",e.bool="bool",e.date="date",e.daterange="daterange",e.float4="float4",e.float8="float8",e.int2="int2",e.int4="int4",e.int4range="int4range",e.int8="int8",e.int8range="int8range",e.json="json",e.jsonb="jsonb",e.money="money",e.numeric="numeric",e.oid="oid",e.reltime="reltime",e.text="text",e.time="time",e.timestamp="timestamp",e.timestamptz="timestamptz",e.timetz="timetz",e.tsrange="tsrange",e.tstzrange="tstzrange"}(l||(l={}));const g=(e,t,s={})=>{var i;const n=null!==(i=s.skipTypes)&&void 0!==i?i:[];return Object.keys(t).reduce(((s,i)=>(s[i]=v(i,e,t,n),s)),{})},v=(e,t,s,i)=>{const n=t.find((t=>t.name===e)),o=null==n?void 0:n.type,r=s[e];return o&&!i.includes(o)?_(o,r):b(r)},_=(e,t)=>{if("_"===e.charAt(0)){const s=e.slice(1,e.length);return j(t,s)}switch(e){case l.bool:return y(t);case l.float4:case l.float8:case l.int2:case l.int4:case l.int8:case l.numeric:case l.oid:return k(t);case l.json:case l.jsonb:return E(t);case l.timestamp:return T(t);case l.abstime:case l.date:case l.daterange:case l.int4range:case l.int8range:case l.money:case l.reltime:case l.text:case l.time:case l.timestamptz:case l.timetz:case l.tsrange:case l.tstzrange:default:return b(t)}},b=e=>e,y=e=>{switch(e){case"t":return!0;case"f":return!1;default:return e}},k=e=>{if("string"==typeof e){const t=parseFloat(e);if(!Number.isNaN(t))return t}return e},E=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){return console.log(`JSON parse error: ${t}`),e}return e},j=(e,t)=>{if("string"!=typeof e)return e;const s=e.length-1,i=e[s];if("{"===e[0]&&"}"===i){let i;const n=e.slice(1,s);try{i=JSON.parse("["+n+"]")}catch(e){i=n?n.split(","):[]}return i.map((e=>_(t,e)))}return e},T=e=>"string"==typeof e?e.replace(" ","T"):e;var C,R,O;!function(e){e.ALL="*",e.INSERT="INSERT",e.UPDATE="UPDATE",e.DELETE="DELETE"}(C||(C={})),function(e){e.BROADCAST="broadcast",e.PRESENCE="presence",e.POSTGRES_CHANGES="postgres_changes"}(R||(R={})),function(e){e.SUBSCRIBED="SUBSCRIBED",e.TIMED_OUT="TIMED_OUT",e.CLOSED="CLOSED",e.CHANNEL_ERROR="CHANNEL_ERROR"}(O||(O={}));class w{constructor(e,t={config:{}},s){this.topic=e,this.params=t,this.socket=s,this.bindings={},this.state=o.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:""}},t.config),this.timeout=this.socket.timeout,this.joinPush=new f(this,r.join,this.params,this.timeout),this.rejoinTimer=new u((()=>this._rejoinUntilConnected()),this.socket.reconnectAfterMs),this.joinPush.receive("ok",(()=>{this.state=o.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach((e=>e.send())),this.pushBuffer=[]})),this._onClose((()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=o.closed,this.socket._remove(this)})),this._onError((e=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,e),this.state=o.errored,this.rejoinTimer.scheduleTimeout())})),this.joinPush.receive("timeout",(()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=o.errored,this.rejoinTimer.scheduleTimeout())})),this._on(r.reply,{},((e,t)=>{this._trigger(this._replyEventName(t),e)})),this.presence=new m(this),this.broadcastEndpointURL=this._broadcastEndpointURL()}subscribe(e,t=this.timeout){var s,i;if(this.socket.isConnected()||this.socket.connect(),this.joinedOnce)throw"tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";{const{config:{broadcast:n,presence:o}}=this.params;this._onError((t=>e&&e("CHANNEL_ERROR",t))),this._onClose((()=>e&&e("CLOSED")));const r={},a={broadcast:n,presence:o,postgres_changes:null!==(i=null===(s=this.bindings.postgres_changes)||void 0===s?void 0:s.map((e=>e.filter)))&&void 0!==i?i:[]};this.socket.accessToken&&(r.access_token=this.socket.accessToken),this.updateJoinPayload(Object.assign({config:a},r)),this.joinedOnce=!0,this._rejoin(t),this.joinPush.receive("ok",(({postgres_changes:t})=>{var s;if(this.socket.accessToken&&this.socket.setAuth(this.socket.accessToken),void 0!==t){const i=this.bindings.postgres_changes,n=null!==(s=null==i?void 0:i.length)&&void 0!==s?s:0,o=[];for(let s=0;s<n;s++){const n=i[s],{filter:{event:r,schema:a,table:c,filter:h}}=n,l=t&&t[s];if(!l||l.event!==r||l.schema!==a||l.table!==c||l.filter!==h)return this.unsubscribe(),void(e&&e("CHANNEL_ERROR",new Error("mismatch between server and client bindings for postgres changes")));o.push(Object.assign(Object.assign({},n),{id:l.id}))}return this.bindings.postgres_changes=o,void(e&&e("SUBSCRIBED"))}e&&e("SUBSCRIBED")})).receive("error",(t=>{e&&e("CHANNEL_ERROR",new Error(JSON.stringify(Object.values(t).join(", ")||"error")))})).receive("timeout",(()=>{e&&e("TIMED_OUT")}))}return this}presenceState(){return this.presence.state}async track(e,t={}){return await this.send({type:"presence",event:"track",payload:e},t.timeout||this.timeout)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,t,s){return this._on(e,t,s)}async send(e,t={}){var s,i;if(this._canPush()||"broadcast"!==e.type)return new Promise((s=>{var i,n,o;const r=this._push(e.type,e,t.timeout||this.timeout);"broadcast"!==e.type||(null===(o=null===(n=null===(i=this.params)||void 0===i?void 0:i.config)||void 0===n?void 0:n.broadcast)||void 0===o?void 0:o.ack)||s("ok"),r.receive("ok",(()=>s("ok"))),r.receive("error",(()=>s("error"))),r.receive("timeout",(()=>s("timed out")))}));{const{event:n,payload:o}=e,r={method:"POST",headers:{apikey:null!==(s=this.socket.apiKey)&&void 0!==s?s:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:n,payload:o}]})};try{return(await this._fetchWithTimeout(this.broadcastEndpointURL,r,null!==(i=t.timeout)&&void 0!==i?i:this.timeout)).ok?"ok":"error"}catch(e){return"AbortError"===e.name?"timed out":"error"}}}updateJoinPayload(e){this.joinPush.updatePayload(e)}unsubscribe(e=this.timeout){this.state=o.leaving;const t=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(r.close,"leave",this._joinRef())};return this.rejoinTimer.reset(),this.joinPush.destroy(),new Promise((s=>{const i=new f(this,r.leave,{},e);i.receive("ok",(()=>{t(),s("ok")})).receive("timeout",(()=>{t(),s("timed out")})).receive("error",(()=>{s("error")})),i.send(),this._canPush()||i.trigger("ok",{})}))}_broadcastEndpointURL(){let e=this.socket.endPoint;return e=e.replace(/^ws/i,"http"),e=e.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),e.replace(/\/+$/,"")+"/api/broadcast"}async _fetchWithTimeout(e,t,s){const i=new AbortController,n=setTimeout((()=>i.abort()),s),o=await this.socket.fetch(e,Object.assign(Object.assign({},t),{signal:i.signal}));return clearTimeout(n),o}_push(e,t,s=this.timeout){if(!this.joinedOnce)throw`tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let i=new f(this,e,t,s);return this._canPush()?i.send():(i.startTimeout(),this.pushBuffer.push(i)),i}_onMessage(e,t,s){return t}_isMember(e){return this.topic===e}_joinRef(){return this.joinPush.ref}_trigger(e,t,s){var i,n;const o=e.toLocaleLowerCase(),{close:a,error:c,leave:h,join:l}=r;if(s&&[a,c,h,l].indexOf(o)>=0&&s!==this._joinRef())return;let d=this._onMessage(o,t,s);if(t&&!d)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(o)?null===(i=this.bindings.postgres_changes)||void 0===i||i.filter((e=>{var t,s,i;return"*"===(null===(t=e.filter)||void 0===t?void 0:t.event)||(null===(i=null===(s=e.filter)||void 0===s?void 0:s.event)||void 0===i?void 0:i.toLocaleLowerCase())===o})).map((e=>e.callback(d,s))):null===(n=this.bindings[o])||void 0===n||n.filter((e=>{var s,i,n,r,a,c;if(["broadcast","presence","postgres_changes"].includes(o)){if("id"in e){const o=e.id,r=null===(s=e.filter)||void 0===s?void 0:s.event;return o&&(null===(i=t.ids)||void 0===i?void 0:i.includes(o))&&("*"===r||(null==r?void 0:r.toLocaleLowerCase())===(null===(n=t.data)||void 0===n?void 0:n.type.toLocaleLowerCase()))}{const s=null===(a=null===(r=null==e?void 0:e.filter)||void 0===r?void 0:r.event)||void 0===a?void 0:a.toLocaleLowerCase();return"*"===s||s===(null===(c=null==t?void 0:t.event)||void 0===c?void 0:c.toLocaleLowerCase())}}return e.type.toLocaleLowerCase()===o})).map((e=>{if("object"==typeof d&&"ids"in d){const e=d.data,{schema:t,table:s,commit_timestamp:i,type:n,errors:o}=e,r={schema:t,table:s,commit_timestamp:i,eventType:n,new:{},old:{},errors:o};d=Object.assign(Object.assign({},r),this._getPayloadRecords(e))}e.callback(d,s)}))}_isClosed(){return this.state===o.closed}_isJoined(){return this.state===o.joined}_isJoining(){return this.state===o.joining}_isLeaving(){return this.state===o.leaving}_replyEventName(e){return`chan_reply_${e}`}_on(e,t,s){const i=e.toLocaleLowerCase(),n={type:i,filter:t,callback:s};return this.bindings[i]?this.bindings[i].push(n):this.bindings[i]=[n],this}_off(e,t){const s=e.toLocaleLowerCase();return this.bindings[s]=this.bindings[s].filter((e=>{var i;return!((null===(i=e.type)||void 0===i?void 0:i.toLocaleLowerCase())===s&&w.isEqual(e.filter,t))})),this}static isEqual(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(e[s]!==t[s])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(e){this._on(r.close,{},e)}_onError(e){this._on(r.error,{},(t=>e(t)))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(e=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=o.joining,this.joinPush.resend(e))}_getPayloadRecords(e){const t={new:{},old:{}};return"INSERT"!==e.type&&"UPDATE"!==e.type||(t.new=g(e.columns,e.record)),"UPDATE"!==e.type&&"DELETE"!==e.type||(t.old=g(e.columns,e.old_record)),t}}const S=()=>{},L="undefined"!=typeof WebSocket;class P{constructor(e,t){var n;this.accessToken=null,this.apiKey=null,this.channels=[],this.endPoint="",this.headers=i,this.params={},this.timeout=1e4,this.heartbeatIntervalMs=3e4,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.ref=0,this.logger=S,this.conn=null,this.sendBuffer=[],this.serializer=new p,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this._resolveFetch=e=>{let t;return t=e||("undefined"==typeof fetch?(...e)=>Promise.resolve().then(s.bind(s,907)).then((({default:t})=>t(...e))):fetch),(...e)=>t(...e)},this.endPoint=`${e}/${a.websocket}`,(null==t?void 0:t.transport)?this.transport=t.transport:this.transport=null,(null==t?void 0:t.params)&&(this.params=t.params),(null==t?void 0:t.headers)&&(this.headers=Object.assign(Object.assign({},this.headers),t.headers)),(null==t?void 0:t.timeout)&&(this.timeout=t.timeout),(null==t?void 0:t.logger)&&(this.logger=t.logger),(null==t?void 0:t.heartbeatIntervalMs)&&(this.heartbeatIntervalMs=t.heartbeatIntervalMs);const o=null===(n=null==t?void 0:t.params)||void 0===n?void 0:n.apikey;o&&(this.accessToken=o,this.apiKey=o),this.reconnectAfterMs=(null==t?void 0:t.reconnectAfterMs)?t.reconnectAfterMs:e=>[1e3,2e3,5e3,1e4][e-1]||1e4,this.encode=(null==t?void 0:t.encode)?t.encode:(e,t)=>t(JSON.stringify(e)),this.decode=(null==t?void 0:t.decode)?t.decode:this.serializer.decode.bind(this.serializer),this.reconnectTimer=new u((async()=>{this.disconnect(),this.connect()}),this.reconnectAfterMs),this.fetch=this._resolveFetch(null==t?void 0:t.fetch)}connect(){if(!this.conn)if(this.transport)this.conn=new this.transport(this._endPointURL(),void 0,{headers:this.headers});else{if(L)return this.conn=new WebSocket(this._endPointURL()),void this.setupConnection();this.conn=new N(this._endPointURL(),void 0,{close:()=>{this.conn=null}}),s.e(591).then(s.t.bind(s,591,23)).then((({default:e})=>{this.conn=new e(this._endPointURL(),void 0,{headers:this.headers}),this.setupConnection()}))}}disconnect(e,t){this.conn&&(this.conn.onclose=function(){},e?this.conn.close(e,null!=t?t:""):this.conn.close(),this.conn=null,this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.reset())}getChannels(){return this.channels}async removeChannel(e){const t=await e.unsubscribe();return 0===this.channels.length&&this.disconnect(),t}async removeAllChannels(){const e=await Promise.all(this.channels.map((e=>e.unsubscribe())));return this.disconnect(),e}log(e,t,s){this.logger(e,t,s)}connectionState(){switch(this.conn&&this.conn.readyState){case n.connecting:return c.Connecting;case n.open:return c.Open;case n.closing:return c.Closing;default:return c.Closed}}isConnected(){return this.connectionState()===c.Open}channel(e,t={config:{}}){const s=new w(`realtime:${e}`,t,this);return this.channels.push(s),s}push(e){const{topic:t,event:s,payload:i,ref:n}=e,o=()=>{this.encode(e,(e=>{var t;null===(t=this.conn)||void 0===t||t.send(e)}))};this.log("push",`${t} ${s} (${n})`,i),this.isConnected()?o():this.sendBuffer.push(o)}setAuth(e){this.accessToken=e,this.channels.forEach((t=>{e&&t.updateJoinPayload({access_token:e}),t.joinedOnce&&t._isJoined()&&t._push(r.access_token,{access_token:e})}))}_makeRef(){let e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}_leaveOpenTopic(e){let t=this.channels.find((t=>t.topic===e&&(t._isJoined()||t._isJoining())));t&&(this.log("transport",`leaving duplicate topic "${e}"`),t.unsubscribe())}_remove(e){this.channels=this.channels.filter((t=>t._joinRef()!==e._joinRef()))}setupConnection(){this.conn&&(this.conn.binaryType="arraybuffer",this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=e=>this._onConnError(e),this.conn.onmessage=e=>this._onConnMessage(e),this.conn.onclose=e=>this._onConnClose(e))}_endPointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:"1.0.0"}))}_onConnMessage(e){this.decode(e.data,(e=>{let{topic:t,event:s,payload:i,ref:n}=e;(n&&n===this.pendingHeartbeatRef||s===(null==i?void 0:i.type))&&(this.pendingHeartbeatRef=null),this.log("receive",`${i.status||""} ${t} ${s} ${n&&"("+n+")"||""}`,i),this.channels.filter((e=>e._isMember(t))).forEach((e=>e._trigger(s,i,n))),this.stateChangeCallbacks.message.forEach((t=>t(e)))}))}_onConnOpen(){this.log("transport",`connected to ${this._endPointURL()}`),this._flushSendBuffer(),this.reconnectTimer.reset(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval((()=>this._sendHeartbeat()),this.heartbeatIntervalMs),this.stateChangeCallbacks.open.forEach((e=>e()))}_onConnClose(e){this.log("transport","close",e),this._triggerChanError(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach((t=>t(e)))}_onConnError(e){this.log("transport",e.message),this._triggerChanError(),this.stateChangeCallbacks.error.forEach((t=>t(e)))}_triggerChanError(){this.channels.forEach((e=>e._trigger(r.error)))}_appendParams(e,t){if(0===Object.keys(t).length)return e;const s=e.match(/\?/)?"&":"?";return`${e}${s}${new URLSearchParams(t)}`}_flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach((e=>e())),this.sendBuffer=[])}_sendHeartbeat(){var e;if(this.isConnected()){if(this.pendingHeartbeatRef)return this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),void(null===(e=this.conn)||void 0===e||e.close(1e3,"hearbeat timeout"));this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.setAuth(this.accessToken)}}}class N{constructor(e,t,s){this.binaryType="arraybuffer",this.onclose=()=>{},this.onerror=()=>{},this.onmessage=()=>{},this.onopen=()=>{},this.readyState=n.connecting,this.send=()=>{},this.url=null,this.url=e,this.close=s.close}}}}]);
//# sourceMappingURL=932.bundle.js.map