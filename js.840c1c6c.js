parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"EY2R":[function(require,module,exports) {
module.exports="/dado/dado1.3072ec08.png";
},{}],"bLbc":[function(require,module,exports) {
module.exports="/dado/dado2.fc57b75e.png";
},{}],"b0OA":[function(require,module,exports) {
module.exports="/dado/dado3.6c4d465c.png";
},{}],"xkhZ":[function(require,module,exports) {
module.exports="/dado/dado4.4726f590.png";
},{}],"yszJ":[function(require,module,exports) {
module.exports="/dado/dado5.997c9d57.png";
},{}],"u7L9":[function(require,module,exports) {
module.exports="/dado/dado6.de17d076.png";
},{}],"HBCd":[function(require,module,exports) {
module.exports={dado1:require("./dado1.png"),dado2:require("./dado2.png"),dado3:require("./dado3.png"),dado4:require("./dado4.png"),dado5:require("./dado5.png"),dado6:require("./dado6.png")};
},{"./dado1.png":"EY2R","./dado2.png":"bLbc","./dado3.png":"b0OA","./dado4.png":"xkhZ","./dado5.png":"yszJ","./dado6.png":"u7L9"}],"QvaY":[function(require,module,exports) {
"use strict";var t=e(require("../assets/*.png"));function e(t){return t&&t.__esModule?t:{default:t}}var n=document.getElementById("lanzar"),r=document.getElementById("results");n.addEventListener("click",function(){for(var t,e=document.createDocumentFragment(),n=document.createElement("tr"),u=1;u<=2;u++){var d=o();a(d,u),t=c(d),n.append(t)}e.append(n),r.appendChild(e)});var o=function(){return Math.floor(6*Math.random()+1)},a=function(e,n){document.getElementById("number".concat(n.toString())).setAttribute("src",t.default["dado".concat(e.toString())])},c=function(t){var e=document.createElement("td");return e.textContent=t,console.log(e),e};
},{"../assets/*.png":"HBCd"}]},{},["QvaY"], null)
//# sourceMappingURL=/dado/js.840c1c6c.js.map