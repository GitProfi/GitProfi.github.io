import{A as H,B as L}from"../modules/unplugin-icons-C8rrCs8e.js";import{d as w,t as I,M as E,D as y,K as N,z as v,aB as M,o as c,b as _,f as q,B as u,c as C,g as V,i as z,h as D}from"../modules/vue-CkRw1msW.js";import{v as k,ad as K,C as $,ae as R,af as U}from"../index-JW30JM8f.js";import{u as W}from"./context-CskLiMdo.js";const X=["title"],P=w({__name:"CodeBlockWrapper",props:{ranges:{type:Array,default:()=>[]},finally:{type:[String,Number],default:"last"},startLine:{type:Number,default:1},lines:{type:Boolean,default:k.lineNumbers},at:{type:[String,Number],default:"+1"},maxHeight:{type:String,default:void 0}},setup(S){const e=S,{$clicksContext:a}=W(),s=I(),d=K();E(()=>{a.unregister(d)}),y(()=>{var t;(t=s.value)==null||t.classList.toggle("slidev-code-line-numbers",e.lines)}),N(()=>{var r;if(!a||!((r=e.ranges)!=null&&r.length))return;const t=a.calculateSince(e.at,e.ranges.length-1);a.register(d,t);const o=v(()=>t?Math.max(0,a.current-t.start+1):$),n=v(()=>e.finally==="last"?e.ranges.at(-1):e.finally.toString());y(()=>{if(!s.value)return;let i=e.ranges[o.value]??n.value;const g=i==="hide";s.value.classList.toggle(R,g),g&&(i=e.ranges[o.value+1]??n.value);const h=s.value.querySelector(".shiki"),f=Array.from(h.querySelectorAll("code > .line")),A=f.length;if(U(i,A,e.startLine,l=>[f[l]]),e.maxHeight){const l=Array.from(h.querySelectorAll(".line.highlighted"));l.reduce((m,B)=>B.offsetHeight+m,0)>s.value.offsetHeight?l[0].scrollIntoView({behavior:"smooth",block:"start"}):l.length>0&&l[Math.round((l.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}})});const{copied:p,copy:b}=M();function x(){var o,n;const t=(n=(o=s.value)==null?void 0:o.querySelector(".slidev-code"))==null?void 0:n.textContent;t&&b(t)}return(t,o)=>{const n=H,r=L;return c(),_("div",{ref_key:"el",ref:s,class:z(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":e.lines}]),style:D({"max-height":e.maxHeight,"overflow-y":e.maxHeight?"scroll":void 0,"--start":e.startLine})},[q(t.$slots,"default"),u(k).codeCopy?(c(),_("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:u(p)?"Copied":"Copy",onClick:o[0]||(o[0]=i=>x())},[u(p)?(c(),C(n,{key:0,class:"p-2 w-8 h-8"})):(c(),C(r,{key:1,class:"p-2 w-8 h-8"}))],8,X)):V("v-if",!0)],6)}}});export{P as _};