(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-cont/app-cont.component.ts":
/*!************************************************!*\
  !*** ./src/app/app-cont/app-cont.component.ts ***!
  \************************************************/
/*! exports provided: AppContComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContComponent", function() { return AppContComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pop_card_list_pop_card_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pop-card-list/pop-card-list.component */ "./src/app/pop-card-list/pop-card-list.component.ts");
/* harmony import */ var _map_comp_map_comp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../map-comp/map-comp.component */ "./src/app/map-comp/map-comp.component.ts");




class AppContComponent {
    constructor() { }
    ngOnInit() {
    }
}
AppContComponent.ɵfac = function AppContComponent_Factory(t) { return new (t || AppContComponent)(); };
AppContComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppContComponent, selectors: [["app-app-cont"]], decls: 3, vars: 0, consts: [[1, "row"], [1, "col-12", "col-lg-4", "col-md-5"], ["id", "mapComp", 1, "col-12", "col-lg-8", "col-md-7"]], template: function AppContComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-pop-card-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-map-comp", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_pop_card_list_pop_card_list_component__WEBPACK_IMPORTED_MODULE_1__["PopCardListComponent"], _map_comp_map_comp_component__WEBPACK_IMPORTED_MODULE_2__["MapCompComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1jb250L2FwcC1jb250LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppContComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-app-cont',
                templateUrl: './app-cont.component.html',
                styleUrls: ['./app-cont.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_cont_app_cont_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-cont/app-cont.component */ "./src/app/app-cont/app-cont.component.ts");
/* harmony import */ var _startpage_main_restricted_startpage_main_restricted_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startpage-main-restricted/startpage-main-restricted.component */ "./src/app/startpage-main-restricted/startpage-main-restricted.component.ts");
/* harmony import */ var _startpage_plus_restricted_startpage_plus_restricted_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./startpage-plus-restricted/startpage-plus-restricted.component */ "./src/app/startpage-plus-restricted/startpage-plus-restricted.component.ts");







