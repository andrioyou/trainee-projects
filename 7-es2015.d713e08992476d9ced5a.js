(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Tp2M:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class u{}var o=e("pMnS"),i=e("s7LF"),r=e("SVse");class a{constructor(l){this.builderService=l}get isValid(){return this.form.controls[this.element.name].valid}get formArrayControls(){const l=this.form.get(this.element.name),n=[];return l&&Object.keys(l.controls).forEach(e=>{n.push(l.controls[e])}),n}addFormArrayItem(){const l=this.form.get(this.element.name);l&&l.push(this.builderService.toFormGroup(this.element))}removeFormArrayItem(l){const n=this.form.get(this.element.name);n&&n.removeAt(l)}}const s=(()=>{class l{constructor(){}toFormGroup(l){const n={};return l.elements.forEach(l=>{n[l.name]=l.elements?new i.e([this.toFormGroup(l)]):l.required&&"true"===l.required.toString()?new i.h(l.value,i.z.required):new i.h(l.value)}),new i.j(n)}}return l.ngInjectableDef=t["\u0275\u0275defineInjectable"]({factory:function(){return new l},token:l,providedIn:"root"}),l})();var d=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;margin-bottom:10px}.label-text[_ngcontent-%COMP%]{display:block;padding-bottom:5px}.radio-button[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;margin-bottom:5px}.error[_ngcontent-%COMP%]{display:block;padding-top:2px;color:#f44;font-size:13px}.ng-touched.ng-invalid[_ngcontent-%COMP%]{border-color:#f44}.form-array[_ngcontent-%COMP%]{margin-bottom:10px;border-left:1px solid #ddd;padding-left:15px}.control[_ngcontent-%COMP%]{position:relative}.remove[_ngcontent-%COMP%]{position:absolute;top:20px;right:15px}"]],data:{}});function m(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,9,null,null,null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,8,"label",[],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"span",[["class","label-text"]],null,null,null,null,null)),(l()(),t["\u0275ted"](3,null,["",""])),(l()(),t["\u0275eld"](4,0,null,null,5,"input",[],[[8,"type",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,e){var u=!0;return"input"===n&&(u=!1!==t["\u0275nov"](l,5)._handleInput(e.target.value)&&u),"blur"===n&&(u=!1!==t["\u0275nov"](l,5).onTouched()&&u),"compositionstart"===n&&(u=!1!==t["\u0275nov"](l,5)._compositionStart()&&u),"compositionend"===n&&(u=!1!==t["\u0275nov"](l,5)._compositionEnd(e.target.value)&&u),u},null,null)),t["\u0275did"](5,16384,null,0,i.c,[t.Renderer2,t.ElementRef,[2,i.a]],null,null),t["\u0275prd"](1024,null,i.o,function(l){return[l]},[i.c]),t["\u0275did"](7,671744,null,0,i.i,[[3,i.b],[8,null],[8,null],[6,i.o],[2,i.C]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,i.p,null,[i.i]),t["\u0275did"](9,16384,null,0,i.q,[[4,i.p]],null,null)],function(l,n){l(n,7,0,n.component.element.name)},function(l,n){var e=n.component;l(n,3,0,e.element.label),l(n,4,0,e.element.type,t["\u0275nov"](n,9).ngClassUntouched,t["\u0275nov"](n,9).ngClassTouched,t["\u0275nov"](n,9).ngClassPristine,t["\u0275nov"](n,9).ngClassDirty,t["\u0275nov"](n,9).ngClassValid,t["\u0275nov"](n,9).ngClassInvalid,t["\u0275nov"](n,9).ngClassPending)})}function c(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"option",[],null,null,null,null,null)),t["\u0275did"](1,147456,null,0,i.u,[t.ElementRef,t.Renderer2,[2,i.y]],{value:[0,"value"]},null),t["\u0275did"](2,147456,null,0,i.D,[t.ElementRef,t.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),t["\u0275ted"](3,null,["",""]))],function(l,n){l(n,1,0,n.context.$implicit),l(n,2,0,n.context.$implicit)},function(l,n){l(n,3,0,n.context.$implicit)})}function p(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,11,null,null,null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,10,"label",[],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"span",[["class","label-text"]],null,null,null,null,null)),(l()(),t["\u0275ted"](3,null,["",""])),(l()(),t["\u0275eld"](4,0,null,null,7,"select",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,e){var u=!0;return"change"===n&&(u=!1!==t["\u0275nov"](l,5).onChange(e.target.value)&&u),"blur"===n&&(u=!1!==t["\u0275nov"](l,5).onTouched()&&u),u},null,null)),t["\u0275did"](5,16384,null,0,i.y,[t.Renderer2,t.ElementRef],null,null),t["\u0275prd"](1024,null,i.o,function(l){return[l]},[i.y]),t["\u0275did"](7,671744,null,0,i.i,[[3,i.b],[8,null],[8,null],[6,i.o],[2,i.C]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,i.p,null,[i.i]),t["\u0275did"](9,16384,null,0,i.q,[[4,i.p]],null,null),(l()(),t["\u0275and"](16777216,null,null,1,null,c)),t["\u0275did"](11,278528,null,0,r.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var e=n.component;l(n,7,0,e.element.name),l(n,11,0,e.element.options)},function(l,n){l(n,3,0,n.component.element.label),l(n,4,0,t["\u0275nov"](n,9).ngClassUntouched,t["\u0275nov"](n,9).ngClassTouched,t["\u0275nov"](n,9).ngClassPristine,t["\u0275nov"](n,9).ngClassDirty,t["\u0275nov"](n,9).ngClassValid,t["\u0275nov"](n,9).ngClassInvalid,t["\u0275nov"](n,9).ngClassPending)})}function g(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,8,"label",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,6,"input",[["type","radio"]],[[8,"checked",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,e){var u=!0;return"input"===n&&(u=!1!==t["\u0275nov"](l,2)._handleInput(e.target.value)&&u),"blur"===n&&(u=!1!==t["\u0275nov"](l,2).onTouched()&&u),"compositionstart"===n&&(u=!1!==t["\u0275nov"](l,2)._compositionStart()&&u),"compositionend"===n&&(u=!1!==t["\u0275nov"](l,2)._compositionEnd(e.target.value)&&u),"change"===n&&(u=!1!==t["\u0275nov"](l,3).onChange()&&u),"blur"===n&&(u=!1!==t["\u0275nov"](l,3).onTouched()&&u),u},null,null)),t["\u0275did"](2,16384,null,0,i.c,[t.Renderer2,t.ElementRef,[2,i.a]],null,null),t["\u0275did"](3,212992,null,0,i.v,[t.Renderer2,t.ElementRef,i.B,t.Injector],{formControlName:[0,"formControlName"],value:[1,"value"]},null),t["\u0275prd"](1024,null,i.o,function(l,n){return[l,n]},[i.c,i.v]),t["\u0275did"](5,671744,null,0,i.i,[[3,i.b],[8,null],[8,null],[6,i.o],[2,i.C]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,i.p,null,[i.i]),t["\u0275did"](7,16384,null,0,i.q,[[4,i.p]],null,null),(l()(),t["\u0275ted"](8,null,[" "," "]))],function(l,n){var e=n.component;l(n,3,0,e.element.name,n.context.$implicit),l(n,5,0,e.element.name)},function(l,n){l(n,1,0,n.component.element.value===n.context.$implicit,t["\u0275nov"](n,7).ngClassUntouched,t["\u0275nov"](n,7).ngClassTouched,t["\u0275nov"](n,7).ngClassPristine,t["\u0275nov"](n,7).ngClassDirty,t["\u0275nov"](n,7).ngClassValid,t["\u0275nov"](n,7).ngClassInvalid,t["\u0275nov"](n,7).ngClassPending),l(n,8,0,n.context.$implicit)})}function f(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,4,"div",[["class","radio-button"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"span",[["class","label-text"]],null,null,null,null,null)),(l()(),t["\u0275ted"](3,null,["",""])),(l()(),t["\u0275and"](16777216,null,null,1,null,g)),t["\u0275did"](5,278528,null,0,r.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,5,0,n.component.element.options)},function(l,n){l(n,3,0,n.component.element.label)})}function v(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"app-form-control",[],null,null,null,y,d)),t["\u0275did"](2,49152,null,0,a,[s],{form:[0,"form"],element:[1,"element"]},null)],function(l,n){var e=n.component;l(n,2,0,e.form.get(e.element.name+"."+n.parent.context.index),n.context.$implicit)},null)}function h(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"div",[["class","control"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,v)),t["\u0275did"](2,278528,null,0,r.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](3,0,null,null,1,"button",[["class","remove"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.removeFormArrayItem(l.context.index)&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["\u2715"]))],function(l,n){l(n,2,0,n.component.element.elements)},null)}function b(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,10,null,null,null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t["\u0275ted"](2,null,["",""])),(l()(),t["\u0275eld"](3,0,null,null,7,"div",[["class","form-array"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),t["\u0275did"](4,212992,null,0,i.f,[[3,i.b],[8,null],[8,null]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,i.b,null,[i.f]),t["\u0275did"](6,16384,null,0,i.r,[[4,i.b]],null,null),(l()(),t["\u0275and"](16777216,null,null,1,null,h)),t["\u0275did"](8,278528,null,0,r.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](9,0,null,null,1,"button",[["class","add"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.addFormArrayItem()&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["Add"]))],function(l,n){var e=n.component;l(n,4,0,e.element.name),l(n,8,0,e.formArrayControls)},function(l,n){l(n,2,0,n.component.element.label),l(n,3,0,t["\u0275nov"](n,6).ngClassUntouched,t["\u0275nov"](n,6).ngClassTouched,t["\u0275nov"](n,6).ngClassPristine,t["\u0275nov"](n,6).ngClassDirty,t["\u0275nov"](n,6).ngClassValid,t["\u0275nov"](n,6).ngClassInvalid,t["\u0275nov"](n,6).ngClassPending)})}function C(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"span",[["class","error"]],null,null,null,null,null)),(l()(),t["\u0275ted"](1,null,[""," is not valid"]))],null,function(l,n){l(n,1,0,n.component.element.label)})}function y(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,15,"div",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,e){var u=!0;return"submit"===n&&(u=!1!==t["\u0275nov"](l,1).onSubmit(e)&&u),"reset"===n&&(u=!1!==t["\u0275nov"](l,1).onReset()&&u),u},null,null)),t["\u0275did"](1,540672,null,0,i.k,[[8,null],[8,null]],{form:[0,"form"]},null),t["\u0275prd"](2048,null,i.b,null,[i.k]),t["\u0275did"](3,16384,null,0,i.r,[[4,i.b]],null,null),(l()(),t["\u0275eld"](4,0,null,null,9,null,null,null,null,null,null,null)),t["\u0275did"](5,16384,null,0,r.NgSwitch,[],{ngSwitch:[0,"ngSwitch"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,m)),t["\u0275did"](7,278528,null,0,r.NgSwitchCase,[t.ViewContainerRef,t.TemplateRef,r.NgSwitch],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,p)),t["\u0275did"](9,278528,null,0,r.NgSwitchCase,[t.ViewContainerRef,t.TemplateRef,r.NgSwitch],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,f)),t["\u0275did"](11,278528,null,0,r.NgSwitchCase,[t.ViewContainerRef,t.TemplateRef,r.NgSwitch],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,b)),t["\u0275did"](13,278528,null,0,r.NgSwitchCase,[t.ViewContainerRef,t.TemplateRef,r.NgSwitch],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,C)),t["\u0275did"](15,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,1,0,e.form),l(n,5,0,e.element.typeOfControl),l(n,7,0,"input"),l(n,9,0,"select"),l(n,11,0,"radio-button"),l(n,13,0,"form-array"),l(n,15,0,!e.isValid)},function(l,n){l(n,0,0,t["\u0275nov"](n,3).ngClassUntouched,t["\u0275nov"](n,3).ngClassTouched,t["\u0275nov"](n,3).ngClassPristine,t["\u0275nov"](n,3).ngClassDirty,t["\u0275nov"](n,3).ngClassValid,t["\u0275nov"](n,3).ngClassInvalid,t["\u0275nov"](n,3).ngClassPending)})}class x{constructor(l){this.builderService=l,this.onSubmit=new t.EventEmitter}ngOnInit(){this.setForm()}ngOnChanges(l){l.item&&this.setForm()}get formControls(){const l=[];return Object.keys(this.form.controls).forEach(n=>{l.push(this.form.controls[n])}),l}setForm(){this.item&&(this.form=this.builderService.toFormGroup(this.item))}submit(){this.onSubmit.emit(this.form.value)}}var I=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}h3[_ngcontent-%COMP%]{margin:15px 0}.submit[_ngcontent-%COMP%]{margin-top:30px}"]],data:{}});function O(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.item.formName)})}function F(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"app-form-control",[],null,null,null,y,d)),t["\u0275did"](2,49152,null,0,a,[s],{form:[0,"form"],element:[1,"element"]},null)],function(l,n){var e=n.component;l(n,2,0,e.form,e.item.elements[n.context.index])},null)}function N(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Form wasn't loaded."]))],null,null)}function w(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,11,null,null,null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,8,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,e){var u=!0;return"submit"===n&&(u=!1!==t["\u0275nov"](l,3).onSubmit(e)&&u),"reset"===n&&(u=!1!==t["\u0275nov"](l,3).onReset()&&u),u},null,null)),t["\u0275did"](2,16384,null,0,i.E,[],null,null),t["\u0275did"](3,540672,null,0,i.k,[[8,null],[8,null]],{form:[0,"form"]},null),t["\u0275prd"](2048,null,i.b,null,[i.k]),t["\u0275did"](5,16384,null,0,i.r,[[4,i.b]],null,null),(l()(),t["\u0275and"](16777216,null,null,1,null,F)),t["\u0275did"](7,278528,null,0,r.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](8,0,null,null,1,"button",[["class","submit"],["type","submit"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.submit()&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["Submit"])),(l()(),t["\u0275and"](16777216,null,null,1,null,N)),t["\u0275did"](11,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](0,null,null,0))],function(l,n){var e=n.component;l(n,3,0,e.form),l(n,7,0,e.formControls),l(n,11,0,!e.form)},function(l,n){var e=n.component;l(n,1,0,t["\u0275nov"](n,5).ngClassUntouched,t["\u0275nov"](n,5).ngClassTouched,t["\u0275nov"](n,5).ngClassPristine,t["\u0275nov"](n,5).ngClassDirty,t["\u0275nov"](n,5).ngClassValid,t["\u0275nov"](n,5).ngClassInvalid,t["\u0275nov"](n,5).ngClassPending),l(n,8,0,!e.form.valid)})}function R(l){return t["\u0275vid"](0,[(l()(),t["\u0275and"](16777216,null,null,1,null,O)),t["\u0275did"](1,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](2,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,w)),t["\u0275did"](4,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,1,0,e.item.formName),l(n,4,0,e.form)},null)}const S={formName:"Creator form",elements:[{typeOfControl:"input",name:"formName",label:"Form name",required:!0},{typeOfControl:"form-array",name:"elements",label:"Elements",required:!0,elements:[{typeOfControl:"select",options:["input","select","radio-button"],name:"typeOfControl",label:"Type of element",value:"input",required:!0},{typeOfControl:"input",type:"text",name:"name",label:"Name",required:!0},{typeOfControl:"input",type:"text",name:"label",label:"Label",required:!0},{typeOfControl:"input",type:"text",name:"value",label:"Value"},{typeOfControl:"radio-button",options:["true","false"],name:"required",label:"Required"},{typeOfControl:"select",options:["text","email","number","password"],name:"type",label:"Type of input",value:"text"}]}]};class P{constructor(l){this.formsListService=l,this.creatorItem=S}addItemToList(l){this.formsListService.addFormItem(l)}}var _=e("2Vo4");class M{constructor(l){this.typeOfControl="input",this.type=l.type,this.name=l.name,this.value=l.value||"",this.label=l.label||"",this.required=!!l.required}}class L{constructor(l){this.typeOfControl="form-array",this.name=l.name,this.value=l.value||"",this.label=l.label||"",this.required=!!l.required,this.elements=l.elements}}class k{constructor(){this.storageName="forms-list",this.formsList$=new _.a(this.getFormsList())}getFormsList(){const l=localStorage.getItem(this.storageName);return l?JSON.parse(l):[]}setFormsList(l){localStorage.setItem(this.storageName,JSON.stringify(l)),this.updateFormsList(l)}updateFormsList(l){this.formsList$.next(l)}clearFormsList(){this.setFormsList([])}getFormItem(l){const n=this.getFormsList();let e=null;return n.forEach(n=>{n.formName===l&&(e=n)}),e}addFormItem(l){const n=this.getFormsList();n.push(l),this.setFormsList(n)}removeFormItem(l){let n=this.getFormsList();n=n.filter(n=>n.formName!==l),this.setFormsList(n)}addDymmyToFormList(){const l=[new L({name:"Nested level 1",label:"Nested level 1",elements:[new M({type:"text",name:"L 1",label:"L 1"}),new L({name:"Nested level 2",label:"Nested level 2",elements:[new M({type:"text",name:"L 2",label:"L 2"})]})]})];this.addFormItem({formName:"Nested arrays",elements:l})}}var T=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;border:1px solid #ddd;border-radius:5px;padding:30px 15px}h2[_ngcontent-%COMP%]{margin:0 0 30px}h3[_ngcontent-%COMP%]{margin:15px 0}.control[_ngcontent-%COMP%]{border:1px solid #ddd;border-radius:5px;padding:15px}.control-unit[_ngcontent-%COMP%]:not(:last-of-type), .control[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:15px}.control-title[_ngcontent-%COMP%]{display:block;margin-bottom:5px}.control-data-item[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:10px}.button[_ngcontent-%COMP%]{margin-top:15px}.error[_ngcontent-%COMP%]{display:block;padding-top:2px;color:#f44;font-size:13px}.ng-touched.ng-invalid[_ngcontent-%COMP%]{border-color:#f44}.options[_ngcontent-%COMP%]{margin-top:10px}.option[_ngcontent-%COMP%]{margin-right:2px;margin-bottom:2px;border:1px solid #ddd;border-radius:5px;padding:3px 7px}.submit[_ngcontent-%COMP%]{padding:10px 20px;width:100%;text-transform:uppercase;letter-spacing:.5px}"]],data:{}});function V(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-form",[],null,[[null,"onSubmit"]],function(l,n,e){var t=!0;return"onSubmit"===n&&(t=!1!==l.component.addItemToList(e)&&t),t},R,I)),t["\u0275did"](1,638976,null,0,x,[s],{item:[0,"item"]},{onSubmit:"onSubmit"})],function(l,n){l(n,1,0,n.component.creatorItem)},null)}function D(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Creator"])),(l()(),t["\u0275and"](16777216,null,null,1,null,V)),t["\u0275did"](3,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,3,0,n.component.creatorItem)},null)}var E=e("Hg4z");class q{constructor(l){this.formsListService=l,this.onItemSelect=new t.EventEmitter,this.list=[],this.item=null}ngOnInit(){this.formsListService.formsList$.pipe(Object(E.a)(this)).subscribe(l=>{this.list=l,this.currentName||this.selectInitialFormItem()})}ngOnDestroy(){}selectInitialFormItem(){this.list.length&&this.selectFormItem(this.list[0].formName)}selectFormItem(l){l!==this.currentName&&(this.item=this.formsListService.getFormItem(l),this.item&&(this.currentName=l,this.onItemSelect.emit(this.item)))}removeFormItem(l){this.formsListService.removeFormItem(l)}addDummyForm(){this.formsListService.addDymmyToFormList()}clearFormsList(){this.formsListService.clearFormsList()}}var $=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}h3[_ngcontent-%COMP%]{margin:15px 0}.forms-list-buttons[_ngcontent-%COMP%]{margin-top:15px}.forms-list-button[_ngcontent-%COMP%]{margin:0 5px 5px 0}.item[_ngcontent-%COMP%]{display:flex;align-items:center;border:1px solid #ddd;border-radius:5px;padding:5px 5px 5px 15px}.item.active[_ngcontent-%COMP%]{border-color:#4285f4}.item[_ngcontent-%COMP%]:not(:last-child){margin-bottom:5px}.item-title[_ngcontent-%COMP%]{flex-grow:1;margin:0 15px 0 0}.item-button[_ngcontent-%COMP%]{margin-left:5px}"]],data:{}});function A(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,9,"div",[["class","item"]],null,null,null,null,null)),t["\u0275prd"](512,null,r["\u0275NgClassImpl"],r["\u0275NgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](2,278528,null,0,r.NgClass,[r["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275pod"](3,{active:0}),(l()(),t["\u0275eld"](4,0,null,null,1,"h4",[["class","item-title"]],null,null,null,null,null)),(l()(),t["\u0275ted"](5,null,["",""])),(l()(),t["\u0275eld"](6,0,null,null,1,"button",[["class","item-button"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.selectFormItem(l.context.$implicit.formName)&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["Select"])),(l()(),t["\u0275eld"](8,0,null,null,1,"button",[["class","item-button"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.removeFormItem(l.context.$implicit.formName)&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["Remove"]))],function(l,n){var e=l(n,3,0,n.context.$implicit.formName===n.component.currentName);l(n,2,0,"item",e)},function(l,n){l(n,5,0,n.context.$implicit.formName)})}function j(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Forms list"])),(l()(),t["\u0275eld"](2,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,2,"div",[["class","forms-list"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,A)),t["\u0275did"](5,278528,null,0,r.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](6,0,null,null,2,"div",[["class","forms-list-buttons"]],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,1,"button",[["class","forms-list-button"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.addDummyForm()&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["Add dummy form"]))],function(l,n){l(n,5,0,n.component.list)},null)}class U{constructor(){}selectItem(l){this.selectedItem=l}}var z=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;border:1px solid #ddd;border-radius:5px;padding:30px 15px}h2[_ngcontent-%COMP%]{margin:0 0 30px}"]],data:{}});function J(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-form",[],null,null,null,R,I)),t["\u0275did"](1,638976,null,0,x,[s],{item:[0,"item"]},null)],function(l,n){l(n,1,0,n.component.selectedItem)},null)}function G(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Dashboard"])),(l()(),t["\u0275eld"](2,0,null,null,1,"app-forms-list",[],null,[[null,"onItemSelect"]],function(l,n,e){var t=!0;return"onItemSelect"===n&&(t=!1!==l.component.selectItem(e)&&t),t},j,$)),t["\u0275did"](3,245760,null,0,q,[k],null,{onItemSelect:"onItemSelect"}),(l()(),t["\u0275and"](16777216,null,null,1,null,J)),t["\u0275did"](5,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,3,0),l(n,5,0,e.selectedItem)},null)}class B{constructor(){}}var H=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;padding:0 0 60px}"]],data:{}});function K(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,9,"div",[["class","container"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Form creator"])),(l()(),t["\u0275eld"](3,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,2,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,1,"app-creator",[],null,null,null,D,T)),t["\u0275did"](6,49152,null,0,P,[k],null,null),(l()(),t["\u0275eld"](7,0,null,null,2,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,1,"app-dashboard",[],null,null,null,G,z)),t["\u0275did"](9,49152,null,0,U,[],null,null)],null,null)}function Q(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-form-creator-container",[],null,null,null,K,H)),t["\u0275did"](1,49152,null,0,B,[],null,null)],null,null)}var Z=t["\u0275ccf"]("app-form-creator-container",B,Q,{},{},[]),W=e("Mc5n"),X=e("hOhj"),Y=e("POq0"),ll=e("QQfA"),nl=e("IP0z"),el=e("JjoW"),tl=e("iInd");class ul{}var ol=e("Xd0L"),il=e("cUpR"),rl=e("/HVE"),al=e("Fwaw"),sl=e("HsOI"),dl=e("zMNK"),ml=e("PCNd");e.d(n,"FormCreatorModuleNgFactory",function(){return cl});var cl=t["\u0275cmf"](u,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,Z]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,r.NgLocalization,r.NgLocaleLocalization,[t.LOCALE_ID,[2,r["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,i.g,i.g,[]),t["\u0275mpd"](4608,i.B,i.B,[]),t["\u0275mpd"](4608,W.f,W.f,[r.DOCUMENT,t.NgZone,X.d,W.h]),t["\u0275mpd"](4608,Y.a,Y.a,[]),t["\u0275mpd"](4608,ll.a,ll.a,[ll.f,ll.b,t.ComponentFactoryResolver,ll.e,ll.c,t.Injector,t.NgZone,r.DOCUMENT,nl.b,[2,r.Location]]),t["\u0275mpd"](5120,ll.g,ll.h,[ll.a]),t["\u0275mpd"](5120,el.a,el.b,[ll.a]),t["\u0275mpd"](4608,k,k,[]),t["\u0275mpd"](4608,s,s,[]),t["\u0275mpd"](1073742336,r.CommonModule,r.CommonModule,[]),t["\u0275mpd"](1073742336,tl.o,tl.o,[[2,tl.t],[2,tl.k]]),t["\u0275mpd"](1073742336,ul,ul,[]),t["\u0275mpd"](1073742336,i.A,i.A,[]),t["\u0275mpd"](1073742336,i.w,i.w,[]),t["\u0275mpd"](1073742336,W.g,W.g,[]),t["\u0275mpd"](1073742336,nl.a,nl.a,[]),t["\u0275mpd"](1073742336,ol.c,ol.c,[[2,ol.a],[2,il.f]]),t["\u0275mpd"](1073742336,rl.b,rl.b,[]),t["\u0275mpd"](1073742336,ol.g,ol.g,[]),t["\u0275mpd"](1073742336,al.c,al.c,[]),t["\u0275mpd"](1073742336,Y.b,Y.b,[]),t["\u0275mpd"](1073742336,sl.a,sl.a,[]),t["\u0275mpd"](1073742336,dl.b,dl.b,[]),t["\u0275mpd"](1073742336,X.b,X.b,[]),t["\u0275mpd"](1073742336,ll.d,ll.d,[]),t["\u0275mpd"](1073742336,ol.e,ol.e,[]),t["\u0275mpd"](1073742336,ol.d,ol.d,[]),t["\u0275mpd"](1073742336,el.c,el.c,[]),t["\u0275mpd"](1073742336,ml.a,ml.a,[]),t["\u0275mpd"](1073742336,u,u,[]),t["\u0275mpd"](1024,tl.i,function(){return[[{path:"",component:B}]]},[])])})}}]);