(()=>{"use strict";const n=n=>"function"==typeof n,t=function(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:n)(t)&&t()||t},e=function(n){return new Promise((t=>setTimeout(t,n)))},o=document.querySelector("button"),i=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.floor(Math.random()*t+n)}.bind(void 0,0,100),l=Array(8).fill(0),r=function(){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t;return[...new Array(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)].map((()=>e(e(n))))}.bind(void 0,8,i),c=((n,t)=>{n.classList.toggle(t)}).bind(void 0,o,"animationGo"),d=function(n){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;return n?function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n=n.replace(/[%/]/g,""),n=n.replace("  "," "),n}(n),function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((n=>+n))}(function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split(" ")}(n))}(n):t};o.addEventListener("click",c),o.addEventListener("click",(async function n(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;const c=document.querySelector("button");console.log(c.classList.contains("animationGo")),console.log("HI!!");const u=o(c.style.borderRadius),a=i();await async function(){let n=0;for(;n<8;){n=0;for(let t=0;t<u.length;t++){if(u.length!==a.length){u.push(0);break}u[t]!==a[t]?(u[t]>a[t]?u[t]-=1:u[t]+=1,c.style.borderRadius=`${u[0]}% \n        ${u[1]}% \n        ${u[2]}%\n        ${u[3]}% / \n        ${u[4]}% \n        ${u[5]}% \n        ${u[6]}% \n        ${u[7]}%`,await e(l)):n++}}}(),await n()}))})();
//# sourceMappingURL=bundle.js.map