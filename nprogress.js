function m(){function p(a,b,d){return a<b?b:a>d?d:a}function v(a,b,d){a="translate3d"===e.a?{transform:"translate3d("+100*(-1+a)+"%,0,0)"}:"translate"===e.a?{transform:"translate("+100*(-1+a)+"%,0)"}:{"margin-left":100*(-1+a)+"%"};a.transition="all "+b+"ms "+d;return a}function q(a,b){return 0<=("string"==typeof a?a:n(a)).indexOf(" "+b+" ")}function r(a,b){var d=n(a),c=d+b;q(d,b)||(a.className=c.substring(1))}function t(a,b){var c=n(a);q(a,b)&&(c=c.replace(" "+b+" "," "),a.className=c.substring(1,
c.length-1))}function n(a){return(" "+(a&&a.className||"")+" ").replace(/\s+/gi," ")}var c={version:"0.2.0"},e=c.F={l:.08,g:"linear",a:"",speed:350,b:!0,v:250,o:!0,c:'[role="bar"]',s:'[role="spinner"]',parent:"body",u:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};c.B=function(a){var b,c;for(b in a)c=a[b],void 0!==c&&a.hasOwnProperty(b)&&(e[b]=c);return this};c.status=null;c.set=function(a){var b=c.j();a=p(a,e.l,
1);c.status=1===a?null:a;var d=c.m(!b),w=d.querySelector(e.c),k=e.speed,f=e.g;d.offsetWidth;x(function(b){""===e.a&&(e.a=c.h());l(w,v(a,k,f));1===a?(l(d,{transition:"none",opacity:1}),d.offsetWidth,setTimeout(function(){l(d,{transition:"all "+k+"ms linear",opacity:0});setTimeout(function(){c.remove();b()},k)},k)):setTimeout(b,k)});return this};c.j=function(){return"number"===typeof c.status};c.start=function(){function a(){setTimeout(function(){c.status&&(c.b(),a())},e.v)}c.status||c.set(0);e.b&&
a();return this};c.done=function(a){return a||c.status?c.f(.3+.5*Math.random()).set(1):this};c.f=function(a){var b=c.status;if(!b)return c.start();if(!(1<b))return"number"!==typeof a&&(a=0<=b&&.25>b?(3*Math.random()+3)/100:.25<=b&&.65>b?3*Math.random()/100:.65<=b&&.9>b?2*Math.random()/100:.9<=b&&.99>b?.005:0),b=p(b+a,0,.994),c.set(b)};c.b=function(){return c.f()};(function(){var a=0,b=0;c.D=function(d){if(!d||"resolved"===d.state())return this;0===b&&c.start();a++;b++;d.w(function(){b--;0===b?(a=
0,c.done()):c.set((a-b)/a)});return this}})();c.m=function(a){if(c.i())return document.getElementById("nprogress");r(document.documentElement,"nprogress-busy");var b=document.createElement("div");b.id="nprogress";b.innerHTML=e.u;var d=document.querySelector(e.parent);l(b.querySelector(e.c),{transition:"all 0 linear",transform:"translate3d("+(a?"-100":100*(-1+(c.status||0)))+"%,0,0)"});e.o||(a=b.querySelector(e.s))&&a&&a.parentNode&&a.parentNode.removeChild(a);d!=document.body&&r(d,"nprogress-custom-parent");
d.appendChild(b);return b};c.remove=function(){t(document.documentElement,"nprogress-busy");t(document.querySelector(e.parent),"nprogress-custom-parent");var a=document.getElementById("nprogress");a&&a&&a.parentNode&&a.parentNode.removeChild(a)};c.i=function(){return!!document.getElementById("nprogress")};c.h=function(){var a=document.body.style,b="WebkitTransform"in a?"Webkit":"MozTransform"in a?"Moz":"msTransform"in a?"ms":"OTransform"in a?"O":"";return b+"Perspective"in a?"translate3d":b+"Transform"in
a?"translate":"margin"};var x=function(){function a(){var c=b.shift();c&&c(a)}var b=[];return function(c){b.push(c);1==b.length&&a()}}(),l=function(){function a(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(a,b){return b.toUpperCase()})}function b(b){b=a(b);var f;if(!(f=e[b])){a:{f=document.body.style;if(!(b in f))for(var u=c.length,y=b.charAt(0).toUpperCase()+b.slice(1),g;u--;)if(g=c[u]+y,g in f){f=g;break a}f=b}f=e[b]=f}return f}var c=["Webkit","O","Moz","ms"],e={};return function(a,
c){var d=arguments,e,g;if(2==d.length)for(e in c){if(g=c[e],void 0!==g&&c.hasOwnProperty(e)){var d=a,h=e,h=b(h);d.style[h]=g}}else e=a,h=d[1],d=d[2],h=b(h),e.style[h]=d}}();return c}"function"===typeof define&&define.A?define(m):"object"===typeof exports?module.C=m():m();