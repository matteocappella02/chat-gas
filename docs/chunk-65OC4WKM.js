import{$ as x,Aa as u,Ba as d,Ca as P,Da as pe,Ea as b,Fa as ge,Ga as me,Ha as _e,Ia as m,Ja as ve,K as L,Ka as ye,La as Ce,M as W,Ma as Ve,Na as Z,O as f,Oa as be,Qa as De,T as ce,U as $,V as p,Va as Me,Xa as Ae,Ya as N,Za as h,_ as de,_a as Y,a as l,aa as O,b as c,ba as he,ea as S,eb as we,fb as Ee,g as oe,gb as Fe,ha as q,hb as xe,j as ae,o as le,oa as g,pa as a,ra as z,t as ue,ta as I,ua as C,xa as Q,ya as V,za as fe}from"./chunk-443EG3PO.js";var Te=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(a(z),a(q))}}static{this.\u0275dir=p({type:i})}}return i})(),Je=(()=>{class i extends Te{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=he(i)))(r||i)}})()}static{this.\u0275dir=p({type:i,features:[C]})}}return i})(),Ge=new f("");var et={provide:Ge,useExisting:L(()=>j),multi:!0};function tt(){let i=Y()?Y().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var it=new f(""),j=(()=>{class i extends Te{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!tt())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(a(z),a(q),a(it,8))}}static{this.\u0275dir=p({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&b("input",function(o){return r._handleInput(o.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(o){return r._compositionEnd(o.target.value)})},features:[Z([et]),C]})}}return i})();var nt=new f(""),rt=new f("");function je(i){return i!=null}function Be(i){return De(i)?ae(i):i}function He(i){let e={};return i.forEach(t=>{e=t!=null?l(l({},e),t):e}),Object.keys(e).length===0?null:e}function Ue(i,e){return e.map(t=>t(i))}function st(i){return!i.validate}function Le(i){return i.map(e=>st(e)?e:t=>e.validate(t))}function ot(i){if(!i)return null;let e=i.filter(je);return e.length==0?null:function(t){return He(Ue(t,e))}}function We(i){return i!=null?ot(Le(i)):null}function at(i){if(!i)return null;let e=i.filter(je);return e.length==0?null:function(t){let n=Ue(t,e).map(Be);return ue(n).pipe(le(He))}}function $e(i){return i!=null?at(Le(i)):null}function Oe(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function lt(i){return i._rawValidators}function ut(i){return i._rawAsyncValidators}function K(i){return i?Array.isArray(i)?i:[i]:[]}function R(i,e){return Array.isArray(i)?i.includes(e):i===e}function Se(i,e){let t=K(e);return K(i).forEach(r=>{R(t,r)||t.push(r)}),t}function Ie(i,e){return K(e).filter(t=>!R(i,t))}var T=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=We(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=$e(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},X=class extends T{get formDirective(){return null}get path(){return null}},E=class extends T{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},J=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},ct={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ei=c(l({},ct),{"[class.ng-submitted]":"isSubmitted"}),qe=(()=>{class i extends J{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(a(E,2))}}static{this.\u0275dir=p({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&fe("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[C]})}}return i})();var D="VALID",k="INVALID",_="PENDING",M="DISABLED",y=class{},G=class extends y{constructor(e,t){super(),this.value=e,this.source=t}},A=class extends y{constructor(e,t){super(),this.pristine=e,this.source=t}},w=class extends y{constructor(e,t){super(),this.touched=e,this.source=t}},v=class extends y{constructor(e,t){super(),this.status=e,this.source=t}};function dt(i){return(B(i)?i.validators:i)||null}function ht(i){return Array.isArray(i)?We(i):i||null}function ft(i,e){return(B(e)?e.asyncValidators:i)||null}function pt(i){return Array.isArray(i)?$e(i):i||null}function B(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}var ee=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=N(()=>this.statusReactive()),this.statusReactive=I(void 0),this._pristine=N(()=>this.pristineReactive()),this.pristineReactive=I(!0),this._touched=N(()=>this.touchedReactive()),this.touchedReactive=I(!1),this._events=new oe,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return h(this.statusReactive)}set status(e){h(()=>this.statusReactive.set(e))}get valid(){return this.status===D}get invalid(){return this.status===k}get pending(){return this.status==_}get disabled(){return this.status===M}get enabled(){return this.status!==M}get pristine(){return h(this.pristineReactive)}set pristine(e){h(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return h(this.touchedReactive)}set touched(e){h(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Se(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Se(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ie(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ie(e,this._rawAsyncValidators))}hasValidator(e){return R(this._rawValidators,e)}hasAsyncValidator(e){return R(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(c(l({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new w(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new w(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(c(l({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new A(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new A(!0,n))}markAsPending(e={}){this.status=_;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new v(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(c(l({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=M,this.errors=null,this._forEachChild(r=>{r.disable(c(l({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new G(this.value,n)),this._events.next(new v(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(c(l({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=D,this._forEachChild(n=>{n.enable(c(l({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(c(l({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===D||this.status===_)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new G(this.value,t)),this._events.next(new v(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(c(l({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?M:D}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=_,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=Be(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new v(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new S,this.statusChanges=new S}_calculateStatus(){return this._allControlsDisabled()?M:this.errors?k:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(_)?_:this._anyControlsHaveStatus(k)?k:D}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new A(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new w(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){B(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=ht(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=pt(this._rawAsyncValidators)}};var ze=new f("CallSetDisabledState",{providedIn:"root",factory:()=>te}),te="always";function gt(i,e){return[...e.path,i]}function mt(i,e,t=te){vt(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),yt(i,e),Vt(i,e),Ct(i,e),_t(i,e)}function Pe(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function _t(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function vt(i,e){let t=lt(i);e.validator!==null?i.setValidators(Oe(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=ut(i);e.asyncValidator!==null?i.setAsyncValidators(Oe(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();Pe(e._rawValidators,r),Pe(e._rawAsyncValidators,r)}function yt(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Qe(i,e)})}function Ct(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Qe(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function Qe(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function Vt(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function bt(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function Dt(i){return Object.getPrototypeOf(i.constructor)===Je}function Mt(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(s=>{s.constructor===j?t=s:Dt(s)?n=s:r=s}),r||n||t||null}function Ne(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function ke(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var At=class extends ee{constructor(e=null,t,n){super(dt(t),ft(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),B(t)&&(t.nonNullable||t.initialValueIsDefault)&&(ke(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ne(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ne(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ke(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var wt={provide:E,useExisting:L(()=>ie)},Re=Promise.resolve(),ie=(()=>{class i extends E{constructor(t,n,r,s,o,F){super(),this._changeDetectorRef=o,this.callSetDisabledState=F,this.control=new At,this._registered=!1,this.name="",this.update=new S,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=Mt(this,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),bt(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){mt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Re.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,r=n!==0&&Ae(n);Re.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?gt(t,this._parent):[t]}static{this.\u0275fac=function(n){return new(n||i)(a(X,9),a(nt,10),a(rt,10),a(Ge,10),a(Me,8),a(ze,8))}}static{this.\u0275dir=p({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[Z([wt]),C,de]})}}return i})();var Et=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=$({type:i})}static{this.\u0275inj=W({})}}return i})();var Ze=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:ze,useValue:t.callSetDisabledState??te}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=$({type:i})}static{this.\u0275inj=W({imports:[Et]})}}return i})();var Ye=["Ciao, caro","Ciao, gira la plata?","Cazzu cazzu","Voti anche te quello che voto io?","Quando c'era lui....","Qualcuno vuole cazzeggiare con me?","Secondo me i consulenti andrebbero pisellati di pi\xF9..","E' fuckable?","Andiamo a dire qualche malignit\xE0 insieme","Goloooss","Ho bisogno di soldi","Plug and play","Nel nostro stabile si pratica prostituzione?","Ke uccellooo","Sei con bella gente?","Ci vuole pi\xF9 cultura del dato","Come sai... la discrezione \xE8 al di fuori del mio bouquet di qualit\xE0","Andiamo in figonia?","Facciamo un po' di gossip?","Sai che il mio inquilino ideale \xE8 bianco? Anglosassone protestante uomo eterosessuale di pure razza italiana che paga, ma possibilmente non sta mai in casa","Ti asfalto","Mau mau","Baluba","Il mio sogno \xE8 l'imposta regressiva...","Come mi vedi come navy seal?","Vuoi una foto?","Le performance dell'organo sono adeguate?","Sputa o ingoia?","A me l'inflazione non piace","Troppa seriet\xE0 e competenza alla lunga annoiano...","L'ozio \xE8 il padre di tutti i vizi...","Ma dove lo trovi un collega frizzante come me?","Caro facciamo l'aperitivo a Casal di Principe?","Ehi, biondo!","Dammi ragione","Volevo un po' di regressivit\xE0","Ciao caro, posso disturbarti per un'opportunit\xE0 per gli stakeholder ?","Ci sono le sgnakkere che fanno servizi a valore aggiunto?","Io sono preoccupato della minaccia nucleari iraniana. Volevo farmi installare uno scudo antimissile sotto casa. Secondo te riesco a scaricarlo con il 70% fiscale ?","A me lo stato dovrebbe mandare il balubba che mi stende il tappeto e i petali di Rosso e mi sventola il ventaglio (di piume di pavone)"];var xt=["chatHistoryContainer"];function Ot(i,e){i&1&&(u(0,"div",16),P(1,"img",17),d())}function St(i,e){if(i&1&&(u(0,"div",13),Q(1,Ot,2,0,"div",14),u(2,"span",15),m(3),d()()),i&2){let t=e.$implicit;V("ngClass",t.sender),g(),V("ngIf",t.sender==="bot"),g(2),ve(t.message)}}function It(i,e){i&1&&(u(0,"div",18)(1,"div",16),P(2,"img",17),d(),u(3,"span",19),m(4," ... "),d()())}var Ke=class i{chatHistoryContainer;userMessage="";chatHistory=[];isLoading=!1;botResponses=Ye;sendMessage(){if(this.userMessage.trim()!==""){this.chatHistory.push({message:this.userMessage,sender:"user"});let e=this.userMessage;this.userMessage="",this.isLoading=!0,setTimeout(()=>{let t=[];for(let s of this.botResponses){let o=this.cosineSimilarity(e,s);t.push({response:s,similarity:o})}t.sort((s,o)=>o.similarity-s.similarity);let n=t.map(s=>s.response).slice(0,4);console.log(n);let r=n[Math.floor(Math.random()*n.length)];this.chatHistory.push({message:r,sender:"bot"}),this.isLoading=!1,this.scrollToBottom()},1e3)}}scrollToBottom(){try{this.chatHistoryContainer.nativeElement.scrollTop=this.chatHistoryContainer.nativeElement.scrollHeight}catch(e){console.error("Errore durante lo scroll:",e)}}ngAfterViewChecked(){this.scrollToBottom()}tokenize(e){return e.toLowerCase().match(/\w+/g)||[]}getWordFrequency(e){let t=this.tokenize(e),n=new Map;for(let r of t)n.set(r,(n.get(r)||0)+1);return n}cosineSimilarity(e,t){let n=this.getWordFrequency(e),r=this.getWordFrequency(t),s=new Set([...n.keys(),...r.keys()]),o=0,F=0,ne=0;for(let se of s){let H=n.get(se)||0,U=r.get(se)||0;o+=H*U,F+=H*H,ne+=U*U}let re=Math.sqrt(F)*Math.sqrt(ne);return re===0?0:o/re}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=ce({type:i,selectors:[["app-chat"]],viewQuery:function(t,n){if(t&1&&ge(xt,5),t&2){let r;me(r=_e())&&(n.chatHistoryContainer=r.first)}},standalone:!0,features:[be],decls:17,vars:3,consts:[["chatHistoryContainer",""],[1,"chat-wrapper"],[1,"sidebar"],[1,"row"],["src","assets/giorgio_bot.png","alt","Bot Avatar",1,"logo"],[1,"footer"],[1,"chat-container"],[1,"chat-history"],[3,"ngClass",4,"ngFor","ngForOf"],["class","bot loading",4,"ngIf"],[1,"chat-input"],["placeholder","Scrivi qui il tuo messaggio...",3,"ngModelChange","keyup.enter","ngModel"],[1,"send-button",3,"click"],[3,"ngClass"],["class","avatar",4,"ngIf"],[1,"message-bubble"],[1,"avatar"],["src","assets/giorgio_bot.png","alt","Bot Avatar",1,"avatar-img"],[1,"bot","loading"],[1,"message-bubble","loading-dots"]],template:function(t,n){if(t&1){let r=pe();u(0,"div",1)(1,"div",2)(2,"div",3),P(3,"img",4),u(4,"p"),m(5,"Chat GAS"),d()(),u(6,"div",5),m(7," Coopyright by Donaldo "),d()(),u(8,"div",6)(9,"div",7,0),Q(11,St,4,3,"div",8)(12,It,5,0,"div",9),d(),u(13,"div",10)(14,"input",11),Ve("ngModelChange",function(o){return x(r),Ce(n.userMessage,o)||(n.userMessage=o),O(o)}),b("keyup.enter",function(){return x(r),O(n.sendMessage())}),d(),u(15,"button",12),b("click",function(){return x(r),O(n.sendMessage())}),m(16," \u27A4 "),d()()()()}t&2&&(g(11),V("ngForOf",n.chatHistory),g(),V("ngIf",n.isLoading),g(2),ye("ngModel",n.userMessage))},dependencies:[xe,we,Ee,Fe,Ze,j,qe,ie],styles:['@charset "UTF-8";.chat-wrapper[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;flex-direction:row}.sidebar[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;border-right:1px solid #ccc;height:100%;width:300px}.sidebar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:24px;font-weight:700}.sidebar[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.sidebar[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{padding:10px}.sidebar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border:3px solid #ccc;height:70px;margin:10px;width:55px}.chat-container[_ngcontent-%COMP%]{width:100%;border:1px solid #ccc;padding:10px;background-color:#f9f9f9;display:flex;flex-direction:column;height:100%}.chat-history[_ngcontent-%COMP%]{flex:1;overflow-y:scroll;padding:10px;border-bottom:1px solid #ccc;margin-bottom:10px;max-height:calc(100vh - 150px)}.chat-history[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-bottom:10px;display:flex;align-items:center}.user[_ngcontent-%COMP%]{justify-content:flex-end}.bot[_ngcontent-%COMP%]{justify-content:flex-start}.message-bubble[_ngcontent-%COMP%]{display:inline-block;padding:10px;border-radius:15px;position:relative;max-width:70%;word-wrap:break-word}.user[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;text-align:right;margin-right:10px}.user[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%]:after{content:"";position:absolute;top:50%;right:-10px;border-width:10px;border-style:solid;border-color:transparent transparent transparent #007bff;transform:translateY(-50%)}.bot[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%]{background-color:#e0e0e0;color:#000;text-align:left;margin-left:10px}.bot[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%]:after{content:"";position:absolute;top:50%;left:-10px;border-width:10px;border-style:solid;border-color:transparent #e0e0e0 transparent transparent;transform:translateY(-50%)}.avatar[_ngcontent-%COMP%]{margin-right:10px}.avatar-img[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;object-fit:cover}.loading-dots[_ngcontent-%COMP%]{font-size:24px;font-weight:700;color:#e0e0e0}@keyframes _ngcontent-%COMP%_blink{0%{opacity:1}33%{opacity:0}66%{opacity:1}}.loading-dots[_ngcontent-%COMP%]:after{content:"";animation:_ngcontent-%COMP%_blink 1.5s infinite}.chat-input[_ngcontent-%COMP%]{display:flex;gap:10px;padding:10px 0}.chat-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex:1;padding:10px;border-radius:4px;border:1px solid #ccc;width:calc(100% - 50px)}.send-button[_ngcontent-%COMP%]{padding:10px;background-color:transparent;border:none;cursor:pointer;font-size:24px;color:#007bff}.send-button[_ngcontent-%COMP%]:hover{color:#0056b3}@media (max-width: 768px){.chat-container[_ngcontent-%COMP%]{width:90%;height:100vh}.chat-history[_ngcontent-%COMP%]{max-height:calc(100vh - 120px)}.message-bubble[_ngcontent-%COMP%]{max-width:80%}.avatar-img[_ngcontent-%COMP%]{width:30px;height:30px}}@media (max-width: 480px){.sidebar[_ngcontent-%COMP%]{display:none}.chat-container[_ngcontent-%COMP%]{width:100%;padding:5px}.message-bubble[_ngcontent-%COMP%]{max-width:85%}.chat-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:8px;width:calc(100% - 40px)}.send-button[_ngcontent-%COMP%]{font-size:20px}}']})};export{Ke as ChatComponent};