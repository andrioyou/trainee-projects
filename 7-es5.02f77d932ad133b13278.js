(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{NoaW:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),i=function(){return function(){}}(),o=e("pMnS"),r=e("Ip0R"),u=function(){return function(){}}(),d=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;text-align:center}"]],data:{}});function a(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,0,"img",[["alt","Image"]],[[8,"src",4]],null,null,null,null))],null,function(n,l){n(l,0,0,t["\u0275inlineInterpolate"](1,"",l.component.imgUrl,""))})}function c(n){return t["\u0275vid"](2,[(n()(),t["\u0275and"](16777216,null,null,1,null,a)),t["\u0275did"](1,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,1,0,l.component.imgUrl)},null)}var s=function(){return function(){}}(),p=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}.info[_ngcontent-%COMP%]{margin:30px 0 10px}.desc[_ngcontent-%COMP%]{margin:0 0 30px}"]],data:{}});function g(n){return t["\u0275vid"](2,[(n()(),t["\u0275eld"](0,0,null,null,1,"h4",[["class","info"]],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,["Picture "," of ",""])),(n()(),t["\u0275eld"](2,0,null,null,1,"p",[["class","desc"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Place the letters from the bottom line to top line in the right order"]))],null,function(n,l){var e=l.component;n(l,1,0,e.active,e.length)})}var f=e("9Bt9"),m=e("Fzqc"),h=function(){function n(){this.solved=new t.EventEmitter,this.randomLettersList=[],this.correctLettersList=[]}return n.prototype.ngOnInit=function(){this.initLetters()},n.prototype.ngOnChanges=function(n){n.word&&this.initLetters()},n.prototype.initLetters=function(){this.correctLettersList=[],this.randomLettersList=this.shuffleArray(this.word.split(""))},n.prototype.drop=function(n){n.previousContainer===n.container?Object(f.i)(n.container.data,n.previousIndex,n.currentIndex):Object(f.j)(n.previousContainer.data,n.container.data,n.previousIndex,n.currentIndex),this.checkResult()},n.prototype.checkResult=function(){this.correctLettersList.join("")===this.word&&this.solved.emit()},n.prototype.shuffleArray=function(n){for(var l,e,t=n.length;0!==t;)e=Math.floor(Math.random()*t),l=n[t-=1],n[t]=n[e],n[e]=l;return n},n}(),b=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;margin-top:30px}.list-wrap[_ngcontent-%COMP%]:not(:last-child){margin-bottom:30px}.example-list[_ngcontent-%COMP%]{display:flex;flex-direction:row;border:1px solid #ddd;border-radius:4px;background:#fff;width:1000px;max-width:100%;min-height:60px;overflow:hidden}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.example-list.correct[_ngcontent-%COMP%]{border-color:#aaa}.example-box[_ngcontent-%COMP%]{display:flex;flex-basis:0;flex-direction:row;flex-grow:1;align-items:center;justify-content:center;border-right:1px solid #ddd;background:#fff;cursor:move;padding:15px 5px;text-align:center;text-transform:uppercase;color:rgba(0,0,0,.87);font-size:20px}.example-box[_ngcontent-%COMP%]:last-child{border:0}.cdk-drag-preview[_ngcontent-%COMP%]{border-radius:4px;box-shadow:0 0 5px 0 rgba(0,0,0,.2)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}"]],data:{}});function v(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,16777216,null,null,6,"div",[["cdkDrag",""],["class","example-box cdk-drag"]],[[2,"cdk-drag-disabled",null],[2,"cdk-drag-dragging",null]],null,null,null,null)),t["\u0275prd"](6144,null,f.k,null,[f.c]),t["\u0275did"](2,4866048,[[1,4]],3,f.c,[t.ElementRef,[3,f.b],r.DOCUMENT,t.NgZone,t.ViewContainerRef,f.a,[2,m.b],f.f,t.ChangeDetectorRef],null,null),t["\u0275qud"](603979776,2,{_handles:1}),t["\u0275qud"](603979776,3,{_previewTemplate:0}),t["\u0275qud"](603979776,4,{_placeholderTemplate:0}),(n()(),t["\u0275ted"](6,null,["",""])),(n()(),t["\u0275and"](0,null,null,0))],null,function(n,l){n(l,0,0,t["\u0275nov"](l,2).disabled,t["\u0275nov"](l,2)._dragRef.isDragging()),n(l,6,0,l.context.$implicit)})}function x(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,16777216,null,null,6,"div",[["cdkDrag",""],["class","example-box cdk-drag"]],[[2,"cdk-drag-disabled",null],[2,"cdk-drag-dragging",null]],null,null,null,null)),t["\u0275prd"](6144,null,f.k,null,[f.c]),t["\u0275did"](2,4866048,[[5,4]],3,f.c,[t.ElementRef,[3,f.b],r.DOCUMENT,t.NgZone,t.ViewContainerRef,f.a,[2,m.b],f.f,t.ChangeDetectorRef],null,null),t["\u0275qud"](603979776,6,{_handles:1}),t["\u0275qud"](603979776,7,{_previewTemplate:0}),t["\u0275qud"](603979776,8,{_placeholderTemplate:0}),(n()(),t["\u0275ted"](6,null,["",""])),(n()(),t["\u0275and"](0,null,null,0))],null,function(n,l){n(l,0,0,t["\u0275nov"](l,2).disabled,t["\u0275nov"](l,2)._dragRef.isDragging()),n(l,6,0,l.context.$implicit)})}function w(n){return t["\u0275vid"](2,[(n()(),t["\u0275eld"](0,0,null,null,7,"div",[["class","list-wrap"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,6,"div",[["cdkDropList",""],["cdkDropListOrientation","horizontal"],["class","example-list correct cdk-drop-list"]],[[8,"id",0],[2,"cdk-drop-list-disabled",null],[2,"cdk-drop-list-dragging",null],[2,"cdk-drop-list-receiving",null]],[[null,"cdkDropListDropped"]],function(n,l,e){var t=!0;return"cdkDropListDropped"===l&&(t=!1!==n.component.drop(e)&&t),t},null,null)),t["\u0275prd"](6144,null,f.b,null,[f.d]),t["\u0275did"](3,1196032,[["todoList",4]],1,f.d,[t.ElementRef,f.f,t.ChangeDetectorRef,[2,m.b],[3,f.e]],{data:[0,"data"],orientation:[1,"orientation"]},{dropped:"cdkDropListDropped"}),t["\u0275qud"](603979776,1,{_draggables:1}),t["\u0275prd"](256,null,f.e,void 0,[]),(n()(),t["\u0275and"](16777216,null,null,1,null,v)),t["\u0275did"](7,278528,null,0,r.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275eld"](8,0,null,null,8,"div",[["class","list-wrap"]],null,null,null,null,null)),(n()(),t["\u0275eld"](9,0,null,null,7,"div",[["cdkDropList",""],["cdkDropListOrientation","horizontal"],["class","example-list cdk-drop-list"]],[[8,"id",0],[2,"cdk-drop-list-disabled",null],[2,"cdk-drop-list-dragging",null],[2,"cdk-drop-list-receiving",null]],[[null,"cdkDropListDropped"]],function(n,l,e){var t=!0;return"cdkDropListDropped"===l&&(t=!1!==n.component.drop(e)&&t),t},null,null)),t["\u0275prd"](6144,null,f.b,null,[f.d]),t["\u0275did"](11,1196032,[["randomLetters",4]],1,f.d,[t.ElementRef,f.f,t.ChangeDetectorRef,[2,m.b],[3,f.e]],{connectedTo:[0,"connectedTo"],data:[1,"data"],orientation:[2,"orientation"]},{dropped:"cdkDropListDropped"}),t["\u0275qud"](603979776,5,{_draggables:1}),t["\u0275pad"](13,1),t["\u0275prd"](256,null,f.e,void 0,[]),(n()(),t["\u0275and"](16777216,null,null,1,null,x)),t["\u0275did"](16,278528,null,0,r.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var e=l.component;n(l,3,0,e.correctLettersList,"horizontal"),n(l,7,0,e.correctLettersList);var i=n(l,13,0,t["\u0275nov"](l,3));n(l,11,0,i,e.randomLettersList,"horizontal"),n(l,16,0,e.randomLettersList)},function(n,l){n(l,1,0,t["\u0275nov"](l,3).id,t["\u0275nov"](l,3).disabled,t["\u0275nov"](l,3)._dropListRef.isDragging(),t["\u0275nov"](l,3)._dropListRef.isReceiving()),n(l,9,0,t["\u0275nov"](l,11).id,t["\u0275nov"](l,11).disabled,t["\u0275nov"](l,11)._dropListRef.isDragging(),t["\u0275nov"](l,11)._dropListRef.isReceiving())})}var k=e("bujt"),C=e("UodH"),L=e("lLAP"),_=e("wFw1"),R=[{imgUrl:"https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/-kq_4ZhbQv2X7dy8_AjlHA.jpg",word:"car"},{imgUrl:"https://pmcvariety.files.wordpress.com/2018/07/bradybunchhouse_sc11.jpg",word:"house"},{imgUrl:"https://www.virginexperiencedays.co.uk/content/img/product/large/PHELCI_01.jpg",word:"helicopter"}],I=function(){function n(){this.title="Guess picture name",this.pictures=R,this.currentIndex=0,this.isWin=!1}return n.prototype.nextPicture=function(){this.currentIndex+1<this.pictures.length?this.currentIndex++:this.complete()},n.prototype.complete=function(){this.isWin=!0,this.title="\u0421ongratulations! you won!"},n.prototype.restart=function(){this.isWin=!1,this.title="Guess picture name",this.currentIndex=0},n}(),y=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;padding:30px 0 60px}.title[_ngcontent-%COMP%]{margin:0 0 30px;text-align:center;text-transform:uppercase;letter-spacing:2px;font-size:30px}.button-holder[_ngcontent-%COMP%]{text-align:center}"]],data:{}});function O(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,6,"div",[["class","content-holder"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"app-image",[],null,null,null,c,d)),t["\u0275did"](2,49152,null,0,u,[],{imgUrl:[0,"imgUrl"]},null),(n()(),t["\u0275eld"](3,0,null,null,1,"app-info",[],null,null,null,g,p)),t["\u0275did"](4,49152,null,0,s,[],{active:[0,"active"],length:[1,"length"]},null),(n()(),t["\u0275eld"](5,0,null,null,1,"app-letters",[],null,[[null,"solved"]],function(n,l,e){var t=!0;return"solved"===l&&(t=!1!==n.component.nextPicture(e)&&t),t},w,b)),t["\u0275did"](6,638976,null,0,h,[],{word:[0,"word"]},{solved:"solved"})],function(n,l){var e=l.component;n(l,2,0,e.pictures[e.currentIndex].imgUrl),n(l,4,0,e.currentIndex+1,e.pictures.length),n(l,6,0,e.pictures[e.currentIndex].word)},null)}function D(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"div",[["class","button-holder"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,2,"button",[["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.restart()&&t),t},k.b,k.a)),t["\u0275did"](2,180224,null,0,C.b,[t.ElementRef,L.b,[2,_.a]],null,null),(n()(),t["\u0275ted"](-1,0,["Restart"]))],null,function(n,l){n(l,1,0,t["\u0275nov"](l,2).disabled||null,"NoopAnimations"===t["\u0275nov"](l,2)._animationMode)})}function M(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,6,"div",[["class","content"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"h3",[["class","title"]],null,null,null,null,null)),(n()(),t["\u0275ted"](2,null,["",""])),(n()(),t["\u0275and"](16777216,null,null,1,null,O)),t["\u0275did"](4,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,D)),t["\u0275did"](6,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,4,0,e.pictures[e.currentIndex]&&!e.isWin),n(l,6,0,e.isWin)},function(n,l){n(l,2,0,l.component.title)})}function P(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Sorry, there is no pictures"]))],null,null)}function N(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,6,"div",[["class","container"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,5,"div",[["class","row justify-content-center"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,4,"div",[["class","col-xl-8 col-lg-10"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,M)),t["\u0275did"](4,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,P)),t["\u0275did"](6,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,4,0,e.pictures.length),n(l,6,0,!e.pictures.length)},null)}function z(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-guess-window",[],null,null,null,N,y)),t["\u0275did"](1,49152,null,0,I,[],null,null)],null,null)}var T=t["\u0275ccf"]("app-guess-window",I,z,{},{},[]),j=e("t68o"),F=e("f1NG"),E=e("gIcY"),U=e("qAlS"),q=e("M2Lx"),A=e("eDkP"),V=e("uGex"),W=e("o3x0"),Z=e("ZYCi"),G=function(){return function(){}}(),S=e("Wf4p"),B=e("ZYjt"),H=e("dWZg"),Y=e("seP3"),J=e("4c35"),$=e("FVSy"),Q=e("PCNd");e.d(l,"GuessPictureNameModuleNgFactory",function(){return X});var X=t["\u0275cmf"](i,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,T,j.a,F.a]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,r.NgLocalization,r.NgLocaleLocalization,[t.LOCALE_ID,[2,r["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,E.g,E.g,[]),t["\u0275mpd"](4608,E.B,E.B,[]),t["\u0275mpd"](4608,f.f,f.f,[r.DOCUMENT,t.NgZone,U.d,f.h]),t["\u0275mpd"](4608,q.a,q.a,[]),t["\u0275mpd"](4608,A.a,A.a,[A.g,A.c,t.ComponentFactoryResolver,A.f,A.d,t.Injector,t.NgZone,r.DOCUMENT,m.b,[2,r.Location]]),t["\u0275mpd"](5120,A.h,A.i,[A.a]),t["\u0275mpd"](5120,V.a,V.b,[A.a]),t["\u0275mpd"](5120,W.c,W.d,[A.a]),t["\u0275mpd"](135680,W.e,W.e,[A.a,t.Injector,[2,r.Location],[2,W.b],W.c,[3,W.e],A.c]),t["\u0275mpd"](1073742336,r.CommonModule,r.CommonModule,[]),t["\u0275mpd"](1073742336,Z.o,Z.o,[[2,Z.t],[2,Z.k]]),t["\u0275mpd"](1073742336,G,G,[]),t["\u0275mpd"](1073742336,E.A,E.A,[]),t["\u0275mpd"](1073742336,E.w,E.w,[]),t["\u0275mpd"](1073742336,m.a,m.a,[]),t["\u0275mpd"](1073742336,S.c,S.c,[[2,S.a],[2,B.f]]),t["\u0275mpd"](1073742336,H.b,H.b,[]),t["\u0275mpd"](1073742336,S.g,S.g,[]),t["\u0275mpd"](1073742336,C.c,C.c,[]),t["\u0275mpd"](1073742336,f.g,f.g,[]),t["\u0275mpd"](1073742336,q.b,q.b,[]),t["\u0275mpd"](1073742336,Y.a,Y.a,[]),t["\u0275mpd"](1073742336,J.f,J.f,[]),t["\u0275mpd"](1073742336,U.b,U.b,[]),t["\u0275mpd"](1073742336,A.e,A.e,[]),t["\u0275mpd"](1073742336,S.e,S.e,[]),t["\u0275mpd"](1073742336,S.d,S.d,[]),t["\u0275mpd"](1073742336,V.c,V.c,[]),t["\u0275mpd"](1073742336,W.k,W.k,[]),t["\u0275mpd"](1073742336,$.d,$.d,[]),t["\u0275mpd"](1073742336,Q.a,Q.a,[]),t["\u0275mpd"](1073742336,i,i,[]),t["\u0275mpd"](1024,Z.i,function(){return[[{path:"",component:I}]]},[])])})}}]);