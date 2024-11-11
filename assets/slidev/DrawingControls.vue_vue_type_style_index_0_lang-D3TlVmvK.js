import{f as q,C as I,D as O,E as Q,F as W,G as X,H as Z,J as ee,K as ne,L as te,M as se,N as oe}from"../modules/unplugin-icons-C8rrCs8e.js";import{d as B,t as h,U as le,aD as ae,o as g,b as M,f as re,h as z,B as e,c as x,k as o,l as t,i as l,e as u,x as ie,ae as m,af as ue,F as ce,ag as de,at as k,g as L}from"../modules/vue-CkRw1msW.js";import{L as _e}from"../modules/shiki-BK3Hl-Nn.js";import{c as pe}from"./SlideWrapper-Cd5jwly4.js";import{_ as a}from"./IconButton.vue_vue_type_script_setup_true_lang-fKqlgYV3.js";import{V as D}from"./shortcuts-ChlOOEYC.js";const me=B({__name:"Draggable",props:{storageKey:{},initial:{}},setup($){const c=$,f=h(null),w=c.initial??{x:0,y:0},b=c.storageKey?le(c.storageKey,w):h(w),{style:y}=ae(f,{initialValue:b});return(v,d)=>(g(),M("div",{ref_key:"el",ref:f,class:"fixed",style:z(e(y))},[re(v.$slots,"default")],4))}}),ge={class:"flex bg-main p-2"},fe={class:"inline-block w-7 text-center"},we={class:"pt-.5"},$e=B({__name:"DrawingControls",setup($){const{brush:c,canClear:f,canRedo:w,canUndo:b,clear:y,drauu:v,drawingEnabled:d,drawingMode:r,drawingPinned:i,brushColors:V}=pe();function S(){v.undo()}function U(){v.redo()}let C="stylus";function _(p){r.value=p,d.value=!0,p!=="eraseLine"&&(C=p)}function E(p){c.color=p,d.value=!0,r.value=C}return(p,n)=>{const K=q,N=I,F=O,R=Q,A=W,P=X,j=Z,G=ee,H=ne,J=te,T=se,Y=oe;return e(d)||e(i)?(g(),x(me,{key:0,class:l(["flex flex-wrap text-xl p-2 gap-1 rounded-md bg-main shadow transition-opacity duration-200 z-20 border border-main",!e(d)&&e(i)?"opacity-40 hover:opacity-90":""]),"storage-key":"slidev-drawing-pos","initial-x":10,"initial-y":10},{default:o(()=>[t(a,{title:"Draw with stylus",class:l({shallow:e(r)!=="stylus"}),onClick:n[0]||(n[0]=s=>_("stylus"))},{default:o(()=>[t(K)]),_:1},8,["class"]),t(a,{title:"Draw a line",class:l({shallow:e(r)!=="line"}),onClick:n[1]||(n[1]=s=>_("line"))},{default:o(()=>n[13]||(n[13]=[u("svg",{width:"1em",height:"1em",class:"-mt-0.5",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[u("path",{d:"M21.71 3.29a1 1 0 0 0-1.42 0l-18 18a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.42z",fill:"currentColor"})],-1)])),_:1},8,["class"]),t(a,{title:"Draw an arrow",class:l({shallow:e(r)!=="arrow"}),onClick:n[2]||(n[2]=s=>_("arrow"))},{default:o(()=>[t(N)]),_:1},8,["class"]),t(a,{title:"Draw an ellipse",class:l({shallow:e(r)!=="ellipse"}),onClick:n[3]||(n[3]=s=>_("ellipse"))},{default:o(()=>[t(F)]),_:1},8,["class"]),t(a,{title:"Draw a rectangle",class:l({shallow:e(r)!=="rectangle"}),onClick:n[4]||(n[4]=s=>_("rectangle"))},{default:o(()=>[t(R)]),_:1},8,["class"]),t(a,{title:"Erase",class:l({shallow:e(r)!=="eraseLine"}),onClick:n[5]||(n[5]=s=>_("eraseLine"))},{default:o(()=>[t(A)]),_:1},8,["class"]),t(D),t(e(_e),null,{popper:o(()=>[u("div",ge,[u("div",fe,ie(e(c).size),1),u("div",we,[m(u("input",{"onUpdate:modelValue":n[6]||(n[6]=s=>e(c).size=s),type:"range",min:"1",max:"15",onChange:n[7]||(n[7]=s=>r.value=e(C))},null,544),[[ue,e(c).size]])])])]),default:o(()=>[t(a,{title:"Adjust stroke width",class:l({shallow:e(r)==="eraseLine"})},{default:o(()=>n[14]||(n[14]=[u("svg",{viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},[u("line",{x1:"2",y1:"15",x2:"22",y2:"4",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round"}),u("line",{x1:"2",y1:"24",x2:"28",y2:"10",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}),u("line",{x1:"7",y1:"31",x2:"29",y2:"19",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1)])),_:1},8,["class"])]),_:1}),(g(!0),M(ce,null,de(e(V),s=>(g(),x(a,{key:s,title:"Set brush color",class:l(e(c).color===s&&e(r)!=="eraseLine"?"active":"shallow"),onClick:ve=>E(s)},{default:o(()=>[u("div",{class:l(["w-6 h-6 transition-all transform border",e(c).color!==s?"rounded-1/2 scale-85 border-white":"rounded-md border-gray-300/50"]),style:z(e(d)?{background:s}:{borderColor:s})},null,6)]),_:2},1032,["class","onClick"]))),128)),t(D),t(a,{title:"Undo",class:l({disabled:!e(b)}),onClick:n[8]||(n[8]=s=>S())},{default:o(()=>[t(P)]),_:1},8,["class"]),t(a,{title:"Redo",class:l({disabled:!e(w)}),onClick:n[9]||(n[9]=s=>U())},{default:o(()=>[t(j)]),_:1},8,["class"]),t(a,{title:"Delete",class:l({disabled:!e(f)}),onClick:n[10]||(n[10]=s=>e(y)())},{default:o(()=>[t(G)]),_:1},8,["class"]),t(D),t(a,{title:e(i)?"Unpin drawing":"Pin drawing",class:l({shallow:!e(i)}),onClick:n[11]||(n[11]=s=>i.value=!e(i))},{default:o(()=>[m(t(H,{class:"transform -rotate-45"},null,512),[[k,e(i)]]),m(t(J,null,null,512),[[k,!e(i)]])]),_:1},8,["title","class"]),e(d)?(g(),x(a,{key:0,title:e(i)?"Drawing pinned":"Drawing unpinned",class:l({shallow:!e(d)}),onClick:n[12]||(n[12]=s=>d.value=!e(d))},{default:o(()=>[m(t(T,null,null,512),[[k,e(i)]]),m(t(Y,null,null,512),[[k,!e(i)]])]),_:1},8,["title","class"])):L("v-if",!0)]),_:1},8,["class"])):L("v-if",!0)}}});export{$e as _};
