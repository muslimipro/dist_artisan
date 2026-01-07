var we=Object.defineProperty;var pe=(r,e,t)=>e in r?we(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var c=(r,e,t)=>pe(r,typeof e!="symbol"?e+"":e,t);import{r as f,aF as se,b as ye,a4 as me,u as be,a as ge,a5 as z,o as k,c as O,z as xe,Z as ke,i as o,j as x,t as Q,h as T,p as F,E as R,q as I,n as ee,v as Ce,w as Ee,M as Se}from"./index-BUv52Uli.js";import{s as _e}from"./index-3oZ1jNbe.js";import{s as De}from"./index-B19_cjzd.js";function $(r){return new Promise(e=>setTimeout(e,r))}class Pe{constructor(){c(this,"_lock",Promise.resolve());this._lock=Promise.resolve()}acquire(){let e;const t=new Promise(a=>e=a),i=this._lock.then(()=>e);return this._lock=this._lock.then(()=>t),i}}class M{constructor(){c(this,"mutex");c(this,"inTransaction");c(this,"receivedData");c(this,"activityCallback");c(this,"receiveCallback");c(this,"disconnectCallback");c(this,"writeChunk");c(this,"emit");c(this,"info");c(this,"prevRecvCbk");c(this,"type");if(new.target===M)throw new Error("Cannot instantiate abstract class Transport");this.mutex=new Pe,this.inTransaction=!1,this.receivedData="",this.activityCallback=()=>{},this.receiveCallback=()=>{},this.disconnectCallback=()=>{},this.prevRecvCbk=e=>{},this.writeChunk=128,this.emit=!1,this.info={},this.type=null}async getInfo(){return this.info}async write(e){const i=new TextEncoder().encode(e);try{if(i.byteLength==0)await this.writeBytes(i),this.activityCallback();else{let a=0;for(;a<i.byteLength;){const s=i.slice(a,a+this.writeChunk);await this.writeBytes(s),this.activityCallback(),a+=this.writeChunk}}}catch(a){throw a}}onActivity(e){this.activityCallback=e}onReceive(e){this.receiveCallback=e}onDisconnect(e){this.disconnectCallback=e}async startTransaction(){await $(10);const e=await this.mutex.acquire();return this.prevRecvCbk=this.receiveCallback,this.inTransaction=!0,this.receivedData="",this.receiveCallback=t=>{this.receivedData+=t,this.emit&&this.prevRecvCbk&&this.prevRecvCbk(t)},()=>{this.prevRecvCbk&&(this.receiveCallback=this.prevRecvCbk,this.receiveCallback(this.receivedData)),this.receivedData="",this.inTransaction=!1,e()}}async readExactly(e,t=5e3){if(!this.inTransaction)throw new Error("Not in transaction");let i=Date.now()+t;for(;t<=0||Date.now()<i;){if(this.receivedData.length>=e){const s=this.receivedData.substring(0,e);return this.receivedData=this.receivedData.substring(e),s}const a=this.receivedData.length;await $(10),this.receivedData.length>a&&(i=Date.now()+t)}throw new Error("Timeout")}async readUntil(e,t=5e3){if(!this.inTransaction)throw new Error("Not in transaction");const i=Date.now();let a=0;for(;t<=0||a<t;){const s=this.receivedData.indexOf(e)+e.length;if(s>=e.length){const v=this.receivedData.substring(0,s);return this.receivedData=this.receivedData.substring(s),v}await $(10),a=Date.now()-i}throw new Error("Timeout reached before finding the ending sequence")}}class Te extends M{constructor(){super();c(this,"port");c(this,"reader");c(this,"writer");c(this,"serial");if(this.port=void 0,this.type="usb",this.reader=null,this.writer=null,"serial"in navigator)this.serial=navigator.serial;else throw new Error("WebSerial not available")}async requestAccess(){var s,v,b,h;const a={filters:[{usbVendorId:11914,usbProductId:5}]};this.port=await((s=this.serial)==null?void 0:s.requestPort(a));try{const d=(v=this.port)==null?void 0:v.getInfo();this.info={vid:(b=d==null?void 0:d.usbVendorId)==null?void 0:b.toString(16).padStart(4,"0"),pid:(h=d==null?void 0:d.usbProductId)==null?void 0:h.toString(16).padStart(4,"0")}}catch(d){throw d}}async connect(){var t,i;if(!this.port)throw new Error("Port is not available");try{await this.port.open({baudRate:115200})}catch(a){throw a instanceof Error&&(a.message.includes("already open")||a.message.includes("Failed to open")||a.name==="InvalidStateError")?new Error("PORT_ALREADY_OPEN"):a}this.reader=((t=this.port.readable)==null?void 0:t.getReader())||null,this.writer=((i=this.port.writable)==null?void 0:i.getWriter())||null,this.reader&&this.listen()}async disconnect(){if(!this.reader||!this.port)throw new Error("No active connection to disconnect from");try{await this.reader.cancel()}catch{}await this.port.forget()}async writeBytes(t){if(!this.writer)throw new Error("Writer is not initialized");await this.writer.write(t)}async listen(){if(!this.reader)throw new Error("Reader is not initialized");const t=new TextDecoder;await this.write(""),await this.write("");try{for(;;){const{value:i,done:a}=await this.reader.read();if(a||!i)break;this.receiveCallback(t.decode(i))}}catch(i){throw console.log("disconnect callback"),this.disconnectCallback(),i}}async flushInput(){if(!this.reader)throw new Error("Reader is not initialized");this.receivedData=""}}const q="6e400001-b5a3-f393-e0a9-e50e24dcca9e",Re="6e400002-b5a3-f393-e0a9-e50e24dcca9e",Ue="6e400003-b5a3-f393-e0a9-e50e24dcca9e",Oe=241;class Ie extends M{constructor(){super();c(this,"bluetooth");c(this,"device");c(this,"server");c(this,"service");c(this,"rx");c(this,"tx");c(this,"tx_limit");c(this,"decoderStream");c(this,"reader");c(this,"_onCharacteristicChangedBound",null);c(this,"writer",null);if(this.device=null,this.server=null,this.service=null,this.rx=null,this.tx=null,this.tx_limit=20,this.decoderStream=null,this.reader=null,this.type="ble","bluetooth"in navigator)this.bluetooth=navigator.bluetooth;else throw new Error("WebBluetooth not available")}async requestAccess(){if(!this.bluetooth||typeof this.bluetooth.requestDevice!="function")throw new Error("Invalid Bluetooth object");try{const t={filters:[{services:[q]},{namePrefix:"mpy-"}],optionalServices:[q]},i=await this.bluetooth.requestDevice(t);this.device=i}catch(t){throw t}if(this.device){this.device.addEventListener("gattserverdisconnected",()=>{this.disconnectCallback()});try{this.info={name:this.device.name},console.log(this.device)}catch(t){throw t}}}async connect(){if(!this.device)throw new Error("Device is not available");if(!(!this.device||!this.device.gatt)){if(!this.device)throw new Error("Device is not available");this.server=await this.device.gatt.connect();try{this.service=await this.server.getPrimaryService(q),this.rx=await this.service.getCharacteristic(Ue),this.tx=await this.service.getCharacteristic(Re),this.tx_limit=Oe}catch{throw new Error("Pico W NUS Service not found. Is MicroPython BLE active?")}await this.cleanupStreams(),this.decoderStream=new TextDecoderStream,this.reader=this.decoderStream.readable.getReader(),this.writer=this.decoderStream.writable.getWriter(),this._onCharacteristicChangedBound=t=>{var i,a;this.writer&&((a=(i=this.device)==null?void 0:i.gatt)!=null&&a.connected)&&this.writer.write(t.target.value).catch(()=>{console.warn("Writer is closed, ignoring data")})},await this.rx.startNotifications(),this.rx.addEventListener("characteristicvaluechanged",this._onCharacteristicChangedBound),this.processStream()}}async cleanupStreams(){this.reader&&(await this.reader.cancel().catch(()=>{}),this.reader.releaseLock(),this.reader=null),this.writer&&(await this.writer.abort().catch(()=>{}),this.writer=null)}async disconnect(){if(this.rx&&this._onCharacteristicChangedBound){this.rx.removeEventListener("characteristicvaluechanged",this._onCharacteristicChangedBound);try{await this.rx.stopNotifications()}catch(t){console.log("Could not stop notifications",t)}}await this.cleanupStreams(),this.device&&this.device.gatt&&this.device.gatt.connected&&this.device.gatt.disconnect(),this.inTransaction=!1,this.receivedData=""}async processStream(){var t,i;try{for(;(i=(t=this.device)==null?void 0:t.gatt)!=null&&i.connected&&this.reader;){const{value:a,done:s}=await this.reader.read();if(s)break;a&&(this.receiveCallback(a),this.activityCallback())}}catch(a){console.error("Bluetooth stream loop error:",a)}}async writeBytes(t){this.tx&&(await this.tx.writeValue(t),await $(1))}async flushInput(){if(!this.reader)throw new Error("Reader is not initialized");this.receivedData=""}}class E{constructor(e){c(this,"port");c(this,"end");this.port=e,this.end=async()=>{}}static async begin(e,t=!1){var a;const i=new E(e);t=t&&e.type=="usb",await i.enterRawRepl(t);try{await i.exec("import sys,os")}catch(s){throw await((a=i.end)==null?void 0:a.call(i)),s}return i}async interruptProgram(){await this.port.write("")}async enterRawRepl(e=!1){const t=await this.port.startTransaction();try{await this.interruptProgram(),await this.port.flushInput(),await this.port.write("\r"),await this.port.readUntil(`raw REPL; CTRL-B to exit\r
`),e&&(await this.port.write(""),await this.port.readUntil("OK")),this.end=async()=>{try{await this.port.write(""),await this.port.readUntil(`>\r
`),await this.port.readUntil(">>> ")}finally{t()}}}catch(i){throw t(),i}}async exec(e,t=5e3,i=!1){if(e.length===0)return"";await this.port.write(e),await this.port.write(""),await this.port.readUntil("OK"),this.port.emit=i,i&&this.port.prevRecvCbk(this.port.receivedData);const a=(await this.port.readUntil("",t)).slice(0,-1),s=(await this.port.readUntil("",t)).slice(0,-1);if(s.length)throw new Error(s);return a}async readFile(e){const t=await this.exec(`
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
`);return t.length?new Uint8Array(t.match(/../g).map(i=>parseInt(i,16))):new Uint8Array}async readFileLines(e,t){const i=await this.exec(`
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
`);return i.length?new Uint8Array(i.match(/../g).map(a=>parseInt(a,16))):new Uint8Array}async writeFile(e,t,i=128,a=!1){if(typeof t=="string"){const h=new TextEncoder;t=new Uint8Array(h.encode(t))}const s=h=>Array.from(h).map(d=>d.toString(16).padStart(2,"0")).join(""),v=h=>{h=new Uint8Array(h);let d="b'";for(const p of h)p>=32&&p<=126?p===92||p===39?d+="\\"+String.fromCharCode(p):d+=String.fromCharCode(p):d+="\\x"+p.toString(16).padStart(2,"0");return d+="'",d},b=a?e:e+".tmp";await this.exec(`
try:
 import binascii
 h=binascii.unhexlify
 h('')
except:
 h=lambda s: bytes(int(s[i:i+2], 16) for i in range(0, len(s), 2))
f=open('${b}','wb')
w=lambda d: f.write(h(d))
o=f.write
`);for(let h=0;h<t.byteLength;h+=i){const d=t.slice(h,h+i),p="w('"+s(d)+"')",D="o("+v(d)+")";p.length<D.length?await this.exec(p):await this.exec(D)}a?await this.exec("f.close()"):await this.exec(`f.close()
try: os.remove('${e}')
except: pass
os.rename('${b}','${e}')
`)}async getDeviceInfo(){const e=await this.exec(`
try: u=os.uname()
except: u=('','','','',sys.platform)
try: v=sys.version.split(';')[1].strip()
except: v='MicroPython '+u[2]
mpy=getattr(sys.implementation, '_mpy', 0)
sp=':'.join(sys.path)
d=[u[4],u[2],u[0],v,mpy>>10,mpy&0xFF,(mpy>>8)&3,sp]
print('|'.join(str(x) for x in d))
`);let[t,i,a,s,v,b,h,d]=e.trim().split("|");const p=d.split(":");try{v=["","x86","x64","armv6","armv6m","armv7m","armv7em","armv7emsp","armv7emdp","xtensa","xtensawin","rv32imc"][parseInt(v)]}catch{v=""}let D=parseInt(b,10);const V=parseInt(h,10);return D||(D="py"),{machine:t,release:i,sysname:a,version:s,mpy_arch:v,mpy_ver:D,mpy_sub:V,sys_path:p}}async touchFile(e){await this.exec(`
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
`)}}const Y=f(!1),w=f(!1),Be=f(!1),X=f(),C=f(null),m=f(!1),te=f(!1),ne=f(!1),oe=f(),S=f(!1),ie=f(!1),Fe=f(!1),Ne=f(),U=f(!1),$e=f(!1),H=f(!1),L=f(),_=f(!1),ae=f(!1),Le=f(!1),Me=f();let u=null;function Ve(r){return new Promise(e=>setTimeout(e,r))}async function Ae(r){try{S.value=!0,ie.value=!1,await r(),ie.value=!0}catch(e){Fe.value=!0,Ne.value=e}finally{S.value=!1}}async function N(r){try{_.value=!0,ae.value=!1,await r(),ae.value=!0}catch(e){Le.value=!0,Me.value=e}finally{_.value=!1}}async function We(){return await fetch(se+"manifest.json").then(e=>e.json()).catch(()=>{})}async function je(){if(u){U.value=!0,H.value=!1,L.value=void 0;try{const r=await qe(),e=await We(),t=[],i=[];for(const s of Object.keys(e)){const v=r[s],b=e[s];if(!v||v!==b){const h=await fetch(se+s);if(!h.ok){const p=new Error(`Failed to download ${s}: HTTP ${h.status}`);throw L.value=p,H.value=!0,p}const d=new Uint8Array(await h.arrayBuffer());d.length>0&&t.push({key:s,content:d})}}for(const s of Object.keys(r))s in e||i.push(s);const a=await E.begin(u,!0);try{for(const s of i)await a.removeFile("/pibody/"+s);for(const{key:s,content:v}of t)await N(async()=>{await a.makePath("/pibody/"+s),await a.writeFile("/pibody/"+s,v)});await N(async()=>{await a.writeFile("/pibody/manifest.json",JSON.stringify(e,null,2))}),$e.value=!0}finally{await a.end()}}catch(r){throw H.value=!0,L.value=r,r}finally{U.value=!1}}}function ze(r,e){let t=!1;const i=r.trim().split(`
`),a=s=>{const[v,b,h]=s.split("|");return b===e};return i.find(a)&&(t=!0),t}async function qe(){if(!u)return{};const r=await E.begin(u),e=await r.getFiles();let t="{}";return ze(e,"/pibody/manifest.json")&&(t=await Ge("/pibody/manifest.json",r)),await r.end(),JSON.parse(t)}function He(){if(/(iPad|iPhone|iPod)/g.test(navigator.userAgent))throw C.value="WS_IOS_NOT_SUPPORTED","WebSerial is not available on iOS";if(!window.isSecureContext)throw C.value="WS_UNSECURE_CONNECTION","WebSerial cannot be accessed with unsecure connection";if(!("serial"in navigator||"usb"in navigator))throw C.value="WS_NOT_SUPPORTED","WebSerial and WebUSB are not supported. Try Chrome, Edge, Opera, Brave";return!0}async function Ke(r){He();let e;if(r==="usb")e=new Te;else if(r==="ble")e=new Ie;else return X.value=new Error("Wrong connection type"),null;try{await e.requestAccess()}catch(t){return X.value=t,null}return e}async function Ye(r,e,t){try{await r.connect(),await le(),w.value=!0,C.value=null}catch(i){throw Y.value=!1,w.value=!1,m.value=!1,_.value=!1,S.value=!1,Be.value=!0,X.value=i,i instanceof Error&&i.message==="PORT_ALREADY_OPEN"?C.value="PORT_ALREADY_OPEN":C.value="UNKNOWN",i}r.onReceive(e),r.onDisconnect(()=>{u==null||u.disconnect(),u=null,w.value=!1,m.value=!1,_.value=!1,S.value=!1,Y.value=!1}),u=r}async function K(){u==null||u.disconnect(),u=null,Y.value=!1,w.value=!1,m.value=!1,S.value=!1,_.value=!1}async function Xe(){if(!u)return"";try{await u.write("\r"),m.value=!1}catch(r){ne.value=!0,m.value=!1,oe.value=r}}async function Je(r){if(!u||(m.value&&await u.write("\r"),r.length===0))return;const e=!0,t=-1,i=await E.begin(u,e);try{te.value=!1,m.value=!0;const a=!0;await Ve(10),await i.exec(r,t,a),te.value=!0}catch(a){let s;a instanceof Error?s=a.message:s=String(a),s.includes("KeyboardInterrupt")||(ne.value=!0,oe.value=a)}finally{u.emit=!1,m.value=!1}await i.end()}async function Ge(r,e){if(!u)return"";let t="";const i=e??await E.begin(u);return await Ae(async()=>{const a=await i.readFile(r);t=new TextDecoder("utf-8",{fatal:!0}).decode(a)}),e||i.end(),t}async function Ze(r,e){if(!u)return;const t=await E.begin(u);await N(async()=>await t.writeFile(r,e)),t.end()}async function Qe(r){if(!u)return;const e=await E.begin(u);await N(async()=>await e.removeFile(r)),e.end()}async function re(r){if(!u)return;const e=await E.begin(u);await N(async()=>await e.removeDirForced(r)),e.end()}async function le(){if(!u)return"";const r=await E.begin(u);try{return(await r.getDeviceInfo()).version.trim()}finally{await r.end()}}const et={class:"border flex justify-center items-center rounded mb-2 space-x-2"},tt={key:0,class:"material-icons"},it={key:1,class:"material-icons"},at={key:0,class:"material-icons"},rt={key:1,class:"material-icons"},st={class:"relative inline-block"},nt={key:1,class:"absolute top-0 right-0 block h-3 w-3 rounded-full bg-red-500 border-2 border-white"},ot={class:"flex items-center gap-4 mb-8"},lt={class:"flex justify-end gap-2"},ct={class:"flex items-center gap-4 mb-8"},ut={class:"flex justify-end gap-2"},wt=ye({__name:"IdeButtons",props:{code:{default:""},codeModifiers:{},filePath:{default:""},filePathModifiers:{},showBluetooth:{type:Boolean,default:!1},showBluetoothModifiers:{}},emits:me(["terminal-write","terminal-clear"],["update:code","update:filePath","update:showBluetooth"]),setup(r,{emit:e}){const t=Ce(),i=be(),{t:a}=ge(),s=z(r,"code"),v=z(r,"filePath"),b=z(r,"showBluetooth"),h=f(""),d=e,p=l=>{d("terminal-write",l)};async function D(l){try{const n=await Ke(l);if(!n)return;await Ye(n,p,()=>{}),l=="usb"&&await fe(),h.value=l}catch(n){let y=n instanceof Error?n.message:a("pages.ide.errors.unknownConnectionError");C.value==="PORT_ALREADY_OPEN"?y=a("pages.ide.errors.portBusyError"):C.value==="WS_IOS_NOT_SUPPORTED"?y=a("pages.ide.errors.wsIOSError"):C.value==="WS_UNSECURE_CONNECTION"?y=a("pages.ide.errors.wsUnsecureError"):C.value==="WS_NOT_SUPPORTED"&&(y=a("pages.ide.errors.wsNotSupportedError")),i.add({severity:"error",summary:a("pages.ide.errors.connectionError"),detail:y,life:5e3});return}}async function V(){var l;try{await je()}catch{await K();const n=((l=L.value)==null?void 0:l.message)||a("pages.ide.errors.updateLibrariesFailed");i.add({severity:"error",summary:a("pages.ide.errors.updateError"),detail:n,life:5e3});return}d("terminal-clear")}function A(l){w.value?K():D(l)}const P=f(!1);function ce(){Je(s.value)}function ue(l){return/\.[^\/\\]+$/.test(l)?l:`${l}.py`}const B=f(!1);function J(l,n){l?Ze(l,n):B.value=!0}function de(){B.value=!1}function he(){const l=ue(v.value);J(l,s.value),B.value=!1}let W=!1;const j=f(!1);async function fe(){const l=await le();l!=""&&(l.includes("v1.26.1-pibody.v1.0")?(await re("/libs"),await re("/Demo"),await Qe("pibody.py"),await V()):(K(),W=!0,j.value=!0))}function G(){const l=t.resolve({path:"/v2/lesson/85",query:{route_id:1}}).href;window.open(l,"_blank")}return(l,n)=>{const y=Ee,ve=_e,Z=Se;return k(),O("div",null,[xe(x("div",et,[x("p",null,Q(l.$t("pages.ide.updating")),1),x("div",null,[T(o(De),{class:"w-7 h-7"})])],512),[[ke,o(U)]]),x("div",null,[o(w)?(k(),F(y,{key:0,id:"#run",type:"button",class:"w-9 h-9 mr-1",variant:o(m)||!o(w)?"outlined":void 0,severity:"info",rounded:"",onClick:ce,disabled:o(m)||!o(w),loading:o(m)},{default:R(()=>n[11]||(n[11]=[x("span",{class:"material-icons"},"play_arrow",-1)])),_:1},8,["variant","disabled","loading"])):I("",!0),o(w)?(k(),F(y,{key:1,type:"button",class:"w-9 h-9 mr-1",variant:!o(m)||!o(w)?"outlined":void 0,severity:"danger",rounded:"",onClick:n[0]||(n[0]=g=>o(Xe)()),disabled:!o(m)||!o(w)},{default:R(()=>n[12]||(n[12]=[x("span",{class:"material-icons"},"stop",-1)])),_:1},8,["variant","disabled"])):I("",!0),o(w)?(k(),F(y,{key:2,type:"button",class:"w-9 h-9",variant:"outlined",severity:"secondary",rounded:"",onClick:n[1]||(n[1]=g=>J(v.value,s.value)),disabled:o(_)||o(S)||o(U)||o(m)||!o(w),loading:o(_)||o(S)||o(U)},{default:R(()=>n[13]||(n[13]=[x("span",{class:"material-icons"},"save",-1)])),_:1},8,["disabled","loading"])):I("",!0),b.value?(k(),F(y,{key:3,type:"button",class:ee(["w-9 h-9 mr-1 text-white",[o(w)?P.value?"bg-red-500":"bg-green-500":"bg-gray-600",o(w)&&h.value!=="ble"?"hidden":""]]),rounded:"",text:"",onClick:n[2]||(n[2]=g=>A("ble")),onMouseover:n[3]||(n[3]=g=>P.value=!0),onMouseleave:n[4]||(n[4]=g=>P.value=!1),loading:o(_)||o(S)||o(U)},{default:R(()=>[P.value&&o(w)?(k(),O("span",tt,"close")):(k(),O("span",it,"bluetooth"))]),_:1},8,["class","loading"])):I("",!0),T(y,{type:"button",class:ee(["w-9 h-9 mr-1 text-white",[o(w)?P.value?"bg-red-500":"bg-green-500":"bg-gray-600",o(w)&&h.value!=="usb"?"hidden":""]]),rounded:"",text:"",onClick:n[5]||(n[5]=g=>A("usb")),onMouseover:n[6]||(n[6]=g=>P.value=!0),onMouseleave:n[7]||(n[7]=g=>P.value=!1),loading:o(_)||o(S)||o(U)},{default:R(()=>[P.value&&o(w)?(k(),O("span",at,"close")):(k(),O("span",rt,"cable"))]),_:1},8,["class","loading"]),x("div",st,[o(W)?(k(),F(y,{key:0,type:"button",class:"w-9 h-9 mr-1",variant:"outlined",severity:"warn",rounded:"",onClick:G},{default:R(()=>n[14]||(n[14]=[x("span",{class:"material-icons"},"system_update_alt",-1)])),_:1})):I("",!0),o(W)?(k(),O("span",nt)):I("",!0)])]),T(Z,{visible:B.value,"onUpdate:visible":n[9]||(n[9]=g=>B.value=g),modal:"",header:l.$t("pages.ide.filename"),style:{width:"25rem"}},{default:R(()=>[x("div",ot,[T(ve,{id:"filename",modelValue:v.value,"onUpdate:modelValue":n[8]||(n[8]=g=>v.value=g),class:"flex-auto",autocomplete:"off"},null,8,["modelValue"])]),x("div",lt,[T(y,{type:"button",label:"Cancel",severity:"secondary",onClick:de}),T(y,{disabled:!v.value,type:"button",label:"Save",onClick:he},null,8,["disabled"])])]),_:1},8,["visible","header"]),T(Z,{visible:j.value,"onUpdate:visible":n[10]||(n[10]=g=>j.value=g),modal:"",header:l.$t("pages.ide.oldFirmware"),style:{width:"25rem"}},{default:R(()=>[x("div",ct,Q(l.$t("pages.ide.oldFirmwareText")),1),x("div",ut,[T(y,{type:"button",label:l.$t("pages.ide.go"),onClick:G},null,8,["label"])])]),_:1},8,["visible","header"])])}}});export{wt as _,w as i,Ge as l};