const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'map', component: _app_cont_app_cont_component__WEBPACK_IMPORTED_MODULE_2__["AppContComponent"] },
    { path: 'home', component: _startpage_main_restricted_startpage_main_restricted_component__WEBPACK_IMPORTED_MODULE_3__["StartpageMainRestrictedComponent"] },
    { path: 'plus', component: _startpage_plus_restricted_startpage_plus_restricted_component__WEBPACK_IMPORTED_MODULE_4__["StartpagePlusRestrictedComponent"] }
    // {path: 'home', component: StartpageMainComponent},
    // {path: 'plus', component: StartpagePlusComponent}
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _src_bar_src_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src-bar/src-bar.component */ "./src/app/src-bar/src-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'MotherShip2';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-src-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet", 0);
    } }, directives: [_src_bar_src_bar_component__WEBPACK_IMPORTED_MODULE_1__["SrcBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pop_card_temp_pop_card_temp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pop-card-temp/pop-card-temp.component */ "./src/app/pop-card-temp/pop-card-temp.component.ts");
/* harmony import */ var _pop_card_list_pop_card_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pop-card-list/pop-card-list.component */ "./src/app/pop-card-list/pop-card-list.component.ts");
/* harmony import */ var _map_comp_map_comp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map-comp/map-comp.component */ "./src/app/map-comp/map-comp.component.ts");
/* harmony import */ var _src_bar_src_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src-bar/src-bar.component */ "./src/app/src-bar/src-bar.component.ts");
/* harmony import */ var _app_cont_app_cont_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-cont/app-cont.component */ "./src/app/app-cont/app-cont.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./search.pipe */ "./src/app/search.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/search.service */ "./src/services/search.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _startpage_main_startpage_main_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./startpage-main/startpage-main.component */ "./src/app/startpage-main/startpage-main.component.ts");
/* harmony import */ var _startpage_plus_startpage_plus_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./startpage-plus/startpage-plus.component */ "./src/app/startpage-plus/startpage-plus.component.ts");
/* harmony import */ var _startpage_main_restricted_startpage_main_restricted_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./startpage-main-restricted/startpage-main-restricted.component */ "./src/app/startpage-main-restricted/startpage-main-restricted.component.ts");
/* harmony import */ var _startpage_plus_restricted_startpage_plus_restricted_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./startpage-plus-restricted/startpage-plus-restricted.component */ "./src/app/startpage-plus-restricted/startpage-plus-restricted.component.ts");

























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_search_service__WEBPACK_IMPORTED_MODULE_18__["default"],
        _search_pipe__WEBPACK_IMPORTED_MODULE_16__["SearchPipe"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__["CdkScrollableModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pop_card_temp_pop_card_temp_component__WEBPACK_IMPORTED_MODULE_4__["PopCardTempComponent"],
        _pop_card_list_pop_card_list_component__WEBPACK_IMPORTED_MODULE_5__["PopCardListComponent"],
        _map_comp_map_comp_component__WEBPACK_IMPORTED_MODULE_6__["MapCompComponent"],
        _src_bar_src_bar_component__WEBPACK_IMPORTED_MODULE_7__["SrcBarComponent"],
        _app_cont_app_cont_component__WEBPACK_IMPORTED_MODULE_8__["AppContComponent"],
        _search_pipe__WEBPACK_IMPORTED_MODULE_16__["SearchPipe"],
        _startpage_main_startpage_main_component__WEBPACK_IMPORTED_MODULE_20__["StartpageMainComponent"],
        _startpage_plus_startpage_plus_component__WEBPACK_IMPORTED_MODULE_21__["StartpagePlusComponent"],
        _startpage_main_restricted_startpage_main_restricted_component__WEBPACK_IMPORTED_MODULE_22__["StartpageMainRestrictedComponent"],
        _startpage_plus_restricted_startpage_plus_restricted_component__WEBPACK_IMPORTED_MODULE_23__["StartpagePlusRestrictedComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__["CdkScrollableModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pop_card_temp_pop_card_temp_component__WEBPACK_IMPORTED_MODULE_4__["PopCardTempComponent"],
                    _pop_card_list_pop_card_list_component__WEBPACK_IMPORTED_MODULE_5__["PopCardListComponent"],
                    _map_comp_map_comp_component__WEBPACK_IMPORTED_MODULE_6__["MapCompComponent"],
                    _src_bar_src_bar_component__WEBPACK_IMPORTED_MODULE_7__["SrcBarComponent"],
                    _app_cont_app_cont_component__WEBPACK_IMPORTED_MODULE_8__["AppContComponent"],
                    _search_pipe__WEBPACK_IMPORTED_MODULE_16__["SearchPipe"],
                    _startpage_main_startpage_main_component__WEBPACK_IMPORTED_MODULE_20__["StartpageMainComponent"],
                    _startpage_plus_startpage_plus_component__WEBPACK_IMPORTED_MODULE_21__["StartpagePlusComponent"],
                    _startpage_main_restricted_startpage_main_restricted_component__WEBPACK_IMPORTED_MODULE_22__["StartpageMainRestrictedComponent"],
                    _startpage_plus_restricted_startpage_plus_restricted_component__WEBPACK_IMPORTED_MODULE_23__["StartpagePlusRestrictedComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__["CdkScrollableModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"]
                ],
                providers: [
                    _services_search_service__WEBPACK_IMPORTED_MODULE_18__["default"],
                    _search_pipe__WEBPACK_IMPORTED_MODULE_16__["SearchPipe"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/get-card-info.service.ts":
/*!******************************************!*\
  !*** ./src/app/get-card-info.service.ts ***!
  \******************************************/
/*! exports provided: GetCardInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCardInfoService", function() { return GetCardInfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class GetCardInfoService {
    constructor(http) {
        this.http = http;
        this.peopleData = '';
    }
    getPeopleData() {
        return this.http.get(this.peopleData, { responseType: 'json' });
    }
}
GetCardInfoService.ɵfac = function GetCardInfoService_Factory(t) { return new (t || GetCardInfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GetCardInfoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GetCardInfoService, factory: GetCardInfoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetCardInfoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/map-comp/map-comp.component.ts":
/*!************************************************!*\
  !*** ./src/app/map-comp/map-comp.component.ts ***!
  \************************************************/
/*! exports provided: MapCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapCompComponent", function() { return MapCompComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/search.service */ "./src/services/search.service.ts");
/* harmony import */ var _get_card_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../get-card-info.service */ "./src/app/get-card-info.service.ts");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search.pipe */ "./src/app/search.pipe.ts");






class MapCompComponent {
    constructor(card, searchService, searchPipe) {
        this.card = card;
        this.searchService = searchService;
        this.searchPipe = searchPipe;
    }
    ngOnInit() {
    }
    clickMap(event) {
        const idAttr = event.target.id;
        console.log(idAttr);
        if (idAttr !== 'W0' && idAttr !== 'W1' && idAttr !== 'W2') {
            this.searchService.mainSearchBar = event.target.id;
            jquery__WEBPACK_IMPORTED_MODULE_1__('input[name=\'room\']').click();
            console.log('que ça marche!');
            document.getElementById('mainSearchBar').focus();
            const addclass = 'highlightMap';
            const $cols = jquery__WEBPACK_IMPORTED_MODULE_1__('.mapItem').click(function (e) {
                $cols.removeClass(addclass);
                jquery__WEBPACK_IMPORTED_MODULE_1__(this).addClass(addclass);
            });
        }
        else {
            console.log('il ny as rien');
        }
    }
}
MapCompComponent.ɵfac = function MapCompComponent_Factory(t) { return new (t || MapCompComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_get_card_info_service__WEBPACK_IMPORTED_MODULE_3__["GetCardInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_search_service__WEBPACK_IMPORTED_MODULE_2__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_search_pipe__WEBPACK_IMPORTED_MODULE_4__["SearchPipe"])); };
MapCompComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapCompComponent, selectors: [["app-map-comp"]], decls: 334, vars: 0, consts: [["role", "tablist", 1, "nav", "nav-tabs", "nav-fill"], [1, "nav-item"], ["id", "floor0-tab", "data-toggle", "tab", "href", "#floor0", "role", "tab", "aria-controls", "floor0", "aria-selected", "true", 1, "nav-link", "active"], ["id", "floor1-tab", "data-toggle", "tab", "href", "#floor1", "role", "tab", "aria-controls", "floor1", "aria-selected", "false", 1, "nav-link"], ["id", "floor2-tab", "data-toggle", "tab", "href", "#floor2", "role", "tab", "aria-controls", "floor2", "aria-selected", "false", 1, "nav-link"], ["id", "myTabContent", 1, "tab-content", "scrollboxMap"], ["id", "floor0", "role", "tabpanel", "aria-labelledby", "floor0-tab", 1, "tab-pane", "show", "active"], [1, "spacer-2"], [1, "row", "justify-content-center"], [1, "col-1"], [1, "col-10", "align-items-center"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 717 566", "width", "1em", "height", "1em"], ["id", "W0", "x", "173.5", "y", "472.5", "width", "84", "height", "93", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W0", "points", "262.5 565.5 312.5 565.5 311.5 472.5 262.5 472.5 262.5 565.5", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W0", "x", "316.5", "y", "472.5", "width", "70", "height", "93", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W0", "points", "391.5 565.5 440.5 565.5 440.5 472.5 390.5 472.5 391.5 565.5", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W0", "x", "445.5", "y", "472.5", "width", "44", "height", "93", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W0", "x", "494.5", "y", "442.5", "width", "109", "height", "79", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W0", "x", "608.5", "y", "442.5", "width", "108", "height", "79", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W0", "points", "647.5 437.5 647.5 319.5 716.5 320.5 716.5 437.5 647.5 437.5", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W0", "x", "94.5", "y", "437.5", "width", "74", "height", "84", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W0", "x", "94.5", "y", "354.5", "width", "74", "height", "59", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W0", "points", "618.5 320.5 504.5 319.5 504.5 413.5 618.5 413.5 618.5 320.5", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W0", "points", "499.5 364.5 465.5 364.5 465.5 413.5 499.5 412.5 499.5 364.5", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W0", "points", "440.5 442.5 440.5 364.5 425.5 364.5 425.5 226.5 450.5 221.5 440.5 206.5 168.5 206.5 168.5 334.5 203.5 334.5 203.5 442.5 440.5 442.5", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W039", "x", "169.5", "y", "123.5", "width", "88", "height", "78", 1, "mapItem", 3, "click"], ["id", "W0", "x", "262.5", "y", "123.5", "width", "124", "height", "78", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W047", "points", "391.5 123.5 391.5 201.5 440.5 202.5 440.5 123.5 391.5 123.5", 1, "mapItem", 3, "click"], ["id", "W0", "points", "494.5 152.5 549.5 152.5 549.5 226.5 494.5 241.5 494.5 152.5", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W0", "points", "553.5 152.5 716.5 152.5 716.5 191.5 553.5 226.5 553.5 152.5", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W054", "x", "608.5", "y", "49.5", "width", "108", "height", "98", 1, "mapItem", 3, "click"], ["id", "W050", "x", "553.5", "y", "49.5", "width", "50", "height", "74", 1, "mapItem", 3, "click"], ["id", "W051", "x", "494.5", "y", "49.5", "width", "55", "height", "74", 1, "mapItem", 3, "click"], ["id", "W048", "x", "391.5", "y", "0.5", "width", "49", "height", "93", 1, "mapItem", 3, "click"], ["id", "W046", "x", "316.5", "y", "0.5", "width", "70", "height", "93", 1, "mapItem", 3, "click"], ["id", "W044", "x", "262.5", "y", "0.5", "width", "49", "height", "93", 1, "mapItem", 3, "click"], ["id", "W042", "x", "213.5", "y", "0.5", "width", "44", "height", "93", 1, "mapItem", 3, "click"], ["id", "W040", "points", "208.5 0.5 168.5 0.5 168.5 44.5 139.5 44.5 139.5 93.5 208.5 93.5 208.5 0.5", 1, "mapItem", 3, "click"], ["id", "W0", "x", "94.5", "y", "44.5", "width", "40", "height", "88", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W0", "points", "89.5 393.5 89.5 300.5 0.5 299.5 0.5 393.5 89.5 393.5", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W0", "points", "0.5 295.5 163.5 295.5 164.5 157.5 94.5 157.5 94.5 167.5 0.5 191.5 0.5 295.5", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], [1, "roomNumbers"], ["d", "M159.2,71.5l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                          c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H159.2z", 1, "st1"], ["d", "M176.2,67.2c0,2.4-0.7,4.5-3.3,4.5c-2.5,0-3.3-2.1-3.3-4.4c0-2.3,0.9-4.4,3.3-4.4\n                          C175.3,62.8,176.2,64.7,176.2,67.2z M171.5,67.2c0,1.6,0.2,3,1.4,3c1.2,0,1.3-1.3,1.3-3c0-1.7-0.2-2.9-1.3-2.9\n                          C171.9,64.3,171.5,65.3,171.5,67.2z", 1, "st1"], ["d", "M181.3,71.5v-1.9h-3.9v-1.6l3.6-5h2v5.1h1l-0.2,1.5H183v1.9H181.3z M181.3,66.5c0-0.9,0-1.4,0-2\n                          c-0.3,0.7-1.5,2.3-2.3,3.5h2.2V66.5z", 1, "st1"], ["d", "M191.7,67.2c0,2.4-0.7,4.5-3.3,4.5c-2.5,0-3.3-2.1-3.3-4.4c0-2.3,0.9-4.4,3.3-4.4\n                          C190.9,62.8,191.7,64.7,191.7,67.2z M187.1,67.2c0,1.6,0.2,3,1.4,3c1.2,0,1.3-1.3,1.3-3c0-1.7-0.2-2.9-1.3-2.9\n                          C187.4,64.3,187.1,65.3,187.1,67.2z", 1, "st1"], ["d", "M221.6,53.5l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                          c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H221.6z", 1, "st1"], ["d", "M238.6,49.2c0,2.4-0.7,4.5-3.3,4.5c-2.5,0-3.3-2.1-3.3-4.4c0-2.3,0.9-4.4,3.3-4.4\n                          C237.7,44.8,238.6,46.7,238.6,49.2z M233.9,49.2c0,1.6,0.2,3,1.4,3c1.2,0,1.3-1.3,1.3-3c0-1.7-0.2-2.9-1.3-2.9\n                          C234.2,46.3,233.9,47.3,233.9,49.2z", 1, "st1"], ["d", "M243.7,53.5v-1.9h-3.9v-1.6l3.6-5h2v5.1h1l-0.2,1.5h-0.9v1.9H243.7z M243.7,48.5c0-0.9,0-1.4,0-2\n                          c-0.3,0.7-1.5,2.3-2.3,3.5h2.2V48.5z", 1, "st1"], ["d", "M247.3,53.5v-0.1c0-1.5,0.7-2.7,2.5-4c1.2-0.9,1.6-1.2,1.6-1.9c0-0.7-0.4-1.2-1.1-1.2c-0.8,0-1.1,0.5-1.3,1.3\n                          h-1.8c0.1-1.5,1.1-2.7,3.1-2.7c2.2,0,3,1.3,3,2.6c0,1.2-0.5,1.8-2.1,3c-1.1,0.7-1.5,1.2-1.6,1.6h4.1l-0.2,1.6H247.3z", 1, "st1"], ["d", "M272.4,53.5l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                          c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H272.4z", 1, "st1"], ["d", "M289.4,49.2c0,2.4-0.7,4.5-3.3,4.5c-2.5,0-3.3-2.1-3.3-4.4c0-2.3,0.9-4.4,3.3-4.4\n                          C288.5,44.8,289.4,46.7,289.4,49.2z M284.7,49.2c0,1.6,0.2,3,1.4,3c1.2,0,1.3-1.3,1.3-3c0-1.7-0.2-2.9-1.3-2.9\n                          C285,46.3,284.7,47.3,284.7,49.2z", 1, "st1"], ["d", "M294.5,53.5v-1.9h-3.9v-1.6l3.6-5h2v5.1h1l-0.2,1.5h-0.9v1.9H294.5z M294.5,48.5c0-0.9,0-1.4,0-2\n                          c-0.3,0.7-1.5,2.3-2.3,3.5h2.2V48.5z", 1, "st1"], ["d", "M302.2,53.5v-1.9h-3.9v-1.6l3.6-5h2v5.1h1l-0.2,1.5h-0.9v1.9H302.2z M302.2,48.5c0-0.9,0-1.4,0-2\n                          c-0.3,0.7-1.5,2.3-2.3,3.5h2.2V48.5z", 1, "st1"], ["d", "M336.3,53.5l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                          c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H336.3z", 1, "st1"], ["d", "M353.3,49.2c0,2.4-0.7,4.5-3.3,4.5c-2.5,0-3.3-2.1-3.3-4.4c0-2.3,0.9-4.4,3.3-4.4\n                          C352.4,44.8,353.3,46.7,353.3,49.2z M348.6,49.2c0,1.6,0.2,3,1.4,3c1.2,0,1.3-1.3,1.3-3c0-1.7-0.2-2.9-1.3-2.9\n                          C349,46.3,348.6,47.3,348.6,49.2z", 1, "st1"], ["d", "M358.4,53.5v-1.9h-3.9v-1.6l3.6-5h2v5.1h1l-0.2,1.5h-0.9v1.9H358.4z M358.4,48.5c0-0.9,0-1.4,0-2\n                          c-0.3,0.7-1.5,2.3-2.3,3.5h2.2V48.5z", 1, "st1"], ["d", "M366.7,47c-0.1-0.4-0.3-0.8-1.1-0.8c-1.1,0-1.4,1.1-1.5,2.2c0.4-0.4,1-0.8,1.9-0.8c1.6,0,2.7,1.2,2.7,2.8\n                          c0,1.8-1.2,3.2-3.1,3.2c-2.5,0-3.3-1.9-3.3-4.3c0-2.2,0.8-4.5,3.4-4.5c1.9,0,2.7,1.2,2.8,2.2H366.7z M366.8,50.6\n                          c0-0.8-0.3-1.5-1.3-1.5c-0.8,0-1.3,0.5-1.3,1.5c0,0.7,0.3,1.6,1.3,1.6C366.4,52.2,366.8,51.5,366.8,50.6z", 1, "st1"], ["d", "M401.3,53.5l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                          c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H401.3z", 1, "st1"], ["d", "M418.3,49.2c0,2.4-0.7,4.5-3.3,4.5c-2.5,0-3.3-2.1-3.3-4.4c0-2.3,0.9-4.4,3.3-4.4\n                          C417.4,44.8,418.3,46.7,418.3,49.2z M413.6,49.2c0,1.6,0.2,3,1.4,3c1.2,0,1.3-1.3,1.3-3c0-1.7-0.2-2.9-1.3-2.9\n                          C414,46.3,413.6,47.3,413.6,49.2z", 1, "st1"], ["d", "M423.4,53.5v-1.9h-3.9v-1.6l3.6-5h2v5.1h1l-0.2,1.5h-0.9v1.9H423.4z M423.4,48.5c0-0.9,0-1.4,0-2\n                          c-0.3,0.7-1.5,2.3-2.3,3.5h2.2V48.5z", 1, "st1"], ["d", "M427.1,51c0-1.1,0.8-1.8,1.4-2c-0.7-0.4-1.1-0.9-1.1-1.8c0-1.5,1.1-2.4,3-2.4c1.8,0,2.9,0.9,2.9,2.4\n                          c0,1-0.5,1.5-1.1,1.7c0.6,0.2,1.4,0.9,1.4,2.1c0,1.8-1.4,2.7-3.4,2.7C428.6,53.6,427.1,52.7,427.1,51z M431.8,50.9\n                          c0-0.8-0.6-1.2-1.4-1.2c-0.9,0-1.4,0.5-1.4,1.2c0,0.8,0.6,1.3,1.4,1.3C431.2,52.2,431.8,51.8,431.8,50.9z M429.2,47.3\n                          c0,0.6,0.4,1,1.2,1c0.8,0,1.2-0.3,1.2-1c0-0.6-0.4-1-1.2-1C429.6,46.2,429.2,46.6,429.2,47.3z", 1, "st1"], ["d", "M507.8,93.5l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                          c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H507.8z", 1, "st1"], ["d", "M524.7,89.2c0,2.4-0.7,4.5-3.3,4.5c-2.5,0-3.3-2.1-3.3-4.4c0-2.3,0.9-4.4,3.3-4.4\n                          C523.9,84.8,524.7,86.7,524.7,89.2z M520.1,89.2c0,1.6,0.2,3,1.4,3c1.2,0,1.3-1.3,1.3-3c0-1.7-0.2-2.9-1.3-2.9\n                          C520.4,86.3,520.1,87.3,520.1,89.2z", 1, "st1"], ["d", "M531.8,86.5h-3.4c-0.1,0.5-0.2,1.3-0.3,1.6c0.3-0.3,0.8-0.5,1.5-0.5c1.7,0,2.6,1.2,2.6,2.8\n                          c0,1.7-0.9,3.2-3.2,3.2c-1.7,0-2.9-0.9-3.1-2.4h1.9c0.2,0.6,0.6,1,1.3,1c0.9,0,1.3-0.7,1.3-1.6c0-0.9-0.3-1.5-1.3-1.5\n                          c-0.8,0-1.1,0.3-1.3,0.9l-1.7-0.2c0.2-1.1,0.6-3.6,0.7-4.8h5.2L531.8,86.5z", 1, "st1"], ["d", "M534.8,93.5v-6.4c-0.4,0.2-1.1,0.3-1.5,0.4v-1.4c0.8-0.1,1.6-0.6,2.1-1.1h1.3v8.6H534.8z", 1, "st1"], ["d", "M562.3,93.5l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                          c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H562.3z", 1, "st1"], ["d", "M579.3,89.2c0,2.4-0.7,4.5-3.3,4.5c-2.5,0-3.3-2.1-3.3-4.4c0-2.3,0.9-4.4,3.3-4.4\n                          C578.4,84.8,579.3,86.7,579.3,89.2z M574.6,89.2c0,1.6,0.2,3,1.4,3c1.2,0,1.3-1.3,1.3-3c0-1.7-0.2-2.9-1.3-2.9\n                          C575,86.3,574.6,87.3,574.6,89.2z", 1, "st1"], ["d", "M586.4,86.5H583c-0.1,0.5-0.2,1.3-0.3,1.6c0.3-0.3,0.8-0.5,1.5-0.5c1.7,0,2.6,1.2,2.6,2.8\n                          c0,1.7-0.9,3.2-3.2,3.2c-1.7,0-2.9-0.9-3.1-2.4h1.9c0.2,0.6,0.6,1,1.3,1c0.9,0,1.3-0.7,1.3-1.6c0-0.9-0.3-1.5-1.3-1.5\n                          c-0.8,0-1.1,0.3-1.3,0.9l-1.7-0.2c0.2-1.1,0.6-3.6,0.7-4.8h5.2L586.4,86.5z", 1, "st1"], ["d", "M594.6,89.2c0,2.4-0.7,4.5-3.3,4.5c-2.5,0-3.3-2.1-3.3-4.4c0-2.3,0.9-4.4,3.3-4.4\n                          C593.8,84.8,594.6,86.7,594.6,89.2z M590,89.2c0,1.6,0.2,3,1.4,3c1.2,0,1.3-1.3,1.3-3c0-1.7-0.2-2.9-1.3-2.9\n                          C590.3,86.3,590,87.3,590,89.2z", 1, "st1"], ["d", "M646.5,105.5l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                          c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H646.5z", 1, "st1"], ["d", "M663.5,101.2c0,2.4-0.7,4.5-3.3,4.5c-2.5,0-3.3-2.1-3.3-4.4c0-2.3,0.9-4.4,3.3-4.4\n                          C662.6,96.8,663.5,98.7,663.5,101.2z M658.8,101.2c0,1.6,0.2,3,1.4,3c1.2,0,1.3-1.3,1.3-3c0-1.7-0.2-2.9-1.3-2.9\n                          C659.1,98.3,658.8,99.3,658.8,101.2z", 1, "st1"], ["d", "M670.6,98.5h-3.4c-0.1,0.5-0.2,1.3-0.3,1.6c0.3-0.3,0.8-0.5,1.5-0.5c1.7,0,2.6,1.2,2.6,2.8\n                          c0,1.7-0.9,3.2-3.2,3.2c-1.7,0-2.9-0.9-3.1-2.4h1.9c0.2,0.6,0.6,1,1.3,1c0.9,0,1.3-0.7,1.3-1.6c0-0.9-0.3-1.5-1.3-1.5\n                          c-0.8,0-1.1,0.3-1.3,0.9l-1.7-0.2c0.2-1.1,0.6-3.6,0.7-4.8h5.2L670.6,98.5z", 1, "st1"], ["d", "M676.1,105.5v-1.9h-3.9v-1.6l3.6-5h2v5.1h1l-0.2,1.5h-0.9v1.9H676.1z M676.1,100.5c0-0.9,0-1.4,0-2\n                          c-0.3,0.7-1.5,2.3-2.3,3.5h2.2V100.5z", 1, "st1"], ["d", "M402,169.5l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                          c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H402z", 1, "st1"], ["d", "M419,165.2c0,2.4-0.7,4.5-3.3,4.5c-2.5,0-3.3-2.1-3.3-4.4c0-2.3,0.9-4.4,3.3-4.4\n                          C418.1,160.8,419,162.7,419,165.2z M414.3,165.2c0,1.6,0.2,3,1.4,3c1.2,0,1.3-1.3,1.3-3c0-1.7-0.2-2.9-1.3-2.9\n                          C414.6,162.3,414.3,163.3,414.3,165.2z", 1, "st1"], ["d", "M424.1,169.5v-1.9h-3.9v-1.6l3.6-5h2v5.1h1l-0.2,1.5h-0.9v1.9H424.1z M424.1,164.5c0-0.9,0-1.4,0-2\n                          c-0.3,0.7-1.5,2.3-2.3,3.5h2.2V164.5z", 1, "st1"], ["d", "M433.3,160.9v1.4c-1.4,1.9-2.7,4.7-3,7.2h-1.9c0.3-2.5,1.9-5.5,3-7h-4v-1.5H433.3z", 1, "st1"], ["d", "M199.6,169.5l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                          c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H199.6z", 1, "st1"], ["d", "M216.6,165.2c0,2.4-0.7,4.5-3.3,4.5c-2.5,0-3.3-2.1-3.3-4.4c0-2.3,0.9-4.4,3.3-4.4\n                          C215.7,160.8,216.6,162.7,216.6,165.2z M211.9,165.2c0,1.6,0.2,3,1.4,3c1.2,0,1.3-1.3,1.3-3c0-1.7-0.2-2.9-1.3-2.9\n                          C212.2,162.3,211.9,163.3,211.9,165.2z", 1, "st1"], ["d", "M217.8,163.1c0.1-1.1,0.9-2.4,3-2.4c2,0,2.9,1.1,2.9,2.3c0,1-0.6,1.5-1.1,1.7v0c0.6,0.2,1.4,0.7,1.4,2.1\n                          c0,1.2-0.8,2.7-3.2,2.7c-2.3,0-3.1-1.4-3.2-2.5h1.8c0.1,0.6,0.5,1.1,1.4,1.1c0.9,0,1.3-0.6,1.3-1.3c0-0.8-0.4-1.3-1.4-1.3h-0.8\n                          v-1.4h0.7c0.9,0,1.2-0.3,1.2-1c0-0.6-0.3-1-1.1-1c-0.9,0-1.1,0.5-1.2,0.9H217.8z", 1, "st1"], ["d", "M227,167.4c0.2,0.5,0.5,0.8,1.2,0.8c1.2,0,1.3-1.5,1.4-2.4c-0.4,0.5-1,0.7-1.8,0.7c-1.8,0-2.8-1.2-2.8-2.8\n                          c0-1.7,1.2-3,3.1-3c2.4,0,3.2,1.9,3.2,4c0,2.4-0.6,4.9-3.3,4.9c-2,0-2.8-1.2-3-2.3H227z M226.9,163.7c0,0.9,0.5,1.4,1.3,1.4\n                          c0.8,0,1.3-0.4,1.3-1.4c0-0.6-0.2-1.5-1.3-1.5C227.3,162.2,226.9,162.9,226.9,163.7z", 1, "st1"], ["id", "floor1", "role", "tabpanel", "aria-labelledby", "floor1-tab", 1, "tab-pane"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 781.25 532.4", "width", "1em", "height", "1em"], ["id", "W110", "points", "780.75 531.9 701.74 531.9 701.74 433.54 686.92 433.54 686.92 418.57 780.75 418.78 780.75 531.9", 1, "mapItem", 3, "click"], ["id", "W112", "x", "647.41", "y", "438.46", "width", "49.38", "height", "93.44", 1, "mapItem", 3, "click"], ["id", "W114", "x", "593.09", "y", "428.62", "width", "49.38", "height", "103.28", 1, "mapItem", 3, "click"], ["id", "W116", "x", "479.51", "y", "428.96", "width", "108.64", "height", "102.94", 1, "mapItem", 3, "click"], ["id", "W118", "x", "420.25", "y", "458.13", "width", "53.99", "height", "73.77", 1, "mapItem", 3, "click"], ["id", "W120", "x", "365.93", "y", "458.13", "width", "49.38", "height", "73.77", 1, "mapItem", 3, "click"], ["id", "W122", "points", "360.99 458.13 360.99 531.9 306.67 531.9 306.69 458.32 360.99 458.13", 1, "mapItem", 3, "click"], ["id", "W124", "x", "252.35", "y", "458.13", "width", "49.38", "height", "73.77", 1, "mapItem", 3, "click"], ["id", "W1", "points", "247.41 458.13 247.41 531.9 193.09 531.9 193.09 457.91 247.41 458.13", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W128", "points", "188.15 458.13 188.15 531.9 94.33 531.9 94.33 428.89 168.4 428.62 168.4 458.13 188.15 458.13", 1, "mapItem", 3, "click"], ["id", "W129", "points", "93.74 423.7 193.09 423.7 193.09 428.62 281.98 428.62 281.98 271.24 0.5 271.24 0.5 404.03 94.25 404.03 93.74 423.7", 1, "mapItem", 3, "click"], ["id", "W1", "points", "286.92 428.62 365.93 428.9 365.93 266.91 286.92 266.91 286.92 428.62", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W139", "points", "286.47 261.41 286.92 108.95 474.69 109.33 474.69 202.32 454.82 207.31 454.82 349.93 370.87 349.93 371.36 261.41 286.47 261.41", 1, "mapItem", 3, "click"], ["id", "W1", "points", "370.87 354.85 370.87 428.62 420.25 428.62 420.25 399.11 474.56 399.11 474.56 354.85 370.87 354.85", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W1", "points", "499.26 399.11 499.22 305.67 657.29 305.67 657.29 398.99 499.26 399.11", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W108", "x", "686.92", "y", "364.69", "width", "93.83", "height", "49.18", 1, "mapItem", 3, "click"], ["id", "W106", "points", "686.92 359.77 780.75 359.77 780.75 305.67 686.68 306.32 686.92 359.77", 1, "mapItem", 3, "click"], ["id", "W152", "points", "701.74 300.75 780.75 300.75 780.75 167.97 701.42 182.72 701.74 300.75", 1, "mapItem", 3, "click"], ["id", "W148", "points", "701.74 177.93 780.75 162.73 780.75 79.29 701.74 79.33 701.74 148.29 692.56 153.21 701.74 177.93", 1, "mapItem", 3, "click"], ["id", "W150", "x", "706.67", "y", "0.75", "width", "74.07", "height", "73.77", 1, "mapItem", 3, "click"], ["id", "W146", "points", "701.14 74.52 647.41 74.52 647.44 0.75 701.74 0.75 701.14 74.52", 1, "mapItem", 3, "click"], ["id", "W142", "points", "533.83 79.29 534.35 0.75 642.48 0.75 642.48 79.29 533.83 79.29", 1, "mapItem", 3, "click"], ["id", "W140", "points", "528.89 0.75 479.51 0.5 479.51 79.29 528.89 79.29 528.89 0.75", 1, "mapItem", 3, "click"], ["id", "W138", "points", "473.93 0.5 420.25 0.5 420.25 79.6 474.25 79.29 473.93 0.5", 1, "mapItem", 3, "click"], ["id", "W136", "points", "415.31 79.6 365.93 79.42 365.93 0.5 415.31 0.75 415.31 79.6", 1, "mapItem", 3, "click"], ["id", "W134", "points", "360.99 79.89 271.55 79.6 272.11 0.75 360.99 0.75 360.99 79.89", 1, "mapItem", 3, "click"], ["id", "W132", "points", "267.17 79.6 267.17 0.75 188.15 0.75 188.15 79.44 267.17 79.6", 1, "mapItem", 3, "click"], ["id", "W133", "points", "0.5 266.32 281.98 266.91 281.98 128.62 99.27 128.62 0.5 148.56 0.5 266.32", 1, "mapItem", 3, "click"], ["d", "M214.2,47.1l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                  c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H214.2z", 1, "st1"], ["d", "M226.1,47.1v-6.4c-0.4,0.2-1.1,0.3-1.5,0.4v-1.4c0.8-0.1,1.6-0.6,2.1-1.1h1.3v8.6H226.1z", 1, "st1"], ["d", "M229.7,40.8c0.1-1.1,0.9-2.4,3-2.4c2,0,2.9,1.1,2.9,2.3c0,1-0.6,1.5-1.1,1.7v0c0.6,0.2,1.4,0.7,1.4,2.1\n                  c0,1.2-0.8,2.7-3.2,2.7c-2.3,0-3.1-1.4-3.2-2.5h1.8c0.1,0.6,0.5,1.1,1.4,1.1c0.9,0,1.3-0.6,1.3-1.3c0-0.8-0.4-1.3-1.4-1.3h-0.8\n                  v-1.4h0.7c0.9,0,1.2-0.3,1.2-1c0-0.6-0.3-1-1.1-1c-0.9,0-1.1,0.5-1.2,0.9H229.7z", 1, "st1"], ["d", "M237,47.1V47c0-1.5,0.7-2.7,2.5-4c1.2-0.9,1.6-1.2,1.6-1.9c0-0.7-0.4-1.2-1.1-1.2c-0.8,0-1.1,0.5-1.3,1.3H237\n                  c0.1-1.5,1.1-2.7,3.1-2.7c2.2,0,3,1.3,3,2.6c0,1.2-0.5,1.8-2.1,3c-1.1,0.7-1.5,1.2-1.6,1.6h4.1l-0.2,1.6H237z", 1, "st1"], ["d", "M305.1,47.1l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                  c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H305.1z", 1, "st1"], ["d", "M317,47.1v-6.4c-0.4,0.2-1.1,0.3-1.5,0.4v-1.4c0.8-0.1,1.6-0.6,2.1-1.1h1.3v8.6H317z", 1, "st1"], ["d", "M320.6,40.8c0.1-1.1,0.9-2.4,3-2.4c2,0,2.9,1.1,2.9,2.3c0,1-0.6,1.5-1.1,1.7v0c0.6,0.2,1.4,0.7,1.4,2.1\n                  c0,1.2-0.8,2.7-3.2,2.7c-2.3,0-3.1-1.4-3.2-2.5h1.8c0.1,0.6,0.5,1.1,1.4,1.1c0.9,0,1.3-0.6,1.3-1.3c0-0.8-0.4-1.3-1.4-1.3h-0.8\n                  v-1.4h0.7c0.9,0,1.2-0.3,1.2-1c0-0.6-0.3-1-1.1-1c-0.9,0-1.1,0.5-1.2,0.9H320.6z", 1, "st1"], ["d", "M331.8,47.1v-1.9H328v-1.6l3.6-5h2v5.1h1l-0.2,1.5h-0.9v1.9H331.8z M331.8,42.2c0-0.9,0-1.4,0-2\n                  c-0.3,0.7-1.5,2.3-2.3,3.5h2.2V42.2z", 1, "st1"], ["d", "M377,47.1l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                  c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H377z", 1, "st1"], ["d", "M389,47.1v-6.4c-0.4,0.2-1.1,0.3-1.5,0.4v-1.4c0.8-0.1,1.6-0.6,2.1-1.1h1.3v8.6H389z", 1, "st1"], ["d", "M392.5,40.8c0.1-1.1,0.9-2.4,3-2.4c2,0,2.9,1.1,2.9,2.3c0,1-0.6,1.5-1.1,1.7v0c0.6,0.2,1.4,0.7,1.4,2.1\n                  c0,1.2-0.8,2.7-3.2,2.7c-2.3,0-3.1-1.4-3.2-2.5h1.8c0.1,0.6,0.5,1.1,1.4,1.1c0.9,0,1.3-0.6,1.3-1.3c0-0.8-0.4-1.3-1.4-1.3h-0.8\n                  v-1.4h0.7c0.9,0,1.2-0.3,1.2-1c0-0.6-0.3-1-1.1-1c-0.9,0-1.1,0.5-1.2,0.9H392.5z", 1, "st1"], ["d", "M404.3,40.7c-0.1-0.4-0.3-0.8-1.1-0.8c-1.1,0-1.4,1.1-1.5,2.2c0.4-0.4,1-0.8,1.9-0.8c1.6,0,2.7,1.2,2.7,2.8\n                  c0,1.8-1.2,3.2-3.1,3.2c-2.5,0-3.3-1.9-3.3-4.3c0-2.2,0.8-4.5,3.4-4.5c1.9,0,2.7,1.2,2.8,2.2H404.3z M404.5,44.3\n                  c0-0.8-0.3-1.5-1.3-1.5c-0.8,0-1.3,0.5-1.3,1.5c0,0.7,0.3,1.6,1.3,1.6C404,45.8,404.5,45.1,404.5,44.3z", 1, "st1"], ["d", "M434,47.1l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                  c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H434z", 1, "st1"], ["d", "M446,47.1v-6.4c-0.4,0.2-1.1,0.3-1.5,0.4v-1.4c0.8-0.1,1.6-0.6,2.1-1.1h1.3v8.6H446z", 1, "st1"], ["d", "M449.5,40.8c0.1-1.1,0.9-2.4,3-2.4c2,0,2.9,1.1,2.9,2.3c0,1-0.6,1.5-1.1,1.7v0c0.6,0.2,1.4,0.7,1.4,2.1\n                  c0,1.2-0.8,2.7-3.2,2.7c-2.3,0-3.1-1.4-3.2-2.5h1.8c0.1,0.6,0.5,1.1,1.4,1.1c0.9,0,1.3-0.6,1.3-1.3c0-0.8-0.4-1.3-1.4-1.3h-0.8\n                  v-1.4h0.7c0.9,0,1.2-0.3,1.2-1c0-0.6-0.3-1-1.1-1c-0.9,0-1.1,0.5-1.2,0.9H449.5z", 1, "st1"], ["d", "M456.8,44.7c0-1.1,0.8-1.8,1.4-2c-0.7-0.4-1.1-0.9-1.1-1.8c0-1.5,1.1-2.4,3-2.4c1.8,0,2.9,0.9,2.9,2.4\n                  c0,1-0.5,1.5-1.1,1.7c0.6,0.2,1.4,0.9,1.4,2.1c0,1.8-1.4,2.7-3.4,2.7C458.2,47.3,456.8,46.4,456.8,44.7z M461.5,44.6\n                  c0-0.8-0.6-1.2-1.4-1.2c-0.9,0-1.4,0.5-1.4,1.2c0,0.8,0.6,1.3,1.4,1.3C460.9,45.8,461.5,45.5,461.5,44.6z M458.9,40.9\n                  c0,0.6,0.4,1,1.2,1c0.8,0,1.2-0.3,1.2-1c0-0.6-0.4-1-1.2-1C459.3,39.8,458.9,40.2,458.9,40.9z", 1, "st1"], ["d", "M491.7,47.1l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                  c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H491.7z", 1, "st1"], ["d", "M503.7,47.1v-6.4c-0.4,0.2-1.1,0.3-1.5,0.4v-1.4c0.8-0.1,1.6-0.6,2.1-1.1h1.3v8.6H503.7z", 1, "st1"], ["d", "M511.1,47.1v-1.9h-3.9v-1.6l3.6-5h2v5.1h1l-0.2,1.5h-0.9v1.9H511.1z M511.1,42.2c0-0.9,0-1.4,0-2\n                  c-0.3,0.7-1.5,2.3-2.3,3.5h2.2V42.2z", 1, "st1"], ["d", "M521.5,42.8c0,2.4-0.7,4.5-3.3,4.5c-2.5,0-3.3-2.1-3.3-4.4c0-2.3,0.9-4.4,3.3-4.4\n                  C520.7,38.4,521.5,40.4,521.5,42.8z M516.9,42.8c0,1.6,0.2,3,1.4,3c1.2,0,1.3-1.3,1.3-3c0-1.7-0.2-2.9-1.3-2.9\n                  C517.2,39.9,516.9,41,516.9,42.8z", 1, "st1"], ["d", "M575.1,47.1l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                  c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H575.1z", 1, "st1"], ["d", "M587.1,47.1v-6.4c-0.4,0.2-1.1,0.3-1.5,0.4v-1.4c0.8-0.1,1.6-0.6,2.1-1.1h1.3v8.6H587.1z", 1, "st1"], ["d", "M594.5,47.1v-1.9h-3.9v-1.6l3.6-5h2v5.1h1l-0.2,1.5h-0.9v1.9H594.5z M594.5,42.2c0-0.9,0-1.4,0-2\n                  c-0.3,0.7-1.5,2.3-2.3,3.5h2.2V42.2z", 1, "st1"], ["d", "M598.1,47.1V47c0-1.5,0.7-2.7,2.5-4c1.2-0.9,1.6-1.2,1.6-1.9c0-0.7-0.4-1.2-1.1-1.2c-0.8,0-1.1,0.5-1.3,1.3\n                  H598c0.1-1.5,1.1-2.7,3.1-2.7c2.2,0,3,1.3,3,2.6c0,1.2-0.5,1.8-2.1,3c-1.1,0.7-1.5,1.2-1.6,1.6h4.1l-0.2,1.6H598.1z", 1, "st1"], ["d", "M658.8,47.1l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                  c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H658.8z", 1, "st1"], ["d", "M670.8,47.1v-6.4c-0.4,0.2-1.1,0.3-1.5,0.4v-1.4c0.8-0.1,1.6-0.6,2.1-1.1h1.3v8.6H670.8z", 1, "st1"], ["d", "M678.2,47.1v-1.9h-3.9v-1.6l3.6-5h2v5.1h1l-0.2,1.5H680v1.9H678.2z M678.2,42.2c0-0.9,0-1.4,0-2\n                  c-0.3,0.7-1.5,2.3-2.3,3.5h2.2V42.2z", 1, "st1"], ["d", "M686.5,40.7c-0.1-0.4-0.3-0.8-1.1-0.8c-1.1,0-1.4,1.1-1.5,2.2c0.4-0.4,1-0.8,1.9-0.8c1.6,0,2.7,1.2,2.7,2.8\n                  c0,1.8-1.2,3.2-3.1,3.2c-2.5,0-3.3-1.9-3.3-4.3c0-2.2,0.8-4.5,3.4-4.5c1.9,0,2.7,1.2,2.8,2.2H686.5z M686.6,44.3\n                  c0-0.8-0.3-1.5-1.3-1.5c-0.8,0-1.3,0.5-1.3,1.5c0,0.7,0.3,1.6,1.3,1.6C686.2,45.8,686.6,45.1,686.6,44.3z", 1, "st1"], ["d", "M730.8,47.1l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                  c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H730.8z", 1, "st1"], ["d", "M742.7,47.1v-6.4c-0.4,0.2-1.1,0.3-1.5,0.4v-1.4c0.8-0.1,1.6-0.6,2.1-1.1h1.3v8.6H742.7z", 1, "st1"], ["d", "M752.2,40.1h-3.4c-0.1,0.5-0.2,1.3-0.3,1.6c0.3-0.3,0.8-0.5,1.5-0.5c1.7,0,2.6,1.2,2.6,2.8\n                  c0,1.7-0.9,3.2-3.2,3.2c-1.7,0-2.9-0.9-3.1-2.4h1.9c0.2,0.6,0.6,1,1.3,1c0.9,0,1.3-0.7,1.3-1.6c0-0.9-0.3-1.5-1.3-1.5\n                  c-0.8,0-1.1,0.3-1.3,0.9l-1.7-0.2c0.2-1.1,0.6-3.6,0.7-4.8h5.2L752.2,40.1z", 1, "st1"], ["d", "M760.5,42.8c0,2.4-0.7,4.5-3.3,4.5c-2.5,0-3.3-2.1-3.3-4.4c0-2.3,0.9-4.4,3.3-4.4\n                  C759.6,38.4,760.5,40.4,760.5,42.8z M755.8,42.8c0,1.6,0.2,3,1.4,3c1.2,0,1.3-1.3,1.3-3c0-1.7-0.2-2.9-1.3-2.9\n                  C756.1,39.9,755.8,41,755.8,42.8z", 1, "st1"], ["d", "M730.8,128.1l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                  c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H730.8z", 1, "st1"], ["d", "M742.8,128.1v-6.4c-0.4,0.2-1.1,0.3-1.5,0.4v-1.4c0.8-0.1,1.6-0.6,2.1-1.1h1.3v8.6H742.8z", 1, "st1"], ["d", "M750.2,128.1v-1.9h-3.9v-1.6l3.6-5h2v5.1h1l-0.2,1.5H752v1.9H750.2z M750.2,123.2c0-0.9,0-1.4,0-2\n                  c-0.3,0.7-1.5,2.3-2.3,3.5h2.2V123.2z", 1, "st1"], ["d", "M753.9,125.7c0-1.1,0.8-1.8,1.4-2c-0.7-0.4-1.1-0.9-1.1-1.8c0-1.5,1.1-2.4,3-2.4c1.8,0,2.9,0.9,2.9,2.4\n                  c0,1-0.5,1.5-1.1,1.7c0.6,0.2,1.4,0.9,1.4,2.1c0,1.8-1.4,2.7-3.4,2.7C755.4,128.3,753.9,127.4,753.9,125.7z M758.6,125.6\n                  c0-0.8-0.6-1.2-1.4-1.2c-0.9,0-1.4,0.5-1.4,1.2c0,0.8,0.6,1.3,1.4,1.3C758,126.8,758.6,126.5,758.6,125.6z M756,121.9\n                  c0,0.6,0.4,1,1.2,1c0.8,0,1.2-0.3,1.2-1c0-0.6-0.4-1-1.2-1C756.4,120.8,756,121.2,756,121.9z", 1, "st1"], ["d", "M729.2,246.1l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                  c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H729.2z", 1, "st1"], ["d", "M741.1,246.1v-6.4c-0.4,0.2-1.1,0.3-1.5,0.4v-1.4c0.8-0.1,1.6-0.6,2.1-1.1h1.3v8.6H741.1z", 1, "st1"], ["d", "M750.6,239.1h-3.4c-0.1,0.5-0.2,1.3-0.3,1.6c0.3-0.3,0.8-0.5,1.5-0.5c1.7,0,2.6,1.2,2.6,2.8\n                  c0,1.7-0.9,3.2-3.2,3.2c-1.7,0-2.9-0.9-3.1-2.4h1.9c0.2,0.6,0.6,1,1.3,1c0.9,0,1.3-0.7,1.3-1.6c0-0.9-0.3-1.5-1.3-1.5\n                  c-0.8,0-1.1,0.3-1.3,0.9l-1.7-0.2c0.2-1.1,0.6-3.6,0.7-4.8h5.2L750.6,239.1z", 1, "st1"], ["d", "M752,246.1V246c0-1.5,0.7-2.7,2.5-4c1.2-0.9,1.6-1.2,1.6-1.9c0-0.7-0.4-1.2-1.1-1.2c-0.8,0-1.1,0.5-1.3,1.3\n                  H752c0.1-1.5,1.1-2.7,3.1-2.7c2.2,0,3,1.3,3,2.6c0,1.2-0.5,1.8-2.1,3c-1.1,0.7-1.5,1.2-1.6,1.6h4.1l-0.2,1.6H752z", 1, "st1"], ["d", "M720.8,337.1l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                  c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H720.8z", 1, "st1"], ["d", "M732.7,337.1v-6.4c-0.4,0.2-1.1,0.3-1.5,0.4v-1.4c0.8-0.1,1.6-0.6,2.1-1.1h1.3v8.6H732.7z", 1, "st1"], ["d", "M742.9,332.8c0,2.4-0.7,4.5-3.3,4.5c-2.5,0-3.3-2.1-3.3-4.4c0-2.3,0.9-4.4,3.3-4.4\n                  C742,328.4,742.9,330.4,742.9,332.8z M738.3,332.8c0,1.6,0.2,3,1.4,3c1.2,0,1.3-1.3,1.3-3c0-1.7-0.2-2.9-1.3-2.9\n                  C738.6,329.9,738.3,331,738.3,332.8z", 1, "st1"], ["d", "M748.5,330.7c-0.1-0.4-0.3-0.8-1.1-0.8c-1.1,0-1.4,1.1-1.5,2.2c0.4-0.4,1-0.8,1.9-0.8c1.6,0,2.7,1.2,2.7,2.8\n                  c0,1.8-1.2,3.2-3.1,3.2c-2.5,0-3.3-1.9-3.3-4.3c0-2.2,0.8-4.5,3.4-4.5c1.9,0,2.7,1.2,2.8,2.2H748.5z M748.7,334.3\n                  c0-0.8-0.3-1.5-1.3-1.5c-0.8,0-1.3,0.5-1.3,1.5c0,0.7,0.3,1.6,1.3,1.6C748.3,335.8,748.7,335.1,748.7,334.3z", 1, "st1"], ["d", "M720.7,394.1l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                  c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H720.7z", 1, "st1"], ["d", "M732.7,394.1v-6.4c-0.4,0.2-1.1,0.3-1.5,0.4v-1.4c0.8-0.1,1.6-0.6,2.1-1.1h1.3v8.6H732.7z", 1, "st1"], ["d", "M742.9,389.8c0,2.4-0.7,4.5-3.3,4.5c-2.5,0-3.3-2.1-3.3-4.4c0-2.3,0.9-4.4,3.3-4.4\n                  C742,385.4,742.9,387.4,742.9,389.8z M738.2,389.8c0,1.6,0.2,3,1.4,3c1.2,0,1.3-1.3,1.3-3c0-1.7-0.2-2.9-1.3-2.9\n                  C738.5,386.9,738.2,388,738.2,389.8z", 1, "st1"], ["d", "M744,391.7c0-1.1,0.8-1.8,1.4-2c-0.7-0.4-1.1-0.9-1.1-1.8c0-1.5,1.1-2.4,3-2.4c1.8,0,2.9,0.9,2.9,2.4\n                  c0,1-0.5,1.5-1.1,1.7c0.6,0.2,1.4,0.9,1.4,2.1c0,1.8-1.4,2.7-3.4,2.7C745.5,394.3,744,393.4,744,391.7z M748.7,391.6\n                  c0-0.8-0.6-1.2-1.4-1.2c-0.9,0-1.4,0.5-1.4,1.2c0,0.8,0.6,1.3,1.4,1.3C748.1,392.8,748.7,392.5,748.7,391.6z M746.1,387.9\n                  c0,0.6,0.4,1,1.2,1c0.8,0,1.2-0.3,1.2-1c0-0.6-0.4-1-1.2-1C746.5,386.8,746.1,387.2,746.1,387.9z", 1, "st1"], ["d", "M729.1,481.1l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                  c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H729.1z", 1, "st1"], ["d", "M741.1,481.1v-6.4c-0.4,0.2-1.1,0.3-1.5,0.4v-1.4c0.8-0.1,1.6-0.6,2.1-1.1h1.3v8.6H741.1z", 1, "st1"], ["d", "M746,481.1v-6.4c-0.4,0.2-1.1,0.3-1.5,0.4v-1.4c0.8-0.1,1.6-0.6,2.1-1.1h1.3v8.6H746z", 1, "st1"], ["d", "M756.1,476.8c0,2.4-0.7,4.5-3.3,4.5c-2.5,0-3.3-2.1-3.3-4.4c0-2.3,0.9-4.4,3.3-4.4\n                  C755.3,472.4,756.1,474.4,756.1,476.8z M751.5,476.8c0,1.6,0.2,3,1.4,3c1.2,0,1.3-1.3,1.3-3c0-1.7-0.2-2.9-1.3-2.9\n                  C751.8,473.9,751.5,475,751.5,476.8z", 1, "st1"], ["d", "M660.3,487.1l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                  c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H660.3z", 1, "st1"], ["d", "M672.3,487.1v-6.4c-0.4,0.2-1.1,0.3-1.5,0.4v-1.4c0.8-0.1,1.6-0.6,2.1-1.1h1.3v8.6H672.3z", 1, "st1"], ["d", "M677.2,487.1v-6.4c-0.4,0.2-1.1,0.3-1.5,0.4v-1.4c0.8-0.1,1.6-0.6,2.1-1.1h1.3v8.6H677.2z", 1, "st1"], ["d", "M680.8,487.1V487c0-1.5,0.7-2.7,2.5-4c1.2-0.9,1.6-1.2,1.6-1.9c0-0.7-0.4-1.2-1.1-1.2c-0.8,0-1.1,0.5-1.3,1.3\n                  h-1.8c0.1-1.5,1.1-2.7,3.1-2.7c2.2,0,3,1.3,3,2.6c0,1.2-0.5,1.8-2.1,3c-1.1,0.7-1.5,1.2-1.6,1.6h4.1l-0.2,1.6H680.8z", 1, "st1"], ["d", "M607.3,486.1l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                  c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H607.3z", 1, "st1"], ["d", "M619.3,486.1v-6.4c-0.4,0.2-1.1,0.3-1.5,0.4v-1.4c0.8-0.1,1.6-0.6,2.1-1.1h1.3v8.6H619.3z", 1, "st1"], ["d", "M624.2,486.1v-6.4c-0.4,0.2-1.1,0.3-1.5,0.4v-1.4c0.8-0.1,1.6-0.6,2.1-1.1h1.3v8.6H624.2z", 1, "st1"], ["d", "M631.6,486.1v-1.9h-3.9v-1.6l3.6-5h2v5.1h1l-0.2,1.5h-0.9v1.9H631.6z M631.6,481.2c0-0.9,0-1.4,0-2\n                  c-0.3,0.7-1.5,2.3-2.3,3.5h2.2V481.2z", 1, "st1"], ["d", "M525.2,486.1l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                  c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H525.2z", 1, "st1"], ["d", "M537.2,486.1v-6.4c-0.4,0.2-1.1,0.3-1.5,0.4v-1.4c0.8-0.1,1.6-0.6,2.1-1.1h1.3v8.6H537.2z", 1, "st1"], ["d", "M542.1,486.1v-6.4c-0.4,0.2-1.1,0.3-1.5,0.4v-1.4c0.8-0.1,1.6-0.6,2.1-1.1h1.3v8.6H542.1z", 1, "st1"], ["d", "M550.1,479.7c-0.1-0.4-0.3-0.8-1.1-0.8c-1.1,0-1.4,1.1-1.5,2.2c0.4-0.4,1-0.8,1.9-0.8c1.6,0,2.7,1.2,2.7,2.8\n                  c0,1.8-1.2,3.2-3.1,3.2c-2.5,0-3.3-1.9-3.3-4.3c0-2.2,0.8-4.5,3.4-4.5c1.9,0,2.7,1.2,2.8,2.2H550.1z M550.3,483.3\n                  c0-0.8-0.3-1.5-1.3-1.5c-0.8,0-1.3,0.5-1.3,1.5c0,0.7,0.3,1.6,1.3,1.6C549.8,484.8,550.3,484.1,550.3,483.3z", 1, "st1"], ["d", "M435.2,501.1l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                  c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H435.2z", 1, "st1"], ["d", "M447.2,501.1v-6.4c-0.4,0.2-1.1,0.3-1.5,0.4v-1.4c0.8-0.1,1.6-0.6,2.1-1.1h1.3v8.6H447.2z", 1, "st1"], ["d", "M452.1,501.1v-6.4c-0.4,0.2-1.1,0.3-1.5,0.4v-1.4c0.8-0.1,1.6-0.6,2.1-1.1h1.3v8.6H452.1z", 1, "st1"], ["d", "M455.5,498.7c0-1.1,0.8-1.8,1.4-2c-0.7-0.4-1.1-0.9-1.1-1.8c0-1.5,1.1-2.4,3-2.4c1.8,0,2.9,0.9,2.9,2.4\n                  c0,1-0.5,1.5-1.1,1.7c0.6,0.2,1.4,0.9,1.4,2.1c0,1.8-1.4,2.7-3.4,2.7C457,501.3,455.5,500.4,455.5,498.7z M460.2,498.6\n                  c0-0.8-0.6-1.2-1.4-1.2c-0.9,0-1.4,0.5-1.4,1.2c0,0.8,0.6,1.3,1.4,1.3C459.6,499.8,460.2,499.5,460.2,498.6z M457.6,494.9\n                  c0,0.6,0.4,1,1.2,1c0.8,0,1.2-0.3,1.2-1c0-0.6-0.4-1-1.2-1C458,493.8,457.6,494.2,457.6,494.9z", 1, "st1"], ["d", "M376.9,501.1l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                  c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H376.9z", 1, "st1"], ["d", "M388.9,501.1v-6.4c-0.4,0.2-1.1,0.3-1.5,0.4v-1.4c0.8-0.1,1.6-0.6,2.1-1.1h1.3v8.6H388.9z", 1, "st1"], ["d", "M392.5,501.1V501c0-1.5,0.7-2.7,2.5-4c1.2-0.9,1.6-1.2,1.6-1.9c0-0.7-0.4-1.2-1.1-1.2c-0.8,0-1.1,0.5-1.3,1.3\n                  h-1.8c0.1-1.5,1.1-2.7,3.1-2.7c2.2,0,3,1.3,3,2.6c0,1.2-0.5,1.8-2.1,3c-1.1,0.7-1.5,1.2-1.6,1.6h4.1l-0.2,1.6H392.5z", 1, "st1"], ["d", "M406.4,496.8c0,2.4-0.7,4.5-3.3,4.5c-2.5,0-3.3-2.1-3.3-4.4c0-2.3,0.9-4.4,3.3-4.4\n                  C405.5,492.4,406.4,494.4,406.4,496.8z M401.7,496.8c0,1.6,0.2,3,1.4,3c1.2,0,1.3-1.3,1.3-3c0-1.7-0.2-2.9-1.3-2.9\n                  C402,493.9,401.7,495,401.7,496.8z", 1, "st1"], ["d", "M321.1,501.1l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                  c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H321.1z", 1, "st1"], ["d", "M333.1,501.1v-6.4c-0.4,0.2-1.1,0.3-1.5,0.4v-1.4c0.8-0.1,1.6-0.6,2.1-1.1h1.3v8.6H333.1z", 1, "st1"], ["d", "M336.7,501.1V501c0-1.5,0.7-2.7,2.5-4c1.2-0.9,1.6-1.2,1.6-1.9c0-0.7-0.4-1.2-1.1-1.2c-0.8,0-1.1,0.5-1.3,1.3\n                  h-1.8c0.1-1.5,1.1-2.7,3.1-2.7c2.2,0,3,1.3,3,2.6c0,1.2-0.5,1.8-2.1,3c-1.1,0.7-1.5,1.2-1.6,1.6h4.1l-0.2,1.6H336.7z", 1, "st1"], ["d", "M344.1,501.1V501c0-1.5,0.7-2.7,2.5-4c1.2-0.9,1.6-1.2,1.6-1.9c0-0.7-0.4-1.2-1.1-1.2c-0.8,0-1.1,0.5-1.3,1.3\n                  H344c0.1-1.5,1.1-2.7,3.1-2.7c2.2,0,3,1.3,3,2.6c0,1.2-0.5,1.8-2.1,3c-1.1,0.7-1.5,1.2-1.6,1.6h4.1l-0.2,1.6H344.1z", 1, "st1"], ["d", "M263.2,501.1l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                  c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H263.2z", 1, "st1"], ["d", "M275.2,501.1v-6.4c-0.4,0.2-1.1,0.3-1.5,0.4v-1.4c0.8-0.1,1.6-0.6,2.1-1.1h1.3v8.6H275.2z", 1, "st1"], ["d", "M278.8,501.1V501c0-1.5,0.7-2.7,2.5-4c1.2-0.9,1.6-1.2,1.6-1.9c0-0.7-0.4-1.2-1.1-1.2c-0.8,0-1.1,0.5-1.3,1.3\n                  h-1.8c0.1-1.5,1.1-2.7,3.1-2.7c2.2,0,3,1.3,3,2.6c0,1.2-0.5,1.8-2.1,3c-1.1,0.7-1.5,1.2-1.6,1.6h4.1l-0.2,1.6H278.8z", 1, "st1"], ["d", "M289.7,501.1v-1.9h-3.9v-1.6l3.6-5h2v5.1h1l-0.2,1.5h-0.9v1.9H289.7z M289.7,496.2c0-0.9,0-1.4,0-2\n                  c-0.3,0.7-1.5,2.3-2.3,3.5h2.2V496.2z", 1, "st1"], ["d", "M128,492.1l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                  c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H128z", 1, "st1"], ["d", "M140,492.1v-6.4c-0.4,0.2-1.1,0.3-1.5,0.4v-1.4c0.8-0.1,1.6-0.6,2.1-1.1h1.3v8.6H140z", 1, "st1"], ["d", "M143.6,492.1V492c0-1.5,0.7-2.7,2.5-4c1.2-0.9,1.6-1.2,1.6-1.9c0-0.7-0.4-1.2-1.1-1.2c-0.8,0-1.1,0.5-1.3,1.3\n                  h-1.8c0.1-1.5,1.1-2.7,3.1-2.7c2.2,0,3,1.3,3,2.6c0,1.2-0.5,1.8-2.1,3c-1.1,0.7-1.5,1.2-1.6,1.6h4.1l-0.2,1.6H143.6z", 1, "st1"], ["d", "M150.8,489.7c0-1.1,0.8-1.8,1.4-2c-0.7-0.4-1.1-0.9-1.1-1.8c0-1.5,1.1-2.4,3-2.4c1.8,0,2.9,0.9,2.9,2.4\n                  c0,1-0.5,1.5-1.1,1.7c0.6,0.2,1.4,0.9,1.4,2.1c0,1.8-1.4,2.7-3.4,2.7C152.2,492.3,150.8,491.4,150.8,489.7z M155.5,489.6\n                  c0-0.8-0.6-1.2-1.4-1.2c-0.9,0-1.4,0.5-1.4,1.2c0,0.8,0.6,1.3,1.4,1.3C154.9,490.8,155.5,490.5,155.5,489.6z M152.9,485.9\n                  c0,0.6,0.4,1,1.2,1c0.8,0,1.2-0.3,1.2-1c0-0.6-0.4-1-1.2-1C153.3,484.8,152.9,485.2,152.9,485.9z", 1, "st1"], ["d", "M129.1,353.1l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                  c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H129.1z", 1, "st1"], ["d", "M141,353.1v-6.4c-0.4,0.2-1.1,0.3-1.5,0.4v-1.4c0.8-0.1,1.6-0.6,2.1-1.1h1.3v8.6H141z", 1, "st1"], ["d", "M144.7,353.1V353c0-1.5,0.7-2.7,2.5-4c1.2-0.9,1.6-1.2,1.6-1.9c0-0.7-0.4-1.2-1.1-1.2c-0.8,0-1.1,0.5-1.3,1.3\n                  h-1.8c0.1-1.5,1.1-2.7,3.1-2.7c2.2,0,3,1.3,3,2.6c0,1.2-0.5,1.8-2.1,3c-1.1,0.7-1.5,1.2-1.6,1.6h4.1l-0.2,1.6H144.7z", 1, "st1"], ["d", "M153.8,351c0.2,0.5,0.5,0.8,1.2,0.8c1.2,0,1.3-1.5,1.4-2.4c-0.4,0.5-1,0.7-1.8,0.7c-1.8,0-2.8-1.2-2.8-2.8\n                  c0-1.7,1.2-3,3.1-3c2.4,0,3.2,1.9,3.2,4c0,2.4-0.6,4.9-3.3,4.9c-2,0-2.8-1.2-3-2.3H153.8z M153.7,347.3c0,0.9,0.5,1.4,1.3,1.4\n                  c0.8,0,1.3-0.4,1.3-1.4c0-0.6-0.2-1.5-1.3-1.5C154.2,345.9,153.7,346.5,153.7,347.3z", 1, "st1"], ["d", "M129.1,207.1l-2.3-9h2.1c0.8,4.1,1.2,5.9,1.3,6.9h0c0.3-1.6,1.2-4.8,1.7-6.9h1.7c0.5,1.7,1.4,5.2,1.7,6.8h0\n                  c0.3-2,1.2-5.4,1.5-6.8h1.9l-2.4,9h-2c-0.5-2-1.3-4.9-1.6-6.4h0c-0.3,1.6-1.1,4.6-1.6,6.4H129.1z", 1, "st1"], ["d", "M141.1,207.1v-6.4c-0.4,0.2-1.1,0.3-1.5,0.4v-1.4c0.8-0.1,1.6-0.6,2.1-1.1h1.3v8.6H141.1z", 1, "st1"], ["d", "M144.6,200.8c0.1-1.1,0.9-2.4,3-2.4c2,0,2.9,1.1,2.9,2.3c0,1-0.6,1.5-1.1,1.7v0c0.6,0.2,1.4,0.7,1.4,2.1\n                  c0,1.2-0.8,2.7-3.2,2.7c-2.3,0-3.1-1.4-3.2-2.5h1.8c0.1,0.6,0.5,1.1,1.4,1.1c0.9,0,1.3-0.6,1.3-1.3c0-0.8-0.4-1.3-1.4-1.3h-0.8\n                  v-1.4h0.7c0.9,0,1.2-0.3,1.2-1c0-0.6-0.3-1-1.1-1c-0.9,0-1.1,0.5-1.2,0.9H144.6z", 1, "st1"], ["d", "M152,200.8c0.1-1.1,0.9-2.4,3-2.4c2,0,2.9,1.1,2.9,2.3c0,1-0.6,1.5-1.1,1.7v0c0.6,0.2,1.4,0.7,1.4,2.1\n                  c0,1.2-0.8,2.7-3.2,2.7c-2.3,0-3.1-1.4-3.2-2.5h1.8c0.1,0.6,0.5,1.1,1.4,1.1c0.9,0,1.3-0.6,1.3-1.3c0-0.8-0.4-1.3-1.4-1.3h-0.8\n                  v-1.4h0.7c0.9,0,1.2-0.3,1.2-1c0-0.6-0.3-1-1.1-1c-0.9,0-1.1,0.5-1.2,0.9H152z", 1, "st1"], ["id", "floor2", "role", "tabpanel", "aria-labelledby", "floor2-tab", 1, "tab-pane"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 628.48 518", "width", "1em", "height", "1em"], ["id", "W201", "x", "0.5", "y", "418.96", "width", "93.83", "height", "98.36", 1, "mapItem", 3, "click"], ["id", "W202", "x", "0.5", "y", "330.43", "width", "69.14", "height", "83.61", 1, "mapItem", 3, "click"], ["id", "W2", "x", "30.13", "y", "212.4", "width", "64.2", "height", "93.44", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W2", "points", "99.27 281.25 99.27 128.79 277.04 128.79 277.04 197.65 257.29 202.57 257.29 281.25 99.27 281.25", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W2", "points", "98.98 286.5 98.98 389.5 276.98 389.5 276.98 340.5 256.98 340.5 256.98 286.5 98.98 286.5", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W223", "x", "98.98", "y", "418.5", "width", "69", "height", "99", 1, "mapItem", 3, "click"], ["id", "W222", "x", "172.98", "y", "418.5", "width", "50", "height", "99", 1, "mapItem", 3, "click"], ["id", "W221", "x", "227.98", "y", "418.5", "width", "49", "height", "99", 1, "mapItem", 3, "click"], ["id", "W220", "x", "281.98", "y", "418.5", "width", "49", "height", "99", 1, "mapItem", 3, "click"], ["id", "W219", "x", "335.98", "y", "418.5", "width", "50", "height", "99", 1, "mapItem", 3, "click"], ["id", "W218", "x", "390.98", "y", "418.5", "width", "49", "height", "99", 1, "mapItem", 3, "click"], ["id", "W217", "x", "444.98", "y", "418.5", "width", "49", "height", "99", 1, "mapItem", 3, "click"], ["id", "W216", "x", "498.98", "y", "389.5", "width", "74", "height", "128", 1, "mapItem", 3, "click"], ["id", "W215", "x", "498.98", "y", "296.5", "width", "74", "height", "88", 1, "mapItem", 3, "click"], ["id", "W2", "points", "518.98 291.5 627.98 291.5 627.98 148.5 498.98 177.5 518.98 291.5", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W233", "points", "493.98 173.5 572.98 153.5 573.98 104.5 513.98 104.5 493.98 173.5", 1, "mapItem", 3, "click"], ["id", "W213", "x", "498.98", "y", "0.5", "width", "74", "height", "99", 1, "mapItem", 3, "click"], ["id", "W212", "x", "444.98", "y", "0.5", "width", "49", "height", "99", 1, "mapItem", 3, "click"], ["id", "W211", "x", "390.98", "y", "0.5", "width", "49", "height", "99", 1, "mapItem", 3, "click"], ["id", "W210", "x", "335.98", "y", "0.5", "width", "50", "height", "99", 1, "mapItem", 3, "click"], ["id", "W209", "x", "281.98", "y", "0.5", "width", "49", "height", "99", 1, "mapItem", 3, "click"], ["id", "W208", "x", "227.98", "y", "0.5", "width", "49", "height", "99", 1, "mapItem", 3, "click"], ["id", "W207", "x", "172.98", "y", "0.5", "width", "50", "height", "99", 1, "mapItem", 3, "click"], ["id", "W206", "x", "98.98", "y", "0.5", "width", "69", "height", "99", 1, "mapItem", 3, "click"], ["id", "W205", "x", "0.98", "y", "0.5", "width", "93", "height", "99", 1, "mapItem", 3, "click"], ["id", "W204", "x", "0.98", "y", "104.5", "width", "69", "height", "83", 1, "mapItem", 3, "click"], ["id", "W2", "x", "301.98", "y", "296.5", "width", "153", "height", "93", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["d", "M34.3,56.2l-2.1-8.3h1.9c0.8,3.8,1.1,5.5,1.2,6.4h0c0.3-1.5,1.1-4.4,1.6-6.4h1.6c0.4,1.6,1.3,4.8,1.5,6.3h0\n                    c0.3-1.8,1.1-5,1.4-6.3h1.7L41,56.2h-1.9c-0.4-1.8-1.2-4.5-1.5-5.9h0c-0.3,1.5-1,4.3-1.5,5.9H34.3z", 1, "st1"], ["d", "M43.9,56.2v-0.1c0-1.4,0.6-2.5,2.3-3.7c1.1-0.8,1.5-1.1,1.5-1.8c0-0.7-0.3-1.1-1-1.1c-0.8,0-1.1,0.5-1.2,1.2\n                    h-1.7c0.1-1.4,1-2.5,2.8-2.5c2,0,2.7,1.2,2.7,2.4c0,1.1-0.5,1.7-1.9,2.7c-1,0.7-1.4,1.1-1.5,1.5h3.7l-0.2,1.4H43.9z", 1, "st1"], ["d", "M56.7,52.2c0,2.2-0.7,4.1-3,4.1c-2.3,0-3-1.9-3-4.1c0-2.2,0.8-4.1,3.1-4.1C55.9,48.2,56.7,50,56.7,52.2z\n                    M52.4,52.2c0,1.5,0.2,2.7,1.3,2.7c1.1,0,1.2-1.2,1.2-2.8c0-1.5-0.2-2.7-1.2-2.7C52.7,49.5,52.4,50.5,52.4,52.2z", 1, "st1"], ["d", "M63.2,49.7h-3.2c-0.1,0.4-0.2,1.2-0.2,1.5c0.3-0.2,0.7-0.4,1.4-0.4c1.6,0,2.4,1.1,2.4,2.6c0,1.5-0.8,2.9-3,2.9\n                    c-1.6,0-2.7-0.8-2.9-2.2h1.7c0.2,0.5,0.5,0.9,1.2,0.9c0.8,0,1.2-0.6,1.2-1.5c0-0.8-0.3-1.4-1.2-1.4c-0.7,0-1,0.3-1.2,0.8L58,52.7\n                    c0.2-1,0.5-3.3,0.7-4.4h4.8L63.2,49.7z", 1, "st1"], ["d", "M120.3,56.2l-2.1-8.3h1.9c0.8,3.8,1.1,5.5,1.2,6.4h0c0.3-1.5,1.1-4.4,1.6-6.4h1.6c0.4,1.6,1.3,4.8,1.5,6.3h0\n                    c0.3-1.8,1.1-5,1.4-6.3h1.7l-2.2,8.3h-1.9c-0.4-1.8-1.2-4.5-1.5-5.9h0c-0.3,1.5-1,4.3-1.5,5.9H120.3z", 1, "st1"], ["d", "M129.9,56.2v-0.1c0-1.4,0.6-2.5,2.3-3.7c1.1-0.8,1.5-1.1,1.5-1.8c0-0.7-0.3-1.1-1-1.1c-0.8,0-1.1,0.5-1.2,1.2\n                    h-1.7c0.1-1.4,1-2.5,2.8-2.5c2,0,2.7,1.2,2.7,2.4c0,1.1-0.5,1.7-1.9,2.7c-1,0.7-1.4,1.1-1.5,1.5h3.7l-0.2,1.4H129.9z", 1, "st1"], ["d", "M142.7,52.2c0,2.2-0.7,4.1-3,4.1c-2.3,0-3-1.9-3-4.1c0-2.2,0.8-4.1,3.1-4.1C141.9,48.2,142.7,50,142.7,52.2z\n                    M138.4,52.2c0,1.5,0.2,2.7,1.3,2.7c1.1,0,1.2-1.2,1.2-2.8c0-1.5-0.2-2.7-1.2-2.7C138.7,49.5,138.4,50.5,138.4,52.2z", 1, "st1"], ["d", "M147.9,50.2c-0.1-0.4-0.3-0.8-1-0.8c-1.1,0-1.3,1-1.4,2.1c0.3-0.4,0.9-0.7,1.8-0.7c1.4,0,2.5,1.1,2.5,2.6\n                    c0,1.7-1.1,2.9-2.9,2.9c-2.3,0-3.1-1.8-3.1-4c0-2.1,0.7-4.2,3.1-4.2c1.7,0,2.5,1.1,2.6,2.1H147.9z M148,53.5c0-0.8-0.3-1.4-1.2-1.4\n                    c-0.8,0-1.2,0.4-1.2,1.4c0,0.6,0.3,1.5,1.2,1.5C147.6,55,148,54.3,148,53.5z", 1, "st1"], ["d", "M184.3,56.2l-2.1-8.3h1.9c0.8,3.8,1.1,5.5,1.2,6.4h0c0.3-1.5,1.1-4.4,1.6-6.4h1.6c0.4,1.6,1.3,4.8,1.5,6.3h0\n                    c0.3-1.8,1.1-5,1.4-6.3h1.7l-2.2,8.3h-1.9c-0.4-1.8-1.2-4.5-1.5-5.9h0c-0.3,1.5-1,4.3-1.5,5.9H184.3z", 1, "st1"], ["d", "M193.9,56.2v-0.1c0-1.4,0.6-2.5,2.3-3.7c1.1-0.8,1.5-1.1,1.5-1.8c0-0.7-0.3-1.1-1-1.1c-0.8,0-1.1,0.5-1.2,1.2\n                    h-1.7c0.1-1.4,1-2.5,2.8-2.5c2,0,2.7,1.2,2.7,2.4c0,1.1-0.5,1.7-1.9,2.7c-1,0.7-1.4,1.1-1.5,1.5h3.7l-0.2,1.4H193.9z", 1, "st1"], ["d", "M206.7,52.2c0,2.2-0.7,4.1-3,4.1c-2.3,0-3-1.9-3-4.1c0-2.2,0.8-4.1,3.1-4.1C205.9,48.2,206.7,50,206.7,52.2z\n                    M202.4,52.2c0,1.5,0.2,2.7,1.3,2.7c1.1,0,1.2-1.2,1.2-2.8c0-1.5-0.2-2.7-1.2-2.7C202.7,49.5,202.4,50.5,202.4,52.2z", 1, "st1"], ["d", "M213.1,48.3v1.3c-1.3,1.8-2.5,4.3-2.8,6.6h-1.8c0.3-2.3,1.7-5.1,2.8-6.5h-3.7v-1.4H213.1z", 1, "st1"], ["d", "M238.3,56.2l-2.1-8.3h1.9c0.8,3.8,1.1,5.5,1.2,6.4h0c0.3-1.5,1.1-4.4,1.6-6.4h1.6c0.4,1.6,1.3,4.8,1.5,6.3h0\n                    c0.3-1.8,1.1-5,1.4-6.3h1.7l-2.2,8.3h-1.9c-0.4-1.8-1.2-4.5-1.5-5.9h0c-0.3,1.5-1,4.3-1.5,5.9H238.3z", 1, "st1"], ["d", "M247.9,56.2v-0.1c0-1.4,0.6-2.5,2.3-3.7c1.1-0.8,1.5-1.1,1.5-1.8c0-0.7-0.3-1.1-1-1.1c-0.8,0-1.1,0.5-1.2,1.2\n                    h-1.7c0.1-1.4,1-2.5,2.8-2.5c2,0,2.7,1.2,2.7,2.4c0,1.1-0.5,1.7-1.9,2.7c-1,0.7-1.4,1.1-1.5,1.5h3.7l-0.2,1.4H247.9z", 1, "st1"], ["d", "M260.7,52.2c0,2.2-0.7,4.1-3,4.1c-2.3,0-3-1.9-3-4.1c0-2.2,0.8-4.1,3.1-4.1C259.9,48.2,260.7,50,260.7,52.2z\n                    M256.4,52.2c0,1.5,0.2,2.7,1.3,2.7c1.1,0,1.2-1.2,1.2-2.8c0-1.5-0.2-2.7-1.2-2.7C256.7,49.5,256.4,50.5,256.4,52.2z", 1, "st1"], ["d", "M261.8,53.9c0-1,0.7-1.6,1.3-1.9c-0.6-0.4-1-0.8-1-1.6c0-1.3,1-2.2,2.8-2.2c1.6,0,2.7,0.8,2.7,2.2\n                    c0,0.9-0.5,1.4-1,1.6c0.6,0.2,1.3,0.9,1.3,1.9c0,1.6-1.3,2.5-3.1,2.5C263.1,56.3,261.8,55.5,261.8,53.9z M266.1,53.9\n                    c0-0.8-0.5-1.1-1.3-1.1c-0.9,0-1.3,0.5-1.3,1.1c0,0.7,0.5,1.2,1.3,1.2C265.6,55,266.1,54.7,266.1,53.9z M263.7,50.5\n                    c0,0.5,0.4,0.9,1.1,0.9c0.7,0,1.1-0.3,1.1-0.9c0-0.6-0.4-1-1.1-1C264.1,49.5,263.7,49.8,263.7,50.5z", 1, "st1"], ["d", "M293.3,56.2l-2.1-8.3h1.9c0.8,3.8,1.1,5.5,1.2,6.4h0c0.3-1.5,1.1-4.4,1.6-6.4h1.6c0.4,1.6,1.3,4.8,1.5,6.3h0\n                    c0.3-1.8,1.1-5,1.4-6.3h1.7l-2.2,8.3h-1.9c-0.4-1.8-1.2-4.5-1.5-5.9h0c-0.3,1.5-1,4.3-1.5,5.9H293.3z", 1, "st1"], ["d", "M302.9,56.2v-0.1c0-1.4,0.6-2.5,2.3-3.7c1.1-0.8,1.5-1.1,1.5-1.8c0-0.7-0.3-1.1-1-1.1c-0.8,0-1.1,0.5-1.2,1.2\n                    h-1.7c0.1-1.4,1-2.5,2.8-2.5c2,0,2.7,1.2,2.7,2.4c0,1.1-0.5,1.7-1.9,2.7c-1,0.7-1.4,1.1-1.5,1.5h3.7l-0.2,1.4H302.9z", 1, "st1"], ["d", "M315.7,52.2c0,2.2-0.7,4.1-3,4.1c-2.3,0-3-1.9-3-4.1c0-2.2,0.8-4.1,3.1-4.1C314.9,48.2,315.7,50,315.7,52.2z\n                    M311.4,52.2c0,1.5,0.2,2.7,1.3,2.7c1.1,0,1.2-1.2,1.2-2.8c0-1.5-0.2-2.7-1.2-2.7C311.7,49.5,311.4,50.5,311.4,52.2z", 1, "st1"], ["d", "M318.6,54.2c0.1,0.5,0.4,0.8,1.1,0.8c1.1,0,1.2-1.4,1.3-2.2c-0.3,0.5-1,0.7-1.6,0.7c-1.6,0-2.6-1.1-2.6-2.5\n                    c0-1.5,1.1-2.7,2.9-2.7c2.2,0,3,1.7,3,3.7c0,2.2-0.6,4.5-3,4.5c-1.8,0-2.6-1.1-2.7-2.1H318.6z M318.5,50.8c0,0.8,0.5,1.3,1.2,1.3\n                    c0.8,0,1.2-0.4,1.2-1.3c0-0.5-0.2-1.3-1.2-1.3C318.9,49.5,318.5,50.1,318.5,50.8z", 1, "st1"], ["d", "M348.3,56.2l-2.1-8.3h1.9c0.8,3.8,1.1,5.5,1.2,6.4h0c0.3-1.5,1.1-4.4,1.6-6.4h1.6c0.4,1.6,1.3,4.8,1.5,6.3h0\n                    c0.3-1.8,1.1-5,1.4-6.3h1.7l-2.2,8.3h-1.9c-0.4-1.8-1.2-4.5-1.5-5.9h0c-0.3,1.5-1,4.3-1.5,5.9H348.3z", 1, "st1"], ["d", "M357.9,56.2v-0.1c0-1.4,0.6-2.5,2.3-3.7c1.1-0.8,1.5-1.1,1.5-1.8c0-0.7-0.3-1.1-1-1.1c-0.8,0-1.1,0.5-1.2,1.2\n                    h-1.7c0.1-1.4,1-2.5,2.8-2.5c2,0,2.7,1.2,2.7,2.4c0,1.1-0.5,1.7-1.9,2.7c-1,0.7-1.4,1.1-1.5,1.5h3.7l-0.2,1.4H357.9z", 1, "st1"], ["d", "M366,56.2v-5.9c-0.4,0.2-1,0.3-1.4,0.3v-1.3c0.7-0.1,1.5-0.6,2-1.1h1.2v7.9H366z", 1, "st1"], ["d", "M375.4,52.2c0,2.2-0.7,4.1-3,4.1c-2.3,0-3-1.9-3-4.1c0-2.2,0.8-4.1,3.1-4.1C374.6,48.2,375.4,50,375.4,52.2z\n                    M371.1,52.2c0,1.5,0.2,2.7,1.3,2.7c1.1,0,1.2-1.2,1.2-2.8c0-1.5-0.2-2.7-1.2-2.7C371.4,49.5,371.1,50.5,371.1,52.2z", 1, "st1"], ["d", "M402.3,56.2l-2.1-8.3h1.9c0.8,3.8,1.1,5.5,1.2,6.4h0c0.3-1.5,1.1-4.4,1.6-6.4h1.6c0.4,1.6,1.3,4.8,1.5,6.3h0\n                    c0.3-1.8,1.1-5,1.4-6.3h1.7l-2.2,8.3h-1.9c-0.4-1.8-1.2-4.5-1.5-5.9h0c-0.3,1.5-1,4.3-1.5,5.9H402.3z", 1, "st1"], ["d", "M411.9,56.2v-0.1c0-1.4,0.6-2.5,2.3-3.7c1.1-0.8,1.5-1.1,1.5-1.8c0-0.7-0.3-1.1-1-1.1c-0.8,0-1.1,0.5-1.2,1.2\n                    h-1.7c0.1-1.4,1-2.5,2.8-2.5c2,0,2.7,1.2,2.7,2.4c0,1.1-0.5,1.7-1.9,2.7c-1,0.7-1.4,1.1-1.5,1.5h3.7l-0.2,1.4H411.9z", 1, "st1"], ["d", "M420,56.2v-5.9c-0.4,0.2-1,0.3-1.4,0.3v-1.3c0.7-0.1,1.5-0.6,2-1.1h1.2v7.9H420z", 1, "st1"], ["d", "M424.5,56.2v-5.9c-0.4,0.2-1,0.3-1.4,0.3v-1.3c0.7-0.1,1.5-0.6,2-1.1h1.2v7.9H424.5z", 1, "st1"], ["d", "M456.3,56.2l-2.1-8.3h1.9c0.8,3.8,1.1,5.5,1.2,6.4h0c0.3-1.5,1.1-4.4,1.6-6.4h1.6c0.4,1.6,1.3,4.8,1.5,6.3h0\n                    c0.3-1.8,1.1-5,1.4-6.3h1.7l-2.2,8.3h-1.9c-0.4-1.8-1.2-4.5-1.5-5.9h0c-0.3,1.5-1,4.3-1.5,5.9H456.3z", 1, "st1"], ["d", "M465.9,56.2v-0.1c0-1.4,0.6-2.5,2.3-3.7c1.1-0.8,1.5-1.1,1.5-1.8c0-0.7-0.3-1.1-1-1.1c-0.8,0-1.1,0.5-1.2,1.2\n                    h-1.7c0.1-1.4,1-2.5,2.8-2.5c2,0,2.7,1.2,2.7,2.4c0,1.1-0.5,1.7-1.9,2.7c-1,0.7-1.4,1.1-1.5,1.5h3.7l-0.2,1.4H465.9z", 1, "st1"], ["d", "M474,56.2v-5.9c-0.4,0.2-1,0.3-1.4,0.3v-1.3c0.7-0.1,1.5-0.6,2-1.1h1.2v7.9H474z", 1, "st1"], ["d", "M477.4,56.2v-0.1c0-1.4,0.6-2.5,2.3-3.7c1.1-0.8,1.5-1.1,1.5-1.8c0-0.7-0.3-1.1-1-1.1c-0.8,0-1.1,0.5-1.2,1.2\n                    h-1.7c0.1-1.4,1-2.5,2.8-2.5c2,0,2.7,1.2,2.7,2.4c0,1.1-0.5,1.7-1.9,2.7c-1,0.7-1.4,1.1-1.5,1.5h3.7l-0.2,1.4H477.4z", 1, "st1"], ["d", "M522.3,56.2l-2.1-8.3h1.9c0.8,3.8,1.1,5.5,1.2,6.4h0c0.3-1.5,1.1-4.4,1.6-6.4h1.6c0.4,1.6,1.3,4.8,1.5,6.3h0\n                    c0.3-1.8,1.1-5,1.4-6.3h1.7l-2.2,8.3h-1.9c-0.4-1.8-1.2-4.5-1.5-5.9h0c-0.3,1.5-1,4.3-1.5,5.9H522.3z", 1, "st1"], ["d", "M531.9,56.2v-0.1c0-1.4,0.6-2.5,2.3-3.7c1.1-0.8,1.5-1.1,1.5-1.8c0-0.7-0.3-1.1-1-1.1c-0.8,0-1.1,0.5-1.2,1.2\n                    h-1.7c0.1-1.4,1-2.5,2.8-2.5c2,0,2.7,1.2,2.7,2.4c0,1.1-0.5,1.7-1.9,2.7c-1,0.7-1.4,1.1-1.5,1.5h3.7l-0.2,1.4H531.9z", 1, "st1"], ["d", "M540,56.2v-5.9c-0.4,0.2-1,0.3-1.4,0.3v-1.3c0.7-0.1,1.5-0.6,2-1.1h1.2v7.9H540z", 1, "st1"], ["d", "M543.3,50.3c0.1-1,0.8-2.2,2.8-2.2c1.8,0,2.6,1,2.6,2.1c0,1-0.5,1.4-1,1.6v0c0.5,0.2,1.3,0.7,1.3,1.9\n                    c0,1.1-0.7,2.5-3,2.5c-2.1,0-2.8-1.3-2.9-2.3h1.7c0.1,0.5,0.5,1,1.3,1c0.8,0,1.2-0.5,1.2-1.2c0-0.7-0.4-1.2-1.3-1.2h-0.7v-1.3h0.6\n                    c0.8,0,1.1-0.3,1.1-0.9c0-0.5-0.3-0.9-1-0.9c-0.8,0-1,0.4-1.1,0.8H543.3z", 1, "st1"], ["d", "M522.3,136.2l-2.1-8.3h1.9c0.8,3.8,1.1,5.5,1.2,6.4h0c0.3-1.5,1.1-4.4,1.6-6.4h1.6c0.4,1.6,1.3,4.8,1.5,6.3h0\n                    c0.3-1.8,1.1-5,1.4-6.3h1.7l-2.2,8.3h-1.9c-0.4-1.8-1.2-4.5-1.5-5.9h0c-0.3,1.5-1,4.3-1.5,5.9H522.3z", 1, "st1"], ["d", "M531.9,136.2v-0.1c0-1.4,0.6-2.5,2.3-3.7c1.1-0.8,1.5-1.1,1.5-1.8c0-0.7-0.3-1.1-1-1.1c-0.8,0-1.1,0.5-1.2,1.2\n                    h-1.7c0.1-1.4,1-2.5,2.8-2.5c2,0,2.7,1.2,2.7,2.4c0,1.1-0.5,1.7-1.9,2.7c-1,0.7-1.4,1.1-1.5,1.5h3.7l-0.2,1.4H531.9z", 1, "st1"], ["d", "M538.6,130.3c0.1-1,0.8-2.2,2.8-2.2c1.8,0,2.6,1,2.6,2.1c0,1-0.5,1.4-1,1.6v0c0.5,0.2,1.3,0.7,1.3,1.9\n                    c0,1.1-0.7,2.5-3,2.5c-2.1,0-2.8-1.3-2.9-2.3h1.7c0.1,0.5,0.5,1,1.3,1c0.8,0,1.2-0.5,1.2-1.2c0-0.7-0.4-1.2-1.3-1.2h-0.7v-1.3h0.6\n                    c0.8,0,1.1-0.3,1.1-0.9c0-0.5-0.3-0.9-1-0.9c-0.8,0-1,0.4-1.1,0.8H538.6z", 1, "st1"], ["d", "M545.4,130.3c0.1-1,0.8-2.2,2.8-2.2c1.8,0,2.6,1,2.6,2.1c0,1-0.5,1.4-1,1.6v0c0.5,0.2,1.3,0.7,1.3,1.9\n                    c0,1.1-0.7,2.5-3,2.5c-2.1,0-2.8-1.3-2.9-2.3h1.7c0.1,0.5,0.5,1,1.3,1c0.8,0,1.2-0.5,1.2-1.2c0-0.7-0.4-1.2-1.3-1.2h-0.7v-1.3h0.6\n                    c0.8,0,1.1-0.3,1.1-0.9c0-0.5-0.3-0.9-1-0.9c-0.8,0-1,0.4-1.1,0.8H545.4z", 1, "st1"], ["d", "M522.3,346.2l-2.1-8.3h1.9c0.8,3.8,1.1,5.5,1.2,6.4h0c0.3-1.5,1.1-4.4,1.6-6.4h1.6c0.4,1.6,1.3,4.8,1.5,6.3h0\n                    c0.3-1.8,1.1-5,1.4-6.3h1.7l-2.2,8.3h-1.9c-0.4-1.8-1.2-4.5-1.5-5.9h0c-0.3,1.5-1,4.3-1.5,5.9H522.3z", 1, "st1"], ["d", "M531.9,346.2v-0.1c0-1.4,0.6-2.5,2.3-3.7c1.1-0.8,1.5-1.1,1.5-1.8c0-0.7-0.3-1.1-1-1.1c-0.8,0-1.1,0.5-1.2,1.2\n                    h-1.7c0.1-1.4,1-2.5,2.8-2.5c2,0,2.7,1.2,2.7,2.4c0,1.1-0.5,1.7-1.9,2.7c-1,0.7-1.4,1.1-1.5,1.5h3.7l-0.2,1.4H531.9z", 1, "st1"], ["d", "M540,346.2v-5.9c-0.4,0.2-1,0.3-1.4,0.3v-1.3c0.7-0.1,1.5-0.6,2-1.1h1.2v7.9H540z", 1, "st1"], ["d", "M548.8,339.7h-3.2c-0.1,0.4-0.2,1.2-0.2,1.5c0.3-0.2,0.7-0.4,1.4-0.4c1.6,0,2.4,1.1,2.4,2.6\n                    c0,1.5-0.8,2.9-3,2.9c-1.6,0-2.7-0.8-2.9-2.2h1.7c0.2,0.5,0.5,0.9,1.2,0.9c0.8,0,1.2-0.6,1.2-1.5c0-0.8-0.3-1.4-1.2-1.4\n                    c-0.7,0-1,0.3-1.2,0.8l-1.6-0.2c0.2-1,0.5-3.3,0.7-4.4h4.8L548.8,339.7z", 1, "st1"], ["d", "M522.3,456.2l-2.1-8.3h1.9c0.8,3.8,1.1,5.5,1.2,6.4h0c0.3-1.5,1.1-4.4,1.6-6.4h1.6c0.4,1.6,1.3,4.8,1.5,6.3h0\n                    c0.3-1.8,1.1-5,1.4-6.3h1.7l-2.2,8.3h-1.9c-0.4-1.8-1.2-4.5-1.5-5.9h0c-0.3,1.5-1,4.3-1.5,5.9H522.3z", 1, "st1"], ["d", "M531.9,456.2v-0.1c0-1.4,0.6-2.5,2.3-3.7c1.1-0.8,1.5-1.1,1.5-1.8c0-0.7-0.3-1.1-1-1.1c-0.8,0-1.1,0.5-1.2,1.2\n                    h-1.7c0.1-1.4,1-2.5,2.8-2.5c2,0,2.7,1.2,2.7,2.4c0,1.1-0.5,1.7-1.9,2.7c-1,0.7-1.4,1.1-1.5,1.5h3.7l-0.2,1.4H531.9z", 1, "st1"], ["d", "M540,456.2v-5.9c-0.4,0.2-1,0.3-1.4,0.3v-1.3c0.7-0.1,1.5-0.6,2-1.1h1.2v7.9H540z", 1, "st1"], ["d", "M547.4,450.2c-0.1-0.4-0.3-0.8-1-0.8c-1.1,0-1.3,1-1.4,2.1c0.3-0.4,0.9-0.7,1.8-0.7c1.4,0,2.5,1.1,2.5,2.6\n                    c0,1.7-1.1,2.9-2.9,2.9c-2.3,0-3.1-1.8-3.1-4c0-2.1,0.7-4.2,3.1-4.2c1.7,0,2.5,1.1,2.6,2.1H547.4z M547.6,453.5\n                    c0-0.8-0.3-1.4-1.2-1.4c-0.8,0-1.2,0.4-1.2,1.4c0,0.6,0.3,1.5,1.2,1.5C547.2,455,547.6,454.3,547.6,453.5z", 1, "st1"], ["d", "M456.3,469.2l-2.1-8.3h1.9c0.8,3.8,1.1,5.5,1.2,6.4h0c0.3-1.5,1.1-4.4,1.6-6.4h1.6c0.4,1.6,1.3,4.8,1.5,6.3h0\n                    c0.3-1.8,1.1-5,1.4-6.3h1.7l-2.2,8.3h-1.9c-0.4-1.8-1.2-4.5-1.5-5.9h0c-0.3,1.5-1,4.3-1.5,5.9H456.3z", 1, "st1"], ["d", "M465.9,469.2v-0.1c0-1.4,0.6-2.5,2.3-3.7c1.1-0.8,1.5-1.1,1.5-1.8c0-0.7-0.3-1.1-1-1.1c-0.8,0-1.1,0.5-1.2,1.2\n                    h-1.7c0.1-1.4,1-2.5,2.8-2.5c2,0,2.7,1.2,2.7,2.4c0,1.1-0.5,1.7-1.9,2.7c-1,0.7-1.4,1.1-1.5,1.5h3.7l-0.2,1.4H465.9z", 1, "st1"], ["d", "M474,469.2v-5.9c-0.4,0.2-1,0.3-1.4,0.3v-1.3c0.7-0.1,1.5-0.6,2-1.1h1.2v7.9H474z", 1, "st1"], ["d", "M482.7,461.3v1.3c-1.3,1.8-2.5,4.3-2.8,6.6h-1.8c0.3-2.3,1.7-5.1,2.8-6.5h-3.7v-1.4H482.7z", 1, "st1"], ["d", "M402.3,469.2l-2.1-8.3h1.9c0.8,3.8,1.1,5.5,1.2,6.4h0c0.3-1.5,1.1-4.4,1.6-6.4h1.6c0.4,1.6,1.3,4.8,1.5,6.3h0\n                    c0.3-1.8,1.1-5,1.4-6.3h1.7l-2.2,8.3h-1.9c-0.4-1.8-1.2-4.5-1.5-5.9h0c-0.3,1.5-1,4.3-1.5,5.9H402.3z", 1, "st1"], ["d", "M411.9,469.2v-0.1c0-1.4,0.6-2.5,2.3-3.7c1.1-0.8,1.5-1.1,1.5-1.8c0-0.7-0.3-1.1-1-1.1c-0.8,0-1.1,0.5-1.2,1.2\n                    h-1.7c0.1-1.4,1-2.5,2.8-2.5c2,0,2.7,1.2,2.7,2.4c0,1.1-0.5,1.7-1.9,2.7c-1,0.7-1.4,1.1-1.5,1.5h3.7l-0.2,1.4H411.9z", 1, "st1"], ["d", "M420,469.2v-5.9c-0.4,0.2-1,0.3-1.4,0.3v-1.3c0.7-0.1,1.5-0.6,2-1.1h1.2v7.9H420z", 1, "st1"], ["d", "M423.2,466.9c0-1,0.7-1.6,1.3-1.9c-0.6-0.4-1-0.8-1-1.6c0-1.3,1-2.2,2.8-2.2c1.6,0,2.7,0.8,2.7,2.2\n                    c0,0.9-0.5,1.4-1,1.6c0.6,0.2,1.3,0.9,1.3,1.9c0,1.6-1.3,2.5-3.1,2.5C424.5,469.3,423.2,468.5,423.2,466.9z M427.5,466.9\n                    c0-0.8-0.5-1.1-1.3-1.1c-0.9,0-1.3,0.5-1.3,1.1c0,0.7,0.5,1.2,1.3,1.2C427,468,427.5,467.7,427.5,466.9z M425.2,463.5\n                    c0,0.5,0.4,0.9,1.1,0.9c0.7,0,1.1-0.3,1.1-0.9c0-0.6-0.4-1-1.1-1C425.5,462.5,425.2,462.8,425.2,463.5z", 1, "st1"], ["d", "M347.3,469.2l-2.1-8.3h1.9c0.8,3.8,1.1,5.5,1.2,6.4h0c0.3-1.5,1.1-4.4,1.6-6.4h1.6c0.4,1.6,1.3,4.8,1.5,6.3h0\n                    c0.3-1.8,1.1-5,1.4-6.3h1.7l-2.2,8.3h-1.9c-0.4-1.8-1.2-4.5-1.5-5.9h0c-0.3,1.5-1,4.3-1.5,5.9H347.3z", 1, "st1"], ["d", "M356.9,469.2v-0.1c0-1.4,0.6-2.5,2.3-3.7c1.1-0.8,1.5-1.1,1.5-1.8c0-0.7-0.3-1.1-1-1.1c-0.8,0-1.1,0.5-1.2,1.2\n                    h-1.7c0.1-1.4,1-2.5,2.8-2.5c2,0,2.7,1.2,2.7,2.4c0,1.1-0.5,1.7-1.9,2.7c-1,0.7-1.4,1.1-1.5,1.5h3.7l-0.2,1.4H356.9z", 1, "st1"], ["d", "M365,469.2v-5.9c-0.4,0.2-1,0.3-1.4,0.3v-1.3c0.7-0.1,1.5-0.6,2-1.1h1.2v7.9H365z", 1, "st1"], ["d", "M370.1,467.2c0.1,0.5,0.4,0.8,1.1,0.8c1.1,0,1.2-1.4,1.3-2.2c-0.3,0.5-1,0.7-1.6,0.7c-1.6,0-2.6-1.1-2.6-2.5\n                    c0-1.5,1.1-2.7,2.9-2.7c2.2,0,3,1.7,3,3.7c0,2.2-0.6,4.5-3,4.5c-1.8,0-2.6-1.1-2.7-2.1H370.1z M370,463.8c0,0.8,0.5,1.3,1.2,1.3\n                    c0.8,0,1.2-0.4,1.2-1.3c0-0.5-0.2-1.3-1.2-1.3C370.4,462.5,370,463.1,370,463.8z", 1, "st1"], ["d", "M293.3,469.2l-2.1-8.3h1.9c0.8,3.8,1.1,5.5,1.2,6.4h0c0.3-1.5,1.1-4.4,1.6-6.4h1.6c0.4,1.6,1.3,4.8,1.5,6.3h0\n                    c0.3-1.8,1.1-5,1.4-6.3h1.7l-2.2,8.3h-1.9c-0.4-1.8-1.2-4.5-1.5-5.9h0c-0.3,1.5-1,4.3-1.5,5.9H293.3z", 1, "st1"], ["d", "M302.9,469.2v-0.1c0-1.4,0.6-2.5,2.3-3.7c1.1-0.8,1.5-1.1,1.5-1.8c0-0.7-0.3-1.1-1-1.1c-0.8,0-1.1,0.5-1.2,1.2\n                    h-1.7c0.1-1.4,1-2.5,2.8-2.5c2,0,2.7,1.2,2.7,2.4c0,1.1-0.5,1.7-1.9,2.7c-1,0.7-1.4,1.1-1.5,1.5h3.7l-0.2,1.4H302.9z", 1, "st1"], ["d", "M309.7,469.2v-0.1c0-1.4,0.6-2.5,2.3-3.7c1.1-0.8,1.5-1.1,1.5-1.8c0-0.7-0.3-1.1-1-1.1c-0.8,0-1.1,0.5-1.2,1.2\n                    h-1.7c0.1-1.4,1-2.5,2.8-2.5c2,0,2.7,1.2,2.7,2.4c0,1.1-0.5,1.7-1.9,2.7c-1,0.7-1.4,1.1-1.5,1.5h3.7l-0.2,1.4H309.7z", 1, "st1"], ["d", "M322.5,465.2c0,2.2-0.7,4.1-3,4.1c-2.3,0-3-1.9-3-4.1c0-2.2,0.8-4.1,3.1-4.1\n                    C321.7,461.2,322.5,463,322.5,465.2z M318.2,465.2c0,1.5,0.2,2.7,1.3,2.7c1.1,0,1.2-1.2,1.2-2.8c0-1.5-0.2-2.7-1.2-2.7\n                    C318.5,462.5,318.2,463.5,318.2,465.2z", 1, "st1"], ["d", "M238.3,469.2l-2.1-8.3h1.9c0.8,3.8,1.1,5.5,1.2,6.4h0c0.3-1.5,1.1-4.4,1.6-6.4h1.6c0.4,1.6,1.3,4.8,1.5,6.3h0\n                    c0.3-1.8,1.1-5,1.4-6.3h1.7l-2.2,8.3h-1.9c-0.4-1.8-1.2-4.5-1.5-5.9h0c-0.3,1.5-1,4.3-1.5,5.9H238.3z", 1, "st1"], ["d", "M247.9,469.2v-0.1c0-1.4,0.6-2.5,2.3-3.7c1.1-0.8,1.5-1.1,1.5-1.8c0-0.7-0.3-1.1-1-1.1c-0.8,0-1.1,0.5-1.2,1.2\n                    h-1.7c0.1-1.4,1-2.5,2.8-2.5c2,0,2.7,1.2,2.7,2.4c0,1.1-0.5,1.7-1.9,2.7c-1,0.7-1.4,1.1-1.5,1.5h3.7l-0.2,1.4H247.9z", 1, "st1"], ["d", "M254.7,469.2v-0.1c0-1.4,0.6-2.5,2.3-3.7c1.1-0.8,1.5-1.1,1.5-1.8c0-0.7-0.3-1.1-1-1.1c-0.8,0-1.1,0.5-1.2,1.2\n                    h-1.7c0.1-1.4,1-2.5,2.8-2.5c2,0,2.7,1.2,2.7,2.4c0,1.1-0.5,1.7-1.9,2.7c-1,0.7-1.4,1.1-1.5,1.5h3.7l-0.2,1.4H254.7z", 1, "st1"], ["d", "M262.8,469.2v-5.9c-0.4,0.2-1,0.3-1.4,0.3v-1.3c0.7-0.1,1.5-0.6,2-1.1h1.2v7.9H262.8z", 1, "st1"], ["d", "M184.3,469.2l-2.1-8.3h1.9c0.8,3.8,1.1,5.5,1.2,6.4h0c0.3-1.5,1.1-4.4,1.6-6.4h1.6c0.4,1.6,1.3,4.8,1.5,6.3h0\n                    c0.3-1.8,1.1-5,1.4-6.3h1.7l-2.2,8.3h-1.9c-0.4-1.8-1.2-4.5-1.5-5.9h0c-0.3,1.5-1,4.3-1.5,5.9H184.3z", 1, "st1"], ["d", "M193.9,469.2v-0.1c0-1.4,0.6-2.5,2.3-3.7c1.1-0.8,1.5-1.1,1.5-1.8c0-0.7-0.3-1.1-1-1.1c-0.8,0-1.1,0.5-1.2,1.2\n                    h-1.7c0.1-1.4,1-2.5,2.8-2.5c2,0,2.7,1.2,2.7,2.4c0,1.1-0.5,1.7-1.9,2.7c-1,0.7-1.4,1.1-1.5,1.5h3.7l-0.2,1.4H193.9z", 1, "st1"], ["d", "M200.7,469.2v-0.1c0-1.4,0.6-2.5,2.3-3.7c1.1-0.8,1.5-1.1,1.5-1.8c0-0.7-0.3-1.1-1-1.1c-0.8,0-1.1,0.5-1.2,1.2\n                    h-1.7c0.1-1.4,1-2.5,2.8-2.5c2,0,2.7,1.2,2.7,2.4c0,1.1-0.5,1.7-1.9,2.7c-1,0.7-1.4,1.1-1.5,1.5h3.7l-0.2,1.4H200.7z", 1, "st1"], ["d", "M207.5,469.2v-0.1c0-1.4,0.6-2.5,2.3-3.7c1.1-0.8,1.5-1.1,1.5-1.8c0-0.7-0.3-1.1-1-1.1c-0.8,0-1.1,0.5-1.2,1.2\n                    h-1.7c0.1-1.4,1-2.5,2.8-2.5c2,0,2.7,1.2,2.7,2.4c0,1.1-0.5,1.7-1.9,2.7c-1,0.7-1.4,1.1-1.5,1.5h3.7l-0.2,1.4H207.5z", 1, "st1"], ["d", "M121.3,469.2l-2.1-8.3h1.9c0.8,3.8,1.1,5.5,1.2,6.4h0c0.3-1.5,1.1-4.4,1.6-6.4h1.6c0.4,1.6,1.3,4.8,1.5,6.3h0\n                    c0.3-1.8,1.1-5,1.4-6.3h1.7l-2.2,8.3h-1.9c-0.4-1.8-1.2-4.5-1.5-5.9h0c-0.3,1.5-1,4.3-1.5,5.9H121.3z", 1, "st1"], ["d", "M130.9,469.2v-0.1c0-1.4,0.6-2.5,2.3-3.7c1.1-0.8,1.5-1.1,1.5-1.8c0-0.7-0.3-1.1-1-1.1c-0.8,0-1.1,0.5-1.2,1.2\n                    h-1.7c0.1-1.4,1-2.5,2.8-2.5c2,0,2.7,1.2,2.7,2.4c0,1.1-0.5,1.7-1.9,2.7c-1,0.7-1.4,1.1-1.5,1.5h3.7l-0.2,1.4H130.9z", 1, "st1"], ["d", "M137.7,469.2v-0.1c0-1.4,0.6-2.5,2.3-3.7c1.1-0.8,1.5-1.1,1.5-1.8c0-0.7-0.3-1.1-1-1.1c-0.8,0-1.1,0.5-1.2,1.2\n                    h-1.7c0.1-1.4,1-2.5,2.8-2.5c2,0,2.7,1.2,2.7,2.4c0,1.1-0.5,1.7-1.9,2.7c-1,0.7-1.4,1.1-1.5,1.5h3.7l-0.2,1.4H137.7z", 1, "st1"], ["d", "M144.4,463.3c0.1-1,0.8-2.2,2.8-2.2c1.8,0,2.6,1,2.6,2.1c0,1-0.5,1.4-1,1.6v0c0.5,0.2,1.3,0.7,1.3,1.9\n                    c0,1.1-0.7,2.5-3,2.5c-2.1,0-2.8-1.3-2.9-2.3h1.7c0.1,0.5,0.5,1,1.3,1c0.8,0,1.2-0.5,1.2-1.2c0-0.7-0.4-1.2-1.3-1.2h-0.7v-1.3h0.6\n                    c0.8,0,1.1-0.3,1.1-0.9c0-0.5-0.3-0.9-1-0.9c-0.8,0-1,0.4-1.1,0.8H144.4z", 1, "st1"], ["d", "M33.3,469.2l-2.1-8.3h1.9c0.8,3.8,1.1,5.5,1.2,6.4h0c0.3-1.5,1.1-4.4,1.6-6.4h1.6c0.4,1.6,1.3,4.8,1.5,6.3h0\n                    c0.3-1.8,1.1-5,1.4-6.3h1.7l-2.2,8.3h-1.9c-0.4-1.8-1.2-4.5-1.5-5.9h0c-0.3,1.5-1,4.3-1.5,5.9H33.3z", 1, "st1"], ["d", "M42.9,469.2v-0.1c0-1.4,0.6-2.5,2.3-3.7c1.1-0.8,1.5-1.1,1.5-1.8c0-0.7-0.3-1.1-1-1.1c-0.8,0-1.1,0.5-1.2,1.2\n                    h-1.7c0.1-1.4,1-2.5,2.8-2.5c2,0,2.7,1.2,2.7,2.4c0,1.1-0.5,1.7-1.9,2.7c-1,0.7-1.4,1.1-1.5,1.5h3.7l-0.2,1.4H42.9z", 1, "st1"], ["d", "M55.7,465.2c0,2.2-0.7,4.1-3,4.1c-2.3,0-3-1.9-3-4.1c0-2.2,0.8-4.1,3.1-4.1C54.9,461.2,55.7,463,55.7,465.2z\n                    M51.4,465.2c0,1.5,0.2,2.7,1.3,2.7c1.1,0,1.2-1.2,1.2-2.8c0-1.5-0.2-2.7-1.2-2.7C51.7,462.5,51.4,463.5,51.4,465.2z", 1, "st1"], ["d", "M58.3,469.2v-5.9c-0.4,0.2-1,0.3-1.4,0.3v-1.3c0.7-0.1,1.5-0.6,2-1.1H60v7.9H58.3z", 1, "st1"], ["d", "M21.3,377.2l-2.1-8.3h1.9c0.8,3.8,1.1,5.5,1.2,6.4h0c0.3-1.5,1.1-4.4,1.6-6.4h1.6c0.4,1.6,1.3,4.8,1.5,6.3h0\n                    c0.3-1.8,1.1-5,1.4-6.3h1.7l-2.2,8.3h-1.9c-0.4-1.8-1.2-4.5-1.5-5.9h0c-0.3,1.5-1,4.3-1.5,5.9H21.3z", 1, "st1"], ["d", "M30.9,377.2v-0.1c0-1.4,0.6-2.5,2.3-3.7c1.1-0.8,1.5-1.1,1.5-1.8c0-0.7-0.3-1.1-1-1.1c-0.8,0-1.1,0.5-1.2,1.2\n                    h-1.7c0.1-1.4,1-2.5,2.8-2.5c2,0,2.7,1.2,2.7,2.4c0,1.1-0.5,1.7-1.9,2.7c-1,0.7-1.4,1.1-1.5,1.5h3.7l-0.2,1.4H30.9z", 1, "st1"], ["d", "M43.7,373.2c0,2.2-0.7,4.1-3,4.1c-2.3,0-3-1.9-3-4.1c0-2.2,0.8-4.1,3.1-4.1C42.9,369.2,43.7,371,43.7,373.2z\n                    M39.4,373.2c0,1.5,0.2,2.7,1.3,2.7c1.1,0,1.2-1.2,1.2-2.8c0-1.5-0.2-2.7-1.2-2.7C39.7,370.5,39.4,371.5,39.4,373.2z", 1, "st1"], ["d", "M44.8,377.2v-0.1c0-1.4,0.6-2.5,2.3-3.7c1.1-0.8,1.5-1.1,1.5-1.8c0-0.7-0.3-1.1-1-1.1c-0.8,0-1.1,0.5-1.2,1.2\n                    h-1.7c0.1-1.4,1-2.5,2.8-2.5c2,0,2.7,1.2,2.7,2.4c0,1.1-0.5,1.7-1.9,2.7c-1,0.7-1.4,1.1-1.5,1.5h3.7l-0.2,1.4H44.8z", 1, "st1"], ["d", "M21.3,149.2l-2.1-8.3h1.9c0.8,3.8,1.1,5.5,1.2,6.4h0c0.3-1.5,1.1-4.4,1.6-6.4h1.6c0.4,1.6,1.3,4.8,1.5,6.3h0\n                    c0.3-1.8,1.1-5,1.4-6.3h1.7l-2.2,8.3h-1.9c-0.4-1.8-1.2-4.5-1.5-5.9h0c-0.3,1.5-1,4.3-1.5,5.9H21.3z", 1, "st1"], ["d", "M30.9,149.2v-0.1c0-1.4,0.6-2.5,2.3-3.7c1.1-0.8,1.5-1.1,1.5-1.8c0-0.7-0.3-1.1-1-1.1c-0.8,0-1.1,0.5-1.2,1.2\n                    h-1.7c0.1-1.4,1-2.5,2.8-2.5c2,0,2.7,1.2,2.7,2.4c0,1.1-0.5,1.7-1.9,2.7c-1,0.7-1.4,1.1-1.5,1.5h3.7l-0.2,1.4H30.9z", 1, "st1"], ["d", "M43.7,145.2c0,2.2-0.7,4.1-3,4.1c-2.3,0-3-1.9-3-4.1c0-2.2,0.8-4.1,3.1-4.1C42.9,141.2,43.7,143,43.7,145.2z\n                    M39.4,145.2c0,1.5,0.2,2.7,1.3,2.7c1.1,0,1.2-1.2,1.2-2.8c0-1.5-0.2-2.7-1.2-2.7C39.7,142.5,39.4,143.5,39.4,145.2z", 1, "st1"], ["d", "M48.4,149.2v-1.8h-3.6v-1.5l3.3-4.6H50v4.7h1l-0.2,1.4H50v1.8H48.4z M48.4,144.6c0-0.9,0-1.3,0-1.8\n                    c-0.3,0.7-1.3,2.2-2.1,3.2h2V144.6z", 1, "st1"]], template: function MapCompComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Rez de chauss\u00E9e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Etage 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Etage 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "rect", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_17_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "polygon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_18_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "rect", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_19_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "polygon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_20_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "rect", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_21_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "rect", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_22_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "rect", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_23_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "polygon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_24_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "rect", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_25_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "rect", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_26_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "polygon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_27_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "polygon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_28_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "polygon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_29_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "rect", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_30_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "rect", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_31_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "polygon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_32_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "polygon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_33_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "polygon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_34_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "rect", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_35_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "rect", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_36_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "rect", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_37_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "rect", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_38_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "rect", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_39_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "rect", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_40_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "rect", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_41_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "polygon", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_42_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "rect", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_43_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "polygon", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_44_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "polygon", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_45_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "g", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "path", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "svg", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "polygon", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_92_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "rect", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_93_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "rect", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_94_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "rect", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_95_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "rect", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_96_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "rect", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_97_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "polygon", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_98_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "rect", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_99_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "polygon", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_100_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "polygon", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_101_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "polygon", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_102_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "polygon", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_103_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "polygon", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_104_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "polygon", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_105_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "polygon", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_106_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "rect", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_107_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "polygon", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_108_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "polygon", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_109_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "polygon", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_110_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "rect", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_111_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "polygon", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_112_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "polygon", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_113_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "polygon", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_114_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "polygon", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_115_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "polygon", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_116_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "polygon", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_117_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "polygon", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_118_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "polygon", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_119_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "g", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "path", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "path", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "path", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "path", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "path", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "path", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "path", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "path", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "path", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "path", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "path", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "path", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "path", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "path", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "path", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "path", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "path", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "path", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "path", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "path", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "path", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "path", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "path", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "path", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "path", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "path", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "path", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "path", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "path", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "path", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "path", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "path", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "path", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "path", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "path", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "path", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "path", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "path", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "path", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "path", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "path", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "path", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "path", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "path", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "path", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "path", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "path", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "path", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "path", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "path", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "path", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "path", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "path", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "path", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "path", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "path", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "path", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "path", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "path", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "path", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "path", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "path", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "path", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "path", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "path", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "path", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "path", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "path", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "path", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "path", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "path", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "path", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "path", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "path", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "path", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "path", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "path", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "path", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "path", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "path", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "path", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "path", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "path", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "path", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "path", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "path", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "path", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "path", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "path", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "path", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "path", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "path", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "svg", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "rect", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_218_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "rect", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_219_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "rect", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_220_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "polygon", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_221_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "polygon", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_222_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "rect", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_223_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "rect", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_224_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "rect", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_225_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "rect", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_226_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "rect", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_227_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "rect", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_228_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "rect", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_229_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "rect", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_230_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "rect", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_231_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "polygon", 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_232_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "polygon", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_233_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "rect", 222);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_234_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "rect", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_235_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "rect", 224);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_236_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "rect", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_237_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "rect", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_238_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "rect", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_239_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "rect", 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_240_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "rect", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_241_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "rect", 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_242_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "rect", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_243_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "rect", 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_244_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "g", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "path", 233);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "path", 234);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "path", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "path", 236);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "path", 237);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "path", 238);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "path", 239);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "path", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "path", 241);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "path", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "path", 243);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "path", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "path", 245);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "path", 246);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "path", 247);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "path", 248);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "path", 249);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "path", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "path", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "path", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "path", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "path", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "path", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "path", 256);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "path", 257);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "path", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "path", 259);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "path", 260);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "path", 261);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "path", 262);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "path", 263);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "path", 264);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "path", 265);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "path", 266);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "path", 267);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "path", 268);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](282, "path", 269);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "path", 270);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "path", 271);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "path", 272);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "path", 273);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](287, "path", 274);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "path", 275);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "path", 276);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "path", 277);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](291, "path", 278);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "path", 279);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "path", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](294, "path", 281);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "path", 282);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](296, "path", 283);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "path", 284);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "path", 285);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](299, "path", 286);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "path", 287);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "path", 288);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](302, "path", 289);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](303, "path", 290);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](304, "path", 291);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](305, "path", 292);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "path", 293);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "path", 294);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](308, "path", 295);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](309, "path", 296);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "path", 297);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](311, "path", 298);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](312, "path", 299);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](313, "path", 300);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "path", 301);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](315, "path", 302);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "path", 303);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](317, "path", 304);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](318, "path", 305);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "path", 306);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "path", 307);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](321, "path", 308);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](322, "path", 309);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](323, "path", 310);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](324, "path", 311);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](325, "path", 312);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](326, "path", 313);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](327, "path", 314);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](328, "path", 315);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](329, "path", 316);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](330, "path", 317);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](331, "path", 318);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "path", 319);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](333, "path", 320);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["path[_ngcontent-%COMP%]:hover:not(.nohover), rect[_ngcontent-%COMP%]:hover:not(.nohover), polygon[_ngcontent-%COMP%]:hover:not(.nohover) {\n  transition: all linear 0.2s;\n  stroke-width: 10px;\n  stroke-linejoin: round;\n  fill: rgba(0, 102, 153, 0.3);\n  cursor: pointer;\n}\n\npath[_ngcontent-%COMP%], rect[_ngcontent-%COMP%], polygon[_ngcontent-%COMP%] {\n  fill: rgba(0, 0, 0, 0.3);\n}\n\npath.nohover[_ngcontent-%COMP%], rect.nohover[_ngcontent-%COMP%], polygon.nohover[_ngcontent-%COMP%] {\n  fill: rgba(0, 0, 0, 0);\n  border-style: dashed;\n}\n\npath.nohover[_ngcontent-%COMP%]:hover, rect.nohover[_ngcontent-%COMP%]:hover, polygon.nohover[_ngcontent-%COMP%]:hover {\n  transition: all linear 0.1s;\n  fill: rgba(139, 0, 0, 0.2);\n  border-style: dashed;\n  cursor: no-drop;\n}\n\npath.highlightMap[_ngcontent-%COMP%], rect.highlightMap[_ngcontent-%COMP%], polygon.highlightMap[_ngcontent-%COMP%] {\n  fill: rgba(228, 118, 15, 0.4);\n}\n\npath.highlightMap[_ngcontent-%COMP%]:hover, rect.highlightMap[_ngcontent-%COMP%]:hover, polygon.highlightMap[_ngcontent-%COMP%]:hover {\n  fill: rgba(15, 228, 86, 0.4);\n}\n\ng.roomNumbers[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLWNvbXAvbWFwLWNvbXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBOzs7RUFHSSx3QkFBQTtBQUNKOztBQUVBOzs7RUFHSSxzQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7OztFQUdJLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTs7O0VBR0ksNkJBQUE7QUFDSjs7QUFFQTs7O0VBR0ksNEJBQUE7QUFDSjs7QUFZQTtFQUNJLFdBQUE7QUFUSiIsImZpbGUiOiJzcmMvYXBwL21hcC1jb21wL21hcC1jb21wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicGF0aDpob3Zlcjpub3QoLm5vaG92ZXIpLFxyXG5yZWN0OmhvdmVyOm5vdCgubm9ob3ZlciksXHJcbnBvbHlnb246aG92ZXI6bm90KC5ub2hvdmVyKSB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuMnM7XHJcbiAgICBzdHJva2Utd2lkdGg6IDEwcHg7XHJcbiAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xyXG4gICAgZmlsbDogcmdiYSgkY29sb3I6ICMwMDY2OTksICRhbHBoYTogMC4zKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxucGF0aCxcclxucmVjdCxcclxucG9seWdvbiB7XHJcbiAgICBmaWxsOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjMpO1xyXG59XHJcblxyXG5wYXRoLm5vaG92ZXIsXHJcbnJlY3Qubm9ob3ZlcixcclxucG9seWdvbi5ub2hvdmVyIHtcclxuICAgIGZpbGw6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuMCk7XHJcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcclxufVxyXG5cclxucGF0aC5ub2hvdmVyOmhvdmVyLFxyXG5yZWN0Lm5vaG92ZXI6aG92ZXIsXHJcbnBvbHlnb24ubm9ob3Zlcjpob3ZlciB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuMXM7XHJcbiAgICBmaWxsOiByZ2JhKCRjb2xvcjogIzhiMDAwMCwgJGFscGhhOiAwLjIpO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XHJcbiAgICBjdXJzb3I6IG5vLWRyb3A7XHJcbn1cclxuXHJcbnBhdGguaGlnaGxpZ2h0TWFwLFxyXG5yZWN0LmhpZ2hsaWdodE1hcCxcclxucG9seWdvbi5oaWdobGlnaHRNYXAge1xyXG4gICAgZmlsbDogcmdiYSgkY29sb3I6ICNlNDc2MGYsICRhbHBoYTogMC40KTtcclxufVxyXG5cclxucGF0aC5oaWdobGlnaHRNYXA6aG92ZXIsXHJcbnJlY3QuaGlnaGxpZ2h0TWFwOmhvdmVyLFxyXG5wb2x5Z29uLmhpZ2hsaWdodE1hcDpob3ZlciB7XHJcbiAgICBmaWxsOiByZ2JhKCRjb2xvcjogIzBmZTQ1NiwgJGFscGhhOiAwLjQpO1xyXG59XHJcblxyXG4vLyAjVzE6bm90KC5ub2hvdmVyKSxcclxuLy8gI1cyOm5vdCgubm9ob3ZlciksXHJcbi8vICNXMDpub3QoLm5vaG92ZXIpIHtcclxuLy8gICAgIGZpbGw6IHJnYmEoJGNvbG9yOiAjMDJkYTM4LCAkYWxwaGE6IDAuNSk7XHJcbi8vIH1cclxuLy8gLm5vaG92ZXIjVzEsXHJcbi8vIC5ub2hvdmVyI1cyLFxyXG4vLyAubm9ob3ZlciNXMCB7XHJcbi8vICAgICBmaWxsOiByZ2JhKCRjb2xvcjogI2JhZGEwMiwgJGFscGhhOiAwLjUpO1xyXG4vLyB9XHJcbmcucm9vbU51bWJlcnMgcGF0aCB7XHJcbiAgICBmaWxsOiB3aGl0ZTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapCompComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map-comp',
                templateUrl: './map-comp.component.html',
                styleUrls: ['./map-comp.component.scss']
            }]
    }], function () { return [{ type: _get_card_info_service__WEBPACK_IMPORTED_MODULE_3__["GetCardInfoService"] }, { type: src_services_search_service__WEBPACK_IMPORTED_MODULE_2__["default"] }, { type: _search_pipe__WEBPACK_IMPORTED_MODULE_4__["SearchPipe"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pop-card-list/pop-card-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pop-card-list/pop-card-list.component.ts ***!
  \**********************************************************/
/*! exports provided: PopCardListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopCardListComponent", function() { return PopCardListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/search.service */ "./src/services/search.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pop_card_temp_pop_card_temp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pop-card-temp/pop-card-temp.component */ "./src/app/pop-card-temp/pop-card-temp.component.ts");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search.pipe */ "./src/app/search.pipe.ts");







function PopCardListComponent_app_pop_card_temp_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pop-card-temp", 3);
} if (rf & 2) {
    const people_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("people", people_r1);
} }
class PopCardListComponent {
    constructor(jsoner, searchService) {
        this.jsoner = jsoner;
        this.searchService = searchService;
        this.peopleList = [];
    }
    csvJSON(csv) {
        const lines = csv.split('\n');
        const result = [];
        const headers = lines[0].split(';');
        for (let i = 1; i < lines.length; i++) {
            const obj = {};
            const currentline = lines[i].split(';');
            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }
            result.push(obj);
        }
        return result;
    }
    convertFile(input) {
        const reader = new FileReader();
        reader.readAsText(input.files[0]);
        reader.onload = () => {
            const text = reader.result;
            this.text = text;
            console.log(text);
            this.csvJSON(text);
        };
    }
    ngOnInit() {
        this.jsoner.get('assets/data/people.csv', { responseType: 'text' }).subscribe(data => {
            this.peopleList = this.csvJSON(data);
            console.log(this.peopleList);
        });
    }
}
PopCardListComponent.ɵfac = function PopCardListComponent_Factory(t) { return new (t || PopCardListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_search_service__WEBPACK_IMPORTED_MODULE_1__["default"])); };
PopCardListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopCardListComponent, selectors: [["app-pop-card-list"]], decls: 4, vars: 4, consts: [[1, "row", "scrollboxList"], [1, "col-12"], [3, "people", 4, "ngFor", "ngForOf"], [3, "people"]], template: function PopCardListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PopCardListComponent_app_pop_card_temp_2_Template, 1, 1, "app-pop-card-temp", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx.peopleList, ctx.searchService.mainSearchBar));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _pop_card_temp_pop_card_temp_component__WEBPACK_IMPORTED_MODULE_4__["PopCardTempComponent"]], pipes: [_search_pipe__WEBPACK_IMPORTED_MODULE_5__["SearchPipe"]], styles: [".ps[_ngcontent-%COMP%] {\n    overflow: hidden !important;\n    overflow-anchor: none;\n    -ms-overflow-style: none;\n    touch-action: auto;\n    -ms-touch-action: auto;\n}\n\n\n\n.ps__rail-x[_ngcontent-%COMP%] {\n    display: none;\n    opacity: 0;\n    transition: background-color .2s linear, opacity .2s linear;\n    -webkit-transition: background-color .2s linear, opacity .2s linear;\n    height: 15px;\n    \n    bottom: 0px;\n    \n    position: absolute;\n}\n\n.ps__rail-y[_ngcontent-%COMP%] {\n    display: none;\n    opacity: 0;\n    transition: background-color .2s linear, opacity .2s linear;\n    -webkit-transition: background-color .2s linear, opacity .2s linear;\n    width: 15px;\n    \n    right: 0;\n    \n    position: absolute;\n}\n\n.ps--active-x[_ngcontent-%COMP%] > .ps__rail-x[_ngcontent-%COMP%], .ps--active-y[_ngcontent-%COMP%] > .ps__rail-y[_ngcontent-%COMP%] {\n    display: block;\n    background-color: transparent;\n}\n\n.ps[_ngcontent-%COMP%]:hover > .ps__rail-x[_ngcontent-%COMP%], .ps[_ngcontent-%COMP%]:hover > .ps__rail-y[_ngcontent-%COMP%], .ps--focus[_ngcontent-%COMP%] > .ps__rail-x[_ngcontent-%COMP%], .ps--focus[_ngcontent-%COMP%] > .ps__rail-y[_ngcontent-%COMP%], .ps--scrolling-x[_ngcontent-%COMP%] > .ps__rail-x[_ngcontent-%COMP%], .ps--scrolling-y[_ngcontent-%COMP%] > .ps__rail-y[_ngcontent-%COMP%] {\n    opacity: 0.6;\n}\n\n.ps[_ngcontent-%COMP%]   .ps__rail-x[_ngcontent-%COMP%]:hover, .ps[_ngcontent-%COMP%]   .ps__rail-y[_ngcontent-%COMP%]:hover, .ps[_ngcontent-%COMP%]   .ps__rail-x[_ngcontent-%COMP%]:focus, .ps[_ngcontent-%COMP%]   .ps__rail-y[_ngcontent-%COMP%]:focus, .ps[_ngcontent-%COMP%]   .ps__rail-x.ps--clicking[_ngcontent-%COMP%], .ps[_ngcontent-%COMP%]   .ps__rail-y.ps--clicking[_ngcontent-%COMP%] {\n    background-color: #eee;\n    opacity: 0.9;\n}\n\n\n\n.ps__thumb-x[_ngcontent-%COMP%] {\n    background-color: #aaa;\n    border-radius: 6px;\n    transition: background-color .2s linear, height .2s ease-in-out;\n    -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n    height: 6px;\n    \n    bottom: 2px;\n    \n    position: absolute;\n}\n\n.ps__thumb-y[_ngcontent-%COMP%] {\n    background-color: #aaa;\n    border-radius: 6px;\n    transition: background-color .2s linear, width .2s ease-in-out;\n    -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n    width: 6px;\n    \n    right: 2px;\n    \n    position: absolute;\n}\n\n.ps__rail-x[_ngcontent-%COMP%]:hover > .ps__thumb-x[_ngcontent-%COMP%], .ps__rail-x[_ngcontent-%COMP%]:focus > .ps__thumb-x[_ngcontent-%COMP%], .ps__rail-x.ps--clicking[_ngcontent-%COMP%]   .ps__thumb-x[_ngcontent-%COMP%] {\n    background-color: #999;\n    height: 11px;\n}\n\n.ps__rail-y[_ngcontent-%COMP%]:hover > .ps__thumb-y[_ngcontent-%COMP%], .ps__rail-y[_ngcontent-%COMP%]:focus > .ps__thumb-y[_ngcontent-%COMP%], .ps__rail-y.ps--clicking[_ngcontent-%COMP%]   .ps__thumb-y[_ngcontent-%COMP%] {\n    background-color: #999;\n    width: 11px;\n}\n\n\n\n@supports (-ms-overflow-style: none) {\n    .ps[_ngcontent-%COMP%] {\n        overflow: auto !important;\n    }\n}\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n    .ps[_ngcontent-%COMP%] {\n        overflow: auto !important;\n    }\n}\n\n.roomNumberOnCard[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9wZXJmZWN0LXNjcm9sbGJhci9jc3MvcGVyZmVjdC1zY3JvbGxiYXIuY3NzIiwic3JjL2FwcC9wb3AtY2FyZC1saXN0L3BvcC1jYXJkLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7O0FBRUY7SUFDSSwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUdBOztFQUVFOztBQUVGO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDViwyREFBMkQ7SUFDM0QsbUVBQW1FO0lBQ25FLFlBQVk7SUFDWixtREFBbUQ7SUFDbkQsV0FBVztJQUNYLG1DQUFtQztJQUNuQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLDJEQUEyRDtJQUMzRCxtRUFBbUU7SUFDbkUsV0FBVztJQUNYLG1EQUFtRDtJQUNuRCxRQUFRO0lBQ1IsbUNBQW1DO0lBQ25DLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsNkJBQTZCO0FBQ2pDOztBQUVBOzs7Ozs7SUFNSSxZQUFZO0FBQ2hCOztBQUVBOzs7Ozs7SUFNSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFHQTs7RUFFRTs7QUFFRjtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsK0RBQStEO0lBQy9ELHVFQUF1RTtJQUN2RSxXQUFXO0lBQ1gsMkNBQTJDO0lBQzNDLFdBQVc7SUFDWCxtQ0FBbUM7SUFDbkMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQiw4REFBOEQ7SUFDOUQsc0VBQXNFO0lBQ3RFLFVBQVU7SUFDViwwQ0FBMEM7SUFDMUMsVUFBVTtJQUNWLG1DQUFtQztJQUNuQyxrQkFBa0I7QUFDdEI7O0FBRUE7OztJQUdJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBOzs7SUFHSSxzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUdBLGdCQUFnQjs7QUFFaEI7SUFDSTtRQUNJLHlCQUF5QjtJQUM3QjtBQUNKOztBQUVBO0lBRUk7UUFDSSx5QkFBeUI7SUFDN0I7QUFDSjs7QUMxSEE7RUFDSSxpQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcG9wLWNhcmQtbGlzdC9wb3AtY2FyZC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvbnRhaW5lciBzdHlsZVxuICovXG5cbi5wcyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LWFuY2hvcjogbm9uZTtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgdG91Y2gtYWN0aW9uOiBhdXRvO1xuICAgIC1tcy10b3VjaC1hY3Rpb246IGF1dG87XG59XG5cblxuLypcbiAqIFNjcm9sbGJhciByYWlsIHN0eWxlc1xuICovXG5cbi5wc19fcmFpbC14IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyLCBvcGFjaXR5IC4ycyBsaW5lYXI7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXIsIG9wYWNpdHkgLjJzIGxpbmVhcjtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgLyogdGhlcmUgbXVzdCBiZSAnYm90dG9tJyBvciAndG9wJyBmb3IgcHNfX3JhaWwteCAqL1xuICAgIGJvdHRvbTogMHB4O1xuICAgIC8qIHBsZWFzZSBkb24ndCBjaGFuZ2UgJ3Bvc2l0aW9uJyAqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnBzX19yYWlsLXkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXIsIG9wYWNpdHkgLjJzIGxpbmVhcjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhciwgb3BhY2l0eSAuMnMgbGluZWFyO1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIC8qIHRoZXJlIG11c3QgYmUgJ3JpZ2h0JyBvciAnbGVmdCcgZm9yIHBzX19yYWlsLXkgKi9cbiAgICByaWdodDogMDtcbiAgICAvKiBwbGVhc2UgZG9uJ3QgY2hhbmdlICdwb3NpdGlvbicgKi9cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5wcy0tYWN0aXZlLXg+LnBzX19yYWlsLXgsXG4ucHMtLWFjdGl2ZS15Pi5wc19fcmFpbC15IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnBzOmhvdmVyPi5wc19fcmFpbC14LFxuLnBzOmhvdmVyPi5wc19fcmFpbC15LFxuLnBzLS1mb2N1cz4ucHNfX3JhaWwteCxcbi5wcy0tZm9jdXM+LnBzX19yYWlsLXksXG4ucHMtLXNjcm9sbGluZy14Pi5wc19fcmFpbC14LFxuLnBzLS1zY3JvbGxpbmcteT4ucHNfX3JhaWwteSB7XG4gICAgb3BhY2l0eTogMC42O1xufVxuXG4ucHMgLnBzX19yYWlsLXg6aG92ZXIsXG4ucHMgLnBzX19yYWlsLXk6aG92ZXIsXG4ucHMgLnBzX19yYWlsLXg6Zm9jdXMsXG4ucHMgLnBzX19yYWlsLXk6Zm9jdXMsXG4ucHMgLnBzX19yYWlsLXgucHMtLWNsaWNraW5nLFxuLnBzIC5wc19fcmFpbC15LnBzLS1jbGlja2luZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBvcGFjaXR5OiAwLjk7XG59XG5cblxuLypcbiAqIFNjcm9sbGJhciB0aHVtYiBzdHlsZXNcbiAqL1xuXG4ucHNfX3RodW1iLXgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhciwgaGVpZ2h0IC4ycyBlYXNlLWluLW91dDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhciwgaGVpZ2h0IC4ycyBlYXNlLWluLW91dDtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICAvKiB0aGVyZSBtdXN0IGJlICdib3R0b20nIGZvciBwc19fdGh1bWIteCAqL1xuICAgIGJvdHRvbTogMnB4O1xuICAgIC8qIHBsZWFzZSBkb24ndCBjaGFuZ2UgJ3Bvc2l0aW9uJyAqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnBzX190aHVtYi15IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXIsIHdpZHRoIC4ycyBlYXNlLWluLW91dDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhciwgd2lkdGggLjJzIGVhc2UtaW4tb3V0O1xuICAgIHdpZHRoOiA2cHg7XG4gICAgLyogdGhlcmUgbXVzdCBiZSAncmlnaHQnIGZvciBwc19fdGh1bWIteSAqL1xuICAgIHJpZ2h0OiAycHg7XG4gICAgLyogcGxlYXNlIGRvbid0IGNoYW5nZSAncG9zaXRpb24nICovXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucHNfX3JhaWwteDpob3Zlcj4ucHNfX3RodW1iLXgsXG4ucHNfX3JhaWwteDpmb2N1cz4ucHNfX3RodW1iLXgsXG4ucHNfX3JhaWwteC5wcy0tY2xpY2tpbmcgLnBzX190aHVtYi14IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xuICAgIGhlaWdodDogMTFweDtcbn1cblxuLnBzX19yYWlsLXk6aG92ZXI+LnBzX190aHVtYi15LFxuLnBzX19yYWlsLXk6Zm9jdXM+LnBzX190aHVtYi15LFxuLnBzX19yYWlsLXkucHMtLWNsaWNraW5nIC5wc19fdGh1bWIteSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcbiAgICB3aWR0aDogMTFweDtcbn1cblxuXG4vKiBNUyBzdXBwb3J0cyAqL1xuXG5Ac3VwcG9ydHMgKC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZSkge1xuICAgIC5wcyB7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSksXG4oLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcbiAgICAucHMge1xuICAgICAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgJ35wZXJmZWN0LXNjcm9sbGJhci9jc3MvcGVyZmVjdC1zY3JvbGxiYXIuY3NzJztcclxuLnJvb21OdW1iZXJPbkNhcmQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopCardListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pop-card-list',
                templateUrl: './pop-card-list.component.html',
                styleUrls: ['./pop-card-list.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: src_services_search_service__WEBPACK_IMPORTED_MODULE_1__["default"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pop-card-temp/pop-card-temp.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pop-card-temp/pop-card-temp.component.ts ***!
  \**********************************************************/
/*! exports provided: PopCardTempComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopCardTempComponent", function() { return PopCardTempComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/search.service */ "./src/services/search.service.ts");



class PopCardTempComponent {
    constructor(searchService) {
        this.searchService = searchService;
    }
    ngOnInit() {
    }
    clickMap(event) {
        const idAttr = this.people.room;
        console.log(idAttr);
        if (idAttr !== 'W0' && idAttr !== 'W1' && idAttr !== 'W2') {
            this.searchService.mainSearchBar = this.people.room;
            $('input[name=\'room\']').click();
            console.log('que ça marche!');
            document.getElementById('mainSearchBar').focus();
            const addclass = 'highlightMap';
            const $cols = $('.mapItem').click(function (e) {
                $cols.removeClass(addclass);
                $(this).addClass(addclass);
            });
            if (idAttr.includes('W0')) {
                const switchMe = document.getElementById('floor0-tab');
                const unswitch1 = document.getElementById('floor1-tab');
                const unswitch2 = document.getElementById('floor2-tab');
                const switchMepanel = document.getElementById('floor0');
                const unswitch1panel = document.getElementById('floor1');
                const unswitch2panel = document.getElementById('floor2');
                switchMe.classList.add('active');
                switchMe.setAttribute('aria-selected', 'true');
                switchMepanel.classList.add('active');
                unswitch1.classList.remove('active');
                unswitch1.setAttribute('aria-selected', 'false');
                unswitch1panel.classList.remove('active');
                unswitch2.classList.remove('active');
                unswitch2.setAttribute('aria-selected', 'false');
                unswitch2panel.classList.remove('active');
                console.log('switchMe' + switchMe);
                console.log('unswitch1' + unswitch1);
                console.log('unswitch2' + unswitch2);
                console.log('switchMepanel' + switchMepanel);
                console.log('unswitch1panel' + unswitch1panel);
                console.log('unswitch2panel' + unswitch2panel);
            }
            else {
                if (idAttr.includes('W1')) {
                    const switchMe = document.getElementById('floor1-tab');
                    const unswitch1 = document.getElementById('floor0-tab');
                    const unswitch2 = document.getElementById('floor2-tab');
                    const switchMepanel = document.getElementById('floor1');
                    const unswitch1panel = document.getElementById('floor0');
                    const unswitch2panel = document.getElementById('floor2');
                    switchMe.classList.add('active');
                    switchMe.setAttribute('aria-selected', 'true');
                    switchMepanel.classList.add('active');
                    unswitch1.classList.remove('active');
                    unswitch1.setAttribute('aria-selected', 'false');
                    unswitch1panel.classList.remove('active');
                    unswitch2.classList.remove('active');
                    unswitch2.setAttribute('aria-selected', 'false');
                    unswitch2panel.classList.remove('active');
                    console.log('switchMe' + switchMe);
                    console.log('unswitch1' + unswitch1);
                    console.log('unswitch2' + unswitch2);
                    console.log('switchMepanel' + switchMepanel);
                    console.log('unswitch1panel' + unswitch1panel);
                    console.log('unswitch2panel' + unswitch2panel);
                }
                else {
                    const switchMe = document.getElementById('floor2-tab');
                    const unswitch1 = document.getElementById('floor0-tab');
                    const unswitch2 = document.getElementById('floor1-tab');
                    const switchMepanel = document.getElementById('floor2');
                    const unswitch1panel = document.getElementById('floor0');
                    const unswitch2panel = document.getElementById('floor1');
                    switchMe.classList.add('active');
                    switchMe.setAttribute('aria-selected', 'true');
                    switchMepanel.classList.add('active');
                    unswitch1.classList.remove('active');
                    unswitch1.setAttribute('aria-selected', 'false');
                    unswitch1panel.classList.remove('active');
                    unswitch2.classList.remove('active');
                    unswitch2.setAttribute('aria-selected', 'false');
                    unswitch2panel.classList.remove('active');
                    console.log('switchMe' + switchMe);
                    console.log('unswitch1' + unswitch1);
                    console.log('unswitch2' + unswitch2);
                    console.log('switchMepanel' + switchMepanel);
                    console.log('unswitch1panel' + unswitch1panel);
                    console.log('unswitch2panel' + unswitch2panel);
                }
            }
        }
        else {
            console.log('il ny as rien');
        }
    }
}
PopCardTempComponent.ɵfac = function PopCardTempComponent_Factory(t) { return new (t || PopCardTempComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_search_service__WEBPACK_IMPORTED_MODULE_1__["default"])); };
PopCardTempComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopCardTempComponent, selectors: [["app-pop-card-temp"]], inputs: { people: "people" }, decls: 27, vars: 7, consts: [[1, "card", "mb-3", "peopleCard", 3, "click"], [1, "card-header"], [1, "card-body"], [1, "row"], ["onerror", "if (this.src != '../../assets/img/flower.jpg') this.src = '../../assets/img/flower.jpg';", 1, "img-fluid", "peopleIconPhoto", 3, "src"], [1, "textInCards", "card-text"], [1, "textInCards", "card-title", "roomNumberOnCard"]], template: function PopCardTempComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopCardTempComponent_Template_div_click_0_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Room: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Service: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Mobile: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Phone: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.people.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../assets/img/", ctx.people.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.people.mail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.people.room);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.people.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.people.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.people.tpzphone);
    } }, styles: [".textInCards[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.peopleIconPhoto[_ngcontent-%COMP%] {\n  max-height: 110px;\n  height: auto;\n  max-width: 90px;\n  object-fit: cover;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9wLWNhcmQtdGVtcC9wb3AtY2FyZC10ZW1wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BvcC1jYXJkLXRlbXAvcG9wLWNhcmQtdGVtcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0SW5DYXJkcyB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5wZW9wbGVJY29uUGhvdG8ge1xyXG4gICAgbWF4LWhlaWdodDogMTEwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDkwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopCardTempComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pop-card-temp',
                templateUrl: './pop-card-temp.component.html',
                styleUrls: ['./pop-card-temp.component.scss']
            }]
    }], function () { return [{ type: src_services_search_service__WEBPACK_IMPORTED_MODULE_1__["default"] }]; }, { people: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/search.pipe.ts":
/*!********************************!*\
  !*** ./src/app/search.pipe.ts ***!
  \********************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/search.service */ "./src/services/search.service.ts");



