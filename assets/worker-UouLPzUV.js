var Fe=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var hr=Fe((wr,Z)=>{const De={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_BASE_URL:"https://api-2.artisan.education/",VITE_GEONAMES_USERNAME:"artisan_education",VITE_PIBODY_FIRMWARE_LIBS_URL:"https://raw.githubusercontent.com/rt-zone/frozen_libs/main/",VITE_PIBODY_MODULES_LIBS_URL:"https://raw.githubusercontent.com/rt-zone/pibody_libs/main/pibody/"};ee("VITE_BASE_URL");const le=ee("VITE_PIBODY_MODULES_LIBS_URL"),ke=ee("VITE_PIBODY_FIRMWARE_LIBS_URL");function ee(e){const r=De[e];if(r===void 0)throw new Error(`Env variable ${e} is required`);return r}var J=(e=>(e[e.NONE=-1]="NONE",e[e.IN=0]="IN",e[e.OUT=1]="OUT",e[e.ANALOG=5]="ANALOG",e[e.PWM=6]="PWM",e))(J||{}),G=(e=>(e[e.NONE=-1]="NONE",e[e.UP=0]="UP",e[e.DOWN=1]="DOWN",e))(G||{}),M=(e=>(e.PinGetValue="pin get value",e.PinGetMode="pin get mode",e.PinGetPull="pin get pull",e.AdcReadU16="adc read_u16",e.I2CScan="i2c scan",e.I2CReadFromMem="i2c readfrom_mem",e.Input="input",e.Ticks_ms="ticks ms",e.BME280ReadTemperature="BME280 read_temperature",e.BME280ReadPressure="BME280 read_pressure",e.BME280ReadHumidity="BME280 read_humidity",e.VL53L0XRead="VL53L0X read",e.VEML6040ReadRGB="VEML6040 readRGB",e.MPU6050ReadAccel="MPU6050 read_accel",e.MPU6050ReadGyro="MPU6050 read_gyro",e.Random="random value",e))(M||{});const se=2;var g=(e=>(e.I2CWriteToMem="i2c writefrom_mem",e.PinSetValue="pin set value",e.PinSetMode="pin set mode",e.PinSetPull="pin set pull",e.PwmFreq="pwm freq",e.PwmDutyU16="pwm duty_u16",e.Output="output",e.Sleep="sleep",e.DisplayText="display text",e.DisplayClear="display clear",e.NeoPixelWrite="neopixel write",e.RawOutput="raw output",e.BME280Init="BME280 __init__",e.VL53L0XInit="VL53L0X __init__",e.VEML6040Init="VEML6040 __init__",e.MPU6050Init="MPU6050 __init__",e.KeyboardInterrupt="keyboard interrupt",e.Error="error",e))(g||{}),q=(e=>(e.Finished="finished",e.Initialized="initialized",e.Timeout="timeout",e))(q||{});Object.values({...M,...g,...q});new Set(Object.values(M));new Set(Object.values(q));new Set(Object.values(g));const Ve=`
import types, sys

framebuf = types.ModuleType("framebuf")

class FrameBuffer:
    def __init__(self, buffer, width, height, format):
        self.buffer = buffer
        self.width = width
        self.height = height
        self.format = format
    def fill(self, c): pass
    def pixel(self, x, y, c): pass
    def hline(self, x, y, w, c): pass
    def vline(self, x, y, h, c): pass
    def rect(self, x, y, w, h, c): pass
    def fill_rect(self, x, y, w, h, c): pass
    def text(self, s, x, y, c): pass
    def scroll(self, dx, dy): pass

framebuf.FrameBuffer = FrameBuffer
sys.modules["framebuf"] = framebuf
`,qe=`
import sys, types
import mpbridge

neopixel = types.ModuleType('neopixel')

class NeoPixel:
    def __init__(self, pin, n, bpp=3, timing=1):
        self.pin = int(getattr(pin, '_id', pin))
        self.n = int(n)
        self.bpp = int(bpp)
        self.timing = int(timing)
        self.pixels = [[0 for _ in range(self.bpp)] for _ in range(self.n)]

    def fill(self, pixel):
        arr = list(pixel) if hasattr(pixel, '__iter__') else [0,0,0]
        arr = [int(x) for x in arr[:self.bpp]]
        for i in range(self.n):
            self.pixels[i] = arr[:]  # copy

    def write(self):
        safe = [list(map(int, p[:self.bpp])) for p in self.pixels]
        mpbridge.neopixel_write(self.pin, safe)

    show = write

    def __len__(self):
        return self.n

    def set_pixel(self, index, val):
        if 0 <= index < self.n:
            arr = list(val) if hasattr(val, '__iter__') else [0,0,0]
            self.pixels[index] = [int(x) for x in arr[:self.bpp]]

    def get_pixel(self, index):
        if 0 <= index < self.n:
            return list(self.pixels[index])
        return [0]*self.bpp

    def __setitem__(self, index, val):
        self.set_pixel(int(index), val)

    def __getitem__(self, index):
        return self.get_pixel(int(index))

    # aliases commonly seen in libs
    set = set_pixel
    get = get_pixel

neopixel.NeoPixel = NeoPixel
sys.modules['neopixel'] = neopixel
`,Te=`
import sys, types
import mpbridge
import inspect

machine = types.ModuleType("machine")

def __getVarName(self):
    frame = inspect.currentframe().f_back
    local_names = [n for n, v in frame.f_locals.items() if v is self]
    global_names = [n for n, v in frame.f_globals.items() if v is self]
    names = local_names + global_names
    names = [name for name in names if name != 'self']
    if len(names) > 0 :
        return names[0]
    return None
mpbridge.getVarName = __getVarName
del __getVarName

class Pin:
    IN = mpbridge.Mode_IN
    OUT = mpbridge.Mode_OUT
    PULL_UP = mpbridge.Pull_UP
    PULL_DOWN = mpbridge.Pull_DOWN
    PULL_NONE = mpbridge.Pull_NONE
    # IRQ flags (bitmask), common in MicroPython
    IRQ_RISING = 1
    IRQ_FALLING = 2
    IRQ_HIGH_LEVEL = 4
    IRQ_LOW_LEVEL = 8

    def __init__(self, pin_id, mode=None, pull=None, value=None):
        self._id = int(pin_id)
        if mode is None:
            mode = self.IN
        if pull is None:
            pull = self.PULL_NONE
        name = mpbridge.getVarName(self)
        mpbridge.pin_set_mode(self._id, int(mode), self.__class__.__name__, name)
        mpbridge.pin_set_pull(self._id, int(pull), self.__class__.__name__, name)
        if value is not None:
            mpbridge.pin_set_value(self._id, 1 if value else 0, self.__class__.__name__, name)

    def value(self, v=None):
        name = mpbridge.getVarName(self)
        if v is None:
            return mpbridge.pin_get_value(self._id, self.__class__.__name__, name)
        mpbridge.pin_set_value(self._id, 1 if v else 0, self.__class__.__name__, name)

    def on(self):
        self.value(1)

    def off(self):
        self.value(0)

    def toggle(self):
        state = self.value()
        self.value(0 if state else 1)
    def id(self):
        return self._id

class PWM:
    def __init__(self, pin, freq=0, duty_u16=0):
        self._id = int(pin._id) if hasattr(pin, '_id') else int(pin)
        self._freq = 0
        self._duty = 0
        # Ensure OUT mode for PWM
        mpbridge.pin_set_mode(self._id, Pin.OUT)
        if freq:
            self.freq(freq)
        if duty_u16:
            self.duty_u16(duty_u16)

    def freq(self, f=None):
        if f is None:
            return self._freq
        self._freq = int(f)
        mpbridge.pwm_freq(self._id, self._freq)

    def duty_u16(self, d=None):
        if d is None:
            return self._duty
        self._duty = int(d)
        mpbridge.pwm_duty_u16(self._id, self._duty)

class ADC:
    def __init__(self, pin_or_ch):
        p = int(pin_or_ch._id) if hasattr(pin_or_ch, '_id') else int(pin_or_ch)
        # Map as in Pico: 0/1/2 are channels -> pins 26/27/28
        if p in (0, 1, 2):
            p = 26 + p
        elif p not in (26, 27, 28):
            raise Exception(f"Pin({p}) doesn't have ADC capabilities")
        self._id = p
        # Analog mode
        mpbridge.pin_set_mode(self._id, Pin.PULL_NONE)  # Mode is analog in JS side

    def read_u16(self):
        return int(mpbridge.adc_read_u16(self._id))

class SPI:
    MSB = 0
    LSB = 1

    def __init__(self, id=0, *, baudrate=1000000, polarity=0, phase=0, bits=8, firstbit=MSB, sck=None, mosi=None, miso=None):
        self.id = int(id)
        self.baudrate = int(baudrate)
        self.polarity = int(polarity)
        self.phase = int(phase)
        self.bits = int(bits)
        self.firstbit = int(firstbit)
        self.sck = sck
        self.mosi = mosi
        self.miso = miso

    def init(self, *args, **kwargs):
        return None

    def deinit(self):
        return None

    def write(self, buf):
        # No-op in emulator for now
        return len(buf) if hasattr(buf, '__len__') else None

    def read(self, nbytes, write=0x00):
        return bytes([0] * int(nbytes))

    def readinto(self, buf, write=0x00):
        try:
            mv = memoryview(buf)
            for i in range(len(mv)):
                mv[i] = 0
            return None
        except TypeError:
            return None

    def write_readinto(self, write_buf, read_buf):
        # Fill read_buf with zeros
        try:
            mv = memoryview(read_buf)
            for i in range(len(mv)):
                mv[i] = 0
            return None
        except TypeError:
            return None

class I2C:
    def __init__(self, id, sda=None, scl=None, freq=400000, timeout=50000):
        self.id = int(id)
        self.sda = sda
        self.scl = scl
        self.freq = int(freq)
        self.timeout = int(timeout)
        self._sda_id = int(sda._id) if hasattr(sda, '_id') else int(sda)
        self._scl_id = int(scl._id) if hasattr(scl, '_id') else int(scl)

    def readfrom(self, addr, nbytes):
        return self.readfrom_mem(addr, 0, nbytes)

    def readfrom_mem(self, addr, memaddr, nbytes):
        data = mpbridge.i2c_readfrom_mem(self._sda_id, self._scl_id, int(addr), int(memaddr), int(nbytes))
        return bytes(data)

    def writeto_mem(self, addr, memaddr, buf):
        data = list(buf) if hasattr(buf, '__iter__') else []
        mpbridge.i2c_writeto_mem(self._sda_id, self._scl_id, int(addr), int(memaddr), data)

    def scan(self):
        return mpbridge.i2c_scan(self._sda_id, self._scl_id)

    def writeto(self, addr, buf):
        data = list(buf) if hasattr(buf, '__iter__') else []
        if len(data) == 0:
            return
        memaddr = int(data[0])
        payload = data[1:]
        mpbridge.i2c_writeto_mem(self._sda_id, self._scl_id, int(addr), memaddr, payload)

def SoftI2C(sda, scl, freq=400000, timeout=50000):
    return I2C(0, sda=sda, scl=scl, freq=freq, timeout=timeout)

machine.Pin = Pin
machine.PWM = PWM
machine.ADC = ADC
machine.SPI = SPI
machine.I2C = I2C
machine.SoftI2C = SoftI2C

sys.modules['machine'] = machine
`,je=`
def _patch():
    import mpbridge
    import BME280 as _bme
    mpbridge.original_BME280_init = _bme.BME280.__init__
    mpbridge.original_BME280_read_temperature = _bme.BME280.read_temperature
    mpbridge.original_BME280_read_pressure = _bme.BME280.read_pressure
    mpbridge.original_BME280_read_humidity = _bme.BME280.read_humidity
    mpbridge.original_BME280_read = getattr(_bme.BME280, "read", None)
    def init(self, i2c):
        self.i2c = i2c
        self.address = 0x76
        mpbridge.bme280_init(self.i2c.sda.id(), self.i2c.scl.id())
    def read_temperature(self):
        return mpbridge.bme280_read_temperature(self.i2c.sda.id(), self.i2c.scl.id())
    def read_pressure(self):
        return mpbridge.bme280_read_pressure(self.i2c.sda.id(), self.i2c.scl.id())
    def read_humidity(self):
        return mpbridge.bme280_read_humidity(self.i2c.sda.id(), self.i2c.scl.id())
    def read(self):
        t = read_temperature(self)
        p = read_pressure(self)
        h = read_humidity(self)
        return {"temperature": t, "pressure": p, "humidity": h}
    _bme.BME280.__init__ = init
    _bme.BME280.read_temperature = read_temperature
    _bme.BME280.read_pressure = read_pressure
    _bme.BME280.read_humidity = read_humidity
    _bme.BME280.read = read
_patch()
del _patch
`,We=`
def _restore():
    import mpbridge
    import BME280 as _bme
    _bme.BME280.__init__ = mpbridge.original_BME280_init
    _bme.BME280.read_temperature = mpbridge.original_BME280_read_temperature
    _bme.BME280.read_pressure = mpbridge.original_BME280_read_pressure
    _bme.BME280.read_humidity = mpbridge.original_BME280_read_humidity
    _bme.BME280.read = mpbridge.original_BME280_read
_restore()
del _restore
`,$e=`
def _patch():
    import mpbridge
    import VL53L0X as _vlx
    mpbridge.original_VL53L0X_init = _vlx.VL53L0X.__init__
    mpbridge.original_VL53L0X_read = _vlx.VL53L0X.read
    def init(self, i2c):
        self.i2c = i2c
        self.address = 0x29
        mpbridge.vl53l0x_init(self.i2c.sda.id(), self.i2c.scl.id())
    def read(self):
        return mpbridge.vl53l0x_read(self.i2c.sda.id(), self.i2c.scl.id())
    _vlx.VL53L0X.__init__ = init
    _vlx.VL53L0X.read = read
_patch()
del _patch
`,Ge=`
def _restore():
    import mpbridge
    import VL53L0X as _vlx

    _vlx.VL53L0X.__init__ = mpbridge.original_VL53L0X_init
    _vlx.VL53L0X.read = mpbridge.original_VL53L0X_read

_restore()
del _restore
`,Ce=`
def _patch():
    import mpbridge
    import VEML6040 as _veml
    mpbridge.original_VEML6040_init = _veml.VEML6040.__init__
    mpbridge.original_VEML6040_readRGB = _veml.VEML6040.readRGB
    def init(self, i2c):
        self.i2c = i2c
        self.address = 0x10
        mpbridge.veml6040_init(self.i2c.sda.id(), self.i2c.scl.id())
    def readRGB(self):
        r, g, b = mpbridge.veml6040_readRGB(self.i2c.sda.id(), self.i2c.scl.id())
        return (r, g, b)
    _veml.VEML6040.__init__ = init
    _veml.VEML6040.readRGB = readRGB
_patch()
del _patch
`,Xe=`
def _restore():
    import mpbridge
    import VEML6040 as _veml
    _veml.VEML6040.__init_ = mpbridge.original_VEML6040_init
    _veml.VEML6040.readRGB = mpbridge.original_VEML6040_readRGB
_restore()
del _restore
`,ze=`
def _patch():
    import mpbridge
    import MPU6050 as _mpu
    mpbridge.original_MPU6050_init = _mpu.MPU6050.__init__
    mpbridge.original_MPU6050_read = _mpu.MPU6050.read
    mpbridge.original_MPU6050_read_accel = _mpu.MPU6050.read_accel
    mpbridge.original_MPU6050_read_gyro = _mpu.MPU6050.read_gyro
    def init(self, i2c):
        self.i2c = i2c
        self.address = 0x68
        mpbridge.mpu6050_init(self.i2c.sda.id(), self.i2c.scl.id())
    def read_gyro(self):
        result = mpbridge.mpu6050_read_gyro(self.i2c.sda.id(), self.i2c.scl.id())
        return (result[0], result[1], result[2])
    def read_accel(self):
        result = mpbridge.mpu6050_read_accel(self.i2c.sda.id(), self.i2c.scl.id())
        return (result[0], result[1], result[2])
    def read(self):
        accel = read_accel(self)
        gyro = read_gyro(self)
        return {"accel": accel, "gyro": gyro}
    _mpu.MPU6050.__init__ = init
    _mpu.MPU6050.read_gyro = read_gyro
    _mpu.MPU6050.read_accel = read_accel
    _mpu.MPU6050.read = read
_patch()
del _patch
`,He=`
def _restore_mpu6050():
    import mpbridge
    import MPU6050 as _mpu
    _mpu.MPU6050.__init_ = mpbridge.original_MPU6050_init
    _mpu.MPU6050.read = mpbridge.original_MPU6050_read
    _mpu.MPU6050.read_accel = mpbridge.original_MPU6050_read_accel
    _mpu.MPU6050.read_gyro = mpbridge.original_MPU6050_read_gyro

_restore_mpu6050()
del _restore_mpu6050
`,Ye=`
import sys, types
import display as _display

mod = types.ModuleType('pibody.Display')

class Display:
    def __init__(self):
        pass

    def print(self, *args):
        _display.print(' '.join(str(arg) for arg in args))

    def clear(self):
        _display.clear()

display = Display()

mod.Display = Display
mod.display = display
sys.modules['pibody.Display'] = mod
`,Je=`
import sys, types

mod = types.ModuleType('pibody.iot.WiFi')

class WiFi:
    def __init__(self):
        pass

mod.WiFi = WiFi
sys.modules['pibody.iot.WiFi'] = mod
`,Qe=`
import sys, types

mod = types.ModuleType('pibody.iot.telegram_bot')

class TelegramBot:
    def __init__(self):
        pass

mod.TelegramBot = TelegramBot
sys.modules['pibody.iot.telegram_bot'] = mod
`,Ke=`
import sys, types
from SimRotaryEncoder import RotaryEncoder

mod = types.ModuleType('pibody.modules.RotaryEncoder')

mod.RotaryEncoder = RotaryEncoder
sys.modules['pibody.modules.RotaryEncoder'] = mod
`,Ze=`
import sys, types

mod = types.ModuleType('pibody.Demo.main')

class Demo:
    def __init__(self):
        pass

mod.Demo = Demo
sys.modules['pibody.Demo.main'] = mod
`,er=`
import time
import utime
time.time = utime.time
time.time_ns = utime.time_ns
time.sleep = utime.sleep
time.sleep_ms = utime.sleep_ms
time.sleep_us = utime.sleep_us
time.ticks_ms = utime.ticks_ms
time.ticks_us = utime.ticks_us
time.ticks_add = utime.ticks_add
time.ticks_diff = utime.ticks_diff
`,rr=`
import builtins

def const(x):
    return x

builtins.const = const
`,tr=`
import random
import jsrandom

random.random = jsrandom.random
random.randrange = jsrandom.randrange
random.randint = jsrandom.randint
random.getrandbits = jsrandom.getrandbits
random.uniform = jsrandom.uniform
random.choice = jsrandom.choice
random.seed = jsrandom.seed
`;var ir=Object.defineProperty,u=(e,r)=>ir(e,"name",{value:r,configurable:!0}),de=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(r,o)=>(typeof require<"u"?require:r)[o]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});function fe(e){return!isNaN(parseFloat(e))&&isFinite(e)}u(fe,"_isNumber");function N(e){return e.charAt(0).toUpperCase()+e.substring(1)}u(N,"_capitalize");function z(e){return function(){return this[e]}}u(z,"_getter");var O=["isConstructor","isEval","isNative","isToplevel"],F=["columnNumber","lineNumber"],D=["fileName","functionName","source"],nr=["args"],sr=["evalOrigin"],j=O.concat(F,D,nr,sr);function P(e){if(e)for(var r=0;r<j.length;r++)e[j[r]]!==void 0&&this["set"+N(j[r])](e[j[r]])}u(P,"StackFrame");P.prototype={getArgs:function(){return this.args},setArgs:function(e){if(Object.prototype.toString.call(e)!=="[object Array]")throw new TypeError("Args must be an Array");this.args=e},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(e){if(e instanceof P)this.evalOrigin=e;else if(e instanceof Object)this.evalOrigin=new P(e);else throw new TypeError("Eval Origin must be an Object or StackFrame")},toString:function(){var e=this.getFileName()||"",r=this.getLineNumber()||"",o=this.getColumnNumber()||"",f=this.getFunctionName()||"";return this.getIsEval()?e?"[eval] ("+e+":"+r+":"+o+")":"[eval]:"+r+":"+o:f?f+" ("+e+":"+r+":"+o+")":e+":"+r+":"+o}};P.fromString=u(function(e){var r=e.indexOf("("),o=e.lastIndexOf(")"),f=e.substring(0,r),i=e.substring(r+1,o).split(","),s=e.substring(o+1);if(s.indexOf("@")===0)var l=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(s,""),c=l[1],m=l[2],p=l[3];return new P({functionName:f,args:i||void 0,fileName:c,lineNumber:m||void 0,columnNumber:p||void 0})},"StackFrame$$fromString");for(B=0;B<O.length;B++)P.prototype["get"+N(O[B])]=z(O[B]),P.prototype["set"+N(O[B])]=function(e){return function(r){this[e]=!!r}}(O[B]);var B;for(A=0;A<F.length;A++)P.prototype["get"+N(F[A])]=z(F[A]),P.prototype["set"+N(F[A])]=function(e){return function(r){if(!fe(r))throw new TypeError(e+" must be a Number");this[e]=Number(r)}}(F[A]);var A;for(R=0;R<D.length;R++)P.prototype["get"+N(D[R])]=z(D[R]),P.prototype["set"+N(D[R])]=function(e){return function(r){this[e]=String(r)}}(D[R]);var R,H=P;function ce(){var e=/^\s*at .*(\S+:\d+|\(native\))/m,r=/^(eval@)?(\[native code])?$/;return{parse:u(function(o){if(o.stack&&o.stack.match(e))return this.parseV8OrIE(o);if(o.stack)return this.parseFFOrSafari(o);throw new Error("Cannot parse given Error object")},"ErrorStackParser$$parse"),extractLocation:u(function(o){if(o.indexOf(":")===-1)return[o];var f=/(.+?)(?::(\d+))?(?::(\d+))?$/,i=f.exec(o.replace(/[()]/g,""));return[i[1],i[2]||void 0,i[3]||void 0]},"ErrorStackParser$$extractLocation"),parseV8OrIE:u(function(o){var f=o.stack.split(`
`).filter(function(i){return!!i.match(e)},this);return f.map(function(i){i.indexOf("(eval ")>-1&&(i=i.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));var s=i.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),l=s.match(/ (\(.+\)$)/);s=l?s.replace(l[0],""):s;var c=this.extractLocation(l?l[1]:s),m=l&&s||void 0,p=["eval","<anonymous>"].indexOf(c[0])>-1?void 0:c[0];return new H({functionName:m,fileName:p,lineNumber:c[1],columnNumber:c[2],source:i})},this)},"ErrorStackParser$$parseV8OrIE"),parseFFOrSafari:u(function(o){var f=o.stack.split(`
`).filter(function(i){return!i.match(r)},this);return f.map(function(i){if(i.indexOf(" > eval")>-1&&(i=i.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),i.indexOf("@")===-1&&i.indexOf(":")===-1)return new H({functionName:i});var s=/((.*".+"[^@]*)?[^@]*)(?:@)/,l=i.match(s),c=l&&l[1]?l[1]:void 0,m=this.extractLocation(i.replace(s,""));return new H({functionName:c,fileName:m[0],lineNumber:m[1],columnNumber:m[2],source:i})},this)},"ErrorStackParser$$parseFFOrSafari")}}u(ce,"ErrorStackParser");var ar=new ce,or=ar,L=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&!process.browser,me=L&&typeof Z<"u"&&typeof Z.exports<"u"&&typeof de<"u"&&typeof __dirname<"u",lr=L&&!me,dr=typeof Deno<"u",ue=!L&&!dr,fr=ue&&typeof window=="object"&&typeof document=="object"&&typeof document.createElement=="function"&&"sessionStorage"in window&&typeof importScripts!="function",cr=ue&&typeof importScripts=="function"&&typeof self=="object";typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome")==-1&&navigator.userAgent.indexOf("Safari")>-1;var _e,Q,pe,ae,re;async function te(){if(!L||(_e=(await import("./__vite-browser-external-9wXp6ZBx.js")).default,ae=await import("./__vite-browser-external-9wXp6ZBx.js"),re=await import("./__vite-browser-external-9wXp6ZBx.js"),pe=(await import("./__vite-browser-external-9wXp6ZBx.js")).default,Q=await import("./__vite-browser-external-9wXp6ZBx.js"),ie=Q.sep,typeof de<"u"))return;let e=ae,r=await import("./__vite-browser-external-9wXp6ZBx.js"),o=await import("./__vite-browser-external-9wXp6ZBx.js"),f=await import("./__vite-browser-external-9wXp6ZBx.js"),i={fs:e,crypto:r,ws:o,child_process:f};globalThis.require=function(s){return i[s]}}u(te,"initNodeModules");function ye(e,r){return Q.resolve(r||".",e)}u(ye,"node_resolvePath");function ge(e,r){return r===void 0&&(r=location),new URL(e,r).toString()}u(ge,"browser_resolvePath");var K;L?K=ye:K=ge;var ie;L||(ie="/");function he(e,r){return e.startsWith("file://")&&(e=e.slice(7)),e.includes("://")?{response:fetch(e)}:{binary:re.readFile(e).then(o=>new Uint8Array(o.buffer,o.byteOffset,o.byteLength))}}u(he,"node_getBinaryResponse");function be(e,r){let o=new URL(e,location);return{response:fetch(o,r?{integrity:r}:{})}}u(be,"browser_getBinaryResponse");var X;L?X=he:X=be;async function we(e,r){let{response:o,binary:f}=X(e,r);if(f)return f;let i=await o;if(!i.ok)throw new Error(`Failed to load '${e}': request failed.`);return new Uint8Array(await i.arrayBuffer())}u(we,"loadBinaryFile");var C;if(fr)C=u(async e=>await import(e),"loadScript");else if(cr)C=u(async e=>{try{globalThis.importScripts(e)}catch(r){if(r instanceof TypeError)await import(e);else throw r}},"loadScript");else if(L)C=Ee;else throw new Error("Cannot determine runtime environment");async function Ee(e){e.startsWith("file://")&&(e=e.slice(7)),e.includes("://")?pe.runInThisContext(await(await fetch(e)).text()):await import(_e.pathToFileURL(e).href)}u(Ee,"nodeLoadScript");async function ve(e){if(L){await te();let r=await re.readFile(e,{encoding:"utf8"});return JSON.parse(r)}else return await(await fetch(e)).json()}u(ve,"loadLockFile");async function Me(){if(me)return __dirname;let e;try{throw new Error}catch(f){e=f}let r=or.parse(e)[0].fileName;if(L&&!r.startsWith("file://")&&(r=`file://${r}`),lr){let f=await import("./__vite-browser-external-9wXp6ZBx.js");return(await import("./__vite-browser-external-9wXp6ZBx.js")).fileURLToPath(f.dirname(r))}let o=r.lastIndexOf(ie);if(o===-1)throw new Error("Could not extract indexURL path from pyodide module location");return r.slice(0,o)}u(Me,"calculateDirname");function Pe(e){let r=e.FS,o=e.FS.filesystems.MEMFS,f=e.PATH,i={DIR_MODE:16895,FILE_MODE:33279,mount:function(s){if(!s.opts.fileSystemHandle)throw new Error("opts.fileSystemHandle is required");return o.mount.apply(null,arguments)},syncfs:async(s,l,c)=>{try{let m=i.getLocalSet(s),p=await i.getRemoteSet(s),E=l?p:m,v=l?m:p;await i.reconcile(s,E,v),c(null)}catch(m){c(m)}},getLocalSet:s=>{let l=Object.create(null);function c(E){return E!=="."&&E!==".."}u(c,"isRealDir");function m(E){return v=>f.join2(E,v)}u(m,"toAbsolute");let p=r.readdir(s.mountpoint).filter(c).map(m(s.mountpoint));for(;p.length;){let E=p.pop(),v=r.stat(E);r.isDir(v.mode)&&p.push.apply(p,r.readdir(E).filter(c).map(m(E))),l[E]={timestamp:v.mtime,mode:v.mode}}return{type:"local",entries:l}},getRemoteSet:async s=>{let l=Object.create(null),c=await mr(s.opts.fileSystemHandle);for(let[m,p]of c)m!=="."&&(l[f.join2(s.mountpoint,m)]={timestamp:p.kind==="file"?(await p.getFile()).lastModifiedDate:new Date,mode:p.kind==="file"?i.FILE_MODE:i.DIR_MODE});return{type:"remote",entries:l,handles:c}},loadLocalEntry:s=>{let l=r.lookupPath(s).node,c=r.stat(s);if(r.isDir(c.mode))return{timestamp:c.mtime,mode:c.mode};if(r.isFile(c.mode))return l.contents=o.getFileDataAsTypedArray(l),{timestamp:c.mtime,mode:c.mode,contents:l.contents};throw new Error("node type not supported")},storeLocalEntry:(s,l)=>{if(r.isDir(l.mode))r.mkdirTree(s,l.mode);else if(r.isFile(l.mode))r.writeFile(s,l.contents,{canOwn:!0});else throw new Error("node type not supported");r.chmod(s,l.mode),r.utime(s,l.timestamp,l.timestamp)},removeLocalEntry:s=>{var l=r.stat(s);r.isDir(l.mode)?r.rmdir(s):r.isFile(l.mode)&&r.unlink(s)},loadRemoteEntry:async s=>{if(s.kind==="file"){let l=await s.getFile();return{contents:new Uint8Array(await l.arrayBuffer()),mode:i.FILE_MODE,timestamp:l.lastModifiedDate}}else{if(s.kind==="directory")return{mode:i.DIR_MODE,timestamp:new Date};throw new Error("unknown kind: "+s.kind)}},storeRemoteEntry:async(s,l,c)=>{let m=s.get(f.dirname(l)),p=r.isFile(c.mode)?await m.getFileHandle(f.basename(l),{create:!0}):await m.getDirectoryHandle(f.basename(l),{create:!0});if(p.kind==="file"){let E=await p.createWritable();await E.write(c.contents),await E.close()}s.set(l,p)},removeRemoteEntry:async(s,l)=>{await s.get(f.dirname(l)).removeEntry(f.basename(l)),s.delete(l)},reconcile:async(s,l,c)=>{let m=0,p=[];Object.keys(l.entries).forEach(function(y){let S=l.entries[y],t=c.entries[y];(!t||r.isFile(S.mode)&&S.timestamp.getTime()>t.timestamp.getTime())&&(p.push(y),m++)}),p.sort();let E=[];if(Object.keys(c.entries).forEach(function(y){l.entries[y]||(E.push(y),m++)}),E.sort().reverse(),!m)return;let v=l.type==="remote"?l.handles:c.handles;for(let y of p){let S=f.normalize(y.replace(s.mountpoint,"/")).substring(1);if(c.type==="local"){let t=v.get(S),n=await i.loadRemoteEntry(t);i.storeLocalEntry(y,n)}else{let t=i.loadLocalEntry(y);await i.storeRemoteEntry(v,S,t)}}for(let y of E)if(c.type==="local")i.removeLocalEntry(y);else{let S=f.normalize(y.replace(s.mountpoint,"/")).substring(1);await i.removeRemoteEntry(v,S)}}};e.FS.filesystems.NATIVEFS_ASYNC=i}u(Pe,"initializeNativeFS");var mr=u(async e=>{let r=[];async function o(i){for await(let s of i.values())r.push(s),s.kind==="directory"&&await o(s)}u(o,"collect"),await o(e);let f=new Map;f.set(".",e);for(let i of r){let s=(await e.resolve(i)).join("/");f.set(s,i)}return f},"getFsHandles");function Le(e){let r={noImageDecoding:!0,noAudioDecoding:!0,noWasmDecoding:!1,preRun:Ae(e),quit(o,f){throw r.exited={status:o,toThrow:f},f},print:e.stdout,printErr:e.stderr,arguments:e.args,API:{config:e},locateFile:o=>e.indexURL+o,instantiateWasm:Re(e.indexURL)};return r}u(Le,"createSettings");function Se(e){return function(r){let o="/";try{r.FS.mkdirTree(e)}catch(f){console.error(`Error occurred while making a home directory '${e}':`),console.error(f),console.error(`Using '${o}' for a home directory instead`),e=o}r.FS.chdir(e)}}u(Se,"createHomeDirectory");function xe(e){return function(r){Object.assign(r.ENV,e)}}u(xe,"setEnvironment");function Ne(e){return r=>{for(let o of e)r.FS.mkdirTree(o),r.FS.mount(r.FS.filesystems.NODEFS,{root:o},o)}}u(Ne,"mountLocalDirectories");function Be(e){let r=we(e);return o=>{let f=o._py_version_major(),i=o._py_version_minor();o.FS.mkdirTree("/lib"),o.FS.mkdirTree(`/lib/python${f}.${i}/site-packages`),o.addRunDependency("install-stdlib"),r.then(s=>{o.FS.writeFile(`/lib/python${f}${i}.zip`,s)}).catch(s=>{console.error("Error occurred while installing the standard library:"),console.error(s)}).finally(()=>{o.removeRunDependency("install-stdlib")})}}u(Be,"installStdlib");function Ae(e){let r;return e.stdLibURL!=null?r=e.stdLibURL:r=e.indexURL+"python_stdlib.zip",[Be(r),Se(e.env.HOME),xe(e.env),Ne(e._node_mounts),Pe]}u(Ae,"getFileSystemInitializationFuncs");function Re(e){if(typeof WasmOffsetConverter<"u")return;let{binary:r,response:o}=X(e+"pyodide.asm.wasm");return function(f,i){return async function(){try{let s;o?s=await WebAssembly.instantiateStreaming(o,f):s=await WebAssembly.instantiate(await r,f);let{instance:l,module:c}=s;i(l,c)}catch(s){console.warn("wasm instantiation failed!"),console.warn(s)}}(),{}}}u(Re,"getInstantiateWasmFunc");var oe="0.27.2";async function Ie(e={}){var r,o;await te();let f=e.indexURL||await Me();f=K(f),f.endsWith("/")||(f+="/"),e.indexURL=f;let i={fullStdLib:!1,jsglobals:globalThis,stdin:globalThis.prompt?globalThis.prompt:void 0,lockFileURL:f+"pyodide-lock.json",args:[],_node_mounts:[],env:{},packageCacheDir:f,packages:[],enableRunUntilComplete:!1,checkAPIVersion:!0,BUILD_ID:"f88dc4abb40ec8e780c94a5f70bcef45ec9eb3c1aee1c99da527febfef1c6f3f"},s=Object.assign(i,e);(r=s.env).HOME??(r.HOME="/home/pyodide"),(o=s.env).PYTHONINSPECT??(o.PYTHONINSPECT="1");let l=Le(s),c=l.API;if(c.lockFilePromise=ve(s.lockFileURL),typeof _createPyodideModule!="function"){let y=`${s.indexURL}pyodide.asm.js`;await C(y)}let m;if(e._loadSnapshot){let y=await e._loadSnapshot;ArrayBuffer.isView(y)?m=y:m=new Uint8Array(y),l.noInitialRun=!0,l.INITIAL_MEMORY=m.length}let p=await _createPyodideModule(l);if(l.exited)throw l.exited.toThrow;if(e.pyproxyToStringRepr&&c.setPyProxyToStringMethod(!0),c.version!==oe&&s.checkAPIVersion)throw new Error(`Pyodide version does not match: '${oe}' <==> '${c.version}'. If you updated the Pyodide version, make sure you also updated the 'indexURL' parameter passed to loadPyodide.`);p.locateFile=y=>{throw new Error("Didn't expect to load any more file_packager files!")};let E;m&&(E=c.restoreSnapshot(m));let v=c.finalizeBootstrap(E,e._snapshotDeserializer);return c.sys.path.insert(0,c.config.env.HOME),v.version.includes("dev")||c.setCdnUrl(`https://cdn.jsdelivr.net/pyodide/v${v.version}/full/`),c._pyodide.set_excepthook(),await c.packageIndexReady,c.initializeStreams(s.stdin,s.stdout,s.stderr),v}u(Ie,"loadPyodide");const ur=new SharedArrayBuffer(16),T=new Int32Array(ur),_r=new SharedArrayBuffer(2),V=new Uint8Array(_r),Ue="user_code.py";function h(e){Atomics.store(T,0,0);let r=Oe.currentframe().f_back,o;for(;r;){if(r.f_code.co_filename==Ue){o=r.f_lineno;break}r=r.f_back}postMessage({content:e,line:o}),Atomics.wait(T,0,0)}function x(e){Atomics.store(T,0,0),postMessage({content:e,line:-1}),Atomics.wait(T,0,0)}function U(e){postMessage({content:e,line:-1})}function pr(e,r){return e+r}function yr(e,r){return e-r}async function gr(){return await fetch(le+"manifest.json").then(r=>r.json()).catch(()=>{})}function W(e,r,o){const f=`
import sys
import os

