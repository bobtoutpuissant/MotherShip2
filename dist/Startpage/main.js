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
AppContComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppContComponent, selectors: [["app-app-cont"]], decls: 3, vars: 0, consts: [[1, "row"], [1, "col-md-4", "col-sm-5"], ["id", "mapComp", 1, "col-md-8", "col-sm-7"]], template: function AppContComponent_Template(rf, ctx) { if (rf & 1) {
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
/* harmony import */ var _startpage_main_startpage_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startpage-main/startpage-main.component */ "./src/app/startpage-main/startpage-main.component.ts");
/* harmony import */ var _startpage_plus_startpage_plus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./startpage-plus/startpage-plus.component */ "./src/app/startpage-plus/startpage-plus.component.ts");







const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'map', component: _app_cont_app_cont_component__WEBPACK_IMPORTED_MODULE_2__["AppContComponent"] },
    // {path: 'home', component: StartpageMainRestrictedComponent},
    // {path: 'plus', component: StartpagePlusRestrictedComponent}
    { path: 'home', component: _startpage_main_startpage_main_component__WEBPACK_IMPORTED_MODULE_3__["StartpageMainComponent"] },
    { path: 'plus', component: _startpage_plus_startpage_plus_component__WEBPACK_IMPORTED_MODULE_4__["StartpagePlusComponent"] }
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
    constructor(searchService, card, searchPipe) {
        this.searchService = searchService;
        this.card = card;
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
MapCompComponent.ɵfac = function MapCompComponent_Factory(t) { return new (t || MapCompComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_search_service__WEBPACK_IMPORTED_MODULE_2__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_get_card_info_service__WEBPACK_IMPORTED_MODULE_3__["GetCardInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_search_pipe__WEBPACK_IMPORTED_MODULE_4__["SearchPipe"])); };
MapCompComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapCompComponent, selectors: [["app-map-comp"]], decls: 110, vars: 0, consts: [["role", "tablist", 1, "nav", "nav-tabs", "nav-fill"], [1, "nav-item"], ["id", "floor0-tab", "data-toggle", "tab", "href", "#floor0", "role", "tab", "aria-controls", "floor0", "aria-selected", "true", 1, "nav-link", "active"], ["id", "floor1-tab", "data-toggle", "tab", "href", "#floor1", "role", "tab", "aria-controls", "floor1", "aria-selected", "false", 1, "nav-link"], ["id", "floor2-tab", "data-toggle", "tab", "href", "#floor2", "role", "tab", "aria-controls", "floor2", "aria-selected", "false", 1, "nav-link"], ["id", "myTabContent", 1, "tab-content"], ["id", "floor0", "role", "tabpanel", "aria-labelledby", "floor0-tab", 1, "tab-pane", "show", "active"], [1, "spacer-2"], [1, "row", "justify-content-center"], [1, "col-10", "align-items-center"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 717 566", "width", "1em", "height", "1em"], ["id", "W0", "x", "173.5", "y", "472.5", "width", "84", "height", "93", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W0", "points", "262.5 565.5 312.5 565.5 311.5 472.5 262.5 472.5 262.5 565.5", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W0", "x", "316.5", "y", "472.5", "width", "70", "height", "93", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W0", "points", "391.5 565.5 440.5 565.5 440.5 472.5 390.5 472.5 391.5 565.5", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W0", "x", "445.5", "y", "472.5", "width", "44", "height", "93", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W0", "x", "494.5", "y", "442.5", "width", "109", "height", "79", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W0", "x", "608.5", "y", "442.5", "width", "108", "height", "79", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W0", "points", "647.5 437.5 647.5 319.5 716.5 320.5 716.5 437.5 647.5 437.5", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W0", "x", "94.5", "y", "437.5", "width", "74", "height", "84", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W0", "x", "94.5", "y", "354.5", "width", "74", "height", "59", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W0", "points", "618.5 320.5 504.5 319.5 504.5 413.5 618.5 413.5 618.5 320.5", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W0", "points", "499.5 364.5 465.5 364.5 465.5 413.5 499.5 412.5 499.5 364.5", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W0", "points", "440.5 442.5 440.5 364.5 425.5 364.5 425.5 226.5 450.5 221.5 440.5 206.5 168.5 206.5 168.5 334.5 203.5 334.5 203.5 442.5 440.5 442.5", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W039", "x", "169.5", "y", "123.5", "width", "88", "height", "78", 1, "mapItem", 3, "click"], ["id", "W0", "x", "262.5", "y", "123.5", "width", "124", "height", "78", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W047", "points", "391.5 123.5 391.5 201.5 440.5 202.5 440.5 123.5 391.5 123.5", 1, "mapItem", 3, "click"], ["id", "W054", "points", "494.5 152.5 549.5 152.5 549.5 226.5 494.5 241.5 494.5 152.5", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W050", "points", "553.5 152.5 716.5 152.5 716.5 191.5 553.5 226.5 553.5 152.5", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W051", "x", "608.5", "y", "49.5", "width", "108", "height", "98", 1, "mapItem", 3, "click"], ["id", "W0", "x", "553.5", "y", "49.5", "width", "50", "height", "74", 1, "mapItem", 3, "click"], ["id", "W048", "x", "494.5", "y", "49.5", "width", "55", "height", "74", 1, "mapItem", 3, "click"], ["id", "W046", "x", "391.5", "y", "0.5", "width", "49", "height", "93", 1, "mapItem", 3, "click"], ["id", "W044", "x", "316.5", "y", "0.5", "width", "70", "height", "93", 1, "mapItem", 3, "click"], ["id", "W042", "x", "262.5", "y", "0.5", "width", "49", "height", "93", 1, "mapItem", 3, "click"], ["id", "W040", "x", "213.5", "y", "0.5", "width", "44", "height", "93", 1, "mapItem", 3, "click"], ["id", "W038", "points", "208.5 0.5 168.5 0.5 168.5 44.5 139.5 44.5 139.5 93.5 208.5 93.5 208.5 0.5", 1, "mapItem", 3, "click"], ["id", "W0", "x", "94.5", "y", "44.5", "width", "40", "height", "88", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W0", "points", "89.5 393.5 89.5 300.5 0.5 299.5 0.5 393.5 89.5 393.5", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W0", "points", "0.5 295.5 163.5 295.5 164.5 157.5 94.5 157.5 94.5 167.5 0.5 191.5 0.5 295.5", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "floor1", "role", "tabpanel", "aria-labelledby", "floor1-tab", 1, "tab-pane"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 781.25 532.4", "width", "1em", "height", "1em"], ["id", "W110 W111", "points", "780.75 531.9 701.74 531.9 701.74 433.54 686.92 433.54 686.92 418.57 780.75 418.78 780.75 531.9", 1, "mapItem", 3, "click"], ["id", "W112", "x", "647.41", "y", "438.46", "width", "49.38", "height", "93.44", 1, "mapItem", 3, "click"], ["id", "W114", "x", "593.09", "y", "428.62", "width", "49.38", "height", "103.28", 1, "mapItem", 3, "click"], ["id", "W116", "x", "479.51", "y", "428.96", "width", "108.64", "height", "102.94", 1, "mapItem", 3, "click"], ["id", "W118", "x", "420.25", "y", "458.13", "width", "53.99", "height", "73.77", 1, "mapItem", 3, "click"], ["id", "W120", "x", "365.93", "y", "458.13", "width", "49.38", "height", "73.77", 1, "mapItem", 3, "click"], ["id", "W122", "points", "360.99 458.13 360.99 531.9 306.67 531.9 306.69 458.32 360.99 458.13", 1, "mapItem", 3, "click"], ["id", "W124", "x", "252.35", "y", "458.13", "width", "49.38", "height", "73.77", 1, "mapItem", 3, "click"], ["id", "W126", "points", "247.41 458.13 247.41 531.9 193.09 531.9 193.09 457.91 247.41 458.13", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W128 W130", "points", "188.15 458.13 188.15 531.9 94.33 531.9 94.33 428.89 168.4 428.62 168.4 458.13 188.15 458.13", 1, "mapItem", 3, "click"], ["id", "W129", "points", "93.74 423.7 193.09 423.7 193.09 428.62 281.98 428.62 281.98 271.24 0.5 271.24 0.5 404.03 94.25 404.03 93.74 423.7", 1, "mapItem", 3, "click"], ["id", "W1", "points", "286.92 428.62 365.93 428.9 365.93 266.91 286.92 266.91 286.92 428.62", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W139", "points", "286.47 261.41 286.92 108.95 474.69 109.33 474.69 202.32 454.82 207.31 454.82 349.93 370.87 349.93 371.36 261.41 286.47 261.41", 1, "mapItem", 3, "click"], ["id", "W1", "points", "370.87 354.85 370.87 428.62 420.25 428.62 420.25 399.11 474.56 399.11 474.56 354.85 370.87 354.85", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W108", "points", "499.26 399.11 499.22 305.67 657.29 305.67 657.29 398.99 499.26 399.11", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W105", "x", "686.92", "y", "364.69", "width", "93.83", "height", "49.18", 1, "mapItem", 3, "click"], ["id", "W152", "points", "686.92 359.77 780.75 359.77 780.75 305.67 686.68 306.32 686.92 359.77", 1, "mapItem", 3, "click"], ["id", "W148", "points", "701.74 300.75 780.75 300.75 780.75 167.97 701.42 182.72 701.74 300.75", 1, "mapItem", 3, "click"], ["id", "W150", "points", "701.74 177.93 780.75 162.73 780.75 79.29 701.74 79.33 701.74 148.29 692.56 153.21 701.74 177.93", 1, "mapItem", 3, "click"], ["id", "W146", "x", "706.67", "y", "0.75", "width", "74.07", "height", "73.77", 1, "mapItem", 3, "click"], ["id", "W441", "points", "701.14 74.52 647.41 74.52 647.44 0.75 701.74 0.75 701.14 74.52", 1, "mapItem", 3, "click"], ["id", "W142", "points", "533.83 79.29 534.35 0.75 642.48 0.75 642.48 79.29 533.83 79.29", 1, "mapItem", 3, "click"], ["id", "W140", "points", "528.89 0.75 479.51 0.5 479.51 79.29 528.89 79.29 528.89 0.75", 1, "mapItem", 3, "click"], ["id", "W138", "points", "473.93 0.5 420.25 0.5 420.25 79.6 474.25 79.29 473.93 0.5", 1, "mapItem", 3, "click"], ["id", "W136", "points", "415.31 79.6 365.93 79.42 365.93 0.5 415.31 0.75 415.31 79.6", 1, "mapItem", 3, "click"], ["id", "W134", "points", "360.99 79.89 271.55 79.6 272.11 0.75 360.99 0.75 360.99 79.89", 1, "mapItem", 3, "click"], ["id", "W132", "points", "267.17 79.6 267.17 0.75 188.15 0.75 188.15 79.44 267.17 79.6", 1, "mapItem", 3, "click"], ["id", "W133", "points", "0.5 266.32 281.98 266.91 281.98 128.62 99.27 128.62 0.5 148.56 0.5 266.32", 1, "mapItem", 3, "click"], ["id", "floor2", "role", "tabpanel", "aria-labelledby", "floor2-tab", 1, "tab-pane"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 628.48 518", "width", "1em", "height", "1em"], ["id", "W201", "x", "0.5", "y", "418.96", "width", "93.83", "height", "98.36", 1, "mapItem", 3, "click"], ["id", "W202", "x", "0.5", "y", "330.43", "width", "69.14", "height", "83.61", 1, "mapItem", 3, "click"], ["id", "W2", "x", "30.13", "y", "212.4", "width", "64.2", "height", "93.44", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W2", "points", "99.27 281.25 99.27 128.79 277.04 128.79 277.04 197.65 257.29 202.57 257.29 281.25 99.27 281.25", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W2", "points", "98.98 286.5 98.98 389.5 276.98 389.5 276.98 340.5 256.98 340.5 256.98 286.5 98.98 286.5", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W223", "x", "98.98", "y", "418.5", "width", "69", "height", "99", 1, "mapItem", 3, "click"], ["id", "W222", "x", "172.98", "y", "418.5", "width", "50", "height", "99", 1, "mapItem", 3, "click"], ["id", "W221", "x", "227.98", "y", "418.5", "width", "49", "height", "99", 1, "mapItem", 3, "click"], ["id", "W220", "x", "281.98", "y", "418.5", "width", "49", "height", "99", 1, "mapItem", 3, "click"], ["id", "W219", "x", "335.98", "y", "418.5", "width", "50", "height", "99", 1, "mapItem", 3, "click"], ["id", "W218", "x", "390.98", "y", "418.5", "width", "49", "height", "99", 1, "mapItem", 3, "click"], ["id", "W217", "x", "444.98", "y", "418.5", "width", "49", "height", "99", 1, "mapItem", 3, "click"], ["id", "W216", "x", "498.98", "y", "389.5", "width", "74", "height", "128", 1, "mapItem", 3, "click"], ["id", "W215", "x", "498.98", "y", "296.5", "width", "74", "height", "88", 1, "mapItem", 3, "click"], ["id", "W2", "points", "518.98 291.5 627.98 291.5 627.98 148.5 498.98 177.5 518.98 291.5", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"], ["id", "W2", "points", "493.98 173.5 572.98 153.5 573.98 104.5 513.98 104.5 493.98 173.5", 1, "mapItem", 3, "click"], ["id", "W213", "x", "498.98", "y", "0.5", "width", "74", "height", "99", 1, "mapItem", 3, "click"], ["id", "W212", "x", "444.98", "y", "0.5", "width", "49", "height", "99", 1, "mapItem", 3, "click"], ["id", "W211", "x", "390.98", "y", "0.5", "width", "49", "height", "99", 1, "mapItem", 3, "click"], ["id", "W210", "x", "335.98", "y", "0.5", "width", "50", "height", "99", 1, "mapItem", 3, "click"], ["id", "W209", "x", "281.98", "y", "0.5", "width", "49", "height", "99", 1, "mapItem", 3, "click"], ["id", "W208", "x", "227.98", "y", "0.5", "width", "49", "height", "99", 1, "mapItem", 3, "click"], ["id", "W207", "x", "172.98", "y", "0.5", "width", "50", "height", "99", 1, "mapItem", 3, "click"], ["id", "W206", "x", "98.98", "y", "0.5", "width", "69", "height", "99", 1, "mapItem", 3, "click"], ["id", "W205", "x", "0.98", "y", "0.5", "width", "93", "height", "99", 1, "mapItem", 3, "click"], ["id", "W204", "x", "0.98", "y", "104.5", "width", "69", "height", "83", 1, "mapItem", 3, "click"], ["id", "W2", "x", "301.98", "y", "296.5", "width", "153", "height", "93", "stroke", "black", "stroke-width", "2", "stroke-dasharray", "10", "stroke-opacity", "0.5", 1, "nohover", 3, "click"]], template: function MapCompComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "rect", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_16_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "polygon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_17_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "rect", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_18_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "polygon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_19_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "rect", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_20_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "rect", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_21_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "rect", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_22_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "polygon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_23_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "rect", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_24_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "rect", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_25_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "polygon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_26_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "polygon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_27_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "polygon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_28_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "rect", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_29_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "rect", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_30_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "polygon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_31_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "polygon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_32_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "polygon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_33_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "rect", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_34_listener($event) { return ctx.clickMap($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "polygon", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_41_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "rect", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_42_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "polygon", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_43_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "polygon", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_44_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "svg", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "polygon", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_50_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "rect", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_51_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "rect", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_52_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "rect", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_53_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "rect", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_54_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "rect", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_55_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "polygon", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_56_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "rect", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_57_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "polygon", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_58_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "polygon", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_59_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "polygon", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_60_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "polygon", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_61_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "polygon", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_62_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "polygon", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_63_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "polygon", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_64_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "rect", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_65_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "polygon", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_66_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "polygon", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_67_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "polygon", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_68_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "rect", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_69_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "polygon", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_70_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "polygon", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_71_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "polygon", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_72_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "polygon", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_73_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "polygon", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_74_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "polygon", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_75_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "polygon", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_76_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "polygon", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_77_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "svg", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "rect", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_83_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "rect", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_84_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "rect", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_85_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "polygon", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_86_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "polygon", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_87_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "rect", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_88_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "rect", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_89_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "rect", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_90_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "rect", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_91_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "rect", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_92_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "rect", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_93_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "rect", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_94_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "rect", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_95_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "rect", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_96_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "polygon", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_97_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "polygon", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_polygon_click_98_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "rect", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_99_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "rect", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_100_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "rect", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_101_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "rect", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_102_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "rect", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_103_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "rect", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_104_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "rect", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_105_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "rect", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_106_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "rect", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_107_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "rect", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_108_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "rect", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapCompComponent_Template__svg_rect_click_109_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["path[_ngcontent-%COMP%]:hover:not(.nohover), rect[_ngcontent-%COMP%]:hover:not(.nohover), polygon[_ngcontent-%COMP%]:hover:not(.nohover) {\n  transition: all linear 0.2s;\n  stroke-width: 10px;\n  stroke-linejoin: round;\n  fill: rgba(0, 102, 153, 0.3);\n  cursor: pointer;\n}\n\npath[_ngcontent-%COMP%], rect[_ngcontent-%COMP%], polygon[_ngcontent-%COMP%] {\n  fill: rgba(0, 0, 0, 0.3);\n}\n\npath.nohover[_ngcontent-%COMP%], rect.nohover[_ngcontent-%COMP%], polygon.nohover[_ngcontent-%COMP%] {\n  fill: rgba(0, 0, 0, 0);\n  border-style: dashed;\n}\n\npath.nohover[_ngcontent-%COMP%]:hover, rect.nohover[_ngcontent-%COMP%]:hover, polygon.nohover[_ngcontent-%COMP%]:hover {\n  transition: all linear 0.1s;\n  fill: rgba(139, 0, 0, 0.2);\n  border-style: dashed;\n  cursor: no-drop;\n}\n\npath.highlightMap[_ngcontent-%COMP%], rect.highlightMap[_ngcontent-%COMP%], polygon.highlightMap[_ngcontent-%COMP%] {\n  fill: rgba(228, 118, 15, 0.4);\n  box-shadow: 10px 5px 5px orange;\n}\n\npath.highlightMap[_ngcontent-%COMP%]:hover, rect.highlightMap[_ngcontent-%COMP%]:hover, polygon.highlightMap[_ngcontent-%COMP%]:hover {\n  fill: rgba(15, 228, 86, 0.4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLWNvbXAvbWFwLWNvbXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBOzs7RUFHSSx3QkFBQTtBQUNKOztBQUVBOzs7RUFHSSxzQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7OztFQUdJLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTs7O0VBR0ksNkJBQUE7RUFDQSwrQkFBQTtBQUNKOztBQUVBOzs7RUFHSSw0QkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbWFwLWNvbXAvbWFwLWNvbXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYXRoOmhvdmVyOm5vdCgubm9ob3ZlciksXHJcbnJlY3Q6aG92ZXI6bm90KC5ub2hvdmVyKSxcclxucG9seWdvbjpob3Zlcjpub3QoLm5vaG92ZXIpIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMC4ycztcclxuICAgIHN0cm9rZS13aWR0aDogMTBweDtcclxuICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XHJcbiAgICBmaWxsOiByZ2JhKCRjb2xvcjogIzAwNjY5OSwgJGFscGhhOiAwLjMpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5wYXRoLFxyXG5yZWN0LFxyXG5wb2x5Z29uIHtcclxuICAgIGZpbGw6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuMyk7XHJcbn1cclxuXHJcbnBhdGgubm9ob3ZlcixcclxucmVjdC5ub2hvdmVyLFxyXG5wb2x5Z29uLm5vaG92ZXIge1xyXG4gICAgZmlsbDogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC4wKTtcclxuICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xyXG59XHJcblxyXG5wYXRoLm5vaG92ZXI6aG92ZXIsXHJcbnJlY3Qubm9ob3Zlcjpob3ZlcixcclxucG9seWdvbi5ub2hvdmVyOmhvdmVyIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMC4xcztcclxuICAgIGZpbGw6IHJnYmEoJGNvbG9yOiAjOGIwMDAwLCAkYWxwaGE6IDAuMik7XHJcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcclxuICAgIGN1cnNvcjogbm8tZHJvcDtcclxufVxyXG5cclxucGF0aC5oaWdobGlnaHRNYXAsXHJcbnJlY3QuaGlnaGxpZ2h0TWFwLFxyXG5wb2x5Z29uLmhpZ2hsaWdodE1hcCB7XHJcbiAgICBmaWxsOiByZ2JhKCRjb2xvcjogI2U0NzYwZiwgJGFscGhhOiAwLjQpO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCA1cHggNXB4IG9yYW5nZTtcclxufVxyXG5cclxucGF0aC5oaWdobGlnaHRNYXA6aG92ZXIsXHJcbnJlY3QuaGlnaGxpZ2h0TWFwOmhvdmVyLFxyXG5wb2x5Z29uLmhpZ2hsaWdodE1hcDpob3ZlciB7XHJcbiAgICBmaWxsOiByZ2JhKCRjb2xvcjogIzBmZTQ1NiwgJGFscGhhOiAwLjQpO1xyXG59XHJcblxyXG4vLyAjVzE6bm90KC5ub2hvdmVyKSxcclxuLy8gI1cyOm5vdCgubm9ob3ZlciksXHJcbi8vICNXMDpub3QoLm5vaG92ZXIpIHtcclxuLy8gICAgIGZpbGw6IHJnYmEoJGNvbG9yOiAjMDJkYTM4LCAkYWxwaGE6IDAuNSk7XHJcbi8vIH1cclxuLy8gLm5vaG92ZXIjVzEsXHJcbi8vIC5ub2hvdmVyI1cyLFxyXG4vLyAubm9ob3ZlciNXMCB7XHJcbi8vICAgICBmaWxsOiByZ2JhKCRjb2xvcjogI2JhZGEwMiwgJGFscGhhOiAwLjUpO1xyXG4vLyB9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapCompComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map-comp',
                templateUrl: './map-comp.component.html',
                styleUrls: ['./map-comp.component.scss']
            }]
    }], function () { return [{ type: src_services_search_service__WEBPACK_IMPORTED_MODULE_2__["default"] }, { type: _get_card_info_service__WEBPACK_IMPORTED_MODULE_3__["GetCardInfoService"] }, { type: _search_pipe__WEBPACK_IMPORTED_MODULE_4__["SearchPipe"] }]; }, null); })();


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
PopCardListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopCardListComponent, selectors: [["app-pop-card-list"]], decls: 4, vars: 4, consts: [["id", "scrollboxList", 1, "row"], [1, "col-12"], [3, "people", 4, "ngFor", "ngForOf"], [3, "people"]], template: function PopCardListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PopCardListComponent_app_pop_card_temp_2_Template, 1, 1, "app-pop-card-temp", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx.peopleList, ctx.searchService.mainSearchBar));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _pop_card_temp_pop_card_temp_component__WEBPACK_IMPORTED_MODULE_4__["PopCardTempComponent"]], pipes: [_search_pipe__WEBPACK_IMPORTED_MODULE_5__["SearchPipe"]], styles: [".ps[_ngcontent-%COMP%] {\n    overflow: hidden !important;\n    overflow-anchor: none;\n    -ms-overflow-style: none;\n    touch-action: auto;\n    -ms-touch-action: auto;\n}\n\n\n\n.ps__rail-x[_ngcontent-%COMP%] {\n    display: none;\n    opacity: 0;\n    transition: background-color .2s linear, opacity .2s linear;\n    -webkit-transition: background-color .2s linear, opacity .2s linear;\n    height: 15px;\n    \n    bottom: 0px;\n    \n    position: absolute;\n}\n\n.ps__rail-y[_ngcontent-%COMP%] {\n    display: none;\n    opacity: 0;\n    transition: background-color .2s linear, opacity .2s linear;\n    -webkit-transition: background-color .2s linear, opacity .2s linear;\n    width: 15px;\n    \n    right: 0;\n    \n    position: absolute;\n}\n\n.ps--active-x[_ngcontent-%COMP%] > .ps__rail-x[_ngcontent-%COMP%], .ps--active-y[_ngcontent-%COMP%] > .ps__rail-y[_ngcontent-%COMP%] {\n    display: block;\n    background-color: transparent;\n}\n\n.ps[_ngcontent-%COMP%]:hover > .ps__rail-x[_ngcontent-%COMP%], .ps[_ngcontent-%COMP%]:hover > .ps__rail-y[_ngcontent-%COMP%], .ps--focus[_ngcontent-%COMP%] > .ps__rail-x[_ngcontent-%COMP%], .ps--focus[_ngcontent-%COMP%] > .ps__rail-y[_ngcontent-%COMP%], .ps--scrolling-x[_ngcontent-%COMP%] > .ps__rail-x[_ngcontent-%COMP%], .ps--scrolling-y[_ngcontent-%COMP%] > .ps__rail-y[_ngcontent-%COMP%] {\n    opacity: 0.6;\n}\n\n.ps[_ngcontent-%COMP%]   .ps__rail-x[_ngcontent-%COMP%]:hover, .ps[_ngcontent-%COMP%]   .ps__rail-y[_ngcontent-%COMP%]:hover, .ps[_ngcontent-%COMP%]   .ps__rail-x[_ngcontent-%COMP%]:focus, .ps[_ngcontent-%COMP%]   .ps__rail-y[_ngcontent-%COMP%]:focus, .ps[_ngcontent-%COMP%]   .ps__rail-x.ps--clicking[_ngcontent-%COMP%], .ps[_ngcontent-%COMP%]   .ps__rail-y.ps--clicking[_ngcontent-%COMP%] {\n    background-color: #eee;\n    opacity: 0.9;\n}\n\n\n\n.ps__thumb-x[_ngcontent-%COMP%] {\n    background-color: #aaa;\n    border-radius: 6px;\n    transition: background-color .2s linear, height .2s ease-in-out;\n    -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n    height: 6px;\n    \n    bottom: 2px;\n    \n    position: absolute;\n}\n\n.ps__thumb-y[_ngcontent-%COMP%] {\n    background-color: #aaa;\n    border-radius: 6px;\n    transition: background-color .2s linear, width .2s ease-in-out;\n    -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n    width: 6px;\n    \n    right: 2px;\n    \n    position: absolute;\n}\n\n.ps__rail-x[_ngcontent-%COMP%]:hover > .ps__thumb-x[_ngcontent-%COMP%], .ps__rail-x[_ngcontent-%COMP%]:focus > .ps__thumb-x[_ngcontent-%COMP%], .ps__rail-x.ps--clicking[_ngcontent-%COMP%]   .ps__thumb-x[_ngcontent-%COMP%] {\n    background-color: #999;\n    height: 11px;\n}\n\n.ps__rail-y[_ngcontent-%COMP%]:hover > .ps__thumb-y[_ngcontent-%COMP%], .ps__rail-y[_ngcontent-%COMP%]:focus > .ps__thumb-y[_ngcontent-%COMP%], .ps__rail-y.ps--clicking[_ngcontent-%COMP%]   .ps__thumb-y[_ngcontent-%COMP%] {\n    background-color: #999;\n    width: 11px;\n}\n\n\n\n@supports (-ms-overflow-style: none) {\n    .ps[_ngcontent-%COMP%] {\n        overflow: auto !important;\n    }\n}\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n    .ps[_ngcontent-%COMP%] {\n        overflow: auto !important;\n    }\n}\n\n.roomNumberOnCard[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n#scrollboxList[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-width: 500px;\n  max-height: 90vh;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9wZXJmZWN0LXNjcm9sbGJhci9jc3MvcGVyZmVjdC1zY3JvbGxiYXIuY3NzIiwic3JjL2FwcC9wb3AtY2FyZC1saXN0L3BvcC1jYXJkLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7O0FBRUY7SUFDSSwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUdBOztFQUVFOztBQUVGO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDViwyREFBMkQ7SUFDM0QsbUVBQW1FO0lBQ25FLFlBQVk7SUFDWixtREFBbUQ7SUFDbkQsV0FBVztJQUNYLG1DQUFtQztJQUNuQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLDJEQUEyRDtJQUMzRCxtRUFBbUU7SUFDbkUsV0FBVztJQUNYLG1EQUFtRDtJQUNuRCxRQUFRO0lBQ1IsbUNBQW1DO0lBQ25DLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsNkJBQTZCO0FBQ2pDOztBQUVBOzs7Ozs7SUFNSSxZQUFZO0FBQ2hCOztBQUVBOzs7Ozs7SUFNSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFHQTs7RUFFRTs7QUFFRjtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsK0RBQStEO0lBQy9ELHVFQUF1RTtJQUN2RSxXQUFXO0lBQ1gsMkNBQTJDO0lBQzNDLFdBQVc7SUFDWCxtQ0FBbUM7SUFDbkMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQiw4REFBOEQ7SUFDOUQsc0VBQXNFO0lBQ3RFLFVBQVU7SUFDViwwQ0FBMEM7SUFDMUMsVUFBVTtJQUNWLG1DQUFtQztJQUNuQyxrQkFBa0I7QUFDdEI7O0FBRUE7OztJQUdJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBOzs7SUFHSSxzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUdBLGdCQUFnQjs7QUFFaEI7SUFDSTtRQUNJLHlCQUF5QjtJQUM3QjtBQUNKOztBQUVBO0lBRUk7UUFDSSx5QkFBeUI7SUFDN0I7QUFDSjs7QUMxSEE7RUFDSSxpQkFBQTtBQUNKOztBQUlBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9wb3AtY2FyZC1saXN0L3BvcC1jYXJkLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29udGFpbmVyIHN0eWxlXG4gKi9cblxuLnBzIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3ctYW5jaG9yOiBub25lO1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgICB0b3VjaC1hY3Rpb246IGF1dG87XG4gICAgLW1zLXRvdWNoLWFjdGlvbjogYXV0bztcbn1cblxuXG4vKlxuICogU2Nyb2xsYmFyIHJhaWwgc3R5bGVzXG4gKi9cblxuLnBzX19yYWlsLXgge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXIsIG9wYWNpdHkgLjJzIGxpbmVhcjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhciwgb3BhY2l0eSAuMnMgbGluZWFyO1xuICAgIGhlaWdodDogMTVweDtcbiAgICAvKiB0aGVyZSBtdXN0IGJlICdib3R0b20nIG9yICd0b3AnIGZvciBwc19fcmFpbC14ICovXG4gICAgYm90dG9tOiAwcHg7XG4gICAgLyogcGxlYXNlIGRvbid0IGNoYW5nZSAncG9zaXRpb24nICovXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucHNfX3JhaWwteSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhciwgb3BhY2l0eSAuMnMgbGluZWFyO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyLCBvcGFjaXR5IC4ycyBsaW5lYXI7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgLyogdGhlcmUgbXVzdCBiZSAncmlnaHQnIG9yICdsZWZ0JyBmb3IgcHNfX3JhaWwteSAqL1xuICAgIHJpZ2h0OiAwO1xuICAgIC8qIHBsZWFzZSBkb24ndCBjaGFuZ2UgJ3Bvc2l0aW9uJyAqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnBzLS1hY3RpdmUteD4ucHNfX3JhaWwteCxcbi5wcy0tYWN0aXZlLXk+LnBzX19yYWlsLXkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ucHM6aG92ZXI+LnBzX19yYWlsLXgsXG4ucHM6aG92ZXI+LnBzX19yYWlsLXksXG4ucHMtLWZvY3VzPi5wc19fcmFpbC14LFxuLnBzLS1mb2N1cz4ucHNfX3JhaWwteSxcbi5wcy0tc2Nyb2xsaW5nLXg+LnBzX19yYWlsLXgsXG4ucHMtLXNjcm9sbGluZy15Pi5wc19fcmFpbC15IHtcbiAgICBvcGFjaXR5OiAwLjY7XG59XG5cbi5wcyAucHNfX3JhaWwteDpob3Zlcixcbi5wcyAucHNfX3JhaWwteTpob3Zlcixcbi5wcyAucHNfX3JhaWwteDpmb2N1cyxcbi5wcyAucHNfX3JhaWwteTpmb2N1cyxcbi5wcyAucHNfX3JhaWwteC5wcy0tY2xpY2tpbmcsXG4ucHMgLnBzX19yYWlsLXkucHMtLWNsaWNraW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIG9wYWNpdHk6IDAuOTtcbn1cblxuXG4vKlxuICogU2Nyb2xsYmFyIHRodW1iIHN0eWxlc1xuICovXG5cbi5wc19fdGh1bWIteCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyLCBoZWlnaHQgLjJzIGVhc2UtaW4tb3V0O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyLCBoZWlnaHQgLjJzIGVhc2UtaW4tb3V0O1xuICAgIGhlaWdodDogNnB4O1xuICAgIC8qIHRoZXJlIG11c3QgYmUgJ2JvdHRvbScgZm9yIHBzX190aHVtYi14ICovXG4gICAgYm90dG9tOiAycHg7XG4gICAgLyogcGxlYXNlIGRvbid0IGNoYW5nZSAncG9zaXRpb24nICovXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucHNfX3RodW1iLXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhciwgd2lkdGggLjJzIGVhc2UtaW4tb3V0O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyLCB3aWR0aCAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgd2lkdGg6IDZweDtcbiAgICAvKiB0aGVyZSBtdXN0IGJlICdyaWdodCcgZm9yIHBzX190aHVtYi15ICovXG4gICAgcmlnaHQ6IDJweDtcbiAgICAvKiBwbGVhc2UgZG9uJ3QgY2hhbmdlICdwb3NpdGlvbicgKi9cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5wc19fcmFpbC14OmhvdmVyPi5wc19fdGh1bWIteCxcbi5wc19fcmFpbC14OmZvY3VzPi5wc19fdGh1bWIteCxcbi5wc19fcmFpbC14LnBzLS1jbGlja2luZyAucHNfX3RodW1iLXgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XG4gICAgaGVpZ2h0OiAxMXB4O1xufVxuXG4ucHNfX3JhaWwteTpob3Zlcj4ucHNfX3RodW1iLXksXG4ucHNfX3JhaWwteTpmb2N1cz4ucHNfX3RodW1iLXksXG4ucHNfX3JhaWwteS5wcy0tY2xpY2tpbmcgLnBzX190aHVtYi15IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xuICAgIHdpZHRoOiAxMXB4O1xufVxuXG5cbi8qIE1TIHN1cHBvcnRzICovXG5cbkBzdXBwb3J0cyAoLW1zLW92ZXJmbG93LXN0eWxlOiBub25lKSB7XG4gICAgLnBzIHtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSxcbigtbXMtaGlnaC1jb250cmFzdDogbm9uZSkge1xuICAgIC5wcyB7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuIiwiQGltcG9ydCAnfnBlcmZlY3Qtc2Nyb2xsYmFyL2Nzcy9wZXJmZWN0LXNjcm9sbGJhci5jc3MnO1xyXG4ucm9vbU51bWJlck9uQ2FyZCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaW1nLnBlb3BsZUljb25QaG90byB7fVxyXG5cclxuI3Njcm9sbGJveExpc3Qge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogOTB2aDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbiJdfQ== */"] });
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




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
                switchMepanel.classList.remove('active');
                unswitch2.classList.remove('active');
                unswitch2.setAttribute('aria-selected', 'false');
                switchMepanel.classList.remove('active');
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
                    switchMepanel.classList.remove('active');
                    unswitch2.classList.remove('active');
                    unswitch2.setAttribute('aria-selected', 'false');
                    switchMepanel.classList.remove('active');
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
                    switchMepanel.classList.remove('active');
                    unswitch2.classList.remove('active');
                    unswitch2.setAttribute('aria-selected', 'false');
                    switchMepanel.classList.remove('active');
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
PopCardTempComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopCardTempComponent, selectors: [["app-pop-card-temp"]], inputs: { people: "people" }, decls: 12, vars: 8, consts: [[1, "card", "mb-3"], [1, "card-header"], [1, "card-body", "row"], ["onerror", "if (this.src != '../../assets/img/flower.jpg') this.src = '../../assets/img/flower.jpg';", 1, "peopleIconPhoto", "col-3", 3, "src"], [1, "card-text"], [1, "card-title", "roomNumberOnCard", 3, "click"]], template: function PopCardTempComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopCardTempComponent_Template_p_click_10_listener($event) { return ctx.clickMap($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.people.givenName, " ", ctx.people.sn, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "../../assets/img/", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, ctx.people.sn), " ", ctx.people.givenName, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.people.mail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.people.room);
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcC1jYXJkLXRlbXAvcG9wLWNhcmQtdGVtcC5jb21wb25lbnQuc2NzcyJ9 */"] });
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