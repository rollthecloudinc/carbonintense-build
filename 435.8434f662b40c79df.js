(self.webpackChunkspear=self.webpackChunkspear||[]).push([[435],{464:(R,S)=>{function o(s){return s.replace(/[-[\]/{}()*+?.\\^$]/g,"\\$&")}function N(s,c){var f=(void 0===c?{}:c).decimalMark,h=void 0===f?".":f;if("number"==typeof s)return s.toString();if("string"!=typeof s)return"NaN";var m=o(h),p=s.trim(),w=p.match(/^\(.*\)$|^-/),_=new RegExp("[^\\d"+m+"]|"+m+"(?=.*"+m+")|^\\D*"+m+"\\D*$","g");return""===(p=p.replace(_,"").replace(h,"."))?p="NaN":w&&(p="-"+p),p}S.He=void 0,S.He=function P(s,c){var f=(void 0===c?{}:c).decimalMark,m=N(s,{decimalMark:void 0===f?".":f});return"NaN"===m?NaN:Number(m)}},2435:(R,S,u)=>{u.r(S),u.d(S,{AsyncApiCallHelperService:()=>g,DynamicContentViewer:()=>m,EMBEDDABLE_COMPONENT:()=>c,ForDirective:()=>w,HOST_NAME:()=>f,ModuleLoaderService:()=>D,MyAsyncTaskProcessor:()=>v,NoopDataService:()=>C,NotAvailablePipe:()=>s,NumeralPipe:()=>A,PROTOCOL:()=>h,SITE_NAME:()=>d,StyleLoaderService:()=>M,UtilsModule:()=>_,ZoneMacroTaskWrapper:()=>l});var o=u(2207),N=u(702),P=u(464),k=u(3336),b=u(745);let A=(()=>{class t{transform(e,n){if(void 0!==e&&""!==e)return(0,P.He)(`${e}`)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=o.\u0275\u0275definePipe({name:"numeral",type:t,pure:!0}),t})(),s=(()=>{class t{transform(e,n){return e&&""!==e?e:n}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=o.\u0275\u0275definePipe({name:"na",type:t,pure:!0}),t})();const c=new o.InjectionToken("EmbeddableComponent"),d=new o.InjectionToken("Site Name"),f=new o.InjectionToken("Host Name"),h=new o.InjectionToken("Request Protocol");let m=(()=>{class t{constructor(e,n,a,i){this.injector=i,this.embeddedComponentFactories=new Map,this.embeddedComponents=[],this.docRendered=new o.EventEmitter,this.hostElement=n.nativeElement,a.forEach(y=>{const E=e.resolveComponentFactory(y);this.embeddedComponentFactories.set(E.selector,E)})}set content(e){this.ngOnDestroy(),e&&(this.build(e),this.docRendered.emit())}build(e){this.hostElement.innerHTML=e||"",e&&this.embeddedComponentFactories.forEach((n,a)=>{this.hostElement.querySelectorAll(a).forEach(y=>{const E=[Array.prototype.slice.call(y.childNodes)],I=n.create(this.injector,E,y);for(const x of y.attributes)I.instance[x.nodeName]=x.nodeValue;this.embeddedComponents.push(I)})})}ngDoCheck(){this.embeddedComponents.forEach(e=>e.changeDetectorRef.detectChanges())}ngOnDestroy(){this.embeddedComponents.forEach(e=>e.destroy()),this.embeddedComponents.length=0}}return t.\u0275fac=function(e){return new(e||t)(o.\u0275\u0275directiveInject(o.ComponentFactoryResolver),o.\u0275\u0275directiveInject(o.ElementRef),o.\u0275\u0275directiveInject(c),o.\u0275\u0275directiveInject(o.Injector))},t.\u0275cmp=o.\u0275\u0275defineComponent({type:t,selectors:[["classifieds-ui-dynamic-content-viewer"]],inputs:{data:"data",content:"content"},outputs:{docRendered:"docRendered"},decls:0,vars:0,template:function(e,n){},encapsulation:2}),t})();class p{constructor(r,e){this.index=r,this.length=e}get even(){return this.index%2==0}get odd(){return this.index%2==1}get first(){return 0===this.index}get last(){return this.index===this.length-1}}let w=(()=>{class t{constructor(e,n){this.templateRef=e,this.viewContainer=n}set loop(e){this.viewContainer.clear();for(var n=0;n<e;n++)this.viewContainer.createEmbeddedView(this.templateRef,new p(n,e))}}return t.\u0275fac=function(e){return new(e||t)(o.\u0275\u0275directiveInject(o.TemplateRef),o.\u0275\u0275directiveInject(o.ViewContainerRef))},t.\u0275dir=o.\u0275\u0275defineDirective({type:t,selectors:[["","for","",5,"label"]],inputs:{loop:["for","loop"]}}),t})(),_=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=o.\u0275\u0275defineInjector({imports:[[N.CommonModule]]}),t})(),D=(()=>{class t{constructor(e,n){this.compiler=e,this.injector=n,this.loadedModules=[]}loadModule(e){return new k.y(n=>{e().then(a=>{if(-1!==this.loadedModules.indexOf(i=>i==a.name))throw"";return this.loadedModules.push(a.name),a}).then(a=>this.compiler.compileModuleAndAllComponentsAsync(a)).then(a=>{a.ngModuleFactory.create(this.injector),n.next(!0),n.complete()}).catch(()=>{n.next(!0),n.complete()})})}}return t.\u0275fac=function(e){return new(e||t)(o.\u0275\u0275inject(o.Compiler),o.\u0275\u0275inject(o.Injector))},t.\u0275prov=o.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),M=(()=>{class t{constructor(e){this.document=e}loadStyle(e){const n=this.document.getElementsByTagName("head")[0];let a=this.document.getElementById("client-theme");if(a)a.href=e;else{const i=this.document.createElement("link");i.id="client-theme",i.rel="stylesheet",i.href=`${e}`,n.appendChild(i)}}}return t.\u0275fac=function(e){return new(e||t)(o.\u0275\u0275inject(N.DOCUMENT))},t.\u0275prov=o.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();class C{constructor(r){this.entities=new Map,this.name=r}add(r){return(0,b.of)(r)}delete(r){return this.entities.delete(r),(0,b.of)(r)}getAll(){const r=[];return this.entities.forEach(e=>{r.push(e)}),(0,b.of)(r)}getById(r){return(0,b.of)(this.entities.get(r))}getWithQuery(r){const e=[];return this.entities.forEach(n=>{e.push(n)}),(0,b.of)(e)}update(r){return(0,b.of)(void 0)}upsert(r){return(0,b.of)(r)}}let g=(()=>{class t{constructor(){this.taskProcessor=new v}doTask(e){return this.taskProcessor.doTask(e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();class l{wrap(r){return new k.y(e=>{let n,a=!1,i=null,y=null,E=null;return(O=>{n=O,a=!0,i=this.delegate(r).subscribe(j=>y=j,j=>{if(!a)throw new Error("An http observable was completed twice. This shouldn't happen, please file a bug.");E=j,a=!1,n.invoke()},()=>{if(!a)throw new Error("An http observable was completed twice. This shouldn't happen, please file a bug.");a=!1,n.invoke()})})(Zone.current.scheduleMacroTask("ZoneMacroTaskWrapper.subscribe",()=>{null!==E?e.error(E):(e.next(y),e.complete())},{},()=>null,O=>{!a||(a=!1,i&&(i.unsubscribe(),i=null))})),()=>{a&&n&&(n.zone.cancelTask(n),a=!1),i&&(i.unsubscribe(),i=null)}})}}class v extends l{constructor(){super()}doTask(r){return this.wrap(r)}delegate(r){return new k.y(e=>{r.then(n=>{e.next(n),e.complete()}).catch(n=>e.error(n))})}}}}]);
//# sourceMappingURL=435.8434f662b40c79df.js.map