file_path = "/home/pyodide/${r}.py"
if os.path.exists(file_path):
    os.remove(file_path)

sys.modules.pop("${r}", None)
`;e.runPython(f),e.registerJsModule(r,o)}let Oe,Y=!1,$=!1;(async()=>{function e(){if(x({command:g.Output,request:{output:"> "}}),Y){let d="",a=0;const w=new SharedArrayBuffer(256),_=new Uint8Array(w);for(x({command:M.Input,request:{},result:_});;){const b=Atomics.load(_,a);if(b==10)break;d+=String.fromCharCode(b),a++}return x({command:g.RawOutput,request:{output:d+`
\r`}}),d}const t=new Uint8Array(new SharedArrayBuffer(4));let n="";for(;;){x({command:M.Input,request:{},result:t});const d=new Int32Array(t.buffer)[0],a=String.fromCodePoint(d);if(d===10){x({command:g.Output,request:{output:a}});break}else d===8?n.length>0&&(x({command:g.Output,request:{output:a}}),n=n.substring(0,n.length-1)):(x({command:g.Output,request:{output:a}}),n+=a);i.checkInterrupt()}return n}const r=Ie({stdout:t=>x({command:g.Output,request:{output:t+`
\r`}}),stdin:e}),o=(async()=>{const t=await gr(),n=Object.entries(t).map(async([a,w])=>{if(w)try{if(!a.includes("RotaryEncoder.py")){if(!a.includes("Display.py")){if(!a.includes("iot/")){if(!a.includes("Demo/")){const b=await(await fetch(le+a)).text();return["pibody/"+a,b]}}}}}catch{return null}}),d=await Promise.all(n);return new Map(d.filter(a=>!!a))})(),f=(async()=>{const t=["BME280.py","MPU6050.py","LSM6DS3.py","VEML6040.py","VL53L0X.py","SSD1306.py","SimRotaryEncoder.py"];return(await Promise.all(t.map(async d=>{try{const a=await fetch(ke+d);if(!a.ok)throw new Error(`Failed to fetch ${d}`);const w=await a.text();return[d,w]}catch(a){return console.error(a),null}}))).filter(d=>d!==null)})(),[i,s,l]=await Promise.all([r,o,f]);Oe=i.pyimport("inspect");const c=[...s,...l];for(const[t,n]of c){const d=`/home/pyodide/${t}`;try{i.FS.mkdirTree(d.replace(/\/[^/]+$/,"")),i.FS.writeFile(d,n)}catch(a){console.error("Error writing file to Pyodide FS:",t,a)}}const m=new Int32Array(new SharedArrayBuffer(4)),p={sleep:t=>{const n=t*1e3;p.sleep_ms(n)},sleep_ms:t=>{if(h({command:g.Sleep,request:{time_ms:t}}),Y)return;const d=performance.now()+t,a=Math.min(t/20,50);for(;performance.now()<d;){const w=d-performance.now();Atomics.wait(m,0,0,Math.min(a,w)),i.checkInterrupt()}},sleep_us:t=>{p.sleep_ms(t/1e3)},ticks_ms:()=>performance.now(),ticks_us:()=>performance.now()*1e3,ticks_add:pr,ticks_diff:yr,time:()=>Date.now(),time_ns:()=>performance.now()*1e3*1e3},E={print(...t){let n=" ",d=`
\r`;t.length>0&&t[t.length-1]!==null&&typeof t[t.length-1]=="object"&&("sep"in t[t.length-1]||"end"in t[t.length-1])&&({sep:n=n,end:d=d}=t.pop());const a=t.map(String).join(n)+d;h({command:g.Output,request:{output:a}})}},v={print:t=>{h({command:g.DisplayText,request:{text:t,x:0,y:16}})},clear:()=>{h({command:g.DisplayClear,request:{}})}},y={__random:()=>{const t=new Int32Array(new SharedArrayBuffer(16));return h({command:M.Random,request:{},result:t}),Atomics.load(t,0)/65535},random:()=>y.__random(),randrange:(t,n,d=1)=>{if(n===void 0&&(n=t,t=0),t=Math.floor(t),n=Math.floor(n),d=Math.floor(d),d===0)throw new Error("step cannot be 0");const a=n-t;if(Math.sign(a)!==Math.sign(d))throw new Error("Empty range; stop must be reachable from start by stepping.");const w=Math.floor(a/d),_=Math.floor(y.__random()*(w+1));return t+_*d},randint:(t,n)=>y.randrange(t,n+1,1),getrandbits:t=>{if(t<0||t>32)throw new RangeError("n must be between 0 and 32, inclusive.");if(t===0)return 0;const n=Math.pow(2,t)-1;return Math.floor(y.__random()*(n+1))},uniform:(t,n)=>t+(n-t)*y.__random(),choice:t=>{if(!t||t.length===0)throw new Error("Cannot choose from an empty sequence.");const n=Math.floor(y.__random()*t.length);return t[n]},seed:(t=null)=>{}},S={Mode_IN:J.IN,Mode_OUT:J.OUT,Pull_NONE:G.NONE,Pull_UP:G.UP,Pull_DOWN:G.DOWN,pin_set_mode(t,n,d,a){h({command:g.PinSetMode,request:{pin:t,mode:n},meta:{className:d,varName:a}})},pin_set_pull(t,n,d,a){h({command:g.PinSetPull,request:{pin:t,pull:n},meta:{className:d,varName:a}})},pin_set_value(t,n,d,a){h({command:g.PinSetValue,request:{pin:t,value:n},meta:{className:d,varName:a}})},pin_get_value(t,n,d){const a=new Int8Array(new SharedArrayBuffer(4));return h({command:M.PinGetValue,request:{pin:t},meta:{className:n,varName:d},result:a}),Atomics.load(a,0)},pwm_freq(t,n){h({command:g.PwmFreq,request:{pin:t,freq:n}})},pwm_duty_u16(t,n){h({command:g.PwmDutyU16,request:{pin:t,duty_u16:n}})},adc_read_u16(t){const n=new Uint16Array(new SharedArrayBuffer(2));return h({command:M.AdcReadU16,request:{pin:t},result:n}),Atomics.load(n,0)},neopixel_write(t,n){function d(_){if(_&&typeof _=="object"){if(Array.isArray(_))return _.map(b=>Number(b));if(typeof _.toJs=="function")try{const b=_.toJs({create_proxies:!1});return d(b)}catch{}if(typeof _[Symbol.iterator]=="function")return Array.from(_,b=>Number(b))}return[]}function a(_){let b;if(Array.isArray(_))b=_;else if(_&&typeof _.toJs=="function")try{const I=_.toJs({create_proxies:!1});return a(I)}catch{b=[]}else _&&typeof _[Symbol.iterator]=="function"?b=Array.from(_):b=[];return b.map(I=>d(I))}const w=a(n);x({command:g.NeoPixelWrite,request:{pin:t,pixels:w}})},i2c_readfrom_mem(t,n,d,a,w){const _=new SharedArrayBuffer(1+w),b=new Uint8Array(_);return h({command:M.I2CReadFromMem,request:{sda:t,scl:n,addr:d,memaddr:a,nbytes:w},result:b}),Array.from(b)},i2c_writeto_mem(t,n,d,a,w){const _=w instanceof Uint8Array?new Uint8Array(w):new Uint8Array(w);h({command:g.I2CWriteToMem,request:{sda:t,scl:n,addr:d,memaddr:a,buf:_}})},i2c_scan(t,n){const d=new SharedArrayBuffer(4),a=new Int32Array(d);h({command:M.I2CScan,request:{sda:t,scl:n},result:a});const w=Atomics.load(a,0);return w<0?[]:[w]},bme280_init(t,n){h({command:g.BME280Init,request:{sda:t,scl:n}})},bme280_read_temperature(t,n){const d=new SharedArrayBuffer(8),a=new Int32Array(d);return h({command:M.BME280ReadTemperature,request:{sda:t,scl:n},result:a}),a[0]},bme280_read_pressure(t,n){const d=new SharedArrayBuffer(8),a=new Int32Array(d);return h({command:M.BME280ReadPressure,request:{sda:t,scl:n},result:a}),a[0]},bme280_read_humidity(t,n){const d=new SharedArrayBuffer(8),a=new Int32Array(d);return h({command:M.BME280ReadHumidity,request:{sda:t,scl:n},result:a}),a[0]},vl53l0x_init(t,n){h({command:g.VL53L0XInit,request:{sda:t,scl:n}})},vl53l0x_read(t,n){const d=new SharedArrayBuffer(8),a=new Int32Array(d);return h({command:M.VL53L0XRead,request:{sda:t,scl:n},result:a}),console.log(a[0]),a[0]},veml6040_init(t,n){h({command:g.VEML6040Init,request:{sda:t,scl:n}})},veml6040_readRGB(t,n){const d=new SharedArrayBuffer(16),a=new Int32Array(d);return h({command:M.VEML6040ReadRGB,request:{sda:t,scl:n},result:a}),[a[0],a[1],a[2]]},mpu6050_init(t,n){h({command:g.MPU6050Init,request:{sda:t,scl:n}})},mpu6050_read_accel(t,n){const d=new SharedArrayBuffer(16),a=new Int32Array(d);return h({command:M.MPU6050ReadAccel,request:{sda:t,scl:n},result:a}),[a[0]/16384,a[1]/16384,a[2]/16384]},mpu6050_read_gyro(t,n){const d=new SharedArrayBuffer(16),a=new Int32Array(d);return h({command:M.MPU6050ReadGyro,request:{sda:t,scl:n},result:a}),[a[0]/131,a[1]/131,a[2]/131]}};W(i,"utime",p),W(i,"display",v),W(i,"mpbridge",S),W(i,"jsrandom",y),i.globals.set("print",E.print),i.runPython(er),i.runPython(rr),i.runPython(Ve),i.runPython(tr),i.runPython(Te),i.runPython(Ye),i.runPython(qe),i.runPython(Je),i.runPython(Qe),i.runPython(Ke),i.runPython(Ze),i.setInterruptBuffer(V),self.onmessage=t=>{const{command:n,code:d,isReplay:a,isRecord:w}=t.data;if(n==="runPython"){if(!i){U({command:g.Error,request:{message:"Interpreter not initialized"}});return}try{Y=a,a||w?$||(i.runPython(je),i.runPython($e),i.runPython(Ce),i.runPython(ze),$=!0):$&&(i.runPython(He),i.runPython(Xe),i.runPython(Ge),i.runPython(We),$=!1),i.runPython(d,{filename:Ue}),U({command:q.Finished,request:{}})}catch(_){let b="";if(V[0]!==se&&V[1]===se)V[1]=0,U({command:g.KeyboardInterrupt,request:{message:`KeyboardInterrupt
\r`}});else if(_ instanceof Error){const I=_.message.split(`
`),ne=I.findIndex(k=>k.includes("<exec>"));ne!==-1?b=I.slice(ne).filter(k=>!k.includes("mpWorker.ts")&&!/mpWorker-[A-Za-z0-9]+\.js/.test(k)&&!k.includes("pyodide.asm.js")).join(`
`):b=_.message,U({command:g.Error,request:{message:b}})}else b=String(_),U({command:g.Error,request:{message:b}})}}},U({command:q.Initialized,request:{sharedArrayInterrupt:V,sharedWakeupArray:T}})})()});export default hr();
