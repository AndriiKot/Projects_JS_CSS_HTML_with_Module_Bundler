(()=>{"use strict";let t=document.querySelector("button");const e=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.floor(Math.random()*e+t)}.bind(void 0,0,100);console.log(e()),t.addEventListener("click",(async function n(o,r,l){if(l=document.querySelector("button").style.borderRadius,r=function(){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;return[...new Array(arguments.length>0&&void 0!==arguments[0]?arguments[0]:8)].map((()=>t()))}(),"string"==typeof(o=!!l&&l||[...r].map((t=>t+3)))){let t=o.replace(/[%/]/g,"");t=t.replace("  "," ");let e=t.split(" ");e=e.map((t=>+t)),o=e}function i(t){return new Promise((e=>setTimeout(e,t)))}await async function(){let e=0;for(;e<8;){e=0;for(let n=0;n<o.length;n++)o[n]!==r[n]?(o[n]>r[n]?o[n]-=1:o[n]+=1,t.style.borderRadius=`${o[0]}% ${o[1]}% ${o[2]}% ${o[3]}% / ${o[4]}% ${o[5]}% ${o[6]}% ${o[7]}%`,await i(0)):(console.log("Равны!!!"),e++)}}(),await n()}))})();
//# sourceMappingURL=bundle.js.map