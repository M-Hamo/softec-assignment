"use strict";(self.webpackChunksoftec_assignment=self.webpackChunksoftec_assignment||[]).push([[155],{7155:(vt,b,i)=>{i.r(b),i.d(b,{ProductsModule:()=>ht});var d=i(6895),f=i(9299),I=i(7579),J=i(2076),x=i(5698),S=i(9300),p=i(8505),U=i(4351),v=i(2722),N=i(8372),Y=i(3900),H=i(2618),c=i(2289),m=i(4469),u=i(4006),P=i(5938),t=i(4650),C=i(9549),k=i(4144),O=i(9891);function R(e,r){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"This field is required"),t.qZA())}let A=(()=>{class e{constructor(n,o){this.data=n,this._dialogRef=o,this.quantityField=new u.NI(null,{nonNullable:!0,validators:u.kI.required}),this.submitLoading=!1,this.onSubmitUpdate=()=>{this.submitLoading=!0,setTimeout(()=>{this.quantityField.valid&&this.cancelHandler({...this.data.product,AvailablePieces:this.quantityField?.value}),this.submitLoading=!1},1e3)},this.cancelHandler=s=>this._dialogRef.close(s??null)}ngOnInit(){this.quantityField.patchValue(this.data.product?.AvailablePieces)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(P.WI),t.Y36(P.so))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-edit-product-quantity"]],decls:6,vars:4,consts:[["submitBtnText","Update","title","Update quantity","titleIcon","shopping_basket","cancelBtnText","cancel",3,"isValid","isLoading","submitDialog","closeDialog","cancelDialog"],["appearance","outline",1,"w-full"],["matInput","","type","number",3,"formControl"],[4,"ngIf"]],template:function(n,o){1&n&&(t.TgZ(0,"app-dialog",0),t.NdJ("submitDialog",function(){return o.onSubmitUpdate()})("closeDialog",function(){return o.cancelHandler()})("cancelDialog",function(){return o.cancelHandler()}),t.TgZ(1,"mat-form-field",1)(2,"mat-label"),t._uU(3,"Quantity"),t.qZA(),t._UZ(4,"input",2),t.YNc(5,R,2,0,"mat-error",3),t.qZA()()),2&n&&(t.Q6J("isValid",null==o.quantityField?null:o.quantityField.valid)("isLoading",o.submitLoading),t.xp6(4),t.Q6J("formControl",o.quantityField),t.xp6(1),t.Q6J("ngIf",(null==o.quantityField?null:o.quantityField.touched)&&(null==o.quantityField?null:o.quantityField.invalid)))},dependencies:[d.O5,u.Fj,u.wV,u.JJ,u.oH,C.TO,C.KE,C.hX,k.Nt,O.a]}),e})();var _=i(6223),$=i(4130),Z=i(1406),w=i(1884),z=i(1135);let X=(()=>{class e{constructor(n){this._breakpointObserver=n,this._currentBreakpoint=new z.X(c.u3.Small),this.currentBreakpoint$=this._currentBreakpoint.asObservable(),this.Breakpoints=c.u3,this._breakpointObserver.observe([c.u3.XLarge,c.u3.Large,c.u3.Medium,c.u3.Small,c.u3.XSmall,"(min-width: 500px)"]).pipe((0,p.b)(o=>this._breakpointChanged()),(0,w.x)()).subscribe()}_breakpointChanged(){this._breakpointObserver.isMatched(c.u3.XLarge)&&this._currentBreakpoint.next(c.u3.XLarge),this._breakpointObserver.isMatched(c.u3.Large)?this._currentBreakpoint.next(c.u3.Large):this._breakpointObserver.isMatched(c.u3.Medium)?this._currentBreakpoint.next(c.u3.Medium):this._breakpointObserver.isMatched(c.u3.Small)?this._currentBreakpoint.next(c.u3.Small):this._breakpointObserver.isMatched(c.u3.XSmall)?this._currentBreakpoint.next(c.u3.XSmall):this._breakpointObserver.isMatched("(min-width: 500px)")&&this._currentBreakpoint.next("(min-width: 500px)")}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(c.Yg))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var D=i(7185),q=i(7932),L=i(3546),y=i(7331),G=i(7392),j=i(266),M=i(1578),Q=i(846),K=i(1954),F=i(6782);function V(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"app-button",5),t.NdJ("click",function(s){t.CHM(n);const l=t.oxw();return l.onEditProduct.emit(l.product),t.KtG(s.stopPropagation())}),t.qZA()}if(2&e){const n=t.oxw();t.Q6J("matType",n.ButtonTypes.icon)}}const W=function(e,r){return{"few-quantities":e,"selected-product":r}};let B=(()=>{class e{constructor(){this.onEditProduct=new t.vpe,this.ButtonTypes=_.qh}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-product"]],inputs:{product:"product",productSelected:"productSelected"},outputs:{onEditProduct:"onEditProduct"},decls:8,vars:11,consts:[[1,"product-container",3,"ngClass"],["class","edit-btn","icon","edit",3,"matType","click",4,"ngIf"],[3,"src","alt"],[1,"product-name"],[1,"product-price"],["icon","edit",1,"edit-btn",3,"matType","click"]],template:function(n,o){1&n&&(t.TgZ(0,"mat-card",0),t.YNc(1,V,1,1,"app-button",1),t._UZ(2,"img",2),t.TgZ(3,"div",3),t._uU(4),t.qZA(),t.TgZ(5,"div",4),t._uU(6),t.ALo(7,"currency"),t.qZA()()),2&n&&(t.Q6J("ngClass",t.WLB(8,W,(null==o.product?null:o.product.AvailablePieces)<=5,o.productSelected)),t.xp6(1),t.Q6J("ngIf",(null==o.product?null:o.product.AvailablePieces)<=5),t.xp6(1),t.Q6J("src",null==o.product?null:o.product.ProductImg,t.LSH)("alt",null==o.product?null:o.product.ProductName),t.xp6(2),t.Oqu(null==o.product?null:o.product.ProductName),t.xp6(2),t.Oqu(t.lcZ(7,6,null==o.product?null:o.product.ProductPrice)))},dependencies:[d.mk,d.O5,L.a8,Q.r,d.H9],styles:[".product-container[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;justify-content:space-between;align-items:stretch;gap:3px;padding:0;overflow:hidden}.product-container[_ngcontent-%COMP%]:hover{cursor:pointer}.product-container[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%], .product-container[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%]{text-align:center;font-size:large;font-weight:500}.product-container[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%]{position:absolute;left:10px;top:10px}.few-quantities[_ngcontent-%COMP%]{border:2px solid red}.selected-product[_ngcontent-%COMP%]{border:2px solid rgb(23,165,23)}"]}),e})();function tt(e,r){1&e&&(t.TgZ(0,"h6",9),t._uU(1," Selected products will show here. "),t.TgZ(2,"sub"),t._uU(3,"(Click on the product to select)"),t.qZA()())}function et(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"mat-chip",14),t.NdJ("removed",function(){const l=t.CHM(n).$implicit,h=t.oxw(3);return t.KtG(h.onSelectProduct(l))}),t._uU(1),t.TgZ(2,"button",15)(3,"mat-icon"),t._uU(4,"cancel"),t.qZA()()()}if(2&e){const n=r.$implicit;t.xp6(1),t.hij(" ",null==n?null:n.ProductName," ")}}function nt(e,r){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"mat-chip-list",9),t.YNc(2,et,5,1,"mat-chip",10),t.qZA(),t.TgZ(3,"div",11)(4,"app-button",12),t.NdJ("clicked",function(){t.CHM(n);const s=t.oxw(2);return t.KtG(s.onCreateOrder())}),t.qZA(),t.TgZ(5,"app-button",13),t.NdJ("clicked",function(){t.CHM(n);const s=t.oxw(2);return t.KtG(s.resetSelectedProducts())}),t.qZA()(),t.BQk()}if(2&e){const n=t.oxw().ngIf,o=t.oxw();t.xp6(2),t.Q6J("ngForOf",n),t.xp6(2),t.Q6J("matType",o.ButtonTypes.round_stroked)("color",o.ButtonColors.primary),t.xp6(1),t.Q6J("color",o.ButtonColors.warn)("matType",o.ButtonTypes.miniFap)}}function ot(e,r){if(1&e&&(t.ynx(0),t.YNc(1,tt,4,0,"h6",8),t.YNc(2,nt,6,5,"ng-container",4),t.BQk()),2&e){const n=r.ngIf;t.xp6(1),t.Q6J("ngIf",0===n.length),t.xp6(1),t.Q6J("ngIf",n.length)}}function it(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"app-product",17),t.NdJ("onEditProduct",function(s){t.CHM(n);const l=t.oxw(3);return t.KtG(l.onEditProductQuantity(s))})("click",function(){const l=t.CHM(n).$implicit,h=t.oxw(3);return t.KtG(h.onSelectProduct(l))}),t.qZA()}if(2&e){const n=r.$implicit,o=t.oxw(3);t.Q6J("matTooltip",null!=n&&n.selected?"Unselect":(null==n?null:n.AvailablePieces)<=5?"Edit quantity before select":"Select product")("matTooltipPosition",o.TooltipPositions.ABOVE)("product",n)("productSelected",null==n?null:n.selected)}}function rt(e,r){if(1&e&&(t.ynx(0),t.YNc(1,it,1,4,"app-product",16),t.BQk()),2&e){const n=t.oxw().ngIf;t.xp6(1),t.Q6J("ngForOf",n)}}function ct(e,r){if(1&e&&(t.ynx(0),t.YNc(1,rt,2,1,"ng-container",5),t.BQk()),2&e){const n=r.ngIf;t.oxw();const o=t.MAs(11);t.xp6(1),t.Q6J("ngIf",n.length>0)("ngIfElse",o)}}function st(e,r){1&e&&(t.TgZ(0,"mat-card",19),t._UZ(1,"shimmer-loading",20),t.qZA()),2&e&&(t.xp6(1),t.Q6J("loadingsCount",4))}const at=function(){return[1,2,3,4,5,6,7]};function lt(e,r){1&e&&t.YNc(0,st,2,1,"mat-card",18),2&e&&t.Q6J("ngForOf",t.DdM(1,at))}function ut(e,r){if(1&e&&(t.TgZ(0,"section",21),t._UZ(1,"no-data",22),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("text",n.searchInput.value?"No products matches this search input !!":"There is no products to show !!")}}let E=(()=>{class e{constructor(n,o,s,l,h,gt,ft,_t){this._fb=n,this._router=o,this._route=s,this._dialog=l,this._confirmService=h,this._breakpointObserver=gt,this._toasterService=ft,this._productsService=_t,this._destroyAll$=new I.x,this.products$=this._productsService.getFilteredProducts$,this.selectedProducts$=this._productsService.selectedProducts$,this.searchInput=this._fb.control(null),this.ButtonTypes=_.qh,this.ButtonColors=_.Tt,this.TooltipPositions=_.as,this.QUERY={SEARCH:"search"},this.screenSize="",this.onCreateOrder=()=>{this._dialog.open($.U,{width:this.screenSize===c.u3.Small||this.screenSize===c.u3.XSmall?m.Cg.X_LARGE:m.Cg.LARGE,height:m.VC.LARGE,hasBackdrop:!0,disableClose:!0,closeOnNavigation:!0,restoreFocus:!1})},this.onSelectProduct=a=>{a?.AvailablePieces>5?this._productsService.updateProduct({...a,selected:!a?.selected,Quantity:1}):this._toasterService.error("This product has very few quantity, You should update it and try to select again.")},this.resetSelectedProducts=()=>{this._confirmService.Confirm("Are you sure to Unselect all selected products ?","Are you sure ?","Reset","cancel").pipe((0,x.q)(1),(0,S.h)(a=>a),(0,p.b)(()=>this._productsService.resetSelectedProducts())).subscribe()},this.onEditProductQuantity=a=>{this._dialog.open(A,{width:this.screenSize===c.u3.Small||this.screenSize===c.u3.XSmall?m.Z0.FULL:m.Z0.SMALL,hasBackdrop:!0,disableClose:!0,closeOnNavigation:!0,restoreFocus:!1,data:{product:a}}).afterClosed().pipe((0,x.q)(1),(0,S.h)(T=>!!T),(0,U.b)(T=>this._showQuantityMessage(T))).subscribe()},this._showQuantityMessage=a=>this._confirmService.Confirm(`Are you sure to change ${a.ProductName} quantity `,"Are you sure ?","Update","cancel").pipe((0,p.b)(g=>{g&&(this._productsService.updateProduct(a),this._toasterService.success("Product updated successfully."))})),this._paramsChangeObserver=()=>{this._route.queryParamMap.pipe((0,p.b)(a=>{const g_search=H.T.search(a,this.QUERY.SEARCH);this.searchInput.patchValue(g_search),this._productsService.filterProducts.next(g_search)}),(0,v.R)(this._destroyAll$)).subscribe()},this._searchInputChangeObserver=()=>{this.searchInput.valueChanges.pipe((0,N.b)(500),(0,Y.w)(a=>(0,J.D)(this._router.navigate([],{queryParams:{[this.QUERY.SEARCH]:a||null},queryParamsHandling:"merge"}))),(0,v.R)(this._destroyAll$)).subscribe()},this._screenSizeHandler=()=>{this._breakpointObserver.currentBreakpoint$.pipe((0,p.b)(a=>this.screenSize=a),(0,v.R)(this._destroyAll$)).subscribe()}}ngOnInit(){this._screenSizeHandler(),this._paramsChangeObserver(),this._searchInputChangeObserver()}ngOnDestroy(){this._destroyAll$.next(void 0),this._destroyAll$.complete()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(u.qu),t.Y36(f.F0),t.Y36(f.gz),t.Y36(P.uw),t.Y36(Z.OX),t.Y36(X),t.Y36(D._W),t.Y36(q.s))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-product-list"]],decls:12,vars:8,consts:[[1,"page-container"],[1,"w-full","flex","justify-start","items-center"],["outlineOption","2.5px solid #d3d3d3","placeholder","Search...",1,"lg:w-1/2","w-full","sm:h-11","h-8",3,"formControl"],[1,"grid","lg:grid-cols-4","md:grid-cols-3","sm:grid-cols-2","grid-cols-1","content-start","gap-4"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["loader",""],["noData",""],["class","lg:col-span-4 md:col-span-3 sm:col-span-2 col-span-1 bg-slate-100 rounded p-2",4,"ngIf"],[1,"lg:col-span-4","md:col-span-3","sm:col-span-2","col-span-1","bg-slate-100","rounded","p-2"],[3,"removed",4,"ngFor","ngForOf"],[1,"lg:col-span-4","md:col-span-3","sm:col-span-2","col-span-1","flex-start"],["btnClass","bg-gray-600 outline-none text-white shadow-md","icon","shopping_cart_checkout","text","Create order",3,"matType","color","clicked"],["icon","restart_alt","toolTip","Reset selected state",1,"mx-3",3,"color","matType","clicked"],[3,"removed"],["matChipRemove",""],[3,"matTooltip","matTooltipPosition","product","productSelected","onEditProduct","click",4,"ngFor","ngForOf"],[3,"matTooltip","matTooltipPosition","product","productSelected","onEditProduct","click"],["class","m-0 p-0",4,"ngFor","ngForOf"],[1,"m-0","p-0"],[3,"loadingsCount"],[1,"lg:col-span-4","md:col-span-3","sm:col-span-2","col-span-1"],[3,"text"]],template:function(n,o){if(1&n&&(t.TgZ(0,"section",0)(1,"div",1),t._UZ(2,"magic-search-input",2),t.qZA(),t.TgZ(3,"div",3),t.YNc(4,ot,3,2,"ng-container",4),t.ALo(5,"async"),t.YNc(6,ct,2,2,"ng-container",5),t.ALo(7,"async"),t.qZA()(),t.YNc(8,lt,1,2,"ng-template",null,6,t.W1O),t.YNc(10,ut,2,1,"ng-template",null,7,t.W1O)),2&n){const s=t.MAs(9);t.xp6(2),t.Q6J("formControl",o.searchInput),t.xp6(2),t.Q6J("ngIf",t.lcZ(5,4,o.selectedProducts$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(7,6,o.products$))("ngIfElse",s)}},dependencies:[d.sg,d.O5,u.JJ,u.oH,L.a8,y.qn,y.HS,y.qH,G.Hw,j.gM,M.l,Q.r,K.d,F.U,B,d.Ov]}),e})();const dt=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:E}];let pt=(()=>{class e{}return e.Components=[E,B,A],e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[f.Bz.forChild(dt),f.Bz]}),e})();var mt=i(3120);let ht=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.ez,pt,mt.m,F.U,M.l,O.a,Z.QC]}),e})()}}]);