class SearchPipe {
    constructor(searchService) {
        this.searchService = searchService;
    }
    transform(items) {
        if (!items) {
            return [];
        }
        const mainSearchBar = this.searchService.mainSearchBar.toLowerCase();
        const searchTUC = this.searchService.mainSearchBar.toUpperCase();
        if (mainSearchBar.length < 2) {
            return [];
        }
        if (!this.searchService.mainSearchBar) {
            return items;
        }
        if (searchTUC.startsWith('W') && mainSearchBar.length > 3) {
            const addclass = 'highlightMap';
            $('.mapItem').removeClass(addclass);
            const choosenOne = document.getElementById(searchTUC);
            choosenOne.classList.add(addclass);
            console.log(choosenOne);
        }
        return items.filter(it => {
            return JSON.stringify(it).toLowerCase().match(mainSearchBar);
        });
    }
}
SearchPipe.ɵfac = function SearchPipe_Factory(t) { return new (t || SearchPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_search_service__WEBPACK_IMPORTED_MODULE_1__["default"])); };
SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "search", type: SearchPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'search'
            }]
    }], function () { return [{ type: src_services_search_service__WEBPACK_IMPORTED_MODULE_1__["default"] }]; }, null); })();


/***/ }),

/***/ "./src/app/src-bar/src-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/src-bar/src-bar.component.ts ***!
  \**********************************************/
