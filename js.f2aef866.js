parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QvaY":[function(require,module,exports) {
function e(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const t={days:document.querySelector('.value[data-value="days"]'),hours:document.querySelector('.value[data-value="hours"]'),mins:document.querySelector('.value[data-value="mins"]'),secs:document.querySelector('.value[data-value="secs"]'),timerFace:document.getElementById("timer-1")};class a{constructor({selector:t,targetDate:a}){e(this,"setInt",setInterval(()=>{const e=Date.now(),t=this.targetDate-e;this.updateClockface(t),this.timeFinish(t)},1e3)),this.selector=t,this.targetDate=a}updateClockface(e){const a=this.pad(Math.floor(e/864e5)),r=this.pad(Math.floor(e%864e5/36e5)),n=this.pad(Math.floor(e%36e5/6e4)),s=this.pad(Math.floor(e%6e4/1e3));t.days.textContent=`${a}`,t.hours.textContent=`${r}`,t.mins.textContent=`${n}`,t.secs.textContent=`${s}`}pad(e){return String(e).padStart(2,"0")}timeFinish(e){e<0&&(clearInterval(this.setInt),t.timerFace.textContent="HAPPY NEW YEAR!!!")}}new a({selector:"#timer-1",targetDate:new Date("Oct 12, 2021, 21:41:00")});
},{}]},{},["QvaY"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/js.f2aef866.js.map