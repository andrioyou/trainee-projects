(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{NoaW:function(n,t,e){"use strict";e.r(t);var l=e("8Y7J");class o{}var i=e("pMnS"),r=e("SVse");class a{}var u=l["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;text-align:center}"]],data:{}});function d(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,0,"img",[["alt","Image"]],[[8,"src",4]],null,null,null,null))],null,function(n,t){n(t,0,0,l["\u0275inlineInterpolate"](1,"",t.component.imgUrl,""))})}function s(n){return l["\u0275vid"](0,[(n()(),l["\u0275and"](16777216,null,null,1,null,d)),l["\u0275did"](1,16384,null,0,r.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,t){n(t,1,0,t.component.imgUrl)},null)}class c{constructor(){}}var p=l["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}.info[_ngcontent-%COMP%]{margin:30px 0 10px}.desc[_ngcontent-%COMP%]{margin:0 0 30px}"]],data:{}});function m(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"h4",[["class","info"]],null,null,null,null,null)),(n()(),l["\u0275ted"](1,null,["Picture "," of ",""])),(n()(),l["\u0275eld"](2,0,null,null,1,"p",[["class","desc"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Place the letters from the bottom line to top line in the right order"]))],null,function(n,t){var e=t.component;n(t,1,0,e.active,e.length)})}var b=e("Mc5n"),f=e("IP0z");class g{constructor(){this.solved=new l.EventEmitter,this.randomLettersList=[],this.correctLettersList=[]}ngOnInit(){this.initLetters()}ngOnChanges(n){n.word&&this.initLetters()}initLetters(){this.correctLettersList=[],this.randomLettersList=this.shuffleArray(this.word.split(""))}drop(n){n.previousContainer===n.container?Object(b.i)(n.container.data,n.previousIndex,n.currentIndex):Object(b.j)(n.previousContainer.data,n.container.data,n.previousIndex,n.currentIndex),this.checkResult()}checkResult(){this.correctLettersList.join("")===this.word&&this.solved.emit()}shuffleArray(n){let t,e,l=n.length;for(;0!==l;)e=Math.floor(Math.random()*l),t=n[l-=1],n[l]=n[e],n[e]=t;return n}}var h=l["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;margin-top:30px}.list-wrap[_ngcontent-%COMP%]:not(:last-child){margin-bottom:30px}.example-list[_ngcontent-%COMP%]{display:flex;flex-direction:row;border:1px solid #ddd;border-radius:4px;background:#fff;width:1000px;max-width:100%;min-height:60px;overflow:hidden}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.example-list.correct[_ngcontent-%COMP%]{border-color:#aaa}.example-box[_ngcontent-%COMP%]{display:flex;flex-basis:0;flex-direction:row;flex-grow:1;align-items:center;justify-content:center;border-right:1px solid #ddd;background:#fff;cursor:move;padding:15px 5px;text-align:center;text-transform:uppercase;color:rgba(0,0,0,.87);font-size:20px}.example-box[_ngcontent-%COMP%]:last-child{border:0}.cdk-drag-preview[_ngcontent-%COMP%]{border-radius:4px;box-shadow:0 0 5px 0 rgba(0,0,0,.2)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}"]],data:{}});function v(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,16777216,null,null,6,"div",[["cdkDrag",""],["class","example-box cdk-drag"]],[[2,"cdk-drag-disabled",null],[2,"cdk-drag-dragging",null]],null,null,null,null)),l["\u0275prd"](6144,null,b.k,null,[b.c]),l["\u0275did"](2,4866048,[[1,4]],3,b.c,[l.ElementRef,[3,b.b],r.DOCUMENT,l.NgZone,l.ViewContainerRef,b.a,[2,f.b],b.f,l.ChangeDetectorRef],null,null),l["\u0275qud"](603979776,2,{_handles:1}),l["\u0275qud"](603979776,3,{_previewTemplate:0}),l["\u0275qud"](603979776,4,{_placeholderTemplate:0}),(n()(),l["\u0275ted"](6,null,["",""])),(n()(),l["\u0275and"](0,null,null,0))],null,function(n,t){n(t,0,0,l["\u0275nov"](t,2).disabled,l["\u0275nov"](t,2)._dragRef.isDragging()),n(t,6,0,t.context.$implicit)})}function x(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,16777216,null,null,6,"div",[["cdkDrag",""],["class","example-box cdk-drag"]],[[2,"cdk-drag-disabled",null],[2,"cdk-drag-dragging",null]],null,null,null,null)),l["\u0275prd"](6144,null,b.k,null,[b.c]),l["\u0275did"](2,4866048,[[5,4]],3,b.c,[l.ElementRef,[3,b.b],r.DOCUMENT,l.NgZone,l.ViewContainerRef,b.a,[2,f.b],b.f,l.ChangeDetectorRef],null,null),l["\u0275qud"](603979776,6,{_handles:1}),l["\u0275qud"](603979776,7,{_previewTemplate:0}),l["\u0275qud"](603979776,8,{_placeholderTemplate:0}),(n()(),l["\u0275ted"](6,null,["",""])),(n()(),l["\u0275and"](0,null,null,0))],null,function(n,t){n(t,0,0,l["\u0275nov"](t,2).disabled,l["\u0275nov"](t,2)._dragRef.isDragging()),n(t,6,0,t.context.$implicit)})}function k(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,7,"div",[["class","list-wrap"]],null,null,null,null,null)),(n()(),l["\u0275eld"](1,0,null,null,6,"div",[["cdkDropList",""],["cdkDropListOrientation","horizontal"],["class","example-list correct cdk-drop-list"]],[[8,"id",0],[2,"cdk-drop-list-disabled",null],[2,"cdk-drop-list-dragging",null],[2,"cdk-drop-list-receiving",null]],[[null,"cdkDropListDropped"]],function(n,t,e){var l=!0;return"cdkDropListDropped"===t&&(l=!1!==n.component.drop(e)&&l),l},null,null)),l["\u0275prd"](6144,null,b.b,null,[b.d]),l["\u0275did"](3,1196032,[["todoList",4]],1,b.d,[l.ElementRef,b.f,l.ChangeDetectorRef,[2,f.b],[3,b.e]],{data:[0,"data"],orientation:[1,"orientation"]},{dropped:"cdkDropListDropped"}),l["\u0275qud"](603979776,1,{_draggables:1}),l["\u0275prd"](256,null,b.e,void 0,[]),(n()(),l["\u0275and"](16777216,null,null,1,null,v)),l["\u0275did"](7,278528,null,0,r.NgForOf,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),l["\u0275eld"](8,0,null,null,8,"div",[["class","list-wrap"]],null,null,null,null,null)),(n()(),l["\u0275eld"](9,0,null,null,7,"div",[["cdkDropList",""],["cdkDropListOrientation","horizontal"],["class","example-list cdk-drop-list"]],[[8,"id",0],[2,"cdk-drop-list-disabled",null],[2,"cdk-drop-list-dragging",null],[2,"cdk-drop-list-receiving",null]],[[null,"cdkDropListDropped"]],function(n,t,e){var l=!0;return"cdkDropListDropped"===t&&(l=!1!==n.component.drop(e)&&l),l},null,null)),l["\u0275prd"](6144,null,b.b,null,[b.d]),l["\u0275did"](11,1196032,[["randomLetters",4]],1,b.d,[l.ElementRef,b.f,l.ChangeDetectorRef,[2,f.b],[3,b.e]],{connectedTo:[0,"connectedTo"],data:[1,"data"],orientation:[2,"orientation"]},{dropped:"cdkDropListDropped"}),l["\u0275qud"](603979776,5,{_draggables:1}),l["\u0275pad"](13,1),l["\u0275prd"](256,null,b.e,void 0,[]),(n()(),l["\u0275and"](16777216,null,null,1,null,x)),l["\u0275did"](16,278528,null,0,r.NgForOf,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,t){var e=t.component;n(t,3,0,e.correctLettersList,"horizontal"),n(t,7,0,e.correctLettersList);var o=n(t,13,0,l["\u0275nov"](t,3));n(t,11,0,o,e.randomLettersList,"horizontal"),n(t,16,0,e.randomLettersList)},function(n,t){n(t,1,0,l["\u0275nov"](t,3).id,l["\u0275nov"](t,3).disabled,l["\u0275nov"](t,3)._dropListRef.isDragging(),l["\u0275nov"](t,3)._dropListRef.isReceiving()),n(t,9,0,l["\u0275nov"](t,11).id,l["\u0275nov"](t,11).disabled,l["\u0275nov"](t,11)._dropListRef.isDragging(),l["\u0275nov"](t,11)._dropListRef.isReceiving())})}var w=e("Fwaw"),y=e("Xd0L"),z=e("cUpR"),C=e("/HVE"),_=e("omvX"),L=e("5GAg"),R=l["\u0275crt"]({encapsulation:2,styles:[".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media (hover:none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-flat-button,.mat-icon-button,.mat-stroked-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-flat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-focus-overlay,.mat-stroked-button .mat-button-ripple.mat-ripple{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button-focus-overlay,.mat-button-ripple.mat-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}@media (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:#fff}}@media (-ms-high-contrast:black-on-white){.mat-button-focus-overlay{background-color:#000}}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}@media (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"],data:{}});function I(n){return l["\u0275vid"](2,[l["\u0275qud"](671088640,1,{ripple:0}),(n()(),l["\u0275eld"](1,0,null,null,1,"span",[["class","mat-button-wrapper"]],null,null,null,null,null)),l["\u0275ncd"](null,0),(n()(),l["\u0275eld"](3,0,null,null,1,"div",[["class","mat-button-ripple mat-ripple"],["matRipple",""]],[[2,"mat-button-ripple-round",null],[2,"mat-ripple-unbounded",null]],null,null,null,null)),l["\u0275did"](4,212992,[[1,4]],0,y.f,[l.ElementRef,l.NgZone,C.a,[2,y.b],[2,_.a]],{centered:[0,"centered"],disabled:[1,"disabled"],trigger:[2,"trigger"]},null),(n()(),l["\u0275eld"](5,0,null,null,0,"div",[["class","mat-button-focus-overlay"]],null,null,null,null,null))],function(n,t){var e=t.component;n(t,4,0,e.isIconButton,e._isRippleDisabled(),e._getHostElement())},function(n,t){var e=t.component;n(t,3,0,e.isRoundButton||e.isIconButton,l["\u0275nov"](t,4).unbounded)})}const O=[{imgUrl:"https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/-kq_4ZhbQv2X7dy8_AjlHA.jpg",word:"car"},{imgUrl:"https://pmcvariety.files.wordpress.com/2018/07/bradybunchhouse_sc11.jpg",word:"house"},{imgUrl:"https://www.virginexperiencedays.co.uk/content/img/product/large/PHELCI_01.jpg",word:"helicopter"}];class D{constructor(){this.title="Guess picture name",this.pictures=O,this.currentIndex=0,this.isWin=!1}ngOnInit(){}nextPicture(){this.currentIndex+1<this.pictures.length?this.currentIndex++:this.complete()}complete(){this.isWin=!0,this.title="\u0421ongratulations! you won!"}restart(){this.isWin=!1,this.title="Guess picture name",this.currentIndex=0}}var M=l["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;padding:30px 0 60px}.title[_ngcontent-%COMP%]{margin:0 0 30px;text-align:center;text-transform:uppercase;letter-spacing:2px;font-size:30px}.button-holder[_ngcontent-%COMP%]{text-align:center}"]],data:{}});function P(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,6,"div",[["class","content-holder"]],null,null,null,null,null)),(n()(),l["\u0275eld"](1,0,null,null,1,"app-image",[],null,null,null,s,u)),l["\u0275did"](2,49152,null,0,a,[],{imgUrl:[0,"imgUrl"]},null),(n()(),l["\u0275eld"](3,0,null,null,1,"app-info",[],null,null,null,m,p)),l["\u0275did"](4,49152,null,0,c,[],{active:[0,"active"],length:[1,"length"]},null),(n()(),l["\u0275eld"](5,0,null,null,1,"app-letters",[],null,[[null,"solved"]],function(n,t,e){var l=!0;return"solved"===t&&(l=!1!==n.component.nextPicture(e)&&l),l},k,h)),l["\u0275did"](6,638976,null,0,g,[],{word:[0,"word"]},{solved:"solved"})],function(n,t){var e=t.component;n(t,2,0,e.pictures[e.currentIndex].imgUrl),n(t,4,0,e.currentIndex+1,e.pictures.length),n(t,6,0,e.pictures[e.currentIndex].word)},null)}function N(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,3,"div",[["class","button-holder"]],null,null,null,null,null)),(n()(),l["\u0275eld"](1,0,null,null,2,"button",[["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.restart()&&l),l},I,R)),l["\u0275did"](2,180224,null,0,w.b,[l.ElementRef,L.b,[2,_.a]],null,null),(n()(),l["\u0275ted"](-1,0,["Restart"]))],null,function(n,t){n(t,1,0,l["\u0275nov"](t,2).disabled||null,"NoopAnimations"===l["\u0275nov"](t,2)._animationMode)})}function T(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,6,"div",[["class","content"]],null,null,null,null,null)),(n()(),l["\u0275eld"](1,0,null,null,1,"h3",[["class","title"]],null,null,null,null,null)),(n()(),l["\u0275ted"](2,null,["",""])),(n()(),l["\u0275and"](16777216,null,null,1,null,P)),l["\u0275did"](4,16384,null,0,r.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275and"](16777216,null,null,1,null,N)),l["\u0275did"](6,16384,null,0,r.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,t){var e=t.component;n(t,4,0,e.pictures[e.currentIndex]&&!e.isWin),n(t,6,0,e.isWin)},function(n,t){n(t,2,0,t.component.title)})}function E(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Sorry, there is no pictures"]))],null,null)}function j(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,6,"div",[["class","container"]],null,null,null,null,null)),(n()(),l["\u0275eld"](1,0,null,null,5,"div",[["class","row justify-content-center"]],null,null,null,null,null)),(n()(),l["\u0275eld"](2,0,null,null,4,"div",[["class","col-xl-8 col-lg-10"]],null,null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,1,null,T)),l["\u0275did"](4,16384,null,0,r.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275and"](16777216,null,null,1,null,E)),l["\u0275did"](6,16384,null,0,r.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,t){var e=t.component;n(t,4,0,e.pictures.length),n(t,6,0,!e.pictures.length)},null)}function F(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"app-guess-window",[],null,null,null,j,M)),l["\u0275did"](1,114688,null,0,D,[],null,null)],function(n,t){n(t,1,0)},null)}var U=l["\u0275ccf"]("app-guess-window",D,F,{},{},[]),q=e("s7LF"),V=e("hOhj"),A=e("POq0"),W=e("QQfA"),Z=e("JjoW"),B=e("iInd");class H{}var G=e("HsOI"),J=e("zMNK"),Q=e("PCNd");e.d(t,"GuessPictureNameModuleNgFactory",function(){return S});var S=l["\u0275cmf"](o,[],function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,U]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,r.NgLocalization,r.NgLocaleLocalization,[l.LOCALE_ID,[2,r["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,q.g,q.g,[]),l["\u0275mpd"](4608,q.B,q.B,[]),l["\u0275mpd"](4608,b.f,b.f,[r.DOCUMENT,l.NgZone,V.d,b.h]),l["\u0275mpd"](4608,A.a,A.a,[]),l["\u0275mpd"](4608,W.a,W.a,[W.f,W.b,l.ComponentFactoryResolver,W.e,W.c,l.Injector,l.NgZone,r.DOCUMENT,f.b,[2,r.Location]]),l["\u0275mpd"](5120,W.g,W.h,[W.a]),l["\u0275mpd"](5120,Z.a,Z.b,[W.a]),l["\u0275mpd"](1073742336,r.CommonModule,r.CommonModule,[]),l["\u0275mpd"](1073742336,B.o,B.o,[[2,B.t],[2,B.k]]),l["\u0275mpd"](1073742336,H,H,[]),l["\u0275mpd"](1073742336,q.A,q.A,[]),l["\u0275mpd"](1073742336,q.w,q.w,[]),l["\u0275mpd"](1073742336,b.g,b.g,[]),l["\u0275mpd"](1073742336,f.a,f.a,[]),l["\u0275mpd"](1073742336,y.c,y.c,[[2,y.a],[2,z.f]]),l["\u0275mpd"](1073742336,C.b,C.b,[]),l["\u0275mpd"](1073742336,y.g,y.g,[]),l["\u0275mpd"](1073742336,w.c,w.c,[]),l["\u0275mpd"](1073742336,A.b,A.b,[]),l["\u0275mpd"](1073742336,G.a,G.a,[]),l["\u0275mpd"](1073742336,J.b,J.b,[]),l["\u0275mpd"](1073742336,V.b,V.b,[]),l["\u0275mpd"](1073742336,W.d,W.d,[]),l["\u0275mpd"](1073742336,y.e,y.e,[]),l["\u0275mpd"](1073742336,y.d,y.d,[]),l["\u0275mpd"](1073742336,Z.c,Z.c,[]),l["\u0275mpd"](1073742336,Q.a,Q.a,[]),l["\u0275mpd"](1073742336,o,o,[]),l["\u0275mpd"](1024,B.i,function(){return[[{path:"",component:D}]]},[])])})}}]);