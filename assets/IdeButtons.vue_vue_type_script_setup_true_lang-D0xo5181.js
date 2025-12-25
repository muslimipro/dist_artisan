var de=Object.defineProperty;var fe=(r,e,t)=>e in r?de(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var h=(r,e,t)=>fe(r,typeof e!="symbol"?e+"":e,t);import{r as f,aF as te,b as pe,a4 as he,u as we,a as ve,a5 as J,o as _,c as $,z as ye,Z as me,i as l,j as b,t as G,h as D,p as N,E as T,q as F,n as be,v as ge,w as xe,M as ke}from"./index-CixO9MKE.js";import{s as Ee}from"./index-Cm-w4qRM.js";import{s as Ce}from"./index-BjhExlOs.js";function V(r){return new Promise(e=>setTimeout(e,r))}class _e{constructor(){h(this,"_lock",Promise.resolve());this._lock=Promise.resolve()}acquire(){let e;const t=new Promise(i=>e=i),a=this._lock.then(()=>e);return this._lock=this._lock.then(()=>t),a}}class z{constructor(){h(this,"mutex");h(this,"inTransaction");h(this,"receivedData");h(this,"activityCallback");h(this,"receiveCallback");h(this,"disconnectCallback");h(this,"writeChunk");h(this,"emit");h(this,"info");h(this,"prevRecvCbk");if(new.target===z)throw new Error("Cannot instantiate abstract class Transport");this.mutex=new _e,this.inTransaction=!1,this.receivedData="",this.activityCallback=()=>{},this.receiveCallback=()=>{},this.disconnectCallback=()=>{},this.prevRecvCbk=e=>{},this.writeChunk=128,this.emit=!1,this.info={}}async getInfo(){return this.info}async write(e){const a=new TextEncoder().encode(e);try{if(a.byteLength==0)await this.writeBytes(a),this.activityCallback();else{let i=0;for(;i<a.byteLength;){const s=a.slice(i,i+this.writeChunk);await this.writeBytes(s),this.activityCallback(),i+=this.writeChunk}}}catch(i){throw i}}onActivity(e){this.activityCallback=e}onReceive(e){this.receiveCallback=e}onDisconnect(e){this.disconnectCallback=e}async startTransaction(){await V(10);const e=await this.mutex.acquire();return this.prevRecvCbk=this.receiveCallback,this.inTransaction=!0,this.receivedData="",this.receiveCallback=t=>{this.receivedData+=t,this.emit&&this.prevRecvCbk&&this.prevRecvCbk(t)},()=>{this.prevRecvCbk&&(this.receiveCallback=this.prevRecvCbk,this.receiveCallback(this.receivedData)),this.receivedData="",this.inTransaction=!1,e()}}async readExactly(e,t=5e3){if(!this.inTransaction)throw new Error("Not in transaction");let a=Date.now()+t;for(;t<=0||Date.now()<a;){if(this.receivedData.length>=e){const s=this.receivedData.substring(0,e);return this.receivedData=this.receivedData.substring(e),s}const i=this.receivedData.length;await V(10),this.receivedData.length>i&&(a=Date.now()+t)}throw new Error("Timeout")}async readUntil(e,t=5e3){if(!this.inTransaction)throw new Error("Not in transaction");const a=Date.now();let i=0;for(;t<=0||i<t;){const s=this.receivedData.indexOf(e)+e.length;if(s>=e.length){const p=this.receivedData.substring(0,s);return this.receivedData=this.receivedData.substring(s),p}await V(10),i=Date.now()-a}throw new Error("Timeout reached before finding the ending sequence")}}class De extends z{constructor(){super();h(this,"port");h(this,"reader");h(this,"writer");h(this,"serial");if(this.port=void 0,this.reader=null,this.writer=null,"serial"in navigator)this.serial=navigator.serial;else throw new Error("WebSerial not available")}async requestAccess(){var s,p,y,d;const i={filters:[{usbVendorId:11914,usbProductId:5}]};this.port=await((s=this.serial)==null?void 0:s.requestPort(i));try{const u=(p=this.port)==null?void 0:p.getInfo();this.info={vid:(y=u==null?void 0:u.usbVendorId)==null?void 0:y.toString(16).padStart(4,"0"),pid:(d=u==null?void 0:u.usbProductId)==null?void 0:d.toString(16).padStart(4,"0")}}catch(u){throw u}}async connect(){var t,a;if(!this.port)throw new Error("Port is not available");try{await this.port.open({baudRate:115200})}catch(i){throw i instanceof Error&&(i.message.includes("already open")||i.message.includes("Failed to open")||i.name==="InvalidStateError")?new Error("PORT_ALREADY_OPEN"):i}this.reader=((t=this.port.readable)==null?void 0:t.getReader())||null,this.writer=((a=this.port.writable)==null?void 0:a.getWriter())||null,this.reader&&this.listen()}async disconnect(){if(!this.reader||!this.port)throw new Error("No active connection to disconnect from");try{await this.reader.cancel()}catch{}await this.port.forget()}async writeBytes(t){if(!this.writer)throw new Error("Writer is not initialized");await this.writer.write(t)}async listen(){if(!this.reader)throw new Error("Reader is not initialized");const t=new TextDecoder;await this.write(""),await this.write("");try{for(;;){const{value:a,done:i}=await this.reader.read();if(i||!a)break;this.receiveCallback(t.decode(a))}}catch(a){throw console.log("disconnect callback"),this.disconnectCallback(),a}}async flushInput(){if(!this.reader)throw new Error("Reader is not initialized");this.receivedData=""}}class k{constructor(e){h(this,"port");h(this,"end");this.port=e,this.end=async()=>{}}static async begin(e,t=!1){var i;const a=new k(e);await a.enterRawRepl(t);try{await a.exec("import sys,os")}catch(s){throw await((i=a.end)==null?void 0:i.call(a)),s}return a}async interruptProgram(){await this.port.write("")}async enterRawRepl(e=!1){const t=await this.port.startTransaction();try{await this.interruptProgram(),await this.port.flushInput(),await this.port.write("\r"),await this.port.readUntil(`raw REPL; CTRL-B to exit\r
`),e&&(await this.port.write(""),await this.port.readUntil("OK")),this.end=async()=>{try{await this.port.write(""),await this.port.readUntil(`>\r
`),await this.port.readUntil(">>> ")}finally{t()}}}catch(a){throw t(),a}}async exec(e,t=5e3,a=!1){if(e.length===0)return"";await this.port.write(e),await this.port.write(""),await this.port.readUntil("OK"),this.port.emit=a,a&&this.port.prevRecvCbk(this.port.receivedData);const i=(await this.port.readUntil("",t)).slice(0,-1),s=(await this.port.readUntil("",t)).slice(0,-1);if(s.length)throw new Error(s);return i}async readFile(e){const t=await this.exec(`
try:
 import binascii
 h=lambda x: binascii.hexlify(x).decode()
 h(b'')
except:
 h=lambda b: ''.join('{:02x}'.format(byte) for byte in b)
with open('${e}','rb') as f:
 while 1:
  b=f.read(64)
  if not b:break
  print(h(b),end='')
`);return t.length?new Uint8Array(t.match(/../g).map(a=>parseInt(a,16))):new Uint8Array}async readFileLines(e,t){const a=await this.exec(`
with open('${e}', 'rb') as f:
 lines = []
 for _ in range(${t}):
  line = f.readline()
  if not line:
   break
  lines.append(line)
 data = b''.join(lines)
try:
 import binascii
 h = lambda x: binascii.hexlify(x).decode()
except:
 h = lambda b: ''.join('{:02x}'.format(byte) for byte in b)
print(h(data), end='')
`);return a.length?new Uint8Array(a.match(/../g).map(i=>parseInt(i,16))):new Uint8Array}async writeFile(e,t,a=128,i=!1){if(typeof t=="string"){const d=new TextEncoder;t=new Uint8Array(d.encode(t))}const s=d=>Array.from(d).map(u=>u.toString(16).padStart(2,"0")).join(""),p=d=>{d=new Uint8Array(d);let u="b'";for(const w of d)w>=32&&w<=126?w===92||w===39?u+="\\"+String.fromCharCode(w):u+=String.fromCharCode(w):u+="\\x"+w.toString(16).padStart(2,"0");return u+="'",u},y=i?e:e+".tmp";await this.exec(`
try:
 import binascii
 h=binascii.unhexlify
 h('')
except:
 h=lambda s: bytes(int(s[i:i+2], 16) for i in range(0, len(s), 2))
f=open('${y}','wb')
w=lambda d: f.write(h(d))
o=f.write
`);for(let d=0;d<t.byteLength;d+=a){const u=t.slice(d,d+a),w="w('"+s(u)+"')",E="o("+p(u)+")";w.length<E.length?await this.exec(w):await this.exec(E)}i?await this.exec("f.close()"):await this.exec(`f.close()
try: os.remove('${e}')
except: pass
os.rename('${y}','${e}')
`)}async getDeviceInfo(){const e=await this.exec(`
try: u=os.uname()
except: u=('','','','',sys.platform)
try: v=sys.version.split(';')[1].strip()
except: v='MicroPython '+u[2]
mpy=getattr(sys.implementation, '_mpy', 0)
sp=':'.join(sys.path)
d=[u[4],u[2],u[0],v,mpy>>10,mpy&0xFF,(mpy>>8)&3,sp]
print('|'.join(str(x) for x in d))
`);let[t,a,i,s,p,y,d,u]=e.trim().split("|");const w=u.split(":");try{p=["","x86","x64","armv6","armv6m","armv7m","armv7em","armv7emsp","armv7emdp","xtensa","xtensawin","rv32imc"][parseInt(p)]}catch{p=""}let E=parseInt(y,10);const O=parseInt(d,10);return E||(E="py"),{machine:t,release:a,sysname:i,version:s,mpy_arch:p,mpy_ver:E,mpy_sub:O,sys_path:w}}async touchFile(e){await this.exec(`
f=open('${e}','wb')
f.close()
`)}async moveFile(e,t){await this.exec(`os.rename('${e}', '${t}')`)}async makeDir(e){await this.exec(`os.mkdir('${e}')`)}async makePath(e){await this.exec(`
p=''
for d in '${e}'.split('/')[:-1]:
 if not d: continue
 p += '/'+d
 try: os.mkdir(p)
 except OSError as e:
  if e.args[0] not in (17, 20): raise
`)}async removeFile(e){await this.exec("import os;os.remove('"+e+"')")}async removeDir(e){await this.exec(`import os
try:
 os.rmdir('${e}')
except OSError as e:
 if e.args[0] == 39:
  throw new Error('Directory not empty')
 else:
  throw e
`)}async removeDirForced(e){await this.exec(`import os
def rmrf(path):
    try:
      for name, type, *_ in os.ilistdir(path):
        p = path + "/" + name
        if type & 0x4000:
          print(1)
          rmrf(p)
        else:
          os.remove(p)
      os.rmdir(path)
    except OSError as e:
      pass
rmrf('`+e+"')")}async getFsStats(e="/"){return(await this.exec(`
s = os.statvfs('${e}')
fs = s[1] * s[2]
ff = s[3] * s[0]
fu = fs - ff
print('%s|%s|%s'%(fu,ff,fs))
`)).trim().split("|")}async getFiles(){return await this.exec(`
def walk(p):
 for n in os.listdir(p if p else '/'):
  fn=p+'/'+n
  try: s=os.stat(fn)
  except: s=(0,)*7
  try:
   if s[0] & 0x4000 == 0:
    print('f|'+fn+'|'+str(s[6]))
   elif n not in ('.','..'):
    print('d|'+fn+'|'+str(s[6]))
    walk(fn)
  except:
   print('f|'+p+'/???|'+str(s[6]))
walk('')
`)}async readSysInfoMD(){return await this.exec(`
import gc
gc.collect()
mu = gc.mem_alloc()
mf = gc.mem_free()
ms = mu + mf
uname=os.uname()
p=print
def size_fmt(size):
 suffixes = ['B','KiB','MiB','GiB','TiB']
 i = 0
 while size > 1024 and i < len(suffixes)-1:
  i += 1
  size //= 1024
 return "%d%s" % (size, suffixes[i])
p('## Machine')
p('- Name: \`'+uname.machine+'\`')
try:
 gc.collect()
 import microcontroller as uc
 p('- CPU: \`%s @ %s MHz\`' % (sys.platform, uc.cpu.frequency // 1_000_000))
 p('- UID: \`%s\`' % (uc.cpu.uid.hex(),))
 p('- Temp.: \`%s °C\`' % (uc.cpu.temperature,))
 p('- Voltage: \`%s V\`' % (uc.cpu.voltage,))
except:
 try:
  gc.collect()
  import machine
  p('- CPU: \`%s @ %s MHz\`' % (sys.platform, machine.freq() // 1_000_000))
 except:
  p('- CPU: \`'+sys.platform+'\`')
p()
p('## System')
p('- Version: \`'+sys.version.split(";")[1].strip()+'\`')
if ms:
 p('- Memory use:  \`%s / %s, free: %d%%\`' % (size_fmt(mu), size_fmt(ms), (mf * 100) // ms))
`)}}const W=f(!1),v=f(!1),Se=f(!1),ae=f(),x=f(null),m=f(!1),Z=f(!1),ie=f(!1),re=f(),S=f(!1),Q=f(!1),Pe=f(!1),Te=f(),R=f(!1),Oe=f(!1),M=f(!1),B=f(),P=f(!1),X=f(!1),Re=f(!1),Ue=f();let c=null;function Fe(r){return new Promise(e=>setTimeout(e,r))}async function Ie(r){try{S.value=!0,Q.value=!1,await r(),Q.value=!0}catch(e){Pe.value=!0,Te.value=e}finally{S.value=!1}}async function I(r){try{P.value=!0,X.value=!1,await r(),X.value=!0}catch(e){Re.value=!0,Ue.value=e}finally{P.value=!1}}async function $e(){return await fetch(te+"manifest.json").then(e=>e.json()).catch(()=>{})}async function Ne(){if(c){R.value=!0,M.value=!1,B.value=void 0;try{const r=await Ae(),e=await $e(),t=[],a=[];for(const s of Object.keys(e)){const p=r[s],y=e[s];if(!p||p!==y){const d=await fetch(te+s);if(!d.ok){const w=new Error(`Failed to download ${s}: HTTP ${d.status}`);throw B.value=w,M.value=!0,w}const u=new Uint8Array(await d.arrayBuffer());u.length>0&&t.push({key:s,content:u})}}for(const s of Object.keys(r))s in e||a.push(s);const i=await k.begin(c,!0);try{for(const s of a)await i.removeFile("/pibody/"+s);for(const{key:s,content:p}of t)await I(async()=>{await i.makePath("/pibody/"+s),await i.writeFile("/pibody/"+s,p)});await I(async()=>{await i.writeFile("/pibody/manifest.json",JSON.stringify(e,null,2))}),Oe.value=!0}finally{await i.end()}}catch(r){throw M.value=!0,B.value=r,r}finally{R.value=!1}}}function Be(r,e){let t=!1;const a=r.trim().split(`
`),i=s=>{const[p,y,d]=s.split("|");return y===e};return a.find(i)&&(t=!0),t}async function Ae(){if(!c)return{};const r=await k.begin(c),e=await r.getFiles();let t="{}";return Be(e,"/pibody/manifest.json")&&(t=await ze("/pibody/manifest.json",r)),await r.end(),JSON.parse(t)}function Le(){if(/(iPad|iPhone|iPod)/g.test(navigator.userAgent))throw x.value="WS_IOS_NOT_SUPPORTED","WebSerial is not available on iOS";if(!window.isSecureContext)throw x.value="WS_UNSECURE_CONNECTION","WebSerial cannot be accessed with unsecure connection";if(!("serial"in navigator||"usb"in navigator))throw x.value="WS_NOT_SUPPORTED","WebSerial and WebUSB are not supported. Try Chrome, Edge, Opera, Brave";return!0}async function Ve(){Le();const r=new De;try{await r.requestAccess()}catch(e){return ae.value=e,null}return r}async function Me(r,e,t){try{await r.connect(),await se(),v.value=!0,x.value=null}catch(a){throw W.value=!1,v.value=!1,m.value=!1,P.value=!1,S.value=!1,Se.value=!0,ae.value=a,a instanceof Error&&a.message==="PORT_ALREADY_OPEN"?x.value="PORT_ALREADY_OPEN":x.value="UNKNOWN",a}r.onReceive(e),r.onDisconnect(()=>{c==null||c.disconnect(),c=null,v.value=!1,m.value=!1,P.value=!1,S.value=!1,W.value=!1}),c=r}async function j(){c==null||c.disconnect(),c=null,W.value=!1,v.value=!1,m.value=!1,S.value=!1,P.value=!1}async function je(){if(!c)return"";try{await c.write("\r"),m.value=!1}catch(r){ie.value=!0,m.value=!1,re.value=r}}async function We(r){if(!c||(m.value&&await c.write("\r"),r.length===0))return;const e=!0,t=-1,a=await k.begin(c,e);try{Z.value=!1,m.value=!0;const i=!0;await Fe(10),await a.exec(r,t,i),Z.value=!0}catch(i){let s;i instanceof Error?s=i.message:s=String(i),s.includes("KeyboardInterrupt")||(ie.value=!0,re.value=i)}finally{c.emit=!1,m.value=!1}await a.end()}async function ze(r,e){if(!c)return"";let t="";const a=e??await k.begin(c);return await Ie(async()=>{const i=await a.readFile(r);t=new TextDecoder("utf-8",{fatal:!0}).decode(i)}),e||a.end(),t}async function qe(r,e){if(!c)return;const t=await k.begin(c);await I(async()=>await t.writeFile(r,e)),t.end()}async function He(r){if(!c)return;const e=await k.begin(c);await I(async()=>await e.removeFile(r)),e.end()}async function ee(r){if(!c)return;const e=await k.begin(c);await I(async()=>await e.removeDirForced(r)),e.end()}async function se(){if(!c)return"";const r=await k.begin(c);try{return(await r.getDeviceInfo()).version.trim()}finally{await r.end()}}const Ke={class:"border flex justify-center items-center rounded mb-2 space-x-2"},Ye={key:0,class:"material-icons"},Je={key:1,class:"material-icons"},Ge={class:"relative inline-block"},Ze={key:1,class:"absolute top-0 right-0 block h-3 w-3 rounded-full bg-red-500 border-2 border-white"},Qe={class:"flex items-center gap-4 mb-8"},Xe={class:"flex justify-end gap-2"},et={class:"flex items-center gap-4 mb-8"},tt={class:"flex justify-end gap-2"},nt=pe({__name:"IdeButtons",props:{code:{default:""},codeModifiers:{},filePath:{default:""},filePathModifiers:{}},emits:he(["terminal-write","terminal-clear"],["update:code","update:filePath"]),setup(r,{emit:e}){const t=ge(),a=we(),{t:i}=ve(),s=J(r,"code"),p=J(r,"filePath"),y=e,d=o=>{y("terminal-write",o)};async function u(){try{const o=await Ve();if(!o)return;await Me(o,d,()=>{}),await ce()}catch(o){let n=o instanceof Error?o.message:i("pages.ide.errors.unknownConnectionError");x.value==="PORT_ALREADY_OPEN"?n=i("pages.ide.errors.portBusyError"):x.value==="WS_IOS_NOT_SUPPORTED"?n=i("pages.ide.errors.wsIOSError"):x.value==="WS_UNSECURE_CONNECTION"?n=i("pages.ide.errors.wsUnsecureError"):x.value==="WS_NOT_SUPPORTED"&&(n=i("pages.ide.errors.wsNotSupportedError")),a.add({severity:"error",summary:i("pages.ide.errors.connectionError"),detail:n,life:5e3});return}}async function w(){var o;try{await Ne()}catch{await j();const n=((o=B.value)==null?void 0:o.message)||i("pages.ide.errors.updateLibrariesFailed");a.add({severity:"error",summary:i("pages.ide.errors.updateError"),detail:n,life:5e3});return}y("terminal-clear")}function E(){v.value?j():u()}const O=f(!1);function q(){We(s.value)}function ne(o){return/\.[^\/\\]+$/.test(o)?o:`${o}.py`}const U=f(!1);function H(o,n){o?qe(o,n):U.value=!0}function oe(){U.value=!1}function le(){const o=ne(p.value);H(o,s.value),U.value=!1}let A=!1;const L=f(!1);async function ce(){const o=await se();o!=""&&(o.includes("v1.26.1-pibody.v1.0")?(await ee("/libs"),await ee("/Demo"),await He("pibody.py"),await w()):(j(),A=!0,L.value=!0))}function K(){const o=t.resolve({path:"/v2/lesson/85",query:{route_id:1}}).href;window.open(o,"_blank")}return(o,n)=>{const C=xe,ue=Ee,Y=ke;return _(),$("div",null,[ye(b("div",Ke,[b("p",null,G(o.$t("pages.ide.updating")),1),b("div",null,[D(l(Ce),{class:"w-7 h-7"})])],512),[[me,l(R)]]),b("div",null,[l(v)?(_(),N(C,{key:0,id:"#run",type:"button",class:"w-9 h-9 mr-1",variant:l(m)||!l(v)?"outlined":void 0,severity:"info",rounded:"",onClick:q,disabled:l(m)||!l(v),loading:l(m)},{default:T(()=>n[8]||(n[8]=[b("span",{class:"material-icons"},"play_arrow",-1)])),_:1},8,["variant","disabled","loading"])):F("",!0),l(v)?(_(),N(C,{key:1,type:"button",class:"w-9 h-9 mr-1",variant:!l(m)||!l(v)?"outlined":void 0,severity:"danger",rounded:"",onClick:n[0]||(n[0]=g=>l(je)()),disabled:!l(m)||!l(v)},{default:T(()=>n[9]||(n[9]=[b("span",{class:"material-icons"},"stop",-1)])),_:1},8,["variant","disabled"])):F("",!0),l(v)?(_(),N(C,{key:2,type:"button",class:"w-9 h-9",variant:"outlined",severity:"secondary",rounded:"",onClick:n[1]||(n[1]=g=>H(p.value,s.value)),disabled:l(P)||l(S)||l(R)||l(m)||!l(v),loading:l(P)||l(S)||l(R)},{default:T(()=>n[10]||(n[10]=[b("span",{class:"material-icons"},"save",-1)])),_:1},8,["disabled","loading"])):F("",!0),D(C,{type:"button",class:be(["w-9 h-9 mr-1 text-white",l(v)?O.value?"bg-red-500":"bg-green-500":"bg-gray-600"]),rounded:"",text:"",onClick:n[2]||(n[2]=g=>E()),onMouseover:n[3]||(n[3]=g=>O.value=!0),onMouseleave:n[4]||(n[4]=g=>O.value=!1),loading:l(P)||l(S)||l(R)},{default:T(()=>[O.value&&l(v)?(_(),$("span",Ye,"close")):(_(),$("span",Je,"cable"))]),_:1},8,["class","loading"]),b("div",Ge,[l(A)?(_(),N(C,{key:0,type:"button",class:"w-9 h-9 mr-1",variant:"outlined",severity:"warn",rounded:"",onClick:K},{default:T(()=>n[11]||(n[11]=[b("span",{class:"material-icons"},"system_update_alt",-1)])),_:1})):F("",!0),l(A)?(_(),$("span",Ze)):F("",!0)])]),D(Y,{visible:U.value,"onUpdate:visible":n[6]||(n[6]=g=>U.value=g),modal:"",header:o.$t("pages.ide.filename"),style:{width:"25rem"}},{default:T(()=>[b("div",Qe,[D(ue,{id:"filename",modelValue:p.value,"onUpdate:modelValue":n[5]||(n[5]=g=>p.value=g),class:"flex-auto",autocomplete:"off"},null,8,["modelValue"])]),b("div",Xe,[D(C,{type:"button",label:"Cancel",severity:"secondary",onClick:oe}),D(C,{disabled:!p.value,type:"button",label:"Save",onClick:le},null,8,["disabled"])])]),_:1},8,["visible","header"]),D(Y,{visible:L.value,"onUpdate:visible":n[7]||(n[7]=g=>L.value=g),modal:"",header:o.$t("pages.ide.oldFirmware"),style:{width:"25rem"}},{default:T(()=>[b("div",et,G(o.$t("pages.ide.oldFirmwareText")),1),b("div",tt,[D(C,{type:"button",label:o.$t("pages.ide.go"),onClick:K},null,8,["label"])])]),_:1},8,["visible","header"])])}}});export{nt as _,v as i,ze as l};