/*! exports provided: SrcBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SrcBarComponent", function() { return SrcBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/search.service */ "./src/services/search.service.ts");
/* harmony import */ var _get_card_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../get-card-info.service */ "./src/app/get-card-info.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");











const _c0 = function () { return ["map"]; };
function SrcBarComponent_mat_form_field_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SrcBarComponent_mat_form_field_4_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.searchService.mainSearchBar = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.searchService.mainSearchBar);
} }
class SrcBarComponent {
    constructor(card, searchService, router) {
        this.card = card;
        this.searchService = searchService;
        this.router = router;
        this.peopleData = [];
    }
    ngOnInit() {
    }
}
SrcBarComponent.ɵfac = function SrcBarComponent_Factory(t) { return new (t || SrcBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_get_card_info_service__WEBPACK_IMPORTED_MODULE_2__["GetCardInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_1__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SrcBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SrcBarComponent, selectors: [["app-src-bar"]], decls: 14, vars: 1, consts: [["id", "searchBar"], ["routerLink", "/home"], ["id", "mainLogo", "src", "../../assets/img/TELESPAZIO_LOGO_COLOR.png"], [1, "filler"], ["appearance", "standard", "id", "recherche", "routerLinkActive", "", 3, "routerLink", 4, "ngIf"], ["routerLink", "/", 1, "menuLinks"], ["routerLink", "/plus", 1, "menuLinks"], ["routerLink", "/map", 1, "menuLinks"], ["appearance", "standard", "id", "recherche", "routerLinkActive", "", 3, "routerLink"], ["matInput", "", "type", "text", "name", "search", "placeholder", "Recherche", "id", "mainSearchBar", 3, "ngModel", "ngModelChange"], ["searchBarInput", ""]], template: function SrcBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SrcBarComponent_mat_form_field_4_Template, 3, 3, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "layers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.router.url == "/map");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]], styles: [".filler[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\na[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-left: 0.5em;\n  margin-right: 0.5em;\n  vertical-align: text-bottom;\n}\n\n#mainLogo[_ngcontent-%COMP%] {\n  height: 45px;\n  margin-right: 0.5em;\n}\n\n#searchBar[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #2e2e2e;\n  border-bottom: 1px solid #5e5e5e;\n}\n\n#recherche[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3JjLWJhci9zcmMtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc3JjLWJhci9zcmMtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGxlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuYSBtYXQtaWNvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xyXG59XHJcblxyXG4jbWFpbkxvZ28ge1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcclxufVxyXG5cclxuI3NlYXJjaEJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBjb2xvcjogcmdiKDQ2LCA0NiwgNDYpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig5NCwgOTQsIDk0KTtcclxufVxyXG5cclxuI3JlY2hlcmNoZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SrcBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-src-bar',
                templateUrl: './src-bar.component.html',
                styleUrls: ['./src-bar.component.scss']
            }]
    }], function () { return [{ type: _get_card_info_service__WEBPACK_IMPORTED_MODULE_2__["GetCardInfoService"] }, { type: _services_search_service__WEBPACK_IMPORTED_MODULE_1__["default"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/startpage-main-restricted/startpage-main-restricted.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/startpage-main-restricted/startpage-main-restricted.component.ts ***!
  \**********************************************************************************/
/*! exports provided: StartpageMainRestrictedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartpageMainRestrictedComponent", function() { return StartpageMainRestrictedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StartpageMainRestrictedComponent {
    constructor() { }
    ngOnInit() {
    }
}
StartpageMainRestrictedComponent.ɵfac = function StartpageMainRestrictedComponent_Factory(t) { return new (t || StartpageMainRestrictedComponent)(); };
StartpageMainRestrictedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartpageMainRestrictedComponent, selectors: [["app-startpage-main-restricted"]], decls: 122, vars: 0, consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-md-3", "col-sm-6"], [1, "cardBlockShadow", "border", "rounded", "bg-white"], [1, "text-center"], ["title", "", "href", "https://mail.telespazio.com/owa", "target", "_blank", 1, "navBlock", "justify-content-center"], ["src", "../../assets/startpage/webmail.png", "alt", "", 1, "imgLink", "justify-content-center"], [1, "text-center", "text-secondary"], [1, "spacer-20"], ["title", "", "href", "https://teamsites.telespazio.com", "target", "_blank", 1, "navBlock", "justify-content-center"], ["src", "../../assets/startpage/sharepoint.png", "alt", "", 1, "imgLink", "justify-content-center"], ["title", "", "href", "https://dropzone.ssl.telespazio.com", "target", "_blank", 1, "navBlock", "justify-content-center"], ["title", "", "src", "../../assets/startpage/dropzone.png", "alt", "DropZone", "longdesc", "./dropzone.txt", 1, "imgLink", "justify-content-center"], ["title", "", "href", "https://tpm.ssl.telespazio.com", "target", "_blank", 1, "navBlock", "justify-content-center"], ["title", "", "src", "../../assets/startpage/tpm.png", "alt", "", 1, "imgLink", "justify-content-center"], ["title", "", "href", "https://ssl.telespazio.com", "target", "_blank", 1, "navBlock", "justify-content-center"], ["title", "", "src", "../../assets/startpage/portal.png", "alt", "", 1, "imgLink", "justify-content-center"], ["title", "", "href", "https://mailrelay1.ssl.telespazio.com/pem/login/pages/login.jsf", "target", "_blank", 1, "navBlock", "justify-content-center"], ["title", "", "src", "../../assets/startpage/PEM.png", "alt", "", 1, "imgLink", "justify-content-center"], ["title", "", "href", "https://hr-services.fr.adp.com/", "target", "_blank", 1, "navBlock", "justify-content-center"], ["title", "", "src", "../../assets/startpage/zadig.png", "alt", "", 1, "imgLink", "justify-content-center"], ["title", "", "href", "https://intranet.telespazio.com/EN/Pages/default.aspx", "target", "_blank", 1, "navBlock", "justify-content-center"], ["title", "", "src", "../../assets/startpage/intranet.png", "alt", "", 1, "imgLink", "justify-content-center"], ["title", "", "href", "https://teamsites.telespazio.com/sites/francequality/", "target", "_blank", 1, "navBlock", "justify-content-center"], ["title", "", "src", "../../assets/startpage/SiteQualite.png", "alt", "", 1, "imgLink", "justify-content-center"], ["title", "", "href", "http://ubw6.telespazio.corp/UBWorld-6/default.aspx", "target", "_blank", 1, "navBlock", "justify-content-center"], ["title", "", "src", "../../assets/startpage/agresso.png", "alt", "", 1, "imgLink", "justify-content-center"], ["title", "", "href", "https://startpage.telespazio.fr/COM/covidpage.html", "target", "_blank", 1, "navBlock", "justify-content-center"], ["title", "", "src", "../../assets/startpage/vignetteCOVID19ok.jpg", "alt", "", 1, "imgLink", "justify-content-center"], ["title", "", "href", "http://ictsupport.telespazio.corp/glpi", "target", "_blank", 1, "navBlock", "justify-content-center"], ["title", "", "src", "../../assets/startpage/ICT.png", "alt", "", 1, "imgLink", "justify-content-center"]], template: function StartpageMainRestrictedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Webmail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sharepoint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "DropZone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Password Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Personal Email Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Zadig");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Intranet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Site Qualit\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Agresso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "COVID-19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "ICT Helpdesk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0cGFnZS1tYWluLXJlc3RyaWN0ZWQvc3RhcnRwYWdlLW1haW4tcmVzdHJpY3RlZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartpageMainRestrictedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-startpage-main-restricted',
                templateUrl: './startpage-main-restricted.component.html',
                styleUrls: ['./startpage-main-restricted.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/startpage-main/startpage-main.component.ts":
/*!************************************************************!*\
  !*** ./src/app/startpage-main/startpage-main.component.ts ***!
  \************************************************************/
/*! exports provided: StartpageMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartpageMainComponent", function() { return StartpageMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StartpageMainComponent {
    constructor() { }
    ngOnInit() {
    }
}
StartpageMainComponent.ɵfac = function StartpageMainComponent_Factory(t) { return new (t || StartpageMainComponent)(); };
StartpageMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartpageMainComponent, selectors: [["app-startpage-main"]], decls: 122, vars: 0, consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-md-3", "col-sm-6"], [1, "cardBlockShadow", "border", "rounded", "bg-white"], [1, "text-center"], ["title", "", "href", "https://mail.telespazio.com/owa", "target", "_blank", 1, "navBlock", "justify-content-center"], ["src", "../../assets/startpage/webmail.png", "alt", "", 1, "imgLink", "justify-content-center"], [1, "text-center", "text-secondary"], [1, "spacer-20"], ["title", "", "href", "https://teamsites.telespazio.com", "target", "_blank", 1, "navBlock", "justify-content-center"], ["src", "../../assets/startpage/sharepoint.png", "alt", "", 1, "imgLink", "justify-content-center"], ["title", "", "href", "https://dropzone.ssl.telespazio.com", "target", "_blank", 1, "navBlock", "justify-content-center"], ["title", "", "src", "../../assets/startpage/dropzone.png", "alt", "DropZone", "longdesc", "./dropzone.txt", 1, "imgLink", "justify-content-center"], ["title", "", "href", "https://tpm.ssl.telespazio.com", "target", "_blank", 1, "navBlock", "justify-content-center"], ["title", "", "src", "../../assets/startpage/tpm.png", "alt", "", 1, "imgLink", "justify-content-center"], ["title", "", "href", "https://ssl.telespazio.com", "target", "_blank", 1, "navBlock", "justify-content-center"], ["title", "", "src", "../../assets/startpage/portal.png", "alt", "", 1, "imgLink", "justify-content-center"], ["title", "", "href", "https://mailrelay1.ssl.telespazio.com/pem/login/pages/login.jsf", "target", "_blank", 1, "navBlock", "justify-content-center"], ["title", "", "src", "../../assets/startpage/PEM.png", "alt", "", 1, "imgLink", "justify-content-center"], ["title", "", "href", "https://hr-services.fr.adp.com/", "target", "_blank", 1, "navBlock", "justify-content-center"], ["title", "", "src", "../../assets/startpage/zadig.png", "alt", "", 1, "imgLink", "justify-content-center"], ["title", "", "href", "https://intranet.telespazio.com/EN/Pages/default.aspx", "target", "_blank", 1, "navBlock", "justify-content-center"], ["title", "", "src", "../../assets/startpage/intranet.png", "alt", "", 1, "imgLink", "justify-content-center"], ["title", "", "href", "https://teamsites.telespazio.com/sites/francequality/", "target", "_blank", 1, "navBlock", "justify-content-center"], ["title", "", "src", "../../assets/startpage/SiteQualite.png", "alt", "", 1, "imgLink", "justify-content-center"], ["title", "", "href", "https://secure.digiposte.fr/identification-plus", "target", "_blank", 1, "navBlock", "justify-content-center"], ["title", "", "src", "../../assets/startpage/digiposte.png", "alt", "", 1, "imgLink", "justify-content-center"], ["title", "", "href", "https://startpage.telespazio.fr/COM/covidpage.html", "target", "_blank", 1, "navBlock", "justify-content-center"], ["title", "", "src", "../../assets/startpage/vignetteCOVID19ok.jpg", "alt", "", 1, "imgLink", "justify-content-center"], ["title", "", "href", "https://performancemanager5.successfactors.eu/login?company=finmeccaniP", "target", "_blank", 1, "navBlock", "justify-content-center"], ["title", "", "src", "../../assets/startpage/hrevolution.png", "alt", "", 1, "imgLink", "justify-content-center"]], template: function StartpageMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Webmail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sharepoint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "DropZone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Password Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Personal Email Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Zadig");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Intranet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Site Qualit\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Digiposte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "COVID-19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "HRevolution");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0cGFnZS1tYWluL3N0YXJ0cGFnZS1tYWluLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartpageMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-startpage-main',
                templateUrl: './startpage-main.component.html',
                styleUrls: ['./startpage-main.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/startpage-plus-restricted/startpage-plus-restricted.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/startpage-plus-restricted/startpage-plus-restricted.component.ts ***!
  \**********************************************************************************/
/*! exports provided: StartpagePlusRestrictedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartpagePlusRestrictedComponent", function() { return StartpagePlusRestrictedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StartpagePlusRestrictedComponent {
    constructor() { }
    ngOnInit() {
    }
}
StartpagePlusRestrictedComponent.ɵfac = function StartpagePlusRestrictedComponent_Factory(t) { return new (t || StartpagePlusRestrictedComponent)(); };
StartpagePlusRestrictedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartpagePlusRestrictedComponent, selectors: [["app-startpage-plus-restricted"]], decls: 82, vars: 0, consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-md-3", "col-sm-6"], [1, "cardBlockShadow", "border", "rounded", "bg-white"], [1, "text-center"], ["title", "", "href", "https://jira.ssl.telespazio.com/secure/Dashboard.jspa", "target", "_blank", 1, "navBlock", "justify-content-center"], ["src", "../../assets/startpage/jira.png", "alt", "", 1, "imgLink", "justify-content-center"], [1, "text-center", "text-secondary"], [1, "spacer-20"], ["title", "", "href", "https://tuleap.telespazio.fr", "target", "_blank", 1, "navBlock", "justify-content-center"], ["title", "", "src", "../../assets/startpage/tuleap.png", "alt", "", 1, "imgLink", "justify-content-center"], ["title", "", "href", "http://demonstrator.telespazio.com/", "target", "_blank", 1, "navBlock", "justify-content-center"], ["title", "", "src", "../../assets/startpage/demonstrator.png", "alt", "", 1, "imgLink", "justify-content-center"], ["title", "", "href", "https://login.salesforce.com/", "target", "_blank", 1, "navBlock", "justify-content-center"], ["title", "", "src", "../../assets/startpage/salesforce.png", "alt", "", 1, "imgLink", "justify-content-center"], ["title", "", "href", "https://secure.digiposte.fr/identification-plus", "target", "_blank", 1, "navBlock", "justify-content-center"], ["src", "../../assets/startpage/digiposte.png", "alt", "", 1, "imgLink", "justify-content-center"], ["title", "", "href", "https://performancemanager5.successfactors.eu/login?company=finmeccaniP", "target", "_blank", 1, "navBlock", "justify-content-center"], ["title", "", "src", "../../assets/startpage/hrevolution.png", "alt", "", 1, "imgLink", "justify-content-center"], ["title", "", "href", "./agresso/index.html", "target", "_blank", 1, "navBlock", "justify-content-center"], ["title", "", "src", "../../assets/startpage/doc.png", "alt", "", 1, "imgLink", "justify-content-center"], ["title", "", "href", "http://www.earthlab-galaxy.com", "target", "_blank", 1, "navBlock", "justify-content-center"], ["title", "", "src", "../../assets/startpage/earthlab.png", "alt", "", 1, "imgLink", "justify-content-center"]], template: function StartpagePlusRestrictedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Jira");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Tuleap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Demonstrator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Salesforce");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Digiposte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "HR evolution");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Documentation Agresso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Earthlab Galaxy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0cGFnZS1wbHVzLXJlc3RyaWN0ZWQvc3RhcnRwYWdlLXBsdXMtcmVzdHJpY3RlZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartpagePlusRestrictedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-startpage-plus-restricted',
                templateUrl: './startpage-plus-restricted.component.html',
                styleUrls: ['./startpage-plus-restricted.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/startpage-plus/startpage-plus.component.ts":
/*!************************************************************!*\
  !*** ./src/app/startpage-plus/startpage-plus.component.ts ***!
  \************************************************************/
/*! exports provided: StartpagePlusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartpagePlusComponent", function() { return StartpagePlusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StartpagePlusComponent {
    constructor() { }
    ngOnInit() {
    }
}
StartpagePlusComponent.ɵfac = function StartpagePlusComponent_Factory(t) { return new (t || StartpagePlusComponent)(); };
StartpagePlusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartpagePlusComponent, selectors: [["app-startpage-plus"]], decls: 42, vars: 0, consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-md-3", "col-sm-6"], [1, "cardBlockShadow", "border", "rounded", "bg-white"], [1, "text-center"], ["title", "", "href", "https://jira.ssl.telespazio.com/secure/Dashboard.jspa", "target", "_blank", 1, "navBlock", "justify-content-center"], ["src", "../../assets/startpage/jira.png", "alt", "", 1, "imgLink", "justify-content-center"], [1, "text-center", "text-secondary"], [1, "spacer-20"], ["title", "", "href", "https://tuleap.telespazio.fr", "target", "_blank", 1, "navBlock", "justify-content-center"], ["title", "", "src", "../../assets/startpage/tuleap.png", "alt", "", 1, "imgLink", "justify-content-center"], ["title", "", "href", "http://demonstrator.telespazio.com/", "target", "_blank", 1, "navBlock", "justify-content-center"], ["title", "", "src", "../../assets/startpage/demonstrator.png", "alt", "", 1, "imgLink", "justify-content-center"], ["title", "", "href", "https://login.salesforce.com/", "target", "_blank", 1, "navBlock", "justify-content-center"], ["title", "", "src", "../../assets/startpage/salesforce.png", "alt", "", 1, "imgLink", "justify-content-center"]], template: function StartpagePlusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Jira");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Tuleap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Demonstrator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Salesforce");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0cGFnZS1wbHVzL3N0YXJ0cGFnZS1wbHVzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartpagePlusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-startpage-plus',
                templateUrl: './startpage-plus.component.html',
                styleUrls: ['./startpage-plus.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/services/search.service.ts":
/*!****************************************!*\
  !*** ./src/services/search.service.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SearchService {
    constructor() {
        this.mainSearchBar = '';
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(); };
SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\odelalande\Documents\HOME\MotherShip2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map