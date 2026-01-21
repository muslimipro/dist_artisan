import{B as H,s as V,b5 as _,bb as g,m as l,a7 as B,L as P,a8 as W,o as c,c as b,F as A,z as Z,a as k,M as T,l as y,D as M,a2 as L,n as I,t as R,A as J,a9 as F,a_ as S,a6 as p,bu as Q,bf as w,a4 as C,b9 as X,bA as E,e as K,p as v,ai as Y,b4 as $,d as ee,r as te,$ as ne,k as ie,w as O,P as re,h as ae}from"./index-DyZLjSux.js";import{s as oe,a as se}from"./index-C4nK4a3f.js";import{s as ue}from"./index-CdyuZrIz.js";import{a as me}from"./MainHeader.vue_vue_type_script_setup_true_lang-DqEToOkv.js";import{u as ce}from"./useAdminStore-ultx2WBQ.js";import"./index-lHfNBEc0.js";import"./index-DvZrDtzn.js";import"./logo-D1-3uCnC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BdQ6ldev.js";import"./PremiumForm.vue_vue_type_script_setup_true_lang-DIFdMwZ9.js";import"./index-CtMaQvpd.js";import"./index-B5f8mzlU.js";import"./index-CHbvVu9I.js";import"./index-CMirXCvN.js";import"./index-Dvj23Pk3.js";import"./index-x0yb-ne5.js";import"./LocaleSelectButton.vue_vue_type_script_setup_true_lang-B5QD2sJ-.js";import"./index-Dj9Ny_E-.js";import"./language-DYQF8nnT.js";import"./index-Dp3oxRk7.js";var le=function(e){var t=e.dt;return`
.p-menubar {
    display: flex;
    align-items: center;
    background: `.concat(t("menubar.background"),`;
    border: 1px solid `).concat(t("menubar.border.color"),`;
    border-radius: `).concat(t("menubar.border.radius"),`;
    color: `).concat(t("menubar.color"),`;
    padding: `).concat(t("menubar.padding"),`;
    gap: `).concat(t("menubar.gap"),`;
}

.p-menubar-start,
.p-megamenu-end {
    display: flex;
    align-items: center;
}

.p-menubar-root-list,
.p-menubar-submenu {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
}

.p-menubar-root-list {
    align-items: center;
    flex-wrap: wrap;
    gap: `).concat(t("menubar.gap"),`;
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: `).concat(t("menubar.base.item.border.radius"),`;
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: `).concat(t("menubar.base.item.padding"),`;
}

.p-menubar-item-content {
    transition: background `).concat(t("menubar.transition.duration"),", color ").concat(t("menubar.transition.duration"),`;
    border-radius: `).concat(t("menubar.item.border.radius"),`;
    color: `).concat(t("menubar.item.color"),`;
}

.p-menubar-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(t("menubar.item.padding"),`;
    gap: `).concat(t("menubar.item.gap"),`;
    user-select: none;
    outline: 0 none;
}

.p-menubar-item-label {
    line-height: 1;
}

.p-menubar-item-icon {
    color: `).concat(t("menubar.item.icon.color"),`;
}

.p-menubar-submenu-icon {
    color: `).concat(t("menubar.submenu.icon.color"),`;
    margin-left: auto;
    font-size: `).concat(t("menubar.submenu.icon.size"),`;
    width: `).concat(t("menubar.submenu.icon.size"),`;
    height: `).concat(t("menubar.submenu.icon.size"),`;
}

.p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-item.p-focus > .p-menubar-item-content {
    color: `).concat(t("menubar.item.focus.color"),`;
    background: `).concat(t("menubar.item.focus.background"),`;
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
    color: `).concat(t("menubar.item.icon.focus.color"),`;
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
    color: `).concat(t("menubar.submenu.icon.focus.color"),`;
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
    color: `).concat(t("menubar.item.focus.color"),`;
    background: `).concat(t("menubar.item.focus.background"),`;
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
    color: `).concat(t("menubar.item.icon.focus.color"),`;
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
    color: `).concat(t("menubar.submenu.icon.focus.color"),`;
}

.p-menubar-item-active > .p-menubar-item-content {
    color: `).concat(t("menubar.item.active.color"),`;
    background: `).concat(t("menubar.item.active.background"),`;
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
    color: `).concat(t("menubar.item.icon.active.color"),`;
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    color: `).concat(t("menubar.submenu.icon.active.color"),`;
}

.p-menubar-submenu {
    display: none;
    position: absolute;
    min-width: 12.5rem;
    z-index: 1;
    background: `).concat(t("menubar.submenu.background"),`;
    border: 1px solid `).concat(t("menubar.submenu.border.color"),`;
    border-radius: `).concat(t("menubar.submenu.border.radius"),`;
    box-shadow: `).concat(t("menubar.submenu.shadow"),`;
    color: `).concat(t("menubar.submenu.color"),`;
    flex-direction: column;
    padding: `).concat(t("menubar.submenu.padding"),`;
    gap: `).concat(t("menubar.submenu.gap"),`;
}

.p-menubar-submenu .p-menubar-separator {
    border-block-start: 1px solid `).concat(t("menubar.separator.border.color"),`;
}

.p-menubar-submenu .p-menubar-item {
    position: relative;
}

.p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {
    display: block;
    left: 100%;
    top: 0;
}

.p-menubar-end {
    margin-left: auto;
    align-self: center;
}

.p-menubar-end:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: `).concat(t("menubar.mobile.button.size"),`;
    height: `).concat(t("menubar.mobile.button.size"),`;
    position: relative;
    color: `).concat(t("menubar.mobile.button.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: `).concat(t("menubar.mobile.button.border.radius"),`;
    transition: background `).concat(t("menubar.transition.duration"),", color ").concat(t("menubar.transition.duration"),", outline-color ").concat(t("menubar.transition.duration"),`;
    outline-color: transparent;
}

.p-menubar-button:hover {
    color: `).concat(t("menubar.mobile.button.hover.color"),`;
    background: `).concat(t("menubar.mobile.button.hover.background"),`;
}

.p-menubar-button:focus-visible {
    box-shadow: `).concat(t("menubar.mobile.button.focus.ring.shadow"),`;
    outline: `).concat(t("menubar.mobile.button.focus.ring.width")," ").concat(t("menubar.mobile.button.focus.ring.style")," ").concat(t("menubar.mobile.button.focus.ring.color"),`;
    outline-offset: `).concat(t("menubar.mobile.button.focus.ring.offset"),`;
}

.p-menubar-mobile {
    position: relative;
}

.p-menubar-mobile .p-menubar-button {
    display: flex;
}

.p-menubar-mobile .p-menubar-root-list {
    position: absolute;
    display: none;
    width: 100%;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
    padding: `).concat(t("menubar.submenu.padding"),`;
    background: `).concat(t("menubar.submenu.background"),`;
    border: 1px solid `).concat(t("menubar.submenu.border.color"),`;
    box-shadow: `).concat(t("menubar.submenu.shadow"),`;
    border-radius: `).concat(t("menubar.submenu.border.radius"),`;
    gap: `).concat(t("menubar.submenu.gap"),`;
}

.p-menubar-mobile .p-menubar-root-list:dir(rtl) {
    left: auto;
    right: 0;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: `).concat(t("menubar.item.padding"),`;
}

.p-menubar-mobile-active .p-menubar-root-list {
    display: flex;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-item {
    width: 100%;
    position: static;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
    border-block-start: 1px solid `).concat(t("menubar.separator.border.color"),`;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl),
.p-menubar-mobile .p-menubar-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-180deg);
}

.p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-menubar-mobile .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-90deg);
}

.p-menubar-mobile .p-menubar-submenu {
    width: 100%;
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-inline-start: `).concat(t("menubar.submenu.mobile.indent"),`;
    padding-inline-end: 0;
}
`)},de={submenu:function(e){var t=e.instance,i=e.processedItem;return{display:t.isItemActive(i)?"flex":"none"}}},be={root:function(e){var t=e.instance;return["p-menubar p-component",{"p-menubar-mobile":t.queryMatches,"p-menubar-mobile-active":t.mobileActive}]},start:"p-menubar-start",button:"p-menubar-button",rootList:"p-menubar-root-list",item:function(e){var t=e.instance,i=e.processedItem;return["p-menubar-item",{"p-menubar-item-active":t.isItemActive(i),"p-focus":t.isItemFocused(i),"p-disabled":t.isItemDisabled(i)}]},itemContent:"p-menubar-item-content",itemLink:"p-menubar-item-link",itemIcon:"p-menubar-item-icon",itemLabel:"p-menubar-item-label",submenuIcon:"p-menubar-submenu-icon",submenu:"p-menubar-submenu",separator:"p-menubar-separator",end:"p-menubar-end"},fe=H.extend({name:"menubar",theme:le,classes:be,inlineStyles:de}),he={name:"BaseMenubar",extends:V,props:{model:{type:Array,default:null},buttonProps:{type:null,default:null},breakpoint:{type:String,default:"960px"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:fe,provide:function(){return{$pcMenubar:this,$parentInstance:this}}},j={name:"MenubarSub",hostName:"Menubar",extends:V,emits:["item-mouseenter","item-click","item-mousemove"],props:{items:{type:Array,default:null},root:{type:Boolean,default:!1},popup:{type:Boolean,default:!1},mobileActive:{type:Boolean,default:!1},templates:{type:Object,default:null},level:{type:Number,default:0},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},activeItemPath:{type:Object,default:null}},list:null,methods:{getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,t,i){return e&&e.item?_(e.item[t],i):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getItemLabelId:function(e){return"".concat(this.menuId,"_").concat(e.key,"_label")},getPTOptions:function(e,t,i){return this.ptm(i,{context:{item:e.item,index:t,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e),level:this.level}})},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return g(e.items)},onItemClick:function(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-click",{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter:function(e,t){this.$emit("item-mouseenter",{originalEvent:e,processedItem:t})},onItemMouseMove:function(e,t){this.$emit("item-mousemove",{originalEvent:e,processedItem:t})},getAriaPosInset:function(e){return e-this.calculateAriaSetSize.slice(0,e).length+1},getMenuItemProps:function(e,t){return{action:l({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions(e,t,"itemLink")),icon:l({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions(e,t,"itemIcon")),label:l({class:this.cx("itemLabel")},this.getPTOptions(e,t,"itemLabel")),submenuicon:l({class:this.cx("submenuIcon")},this.getPTOptions(e,t,"submenuIcon"))}}},computed:{calculateAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&e.getItemProp(t,"separator")})},getAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&!e.getItemProp(t,"separator")}).length}},components:{AngleRightIcon:oe,AngleDownIcon:ue},directives:{ripple:B}},Ie=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],pe=["onClick","onMouseenter","onMousemove"],ge=["href","target"],ve=["id"],ye=["id"];function ke(n,e,t,i,o,r){var s=P("MenubarSub",!0),d=W("ripple");return c(),b("ul",l({class:t.level===0?n.cx("rootList"):n.cx("submenu")},t.level===0?n.ptm("rootList"):n.ptm("submenu")),[(c(!0),b(A,null,Z(t.items,function(a,u){return c(),b(A,{key:r.getItemKey(a)},[r.isItemVisible(a)&&!r.getItemProp(a,"separator")?(c(),b("li",l({key:0,id:r.getItemId(a),style:r.getItemProp(a,"style"),class:[n.cx("item",{processedItem:a}),r.getItemProp(a,"class")],role:"menuitem","aria-label":r.getItemLabel(a),"aria-disabled":r.isItemDisabled(a)||void 0,"aria-expanded":r.isItemGroup(a)?r.isItemActive(a):void 0,"aria-haspopup":r.isItemGroup(a)&&!r.getItemProp(a,"to")?"menu":void 0,"aria-level":t.level+1,"aria-setsize":r.getAriaSetSize,"aria-posinset":r.getAriaPosInset(u),ref_for:!0},r.getPTOptions(a,u,"item"),{"data-p-active":r.isItemActive(a),"data-p-focused":r.isItemFocused(a),"data-p-disabled":r.isItemDisabled(a)}),[k("div",l({class:n.cx("itemContent"),onClick:function(f){return r.onItemClick(f,a)},onMouseenter:function(f){return r.onItemMouseEnter(f,a)},onMousemove:function(f){return r.onItemMouseMove(f,a)},ref_for:!0},r.getPTOptions(a,u,"itemContent")),[t.templates.item?(c(),y(L(t.templates.item),{key:1,item:a.item,root:t.root,hasSubmenu:r.getItemProp(a,"items"),label:r.getItemLabel(a),props:r.getMenuItemProps(a,u)},null,8,["item","root","hasSubmenu","label","props"])):T((c(),b("a",l({key:0,href:r.getItemProp(a,"url"),class:n.cx("itemLink"),target:r.getItemProp(a,"target"),tabindex:"-1",ref_for:!0},r.getPTOptions(a,u,"itemLink")),[t.templates.itemicon?(c(),y(L(t.templates.itemicon),{key:0,item:a.item,class:M(n.cx("itemIcon"))},null,8,["item","class"])):r.getItemProp(a,"icon")?(c(),b("span",l({key:1,class:[n.cx("itemIcon"),r.getItemProp(a,"icon")],ref_for:!0},r.getPTOptions(a,u,"itemIcon")),null,16)):I("",!0),k("span",l({id:r.getItemLabelId(a),class:n.cx("itemLabel"),ref_for:!0},r.getPTOptions(a,u,"itemLabel")),R(r.getItemLabel(a)),17,ve),r.getItemProp(a,"items")?(c(),b(A,{key:2},[t.templates.submenuicon?(c(),y(L(t.templates.submenuicon),{key:0,root:t.root,active:r.isItemActive(a),class:M(n.cx("submenuIcon"))},null,8,["root","active","class"])):(c(),y(L(t.root?"AngleDownIcon":"AngleRightIcon"),l({key:1,class:n.cx("submenuIcon"),ref_for:!0},r.getPTOptions(a,u,"submenuIcon")),null,16,["class"]))],64)):I("",!0)],16,ge)),[[d]])],16,pe),r.isItemVisible(a)&&r.isItemGroup(a)?(c(),y(s,{key:0,id:r.getItemId(a)+"_list",menuId:t.menuId,role:"menu",style:J(n.sx("submenu",!0,{processedItem:a})),focusedItemId:t.focusedItemId,items:a.items,mobileActive:t.mobileActive,activeItemPath:t.activeItemPath,templates:t.templates,level:t.level+1,"aria-labelledby":r.getItemLabelId(a),pt:n.pt,unstyled:n.unstyled,onItemClick:e[0]||(e[0]=function(m){return n.$emit("item-click",m)}),onItemMouseenter:e[1]||(e[1]=function(m){return n.$emit("item-mouseenter",m)}),onItemMousemove:e[2]||(e[2]=function(m){return n.$emit("item-mousemove",m)})},null,8,["id","menuId","style","focusedItemId","items","mobileActive","activeItemPath","templates","level","aria-labelledby","pt","unstyled"])):I("",!0)],16,Ie)):I("",!0),r.isItemVisible(a)&&r.getItemProp(a,"separator")?(c(),b("li",l({key:1,id:r.getItemId(a),class:[n.cx("separator"),r.getItemProp(a,"class")],style:r.getItemProp(a,"style"),role:"separator",ref_for:!0},n.ptm("separator")),null,16,ye)):I("",!0)],64)}),128))],16)}j.render=ke;var G={name:"Menubar",extends:he,inheritAttrs:!1,emits:["focus","blur"],matchMediaListener:null,data:function(){return{id:this.$attrs.id,mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],dirty:!1,query:null,queryMatches:!1}},watch:{"$attrs.id":function(e){this.id=e||F()},activeItemPath:function(e){g(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},outsideClickListener:null,container:null,menubar:null,mounted:function(){this.id=this.id||F(),this.bindMatchMediaListener()},beforeUnmount:function(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),this.container&&S.clear(this.container),this.container=null},methods:{getItemProp:function(e,t){return e?_(e[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return g(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&g(e.items)},toggle:function(e){var t=this;this.mobileActive?(this.mobileActive=!1,S.clear(this.menubar),this.hide()):(this.mobileActive=!0,S.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(function(){t.show()},1)),this.bindOutsideClickListener(),e.preventDefault()},show:function(){p(this.menubar)},hide:function(e,t){var i=this;this.mobileActive&&(this.mobileActive=!1,setTimeout(function(){p(i.$refs.menubutton)},0)),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},t&&p(this.menubar),this.dirty=!1},onFocus:function(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown:function(e){var t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&Q(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e,t){var i=e.processedItem,o=e.isFocus;if(!w(i)){var r=i.index,s=i.key,d=i.level,a=i.parentKey,u=i.items,m=g(u),f=this.activeItemPath.filter(function(h){return h.parentKey!==a&&h.parentKey!==s});m&&f.push(i),this.focusedItemInfo={index:r,level:d,parentKey:a},m&&(this.dirty=!0),o&&p(this.menubar),!(t==="hover"&&this.queryMatches)&&(this.activeItemPath=f)}},onItemClick:function(e){var t=e.originalEvent,i=e.processedItem,o=this.isProccessedItemGroup(i),r=w(i.parent),s=this.isSelected(i);if(s){var d=i.index,a=i.key,u=i.level,m=i.parentKey;this.activeItemPath=this.activeItemPath.filter(function(h){return a!==h.key&&a.startsWith(h.key)}),this.focusedItemInfo={index:d,level:u,parentKey:m},this.dirty=!r,p(this.menubar)}else if(o)this.onItemChange(e);else{var f=r?i:this.activeItemPath.find(function(h){return h.parentKey===""});this.hide(t),this.changeFocusedItemIndex(t,f?f.index:-1),this.mobileActive=!1,p(this.menubar)}},onItemMouseEnter:function(e){this.dirty&&this.onItemChange(e,"hover")},onItemMouseMove:function(e){this.focused&&this.changeFocusedItemIndex(e,e.processedItem.index)},menuButtonClick:function(e){this.toggle(e)},menuButtonKeydown:function(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&this.menuButtonClick(e)},onArrowDownKey:function(e){var t=this.visibleItems[this.focusedItemInfo.index],i=t?w(t.parent):null;if(i){var o=this.isProccessedItemGroup(t);o&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.onArrowRightKey(e))}else{var r=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,r)}e.preventDefault()},onArrowUpKey:function(e){var t=this,i=this.visibleItems[this.focusedItemInfo.index],o=w(i.parent);if(o){var r=this.isProccessedItemGroup(i);if(r){this.onItemChange({originalEvent:e,processedItem:i}),this.focusedItemInfo={index:-1,parentKey:i.key};var s=this.findLastItemIndex();this.changeFocusedItemIndex(e,s)}}else{var d=this.activeItemPath.find(function(u){return u.key===i.parentKey});if(this.focusedItemInfo.index===0)this.focusedItemInfo={index:-1,parentKey:d?d.parentKey:""},this.searchValue="",this.onArrowLeftKey(e),this.activeItemPath=this.activeItemPath.filter(function(u){return u.parentKey!==t.focusedItemInfo.parentKey});else{var a=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,a)}}e.preventDefault()},onArrowLeftKey:function(e){var t=this,i=this.visibleItems[this.focusedItemInfo.index],o=i?this.activeItemPath.find(function(s){return s.key===i.parentKey}):null;if(o)this.onItemChange({originalEvent:e,processedItem:o}),this.activeItemPath=this.activeItemPath.filter(function(s){return s.parentKey!==t.focusedItemInfo.parentKey}),e.preventDefault();else{var r=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,r),e.preventDefault()}},onArrowRightKey:function(e){var t=this.visibleItems[this.focusedItemInfo.index],i=t?this.activeItemPath.find(function(s){return s.key===t.parentKey}):null;if(i){var o=this.isProccessedItemGroup(t);o&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.onArrowDownKey(e))}else{var r=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,r),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var t=C(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),i=t&&C(t,'a[data-pc-section="itemlink"]');i?i.click():t&&t.click();var o=this.visibleItems[this.focusedItemInfo.index],r=this.isProccessedItemGroup(o);!r&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){if(this.focusedItemInfo.level!==0){var t=this.focusedItemInfo;this.hide(e,!1),this.focusedItemInfo={index:Number(t.parentKey.split("_")[0]),level:0,parentKey:""}}e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var t=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(t);!i&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var i=e.container&&!e.container.contains(t.target),o=!(e.target&&(e.target===t.target||e.target.contains(t.target)));i&&o&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(t){X()||e.hide(t,!0),e.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var t=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=t,this.queryMatches=t.matches,this.matchMediaListener=function(){e.queryMatches=t.matches,e.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){var t;return this.isValidItem(e)&&((t=this.getProccessedItemLabel(e))===null||t===void 0?void 0:t.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidItem(t)})},findLastItemIndex:function(){var e=this;return E(this.visibleItems,function(t){return e.isValidItem(t)})},findNextItemIndex:function(e){var t=this,i=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(o){return t.isValidItem(o)}):-1;return i>-1?i+e+1:e},findPrevItemIndex:function(e){var t=this,i=e>0?E(this.visibleItems.slice(0,e),function(o){return t.isValidItem(o)}):-1;return i>-1?i:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidSelectedItem(t)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,t){var i=this;this.searchValue=(this.searchValue||"")+t;var o=-1,r=!1;return this.focusedItemInfo.index!==-1?(o=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(s){return i.isItemMatched(s)}),o=o===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(s){return i.isItemMatched(s)}):o+this.focusedItemInfo.index):o=this.visibleItems.findIndex(function(s){return i.isItemMatched(s)}),o!==-1&&(r=!0),o===-1&&this.focusedItemInfo.index===-1&&(o=this.findFirstFocusedItemIndex()),o!==-1&&this.changeFocusedItemIndex(e,o),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){i.searchValue="",i.searchTimeout=null},500),r},changeFocusedItemIndex:function(e,t){this.focusedItemInfo.index!==t&&(this.focusedItemInfo.index=t,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,t=e!==-1?"".concat(this.id,"_").concat(e):this.focusedItemId,i=C(this.menubar,'li[id="'.concat(t,'"]'));i&&i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var t=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",s=[];return e&&e.forEach(function(d,a){var u=(r!==""?r+"_":"")+a,m={item:d,index:a,level:i,key:u,parent:o,parentKey:r};m.items=t.createProcessedItems(d.items,i+1,m,u),s.push(m)}),s},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,t=this.activeItemPath.find(function(i){return i.key===e.focusedItemInfo.parentKey});return t?t.items:this.processedItems},focusedItemId:function(){return this.focusedItemInfo.index!==-1?"".concat(this.id).concat(g(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{MenubarSub:j,BarsIcon:se}};function x(n){"@babel/helpers - typeof";return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(n)}function D(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,i)}return t}function z(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?D(Object(t),!0).forEach(function(i){Pe(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Pe(n,e,t){return(e=xe(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function xe(n){var e=Le(n,"string");return x(e)=="symbol"?e:e+""}function Le(n,e){if(x(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(x(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var we=["aria-haspopup","aria-expanded","aria-controls","aria-label"];function Ke(n,e,t,i,o,r){var s=P("BarsIcon"),d=P("MenubarSub");return c(),b("div",l({ref:r.containerRef,class:n.cx("root")},n.ptmi("root")),[n.$slots.start?(c(),b("div",l({key:0,class:n.cx("start")},n.ptm("start")),[K(n.$slots,"start")],16)):I("",!0),K(n.$slots,n.$slots.button?"button":"menubutton",{id:o.id,class:M(n.cx("button")),toggleCallback:function(u){return r.menuButtonClick(u)}},function(){var a;return[n.model&&n.model.length>0?(c(),b("a",l({key:0,ref:"menubutton",role:"button",tabindex:"0",class:n.cx("button"),"aria-haspopup":!!(n.model.length&&n.model.length>0),"aria-expanded":o.mobileActive,"aria-controls":o.id,"aria-label":(a=n.$primevue.config.locale.aria)===null||a===void 0?void 0:a.navigation,onClick:e[0]||(e[0]=function(u){return r.menuButtonClick(u)}),onKeydown:e[1]||(e[1]=function(u){return r.menuButtonKeydown(u)})},z(z({},n.buttonProps),n.ptm("button"))),[K(n.$slots,n.$slots.buttonicon?"buttonicon":"menubuttonicon",{},function(){return[v(s,Y($(n.ptm("buttonicon"))),null,16)]})],16,we)):I("",!0)]}),v(d,{ref:r.menubarRef,id:o.id+"_list",role:"menubar",items:r.processedItems,templates:n.$slots,root:!0,mobileActive:o.mobileActive,tabindex:"0","aria-activedescendant":o.focused?r.focusedItemId:void 0,menuId:o.id,focusedItemId:o.focused?r.focusedItemId:void 0,activeItemPath:o.activeItemPath,level:0,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,pt:n.pt,unstyled:n.unstyled,onFocus:r.onFocus,onBlur:r.onBlur,onKeydown:r.onKeyDown,onItemClick:r.onItemClick,onItemMouseenter:r.onItemMouseEnter,onItemMousemove:r.onItemMouseMove},null,8,["id","items","templates","mobileActive","aria-activedescendant","menuId","focusedItemId","activeItemPath","aria-labelledby","aria-label","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"]),n.$slots.end?(c(),b("div",l({key:1,class:n.cx("end")},n.ptm("end")),[K(n.$slots,"end")],16)):I("",!0)],16)}G.render=Ke;const Me={class:"flex flex-col min-h-screen bg-slate-50 gap-6"},Ae={class:"flex-grow flex flex-col content-start gap-4 px-10 pb-4"},Se=["href","onClick"],Ce={class:"ml-2"},Ye=ee({__name:"AdminView",setup(n){const e=ce(),{loadUsers:t}=e,i=re(),o=te([{label:"Dashboard",icon:"pi pi-objects-column",route:"/admin/dashboard"},{label:"Users",icon:"pi pi-users",route:"/admin/users"},{label:"Schools",icon:"pi pi-building-columns",route:"/admin/schools"},{label:"Organizations",icon:"pi pi-building",route:"/admin/organizations"},{label:"Hackathons",icon:"pi pi-graduation-cap",route:"/admin/hackathons"}]),r=s=>ae(()=>i.path===s);return ne(()=>{t()}),(s,d)=>{const a=P("router-link"),u=G,m=P("RouterView"),f=B;return c(),b("div",Me,[v(ie(me),{class:"bg-white"}),k("div",Ae,[v(u,{model:o.value,class:"w-fit"},{item:O(({item:h,props:N})=>[v(a,{to:h.route},{default:O(({href:U,navigate:q})=>[T((c(),b("a",l({href:U},N.action,{onClick:q,class:["rounded-md",{"bg-slate-100":r(h.route).value}]}),[k("span",{class:M(h.icon)},null,2),k("span",Ce,R(h.label),1)],16,Se)),[[f]])]),_:2},1032,["to"])]),_:1},8,["model"]),v(m,{class:"h-full w-full"})])])}}});export{Ye as default};
