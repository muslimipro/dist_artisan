import{X as d,Y as p,o as s,c as i,Z as c,e as u,r as m,_ as f,a,t as o,m as h}from"./index-CcYgOd48.js";var g=function(t){var e=t.dt;return`
.p-skeleton {
    overflow: hidden;
    background: `.concat(e("skeleton.background"),`;
    border-radius: `).concat(e("skeleton.border.radius"),`;
}

.p-skeleton::after {
    content: "";
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), `).concat(e("skeleton.animation.background"),`, rgba(255, 255, 255, 0));
}

[dir='rtl'] .p-skeleton::after {
    animation-name: p-skeleton-animation-rtl;
}

.p-skeleton-circle {
    border-radius: 50%;
}

.p-skeleton-animation-none::after {
    animation: none;
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}

@keyframes p-skeleton-animation-rtl {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(-100%);
    }
}
`)},k={root:{position:"relative"}},y={root:function(t){var e=t.props;return["p-skeleton p-component",{"p-skeleton-circle":e.shape==="circle","p-skeleton-animation-none":e.animation==="none"}]}},b=d.extend({name:"skeleton",theme:g,classes:y,inlineStyles:k}),v={name:"BaseSkeleton",extends:p,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:b,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}},S={name:"Skeleton",extends:v,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};function x(n,t,e,r,X,l){return s(),i("div",c({class:n.cx("root"),style:[n.sx("root"),l.containerStyle],"aria-hidden":"true"},n.ptmi("root")),null,16)}S.render=x;const _={key:0,class:"flex flex-col items-center justify-center p-8 bg-red-50 border border-red-200 rounded-lg"},w={class:"text-red-700 text-lg font-medium mb-2"},$={class:"text-sm text-red-600"},B={class:"mt-2 p-2 bg-red-100 rounded text-xs overflow-auto"},R=u({__name:"ErrorBoundary",props:{fallback:{default:"Something went wrong. Please try again later."}},setup(n){const t=m(null);return f(e=>(t.value=e,console.error("ErrorBoundary caught:",e),!1)),(e,r)=>t.value?(s(),i("div",_,[r[1]||(r[1]=a("i",{class:"pi pi-exclamation-triangle text-red-500 text-4xl mb-4"},null,-1)),a("p",w,o(e.$props.fallback),1),a("details",$,[r[0]||(r[0]=a("summary",{class:"cursor-pointer hover:underline"},"Technical details",-1)),a("pre",B,o(t.value.message),1)])])):h(e.$slots,"default",{key:1})}});export{R as _,S as s};
