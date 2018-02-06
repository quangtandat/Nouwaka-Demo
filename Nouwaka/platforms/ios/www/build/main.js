webpackJsonp([4],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecifyPeriodPopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ion_datepicker__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_constant__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the SpecifyPeriodPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SpecifyPeriodPopoverComponent = (function () {
    function SpecifyPeriodPopoverComponent(params, events, viewCtr, common) {
        this.params = params;
        this.events = events;
        this.viewCtr = viewCtr;
        this.common = common;
        this.endDate = new Date();
        this.startDate = new Date(new Date().setDate(this.endDate.getDate() - 30));
        this.eventName = null;
        this.callEvent = events;
        this.endDate = this.params.get(__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].END_DATE);
        this.startDate = this.params.get(__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].START_DATE);
        this.eventName = this.params.get(__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].EVENT_NAME);
    }
    /**
     * Event change periode
     *    param:
     *      -N/A
     *    return:
     *      -N/A
    */
    SpecifyPeriodPopoverComponent.prototype.changePeriod = function () {
        if (this.startDate > this.endDate) {
            this.common.showModalDialogConfirm(__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].NWK_CK_006, true);
        }
        else {
            this.viewCtr.dismiss();
            this.callEvent.publish(String(this.eventName), this.startDate, this.endDate);
        }
    };
    /**
     * Close popup
     *    param:
     *      -N/A
     *    return:
     *      -N/A
    */
    SpecifyPeriodPopoverComponent.prototype.closePopup = function () {
        this.viewCtr.dismiss();
    };
    return SpecifyPeriodPopoverComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ion_datepicker__["a" /* DatePickerDirective */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ion_datepicker__["a" /* DatePickerDirective */])
], SpecifyPeriodPopoverComponent.prototype, "datepicker", void 0);
SpecifyPeriodPopoverComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'specify-period-popover',template:/*ion-inline-start:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/components/specify-period-popover/specify-period-popover.html"*/'<!-- Generated template for the SpecifyPeriodPopoverComponent component -->\n<div class="custom-specifyPeriod-popover">\n  <ion-list>\n    <ion-item class="title-item" (click)="closePopup()">キャンセル </ion-item>\n    <ion-item>\n      <ion-row align-items-center justify-content-center class="store-button-date">\n        <!--Padding-->\n        <!--First input date-->\n        <ion-col>\n          <button class="date-button">\n            <span ion-datepicker [(value)]="startDate" [localeStrings]="{monday: true,\n                weekdays: [\'月曜日\', \'火曜日\', \'水曜日\', \'木曜日\', \'金曜日\', \'土曜日\', \'日曜日\'], \n                months: [\'1月\', \'2月\', \'3月\', \'4月\', \'5月\', \'6月\', \'7月\', \'8月\', \'9月\', \'10月\', \'11月\', \'12月\']}" clear class="ScheduleDate">\n              <span>{{startDate|date:\'yyyy/MM/dd\'}}</span>\n            </span>\n          </button>\n        </ion-col>\n        <!--The seperate-->\n        <ion-col col-1>\n          <ion-title> ~ </ion-title>\n        </ion-col>\n        <!--Second input date-->\n        <ion-col>\n          <button class="date-button">\n            <span ion-datepicker [(value)]="endDate" [localeStrings]="{monday: true,\n                weekdays: [\'月曜日\', \'火曜日\', \'水曜日\', \'木曜日\', \'金曜日\', \'土曜日\', \'日曜日\'], \n                months: [\'1月\', \'2月\', \'3月\', \'4月\', \'5月\', \'6月\', \'7月\', \'8月\', \'9月\', \'10月\', \'11月\', \'12月\']}" clear class="ScheduleDate">\n              <span>{{endDate|date:\'yyyy/MM/dd\'}}</span>\n            </span>\n          </button>\n        </ion-col>\n        <!--Padding-->\n      </ion-row>\n      <ion-row class="store-button-set" align-items-center justify-content-center>\n        <button class="button-set-custom" (click)="changePeriod()">上記期間のメッセージを表示する</button>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n</div>'/*ion-inline-end:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/components/specify-period-popover/specify-period-popover.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_index__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_4__app_common__["a" /* commonClass */]])
], SpecifyPeriodPopoverComponent);

//# sourceMappingURL=specify-period-popover.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return levelPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { NavController, ViewController, NavParams } from 'ionic-angular/index';

/**
 * Generated class for the StaffPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var levelPopoverPage = (function () {
    function levelPopoverPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.level = this.navParams.get('level');
    }
    levelPopoverPage.prototype.close = function () {
        console.log(this.level);
        this.viewCtrl.dismiss(this.level);
    };
    return levelPopoverPage;
}());
levelPopoverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n    <ion-list radio-group [(ngModel)]=\"level\">\n    <div>\n    <ion-item style=\"padding-right:16px;\">\n      <ion-label>\n        <ion-icon style=\"color: #74cb37;font-size: 25px;\"  ios=\"ios-heart\" md=\"md-heart\"></ion-icon>\n      </ion-label>\n      <ion-radio (ionSelect)=\"close()\" value=\"1\"></ion-radio>\n    </ion-item>\n    <ion-item style=\"padding-right:16px;\">\n    <ion-label>\n    <ion-icon style=\"color: #74cb37;font-size: 25px;\"  ios=\"ios-heart\" md=\"md-heart\"></ion-icon>\n    <ion-icon style=\"color: #74cb37;font-size: 25px;\"  ios=\"ios-heart\" md=\"md-heart\"></ion-icon>\n    </ion-label>\n      <ion-radio (ionSelect)=\"close()\" value=\"2\"></ion-radio>\n    </ion-item>\n    <ion-item style=\"border-bottom-right-radius: 10px;border-bottom-left-radius:10px;padding-right:16px;\">\n    <ion-label>\n    <ion-icon style=\"color: #74cb37;font-size: 25px;\"  ios=\"ios-heart\" md=\"md-heart\"></ion-icon>\n    <ion-icon style=\"color: #74cb37;font-size: 25px;\"  ios=\"ios-heart\" md=\"md-heart\"></ion-icon>\n    <ion-icon style=\"color: #74cb37;font-size: 25px;\"  ios=\"ios-heart\" md=\"md-heart\"></ion-icon>\n    </ion-label>\n      <ion-radio (ionSelect)=\"close()\" value=\"3\"></ion-radio>\n    </ion-item>\n    </div>\n  </ion-list>\n    "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], levelPopoverPage);

//# sourceMappingURL=levelpopover.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_requestor__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_input_validator__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__walkthrough_walkthrough__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};














var LoginPage = (function () {
    function LoginPage(navCtrl, authRequestor, common, iab, events, navParams, modalCtrl, transfer, file, viewCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.authRequestor = authRequestor;
        this.common = common;
        this.iab = iab;
        this.events = events;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.transfer = transfer;
        this.file = file;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.isFirstTime = false;
        this.isPasswordShown = false;
        this.errorType = "";
        this.fileTransfer = this.transfer.create();
        this.loginUser = {
            email: "",
            password: "",
        };
        this.callEvent = events;
    }
    /**
     * If password input type is password, then display password value as plain text. If not, display it as password text
     */
    LoginPage.prototype.onShowPassword = function () {
        if (this.loginUser.password !== "") {
            this.isPasswordShown = !this.isPasswordShown;
        }
    };
    /**
     * Perform login job
     */
    LoginPage.prototype.onSubmitLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var inputValidator;
            return __generator(this, function (_a) {
                this.loading = this.loadingCtrl.create({
                    spinner: __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].DOTS_TYPE,
                    content: __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].REGISTER_LOADING_TEXT
                });
                this.loading.present();
                this.errorType = "";
                inputValidator = new __WEBPACK_IMPORTED_MODULE_3__login_input_validator__["a" /* LoginInputValidator */]();
                if (this.loginUser.email == "" && this.loginUser.password == "") {
                    this.errorType = __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].NWK_CK_001.replace('{0}', __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].EMAIL_ADDRESS + '、' + __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].PASSWORD);
                    this.loading.dismiss();
                    this.showInvalidInputErrorMessage();
                }
                else {
                    if (this.loginUser.email == "") {
                        this.errorType = __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].NWK_CK_001.replace('{0}', __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].EMAIL_ADDRESS);
                        this.loading.dismiss();
                        this.showInvalidInputErrorMessage();
                    }
                    else {
                        if (this.loginUser.password == "") {
                            this.errorType = __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].NWK_CK_001.replace('{0}', __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].PASSWORD);
                            this.loading.dismiss();
                            this.showInvalidInputErrorMessage();
                        }
                        else {
                            if (!inputValidator.isEmailValid(this.loginUser.email)) {
                                this.errorType = __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].NWK_CK_002.replace('{0}', __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].EMAIL_ADDRESS);
                                this.loading.dismiss();
                                this.showInvalidInputErrorMessage();
                            }
                            else if (!inputValidator.isPasswordValid(this.loginUser.password)) {
                                this.errorType = __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].NWK_CK_002.replace('{0}', __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].PASSWORD);
                                this.loading.dismiss();
                                this.showInvalidInputErrorMessage();
                            }
                            else {
                                this.hideInvalidInputErrorMessage();
                                this.requestAuthToServer();
                            }
                        }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Show invalid input error message
     */
    LoginPage.prototype.showInvalidInputErrorMessage = function () {
        var errMsgSpan = document.getElementById(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].ERROR_MEASAGE_ID);
        errMsgSpan.hidden = false;
    };
    /**
    * Hide invalid input error message
    */
    LoginPage.prototype.hideInvalidInputErrorMessage = function () {
        var errMsgSpan = document.getElementById(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].ERROR_MEASAGE_ID);
        errMsgSpan.hidden = true;
    };
    /**
     * request authentication to Server
     */
    LoginPage.prototype.requestAuthToServer = function () {
        var _this = this;
        var loginData = (this.loginUser);
        var loginObserver = this.authRequestor.requestAuth(loginData);
        loginObserver.subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var result, _a, isFirstTime;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.common.saveValueLocalStorage(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].TOKEN_TEXT, data)];
                    case 1:
                        result = _b.sent();
                        if (!result) return [3 /*break*/, 6];
                        this.loading.dismiss();
                        _a = this.common;
                        return [4 /*yield*/, this.common.getToken()];
                    case 2:
                        _a.tokenObj = _b.sent();
                        return [4 /*yield*/, this.common.checkIsFirstTime()];
                    case 3:
                        isFirstTime = _b.sent();
                        if (!isFirstTime) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.proccessDownloadContents()];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                        _b.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); }, function (error) {
            _this.loading.dismiss();
            var mes = JSON.parse(error._body);
            _this.errorType = mes.result;
            _this.showInvalidInputErrorMessage();
        });
    };
    /**
    * Open forget password link
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    LoginPage.prototype.openForgetPassword = function () {
        this.iab.create(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].FORGET_PASSWORD_LINK);
    };
    /**
    * download content
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    LoginPage.prototype.proccessDownloadContents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isShowDialog, resultDownload, countFileError, confirm, loading, contentsList, storageDownloadList, i, directoryFolder, walkthroughPage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isShowDialog = false;
                        resultDownload = false;
                        countFileError = 0;
                        loading = this.loadingCtrl.create({
                            spinner: __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].DOTS_TYPE,
                            content: __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].MEASAGE_WAIT
                        });
                        ;
                        return [4 /*yield*/, this.common.getContents()];
                    case 1:
                        contentsList = _a.sent();
                        if (contentsList == null) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.common.loadValueLocalStorage(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].DOWNLOAD_CONTENT_HISTORY)];
                    case 2:
                        storageDownloadList = _a.sent();
                        if (!(storageDownloadList == null)) return [3 /*break*/, 14];
                        storageDownloadList = [];
                        return [4 /*yield*/, this.common.showModalDialogAsk(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].NWK_CK_063)];
                    case 3:
                        confirm = _a.sent();
                        isShowDialog = true;
                        if (!(confirm != true)) return [3 /*break*/, 4];
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                        loading.dismiss();
                        return [3 /*break*/, 14];
                    case 4:
                        loading.present();
                        i = 0;
                        _a.label = 5;
                    case 5:
                        if (!(i < contentsList.length)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.common.downLoadContents(contentsList[i])];
                    case 6:
                        resultDownload = _a.sent();
                        if (resultDownload) {
                            storageDownloadList.push({ contentId: contentsList[i].Id, updateDate: contentsList[i].Modified, countUpdate: 0 });
                        }
                        else {
                            countFileError = countFileError + 1;
                        }
                        _a.label = 7;
                    case 7:
                        i++;
                        return [3 /*break*/, 5];
                    case 8: return [4 /*yield*/, this.common.saveValueLocalStorage(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].DOWNLOAD_CONTENT_HISTORY, storageDownloadList)];
                    case 9:
                        _a.sent();
                        if (!(isShowDialog == true)) return [3 /*break*/, 14];
                        // Get all content file.
                        this.common.listFile = [];
                        directoryFolder = this.file.dataDirectory + 'contents/';
                        return [4 /*yield*/, this.common.getAllFile(directoryFolder)];
                    case 10:
                        _a.sent();
                        loading.dismiss();
                        if (!(countFileError > 0)) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.common.showModalDialogConfirm(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].NWK_CK_004, false)];
                    case 11:
                        _a.sent();
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                        return [3 /*break*/, 14];
                    case 12: return [4 /*yield*/, this.common.showModalDialogConfirm(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].NWK_CK_064, false)];
                    case 13:
                        _a.sent();
                        walkthroughPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__walkthrough_walkthrough__["a" /* WalkThroughPage */], { isFirstTimeStart: true }, { enableBackdropDismiss: false });
                        walkthroughPage.present();
                        _a.label = 14;
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.callEvent.subscribe(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].CHANGE_TAB_PAGE, function () {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                });
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        this.events.unsubscribe(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].CHANGE_TAB_PAGE);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/pages/login/login.html"*/'\n\n\n\n<ion-content class="main-content" padding>\n\n  <ion-grid class="login-grid-full">\n\n    <ion-row justify-content-center>\n\n      <ion-col col-auto class="center">\n\n        <img class="login-logo" src="assets/logo/login_app_logo.png" />\n\n      </ion-col>\n\n    </ion-row>\n\n    <form #loginForm="ngForm" (ngSubmit)="onSubmitLogin()" autocomplete="on">\n\n      \n\n      <ion-row justify-content-right class="main-padding">\n\n        <ion-col col-7>\n\n          <ion-list inset>\n\n            \n\n            <ion-item class="input-wrapper">\n\n              <ion-label class="title-padding">メールアドレス</ion-label>\n\n              <ion-input id="email" type="email" maxlength="30" placeholder="xxxxxx@example.com" [(ngModel)]="loginUser.email" name="email" class="input-border-email"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item class="input-wrapper">\n\n              <ion-label class="title-padding">パスワード</ion-label>\n\n              <ion-input id="password" type="{{ isPasswordShown ? \'text\' : \'password\' }}" maxlength="30" placeholder="パスワード" [(ngModel)]="loginUser.password" name="password" class="input-border-password"></ion-input>\n\n\n\n              <button style="color:#0095d9" ion-button item-end (click)="onShowPassword(); false" class="button-password">\n\n                {{isPasswordShown ? \'パスワードを隠す\' : \'パスワードを表示\'}}\n\n              </button>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row justify-content-center>\n\n          <ion-col col-auto>\n\n            <div class="hide-show-content-box">\n\n              <span id="error-messenger" class="error-message" hidden>{{errorType}}</span>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n      <ion-row justify-content-center>\n\n        <ion-col col-auto>\n\n          <button id="submit-button" class="submit-button" ion-button block type="submit">ログイン</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </form>\n\n\n\n    <ion-row justify-content-center>\n\n      <ion-col col-auto>\n\n        <a class="normal-a">パスワードを忘れた場合は</a><a style="color:#0095d9" (click)="openForgetPassword()"> こちら</a>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__auth_requestor__["a" /* AuthRequestor */],
        __WEBPACK_IMPORTED_MODULE_7__app_common__["a" /* commonClass */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__["a" /* FileTransfer */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalkThroughPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










/**
 * Generated class for the WalkThroughPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WalkThroughPage = (function () {
    function WalkThroughPage(navCtrl, navParams, viewCtrl, file, common, sanitizer, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.file = file;
        this.common = common;
        this.sanitizer = sanitizer;
        this.events = events;
        this.currentIndex = 0;
        this.minIndex = 0;
        this.maxIndex = 0;
        this.callEvent = events;
        this.indexes = [];
        this.datePipe = new __WEBPACK_IMPORTED_MODULE_6__angular_common__["d" /* DatePipe */]('jp');
        this.isFirstTimeStart = this.navParams.get('isFirstTimeStart');
    }
    /**
     * called when ion view is loaded successfully
     */
    WalkThroughPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.common.writeToBehaviorLog(__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].SCREEN_WALKTHROUGH_CODE, __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].MSG_BEHAVIOR_BLOG)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getAllContensImage()];
                    case 2:
                        _a.sent();
                        // initialize slide buttons
                        this.preBtn = document.getElementById(__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].PRE_BUTTON_ID);
                        this.nextBtn = document.getElementById(__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].NEXT_BUTTON_ID);
                        return [4 /*yield*/, this.slides.lockSwipes(true)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * slide to previous slide
     */
    WalkThroughPage.prototype.onSlidePrevious = function () {
        return __awaiter(this, void 0, void 0, function () {
            var previousIndex;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.slides.lockSwipes(false)];
                    case 1:
                        _a.sent();
                        if (!(this.currentIndex != this.minIndex)) return [3 /*break*/, 3];
                        previousIndex = this.currentIndex - 1;
                        return [4 /*yield*/, this.goToSlide(previousIndex)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.slides.lockSwipes(true)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * slide to next slide
     */
    WalkThroughPage.prototype.onSlideNext = function () {
        return __awaiter(this, void 0, void 0, function () {
            var nextIndex;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.slides.lockSwipes(false)];
                    case 1:
                        _a.sent();
                        if (!(this.currentIndex != this.maxIndex)) return [3 /*break*/, 3];
                        nextIndex = this.currentIndex + 1;
                        return [4 /*yield*/, this.goToSlide(nextIndex)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.slides.lockSwipes(true)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * slide to the slide by specified index
     * @param index : index of target slide
     */
    WalkThroughPage.prototype.goToSlide = function (index) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.slides.slideTo(index, 100)];
                    case 1:
                        _a.sent();
                        this.indexes[this.currentIndex].background = __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].TRANSPARENT;
                        this.currentIndex = index;
                        this.indexes[this.currentIndex].background = __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].WHITE;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * dismiss window
     */
    WalkThroughPage.prototype.onDismiss = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isFirstTimeStart) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.viewCtrl.dismiss()];
                    case 1:
                        _a.sent();
                        this.callEvent.publish(__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].CHANGE_TAB_PAGE);
                        return [3 /*break*/, 3];
                    case 2:
                        this.viewCtrl.dismiss();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
    * get content image
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    WalkThroughPage.prototype.getAllContensImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var param, i, filePath, fullFilePath, image;
            return __generator(this, function (_a) {
                param = this.datePipe.transform(Date.now(), 'hhmmss');
                for (i = 0; i < this.common.listFile.length; i++) {
                    filePath = this.common.listFile[i].fullPath;
                    if (filePath.indexOf('/tuto/images/') != -1) {
                        fullFilePath = this.file.dataDirectory.slice(0, -1) + filePath;
                        fullFilePath = fullFilePath.substr(7, fullFilePath.length) + '?' + param;
                        image = {
                            link: this.sanitizer.bypassSecurityTrustResourceUrl(fullFilePath),
                            background: __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].TRANSPARENT
                        };
                        this.indexes.push(image);
                    }
                }
                this.indexes[0].background = __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].WHITE;
                this.maxIndex = this.indexes.length - 1;
                this.currentIndex = 0;
                return [2 /*return*/, true];
            });
        });
    };
    return WalkThroughPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
], WalkThroughPage.prototype, "slides", void 0);
WalkThroughPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'walkthrough-page',template:/*ion-inline-start:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/pages/walkthrough/walkthrough.html"*/'<ion-content>\n\n  <div class="top-div">\n\n    <div class="right" (click)="onDismiss()">\n\n      <p class="close-label">閉じる</p>\n\n      <img class="close-icon" src="assets/image/ic_close.png" />\n\n    </div>\n\n  </div>\n\n\n\n  <ion-slides (ionSlideDidChange)="onSlideChanged()">\n\n    <ion-slide *ngFor="let item of indexes; let i = index;">\n\n      <img [src]="item.link" />\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n\n\n  <ion-item class="slide-btn-wrapper" no-lines>\n\n\n\n    <img id="pre-btn" class="pre-btn" src="assets/image/ic_left.png" (click)="onSlidePrevious()" *ngIf="currentIndex != minIndex">\n\n\n\n    <img id="next-btn" class="next-btn" src="assets/image/ic_right.png" (click)="onSlideNext()" *ngIf="currentIndex != maxIndex">\n\n\n\n  </ion-item>\n\n\n\n\n\n  <ion-grid>\n\n    <ion-row justify-content-center>\n\n      <ion-col col-auto *ngFor="let item of indexes; let i = index;">\n\n        <div [style.background-color]=\'item.background\' id="circle {{i}}" class="circle"></div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/pages/walkthrough/walkthrough.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_3__app_common__["a" /* commonClass */],
        __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
], WalkThroughPage);

//# sourceMappingURL=walkthrough.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayingContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var PlayingContentPage = (function () {
    function PlayingContentPage(navCtrl, navParams, http, common, sanitizer, file) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.common = common;
        this.sanitizer = sanitizer;
        this.file = file;
        this.disableButtonNext = false;
        this.tokenObj = this.common.tokenObj;
        this.contentId = navParams.get('contentId');
        this.contenCode = navParams.get('contenCode');
        this.contenName = navParams.get('contenName');
        this.categoryId = navParams.get('categoryId');
        this.listContents = navParams.get('listContents');
        this.arrayPeople = navParams.get('arrayPlayer');
        this.datePipe = new __WEBPACK_IMPORTED_MODULE_7__angular_common__["d" /* DatePipe */]('jp');
    }
    PlayingContentPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var url, param, param2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('ionViewDidLoad PlayingContentPage');
                        this.common.writeToBehaviorLog(__WEBPACK_IMPORTED_MODULE_3__app_constant__["a" /* constant */].SCREEN_PLAYING_CONTENT_CODE, __WEBPACK_IMPORTED_MODULE_3__app_constant__["a" /* constant */].MSG_BEHAVIOR_BLOG);
                        return [4 /*yield*/, this.common.getContentFile(this.contenCode, 'main/main.html')];
                    case 1:
                        url = _a.sent();
                        if (url) {
                            param = this.generateEncodedUrl();
                            param2 = this.datePipe.transform(Date.now(), 'hhmmss');
                            url = url + '?' + String(param) + '&currentTime=' + param2;
                            this.urlContent = this.sanitizer.bypassSecurityTrustResourceUrl(String(url));
                        }
                        else {
                            this.urlContent = url;
                        }
                        if (this.listContents) {
                            this.currentIndex = this.common.findWithAttr(this.listContents, 'Id', this.contentId);
                            if (this.currentIndex == (this.listContents.length - 1)) {
                                this.disableButtonNext = true;
                            }
                        }
                        else {
                            this.disableButtonNext = true;
                        }
                        // handle event back button to chat mode screen
                        this.navBar.backButtonClick = function (e) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.updateHistories()];
                                    case 1:
                                        _a.sent();
                                        this.navCtrl.pop();
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
    * go to next page
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    PlayingContentPage.prototype.nextPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, param, param2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateHistories()];
                    case 1:
                        _a.sent();
                        if (!(this.currentIndex < (this.listContents.length - 1))) return [3 /*break*/, 3];
                        this.currentIndex = this.currentIndex + 1;
                        return [4 /*yield*/, this.common.getContentFile(this.listContents[this.currentIndex].ContentCode, 'main/main.html')];
                    case 2:
                        url = _a.sent();
                        if (url) {
                            this.contenCode = this.listContents[this.currentIndex].ContentCode;
                            this.contentId = this.listContents[this.currentIndex].Id;
                            this.categoryId = this.listContents[this.currentIndex].CategoryId;
                            param = this.generateEncodedUrl();
                            param2 = this.datePipe.transform(Date.now(), 'hhmmss');
                            url = url + '?' + String(param) + '&currentTime=' + param2;
                            ;
                            this.urlContent = this.sanitizer.bypassSecurityTrustResourceUrl(String(url));
                            this.contenName = this.listContents[this.currentIndex].ContentName;
                        }
                        else {
                            this.urlContent = url;
                        }
                        _a.label = 3;
                    case 3:
                        if (this.currentIndex == (this.listContents.length - 1)) {
                            this.disableButtonNext = true;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
    * update history
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    PlayingContentPage.prototype.updateHistories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var arrayScore, resultElement, _i, arrayScore_1, result, currenContencode, currentUserID, currentScore, currentTime, transferResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resultElement = document.getElementsByTagName('iframe')[1].contentDocument.getElementById('result');
                        if (!resultElement) return [3 /*break*/, 4];
                        arrayScore = resultElement.getElementsByTagName('input');
                        if (!(arrayScore.length > 0)) return [3 /*break*/, 4];
                        _i = 0, arrayScore_1 = arrayScore;
                        _a.label = 1;
                    case 1:
                        if (!(_i < arrayScore_1.length)) return [3 /*break*/, 4];
                        result = arrayScore_1[_i];
                        currenContencode = result.getAttribute('contentcode');
                        currentUserID = result.getAttribute('userid');
                        currentScore = result.getAttribute('score');
                        currentTime = result.getAttribute('time');
                        transferResult = {
                            ContentCode: currenContencode,
                            UserId: currentUserID,
                            Score: currentScore,
                            Time: currentTime,
                        };
                        return [4 /*yield*/, this.commitHistoriesApi(transferResult)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
    * commit update history
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    PlayingContentPage.prototype.commitHistoriesApi = function (result) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = {
                            ContentId: this.contentId,
                            ContentCode: result.ContentCode,
                            ContentName: this.contenName,
                            StaffId: this.tokenObj.userObject.Id,
                            UserId: result.UserId,
                            CategoryId: this.categoryId,
                            Score: result.Score,
                            Time: result.Time
                        };
                        return [4 /*yield*/, this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_constant__["a" /* constant */].API_HISTORIES, JSON.stringify(data), this.tokenObj.options).toPromise().catch(function (err) {
                                console.log(err);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
    * generate encode url
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    PlayingContentPage.prototype.generateEncodedUrl = function () {
        var userid01, userid02, userid03, userid04, userid05, userid06;
        var username01, username02, username03, username04, username05, username06;
        for (var _i = 0, _a = this.arrayPeople; _i < _a.length; _i++) {
            var people = _a[_i];
            switch (people.pos) {
                case 1:
                    userid01 = (people.id) ? people.id : -1;
                    username01 = (people.name) ? people.name : '';
                    break;
                case 2:
                    userid02 = (people.id) ? people.id : -1;
                    username02 = (people.name) ? people.name : '';
                    break;
                case 3:
                    userid03 = (people.id) ? people.id : -1;
                    username03 = (people.name) ? people.name : '';
                    break;
                case 4:
                    userid04 = (people.id) ? people.id : -1;
                    username04 = (people.name) ? people.name : '';
                    break;
                case 5:
                    userid05 = (people.id) ? people.id : -1;
                    username05 = (people.name) ? people.name : '';
                    break;
                case 6:
                    userid06 = (people.id) ? people.id : -1;
                    username06 = (people.name) ? people.name : '';
                    break;
            }
        }
        var paramsUrl = "XX0000=" + this.contenCode +
            ("&userid01=" + userid01 + "&username01=" + username01) +
            ("&userid02=" + userid02 + "&username02=" + username02) +
            ("&userid03=" + userid03 + "&username03=" + username03) +
            ("&userid04=" + userid04 + "&username04=" + username04) +
            ("&userid05=" + userid05 + "&username05=" + username05) +
            ("&userid06=" + userid06 + "&username06=" + username06);
        return encodeURI(paramsUrl);
    };
    return PlayingContentPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Navbar */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Navbar */])
], PlayingContentPage.prototype, "navBar", void 0);
PlayingContentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-playing-content',template:/*ion-inline-start:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/pages/playing-content/playing-content.html"*/'<!--\n  Generated template for the PlayingContentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title style="color: #505050">{{contenName}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="nextPage()" [disabled]="disableButtonNext">\n        <p style="color: #505050">つぎへ</p>\n        <ion-icon style="color: #505050" name="ios-arrow-forward-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding no-bounce>\n  <iframe class=\'contents\' *ngIf="urlContent" [src]="urlContent">\n  </iframe>\n</ion-content>\n\n<ion-footer>\n</ion-footer>'/*ion-inline-end:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/pages/playing-content/playing-content.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_4__app_common__["a" /* commonClass */],
        __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */]])
], PlayingContentPage);

//# sourceMappingURL=playing-content.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoAhPlayingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var NoAhPlayingPage = (function () {
    function NoAhPlayingPage(navCtrl, navParams, http, common, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.common = common;
        this.sanitizer = sanitizer;
        this.user = navParams.get('user');
        this.tokenObj = this.common.tokenObj;
        this.datePipe = new __WEBPACK_IMPORTED_MODULE_6__angular_common__["d" /* DatePipe */]('jp');
    }
    /**
    * generate encode url
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    NoAhPlayingPage.prototype.generateEncodedUrl = function () {
        var paramsUrl = "XX0000=NO0001\n                     &userid01=" + this.user.Id + "&username01=" + this.user.UserName + "\n                     &userid02=-1&username02=\n                     &userid03=-1&username03=\n                     &userid04=-1&username04=\n                     &userid05=-1&username05=\n                     &userid06=-1&username06=";
        return encodeURI(paramsUrl);
    };
    NoAhPlayingPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var url, param, param2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.common.writeToBehaviorLog(__WEBPACK_IMPORTED_MODULE_3__app_constant__["a" /* constant */].SCREEN_NOAH_CODE, __WEBPACK_IMPORTED_MODULE_3__app_constant__["a" /* constant */].MSG_BEHAVIOR_BLOG)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.common.getContentFile('NO0001', 'main/main.html')];
                    case 2:
                        url = _a.sent();
                        if (url) {
                            param = this.generateEncodedUrl();
                            param2 = this.datePipe.transform(Date.now(), 'hhmmss');
                            url = url + '?' + String(param) + '&currentTime=' + param2;
                            this.urlContent = this.sanitizer.bypassSecurityTrustResourceUrl(String(url));
                        }
                        else {
                            this.urlContent = url;
                        }
                        // handle event back button to chat mode screen
                        this.navBar.backButtonClick = function (e) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                this.navCtrl.pop();
                                return [2 /*return*/];
                            });
                        }); };
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
    * commit NoAH history
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    NoAhPlayingPage.prototype.commitNoAhHistories = function (result) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = {
                            ContentCode: 'NO0001',
                            StaffId: this.tokenObj.userObject.Id,
                            UserId: result.UserId,
                            Score00: result.Score00,
                            Score01: result.Score00,
                            Score02: result.Score00,
                            Score03: result.Score00,
                            Score04: result.Score00,
                            Score05: result.Score00,
                            Score06: result.Score00,
                            Score07: result.Score00,
                            Score08: result.Score00,
                            Score09: result.Score00,
                            Score10: result.Score00,
                            Score11: result.Score00,
                            Score12: result.Score00,
                            Score13: result.Score00,
                            Scorex01: result.Scorex01,
                            Scorex02: result.Scorex02,
                            Scorex03: result.Scorex03,
                            Scorex04: result.Scorex04,
                            Scorex05: result.Scorex05,
                            Scorex06: result.Scorex06,
                            Scorex07: result.Scorex07,
                            Time: result.Time,
                            Type: 1
                        };
                        return [4 /*yield*/, this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_constant__["a" /* constant */].API_NOAHHISTORIES, JSON.stringify(data), this.tokenObj.options).toPromise().catch(function (err) {
                                console.log(err);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return NoAhPlayingPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Navbar */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Navbar */])
], NoAhPlayingPage.prototype, "navBar", void 0);
NoAhPlayingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-no-ah-playing',template:/*ion-inline-start:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/pages/no-ah-playing/no-ah-playing.html"*/'<ion-header style="background-color: #0095D9">\n  <ion-navbar transparent>\n    <ion-title>\n      脳若チャレンジ\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding no-bounce>\n  <iframe class=\'contents\' *ngIf="urlContent" [src]="urlContent">\n  </iframe>\n</ion-content>\n<ion-footer style="background-color: #e8e8e8">\n</ion-footer>'/*ion-inline-end:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/pages/no-ah-playing/no-ah-playing.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_4__app_common__["a" /* commonClass */],
        __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */]])
], NoAhPlayingPage);

//# sourceMappingURL=no-ah-playing.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_specify_period_popover_specify_period_popover__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Updating_User_Updating_User__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contents_commentary_contents_commentary__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_detail_pop_up_detail_pop_up__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};














/**
 * Generated class for the UserDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserDetailPage = (function () {
    function UserDetailPage(navCtrl, datePipe, file, navParams, events, modalCtrl, alertController, http, popoverCtrl, sanitizer, common, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.datePipe = datePipe;
        this.file = file;
        this.navParams = navParams;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.http = http;
        this.popoverCtrl = popoverCtrl;
        this.sanitizer = sanitizer;
        this.common = common;
        this.loadingCtrl = loadingCtrl;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["JwtHelper"]();
        this.endDate = new Date();
        this.startDate = new Date(new Date().setDate(this.endDate.getDate() - 30));
        this.eventname = "loadAllNotices";
        this.userObject = this.common.tokenObj;
        this.arrayOfText = [1, 2, 3];
        this.labelText = __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].LABEL_TEXT;
        this.idItem = navParams.get("idItem");
        this.events.subscribe(String(this.eventname), function (newStartDate, newEndDate) {
            _this.endDate = newEndDate;
            _this.startDate = newStartDate;
            _this.updateDetail();
        });
    }
    /**
    * update user detail
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    UserDetailPage.prototype.updateDetail = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getHistories()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getNOAHHistories()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.getThumbnailImage()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.mergeHistoriesNOAHHistories()];
                    case 4:
                        _a.sent();
                        this.arraySearch = this.arrayHitories;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
    * open pdf report screen
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    UserDetailPage.prototype.openFilters = function () {
        this.common.writeToBehaviorLog(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].SCREEN_PDF_REPORT_CODE, __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].MSG_BEHAVIOR_BLOG);
        var alert = this.alertController.create({
            subTitle: __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].MSG_PDF_REPORT,
            buttons: [__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].BUTTON_OK]
        });
        alert.present();
    };
    UserDetailPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, item, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.common.writeToBehaviorLog(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].SCREEN_USER_DETAIL_CODE, __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].MSG_BEHAVIOR_BLOG);
                        loading = this.loadingCtrl.create({
                            spinner: __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].DOTS_TYPE,
                            content: __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].REGISTER_LOADING_TEXT
                        });
                        loading.present();
                        return [4 /*yield*/, this.getUserInfo(this.idItem)];
                    case 1:
                        _a.sent();
                        if (!this.UserInfo) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.getFacilities(this.UserInfo.AgreementId)];
                    case 2:
                        _a.sent();
                        if (this.arrayFacilities) {
                            item = this.arrayFacilities.filter(function (a) { return a.Id == _this.UserInfo.FacilityId; });
                            this.UserInfo.Facility = item[0];
                        }
                        else
                            this.UserInfo.Facility = {};
                        return [4 /*yield*/, this.getStaff(this.UserInfo.AgreementId)];
                    case 3:
                        _a.sent();
                        if (this.arrayStaff) {
                            item = this.arrayStaff.filter(function (a) { return a.Id == _this.UserInfo.StaffId; });
                            this.UserInfo.Staff = item[0];
                        }
                        else
                            this.UserInfo.Staff = {};
                        this.UserInfo.Age = this.common.calculateAge(new Date(this.UserInfo.Birthday));
                        this.UserInfo.BirthdayJP = this.common.convertToJpDate(this.UserInfo.Birthday);
                        _a.label = 4;
                    case 4: return [4 /*yield*/, this.getHistories()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.getNOAHHistories()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.getThumbnailImage()];
                    case 7:
                        _a.sent();
                        this.mergeHistoriesNOAHHistories();
                        this.arraySearch = this.arrayHitories;
                        loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserDetailPage.prototype.ionViewWillUnload = function () {
        this.popover && this.popover.dismiss();
    };
    /**
    * show specifying period
    *    param:
    *      -ev:event
    *    return:
    *      -N/A
    */
    UserDetailPage.prototype.showSpecifyingPeriod = function (ev) {
        this.common.writeToBehaviorLog(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].SCREEN_SPECIFYING_DETAIL_CODE, __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].MSG_BEHAVIOR_BLOG);
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_specify_period_popover_specify_period_popover__["a" /* SpecifyPeriodPopoverComponent */], { startDate: this.startDate, endDate: this.endDate, eventName: this.eventname });
        this.popover.present({ ev: ev });
    };
    /**
    * search function
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    UserDetailPage.prototype.searchTap = function () {
        var val = this.searchWord;
        // delete white space and filter
        if (val && val.trim() != '') {
            console.log(1);
            // return to lower case string
            this.arrayHitories = this.arraySearch.filter(function (item) {
                if (item.ContentName.toLowerCase().indexOf(val.toLowerCase()) > -1
                    || item.CategoryName.toLowerCase().indexOf(val.toLowerCase()) > -1)
                    return item;
            });
        }
        else {
            console.log(2);
            this.arrayHitories = this.arraySearch;
        }
        this.mergeHistoriesNOAHHistories();
    };
    /**
    * search function
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    UserDetailPage.prototype.getItems = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var val;
            return __generator(this, function (_a) {
                val = ev.target.value;
                // delete white space and filter
                if (val && val.trim() != '') {
                    // return to lower case string
                    this.arrayHitories = this.arraySearch.filter(function (item) {
                        if (item.ContentName.toLowerCase().indexOf(val.toLowerCase()) > -1
                            || item.CategoryName.toLowerCase().indexOf(val.toLowerCase()) > -1)
                            return item;
                    });
                }
                else {
                    this.arrayHitories = this.arraySearch;
                }
                this.mergeHistoriesNOAHHistories();
                return [2 /*return*/];
            });
        });
    };
    /**
    * merge history with noAH History array
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    UserDetailPage.prototype.mergeHistoriesNOAHHistories = function () {
        var _this = this;
        this.arrayMerge = [];
        var arrtemp = [];
        if (this.arrayHitories) {
            this.arrayHitories.forEach(function (element) {
                element.is = 'his';
                arrtemp.push(element);
            });
        }
        if (this.arrayNOAHHistories) {
            this.arrayNOAHHistories.forEach(function (element) {
                element.is = 'noah';
                arrtemp.push(element);
            });
        }
        this.datePipe;
        arrtemp.forEach(function (e) {
            var date = new Date(e.Modified);
            e.Date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
            e.Date = _this.datePipe.transform(e.Date, __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].FORMAT_DATE);
        });
        var arrtemp2 = this.unique(arrtemp);
        arrtemp2.forEach(function (e) {
            var item = {
                'date': _this.common.formatDate2Jp(e, false),
                'historiesdata': [],
                'NOAHdata': []
            };
            var arrtemp3 = arrtemp.filter(function (a) { return a.Date == e; });
            arrtemp3.forEach(function (element) {
                if (element.is == 'his') {
                    if (_this.UserInfo.ChallengeScore == -1 && _this.UserInfo.TraningScore == -1) {
                        element.Score = "-";
                    }
                    item.historiesdata.push(element);
                }
                else
                    item.NOAHdata.push(element);
            });
            _this.arrayMerge.push(item);
        });
    };
    /**
    * get facilities combobox
    *    param:
    *      -AgreementId: string
    *    return:
    *      -N/A
    */
    UserDetailPage.prototype.getFacilities = function (AgreementId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].API_FACILITIES_GET + "?AgreementId=" + AgreementId, this.userObject.options)
                            .toPromise().catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: 
                                    // if error show meseage       
                                    return [4 /*yield*/, this.common.showModalDialogConfirm(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].NWK_CK_065, false)];
                                    case 1:
                                        // if error show meseage       
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.arrayFacilities = data.json().items;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
    * get staff combobox
    *    param:
    *      -AgreementId: string
    *    return:
    *      -N/A
    */
    UserDetailPage.prototype.getStaff = function (AgreementId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].API_STAFFS_GET + "?AgreementId=" + AgreementId, this.userObject.options)
                            .toPromise().catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: 
                                    // if error show meseage       
                                    return [4 /*yield*/, this.common.showModalDialogConfirm(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].NWK_CK_065, false)];
                                    case 1:
                                        // if error show meseage       
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.arrayStaff = data.json().items;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
    * get history
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    UserDetailPage.prototype.getHistories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].API_HISTORIES + "?userId=" + this.idItem + "&startDate=" + this.common.formatDate(this.startDate) + "&endDate=" + this.common.formatDate(this.endDate), this.userObject.options)
                            .toPromise().catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: 
                                    // if error show meseage       
                                    return [4 /*yield*/, this.common.showModalDialogConfirm(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].NWK_CK_065, false)];
                                    case 1:
                                        // if error show meseage       
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.arrayHitories = data.json().items;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
    * get NoAH history
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    UserDetailPage.prototype.getNOAHHistories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].API_NOAHHISTORIES + "?userId=" + this.idItem + "&startDate=" + this.common.formatDate(this.startDate) + "&endDate=" + this.common.formatDate(this.endDate), this.userObject.options)
                            .toPromise().catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: 
                                    // if error show meseage       
                                    return [4 /*yield*/, this.common.showModalDialogConfirm(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].NWK_CK_065, false)];
                                    case 1:
                                        // if error show meseage       
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.arrayNOAHHistories = data.json().items;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
    * get User info
    *    param:
    *      -id: string
    *    return:
    *      -N/A
    */
    UserDetailPage.prototype.getUserInfo = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var AgreementId, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        AgreementId = this.userObject.userObject.AgreementId;
                        return [4 /*yield*/, this.http.get(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].API_GET_USER + "?userId=" + this.idItem + "&AgreementId=" + AgreementId, this.userObject.options)
                                .toPromise().catch(function (err) {
                                console.log(err);
                            })];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.UserInfo = data.json().items[0];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UserDetailPage.prototype.idChange = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.changeId;
                        switch (_a) {
                            case 'id1': return [3 /*break*/, 1];
                            case 'id2': return [3 /*break*/, 5];
                            case 'id3': return [3 /*break*/, 8];
                        }
                        return [3 /*break*/, 10];
                    case 1: return [4 /*yield*/, this.getHistories()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.getNOAHHistories()];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.getThumbnailImage()];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 5: return [4 /*yield*/, this.getHistories()];
                    case 6:
                        _b.sent();
                        this.arrayNOAHHistories = null;
                        return [4 /*yield*/, this.getThumbnailImage()];
                    case 7:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 8:
                        this.arrayHitories = null;
                        return [4 /*yield*/, this.getNOAHHistories()];
                    case 9:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 10:
                        this.mergeHistoriesNOAHHistories();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserDetailPage.prototype.openUpdatingUserForm = function () {
        var _this = this;
        this.common.writeToBehaviorLog(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].SCREEN_UPDATE_USER_CODE, __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].MSG_BEHAVIOR_BLOG);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_Updating_User_Updating_User__["a" /* UpdatingUserComponent */], { user: this.UserInfo }, { enableBackdropDismiss: false });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data == '1') {
                _this.navCtrl.pop();
            }
        });
    };
    /**
    * delete user
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    UserDetailPage.prototype.deleteUser = function () {
        var _this = this;
        this.common.writeToBehaviorLog(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].SCREEN_DELETE_USER_DETAIL_CODE, __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].MSG_BEHAVIOR_BLOG);
        var alert = this.alertController.create({
            subTitle: __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].NWK_CK_067,
            buttons: [
                __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].MSSG_TEXT,
                {
                    text: __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].CLOSE_TEXT,
                    handler: function () {
                        _this.confirmDeletingUser();
                    }
                }
            ]
        });
        alert.present();
    };
    /**
    * confrim delete user
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    UserDetailPage.prototype.confirmDeletingUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.userObject.options.body = this.idItem;
                this.http.delete(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].API_DELETE_USER, this.userObject.options)
                    .subscribe(function (response) {
                    _this.navCtrl.pop();
                    _this.events.publish(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].BACK_TO_USER_LIST);
                }, function (error) {
                    var alert = _this.alertController.create({
                        subTitle: __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].NWK_CK_066,
                        buttons: [__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].BUTTON_OK]
                    });
                    alert.present();
                });
                return [2 /*return*/];
            });
        });
    };
    /**
    * go to content commentary
    *    param:
    *      -item: object
    *    return:
    *      -N/A
    */
    UserDetailPage.prototype.goTocontentsCommentaryPage = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__contents_commentary_contents_commentary__["a" /* ContentsCommentaryPage */], {
            idItem: item
        });
    };
    /**
    * check unique item
    *    param:
    *      -item: object
    *    return:
    *      -N/A
    */
    UserDetailPage.prototype.unique = function (items) {
        var arr = [];
        for (var i = 0; i < items.length; i++) {
            if (arr.indexOf(items[i].Date) < 0) {
                arr.push(items[i].Date);
            }
        }
        return arr;
    };
    /**
    * show level pop up
    *    param:
    *      -event: event
    *    return:
    *      -N/A
    */
    UserDetailPage.prototype.levelPopover = function (event) {
        var _this = this;
        this.common.writeToBehaviorLog(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].SCREEN_COMBOBOX_DETAIL_CODE, __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].MSG_BEHAVIOR_BLOG);
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_10__components_detail_pop_up_detail_pop_up__["a" /* DetailPopUpComponent */], { level: this.changeId });
        this.popover.present({
            ev: event
        });
        this.popover.onDidDismiss(function (data) {
            if (data) {
                _this.changeId = data;
                if (data == "id1") {
                    _this.labelText = __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].LABEL_LEVEL_ID1;
                }
                else if (data == "id2") {
                    _this.labelText = __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].LABEL_LEVEL_ID2;
                }
                else {
                    _this.labelText = __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].LABEL_LEVEL_ID3;
                }
                _this.idChange();
            }
        });
    };
    /**
    * get thumbnail image
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    UserDetailPage.prototype.getThumbnailImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var param;
            return __generator(this, function (_a) {
                param = this.datePipe.transform(Date.now(), 'hhmmss');
                this.arrayHitories.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                    var i, filePath, filename, extension, fullFilePath;
                    return __generator(this, function (_a) {
                        for (i = 0; i < this.common.listFile.length; i++) {
                            filePath = this.common.listFile[i].fullPath;
                            filename = filePath.split('/').pop();
                            extension = filename.split('.').pop();
                            if (extension == __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].PNG_EXTENSION) {
                                if (filePath.indexOf(element.ContentCode + '/' + element.ContentCode + '/' + filename) != -1) {
                                    fullFilePath = this.file.dataDirectory.slice(0, -1) + filePath;
                                    fullFilePath = fullFilePath.substr(7, fullFilePath.length);
                                    fullFilePath = fullFilePath + '?currentTime=' + param;
                                    element.url = this.sanitizer.bypassSecurityTrustResourceUrl(fullFilePath);
                                    break;
                                }
                            }
                        }
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    return UserDetailPage;
}());
UserDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-user-detail',template:/*ion-inline-start:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/pages/user-detail/user-detail.html"*/'<!--\n\nGenerated template for the UserDetailPage page.\n\n\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\n\nIonic pages and navigation.\n\n-->\n\n<ion-header style="background-color: #89BA2A">\n\n  <ion-navbar transparent>\n\n    <ion-row class="row-header">\n\n      <ion-col col-10 offset-2>\n\n        <ion-row class="full-row-size">\n\n          <!--Calendar-->\n\n          <ion-col col-4 align-self-center>\n\n            <ion-item class="custom-item">\n\n              <button ion-button icon-end class="calendar-button" (click)="showSpecifyingPeriod($event)">\n\n                {{startDate|date:\'yyyy/MM/dd\'}} <br>～ {{endDate|date:\'yyyy/MM/dd\'}}\n\n                <ion-icon name="md-calendar"></ion-icon>\n\n              </button>\n\n            </ion-item>\n\n          </ion-col>\n\n          <!--Drop box-->\n\n           <ion-col col-4 align-self-center> \n\n            <ion-item class="custom-item">\n\n              <div class="level-parent combobox" (tap)="levelPopover($event)">\n\n                      <div>\n\n                          <span class="calendar-button" style="color:white;">{{labelText}}</span><span class="cached-arrow"></span>\n\n                      </div>\n\n                      <div>\n\n                          <div class="level-select-icon"></div>\n\n                      </div>\n\n                  </div>\n\n          </ion-item>\n\n          \n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <ion-toolbar>\n\n              <ion-input placeholder="検索" [(ngModel)]="searchWord" class="item-search-menu-center" (ionInput)="getItems($event)"> </ion-input>\n\n              <ion-buttons right>\n\n                <button class="no-padding" ion-button icon-only (click)="searchTap()">\n\n                    <ion-icon name="search" ></ion-icon>\n\n                </button>\n\n              </ion-buttons>\n\n          </ion-toolbar>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding no-bounce>\n\n  <ion-row class="full-row-size">\n\n    <!--Avatar + Info-->\n\n    <ion-col col-3>\n\n      <!--Avatar-->\n\n      <ion-row class="avatar-row" align-items-center justify-content-center>\n\n        <div class="circle-avatar">\n\n          <img *ngIf="UserInfo && UserInfo.PhotoURL;else PhotoURL" src="{{UserInfo.PhotoURL}}" />\n\n          <ng-template #PhotoURL><img src="assets/image/icon.png" /></ng-template>\n\n          <img class="avatar-hide">\n\n        </div>\n\n      </ion-row>\n\n      <!--Info-->\n\n      <ion-row class="info-content-row">\n\n        <!--Info: Content-->\n\n        <div class="info-height">\n\n          <div class="user-info">\n\n            <div *ngIf="UserInfo && UserInfo.UserName" class="user-name">{{UserInfo.UserName}}</div>\n\n            <div *ngIf="UserInfo && UserInfo.UserKana" class="user-name-other">({{UserInfo.UserKana}})</div>\n\n          </div>\n\n          <div class="user-other-info">\n\n            <div class="user-other-detail">\n\n              <ion-row align-items-start class="item-row">\n\n                <ion-col>生年月日: <span *ngIf="UserInfo && UserInfo.Birthday;else Birthday">{{UserInfo.BirthdayJP}}</span></ion-col>\n\n                <ng-template #Birthday><span>…</span></ng-template>\n\n              </ion-row>\n\n            </div>\n\n            <div class="user-other-detail">\n\n              <ion-row align-items-start class="item-row">\n\n                <ion-col>年齢・性別：\n\n                  <span *ngIf="UserInfo && UserInfo.Age;else Age">{{UserInfo.Age}}歳</span>\n\n                  <ng-template #Age><span>…</span></ng-template>\n\n                  ・\n\n                  <span *ngIf="UserInfo && UserInfo.Sex;else Sex">\n\n                    <span *ngIf="UserInfo.Sex == 1">男性</span>\n\n                  <span *ngIf="UserInfo.Sex == 2">女性</span>\n\n                  <span *ngIf="UserInfo.Sex == 3">その他</span>\n\n                  </span>\n\n                  <ng-template #Sex><span>…</span></ng-template>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div>\n\n            <div class="user-other-detail">\n\n              <ion-row align-items-start class="item-row">\n\n                <ion-col>所属：\n\n                  <span *ngIf="UserInfo && UserInfo.Facility;else FacilityName">{{UserInfo.Facility.FacilityName}}</span>\n\n                  <ng-template #FacilityName><span>…</span></ng-template>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div>\n\n            <div class="user-other-detail">\n\n              <ion-row align-items-start class="item-row">\n\n                <ion-col>担当：\n\n                  <span *ngIf="UserInfo && UserInfo.Staff;else StaffName">{{UserInfo.Staff.StaffName}}</span>\n\n                  <ng-template #StaffName><span>…</span></ng-template>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div>\n\n            <div class="user-other-detail">\n\n              <ion-row align-items-start class="item-row">\n\n                <ion-col>初回登録日：\n\n                  <span *ngIf="UserInfo && UserInfo.Created;else Created">{{UserInfo.Created|date:\'yyyy/MM/dd\'}}</span>\n\n                  <ng-template #Created><span>…</span></ng-template>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div>\n\n            <div class="user-other-detail">\n\n              <ion-row align-items-start class="item-row">\n\n                <ion-col>情報更録日：\n\n                  <span *ngIf="UserInfo && UserInfo.Modified; else Modified">{{UserInfo.Modified|date:\'yyyy/MM/dd\'}}</span>\n\n                  <ng-template #Modified><span>…</span></ng-template>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div>\n\n            <div class="user-other-detail">\n\n              <ion-row align-items-start class="item-row">\n\n                <ion-col>レベル：\n\n                  <span *ngIf=" UserInfo;else Level ">\n\n                      <span *ngFor="let index of [1,2,3]">\n\n                        <ion-icon *ngIf="(UserInfo.Level == index || UserInfo.Level > index)"  ios="ios-heart" md="md-heart"></ion-icon>\n\n                        <ion-icon *ngIf="UserInfo.Level < index"  ios="ios-heart-outline" md="md-heart-outline"></ion-icon>\n\n                      </span>\n\n                  <ng-template #Level><span>…</span></ng-template>\n\n                  </span>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div>\n\n            <div class="user-other-detail">\n\n              <ion-row align-items-start class="item-row">\n\n                <ion-col>トレーニングスコア：\n\n                  <span *ngIf="UserInfo;else TraningScore">{{UserInfo.TraningScore}}</span>\n\n                  <ng-template #TraningScore><span>…</span></ng-template>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div>\n\n            <div class="user-other-detail">\n\n              <ion-row align-items-start class="item-row">\n\n                <ion-col *ngIf="UserInfo">チャレンジスコア：\n\n                  <span *ngIf="UserInfo;else ChallengeScore">{{UserInfo.ChallengeScore}}</span>\n\n                  <ng-template #ChallengeScore><span>…</span></ng-template>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div>\n\n          </div>\n\n        </div>\n\n        <!--Info: PDF Report-->\n\n        <div class="pdf-height">\n\n          <ion-row justify-content-center>\n\n            <button ion-button small class="pdf-button" full (click)="openFilters()">PDFレポート出力 </button>\n\n          </ion-row>\n\n        </div>\n\n      </ion-row>\n\n    </ion-col>\n\n    <!--Content-->\n\n    <ion-col col-9>\n\n      <ion-content>\n\n        <ion-list>\n\n          <!--Item-->\n\n          <div *ngIf="arrayMerge">\n\n            <ion-item *ngFor="let items of arrayMerge">\n\n              <!--Date-->\n\n              <ion-row class="zero-margin-top">\n\n                <ion-col col-4 offset-4>\n\n                  <ion-title class="date-time-style" style="color: white;">{{items.date}}</ion-title>\n\n                </ion-col>\n\n              </ion-row>\n\n              <!--Type 1-->\n\n              <ion-row *ngFor="let history of items.historiesdata" class="gray-square-bound">\n\n                <ion-col col-9 offset-1 class="gray-square-box">\n\n                  <ion-row class="full-row-size">\n\n                    <!--Avatar-->\n\n                    <ion-col col-3 class="no-padding">\n\n                      <ion-row align-items-center justify-content-center class="full-row-size">\n\n                        <button (click)="goTocontentsCommentaryPage(history)">\n\n                            <img *ngIf="history.url;else nonePhoto"  class="avatar-gray-square" [src]="history.url" />\n\n                            <ng-template #nonePhoto><div class="none-avatar"></div></ng-template>\n\n                      </button>\n\n                      </ion-row>\n\n                    </ion-col>\n\n                    <!--Content-->\n\n                    <ion-col col-7 class="no-padding">\n\n                      <div class="title-item-padding-top" style="color: #2D2D2D">{{history.ContentName}}</div>\n\n                      <div class="title-item-padding-top-after" style="color: #2D2D2D">（{{history.CategoryName}}）</div>\n\n                    </ion-col>\n\n                    <!--Point-->\n\n                    <ion-col col-2 class="no-padding" style="height:100%">\n\n                      <ion-row align-items-center justify-content-center class="full-row-size">\n\n                        <div class="score" *ngIf="history.Score != -1;else Score">{{history.Score}}</div>\n\n                        <ng-template #Score>\n\n                          <div class="score">ー</div>\n\n                        </ng-template>\n\n                      </ion-row>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-col>\n\n                <ion-col col-2 style="height:80%;margin-top: 10px;">\n\n                    <ion-row align-items-end class="full-row-size">\n\n                    <!--Time-->\n\n                      <p align-self-start class="time-style">{{history.Modified | date: \'H:mm\'}}</p>\n\n                  </ion-row>\n\n                </ion-col>\n\n              </ion-row>\n\n\n\n              <!--Type 2-->\n\n              <ion-row *ngFor="let NOAH of items.NOAHdata" class="gray-square-bound">\n\n                <ion-col col-9 offset-1 class="gray-square-box">\n\n                  <ion-row class="full-row-size">\n\n                    <!--Avatar-->\n\n                    <ion-col col-3 class="no-padding">\n\n                      <ion-row align-items-center justify-content-center class="full-row-size">\n\n                        <img src="assets/image/touch.png" class="full-size" />\n\n                      </ion-row>\n\n                    </ion-col>\n\n                    <!--Content-->\n\n                    <ion-col col-7 class="no-padding">\n\n                      <ion-row class="full-row-size">\n\n                        <!--Column 1-->\n\n                        <ion-col col-6 class="no-padding">\n\n                          <ion-row class="full-row-size">\n\n                            <!--Title-->\n\n                            <ion-col col-8 class="no-padding">\n\n                                <p class="type2-title">即時想起</p>\n\n                                <p class="type2-title">末当識</p>\n\n                                <p class="type2-title">知覚</p>\n\n                                <p class="type2-title">前頭葉機能</p>\n\n                            </ion-col>\n\n                            <!--:-->\n\n                            <ion-col col-1 class="no-padding">\n\n                                <p class="type2-title">:</p>\n\n                                <p class="type2-title">:</p>\n\n                                <p class="type2-title">:</p>\n\n                                <p class="type2-title">:</p>\n\n                            </ion-col>\n\n                            <!--Value-->\n\n                            <ion-col col-2 class="no-padding">\n\n                                <p class="type2-value" *ngIf="NOAH.Scorex01 != -1;else Scorex01">{{NOAH.Scorex01}}</p>\n\n                                <ng-template #Scorex01>\n\n                                  <p class="type2-value">ー</p>\n\n                                </ng-template>\n\n                                <p class="type2-value" *ngIf="NOAH.Scorex02 != -1;else Scorex02">{{NOAH.Scorex02}}</p>\n\n                                <ng-template #Scorex02>\n\n                                  <p class="type2-value">ー</p>\n\n                                </ng-template>\n\n                                <p class="type2-value" *ngIf="NOAH.Scorex03 != -1;else Scorex03">{{NOAH.Scorex03}}</p>\n\n                                <ng-template #Scorex03>\n\n                                  <p class="type2-value">ー</p>\n\n                                </ng-template>\n\n                                <p class="type2-value" *ngIf="NOAH.Scorex04 != -1;else Scorex04">{{NOAH.Scorex04}}</p>\n\n                                <ng-template #Scorex04>\n\n                                  <p class="type2-value">ー</p>\n\n                                </ng-template>\n\n                            </ion-col>\n\n                            <!--Cached-->\n\n                          </ion-row>\n\n                        </ion-col>\n\n                        <!--Column 2-->\n\n                        <ion-col col-6 class="no-padding">\n\n                          <ion-row class="full-row-size">\n\n                            <!--Title-->\n\n                            <ion-col col-7 class="no-padding">\n\n                                <p class="type2-title">計算</p>\n\n                                <p class="type2-title">図形把握</p>\n\n                                <p class="type2-title">遅延再生</p>\n\n                            </ion-col>\n\n                            <!--:-->\n\n                            <ion-col col-1 class="no-padding">\n\n                                <p class="type2-title">:</p>\n\n                                <p class="type2-title">:</p>\n\n                                <p class="type2-title">:</p>\n\n                            </ion-col>\n\n                            <!--Value-->\n\n                            <ion-col col-3 class="no-padding">\n\n                                <p class="type2-value" *ngIf="NOAH.Scorex05 != -1;else Scorex05">{{NOAH.Scorex05}}</p>\n\n                                <ng-template #Scorex05>\n\n                                  <p class="type2-value">ー</p>\n\n                                </ng-template>\n\n                                <p class="type2-value" *ngIf="NOAH.Scorex06 != -1;else Scorex06">{{NOAH.Scorex06}}</p>\n\n                                <ng-template #Scorex06>\n\n                                  <p class="type2-value">ー</p>\n\n                                </ng-template>\n\n                                <p class="type2-value" *ngIf="NOAH.Scorex07 != -1;else Scorex07">{{NOAH.Scorex07}}</p>\n\n                                <ng-template #Scorex07>\n\n                                  <p class="type2-value">ー</p>\n\n                                </ng-template>\n\n                            </ion-col>\n\n                            <!--Cached-->\n\n                            <ion-col col-1></ion-col>\n\n                          </ion-row>\n\n                        </ion-col>\n\n                      </ion-row>\n\n                    </ion-col>\n\n                    <!--Point-->\n\n                    <ion-col col-2 class="no-padding" style="height:100%">\n\n                      <ion-row align-items-center justify-content-center class="full-row-size">\n\n                        <div class="score" *ngIf="NOAH.Score00 != -1;else Score00">{{NOAH.Score00}}</div>\n\n                        <ng-template #Score00>\n\n                          <div class="score">ー</div>\n\n                        </ng-template>\n\n                      </ion-row>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-col>\n\n                <ion-col col-2 style="height:80%;margin-top: 10px;">\n\n                    <ion-row align-items-end class="full-row-size">\n\n                        <p align-self-start class="time-style">{{NOAH.Modified | date: \'H:mm\'}}</p>\n\n                      </ion-row>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-item>\n\n          </div>\n\n        </ion-list>\n\n      </ion-content>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n<ion-footer style="background-color: #e8e8e8">\n\n  <ion-toolbar transparent text-right>\n\n    <button ion-button class="footer-button" (click)="openUpdatingUserForm()">ひと更新</button>\n\n    <button ion-button class="footer-button" (click)="deleteUser()">ひと削除</button>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/pages/user-detail/user-detail.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_9__angular_common__["d" /* DatePipe */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_9__angular_common__["d" /* DatePipe */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["c" /* DomSanitizer */],
        __WEBPACK_IMPORTED_MODULE_7__app_common__["a" /* commonClass */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], UserDetailPage);

//# sourceMappingURL=user-detail.js.map

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return constant; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_japanese_calendar_chart__ = __webpack_require__(319);

var constant = (function () {
    function constant() {
    }
    return constant;
}());

constant.JAPANESE_CALENDAR_CHART = __WEBPACK_IMPORTED_MODULE_0__common_japanese_calendar_chart__["a" /* default */];
/**
  * Button name cancel
  * @type {string}
*/
constant.BUTTON_CANCEL = 'キャンセル';
/**
  * Button name OK
  * @type {string}
*/
constant.BUTTON_OK = 'OK';
constant.BUTTON_CANCEL_ENG = 'Cancel';
constant.BUTTON_CANCEL_ROLE = 'cancel';
/**
  * Email address
  * @type {string}
*/
constant.EMAIL_ADDRESS = 'メールアドレス';
/**
  * Password
  * @type {string}
*/
constant.PASSWORD = 'パスワード';
/**
  * API link
  * @type {string}
*/
constant.API_URL = 'http://nouwaka-api01k.azurewebsites.net/api';
/**
  * API link account check
  * @type {string}
*/
constant.API_LOGIN = constant.API_URL + "/login";
/**
  * API link account check
  * @type {string}
*/
constant.API_ACCOUNT_CHECK = constant.API_URL + "/accountcheck";
/**
  * API link behavior blog
  * @type {string}
*/
constant.API_BEHAVIOR_LOG = constant.API_URL + "/behaviorlog";
/**
  * API link get notice
  * @type {string}
*/
constant.API_NOTICES_GET = constant.API_URL + "/notices";
/**
  * API link get content
  * @type {string}
*/
constant.API_CONTENTS_GET = constant.API_URL + "/contents";
/**
  * API link search user
  * @type {string}
*/
constant.API_SEARCHUSER_GET = constant.API_URL + "/searchusers";
/**
  * API link get tag
  * @type {string}
*/
constant.API_TAGS_GET = constant.API_URL + "/tags";
/**
  * API link get series
  * @type {string}
*/
constant.API_SERIES_GET = constant.API_URL + "/series";
/**
  * API link get facilities
  * @type {string}
*/
constant.API_FACILITIES_GET = constant.API_URL + "/facilities";
/**
  * API link get staff
  * @type {string}
*/
constant.API_STAFFS_GET = constant.API_URL + "/staffs";
/**
  * API link register user
  * @type {string}
*/
constant.API_REGISTER_USER = constant.API_URL + "/registusers";
/**
  * API link photo upload
  * @type {string}
*/
constant.API_UPLOAD_USER = constant.API_URL + "/photoupload";
/**
  * API link update user
  * @type {string}
*/
constant.API_UPDATE_USER = constant.API_URL + "/updateusers";
/**
  * API link history
  * @type {string}
*/
constant.API_HISTORIES = constant.API_URL + "/histories";
/**
  * API link noahhistory
  * @type {string}
*/
constant.API_NOAHHISTORIES = constant.API_URL + "/noahhistories";
/**
  * API link delete user
  * @type {string}
*/
constant.API_DELETE_USER = constant.API_URL + "/deleteusers";
/**
  * API link get user
  * @type {string}
*/
constant.API_GET_USER = constant.API_URL + "/users/";
/**
   * Error meseage id NWK_CK_001
   * @type {string}
 */
constant.NWK_CK_001 = '{0}は必須項目です。';
/**
  * Error meseage id NWK_CK_002
  * @type {string}
*/
constant.NWK_CK_002 = '{0}の入力形式が正しくありません。';
/**
  * Error meseage id NWK_CK_003
  * @type {string}
*/
constant.NWK_CK_003 = '該当するメッセージはありません。';
/**
  * Error meseage id NWK_CK_004
  * @type {string}
*/
constant.NWK_CK_004 = 'コンテンツのダウンロードに失敗しました。\nネットワーク環境の良い場所で、アプリを再起動してみて下さい。';
/**
  * Error meseage id NWK_CK_005
  * @type {string}
*/
constant.NWK_CK_005 = '情報の取得に失敗しました。\nネットワーク環境の良い場所で、再度お試しください。';
/**
  * Error meseage id NWK_CK_006
  * @type {string}
*/
constant.NWK_CK_006 = '終了日は開始日より後の日付を設定してください。';
/**
  * Error meseage id NWK_CK_007
  * @type {string}
*/
constant.NWK_CK_007 = '該当するコンテンツはありません。';
/**
  * Error meseage id NWK_CK_008
  * @type {string}
*/
constant.NWK_CK_008 = '利用者情報の取得に失敗しました。\nネットワーク環境の良い場所で再度お試しください。';
/**
  * Error meseage id NWK_CK_009
  * @type {string}
*/
constant.NWK_CK_009 = '該当する利用者は見つかりません。';
/**
  * Error meseage id NWK_CK_010
  * @type {string}
*/
constant.NWK_CK_010 = 'スタッフ情報の取得に失敗しました。\nネットワーク環境の良い場所で再度お試しください。';
/**
  * Error meseage id NWK_CK_011
  * @type {string}
*/
constant.NWK_CK_011 = '該当するスタッフは見つかりません。';
/**
  * Error meseage id NWK_CK_012
  * @type {string}
*/
constant.NWK_CK_012 = '施設情報の取得に失敗しました。\nネットワーク環境の良い場所で再度お試しください。';
/**
 * Error meseage id NWK_CK_013
 * @type {string}
*/
constant.NWK_CK_013 = '写真のアップロードに失敗しました。\nネットワーク環境の良い場所で再度お試しください。';
/**
  * Error meseage id NWK_CK_014
  * @type {string}
*/
constant.NWK_CK_014 = '利用者情報の登録に失敗しました。\nネットワーク環境の良い場所で再度お試しください。';
/**
  * Error meseage id NWK_CK_015
  * @type {string}
*/
constant.NWK_CK_015 = '{0}は全角10文字以内で入力してください。';
/**
 * Error meseage id NWK_CK_016
 * @type {string}
*/
constant.NWK_CK_016 = '{0}は全角15文字以内で入力してください。';
/**
  * Error meseage id NWK_CK_017
  * @type {string}
*/
constant.NWK_CK_017 = '入力中の情報は破棄されます。よろしいですか？';
/**
  * Error meseage id NWK_CK_018
  * @type {string}
*/
constant.NWK_CK_018 = '履歴の取得に失敗しました。\nネットワーク環境の良い場所で再度お試しください。';
/**
  * Error meseage id NWK_CK_019
  * @type {string}
*/
constant.NWK_CK_019 = '利用者情報の削除に失敗しました。\nネットワーク環境の良い場所で再度お試しください。';
/**
  * Error meseage id NWK_CK_020
  * @type {string}
*/
constant.NWK_CK_020 = '入力されたメールアドレスが一致しません。';
/**
  * Error meseage id NWK_CK_021
  * @type {string}
*/
constant.NWK_CK_021 = 'パスワードが短すぎます。\n半角6文字以上で入力してください。';
/**
  * Error meseage id NWK_CK_022
  * @type {string}
*/
constant.NWK_CK_022 = '入力されたパスワードが一致しません。';
/**
  * Error meseage id NWK_CK_023
  * @type {string}
*/
constant.NWK_CK_023 = '入力されたメールアドレスは既に登録済みです。';
/**
  * Error meseage id NWK_CK_024
  * @type {string}
*/
constant.NWK_CK_024 = '{0}は全角30文字以内で入力してください。';
/**
  * Error meseage id NWK_CK_025
  * @type {string}
*/
constant.NWK_CK_025 = '{0}は全角20文字以内で入力してください。';
/**
  * Error meseage id NWK_CK_026
  * @type {string}
*/
constant.NWK_CK_026 = '契約者情報の登録に失敗しました。\nネットワーク環境の良い場所で再度お試しください。';
/**
  * Error meseage id NWK_CK_027
  * @type {string}
*/
constant.NWK_CK_027 = '契約者情報の取得に失敗しました。\nネットワーク環境の良い場所で再度お試しください。';
/**
  * Error meseage id NWK_CK_028
  * @type {string}
*/
constant.NWK_CK_028 = '郵便番号は半角数字7桁で入力してください。';
/**
  * Error meseage id NWK_CK_029
  * @type {string}
*/
constant.NWK_CK_029 = '住所は全角100文字以内で入力してください。';
/**
  * Error meseage id NWK_CK_030
  * @type {string}
*/
constant.NWK_CK_030 = '電話番号は半角12文字以内で入力してください。';
/**
  * Error meseage id NWK_CK_031
  * @type {string}
*/
constant.NWK_CK_031 = '決済情報の登録に失敗しました。\nネットワーク環境の良い場所で再度お試しください。';
/**
  * Error meseage id NWK_CK_032
  * @type {string}
*/
constant.NWK_CK_032 = '契約の解約に失敗しました。\nネットワーク環境の良い場所で再度お試しください。';
/**
  * Error meseage id NWK_CK_033
  * @type {string}
*/
constant.NWK_CK_033 = '施設情報の登録に失敗しました。\nネットワーク環境の良い場所で再度お試しください。';
/**
  * Error meseage id NWK_CK_034
  * @type {string}
*/
constant.NWK_CK_034 = '施設情報の更新に失敗しました。\nネットワーク環境の良い場所で再度お試しください。';
/**
  * Error meseage id NWK_CK_035
  * @type {string}
*/
constant.NWK_CK_035 = '施設情報の削除に失敗しました。\nネットワーク環境の良い場所で再度お試しください。';
/**
  * Error meseage id NWK_CK_036
  * @type {string}
*/
constant.NWK_CK_036 = 'プランを選択してください。';
/**
  * Error meseage id NWK_CK_037
  * @type {string}
*/
constant.NWK_CK_037 = 'カテゴリの取得に失敗しました。\nネットワーク環境の良い場所で再度お試しください。';
/**
  * Error meseage id NWK_CK_038
  * @type {string}
*/
constant.NWK_CK_038 = 'シリーズの取得に失敗しました。\nネットワーク環境の良い場所で再度お試しください。';
/**
  * Error meseage id NWK_CK_039
  * @type {string}
*/
constant.NWK_CK_039 = 'Zipファイルを選択してください。';
/**
  * Error meseage id NWK_CK_040
  * @type {string}
*/
constant.NWK_CK_040 = '{0}は全角15文字以内で入力してください。';
/**
  * Error meseage id NWK_CK_041
  * @type {string}
*/
constant.NWK_CK_041 = 'カテゴリの登録に失敗しました。\nネットワーク環境の良い場所で再度お試しください。';
/**
  * Error meseage id NWK_CK_042
  * @type {string}
*/
constant.NWK_CK_042 = 'カテゴリの更新に失敗しました。\nネットワーク環境の良い場所で再度お試しください。';
/**
  * Error meseage id NWK_CK_043
  * @type {string}
*/
constant.NWK_CK_043 = 'カテゴリの削除に失敗しました。\nネットワーク環境の良い場所で再度お試しください。';
/**
  * Error meseage id NWK_CK_044
  * @type {string}
*/
constant.NWK_CK_044 = '該当する履歴は見つかりません。';
/**
  * Error meseage id NWK_CK_045
  * @type {string}
*/
constant.NWK_CK_045 = 'お知らせ情報取得に失敗しました。\nネットワーク環境の良い場所で再度お試しください。';
/**
  * Error meseage id NWK_CK_046
  * @type {string}
*/
constant.NWK_CK_046 = '契約者情報の更新に失敗しました。\nネットワーク環境の良い場所で再度お試しください。';
/**
  * Error meseage id NWK_CK_047
  * @type {string}
*/
constant.NWK_CK_047 = 'スタッフ情報の登録に失敗しました。\nネットワーク環境の良い場所で再度お試しください。';
/**
  * Error meseage id NWK_CK_048
  * @type {string}
*/
constant.NWK_CK_048 = 'スタッフ情報の更新に失敗しました。\nネットワーク環境の良い場所で再度お試しください。';
/**
  * Error meseage id NWK_CK_049
  * @type {string}
*/
constant.NWK_CK_049 = 'スタッフ情報の削除に失敗しました。\nネットワーク環境の良い場所で再度お試しください。';
/**
  * Error meseage id NWK_CK_050
  * @type {string}
*/
constant.NWK_CK_050 = '支払ステータスを選択してください。';
/**
  * Error meseage id NWK_CK_051
  * @type {string}
*/
constant.NWK_CK_051 = 'コンテンツの登録に失敗しました。\nネットワーク環境の良い場所で再度お試しください。';
/**
  * Error meseage id NWK_CK_052
  * @type {string}
*/
constant.NWK_CK_052 = '{0}は半角英数字で15文字以内で入力してください。';
/**
  * Error meseage id NWK_CK_053
  * @type {string}
*/
constant.NWK_CK_053 = 'ファイルのパスが長すぎます。';
/**
  * Error meseage id NWK_CK_054
  * @type {string}
*/
constant.NWK_CK_054 = 'メモは全角1000文字以内で入力してください。';
/**
  * Error meseage id NWK_CK_055
  * @type {string}
*/
constant.NWK_CK_055 = '{0}は半角英数字で5文字以内で入力してください。';
/**
  * Error meseage id NWK_CK_056
  * @type {string}
*/
constant.NWK_CK_056 = '{0}は全角で2000文字以内で入力してください。';
/**
  * Error meseage id NWK_CK_057
  * @type {string}
*/
constant.NWK_CK_057 = 'お知らせ情報の登録に失敗しました。\nネットワーク環境の良い場所で再度お試しください。';
/**
  * Error meseage id NWK_CK_058
  * @type {string}
*/
constant.NWK_CK_058 = 'お知らせ情報の更新に失敗しました。\nネットワーク環境の良い場所で再度お試しください。';
/**
  * Error meseage id NWK_CK_059
  * @type {string}
*/
constant.NWK_CK_059 = 'お知らせ情報の削除に失敗しました。\nネットワーク環境の良い場所で再度お試しください。';
/**
  * Error meseage id NWK_CK_060
  * @type {string}
*/
constant.NWK_CK_060 = '配信メールの送信に失敗しました。\nネットワーク環境の良い場所で再度お試しください。';
/**
  * Error meseage id NWK_CK_061
  * @type {string}
*/
constant.NWK_CK_061 = 'メールアドレスまたは、パスワードが正しくありません。';
/**
  * Error meseage id NWK_CK_062
  * @type {string}
*/
constant.NWK_CK_062 = 'メールアドレスまたは、パスワードが正しくありません。';
/**
  * Error meseage id NWK_CK_063
  * @type {string}
*/
constant.NWK_CK_063 = 'コンテンツをダウンロードします。\nパケット通信が発生するため、4GではなくWi-Fiを推奨します。\nダウンロードを開始してもよろしいですか？';
/**
  * Error meseage id NWK_CK_064
  * @type {string}
*/
constant.NWK_CK_064 = 'コンテンツのダウンロードが正常に完了しました。';
/**
  * Error meseage id NWK_CK_065
  * @type {string}
*/
constant.NWK_CK_065 = '情報の取得に失敗しました。ネットワーク環境の良い場所で、再度お試しください。';
/**
  * Error meseage id NWK_CK_066
  * @type {string}
*/
constant.NWK_CK_066 = '利用者情報の削除に失敗しました。ネットワーク環境の良い場所で再度お試しください。';
/**
  * Error meseage id NWK_CK_067
  * @type {string}
*/
constant.NWK_CK_067 = '一度削除を行うと、<br/>復元はできません。<br/><br/>本当に削除しても<br/>良いですか？';
/**
  * Thank meseage
  * @type {string}
*/
constant.MSG_THANKS_INSTALL = 'インストールいただきありがとうございます。';
/**
 * Event load notice meseage
 * @type {string}
*/
constant.EVENT_LOAD_NOTICES = 'loadAllNotices';
/**
  * Registation request meseage
  * @type {string}
*/
constant.MSG_REGISTRATION_REQUEST = '無料期間はあと（残日数）日です。代表スタッフによる、登録をお願いします。<br/><a href="http://nouwaka-web01k.azurewebsites.net/Staff/Create">http://nouwaka-web01k.azurewebsites.net/Staff/Create</a>';
/**
  * Behavior log meseage
  * @type {string}
*/
constant.MSG_BEHAVIOR_BLOG = '画面表示';
/**
  * PDF report meseage
  * @type {string}
*/
constant.MSG_PDF_REPORT = 'PDFレポート出力は、現在準備中です';
/**
 * Setting string camera
 * @type {string}
*/
constant.SETTING_IMAGE_CAMERA = 'data:image/jpeg;base64,';
/**
 * Facility link website
 * @type {string}
*/
constant.STAFF_LINK = 'http://nouwaka-web01k.azurewebsites.net/staffs/list';
/**
* Facility link website
* @type {string}
*/
constant.FACILITY_LINK = 'http://nouwaka-web01k.azurewebsites.net/facilities/list';
constant.DEFAULT_COMBOBOX_TAG = '未設定';
constant.DEFAULT_COMBOBOX_SORT = '新着順';
constant.ERROR_MESSAGE_SEARCHBAR = '該当するコンテンツはありません。';
constant.LAST_PLAYED_TEXT = '0001-01-01T00:00:00';
constant.LABEL_SORT1 = '新着順';
constant.LABEL_SORT2 = '人気順';
constant.LABEL_SORT3 = 'レベル順';
constant.LABEL_LEVEL_ID1 = 'すべてのイベント';
constant.LABEL_LEVEL_ID2 = 'トレーニング';
constant.LABEL_LEVEL_ID3 = '脳若チャレンジ';
constant.SORT_TEXT_USERLIST = '五十音順';
constant.TEXT_FACILITIES = '未設定';
constant.TEXT_SORT2 = 'スコア順';
constant.TEXT_SORT3 = 'プレイ日順';
constant.ERROR_MESSAGE_SEARCHBAR_USERLIST = "該当する利用者は見つかりません。";
constant.EVENT_CONTENT_COMMENTARY = 'changeContentsCommentaryIntoRootPage';
constant.EVENT_CHANGE_LOGIN_PAGE = 'changeLoginPage';
constant.EVENT_NOAH_PLAYING = 'goToNoAHPlayingPage';
constant.EVENT_USER_DETAIL = 'changeUserDetailIntoRootPage';
constant.SEX1_TEXT = '男性';
constant.SEX2_TEXT = '女性';
constant.SEX3_TEXT = 'その他';
constant.SCREEN_PLAYLIST_CODE = ' F-02-1';
constant.SCREEN_USERLIST_CODE = ' F-03-1';
constant.SCREEN_SETTING_CODE = 'F-04';
constant.SCREEN_TAG_CODE = 'F-02-1-3';
constant.SCREEN_SERIES_CODE = 'F-02-1-2';
constant.SCREEN_SORT_USER_CODE = 'F-03-1-1';
constant.SCREEN_SORT_CONTENT_CODE = 'F-02-1-1';
constant.SCREEN_FACILITIES_CODE = 'F-03-1-3';
constant.SCREEN_STAFF_CODE = ' F-03-1-2';
constant.SCREEN_REGISTER_CODE = 'F-03-1-4';
constant.SCREEN_WALKTHROUGH_CODE = 'F-01-1';
constant.SCREEN_CHATMODE_CODE = 'F-01';
constant.SCREEN_NOAH_CODE = 'F-03-4';
constant.SCREEN_PLAYING_CONTENT_CODE = 'F-02-3';
constant.SCREEN_SPECIFYING_PERIOD_CODE = 'F-01-2';
constant.SCREEN_CONTENT_COMMENTARY_CODE = 'F-02-2';
constant.SCREEN_DELETE_USER_CODE = 'F-02-2-1';
constant.SCREEN_UPDATE_USER_CODE = 'F-03-2-3';
constant.SCREEN_DELETE_USER_DETAIL_CODE = 'F-03-2-4';
constant.SCREEN_COMBOBOX_DETAIL_CODE = 'F-03-2-2';
constant.SCREEN_SPECIFYING_DETAIL_CODE = 'F-03-2-1';
constant.SCREEN_USER_DETAIL_CODE = 'F-03-2';
constant.SCREEN_PDF_REPORT_CODE = 'F-03-3';
// REGISTER SCREEN
constant.USER_DEFAULT_IMAGE = 'assets/image/icon.png';
constant.REGISTER_LOADING_TEXT = 'お待ちください...';
constant.USER_KANA_REGISTER_SCREEN = 'かな,';
constant.USER_NAME_REGISTER_SCREEN = '氏名,';
constant.SEX_REGISTER_SCREEN = '性別,';
constant.BIRTHDAY_REGISTER_SCREEN = '生年月日,';
constant.FACILITY_ID_REGISTER_SCREEN = '所属,';
constant.STAFF_ID_REGISTER_SCREEN = '担当,';
constant.LEVEL_REGISTER_SCREEN = 'レベル,';
constant.NAME_REGISTER_SCREEN_TEXT = '氏名';
constant.WONDER_REGISTER_SCREEN_TEXT = 'かな';
constant.BACK_TO_USER_LIST = 'backToUserList';
constant.DOTS_TYPE = 'dots';
//PLAYLIST
constant.NOT_SET_TEXT = '未使用';
constant.LAST_USED_TEXT_PLAYLIST = 'に使用';
constant.PNG_EXTENSION = 'png';
constant.NO_TEXT = 'NO';
//COLOR
constant.WHITE = 'white';
constant.TRANSPARENT = 'transparent';
//WALKTHROUGH
constant.CHANGE_TAB_PAGE = 'changeTabPages';
constant.IS_FIRST_TIME = 'isFirstTime';
constant.PRE_BUTTON_ID = 'pre-btn';
constant.NEXT_BUTTON_ID = 'next-btn';
//LOGIN
constant.FORGET_PASSWORD_LINK = 'http://nouwaka-web01k.azurewebsites.net/Account/ForgotPassword';
constant.ERROR_MEASAGE_ID = 'error-messenger';
constant.TOKEN_TEXT = 'token';
constant.MEASAGE_WAIT = 'ダウンロード中';
constant.DOWNLOAD_CONTENT_HISTORY = 'downloadContentsHistory';
//SPECIFYING PERIOD
constant.END_DATE = 'endDate';
constant.START_DATE = 'startDate';
constant.EVENT_NAME = 'eventName';
//CHAT MODE
constant.ZIP_EXTENSION = 'zip';
constant.CONTENT_TEXT = 'contents/';
constant.CONTENT_ID_TEXT = 'contentId';
// DELETING USER
constant.POS_TEXT = 'pos';
constant.ARR_SELECT_TEXT = 'arrSelect';
constant.CONTENT_CODE_TEXT = 'contentCode';
constant.DELETE_TEXT = 'delete';
constant.SELECT_TEXT = 'select';
//USER DETAIL
constant.FORMAT_DATE = 'yyyy-MM-dd';
constant.CLOSE_TEXT = '削除';
constant.MSSG_TEXT = 'キャンセル';
constant.LABEL_TEXT = 'すべてのイベント';
//# sourceMappingURL=constant.js.map

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contents-commentary/contents-commentary.module": [
		617,
		3
	],
	"../pages/no-ah-playing/no-ah-playing.module": [
		618,
		2
	],
	"../pages/playing-content/playing-content.module": [
		619,
		1
	],
	"../pages/user-detail/user-detail.module": [
		620,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 204;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return commonClass; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_native_storage__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_zip__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var commonClass = (function () {
    /**
     * Constructor of common class
     *    param:
     *      -nativeStorage
     *      -events
     *      -http
     *      -alertController
     *    return:
     *      -N/A
    */
    function commonClass(nativeStorage, events, http, alertController, file, zip, transfer) {
        this.nativeStorage = nativeStorage;
        this.events = events;
        this.http = http;
        this.alertController = alertController;
        this.file = file;
        this.zip = zip;
        this.transfer = transfer;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["JwtHelper"]();
        this.endDate = new Date();
        this.startDate = new Date(new Date().setDate(this.endDate.getDate() - 30));
        this.accountRemainingDays = null;
        this.fileTransfer = this.transfer.create();
        this.callEvent = events;
    }
    /**
     * Get token of user
     *    param:
     *      -N/A
     *    return:
     *      -N/A
    */
    commonClass.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var resultObject, token, headers, options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadValueLocalStorage('token')];
                    case 1:
                        token = _a.sent();
                        if (token != null) {
                            headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({
                                "Authorization": "Bearer " + token,
                                'Content-Type': 'application/json'
                            });
                            options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
                                headers: headers
                            });
                            resultObject = { options: options, userObject: this.jwtHelper.decodeToken(String(token)) };
                        }
                        else {
                            resultObject = null;
                        }
                        return [2 /*return*/, resultObject];
                }
            });
        });
    };
    /**
     * Get value of attribute from local storage
     *    param:
     *      -attributeName: attribute name
     *    return:
     *      -value
    */
    commonClass.prototype.loadValueLocalStorage = function (attributeName) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = null;
                        return [4 /*yield*/, this.nativeStorage.getItem(attributeName).catch(function () {
                                result = null;
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Save value of attribute to local storage
     *    param:
     *      -itemName: attribute name
     *      -value: value of attribute
     *    return:
     *      -true: success/ false: fail
    */
    commonClass.prototype.saveValueLocalStorage = function (itemName, value) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = false;
                        return [4 /*yield*/, this.nativeStorage.setItem(itemName, value).then(function (data) {
                                if (data) {
                                    result = true;
                                }
                            }).catch(function (error) {
                                result = false;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Check current login account
     *    param:
     *      -N/A
     *    return:
     *      -N/A
    */
    commonClass.prototype.checkAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result, accountcheck, jsonCallBack;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = true;
                        if (!(this.tokenObj != null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.http.post(__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].API_ACCOUNT_CHECK, JSON.stringify({ AgreementId: this.tokenObj.userObject.AgreementId, UserId: this.tokenObj.userObject.Id }), this.tokenObj.options).toPromise().catch(function (error) {
                                console.log(error);
                                _this.returnLogin();
                                result = false;
                            })];
                    case 1:
                        accountcheck = _a.sent();
                        if (accountcheck) {
                            jsonCallBack = accountcheck.json();
                            if (jsonCallBack.Attribute == 0) {
                                if (jsonCallBack.RemainingDays > 0) {
                                    this.accountRemainingDays = jsonCallBack.RemainingDays;
                                }
                                else {
                                    this.returnLogin();
                                    result = false;
                                }
                            }
                            else if (jsonCallBack.Attribute == 1) {
                                if (!jsonCallBack.Available) {
                                    this.returnLogin();
                                    result = false;
                                }
                                else {
                                    this.accountRemainingDays = null;
                                }
                            }
                            else {
                                this.returnLogin();
                                result = false;
                            }
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        this.returnLogin();
                        result = false;
                        _a.label = 3;
                    case 3: return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Format date in yyyy/mm/dd
     *    param:
     *      -date: Date for format
     *    return:
     *      -date after format
    */
    commonClass.prototype.formatDate = function (date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('/');
    };
    /**
     * Format date in japanese
     *    param:
     *      -date: Date for format
     *      -isYearJP: flag convert to Jp calendar or not
     *    return:
     *      -date after format
    */
    commonClass.prototype.formatDate2Jp = function (date, isYearJP) {
        var d = new Date(date);
        var month = '' + (d.getMonth() + 1);
        var day = '' + d.getDate();
        var year;
        year = d.getFullYear();
        var subDate = d.getDay();
        var newSubDate = '';
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        if (!isYearJP) {
            switch (subDate) {
                case 1:
                    newSubDate = '（月）';
                    break;
                case 2:
                    newSubDate = '（火）';
                    break;
                case 3:
                    newSubDate = '（水）';
                    break;
                case 4:
                    newSubDate = '（木）';
                    break;
                case 5:
                    newSubDate = '（金）';
                    break;
                case 6:
                    newSubDate = '（土）';
                    break;
                case 0:
                    newSubDate = '（日）';
            }
        }
        else {
            var dateJPCal = d.toLocaleDateString("ja-JP-u-ca-japanese");
            console.log("---------------------", dateJPCal);
            year = dateJPCal.split('/').shift();
        }
        return year + '年' + month + '月' + day + '日' + newSubDate;
    };
    commonClass.prototype.convertToJpDate = function (date) {
        var d = new Date(date);
        var month = '' + (d.getMonth() + 1);
        var day = '' + d.getDate();
        var year = __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].JAPANESE_CALENDAR_CHART["" + d.getFullYear()];
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return year + '年' + month + '月' + day + '日';
    };
    commonClass.prototype.getJpDay = function (date) {
        var d = new Date(date);
        var subDate = d.getDay();
        var newSubDate = '';
        switch (subDate) {
            case 1:
                newSubDate = '（月）';
                break;
            case 2:
                newSubDate = '（火）';
                break;
            case 3:
                newSubDate = '（水）';
                break;
            case 4:
                newSubDate = '（木）';
                break;
            case 5:
                newSubDate = '（金）';
                break;
            case 6:
                newSubDate = '（土）';
                break;
            case 0:
                newSubDate = '（日）';
        }
        return newSubDate;
    };
    /**
     * Return back to login page
     *    param:
     *      -N/A
     *    return:
     *      -N/A
    */
    commonClass.prototype.returnLogin = function () {
        this.callEvent.publish('changeLoginPage');
    };
    /**
     * Find index in array with value of attribute
     *    param:
     *      -array: Array for find index
     *      -attr: Attribute will be find in array
     *      -value: The valur for finding
     *    return:
     *      -index of map item in array
    */
    commonClass.prototype.findWithAttr = function (array, attr, value) {
        for (var i = 0; i < array.length; i += 1) {
            if (array[i][attr] === value) {
                return i;
            }
        }
        return -1;
    };
    /**
     * Find index in array with value of attribute
     *    param:
     *      -ScreenId: Id of screen
     *      -Processing: proccessing.
     *    return:
     *      -N/A
    */
    commonClass.prototype.writeToBehaviorLog = function (ScreenId, Processing) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = true;
                        if (!(this.tokenObj != null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.http.post(__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].API_BEHAVIOR_LOG, JSON.stringify({ StaffId: this.tokenObj.userObject.Id, ScreenId: ScreenId, Processing: Processing }), this.tokenObj.options).toPromise()
                                .catch(function (error) {
                                console.log(error);
                                result = false;
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Show modal Ask
     *    param:
     *      -message: message dialog
     *    return:
     *      -N/A
    */
    commonClass.prototype.showModalDialogAsk = function (message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var confirmDialog = _this.alertController.create({
                subTitle: message,
                buttons: [
                    {
                        text: __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].BUTTON_CANCEL,
                        handler: function () {
                            resolve(false);
                        }
                    },
                    {
                        text: __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].BUTTON_OK,
                        handler: function () {
                            resolve(true);
                        }
                    }
                ],
                enableBackdropDismiss: false
            });
            confirmDialog.present();
        });
    };
    /**
     * Show modal Ask
     *    param:
     *      -message: message dialog
     *      -isDisableOutside: enableBackdropDismiss flag
     *    return:
     *      -N/A
    */
    commonClass.prototype.showModalDialogConfirm = function (message, isDisableOutside) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var confirmDialog = _this.alertController.create({
                subTitle: message,
                buttons: [
                    {
                        text: __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].BUTTON_OK,
                        handler: function () {
                            resolve(true);
                        }
                    }
                ],
                enableBackdropDismiss: isDisableOutside
            });
            if (confirmDialog != null) {
                confirmDialog.present();
            }
            else {
                confirmDialog.dismiss();
            }
        });
    };
    commonClass.prototype.calculateAge = function (birthday) {
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
    ;
    commonClass.prototype.encodeURINonASCII = function (str) {
        var list_character = str.split("");
        var result = '';
        for (var i = 0; i < list_character.length; i++) {
            var charcode = list_character[i].charCodeAt(0);
            // If character is not ASCII
            if (!(charcode >= 32 && charcode <= 126)) {
                result = result + encodeURI(list_character[i]);
            }
            else {
                result = result + list_character[i];
            }
        }
        return result;
    };
    commonClass.prototype.checkIsASCII = function (str) {
        return /^[\x00-\x7F]*$/.test(str);
    };
    commonClass.prototype.checkIsJapaneseChar = function (str) {
        return /^([ァ-ヶーぁ-ん一-龠ａ-ｚＡ-Ｚ０-９]+)$/.test(str);
    };
    commonClass.prototype.checkIsHiraganaChar = function (str) {
        return /^([ぁ-んａ-ｚＡ-Ｚ０-９]+)$/.test(str);
    };
    commonClass.prototype.checkExistFolder = function (directory, forlderName) {
        return __awaiter(this, void 0, void 0, function () {
            var result, folder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = false;
                        return [4 /*yield*/, this.file.checkDir(directory, forlderName).catch(function (err) {
                                result = false;
                            })];
                    case 1:
                        folder = _a.sent();
                        if (folder) {
                            result = true;
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    commonClass.prototype.getAllFile = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var currentFolder, _i, currentFolder_1, subFolder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.file.listDir(url, '').catch(function (error) {
                        })];
                    case 1:
                        currentFolder = _a.sent();
                        if (!currentFolder) return [3 /*break*/, 6];
                        _i = 0, currentFolder_1 = currentFolder;
                        _a.label = 2;
                    case 2:
                        if (!(_i < currentFolder_1.length)) return [3 /*break*/, 6];
                        subFolder = currentFolder_1[_i];
                        if (!subFolder.isFile) return [3 /*break*/, 3];
                        this.listFile.push(subFolder);
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.getAllFile(url + subFolder.name + '/')];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 2];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    commonClass.prototype.getContentFile = function (contentsCode, stringSearch) {
        return __awaiter(this, void 0, void 0, function () {
            var url, folderDirectory, i, filePath, fullFilePath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = null;
                        folderDirectory = this.file.dataDirectory + 'contents/' + contentsCode + '/';
                        if (!contentsCode) return [3 /*break*/, 2];
                        this.listFileOfContent = [];
                        return [4 /*yield*/, this.getAllFileForContent(folderDirectory)];
                    case 1:
                        _a.sent();
                        for (i = 0; i < this.listFileOfContent.length; i++) {
                            filePath = this.listFileOfContent[i].fullPath;
                            fullFilePath = this.file.dataDirectory.slice(0, -1) + filePath;
                            fullFilePath = fullFilePath.substr(7, fullFilePath.length);
                            if (filePath.indexOf(stringSearch) != -1) {
                                url = fullFilePath;
                                break;
                            }
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, url];
                }
            });
        });
    };
    commonClass.prototype.getAllFileForContent = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var currentFolder, _i, currentFolder_2, subFolder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.file.listDir(url, '').catch(function (error) {
                        })];
                    case 1:
                        currentFolder = _a.sent();
                        if (!currentFolder) return [3 /*break*/, 6];
                        _i = 0, currentFolder_2 = currentFolder;
                        _a.label = 2;
                    case 2:
                        if (!(_i < currentFolder_2.length)) return [3 /*break*/, 6];
                        subFolder = currentFolder_2[_i];
                        if (!subFolder.isFile) return [3 /*break*/, 3];
                        this.listFileOfContent.push(subFolder);
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.getAllFileForContent(url + subFolder.name + '/')];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 2];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    commonClass.prototype.downLoadContents = function (content) {
        return __awaiter(this, void 0, void 0, function () {
            var result, data, url, fileName, forderName, folderExist, subFolderExist, downloadFolder, downloadUrl, unZipResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = false;
                        if (content.FileUrl == '') {
                            console.log('download error: ' + content.FileUrl);
                            return [2 /*return*/, result];
                        }
                        fileName = content.ContentCode + 'zip';
                        forderName = content.ContentCode;
                        return [4 /*yield*/, this.checkExistFolder(this.file.dataDirectory, 'contents')];
                    case 1:
                        folderExist = _a.sent();
                        if (!folderExist) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.checkExistFolder(this.file.dataDirectory + 'contents/', forderName)];
                    case 2:
                        subFolderExist = _a.sent();
                        if (!subFolderExist) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.file.removeRecursively(this.file.dataDirectory + 'contents/', forderName).catch(function (err) {
                                console.log(err);
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [4 /*yield*/, this.file.createDir(this.file.dataDirectory + 'contents/', forderName, true).catch(function (err) {
                            console.log('create dataDirectory:' + err);
                        })];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 6: return [4 /*yield*/, this.file.createDir(this.file.dataDirectory, 'contents/', true).catch(function (err) {
                            console.log('create dataDirectory:' + err);
                        })];
                    case 7:
                        _a.sent();
                        ;
                        return [4 /*yield*/, this.file.createDir(this.file.dataDirectory + 'contents/', forderName, true).catch(function (err) {
                                console.log('create dataDirectory: ' + err);
                            })];
                    case 8:
                        _a.sent();
                        ;
                        _a.label = 9;
                    case 9:
                        downloadFolder = this.file.dataDirectory + 'contents/' + forderName;
                        downloadUrl = downloadFolder + '/' + fileName;
                        url = this.encodeURINonASCII(content.FileUrl);
                        return [4 /*yield*/, this.fileTransfer.download(url, downloadUrl).catch(function (error) {
                                console.log('download error: ' + content.FileUrl);
                                result = false;
                            })];
                    case 10:
                        data = _a.sent();
                        if (!data) return [3 /*break*/, 12];
                        console.log('download complete: ' + data.toURL());
                        return [4 /*yield*/, this.unzipFile(downloadUrl)];
                    case 11:
                        unZipResult = _a.sent();
                        if (unZipResult) {
                            result = true;
                        }
                        else {
                            result = false;
                        }
                        _a.label = 12;
                    case 12: return [2 /*return*/, result];
                }
            });
        });
    };
    commonClass.prototype.getContents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var arrayContents;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        arrayContents = null;
                        if (!(this.tokenObj != null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].API_CONTENTS_GET +
                                "?SortId=1&RepresentativeFlg=" + this.tokenObj.userObject.RepresentativeFlg + "&StaffId=" + this.tokenObj.userObject.Id, this.tokenObj.options).toPromise()
                                .catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.showModalDialogConfirm(__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].NWK_CK_005, false)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/, arrayContents];
                                    }
                                });
                            }); })];
                    case 1:
                        arrayContents = _a.sent();
                        if (arrayContents) {
                            arrayContents = arrayContents.json().items;
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, arrayContents];
                }
            });
        });
    };
    commonClass.prototype.unzipFile = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var result, folderPath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = true;
                        folderPath = url.substr(0, url.lastIndexOf('/')) + '/';
                        return [4 /*yield*/, this.zip.unzip(url, folderPath).catch(function (error) {
                                console.log('unzip error: ' + error);
                                result = false;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
    * check first time
    *    param:
    *      -N/A
    *    return:
    *      -isFirstTime
   */
    commonClass.prototype.checkIsFirstTime = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isFirstTime, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isFirstTime = false;
                        return [4 /*yield*/, this.loadValueLocalStorage(__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].IS_FIRST_TIME).catch(function (error) {
                                isFirstTime = true;
                            })];
                    case 1:
                        data = _a.sent();
                        if (data != null) {
                            if (data == true) {
                                isFirstTime = false;
                            }
                        }
                        else {
                            isFirstTime = true;
                        }
                        return [2 /*return*/, isFirstTime];
                }
            });
        });
    };
    return commonClass;
}());
commonClass = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_zip__["a" /* Zip */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */]])
], commonClass);

//# sourceMappingURL=common.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeletingUserRegistrationPopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_common__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








/**
 * Generated class for the DeletingUserRegistrationPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var DeletingUserRegistrationPopoverComponent = (function () {
    function DeletingUserRegistrationPopoverComponent(common, viewCtrl, navParams, http, popoverCtrl, events, alertController) {
        this.common = common;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.http = http;
        this.popoverCtrl = popoverCtrl;
        this.events = events;
        this.alertController = alertController;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["JwtHelper"]();
        this.loadContent();
        this.callEvent = events;
        this.itemselect = this.navParams.get(__WEBPACK_IMPORTED_MODULE_4__app_constant__["a" /* constant */].POS_TEXT);
        this.arrSelect = this.navParams.get(__WEBPACK_IMPORTED_MODULE_4__app_constant__["a" /* constant */].ARR_SELECT_TEXT);
        this.contentCode = this.navParams.get(__WEBPACK_IMPORTED_MODULE_4__app_constant__["a" /* constant */].CONTENT_CODE_TEXT);
        ;
    }
    /**
      * go to detail
      *    param:
      *      -id: any
      *    return:
      *      -N/A
    */
    DeletingUserRegistrationPopoverComponent.prototype.goToDetails = function (id) {
        var returnArray;
        this.arrayStaffItem.forEach(function (element) {
            if (element.Id == id) {
                returnArray = element;
            }
        });
        returnArray.pos = this.itemselect.pos;
        returnArray.action = __WEBPACK_IMPORTED_MODULE_4__app_constant__["a" /* constant */].SELECT_TEXT;
        this.viewCtrl.dismiss(returnArray);
    };
    /**
      * load content
      *    param:
      *      -N/A
      *    return:
      *      -N/A
    */
    DeletingUserRegistrationPopoverComponent.prototype.loadContent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var userObject, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userObject = this.common.tokenObj;
                        return [4 /*yield*/, this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_constant__["a" /* constant */].API_GET_USER +
                                "?UserId=''" +
                                "&AgreementId=" +
                                userObject.userObject.AgreementId, userObject.options).toPromise()
                                .catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.common.showModalDialogConfirm(__WEBPACK_IMPORTED_MODULE_4__app_constant__["a" /* constant */].NWK_CK_005, false)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.arrayStaffItem = data.json().items;
                            this.arraySearch = this.arrayStaffItem;
                            this.arraySearch.forEach(function (searchEle) {
                                _this.arrSelect.forEach(function (selectEle) {
                                    if (searchEle.Id == selectEle.id) {
                                        searchEle.check = 1;
                                    }
                                });
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
    * search function
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    DeletingUserRegistrationPopoverComponent.prototype.searchTap = function () {
        var val = this.searchWord;
        if (val && val.trim() != '') {
            this.arraySearch = this.arrayStaffItem.filter(function (item) {
                return (item.UserName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.arraySearch = this.arrayStaffItem;
        }
    };
    /**
    * search function
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    DeletingUserRegistrationPopoverComponent.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.arraySearch = this.arrayStaffItem.filter(function (item) {
                return (item.UserName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.arraySearch = this.arrayStaffItem;
        }
    };
    /**
      * delete user function
      *    param:
      *      -item: object
      *    return:
      *      -N/A
    */
    DeletingUserRegistrationPopoverComponent.prototype.deleteUser = function (item) {
        var returnArray;
        returnArray = item;
        returnArray.action = __WEBPACK_IMPORTED_MODULE_4__app_constant__["a" /* constant */].DELETE_TEXT;
        this.viewCtrl.dismiss(returnArray);
    };
    /**
    * action cancel button
    *    param:
    *      -item: object
    *    return:
    *      -N/A
    */
    DeletingUserRegistrationPopoverComponent.prototype.cancelTap = function () {
        this.viewCtrl.dismiss();
    };
    return DeletingUserRegistrationPopoverComponent;
}());
DeletingUserRegistrationPopoverComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'deleting-user-registration-popover',template:/*ion-inline-start:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/components/deleting-user-registration-popover/deleting-user-registration-popover.html"*/'<!-- Generated template for the DeletingUserRegistrationPopoverComponent component -->\n  <div class="bound-popover">\n      <ion-list>\n          <!--Search + Title-->\n            <ion-row class=\'search-row\'>\n              <ion-col col-6>\n                  <ion-toolbar>\n                      <ion-input placeholder="検索" [(ngModel)]="searchWord" class="item-search-menu-center" (ionInput)="searchItem($event)" [(ngModel)]="searchValue"> </ion-input>\n                      <ion-buttons right>\n                        <button ion-button icon-only (click)="searchTap()">\n                            <ion-icon name="search"></ion-icon>\n                        </button>\n                      </ion-buttons>\n                  </ion-toolbar>\n                <!-- <ion-searchbar placeholder="検索" (ionInput)="getItems($event)"></ion-searchbar> -->\n              </ion-col>\n              <ion-col col-6>\n                <ion-row class="full-row-size">\n                  <p class="title-item"(click)="cancelTap()">キャンセル</p>      \n                </ion-row>\n              </ion-col>\n            </ion-row>\n          <!--Main title-->\n          <ion-item>\n              <ion-label  class="text" text-center (click)="deleteUser(itemselect)">指定したひとをクリアする</ion-label>\n          </ion-item>\n          <!--Líst user-->\n              <!--Item-->\n          <ion-list style="margin-left:0;">\n          <ion-item *ngFor = "let item of arraySearch">\n            <ion-avatar item-start>\n              <img *ngIf="item.PhotoURL;else nonePhoto" src="{{item.PhotoURL}}" />\n              <ng-template #nonePhoto><div class="none-photo"><img src="assets/image/icon.png"/></div></ng-template>\n            </ion-avatar>\n            <ion-label>\n              <div class="cached-padding-item"></div>\n              <span class="title">{{item.UserName}}<span class="textKana">({{item.UserKana}})</span></span>\n              <div class="sub-title"></div>\n            </ion-label>\n            <ion-radio *ngIf="item.check;else uncheck" checked disabled (ionSelect)="goToDetails(item.Id)" value="{{item.Id}}"></ion-radio>\n            <ng-template #uncheck><ion-radio (ionSelect)="goToDetails(item.Id)" value="{{item.Id}}"></ion-radio></ng-template>\n          </ion-item>\n              <!--Item-->\n        </ion-list>\n      </ion-list>\n  </div>\n'/*ion-inline-end:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/components/deleting-user-registration-popover/deleting-user-registration-popover.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__app_common__["a" /* commonClass */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
], DeletingUserRegistrationPopoverComponent);

//# sourceMappingURL=deleting-user-registration-popover.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatingUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_levelpopover__ = __webpack_require__(117);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var UpdatingUserComponent = (function () {
    function UpdatingUserComponent(params, viewCtrl, popoverCtrl, loadingCtrl, alertCtrl, navCtrl, camera, http, common, events) {
        this.viewCtrl = viewCtrl;
        this.popoverCtrl = popoverCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.http = http;
        this.common = common;
        this.events = events;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["JwtHelper"]();
        this.user = params.get('user') || {};
        if (this.user) {
            this.newUser = __assign({}, this.user);
            this.Image = this.user.PhotoURL;
            if (this.Image == "") {
                this.Image = __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].USER_DEFAULT_IMAGE;
            }
            this.user.Birthday = new Date(this.newUser.Birthday);
            this.splitBirthdayOfUser();
            console.log(this.user);
        }
        // this.common.getToken().then(tokenObj => {
        //   this.tokenObj = tokenObj;
        //   this.agreementId = this.tokenObj.userObject.AgreementId;
        //   this.loadFacilities();
        //   this.loadStaffsList();
        // });
        this.tokenObj = this.common.tokenObj;
        this.agreementId = this.tokenObj.userObject.AgreementId;
        this.loadFacilities();
        this.loadStaffsList();
    }
    /**
    * split bỉthday of user
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    UpdatingUserComponent.prototype.splitBirthdayOfUser = function () {
        var birthday = new Date(this.newUser.Birthday);
        this.yearNew = birthday.getFullYear();
        var month = birthday.getMonth() + 1;
        this.monthNew = month > 9 ? month : '0' + month;
        var date = birthday.getDate();
        this.dayNew = date > 9 ? date : '0' + date;
        this.dayOld = this.dayNew;
        this.monthOld = this.monthNew;
        this.yearOld = this.yearNew;
    };
    /**
    * take picture from library
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    UpdatingUserComponent.prototype.takePicfromLibrary = function () {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: 0,
            sourceType: 0
        };
        this.takePic(options);
    };
    /**
    * take picture from camera
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    UpdatingUserComponent.prototype.takePicfromCamera = function () {
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: 0,
            sourceType: 1,
            cameraDirection: this.camera.Direction.FRONT
        };
        this.takePic(options);
    };
    /**
    * get picture from camera
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    UpdatingUserComponent.prototype.takePic = function (option) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.camera.getPicture(option).then(function (imageData) {
                            var image = __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].SETTING_IMAGE_CAMERA + imageData;
                            _this.binaryImg = imageData;
                            _this.Image = image;
                        }, function (err) {
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
    * get facilities combobox
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    UpdatingUserComponent.prototype.loadFacilities = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].API_FACILITIES_GET + "?AgreementId=" + this.agreementId, this.tokenObj.options).toPromise().catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: 
                                    // if error show meseage       
                                    return [4 /*yield*/, this.common.showModalDialogConfirm(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].NWK_CK_065, false)];
                                    case 1:
                                        // if error show meseage       
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.facilities = data.json().items;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
    * get staff combobox
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    UpdatingUserComponent.prototype.loadStaffsList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].API_STAFFS_GET + "?AgreementId=" + this.agreementId, this.tokenObj.options).toPromise().catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: 
                                    // if error show meseage       
                                    return [4 /*yield*/, this.common.showModalDialogConfirm(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].NWK_CK_065, false)];
                                    case 1:
                                        // if error show meseage       
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.staffs = data.json().items;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
    * update user
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    UpdatingUserComponent.prototype.update = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].DOTS_TYPE,
            content: __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].REGISTER_LOADING_TEXT
        });
        loading.present();
        this.newUser.Birthday = this.yearNew + "/" + this.monthNew + "/" + this.dayNew;
        console.log(this.newUser);
        if (!this.newUser.UserKana
            || !this.newUser.UserName || !this.newUser.Sex
            || !this.newUser.FacilityId || !this.newUser.StaffId || !this.newUser.Level) {
            var mes = '';
            if (!this.newUser.UserKana)
                mes += __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].USER_KANA_REGISTER_SCREEN;
            if (!this.newUser.UserName)
                mes += __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].USER_NAME_REGISTER_SCREEN;
            if (!this.newUser.Sex)
                mes += __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].USER_KANA_REGISTER_SCREEN;
            if (!this.newUser.year || !this.newUser.month || !this.newUser.day)
                mes += __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].BIRTHDAY_REGISTER_SCREEN;
            if (!this.newUser.FacilityId)
                mes += __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].FACILITY_ID_REGISTER_SCREEN;
            if (!this.newUser.StaffId)
                mes += __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].STAFF_ID_REGISTER_SCREEN;
            if (!this.newUser.Level)
                mes += __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].LEVEL_REGISTER_SCREEN;
            if (mes.length > 0)
                mes = mes.substring(0, mes.length - 1);
            mes = __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].NWK_CK_001.replace('{0}', mes);
            var alert_1 = this.alertCtrl.create({
                subTitle: mes,
                buttons: [__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].BUTTON_OK]
            });
            loading.dismiss();
            alert_1.present();
        }
        else if (this.newUser.UserName.length > 10 || this.common.checkIsJapaneseChar(this.newUser.UserName) == false) {
            var mes = '氏名';
            mes = __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].NWK_CK_015.replace('{0}', mes);
            var alert_2 = this.alertCtrl.create({
                subTitle: mes,
                buttons: [__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].BUTTON_OK]
            });
            loading.dismiss();
            alert_2.present();
        }
        else if (this.newUser.UserKana.length > 15 || this.common.checkIsHiraganaChar(this.newUser.UserKana) == false) {
            var mes = 'かな';
            mes = __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].NWK_CK_016.replace('{0}', mes);
            var alert_3 = this.alertCtrl.create({
                subTitle: mes,
                buttons: ['OK']
            });
            loading.dismiss();
            alert_3.present();
        }
        else if (this.binaryImg) {
            this.http.post(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].API_UPLOAD_USER, JSON.stringify({ UserId: this.newUser.Id, Binary: this.binaryImg }), this.tokenObj.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.newUser.PhotoURL = data.photourl;
                _this.http.put(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].API_UPDATE_USER, JSON.stringify(_this.newUser), _this.tokenObj.options)
                    .subscribe(function (data) {
                    loading.dismiss();
                    _this.events.publish(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].BACK_TO_USER_LIST);
                    _this.goBackafterUpdate();
                }, function (error) {
                    var alert = _this.alertCtrl.create({
                        subTitle: error,
                        buttons: [__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].BUTTON_OK]
                    });
                    loading.dismiss();
                    alert.present();
                });
            }, function (error) {
                var alert = _this.alertCtrl.create({
                    subTitle: error,
                    buttons: [__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].BUTTON_OK]
                });
                loading.dismiss();
                alert.present();
            });
        }
        else {
            this.http.put(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].API_UPDATE_USER, JSON.stringify(this.newUser), this.tokenObj.options)
                .subscribe(function (data) {
                loading.dismiss();
                _this.events.publish(__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].BACK_TO_USER_LIST);
                _this.goBackafterUpdate();
            }, function (error) {
                var alert = _this.alertCtrl.create({
                    subTitle: __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].NWK_CK_014,
                    buttons: [__WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].BUTTON_OK]
                });
                loading.dismiss();
                alert.present();
            });
        }
    };
    /**
    * go back after update
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    UpdatingUserComponent.prototype.goBackafterUpdate = function () {
        this.viewCtrl.dismiss('1');
    };
    UpdatingUserComponent.prototype.goBack = function () {
        var _this = this;
        if (this.yearNew != this.yearOld || this.monthOld != this.monthNew || this.dayOld != this.dayNew ||
            this.newUser.UserKana != this.user.UserKana || this.newUser.UserName != this.user.UserName ||
            this.newUser.Sex != this.user.Sex || this.newUser.FacilityId != this.user.FacilityId ||
            this.newUser.StaffId != this.user.StaffId || this.newUser.Level != this.user.Level) {
            console.log(this.newUser, this.user);
            var alert_4 = this.alertCtrl.create({
                subTitle: __WEBPACK_IMPORTED_MODULE_6__app_constant__["a" /* constant */].NWK_CK_017,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                        }
                    },
                    {
                        text: 'OK',
                        handler: function () {
                            _this.viewCtrl.dismiss('0');
                        }
                    }
                ]
            });
            alert_4.present();
        }
        else {
            this.viewCtrl.dismiss('0');
        }
    };
    /**
    * present level combobox
    *    param:
    *      -event:event
    *    return:
    *      -N/A
    */
    UpdatingUserComponent.prototype.levelPopover = function (event) {
        var _this = this;
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__components_levelpopover__["a" /* levelPopoverPage */], { level: this.newUser.Level });
        this.popover.present({
            ev: event
        });
        this.popover.onDidDismiss(function (data) {
            console.log(data);
            if (data) {
                _this.newUser.Level = parseInt(data);
                console.log(_this.newUser);
            }
        });
    };
    return UpdatingUserComponent;
}());
UpdatingUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'updating-user',template:/*ion-inline-start:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/components/Updating-User/updating-user.html"*/'<ion-header style="background-color: #89BA2A">\n    <ion-navbar transparent>\n        <ion-row>\n\n            <button ion-button icon-left (click)="goBack()">\n              <ion-icon name="arrow-back"></ion-icon>\n              もどる \n          </button>\n\n            <ion-title>ひとの情報を更新する</ion-title>\n        </ion-row>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-row class="padding-cached-ui"></ion-row>\n    <ion-row class="padding-main-ui">\n\n        <ion-col col-4 style="text-align : center">\n\n            <ion-row class="avatar-percentage" align-items-center justify-content-center>\n                <div class="circular--landscape">\n                    <img [src]="Image" [hidden]="!Image">\n                    <img class="avatar-hide">\n                </div>\n            </ion-row>\n            <!--Padding-->\n            <ion-row class="between-percentage"></ion-row>\n            <!--Capture-->\n            <ion-row class="button-percentage" align-items-center justify-content-center>\n                <button (tap)="takePicfromCamera()" class="button-open-custom">カメラで撮影する</button>\n            <!--Library-->\n                <button (tap)="takePicfromLibrary()" class="button-open-custom">ライブラリから選択する</button>\n            </ion-row>\n        </ion-col>\n\n        <ion-col col-8>\n\n            <ion-row class="each-percentage">\n\n                <ion-col col-3>\n                    <ion-row align-items-start class="full-height">\n                        <ion-label class="full-height">氏名</ion-label>\n                    </ion-row>\n                </ion-col>\n\n                <ion-col col-9>\n                    <ion-input [(ngModel)]="newUser.UserName" class="input" placeholder="光岡 眞里"></ion-input>\n                </ion-col>\n            </ion-row>\n\n            <ion-row class="each-percentage">\n\n                <ion-col col-3>\n                    <ion-row align-items-start class="full-height">\n                        <ion-label class="full-height">かな</ion-label>\n                    </ion-row>\n                </ion-col>\n\n                <ion-col col-9>\n                    <ion-input [(ngModel)]="newUser.UserKana" class="input" placeholder="みつおか まり"></ion-input>\n                </ion-col>\n            </ion-row>\n\n            <ion-row class="each-percentage">\n\n                <ion-col col-3>\n                    <ion-row align-items-start class="full-height">\n                        <ion-label class="full-height">生年月日</ion-label>\n                    </ion-row>\n                </ion-col>\n\n                <ion-col col-9 class="none-padding">\n                    <ion-row class="full-height">\n                        <ion-col class="full-height">\n                            <ion-item class="custom-item">\n                                <ion-select [(ngModel)]="yearNew" interface="popover" class="combobox" placeholder="年">\n                                    <ion-option value="2019">2019(平成31)年</ion-option>\n                                    <ion-option value="2018">2018(平成30)年</ion-option>\n                                    <ion-option value="2017">2017(平成29)年</ion-option>\n                                    <ion-option value="2016">2016(平成28)年</ion-option>\n                                    <ion-option value="2015">2015(平成27)年</ion-option>\n                                    <ion-option value="2014">2014(平成26)年</ion-option>\n                                    <ion-option value="2013">2013(平成25)年</ion-option>\n                                    <ion-option value="2012">2012(平成24)年</ion-option>\n                                    <ion-option value="2011">2011(平成23)年</ion-option>\n                                    <ion-option value="2010">2010(平成22)年</ion-option>\n                                    <ion-option value="2009">2009(平成21)年</ion-option>\n                                    <ion-option value="2008">2008(平成20)年</ion-option>\n                                    <ion-option value="2007">2007(平成19)年</ion-option>\n                                    <ion-option value="2006">2006(平成18)年</ion-option>\n                                    <ion-option value="2005">2005(平成17)年</ion-option>\n                                    <ion-option value="2004">2004(平成16)年</ion-option>\n                                    <ion-option value="2003">2003(平成15)年</ion-option>\n                                    <ion-option value="2002">2002(平成14)年</ion-option>\n                                    <ion-option value="2001">2001(平成13)年</ion-option>\n                                    <ion-option value="2000">2000(平成12)年</ion-option>\n                                    <ion-option value="1999">1999(平成11)年</ion-option>\n                                    <ion-option value="1998">1998(平成10)年</ion-option>\n                                    <ion-option value="1997">1997(平成 9)年</ion-option>\n                                    <ion-option value="1996">1996(平成 8)年</ion-option>\n                                    <ion-option value="1995">1995(平成 7)年</ion-option>\n                                    <ion-option value="1994">1994(平成 6)年</ion-option>\n                                    <ion-option value="1993">1993(平成 5)年</ion-option>\n                                    <ion-option value="1992">1992(平成 4)年</ion-option>\n                                    <ion-option value="1991">1991(平成 3)年</ion-option>\n                                    <ion-option value="1990">1990(平成 2)年</ion-option>\n                                    <ion-option value="1989">1989(昭64/平1)年</ion-option>\n                                    <ion-option value="1988">1988(昭和63)年</ion-option>\n                                    <ion-option value="1987">1987(昭和62)年</ion-option>\n                                    <ion-option value="1986">1986(昭和61)年</ion-option>\n                                    <ion-option value="1985">1985(昭和60)年</ion-option>\n                                    <ion-option value="1984">1984(昭和59)年</ion-option>\n                                    <ion-option value="1983">1983(昭和58)年</ion-option>\n                                    <ion-option value="1982">1982(昭和57)年</ion-option>\n                                    <ion-option value="1981">1981(昭和56)年</ion-option>\n                                    <ion-option value="1980">1980(昭和55)年</ion-option>\n                                    <ion-option value="1979">1979(昭和54)年</ion-option>\n                                    <ion-option value="1978">1978(昭和53)年</ion-option>\n                                    <ion-option value="1977">1977(昭和52)年</ion-option>\n                                    <ion-option value="1976">1976(昭和51)年</ion-option>\n                                    <ion-option value="1975">1975(昭和50)年</ion-option>\n                                    <ion-option value="1974">1974(昭和49)年</ion-option>\n                                    <ion-option value="1973">1973(昭和48)年</ion-option>\n                                    <ion-option value="1972">1972(昭和47)年</ion-option>\n                                    <ion-option value="1971">1971(昭和46)年</ion-option>\n                                    <ion-option value="1970">1970(昭和45)年</ion-option>\n                                    <ion-option value="1969">1969(昭和44)年</ion-option>\n                                    <ion-option value="1968">1968(昭和43)年</ion-option>\n                                    <ion-option value="1967">1967(昭和42)年</ion-option>\n                                    <ion-option value="1966">1966(昭和41)年</ion-option>\n                                    <ion-option value="1965">1965(昭和40)年</ion-option>\n                                    <ion-option value="1964">1964(昭和39)年</ion-option>\n                                    <ion-option value="1963">1963(昭和38)年</ion-option>\n                                    <ion-option value="1962">1962(昭和37)年</ion-option>\n                                    <ion-option value="1961">1961(昭和36)年</ion-option>\n                                    <ion-option value="1960">1960(昭和35)年</ion-option>\n                                    <ion-option value="1959">1959(昭和34)年</ion-option>\n                                    <ion-option value="1958">1958(昭和33)年</ion-option>\n                                    <ion-option value="1957">1957(昭和32)年</ion-option>\n                                    <ion-option value="1956">1956(昭和31)年</ion-option>\n                                    <ion-option value="1955">1955(昭和30)年</ion-option>\n                                    <ion-option value="1954">1954(昭和29)年</ion-option>\n                                    <ion-option value="1953">1953(昭和28)年</ion-option>\n                                    <ion-option value="1952">1952(昭和27)年</ion-option>\n                                    <ion-option value="1951">1951(昭和26)年</ion-option>\n                                    <ion-option value="1950">1950(昭和25)年</ion-option>\n                                    <ion-option value="1949">1949(昭和24)年</ion-option>\n                                    <ion-option value="1948">1948(昭和23)年</ion-option>\n                                    <ion-option value="1947">1947(昭和22)年</ion-option>\n                                    <ion-option value="1946">1946(昭和21)年</ion-option>\n                                    <ion-option value="1945">1945(昭和20)年</ion-option>\n                                    <ion-option value="1944">1944(昭和19)年</ion-option>\n                                    <ion-option value="1943">1943(昭和18)年</ion-option>\n                                    <ion-option value="1942">1942(昭和17)年</ion-option>\n                                    <ion-option value="1941">1941(昭和16)年</ion-option>\n                                    <ion-option value="1940">1940(昭和15)年</ion-option>\n                                    <ion-option value="1939">1939(昭和14)年</ion-option>\n                                    <ion-option value="1938">1938(昭和13)年</ion-option>\n                                    <ion-option value="1937">1937(昭和12)年</ion-option>\n                                    <ion-option value="1936">1936(昭和11)年</ion-option>\n                                    <ion-option value="1935">1935(昭和10)年</ion-option>\n                                    <ion-option value="1934">1934(昭和 9)年</ion-option>\n                                    <ion-option value="1933">1933(昭和 8)年</ion-option>\n                                    <ion-option value="1932">1932(昭和 7)年</ion-option>\n                                    <ion-option value="1931">1931(昭和 6)年</ion-option>\n                                    <ion-option value="1930">1930(昭和 5)年</ion-option>\n                                    <ion-option value="1929">1929(昭和 4)年</ion-option>\n                                    <ion-option value="1928">1928(昭和 3)年</ion-option>\n                                    <ion-option value="1927">1927(昭和 2)年</ion-option>\n                                    <ion-option value="1926">1926(昭1/大15)年</ion-option>\n                                    <ion-option value="1925">1925(大正14)年</ion-option>\n                                    <ion-option value="1924">1924(大正13)年</ion-option>\n                                    <ion-option value="1923">1923(大正12)年</ion-option>\n                                    <ion-option value="1922">1922(大正11)年</ion-option>\n                                    <ion-option value="1921">1921(大正10)年</ion-option>\n                                    <ion-option value="1920">1920(大正 9)年</ion-option>\n                                    <ion-option value="1919">1919(大正 8)年</ion-option>\n                                    <ion-option value="1918">1918(大正 7)年</ion-option>\n                                    <ion-option value="1917">1917(大正 6)年</ion-option>\n                                    <ion-option value="1916">1916(大正 5)年</ion-option>\n                                    <ion-option value="1915">1915(大正 4)年</ion-option>\n                                    <ion-option value="1914">1914(大正 3)年</ion-option>\n                                    <ion-option value="1913">1913(大正 2)年</ion-option>\n                                    <ion-option value="1912">1912(明45/大1)年</ion-option>\n                                </ion-select>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col class="full-height">\n                            <ion-item class="custom-item">\n                                <ion-select [(ngModel)]="monthNew" interface="popover" class="combobox" placeholder="月">\n                                    <ion-option value="01">1月</ion-option>\n                                    <ion-option value="02">2月</ion-option>\n                                    <ion-option value="03">3月</ion-option>\n                                    <ion-option value="04">4月</ion-option>\n                                    <ion-option value="05">5月</ion-option>\n                                    <ion-option value="06">6月</ion-option>\n                                    <ion-option value="07">7月</ion-option>\n                                    <ion-option value="08">8月</ion-option>\n                                    <ion-option value="09">9月</ion-option>\n                                    <ion-option value="10">10月</ion-option>\n                                    <ion-option value="11">11月</ion-option>\n                                    <ion-option value="12">12月</ion-option>\n                                </ion-select>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col class="full-height">\n                            <ion-item class="custom-item">\n                                <ion-select [(ngModel)]="dayNew" interface="popover" class="combobox" placeholder="日">\n                                    <ion-option value="01">1日</ion-option>\n                                    <ion-option value="02">2日</ion-option>\n                                    <ion-option value="03">3日</ion-option>\n                                    <ion-option value="04">4日</ion-option>\n                                    <ion-option value="05">5日</ion-option>\n                                    <ion-option value="06">6日</ion-option>\n                                    <ion-option value="07">7日</ion-option>\n                                    <ion-option value="08">8日</ion-option>\n                                    <ion-option value="09">9日</ion-option>\n                                    <ion-option value="10">10日</ion-option>\n                                    <ion-option value="11">11日</ion-option>\n                                    <ion-option value="12">12日</ion-option>\n                                    <ion-option value="13">13日</ion-option>\n                                    <ion-option value="14">14日</ion-option>\n                                    <ion-option value="15">15日</ion-option>\n                                    <ion-option value="16">16日</ion-option>\n                                    <ion-option value="17">17日</ion-option>\n                                    <ion-option value="18">18日</ion-option>\n                                    <ion-option value="19">19日</ion-option>\n                                    <ion-option value="20">20日</ion-option>\n                                    <ion-option value="21">21日</ion-option>\n                                    <ion-option value="22">22日</ion-option>\n                                    <ion-option value="23">23日</ion-option>\n                                    <ion-option value="24">24日</ion-option>\n                                    <ion-option value="25">25日</ion-option>\n                                    <ion-option value="26">26日</ion-option>\n                                    <ion-option value="27">27日</ion-option>\n                                    <ion-option value="28">28日</ion-option>\n                                    <ion-option value="29">29日</ion-option>\n                                    <ion-option value="30">30日</ion-option>\n                                    <ion-option value="31">31日</ion-option>\n                                </ion-select>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-col>\n            </ion-row>\n\n            <ion-row class="each-percentage">\n\n                <ion-col col-3>\n                    <ion-row align-items-start class="full-height">\n                        <ion-label class="full-height">性別</ion-label>\n                    </ion-row>\n                </ion-col>\n\n                <ion-col col-9 class="full-height">\n                    <ion-item class="custom-item">\n                        <ion-select [(ngModel)]="newUser.Sex" interface="popover" class="combobox" placeholder="利用者ソートリスト">\n                            <ion-option value="1">男性</ion-option>\n                            <ion-option value="2">女性</ion-option>\n                            <ion-option value="3">その他</ion-option>\n                        </ion-select>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n            <ion-row class="each-percentage">\n\n                <ion-col col-3>\n                    <ion-row align-items-start class="full-height">\n                        <ion-label class="full-height">所属</ion-label>\n                    </ion-row>\n                </ion-col>\n\n                <ion-col col-9 class="full-height">\n                    <ion-item class="custom-item">\n                        <ion-select [(ngModel)]="newUser.FacilityId" interface="popover" class="combobox" placeholder="デイサービス脳若">\n                            <ion-option *ngFor="let facility of facilities" value="{{facility.Id}}">{{facility.FacilityName}}</ion-option>\n                        </ion-select>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n            <ion-row class="each-percentage">\n\n                <ion-col col-3>\n                    <ion-row align-items-start class="full-height">\n                        <ion-label class="full-height">担当</ion-label>\n                    </ion-row>\n                </ion-col>\n\n                <ion-col col-9 class="full-height">\n                    <ion-item class="custom-item">\n                        <ion-select [(ngModel)]="newUser.StaffId" interface="popover" class="combobox" placeholder="藤田徹郎">\n                            <ion-option *ngFor="let staff of staffs" value="{{staff.Id}}">{{staff.StaffName}}</ion-option>\n                        </ion-select>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n            <ion-row class="each-percentage">\n\n                <ion-col col-3>\n                    <ion-row align-items-start class="full-height">\n                        <ion-label class="full-height">レベル</ion-label>\n                    </ion-row>\n                </ion-col>\n\n                <ion-col col-9 class="full-height">\n                        <ion-item class="custom-item">\n                            <div class="level-parent combobox" (tap)="levelPopover($event)">\n                                    <div>\n                                        <span style="color: #999" *ngIf="!newUser.Level;else heart">レベル一覧</span>\n                                        <ng-template #heart>\n                                            <span *ngFor="let index of [1,2,3]">\n                                                <ion-icon *ngIf="(newUser.Level && newUser.Level >= index)"  ios="ios-heart" md="md-heart"></ion-icon>\n                                            </span>\n                                        </ng-template>\n                                    </div>\n                                    <div>\n                                        <div class="level-select-icon"></div>\n                                    </div>\n                                </div>\n                        </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-col>\n    </ion-row>\n    <ion-row class="padding-cached-ui"></ion-row>\n</ion-content>\n\n<ion-footer style="background-color: #F5F5F5">\n    <ion-navbar transparent>\n        <ion-row justify-content-center class="full-height">\n            <ion-col style="text-align: center">\n                <button (click)="update()" class="custom-button-set">更新する</button>\n            </ion-col>\n        </ion-row>\n    </ion-navbar>\n</ion-footer>'/*ion-inline-end:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/components/Updating-User/updating-user.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_5__app_common__["a" /* commonClass */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */]])
], UpdatingUserComponent);

//# sourceMappingURL=Updating-User.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPopUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 Generated class for the DetailPopUpComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var DetailPopUpComponent = (function () {
    function DetailPopUpComponent(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.level = this.navParams.get('level');
    }
    /**
    * close combobix
    *    param:
    *      -item: object
    *    return:
    *      -N/A
    */
    DetailPopUpComponent.prototype.close = function () {
        console.log(this.level);
        this.viewCtrl.dismiss(this.level);
    };
    /**
    * action cancel button
    *    param:
    *      -item: object
    *    return:
    *      -N/A
    */
    DetailPopUpComponent.prototype.cancleTap = function () {
        this.viewCtrl.dismiss();
    };
    return DetailPopUpComponent;
}());
DetailPopUpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'detail-pop-up',template:/*ion-inline-start:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/components/detail-pop-up/detail-pop-up.html"*/'<ion-list radio-group [(ngModel)]="level">\n  <ion-item>\n  <ion-label class="title-item" (click)="cancleTap()">キャンセル</ion-label>\n</ion-item>\n  <ion-item>\n    <ion-label>すべてのイベント</ion-label>\n    <ion-radio (ionSelect)="close()" value="id1"></ion-radio>\n  </ion-item>\n  <ion-item>\n  <ion-label>トレーニング</ion-label>\n    <ion-radio (ionSelect)="close()" value="id2"></ion-radio>\n  </ion-item>\n  <ion-item>\n  <ion-label> 脳若チャレンジ</ion-label>\n    <ion-radio (ionSelect)="close()" value="id3"></ion-radio>\n  </ion-item>\n</ion-list>\n'/*ion-inline-end:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/components/detail-pop-up/detail-pop-up.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], DetailPopUpComponent);

//# sourceMappingURL=detail-pop-up.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_levelpopover__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








/**
 * Generated class for the RegisterUserComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var RegisterUserComponent = (function () {
    function RegisterUserComponent(loadingCtrl, popoverCtrl, alertCtrl, navCtrl, camera, http, common, events) {
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.http = http;
        this.common = common;
        this.events = events;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["JwtHelper"]();
        this.selectOptions = {
            cssClass: '.custom-select'
        };
        // this.commonClass.getToken().then(tokenObj => {
        //   this.tokenObj = tokenObj;
        //   this.agreementId = this.tokenObj.userObject.AgreementId;
        //   this.loadFacilities();
        //   this.loadStaffsList();
        // });
        this.tokenObj = this.common.tokenObj;
        this.agreementId = this.tokenObj.userObject.AgreementId;
        this.loadFacilities();
        this.loadStaffsList();
        this.Image = __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].USER_DEFAULT_IMAGE;
    }
    RegisterUserComponent.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.common.writeToBehaviorLog(__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].SCREEN_REGISTER_CODE, __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].MSG_BEHAVIOR_BLOG);
                return [2 /*return*/];
            });
        });
    };
    /**
    *  take picture from library
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    RegisterUserComponent.prototype.takePicfromLibrary = function () {
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: 0,
            sourceType: 0,
            targetWidth: 600,
            targetHeight: 400
        };
        this.takePic(options);
    };
    /**
    * take picture from Camera
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    RegisterUserComponent.prototype.takePicfromCamera = function () {
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: 0,
            sourceType: 1,
            targetWidth: 600,
            targetHeight: 400,
            cameraDirection: this.camera.Direction.FRONT
        };
        this.takePic(options);
    };
    /**
    * get image from camera
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    RegisterUserComponent.prototype.takePic = function (option) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.camera.getPicture(option).then(function (imageData) {
                            var image = __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].SETTING_IMAGE_CAMERA + imageData;
                            _this.binaryImg = imageData;
                            _this.Image = image;
                        }, function (err) {
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
    * load combobox facilities
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    RegisterUserComponent.prototype.loadFacilities = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].API_FACILITIES_GET + "?AgreementId=" + this.agreementId, this.tokenObj.options).toPromise().catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: 
                                    // if error show meseage       
                                    return [4 /*yield*/, this.common.showModalDialogConfirm(__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].NWK_CK_065, false)];
                                    case 1:
                                        // if error show meseage       
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.arrayFacility = data.json().items;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterUserComponent.prototype.ionViewWillUnload = function () {
        this.popover && this.popover.dismiss();
    };
    /**
    * load combobox staff
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    RegisterUserComponent.prototype.loadStaffsList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].API_STAFFS_GET + "?AgreementId=" + this.agreementId, this.tokenObj.options).toPromise().catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: 
                                    // if error show meseage       
                                    return [4 /*yield*/, this.common.showModalDialogConfirm(__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].NWK_CK_065, false)];
                                    case 1:
                                        // if error show meseage       
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.arrayStaffItem = data.json().items;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
    * register user
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    RegisterUserComponent.prototype.isRegister = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].DOTS_TYPE,
            content: __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].REGISTER_LOADING_TEXT
        });
        loading.present();
        var params = {
            Id: 0,
            AgreementId: this.agreementId,
            PhotoURL: '',
            Birthday: this.year + '/' + this.month + '/' + this.day,
            UserName: this.UserName,
            UserKana: this.UserKana,
            Sex: this.gender,
            FacilityId: this.FacilityId,
            StaffId: this.StaffId,
            Level: this.level
        };
        if (!params.Birthday || !params.UserKana
            || !params.UserName || !params.Sex
            || !params.FacilityId || !params.StaffId || !params.Level) {
            var mes = '';
            if (!params.UserKana)
                mes += __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].USER_KANA_REGISTER_SCREEN;
            if (!params.UserName)
                mes += __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].USER_NAME_REGISTER_SCREEN;
            if (!params.Sex)
                mes += __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].SEX_REGISTER_SCREEN;
            if (!this.year || !this.month || !this.day)
                mes += __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].BIRTHDAY_REGISTER_SCREEN;
            if (!params.FacilityId)
                mes += __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].FACILITY_ID_REGISTER_SCREEN;
            if (!params.StaffId)
                mes += __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].STAFF_ID_REGISTER_SCREEN;
            if (!params.Level)
                mes += __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].LEVEL_REGISTER_SCREEN;
            if (mes.length > 0)
                mes = mes.substring(0, mes.length - 1);
            mes = __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].NWK_CK_001.replace('{0}', mes);
            var alert_1 = this.alertCtrl.create({
                subTitle: mes,
                buttons: [__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].BUTTON_OK]
            });
            loading.dismiss();
            alert_1.present();
        }
        else if (params.UserName.length > 10 || this.common.checkIsJapaneseChar(params.UserName) == false) {
            var mes = __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].NAME_REGISTER_SCREEN_TEXT;
            mes = __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].NWK_CK_015.replace('{0}', mes);
            var alert_2 = this.alertCtrl.create({
                subTitle: mes,
                buttons: [__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].BUTTON_OK]
            });
            loading.dismiss();
            alert_2.present();
        }
        else if (params.UserKana.length > 15 || this.common.checkIsHiraganaChar(params.UserKana) == false) {
            var mes = __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].WONDER_REGISTER_SCREEN_TEXT;
            mes = __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].NWK_CK_016.replace('{0}', mes);
            var alert_3 = this.alertCtrl.create({
                subTitle: mes,
                buttons: [__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].BUTTON_OK]
            });
            loading.dismiss();
            alert_3.present();
        }
        else {
            this.http.post(__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].API_REGISTER_USER, JSON.stringify(params), this.tokenObj.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                params.Id = data.userId;
                if (_this.binaryImg) {
                    _this.http.post(__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].API_UPLOAD_USER, JSON.stringify({ UserId: params.Id, Binary: _this.binaryImg }), _this.tokenObj.options)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        _this.urlImage = data.photourl;
                        params.PhotoURL = _this.urlImage;
                        _this.http.put(__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].API_UPDATE_USER, JSON.stringify(params), _this.tokenObj.options)
                            .subscribe(function (data) {
                            loading.dismiss();
                            _this.goBackAfterRegister();
                            _this.events.publish(__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].BACK_TO_USER_LIST);
                        }, function (error) {
                            var alert = _this.alertCtrl.create({
                                subTitle: error.result,
                                buttons: [__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].BUTTON_OK]
                            });
                            loading.dismiss();
                            alert.present();
                        });
                    }, function (error) {
                        var alert = _this.alertCtrl.create({
                            subTitle: __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].NWK_CK_013,
                            buttons: [__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].BUTTON_OK]
                        });
                        loading.dismiss();
                        alert.present();
                    });
                }
                else {
                    loading.dismiss();
                    _this.goBackAfterRegister();
                    _this.events.publish(__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].BACK_TO_USER_LIST);
                }
            }, function (error) {
                var alert = _this.alertCtrl.create({
                    subTitle: __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].NWK_CK_014,
                    buttons: [__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].BUTTON_OK]
                });
                loading.dismiss();
                alert.present();
            });
        }
    };
    /**
    * back to register screen after register user
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    RegisterUserComponent.prototype.goBackAfterRegister = function () {
        this.navCtrl.pop();
    };
    /**
    * dismiss register screen
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    RegisterUserComponent.prototype.goBack = function () {
        var _this = this;
        var params = {
            AgreementId: this.agreementId,
            Birthday: this.year + this.month + this.day,
            UserName: this.UserName,
            UserKana: this.UserKana,
            Sex: this.gender,
            FacilityId: this.FacilityId,
            StaffId: this.StaffId,
            Level: this.level
        };
        if (this.binaryImg || params.UserKana
            || params.UserName || params.Sex || this.year || this.month || this.day
            || params.FacilityId || params.StaffId || params.Level) {
            var alert_4 = this.alertCtrl.create({
                subTitle: __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].NWK_CK_017,
                buttons: [
                    {
                        text: __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].BUTTON_CANCEL_ENG,
                        role: __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].BUTTON_CANCEL_ROLE,
                        handler: function () {
                        }
                    },
                    {
                        text: __WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* constant */].BUTTON_OK,
                        handler: function () {
                            _this.navCtrl.pop();
                        }
                    }
                ]
            });
            alert_4.present();
        }
        else
            this.navCtrl.pop();
    };
    /**
    * present level pop up
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    RegisterUserComponent.prototype.levelPopover = function (event) {
        var _this = this;
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__components_levelpopover__["a" /* levelPopoverPage */], { level: this.level });
        this.popover.present({
            ev: event
        });
        this.popover.onDidDismiss(function (data) {
            if (data) {
                _this.level = data;
            }
        });
    };
    return RegisterUserComponent;
}());
RegisterUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'register-user',template:/*ion-inline-start:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/components/Register-User/register-user.html"*/'<!-- Generated template for the RegisterUserComponent component -->\n<ion-header style="background-color: #89BA2A">\n    <ion-navbar transparent>\n        <ion-row>\n            <!--Button back-->\n            <button ion-button icon-left (click)="goBack()">\n                <ion-icon name="arrow-back"></ion-icon>\n                もどる \n            </button>\n            <!--Title-->\n            <ion-title>ひとを新規登録</ion-title>\n        </ion-row>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-row class="padding-cached-ui"></ion-row>\n    <ion-row class="padding-main-ui">\n        <!--Capture Image Avatar-->\n        <ion-col col-4 style="text-align : center">\n            <!--Avatar-->\n            <ion-row class="avatar-percentage" align-items-center justify-content-center>\n                <div class="circular--landscape">\n                    <img [src]="Image" [hidden]="!Image">\n                    <img class="avatar-hide">\n                </div>\n            </ion-row>\n            <!--Padding-->\n            <ion-row class="between-percentage"></ion-row>\n            <!--Capture-->\n            <ion-row class="button-percentage" align-items-center justify-content-center>\n                <button (tap)="takePicfromCamera()" class="button-open-custom">カメラで撮影する</button>\n                <!--Library-->\n                <button (tap)="takePicfromLibrary()" class="button-open-custom">ライブラリから選択する</button>\n            </ion-row>\n        </ion-col>\n\n        <!--Content-->\n        <ion-col col-8>\n            <!--Name-->\n            <ion-row class="each-percentage">\n                <!-- label -->\n                <ion-col col-3>\n                    <ion-row align-items-start class="full-height">\n                        <ion-label class="full-height">氏名</ion-label>\n                    </ion-row>\n                </ion-col>\n                <!-- textfield -->\n                <ion-col col-9>\n                    <ion-input type="text" [(ngModel)]="UserName" class="input" ></ion-input>\n                </ion-col>\n            </ion-row>\n            <!--Family-->\n            <ion-row class="each-percentage">\n                <!-- label -->\n                <ion-col col-3>\n                    <ion-row align-items-start class="full-height">\n                        <ion-label class="full-height">かな</ion-label>\n                    </ion-row>\n                </ion-col>\n                <!-- textfield -->\n                <ion-col col-9>\n                    <ion-input type="text" [(ngModel)]="UserKana" class="input" ></ion-input>\n                </ion-col>\n            </ion-row>\n            <!--Date of Bỉrth-->\n            <ion-row class="each-percentage">\n                <!-- label -->\n                <ion-col col-3>\n                    <ion-row align-items-start class="full-height">\n                        <ion-label class="full-height">生年月日</ion-label>\n                    </ion-row>\n                </ion-col>\n                <!-- textfield -->\n                <ion-col col-9 class="none-padding">\n                    <ion-row class="full-height">\n                        <ion-col col-6 class="full-height">\n                            <ion-item class="custom-item">\n                                <ion-select [(ngModel)]="year" interface="popover" class="combobox" placeholder="年">\n                                    <ion-option value="2019">2019(平成31)年</ion-option>\n                                    <ion-option value="2018">2018(平成30)年</ion-option>\n                                    <ion-option value="2017">2017(平成29)年</ion-option>\n                                    <ion-option value="2016">2016(平成28)年</ion-option>\n                                    <ion-option value="2015">2015(平成27)年</ion-option>\n                                    <ion-option value="2014">2014(平成26)年</ion-option>\n                                    <ion-option value="2013">2013(平成25)年</ion-option>\n                                    <ion-option value="2012">2012(平成24)年</ion-option>\n                                    <ion-option value="2011">2011(平成23)年</ion-option>\n                                    <ion-option value="2010">2010(平成22)年</ion-option>\n                                    <ion-option value="2009">2009(平成21)年</ion-option>\n                                    <ion-option value="2008">2008(平成20)年</ion-option>\n                                    <ion-option value="2007">2007(平成19)年</ion-option>\n                                    <ion-option value="2006">2006(平成18)年</ion-option>\n                                    <ion-option value="2005">2005(平成17)年</ion-option>\n                                    <ion-option value="2004">2004(平成16)年</ion-option>\n                                    <ion-option value="2003">2003(平成15)年</ion-option>\n                                    <ion-option value="2002">2002(平成14)年</ion-option>\n                                    <ion-option value="2001">2001(平成13)年</ion-option>\n                                    <ion-option value="2000">2000(平成12)年</ion-option>\n                                    <ion-option value="1999">1999(平成11)年</ion-option>\n                                    <ion-option value="1998">1998(平成10)年</ion-option>\n                                    <ion-option value="1997">1997(平成 9)年</ion-option>\n                                    <ion-option value="1996">1996(平成 8)年</ion-option>\n                                    <ion-option value="1995">1995(平成 7)年</ion-option>\n                                    <ion-option value="1994">1994(平成 6)年</ion-option>\n                                    <ion-option value="1993">1993(平成 5)年</ion-option>\n                                    <ion-option value="1992">1992(平成 4)年</ion-option>\n                                    <ion-option value="1991">1991(平成 3)年</ion-option>\n                                    <ion-option value="1990">1990(平成 2)年</ion-option>\n                                    <ion-option value="1989">1989(昭64/平1)年</ion-option>\n                                    <ion-option value="1988">1988(昭和63)年</ion-option>\n                                    <ion-option value="1987">1987(昭和62)年</ion-option>\n                                    <ion-option value="1986">1986(昭和61)年</ion-option>\n                                    <ion-option value="1985">1985(昭和60)年</ion-option>\n                                    <ion-option value="1984">1984(昭和59)年</ion-option>\n                                    <ion-option value="1983">1983(昭和58)年</ion-option>\n                                    <ion-option value="1982">1982(昭和57)年</ion-option>\n                                    <ion-option value="1981">1981(昭和56)年</ion-option>\n                                    <ion-option value="1980">1980(昭和55)年</ion-option>\n                                    <ion-option value="1979">1979(昭和54)年</ion-option>\n                                    <ion-option value="1978">1978(昭和53)年</ion-option>\n                                    <ion-option value="1977">1977(昭和52)年</ion-option>\n                                    <ion-option value="1976">1976(昭和51)年</ion-option>\n                                    <ion-option value="1975">1975(昭和50)年</ion-option>\n                                    <ion-option value="1974">1974(昭和49)年</ion-option>\n                                    <ion-option value="1973">1973(昭和48)年</ion-option>\n                                    <ion-option value="1972">1972(昭和47)年</ion-option>\n                                    <ion-option value="1971">1971(昭和46)年</ion-option>\n                                    <ion-option value="1970">1970(昭和45)年</ion-option>\n                                    <ion-option value="1969">1969(昭和44)年</ion-option>\n                                    <ion-option value="1968">1968(昭和43)年</ion-option>\n                                    <ion-option value="1967">1967(昭和42)年</ion-option>\n                                    <ion-option value="1966">1966(昭和41)年</ion-option>\n                                    <ion-option value="1965">1965(昭和40)年</ion-option>\n                                    <ion-option value="1964">1964(昭和39)年</ion-option>\n                                    <ion-option value="1963">1963(昭和38)年</ion-option>\n                                    <ion-option value="1962">1962(昭和37)年</ion-option>\n                                    <ion-option value="1961">1961(昭和36)年</ion-option>\n                                    <ion-option value="1960">1960(昭和35)年</ion-option>\n                                    <ion-option value="1959">1959(昭和34)年</ion-option>\n                                    <ion-option value="1958">1958(昭和33)年</ion-option>\n                                    <ion-option value="1957">1957(昭和32)年</ion-option>\n                                    <ion-option value="1956">1956(昭和31)年</ion-option>\n                                    <ion-option value="1955">1955(昭和30)年</ion-option>\n                                    <ion-option value="1954">1954(昭和29)年</ion-option>\n                                    <ion-option value="1953">1953(昭和28)年</ion-option>\n                                    <ion-option value="1952">1952(昭和27)年</ion-option>\n                                    <ion-option value="1951">1951(昭和26)年</ion-option>\n                                    <ion-option value="1950">1950(昭和25)年</ion-option>\n                                    <ion-option value="1949">1949(昭和24)年</ion-option>\n                                    <ion-option value="1948">1948(昭和23)年</ion-option>\n                                    <ion-option value="1947">1947(昭和22)年</ion-option>\n                                    <ion-option value="1946">1946(昭和21)年</ion-option>\n                                    <ion-option value="1945">1945(昭和20)年</ion-option>\n                                    <ion-option value="1944">1944(昭和19)年</ion-option>\n                                    <ion-option value="1943">1943(昭和18)年</ion-option>\n                                    <ion-option value="1942">1942(昭和17)年</ion-option>\n                                    <ion-option value="1941">1941(昭和16)年</ion-option>\n                                    <ion-option value="1940">1940(昭和15)年</ion-option>\n                                    <ion-option value="1939">1939(昭和14)年</ion-option>\n                                    <ion-option value="1938">1938(昭和13)年</ion-option>\n                                    <ion-option value="1937">1937(昭和12)年</ion-option>\n                                    <ion-option value="1936">1936(昭和11)年</ion-option>\n                                    <ion-option value="1935">1935(昭和10)年</ion-option>\n                                    <ion-option value="1934">1934(昭和 9)年</ion-option>\n                                    <ion-option value="1933">1933(昭和 8)年</ion-option>\n                                    <ion-option value="1932">1932(昭和 7)年</ion-option>\n                                    <ion-option value="1931">1931(昭和 6)年</ion-option>\n                                    <ion-option value="1930">1930(昭和 5)年</ion-option>\n                                    <ion-option value="1929">1929(昭和 4)年</ion-option>\n                                    <ion-option value="1928">1928(昭和 3)年</ion-option>\n                                    <ion-option value="1927">1927(昭和 2)年</ion-option>\n                                    <ion-option value="1926">1926(昭1/大15)年</ion-option>\n                                    <ion-option value="1925">1925(大正14)年</ion-option>\n                                    <ion-option value="1924">1924(大正13)年</ion-option>\n                                    <ion-option value="1923">1923(大正12)年</ion-option>\n                                    <ion-option value="1922">1922(大正11)年</ion-option>\n                                    <ion-option value="1921">1921(大正10)年</ion-option>\n                                    <ion-option value="1920">1920(大正 9)年</ion-option>\n                                    <ion-option value="1919">1919(大正 8)年</ion-option>\n                                    <ion-option value="1918">1918(大正 7)年</ion-option>\n                                    <ion-option value="1917">1917(大正 6)年</ion-option>\n                                    <ion-option value="1916">1916(大正 5)年</ion-option>\n                                    <ion-option value="1915">1915(大正 4)年</ion-option>\n                                    <ion-option value="1914">1914(大正 3)年</ion-option>\n                                    <ion-option value="1913">1913(大正 2)年</ion-option>\n                                    <ion-option value="1912">1912(明45/大1)年</ion-option>\n                                </ion-select>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col col-3 class="full-height">\n                            <ion-item class="custom-item">\n                                <ion-select [(ngModel)]="month" interface="popover" class="combobox" placeholder="月">\n                                    <ion-option value="01">1月</ion-option>\n                                    <ion-option value="02">2月</ion-option>\n                                    <ion-option value="03">3月</ion-option>\n                                    <ion-option value="04">4月</ion-option>\n                                    <ion-option value="05">5月</ion-option>\n                                    <ion-option value="06">6月</ion-option>\n                                    <ion-option value="07">7月</ion-option>\n                                    <ion-option value="08">8月</ion-option>\n                                    <ion-option value="09">9月</ion-option>\n                                    <ion-option value="10">10月</ion-option>\n                                    <ion-option value="11">11月</ion-option>\n                                    <ion-option value="12">12月</ion-option>\n                                </ion-select>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col col-3 class="full-height">\n                            <ion-item class="custom-item">\n                                <ion-select [(ngModel)]="day" interface="popover" class="combobox" placeholder="日">\n                                    <ion-option value="01">1日</ion-option>\n                                    <ion-option value="02">2日</ion-option>\n                                    <ion-option value="03">3日</ion-option>\n                                    <ion-option value="04">4日</ion-option>\n                                    <ion-option value="05">5日</ion-option>\n                                    <ion-option value="06">6日</ion-option>\n                                    <ion-option value="07">7日</ion-option>\n                                    <ion-option value="08">8日</ion-option>\n                                    <ion-option value="09">9日</ion-option>\n                                    <ion-option value="10">10日</ion-option>\n                                    <ion-option value="11">11日</ion-option>\n                                    <ion-option value="12">12日</ion-option>\n                                    <ion-option value="13">13日</ion-option>\n                                    <ion-option value="14">14日</ion-option>\n                                    <ion-option value="15">15日</ion-option>\n                                    <ion-option value="16">16日</ion-option>\n                                    <ion-option value="17">17日</ion-option>\n                                    <ion-option value="18">18日</ion-option>\n                                    <ion-option value="19">19日</ion-option>\n                                    <ion-option value="20">20日</ion-option>\n                                    <ion-option value="21">21日</ion-option>\n                                    <ion-option value="22">22日</ion-option>\n                                    <ion-option value="23">23日</ion-option>\n                                    <ion-option value="24">24日</ion-option>\n                                    <ion-option value="25">25日</ion-option>\n                                    <ion-option value="26">26日</ion-option>\n                                    <ion-option value="27">27日</ion-option>\n                                    <ion-option value="28">28日</ion-option>\n                                    <ion-option value="29">29日</ion-option>\n                                    <ion-option value="30">30日</ion-option>\n                                    <ion-option value="31">31日</ion-option>\n                                </ion-select>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-col>\n            </ion-row>\n            <!--Gender-->\n            <ion-row class="each-percentage">\n                <!-- label -->\n                <ion-col col-3>\n                    <ion-row align-items-start class="full-height">\n                        <ion-label class="full-height">性別</ion-label>\n                    </ion-row>\n                </ion-col>\n                <!-- textfield -->\n                <ion-col col-9 class="full-height">\n                    <ion-item class="custom-item">\n                        <ion-select [(ngModel)]="gender" interface="popover" class="combobox">\n                            <ion-option value="1">男性</ion-option>\n                            <ion-option value="2">女性</ion-option>\n                            <ion-option value="3">その他</ion-option>\n                        </ion-select>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <!--Link-->\n            <ion-row class="each-percentage">\n                <!-- label -->\n                <ion-col col-3>\n                    <ion-row align-items-start class="full-height">\n                        <ion-label class="full-height">所属</ion-label>\n                    </ion-row>\n                </ion-col>\n                <!-- textfield -->\n                <ion-col col-9 class="full-height">\n                    <ion-item class="custom-item">\n                        <ion-select [(ngModel)]="FacilityId" interface="popover" class="combobox">\n                            <ion-option *ngFor="let Facility of arrayFacility" value="{{Facility.Id}}">{{Facility.FacilityName}}</ion-option>\n                        </ion-select>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <!--Responsible-->\n            <ion-row class="each-percentage">\n                <!-- label -->\n                <ion-col col-3>\n                    <ion-row align-items-start class="full-height">\n                        <ion-label class="full-height">担当</ion-label>\n                    </ion-row>\n                </ion-col>\n                <!-- textfield -->\n                <ion-col col-9 class="full-height">\n                    <ion-item class="custom-item">\n                        <ion-select [(ngModel)]="StaffId" interface="popover" class="combobox" >\n                            <ion-option *ngFor="let staffId of arrayStaffItem" value="{{staffId.Id}}">{{staffId.StaffName}}</ion-option>\n                        </ion-select>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <!--Level-->\n            <ion-row class="each-percentage">\n                <!-- label -->\n                <ion-col col-3>\n                    <ion-row align-items-start class="full-height">\n                        <ion-label class="full-height">レベル</ion-label>\n                    </ion-row>\n                </ion-col>\n                <!-- textfield -->\n                <ion-col col-9 class="full-height">\n                    <ion-item class="custom-item">\n                        <div class="level-parent combobox" (tap)="levelPopover($event)">\n                            <div>\n                                <span style="color: #999" *ngIf="!level;else heart">レベル</span>\n                                <ng-template #heart>\n                                    <span *ngFor="let index of [1,2,3]">\n                                            <ion-icon *ngIf="(level && level >= index)"  ios="ios-heart" md="md-heart"></ion-icon>\n                                        </span>\n                                </ng-template>\n                                <!-- <span class="level" *ngIf="">❤</span>\n                                    <span class="level" *ngIf="level && level == 2">❤❤</span>\n                                    <span class="level" *ngIf="level && level == 3">❤❤❤</span> -->\n                            </div>\n                            <div>\n                                <div class="level-select-icon"></div>\n                            </div>\n                        </div>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-col>\n    </ion-row>\n    <ion-row class="padding-cached-ui"></ion-row>\n</ion-content>\n\n<ion-footer style="background-color: #F5F5F5">\n    <ion-toolbar transparent>\n        <ion-row align-items-center justify-content-center class="full-height">\n            <ion-col style="text-align: center; padding:10px">\n                <button (click)="isRegister()" class="custom-button-set"> 登録する</button>\n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/components/Register-User/register-user.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_6__app_common__["a" /* commonClass */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */]])
], RegisterUserComponent);

//# sourceMappingURL=Register-User.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRequestor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_constant__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthRequestor = (function () {
    function AuthRequestor(http) {
        this.http = http;
    }
    /**
     * request to api for authentication
     * @param body: body including username and password as JSON
     * @returns: return obverser for listening and handling response if successful or error if failed
     */
    AuthRequestor.prototype.requestAuth = function (body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: headers
        });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_constant__["a" /* constant */].API_LOGIN, JSON.stringify({ username: body.email, password: body.password }), options)
            .map(function (response) {
            var data = response.json();
            return data.token;
        })
            .catch(this.handleError);
    };
    AuthRequestor.prototype.handleError = function (error) {
        console.error(error.message || error);
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].throw(error.message || error);
    };
    return AuthRequestor;
}());
AuthRequestor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
], AuthRequestor);

//# sourceMappingURL=auth_requestor.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_staff_popover_staff_popover__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_facility_popover_facility_popover__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_sorting_order_popover_user_sorting_order_popover__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Register_User_Register_User__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_jwt__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_constant__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};














var UserListPage = (function () {
    function UserListPage(common, alertController, navCtrl, http, navParams, popoverCtrl, modalCtrl, events, loadingCtrl) {
        this.common = common;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_7_angular2_jwt__["JwtHelper"]();
        this.callEvent = events;
        this.imgList = [];
        this.labelIdSort = __WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].SORT_TEXT_USERLIST;
        this.labelFacilities = __WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].TEXT_FACILITIES;
        this.labelStaff = __WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].TEXT_FACILITIES;
        this.userObject = this.common.tokenObj;
    }
    /**
    * load combobox staff
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    UserListPage.prototype.loadFacilities = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(__WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].API_FACILITIES_GET + "?AgreementId=" + this.userObject.userObject.AgreementId, this.userObject.options)
                            .toPromise().catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: 
                                    // if error show meseage       
                                    return [4 /*yield*/, this.common.showModalDialogConfirm(__WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].NWK_CK_065, false)];
                                    case 1:
                                        // if error show meseage       
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.arrayItem = data.json();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * load combobox staff
     *    param:
     *      -N/A
     *    return:
     *      -N/A
    */
    UserListPage.prototype.loadStaffsList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(__WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].API_STAFFS_GET + "?AgreementId=" + this.userObject.userObject.AgreementId, this.userObject.options).toPromise()
                            .catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: 
                                    // if error show meseage       
                                    return [4 /*yield*/, this.common.showModalDialogConfirm(__WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].NWK_CK_065, false)];
                                    case 1:
                                        // if error show meseage       
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.arrayStaffItem = data.json();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
    * load content userlist
    *    param:
    *      -facilities: any
    *      -staff: any
    *      - idSort: any
    *    return:
    *      -N/A
   */
    UserListPage.prototype.loadContent = function (facilities, staff, idSort) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data, sex, level, i, item, age, convertBirthday, people;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.idStaff == null) {
                            // if staff == null 
                            staff = "";
                            // set label facilities combobox = "サウンドパネル"      
                            this.labelStaff = __WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].TEXT_FACILITIES;
                        }
                        if (this.idFacilities == null) {
                            // if staff == null        
                            facilities = "";
                            // set label staff combobox = "未設定"  
                            this.labelFacilities = __WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].TEXT_FACILITIES;
                        }
                        if (this.idSort == null) {
                            // if staff == null 
                            idSort = 1;
                            // set label facilities combobox = "未設定"  
                            this.labelIdSort = __WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].SORT_TEXT_USERLIST;
                        }
                        this.imgList = [];
                        this.arraySearch = [];
                        return [4 /*yield*/, this.http.get(__WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].API_SEARCHUSER_GET +
                                "?SortId=" + idSort +
                                "&AgreementId=" + this.userObject.userObject.AgreementId +
                                "&StaffId=" + staff +
                                "&FacilityId=" + facilities + "", this.userObject.options).toPromise()
                                .catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.common.showModalDialogConfirm(__WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].NWK_CK_005, false)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            data = data.json();
                            sex = void 0;
                            level = void 0;
                            for (i = 0; i < data.items.length; i++) {
                                item = data.items[i];
                                if (item.Sex == 1) {
                                    sex = __WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].SEX1_TEXT;
                                }
                                else if (item.Sex == 2) {
                                    sex = __WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].SEX2_TEXT;
                                }
                                else if (item.Sex == 3) {
                                    sex = __WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].SEX3_TEXT;
                                }
                                level = item.Level;
                                age = this.common.calculateAge(new Date(item.Birthday));
                                convertBirthday = this.common.convertToJpDate(item.Birthday);
                                people = {
                                    Id: item.Id,
                                    username: item.UserName,
                                    userKana: item.UserKana,
                                    birthDaty: convertBirthday,
                                    Sex: sex,
                                    Age: age,
                                    FacilityName: item.FacilityName,
                                    StaffName: item.StaffName,
                                    LastPlayed: item.LatestPlay,
                                    Level: level,
                                    ChallengeScore: item.ChallengeScore,
                                    PhotoURL: item.PhotoURL,
                                    isUsed: !!item.LatestPlay,
                                    jpDay: item.LatestPlay ? this.common.getJpDay(item.LatestPlay) + 'にプレイ' : ''
                                };
                                this.imgList.push(people);
                                this.arraySearch.push(people);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
    * search function
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    UserListPage.prototype.searchTap = function () {
        var val = this.searchWord;
        if (val && val.trim() != '') {
            this.arraySearch = this.imgList.filter(function (item) {
                return (item.username.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.arraySearch = this.imgList;
        }
        if (this.arraySearch.length == 0) {
            this.present("", __WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].ERROR_MESSAGE_SEARCHBAR_USERLIST);
        }
    };
    UserListPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, check;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.common.writeToBehaviorLog(__WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].SCREEN_USERLIST_CODE, __WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].MSG_BEHAVIOR_BLOG); // write to behavior log
                        loading = this.loadingCtrl.create({
                            spinner: __WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].DOTS_TYPE,
                            content: __WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].REGISTER_LOADING_TEXT
                        });
                        loading.present();
                        return [4 /*yield*/, this.common.checkAccount()];
                    case 1:
                        check = _a.sent();
                        if (!check) return [3 /*break*/, 4];
                        // load content                                          
                        this.loadContent("", "", "1");
                        loading.dismiss();
                        // load combobox facilities
                        return [4 /*yield*/, this.loadFacilities()];
                    case 2:
                        // load combobox facilities
                        _a.sent();
                        // load combobox staff                               
                        return [4 /*yield*/, this.loadStaffsList()];
                    case 3:
                        // load combobox staff                               
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserListPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.events.subscribe(__WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].BACK_TO_USER_LIST, function () {
            _this.loadContent('', '', '1');
        });
    };
    UserListPage.prototype.ionViewWillUnload = function () {
        this.popover && this.popover.dismiss();
    };
    /**
    * present staff pop up
    *    param:
    *      -ev:event
    *    return:
    *      -N/A
   */
    UserListPage.prototype.presentPopoverStaff = function (ev) {
        var _this = this;
        this.common.writeToBehaviorLog(__WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].SCREEN_STAFF_CODE, __WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].MSG_BEHAVIOR_BLOG);
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_staff_popover_staff_popover__["a" /* StaffPopoverComponent */], { cbbStaffs: this.arrayStaffItem, itemSelect: this.idStaff });
        this.popover.present({
            ev: ev
        });
        this.popover.onDidDismiss(function (data) {
            if (data == "") {
                _this.labelStaff = __WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].TEXT_FACILITIES;
                _this.idStaff = '';
                _this.loadContent(_this.idFacilities, _this.idStaff, _this.idSort);
            }
            else {
                _this.labelStaff = data.StaffName; // set label staff base for current user choice
                _this.idStaff = data.Id; // send back id staff
                _this.loadContent(_this.idFacilities, _this.idStaff, _this.idSort); // reload content
            }
        });
    };
    /**
    * present facility pop up
    *    param:
    *      -ev:event
    *    return:
    *      -N/A
   */
    UserListPage.prototype.presentPopoverFacility = function (ev) {
        var _this = this;
        this.common.writeToBehaviorLog(__WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].SCREEN_FACILITIES_CODE, __WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].MSG_BEHAVIOR_BLOG);
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_facility_popover_facility_popover__["a" /* FacilityPopoverComponent */], { cbbFacilities: this.arrayItem, itemSelect: this.idFacilities });
        this.popover.present({
            ev: ev
        });
        this.popover.onDidDismiss(function (data) {
            if (data == "") {
                _this.labelFacilities = __WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].TEXT_FACILITIES;
                _this.idFacilities = '';
                _this.loadContent(_this.idFacilities, _this.idStaff, _this.idSort);
            }
            else {
                (data.FacilityName.length > 10) ? _this.labelFacilities = data.FacilityName.substr(0, 5) + '...' : _this.labelFacilities = data.FacilityName;
                _this.idFacilities = data.Id;
                _this.loadContent(_this.idFacilities, _this.idStaff, _this.idSort);
            }
        });
    };
    /**
    * present user sort pop up
    *    param:
    *      -ev:event
    *    return:
    *      -N/A
   */
    UserListPage.prototype.presentPopoverUserSort = function (ev) {
        var _this = this;
        this.common.writeToBehaviorLog(__WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].SCREEN_SORT_USER_CODE, __WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].MSG_BEHAVIOR_BLOG);
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_user_sorting_order_popover_user_sorting_order_popover__["a" /* UserSortingOrderPopoverComponent */], { itemSelect: this.idSort });
        this.popover.present({
            ev: ev
        });
        this.popover.onDidDismiss(function (data) {
            if (data == 1) {
                _this.labelIdSort = __WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].SORT_TEXT_USERLIST;
                _this.idBefore = data; // set text combobox sort = "新着順"
            }
            else if (data == 2) {
                _this.labelIdSort = __WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].TEXT_SORT2;
                _this.idBefore = data; // set text combobox sort = "人気順"
            }
            else if (data == 3) {
                _this.labelIdSort = __WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].TEXT_SORT3;
                _this.idBefore = data; // set text combobox sort = "人気順"
            }
            if (data == null) {
                data = _this.idBefore;
                if (data == 1) {
                    _this.labelIdSort = __WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].SORT_TEXT_USERLIST;
                    _this.idBefore = data; // set text combobox sort = "新着順"
                }
                else if (data == 2) {
                    _this.labelIdSort = __WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].TEXT_SORT2;
                    _this.idBefore = data; // set text combobox sort = "人気順"
                }
                else if (data == 3) {
                    _this.labelIdSort = __WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].TEXT_SORT3;
                    _this.idBefore = data; // set text combobox sort = "人気順"
                }
            }
            _this.idSort = data;
            _this.loadContent(_this.idFacilities, _this.idStaff, _this.idSort); // reload content
        });
    };
    /**
    * go to detail user
    *    param:
    *      -item:object
    *    return:
    *      -N/A
   */
    UserListPage.prototype.goToUserDetailPage = function (item) {
        this.callEvent.publish(__WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].EVENT_USER_DETAIL, item);
    };
    /**
    * go to noAH History Page
    *    param:
    *      -item:object
    *    return:
    *      -N/A
   */
    UserListPage.prototype.goToNoAHHistoryPage = function (item) {
        this.callEvent.publish(__WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].EVENT_NOAH_PLAYING, item);
    };
    /**
    * open specifying period screen
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    UserListPage.prototype.showUser = function () {
        var specifyingPeriod = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_Register_User_Register_User__["a" /* RegisterUserComponent */], {}, { enableBackdropDismiss: false });
        specifyingPeriod.present();
    };
    /**
    * function search
    *    param:
    *      -ev: any
    *    return:
    *      -N/A
   */
    UserListPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.arraySearch = this.imgList.filter(function (item) {
                return (item.username.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.arraySearch = this.imgList;
        }
        if (this.arraySearch.length == 0) {
            this.present("", __WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].ERROR_MESSAGE_SEARCHBAR_USERLIST);
        }
    };
    /**
    * present alert dialogue
    *    param:
    *      -title: string
           -subtitle: string
    *    return:
    *      -N/A
   */
    UserListPage.prototype.present = function (title, subTitle) {
        var vm = this;
        if (!vm.alertPresented) {
            vm.alertPresented = true;
            vm.alertController.create({
                title: title,
                subTitle: subTitle,
                buttons: [{
                        text: __WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].BUTTON_OK,
                        handler: function () {
                            vm.alertPresented = false;
                        }
                    }],
            }).present();
        }
    };
    /**
    * return Login
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    UserListPage.prototype.returnLogin = function () {
        this.callEvent.publish(__WEBPACK_IMPORTED_MODULE_9__app_constant__["a" /* constant */].EVENT_CHANGE_LOGIN_PAGE);
    };
    return UserListPage;
}());
UserListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-user-list',template:/*ion-inline-start:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/pages/user-list/user-list.html"*/'<ion-content no-padding no-bounce>\n\n  <ion-row class="content-header">\n\n    <ion-content no-bounce>\n\n      <ion-row class="header">\n\n        <ion-col>\n\n          <ion-row align-items-start>\n\n            <button ion-item (click)="presentPopoverUserSort($event)" class="custom-filter-button">{{labelIdSort}}<span class="cached-arrow"></span></button>\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-row align-items-start>\n\n            <button ion-item (click)="presentPopoverStaff($event)" class="custom-filter-button">{{labelStaff}}<span class="cached-arrow"></span></button>\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-row align-items-start>\n\n            <button ion-item (click)="presentPopoverFacility($event)" class="custom-filter-button">{{labelFacilities}}<span class="cached-arrow"></span></button>\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-toolbar>\n\n            <ion-input placeholder="検索" [(ngModel)]="searchWord" class="item-search-menu-center" (ionInput)="getItems($event)" [(ngModel)]="searchQuery"> </ion-input>\n\n            <ion-buttons right>\n\n              <button ion-button icon-only (click)="searchTap()">\n\n                  <ion-icon name="search"></ion-icon>\n\n              </button>\n\n            </ion-buttons>\n\n        </ion-toolbar>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-content>\n\n  </ion-row>\n\n  <ion-row class="content-content">\n\n    <ion-content>\n\n      <ion-list>\n\n        <!--First item-->\n\n        <ion-item class="item-list" *ngFor="let item of arraySearch">\n\n          <!--First item detail-->\n\n          <ion-row>\n\n            <ion-col col-2 class="margin-image">\n\n              <button class="user-detail-button" (click)="goToUserDetailPage(item.Id)">\n\n                  <img *ngIf="item.PhotoURL;else nonePhoto"  class="image-avatar" src="{{item.PhotoURL}}" />\n\n                  <ng-template #nonePhoto><div class="none-photo"><img src="assets/image/icon.png"/></div></ng-template>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n              <!--Title-->\n\n              <h2 class="h2-style">{{item.username}} ({{item.userKana}})</h2>\n\n              <!--Content-->\n\n              <div class="item-content">\n\n                <p class="item-content-devide">{{item.birthDaty}}（{{item.Age}}歳・{{item.Sex}}）</p>\n\n                <p class="item-content-devide">{{item.FacilityName}} </p>\n\n                <p class="item-content-devide">担当：{{item.StaffName}}</p>\n\n              </div>\n\n            </ion-col>\n\n\n\n            <ion-col col-2>\n\n              <!--Detail-->\n\n              <h2 class="h2-style-heart"></h2>\n\n              <!--Array of star-->\n\n              <div class="item-content">\n\n                <div class="item-title">\n\n                  <span *ngFor="let index of [1,2,3]">\n\n                        <ion-icon class="green-star-icon" *ngIf="(item.Level == index || item.Level > index)"  ios="ios-heart" md="md-heart"></ion-icon>\n\n                        <ion-icon class="green-star-icon" *ngIf="item.Level < index"  ios="ios-heart-outline" md="md-heart-outline"></ion-icon>\n\n                      </span>\n\n                </div>\n\n                <div class="item-content-sub">\n\n                  <!--Sub detail 1-->\n\n                  <p *ngIf="item.isUsed" class="item-sub-devide">{{item.LastPlayed | date:\'MM/dd\'}}{{item.jpDay}}</p>\n\n                  <p *ngIf="!item.isUsed" class="item-sub-devide">{{item.LastPlayed}}</p>\n\n                  <span class="item-sub-devide">最新スコア：<span *ngIf="item.ChallengeScore" class="item-sub-devide">{{item.ChallengeScore}}点</span></span>\n\n                </div>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <ion-row justify-content-center align-items-center class="full-row">\n\n                <button ion-button full class="custom-button-play" (click)="goToNoAHHistoryPage(item)">\n\n                    <img src="assets/image/touch.png" class="full-size"/>\n\n                  </button>\n\n              </ion-row>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-content>\n\n  </ion-row>\n\n  <ion-row class="content-footer">\n\n      <ion-content no-bounce>\n\n          <ion-row class="footer">\n\n              <ion-col class="footer-col"><a (click)="showUser()">ひとを新規登録</a></ion-col>\n\n          </ion-row>\n\n        </ion-content>\n\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/pages/user-list/user-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__app_common__["a" /* commonClass */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], UserListPage);

//# sourceMappingURL=user-list.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffPopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the StaffPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var StaffPopoverComponent = (function () {
    function StaffPopoverComponent(params, viewCtrl) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.searchQuery = '';
        this.callback = this.params.get('cbbStaffs');
        this.itemselect = this.params.get('itemSelect');
        this.arrayItem = this.callback.items;
    }
    /**
    * search function
    *    param:
    *      -ev:any
    *    return:
    *      -N/A
    */
    StaffPopoverComponent.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    /**
    * go to detail screen
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    StaffPopoverComponent.prototype.goToDetails = function () {
        var _this = this;
        var returnArray;
        this.arrayItem.forEach(function (element) {
            if (element.Id == _this.itemselect) {
                returnArray = element;
            }
        });
        this.viewCtrl.dismiss(returnArray);
    };
    /**
    * action cancel button
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    StaffPopoverComponent.prototype.cancelTap = function () {
        this.viewCtrl.dismiss();
    };
    return StaffPopoverComponent;
}());
StaffPopoverComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'staff-popover',template:/*ion-inline-start:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/components/staff-popover/staff-popover.html"*/'<!-- Generated template for the StaffPopoverComponent component -->\n\n<div class="custom-staff-popover">\n\n  <div class="bound-popover">\n\n\n\n    <ion-list radio-group [(ngModel)]="itemselect">\n\n      <ion-item class="title-item"(click)="cancelTap()">キャンセル</ion-item>\n\n      <!--Item-->\n\n      <div class="line-padding"></div>\n\n      <button ion-item style="padding-right: 16px !important;" *ngFor = "let item of arrayItem" (click)="goToDetails(item)" class ="borderBottom">\n\n        \n\n        <ion-avatar item-start>\n\n          <img *ngIf="item.PhotoURL;else nonePhoto"  src="{{item.PhotoURL}}" />\n\n          <ng-template #nonePhoto><div class="none-photo"><img src="assets/image/icon.png"/></div></ng-template>\n\n        </ion-avatar>\n\n\n\n        <ion-label class="full-row-size">\n\n          <div class="cached-padding-item"></div>\n\n          <div class="title">{{item.StaffName}} ({{item.StaffKana}})</div>\n\n        </ion-label>\n\n\n\n        <ion-radio (ionSelect)="goToDetails()" value="{{item.Id}}"></ion-radio>\n\n        <div class="line-padding"></div>\n\n      </button>\n\n    \n\n    </ion-list>\n\n  </div>\n\n</div>\n\n'/*ion-inline-end:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/components/staff-popover/staff-popover.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["p" /* ViewController */]])
], StaffPopoverComponent);

//# sourceMappingURL=staff-popover.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacilityPopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FacilityPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FacilityPopoverComponent = (function () {
    function FacilityPopoverComponent(params, viewCtrl) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.callback = this.params.get('cbbFacilities');
        this.itemselect = this.params.get('itemSelect');
        this.arrayItem = this.callback.items;
    }
    /**
    * go to detail screen
    *    param:
    *      -item: object
    *    return:
    *      -N/A
    */
    FacilityPopoverComponent.prototype.goToDetails = function () {
        var _this = this;
        var returnArray;
        this.arrayItem.forEach(function (element) {
            if (element.Id == _this.itemselect) {
                returnArray = element;
            }
        });
        this.viewCtrl.dismiss(returnArray);
    };
    /**
    * action cancel button
    *    param:
    *      -item: object
    *    return:
    *      -N/A
    */
    FacilityPopoverComponent.prototype.cancelTap = function () {
        this.viewCtrl.dismiss();
    };
    return FacilityPopoverComponent;
}());
FacilityPopoverComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'facility-popover',template:/*ion-inline-start:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/components/facility-popover/facility-popover.html"*/'<!-- Generated template for the FacilityPopoverComponent component -->\n<div class="custom-facility-popover">\n    <ion-list radio-group [(ngModel)]="itemselect">\n        <ion-item class="title-item" (click)="cancelTap()">キャンセル </ion-item>\n        <ion-item style="padding-right: 16px !important;" *ngFor = "let item of arrayItem">\n          <ion-label>{{item.FacilityName}}</ion-label>\n          <ion-radio (ionSelect)="goToDetails()" value="{{item.Id}}"></ion-radio>\n        </ion-item>\n      </ion-list>\n</div>\n'/*ion-inline-end:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/components/facility-popover/facility-popover.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["p" /* ViewController */]])
], FacilityPopoverComponent);

//# sourceMappingURL=facility-popover.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSortingOrderPopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UserSortingOrderPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var UserSortingOrderPopoverComponent = (function () {
    function UserSortingOrderPopoverComponent(viewCtrl, nav) {
        this.viewCtrl = viewCtrl;
        this.nav = nav;
        this.itemselect = this.nav.get("itemSelect");
        if (this.itemselect == 1) {
            this.itemselect = "五十音順";
        }
        else if (this.itemselect == 2) {
            this.itemselect = "スコア順";
        }
        else if (this.itemselect == 3) {
            this.itemselect = "プレイ日順";
        }
        this.arrayOfText = ["五十音順", "スコア順", "プレイ日順"];
    }
    /**
    * go to detail screen
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    UserSortingOrderPopoverComponent.prototype.goToDetails = function () {
        if (this.itemselect == "五十音順") {
            this.idText = 1;
        }
        else if (this.itemselect == "スコア順") {
            this.idText = 2;
        }
        else {
            this.idText = 3;
        }
        this.viewCtrl.dismiss(this.idText);
    };
    /**
    * action cancel button
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    UserSortingOrderPopoverComponent.prototype.cancelTap = function () {
        this.viewCtrl.dismiss(this.idText);
    };
    return UserSortingOrderPopoverComponent;
}());
UserSortingOrderPopoverComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user-sorting-order-popover',template:/*ion-inline-start:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/components/user-sorting-order-popover/user-sorting-order-popover.html"*/'<!-- Generated template for the UserSortingOrderPopoverComponent component -->\n<div class="custom-userSort-popover">\n  <ion-list radio-group [(ngModel)]="itemselect">\n    <ion-item class="title-item" (click)="cancelTap()">キャンセル </ion-item>\n    <ion-item style="padding-right: 16px !important;" *ngFor = "let item of arrayOfText">\n      <ion-label>{{item}}</ion-label>\n      <ion-radio (ionSelect)="goToDetails()" value="{{item}}"></ion-radio>\n    </ion-item>\n  </ion-list>\n</div>\n'/*ion-inline-end:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/components/user-sorting-order-popover/user-sorting-order-popover.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["k" /* NavParams */]])
], UserSortingOrderPopoverComponent);

//# sourceMappingURL=user-sorting-order-popover.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_contents_sorting_order_popover_contents_sorting_order_popover__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_filter_by_series_popover_filter_by_series_popover__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_filter_by_yamato_language_tag_popover_filter_by_yamato_language_tag_popover__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_jwt__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

















var PlayListPage = (function () {
    /* @constructor */
    function PlayListPage(common, navCtrl, http, navParams, popoverCtrl, events, file, sanitizer, alertController, loadingCtrl) {
        this.common = common;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.events = events;
        this.file = file;
        this.sanitizer = sanitizer;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_9_angular2_jwt__["JwtHelper"]();
        this.directoryFolder = '';
        this.directoryFolder = this.file.dataDirectory + 'contents/';
        this.imgList = [];
        this.tabPage = __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */];
        this.callEvent = events;
        // set default text
        this.labelIdSort = __WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].DEFAULT_COMBOBOX_SORT;
        this.labelTag1 = __WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].DEFAULT_COMBOBOX_TAG;
        this.labelSeries = __WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].DEFAULT_COMBOBOX_TAG;
        this.arrayTag = [];
        this.alertPresented = false;
        this.datePipe = new __WEBPACK_IMPORTED_MODULE_13__angular_common__["d" /* DatePipe */]('jp');
        // get token
        this.userObject = this.common.tokenObj;
    }
    /**
    * load combobox
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    PlayListPage.prototype.loadComboBox = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var tagData, seriesData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(__WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].API_TAGS_GET, this.userObject.options).toPromise()
                            .catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.common.showModalDialogConfirm(__WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].NWK_CK_065, false)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        tagData = _a.sent();
                        if (tagData) {
                            this.items = tagData.json().items;
                        }
                        return [4 /*yield*/, this.http.get(__WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].API_SERIES_GET, this.userObject.options).toPromise()
                                .catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.common.showModalDialogConfirm(__WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].NWK_CK_065, false)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        seriesData = _a.sent();
                        if (seriesData) {
                            this.series = seriesData.json().items;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
    * Get contents from api
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    PlayListPage.prototype.loadContent = function (TagId, Serries, idSort) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data, param, _loop_1, this_1, folderExist, thumbnailUrl, filePath, filename, extension, fullFilePath, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.userObject != null)) return [3 /*break*/, 5];
                        // if Series variable = null => set label series = "サウンドパネル"
                        if (this.idSeries == null) {
                            Serries = "";
                            this.labelSeries = __WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].DEFAULT_COMBOBOX_TAG;
                        }
                        // if Tag variable = null => set label series = "かなでる"
                        if (this.idTag1 == null) {
                            TagId = "";
                            this.labelTag1 = __WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].DEFAULT_COMBOBOX_TAG;
                        }
                        //  if Tag variable = null => set label series = "新着順"
                        if (this.idSort == null) {
                            idSort = 1;
                            this.labelIdSort = __WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].DEFAULT_COMBOBOX_SORT;
                        }
                        return [4 /*yield*/, this.http.get(__WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].API_CONTENTS_GET +
                                "?SortId=" + idSort +
                                "&RepresentativeFlg=" + this.userObject.userObject.RepresentativeFlg +
                                "&StaffId=" + this.userObject.userObject.Id +
                                "&SeriesId=" + Serries +
                                "&TagId=" + TagId, this.userObject.options).toPromise()
                                .catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.common.showModalDialogConfirm(__WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].NWK_CK_005, false)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        data = _a.sent();
                        if (!data) return [3 /*break*/, 5];
                        data = data.json();
                        this.imgList = [];
                        this.arraySearch = [];
                        param = this.datePipe.transform(Date.now(), 'hhmmss');
                        _loop_1 = function (i) {
                            var y, content, strTag;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (data.items[i].ContentCode.startsWith('NO')) {
                                            return [2 /*return*/, "continue"];
                                        }
                                        return [4 /*yield*/, this_1.common.checkExistFolder(this_1.directoryFolder + '/' + data.items[i].ContentCode + '/', data.items[i].ContentCode)];
                                    case 1:
                                        // Check content is already download and unzip or not
                                        folderExist = _a.sent();
                                        if (!folderExist) {
                                            return [2 /*return*/, "continue"];
                                        }
                                        // get thumbnail of content from folder download
                                        thumbnailUrl = null;
                                        for (y = 0; y < this_1.common.listFile.length; y++) {
                                            filePath = this_1.common.listFile[y].fullPath;
                                            filename = filePath.split('/').pop();
                                            extension = filename.split('.').pop();
                                            if (filename == 'title_img.png') {
                                                if (filePath.indexOf(data.items[i].ContentCode + '/' + data.items[i].ContentCode + '/' + filename) != -1) {
                                                    fullFilePath = this_1.file.dataDirectory.slice(0, -1) + filePath;
                                                    fullFilePath = fullFilePath.substr(7, fullFilePath.length);
                                                    thumbnailUrl = fullFilePath + '?currentTime=' + param;
                                                    break;
                                                }
                                            }
                                        }
                                        content = {
                                            Id: data.items[i].Id,
                                            ContentName: data.items[i].ContentName,
                                            ContentCode: data.items[i].ContentCode,
                                            CategoryId: data.items[i].CategoryId,
                                            CategoryName: data.items[i].CategoryName,
                                            seriesName: data.items[i].SeriesName,
                                            modified: data.items[i].Modified,
                                            excutionCount: data.items[i].ExecutionsCount,
                                            contentTag: data.items[i].contentstags,
                                            LastPlayed: data.items[i].LatestUse,
                                            Level: data.items[i].Level,
                                            thumbnailUrl: this_1.sanitizer.bypassSecurityTrustResourceUrl(thumbnailUrl),
                                            isUsed: true,
                                            jpDay: this_1.common.getJpDay(data.items[i].LatestUse) + 'に使用',
                                            shortcontentTag: ''
                                        };
                                        strTag = '';
                                        content.contentTag.forEach(function (element) {
                                            strTag += element.Tag + ', ';
                                        });
                                        if (strTag.length > 1)
                                            strTag = strTag.substring(0, strTag.length - 2);
                                        if (strTag.length > 15) {
                                            content.shortcontentTag = strTag.substring(0, 15) + '・・・';
                                        }
                                        content.contentTag = strTag;
                                        if (data.items[i].LatestUse === __WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].LAST_PLAYED_TEXT) {
                                            content.isUsed = false;
                                            content.LastPlayed = '未使用';
                                        }
                                        this_1.imgList.push(content);
                                        this_1.arraySearch.push(content);
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < data.items.length)) return [3 /*break*/, 5];
                        return [5 /*yield**/, _loop_1(i)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PlayListPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, check;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // write to behavior blog
                        this.common.writeToBehaviorLog(__WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].SCREEN_PLAYLIST_CODE, __WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].MSG_BEHAVIOR_BLOG);
                        loading = this.loadingCtrl.create({
                            spinner: __WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].DOTS_TYPE,
                            content: __WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].REGISTER_LOADING_TEXT
                        });
                        loading.present();
                        return [4 /*yield*/, this.common.checkAccount()];
                    case 1:
                        check = _a.sent();
                        if (!check) return [3 /*break*/, 4];
                        // load content with tag = null, series = null, sort filter = 1 
                        return [4 /*yield*/, this.loadContent('', '', 1)];
                    case 2:
                        // load content with tag = null, series = null, sort filter = 1 
                        _a.sent();
                        loading.dismiss();
                        return [4 /*yield*/, this.loadComboBox()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PlayListPage.prototype.ionViewWillUnload = function () {
        this.popover && this.popover.dismiss();
    };
    /**
    * Open sorting combobox
    *    param:
    *     ev:event
    *    return:
    *      -N/A
   */
    PlayListPage.prototype.presentPopoverUserSortingOrder = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // write to behavior blog
                this.common.writeToBehaviorLog(__WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].SCREEN_SORT_CONTENT_CODE, __WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].MSG_BEHAVIOR_BLOG);
                this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_contents_sorting_order_popover_contents_sorting_order_popover__["a" /* ContentsSortingOrderPopoverComponent */], { itemSelect: this.idSort });
                this.popover.present({
                    ev: ev
                });
                // when popup dimiss send id back
                this.popover.onDidDismiss(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (data == 1) {
                                    this.labelIdSort = __WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].LABEL_SORT1;
                                    // if id == 1 set labelIdSort  = "新着順"
                                    this.idBefore = data;
                                }
                                else if (data == 2) {
                                    this.labelIdSort = __WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].LABEL_SORT2;
                                    // if id == 2 set labelIdSort  = "人気順"
                                    this.idBefore = data;
                                }
                                else if (data == 3) {
                                    this.labelIdSort = __WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].LABEL_SORT3;
                                    // if id == 3 set labelIdSort  = "レベル順"
                                    this.idBefore = data;
                                }
                                if (data == null) {
                                    data = this.idBefore;
                                    if (data == 1) {
                                        // if id == 1                    
                                        this.labelIdSort = __WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].LABEL_SORT1;
                                        // set text combobox sort = "新着順"
                                        this.idBefore = data;
                                    }
                                    else if (data == 2) {
                                        // if id == 2                      
                                        this.labelIdSort = __WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].LABEL_SORT2;
                                        // set text combobox sort = "人気順"
                                        this.idBefore = data;
                                    }
                                    else if (data == 3) {
                                        // if id == 3 
                                        this.labelIdSort = __WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].LABEL_SORT3;
                                        // set text combobox sort = "人気順"
                                        this.idBefore = data;
                                    }
                                }
                                this.idSort = data;
                                return [4 /*yield*/, this.loadContent(this.idTag1, this.idSeries, this.idSort)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    /**
    * Open filter by series combobox
    *    param:
    *     ev:event
    *    return:
    *      -N/A
   */
    PlayListPage.prototype.presentPopoverFilterBySeries = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // write to behavior log
                this.common.writeToBehaviorLog(__WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].SCREEN_SERIES_CODE, __WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].MSG_BEHAVIOR_BLOG);
                // create pop up screen
                this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_filter_by_series_popover_filter_by_series_popover__["a" /* FilterBySeriesPopoverComponent */], { cbb: this.series, itemSelect: this.idSeries });
                this.popover.present({
                    ev: ev
                });
                // action when pop up dismiss
                this.popover.onDidDismiss(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(data == "")) return [3 /*break*/, 2];
                                this.labelSeries = __WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].DEFAULT_COMBOBOX_TAG;
                                this.idSeries = '';
                                return [4 /*yield*/, this.loadContent(this.idTag1, this.idSeries, this.idSort)];
                            case 1:
                                _a.sent();
                                return [3 /*break*/, 4];
                            case 2:
                                this.labelSeries = data.SeriesName;
                                this.idSeries = data.Id;
                                // load content base for user choice
                                return [4 /*yield*/, this.loadContent(this.idTag1, this.idSeries, this.idSort)];
                            case 3:
                                // load content base for user choice
                                _a.sent();
                                _a.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    /**
    * Open filter by language combobox
    *    param:
    *     ev:event
    *    return:
    *      -N/A
   */
    PlayListPage.prototype.presentPopoverFilterByLanguage = function (ev) {
        var _this = this;
        // write to behavior log
        this.common.writeToBehaviorLog(__WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].SCREEN_TAG_CODE, __WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].MSG_BEHAVIOR_BLOG);
        // create pop up screen
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_filter_by_yamato_language_tag_popover_filter_by_yamato_language_tag_popover__["a" /* FilterByYamatoLanguageTagPopoverComponent */], { cba: this.items, itemSelect: this.idTag1 });
        this.popover.present({
            ev: ev
        });
        // action when pop up dismiss
        this.popover.onDidDismiss(function (data) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data == "")) return [3 /*break*/, 2];
                        this.labelTag1 = __WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].DEFAULT_COMBOBOX_TAG;
                        this.idTag1 = '';
                        return [4 /*yield*/, this.loadContent(this.idTag1, this.idSeries, this.idSort)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        this.labelTag1 = data.Tag1;
                        this.idTag1 = data.Id;
                        // load content base for user choice
                        return [4 /*yield*/, this.loadContent(this.idTag1, this.idSeries, this.idSort)];
                    case 3:
                        // load content base for user choice
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    // pulish event for tab bar
    PlayListPage.prototype.contentsCommentaryPage = function (img) {
        this.callEvent.publish(__WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].EVENT_CONTENT_COMMENTARY, img, this.imgList);
    };
    /**
    * search function
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    PlayListPage.prototype.searchTap = function () {
        var val = this.searchWord;
        if (val && val.trim() != '') {
            this.arraySearch = this.imgList.filter(function (item) {
                // return to lower case string
                return (item.ContentName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.arraySearch = this.imgList;
        }
        if (this.arraySearch.length == 0) {
            this.present("", __WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].ERROR_MESSAGE_SEARCHBAR);
        }
    };
    /**
    * Open sorting combobox
    *    param:
    *     ev:event
    *    return:
    *      -N/A
   */
    PlayListPage.prototype.getItems = function (ev) {
        // get value in search textbox
        var val = ev.target.value;
        // delete white space and filter
        if (val && val.trim() != '') {
            this.arraySearch = this.imgList.filter(function (item) {
                // return to lower case string
                return (item.ContentName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.arraySearch = this.imgList;
        }
        if (this.arraySearch.length == 0) {
            this.present("", __WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].ERROR_MESSAGE_SEARCHBAR);
        }
    };
    /**
    * Open alert view
    *    param:
    *     title: string
    *     subTitle: string
    *    return:
    *      -N/A
   */
    PlayListPage.prototype.present = function (title, subTitle) {
        var vm = this;
        if (!vm.alertPresented) {
            vm.alertPresented = true;
            vm.alertController.create({
                title: title,
                subTitle: subTitle,
                buttons: [{
                        text: 'OK',
                        handler: function () {
                            vm.alertPresented = false;
                        }
                    }],
            }).present();
        }
    };
    /**
    * back to Login
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    PlayListPage.prototype.returnLogin = function () {
        // puslish event back to login
        this.callEvent.publish(__WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].EVENT_CHANGE_LOGIN_PAGE);
    };
    /**
    * show content Tag
    *    param:
    *      -id: any
    *    return:
    *      -N/A
   */
    PlayListPage.prototype.showcontentTag = function (id) {
        this.showid = id;
    };
    return PlayListPage;
}());
PlayListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-play-list',template:/*ion-inline-start:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/pages/play-list/play-list.html"*/'<!--\n\n  Generated template for the PlayListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content no-padding no-bounce>\n\n\n\n  <!--Header row-->\n\n\n\n  <ion-row class="content-header">\n\n    <ion-content no-bounce>\n\n      <ion-row class="header">\n\n        <ion-col>\n\n          <ion-row align-items-start>\n\n            <button ion-item (click)="presentPopoverUserSortingOrder($event)" class="custom-filter-button">{{labelIdSort}}\n\n              <span class="cached-arrow"></span>\n\n            </button>\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-row align-items-start>\n\n            <button ion-item (click)="presentPopoverFilterBySeries($event)" class="custom-filter-button">\n\n              <!--サウンドパネル-->{{labelSeries}}\n\n              <span class="cached-arrow"></span>\n\n            </button>\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-row align-items-start>\n\n            <button ion-item (click)="presentPopoverFilterByLanguage($event)" class="custom-filter-button">\n\n              <!--かなでる-->{{labelTag1}}\n\n              <span class="cached-arrow"></span>\n\n            </button>\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-toolbar>\n\n            <ion-input placeholder="検索" [(ngModel)]="searchWord" class="item-search-menu-center" (ionInput)="getItems($event)" [(ngModel)]="searchQuery">\n\n            </ion-input>\n\n            <ion-buttons right>\n\n              <button ion-button icon-only (click)="searchTap()">\n\n                <ion-icon name="search"></ion-icon>\n\n              </button>\n\n            </ion-buttons>\n\n          </ion-toolbar>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-content>\n\n  </ion-row>\n\n\n\n  <!--Cached line-->\n\n\n\n  <!--Content row-->\n\n  <ion-row class="content-content">\n\n    <ion-content>\n\n      <ion-list>\n\n\n\n        <!--First item-->\n\n        <ion-item class="item-list" *ngFor="let img of arraySearch">\n\n          <!--First item detail-->\n\n          <ion-row class="custom-row">\n\n            <ion-col col-3 class="margin-image">\n\n              <!--Image-->\n\n              <img class="image-avatar" [src]="img.thumbnailUrl" (click)="contentsCommentaryPage(img)" />\n\n             \n\n            </ion-col>\n\n            <ion-col col-5 style="display: inline-grid;">\n\n              <!--Title-->\n\n              <div class="item-title">\n\n                <h2 class="h2-style">\n\n                  <b>{{img.ContentName}}</b>\n\n                </h2>\n\n              </div>\n\n              <!--Content-->\n\n              <div class="item-content">\n\n                <p class="item-content-devide">{{img.CategoryName}}</p>\n\n                <p class="item-content-devide-2">{{img.seriesName}}</p>\n\n                <p *ngIf="img.shortcontentTag && showid != img.Id;else contentTag" (tap)="showcontentTag(img.Id)" class="item-content-devide-special">\n\n                  {{img.shortcontentTag}}\n\n                </p>\n\n                <ng-template #contentTag>\n\n                  <p class="item-content-devide-special" text-wrap>{{img.contentTag}}</p>\n\n                </ng-template>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n              <!--Detail-->\n\n              <!--Array of star-->\n\n              <div class="item-title">\n\n                <span *ngFor="let index of [1,2,3]">\n\n                  <ion-icon *ngIf="img.Level == index || img.Level > index " ios="ios-star" md="md-star"></ion-icon>\n\n                  <ion-icon *ngIf="img.Level < index" ios="ios-star-outline" md="md-star-outline"></ion-icon>\n\n                </span>\n\n              </div>\n\n              <!--Sub detail 1-->\n\n              <div class="item-content">\n\n                <p *ngIf="img.isUsed" class="item-content-devide">{{img.LastPlayed | date:\'MM/dd\'}}{{img.jpDay}}</p>\n\n                <p *ngIf="!img.isUsed" class="item-content-devide">{{img.LastPlayed}}</p>\n\n                <p class="item-content-devide">全国プレイ数：{{img.excutionCount}}</p>\n\n                <p class="item-content-devide">{{img.modified|date:\'yyyy/MM/dd\'}} 更新</p>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-content>\n\n  </ion-row>\n\n  <ion-row class="content-footer">\n\n    <ion-content no-bounce>\n\n      <ion-row class="footer"></ion-row>\n\n    </ion-content>\n\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/pages/play-list/play-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__app_common__["a" /* commonClass */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["c" /* DomSanitizer */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], PlayListPage);

//# sourceMappingURL=play-list.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentsSortingOrderPopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContentsSortingOrderPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ContentsSortingOrderPopoverComponent = (function () {
    function ContentsSortingOrderPopoverComponent(viewCtrl, nav) {
        this.viewCtrl = viewCtrl;
        this.nav = nav;
        this.itemselect = this.nav.get("itemSelect");
        if (this.itemselect == 1) {
            this.itemselect = "新着順";
        }
        else if (this.itemselect == 2) {
            this.itemselect = "人気順";
        }
        else if (this.itemselect == 3) {
            this.itemselect = "レベル順";
        }
        else {
            this.itemselect = "";
        }
        this.arrayOfText = ["新着順", "人気順", "レベル順"];
    }
    /**
    * go to details screen
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    ContentsSortingOrderPopoverComponent.prototype.goToDetails = function () {
        if (this.itemselect == "新着順") {
            this.idText = 1;
        }
        else if (this.itemselect == "人気順") {
            this.idText = 2;
        }
        else {
            this.idText = 3;
        }
        this.viewCtrl.dismiss(this.idText);
    };
    /**
    * cancel button action
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    ContentsSortingOrderPopoverComponent.prototype.cancelTap = function () {
        this.viewCtrl.dismiss();
    };
    return ContentsSortingOrderPopoverComponent;
}());
ContentsSortingOrderPopoverComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'contents-sorting-order-popover',template:/*ion-inline-start:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/components/contents-sorting-order-popover/contents-sorting-order-popover.html"*/'<!-- Generated template for the ContentsSortingOrderPopoverComponent component -->\n\n<div class="custom-userSortContent-popover">\n\n    <ion-list radio-group [(ngModel)]="itemselect">\n\n        <ion-item class="title-item" (click)="cancelTap()">キャンセル </ion-item>\n\n        <ion-item style="padding-right: 16px !important;" *ngFor = "let item of arrayOfText">\n\n          <ion-label>{{item}}</ion-label>\n\n          <ion-radio (ionSelect)="goToDetails()" value="{{item}}"></ion-radio>\n\n        </ion-item>\n\n      </ion-list>\n\n</div>\n\n '/*ion-inline-end:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/components/contents-sorting-order-popover/contents-sorting-order-popover.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["k" /* NavParams */]])
], ContentsSortingOrderPopoverComponent);

//# sourceMappingURL=contents-sorting-order-popover.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterBySeriesPopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FilterBySeriesPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FilterBySeriesPopoverComponent = (function () {
    function FilterBySeriesPopoverComponent(params, viewCtrl) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.callback = this.params.get('cbb');
        this.itemselect = this.params.get('itemSelect');
    }
    /**
    * go to detail screen
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    FilterBySeriesPopoverComponent.prototype.goToDetails = function () {
        var _this = this;
        var returnArray;
        this.callback.forEach(function (element) {
            if (element.Id == _this.itemselect) {
                returnArray = element;
            }
        });
        this.viewCtrl.dismiss(returnArray);
    };
    /**
    * action cancel button
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    FilterBySeriesPopoverComponent.prototype.cancelTap = function () {
        this.viewCtrl.dismiss();
    };
    return FilterBySeriesPopoverComponent;
}());
FilterBySeriesPopoverComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'filter-by-series-popover',template:/*ion-inline-start:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/components/filter-by-series-popover/filter-by-series-popover.html"*/'<!-- Generated template for the FilterBySeriesPopoverComponent component -->\n\n<div class="custom-seiresFilter-popover">\n\n  <ion-list radio-group [(ngModel)]="itemselect">\n\n    <ion-item class="title-item" (click)="cancelTap()">キャンセル </ion-item>\n\n    <ion-item no-lines style="padding-right: 16px !important;" *ngFor = "let item of callback">\n\n      <ion-label>{{item.SeriesName}}</ion-label>\n\n      <ion-radio (ionSelect)="goToDetails()" value="{{item.Id}}"></ion-radio>\n\n    </ion-item>\n\n  </ion-list>\n\n</div>\n\n'/*ion-inline-end:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/components/filter-by-series-popover/filter-by-series-popover.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["p" /* ViewController */]])
], FilterBySeriesPopoverComponent);

//# sourceMappingURL=filter-by-series-popover.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterByYamatoLanguageTagPopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FilterByYamatoLanguageTagPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FilterByYamatoLanguageTagPopoverComponent = (function () {
    function FilterByYamatoLanguageTagPopoverComponent(params, viewCtrl) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        console.log('Hello FilterByYamatoLanguageTagPopoverComponent Component');
        this.callbackTags = this.params.get('cba');
        this.itemselect = this.params.get('itemSelect');
    }
    /**
    * go to detail screen
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    FilterByYamatoLanguageTagPopoverComponent.prototype.goToDetails = function () {
        var _this = this;
        var returnArray;
        this.callbackTags.forEach(function (element) {
            if (element.Id == _this.itemselect) {
                returnArray = element;
            }
        });
        this.viewCtrl.dismiss(returnArray);
    };
    /**
    * action cancel button
    *    param:
    *      -N/A
    *    return:
    *      -N/A
    */
    FilterByYamatoLanguageTagPopoverComponent.prototype.cancelTap = function () {
        this.viewCtrl.dismiss();
    };
    return FilterByYamatoLanguageTagPopoverComponent;
}());
FilterByYamatoLanguageTagPopoverComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'filter-by-yamato-language-tag-popover',template:/*ion-inline-start:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/components/filter-by-yamato-language-tag-popover/filter-by-yamato-language-tag-popover.html"*/'<!-- Generated template for the FilterByYamatoLanguageTagPopoverComponent component -->\n\n<div class="custom-languageFilter-popover">\n\n  <ion-list radio-group [(ngModel)]="itemselect">\n\n    <ion-item class="title-item" (click)="cancelTap()">キャンセル </ion-item>\n\n    <ion-item style="padding-right: 16px !important;" *ngFor = "let item of callbackTags">\n\n      <ion-label>{{item.Tag1}}</ion-label>\n\n      <ion-radio (ionSelect)="goToDetails()" value="{{item.Id}}"></ion-radio>\n\n    </ion-item>\n\n  </ion-list>\n\n</div>\n\n'/*ion-inline-end:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/components/filter-by-yamato-language-tag-popover/filter-by-yamato-language-tag-popover.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["p" /* ViewController */]])
], FilterByYamatoLanguageTagPopoverComponent);

//# sourceMappingURL=filter-by-yamato-language-tag-popover.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatModePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__walkthrough_walkthrough__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_specify_period_popover_specify_period_popover__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_zip__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};















/**
 * Generated class for the ChatModePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatModePage = (function () {
    /**
     * load all Notices
     *    param:
     *      -events
     *      -http
     *      -navCtrl
     *      -nativeStorage
     *      -popoverCtrl
     *      -navParams
     *      -modalCtrl
     *      -common
     *    return:
     *      -N/A
    */
    function ChatModePage(events, http, navCtrl, popoverCtrl, navParams, modalCtrl, common, transfer, file, loadingCtrl, zip, alertController) {
        var _this = this;
        this.events = events;
        this.http = http;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.common = common;
        this.transfer = transfer;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
        this.zip = zip;
        this.alertController = alertController;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["JwtHelper"]();
        this.initDate = new Date(); // Current date time of system
        this.isFirstTime = false; // If First time of start app flag      
        this.messageThanks = __WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].MSG_THANKS_INSTALL; // The Content of message thanks for install
        this.fileTransfer = this.transfer.create();
        this.searchValue = '';
        // Set default value for token object
        this.userObject = { options: null, userObject: null };
        this.callEvent = events;
        this.startDate = common.startDate;
        this.endDate = common.endDate;
        events.subscribe(__WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].EVENT_LOAD_NOTICES, function (newStartDate, newEndDate) {
            _this.endDate = newEndDate;
            _this.startDate = newStartDate;
            common.startDate = newStartDate;
            common.endDate = newEndDate;
            _this.loadAllNotices(newStartDate, newEndDate);
        });
    }
    /**
     * load all Notices
     *    param:
     *      -newStartDate:  start date for get all message
     *      -newEndDate:  end date for get all message
     *    return:
     *      -N/A
    */
    ChatModePage.prototype.loadAllNotices = function (startDate, endDate) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.searchValue = "";
                        if (!(this.userObject != null)) return [3 /*break*/, 2];
                        // Get Notice from api
                        _a = this;
                        return [4 /*yield*/, this.http.get(__WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].API_NOTICES_GET +
                                "?starttime=" + this.common.formatDate(this.startDate) +
                                "&endtime=" + this.common.formatDate(this.endDate) +
                                "&RepresentativeFlg=" + this.userObject.userObject.RepresentativeFlg, this.userObject.options).toPromise()
                                .catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            this.loading.dismiss();
                                            return [4 /*yield*/, this.common.showModalDialogConfirm(__WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].NWK_CK_005, false)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        // Get Notice from api
                        _a.noticesList = _b.sent();
                        if (this.noticesList) {
                            this.noticesList = this.noticesList.json().items;
                            // Sort array
                            this.noticesList = this.noticesList.sort(function (a, b) {
                                return Date.parse(a.Modified) - Date.parse(b.Modified);
                            });
                        }
                        if (this.isFirstTime) {
                            if (this.common.formatDate(this.initDate) >= this.common.formatDate(this.startDate)
                                && this.common.formatDate(this.initDate) <= this.common.formatDate(this.endDate)) {
                                this.noticesList.push({ Created: new Date(), Modified: new Date(), Notice: __WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].MSG_THANKS_INSTALL });
                            }
                        }
                        if (this.common.accountRemainingDays != null) {
                            if (this.common.formatDate(this.initDate) >= this.common.formatDate(this.startDate)
                                && this.common.formatDate(this.initDate) <= this.common.formatDate(this.endDate)) {
                                this.noticesList.push({ Created: new Date(), Modified: new Date(), Notice: __WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].MSG_REGISTRATION_REQUEST.replace('（残日数）', String(this.common.accountRemainingDays)) });
                            }
                        }
                        this.arraySearch = this.noticesList;
                        if (this.arraySearch.length == 0) {
                            this.loading.dismiss();
                            this.common.showModalDialogConfirm(__WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].NWK_CK_003, false);
                        }
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Page load event
     *    param:
     *      -N/A
     *    return:
     *      -N/A
    */
    ChatModePage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var check, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.userObject = this.common.tokenObj;
                        this.common.writeToBehaviorLog(__WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].SCREEN_CHATMODE_CODE, __WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].MSG_BEHAVIOR_BLOG);
                        this.loading = this.loadingCtrl.create({
                            spinner: __WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].DOTS_TYPE,
                            content: __WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].REGISTER_LOADING_TEXT
                        });
                        this.loading.present();
                        return [4 /*yield*/, this.common.checkAccount()];
                    case 1:
                        check = _b.sent();
                        if (!check) return [3 /*break*/, 5];
                        _a = this;
                        return [4 /*yield*/, this.common.checkIsFirstTime()];
                    case 2:
                        _a.isFirstTime = _b.sent();
                        if (this.isFirstTime) {
                            this.common.saveValueLocalStorage(__WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].IS_FIRST_TIME, true);
                        }
                        return [4 /*yield*/, this.loadAllNotices(this.startDate, this.endDate)];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.proccessDownloadContents()];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        this.loading.dismiss();
                        _b.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get contents from api
     *    param:
     *      -N/A
     *    return:
     *      -N/A
    */
    ChatModePage.prototype.getContents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var arrayContents;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        arrayContents = null;
                        if (!(this.userObject != null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.http.get(__WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].API_CONTENTS_GET +
                                "?SortId=1&RepresentativeFlg=" + this.userObject.userObject.RepresentativeFlg + "&StaffId=" + this.userObject.userObject.Id, this.userObject.options).toPromise()
                                .catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            this.loading.dismiss();
                                            return [4 /*yield*/, this.common.showModalDialogConfirm(__WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].NWK_CK_005, false)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/, arrayContents];
                                    }
                                });
                            }); })];
                    case 1:
                        arrayContents = _a.sent();
                        if (arrayContents) {
                            arrayContents = arrayContents.json().items;
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, arrayContents];
                }
            });
        });
    };
    /**
    * Proccess of downloading file zip
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    ChatModePage.prototype.proccessDownloadContents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isShowDialog, resultDownload, countFileError, confirm, downloading, contentsList, storageDownloadList, i, y, index, directoryFolder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isShowDialog = false;
                        resultDownload = false;
                        countFileError = 0;
                        downloading = this.loadingCtrl.create({
                            spinner: __WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].DOTS_TYPE,
                            content: __WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].MEASAGE_WAIT
                        });
                        return [4 /*yield*/, this.getContents()];
                    case 1:
                        contentsList = _a.sent();
                        this.loading.dismiss();
                        if (contentsList == null) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.common.loadValueLocalStorage(__WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].DOWNLOAD_CONTENT_HISTORY)];
                    case 2:
                        storageDownloadList = _a.sent();
                        if (!(storageDownloadList == null)) return [3 /*break*/, 8];
                        storageDownloadList = [];
                        return [4 /*yield*/, this.common.showModalDialogAsk(__WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].NWK_CK_063)];
                    case 3:
                        confirm = _a.sent();
                        isShowDialog = true;
                        if (confirm != true) {
                            return [2 /*return*/];
                        }
                        downloading.present();
                        i = 0;
                        _a.label = 4;
                    case 4:
                        if (!(i < contentsList.length)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.downLoadContents(contentsList[i])];
                    case 5:
                        resultDownload = _a.sent();
                        if (resultDownload) {
                            storageDownloadList.push({ contentId: contentsList[i].Id, updateDate: contentsList[i].Modified, countUpdate: 0 });
                        }
                        else {
                            countFileError = countFileError + 1;
                        }
                        _a.label = 6;
                    case 6:
                        i++;
                        return [3 /*break*/, 4];
                    case 7: return [3 /*break*/, 18];
                    case 8:
                        y = 0;
                        _a.label = 9;
                    case 9:
                        if (!(y < contentsList.length)) return [3 /*break*/, 18];
                        index = this.common.findWithAttr(storageDownloadList, __WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].CONTENT_ID_TEXT, contentsList[y].Id);
                        if (!(index == -1)) return [3 /*break*/, 13];
                        if (!(isShowDialog == false)) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.common.showModalDialogAsk(__WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].NWK_CK_063)];
                    case 10:
                        confirm = _a.sent();
                        if (confirm != true) {
                            return [2 /*return*/];
                        }
                        else {
                            isShowDialog = true;
                            downloading.present();
                        }
                        _a.label = 11;
                    case 11: return [4 /*yield*/, this.downLoadContents(contentsList[y])];
                    case 12:
                        resultDownload = _a.sent();
                        if (resultDownload) {
                            storageDownloadList.push({ contentId: contentsList[y].Id, updateDate: contentsList[y].Modified, countUpdate: 0 });
                        }
                        else {
                            countFileError = countFileError + 1;
                        }
                        return [3 /*break*/, 17];
                    case 13:
                        if (!(contentsList[y].Modified != storageDownloadList[index].updateDate)) return [3 /*break*/, 17];
                        if (!(isShowDialog == false)) return [3 /*break*/, 15];
                        return [4 /*yield*/, this.common.showModalDialogAsk(__WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].NWK_CK_063)];
                    case 14:
                        confirm = _a.sent();
                        if (confirm != true) {
                            return [2 /*return*/];
                        }
                        else {
                            isShowDialog = true;
                            downloading.present();
                        }
                        _a.label = 15;
                    case 15: return [4 /*yield*/, this.downLoadContents(contentsList[y])];
                    case 16:
                        resultDownload = _a.sent();
                        if (resultDownload) {
                            storageDownloadList[index].updateDate = contentsList[y].Modified;
                            storageDownloadList[index].countUpdate = storageDownloadList[index].countUpdate + 1;
                        }
                        else {
                            countFileError = countFileError + 1;
                        }
                        _a.label = 17;
                    case 17:
                        y++;
                        return [3 /*break*/, 9];
                    case 18: return [4 /*yield*/, this.common.saveValueLocalStorage(__WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].DOWNLOAD_CONTENT_HISTORY, storageDownloadList)];
                    case 19:
                        _a.sent();
                        if (!(isShowDialog == true)) return [3 /*break*/, 21];
                        // Get all content file.
                        this.common.listFile = [];
                        directoryFolder = this.file.dataDirectory + 'contents/';
                        return [4 /*yield*/, this.common.getAllFile(directoryFolder)];
                    case 20:
                        _a.sent();
                        downloading.dismiss();
                        if (countFileError > 0) {
                            this.common.showModalDialogConfirm(__WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].NWK_CK_004, true);
                        }
                        else {
                            this.common.showModalDialogConfirm(__WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].NWK_CK_064, true);
                        }
                        _a.label = 21;
                    case 21: return [2 /*return*/];
                }
            });
        });
    };
    ChatModePage.prototype.searchTap = function () {
        var val = this.searchWord;
        if (val && val.trim() != '') {
            this.arraySearch = this.noticesList.filter(function (item) {
                return (item.Notice.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.arraySearch = this.noticesList;
        }
        if (this.arraySearch.length == 0) {
            this.present("", __WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].NWK_CK_003);
        }
    };
    /**
     * Search Notice by keyword
     *    param:
     *      -ev: event.
     *    return:
     *      -N/A
    */
    ChatModePage.prototype.searchItem = function (ev) {
        var val = ev._value;
        if (val && val.trim() != '') {
            this.arraySearch = this.noticesList.filter(function (item) {
                return (item.Notice.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.arraySearch = this.noticesList;
        }
        if (this.arraySearch.length == 0) {
            this.present("", __WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].NWK_CK_003);
        }
    };
    ChatModePage.prototype.present = function (title, subTitle) {
        // only one alert call when tap japanese - add by Dat - need to rewrite in common class
        var vm = this;
        if (!vm.alertPresented) {
            vm.alertPresented = true;
            vm.alertController.create({
                title: title,
                subTitle: subTitle,
                buttons: [{
                        text: __WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].BUTTON_OK,
                        handler: function () {
                            vm.alertPresented = false;
                        }
                    }],
            }).present();
        }
    };
    /**
     * Show introduce screen
     *    param:
     *      -N/A
     *    return:
     *      -N/A
    */
    ChatModePage.prototype.showWalkthroughModal = function () {
        var walkthroughPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__walkthrough_walkthrough__["a" /* WalkThroughPage */], { isFirstTimeStart: false });
        walkthroughPage.present();
    };
    /**
     * Show calendar
     *    param:
     *      -ev: event
     *    return:
     *      -N/A
    */
    ChatModePage.prototype.showSpecifyingPeriod = function (ev) {
        this.common.writeToBehaviorLog(__WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].SCREEN_SPECIFYING_PERIOD_CODE, __WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].MSG_BEHAVIOR_BLOG);
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_specify_period_popover_specify_period_popover__["a" /* SpecifyPeriodPopoverComponent */], { startDate: this.startDate, endDate: this.endDate, eventName: __WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].EVENT_LOAD_NOTICES });
        this.popover.present({ ev: ev });
    };
    /**
     * Page leave event
     *    param:
     *      -N/A
     *    return:
     *      -N/A
    */
    ChatModePage.prototype.ionViewWillLeave = function () {
        this.events.unsubscribe(__WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].EVENT_LOAD_NOTICES);
    };
    /**
     * Download file zip
     *    param:
     *      -fileUrl: link of download file
     *    return:
     *      -N/A
    */
    ChatModePage.prototype.downLoadContents = function (content) {
        return __awaiter(this, void 0, void 0, function () {
            var result, data, url, fileName, forderName, folderExist, subFolderExist, downloadFolder, downloadUrl, unZipResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = false;
                        if (content.FileUrl == '') {
                            return [2 /*return*/, result];
                        }
                        fileName = content.ContentCode + __WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].ZIP_EXTENSION;
                        forderName = content.ContentCode;
                        return [4 /*yield*/, this.common.checkExistFolder(this.file.dataDirectory, 'contents')];
                    case 1:
                        folderExist = _a.sent();
                        if (!folderExist) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.common.checkExistFolder(this.file.dataDirectory + 'contents/', forderName)];
                    case 2:
                        subFolderExist = _a.sent();
                        if (!subFolderExist) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.file.removeRecursively(this.file.dataDirectory + __WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].CONTENT_TEXT, forderName).catch(function (err) {
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [4 /*yield*/, this.file.createDir(this.file.dataDirectory + __WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].CONTENT_TEXT, forderName, true).catch(function (err) {
                        })];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 6: return [4 /*yield*/, this.file.createDir(this.file.dataDirectory, __WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].CONTENT_TEXT, true).catch(function (err) {
                        })];
                    case 7:
                        _a.sent();
                        ;
                        return [4 /*yield*/, this.file.createDir(this.file.dataDirectory + __WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].CONTENT_TEXT, forderName, true).catch(function (err) {
                            })];
                    case 8:
                        _a.sent();
                        ;
                        _a.label = 9;
                    case 9:
                        downloadFolder = this.file.dataDirectory + __WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].CONTENT_TEXT + forderName;
                        downloadUrl = downloadFolder + '/' + fileName;
                        url = this.common.encodeURINonASCII(content.FileUrl);
                        return [4 /*yield*/, this.fileTransfer.download(url, downloadUrl).catch(function (error) {
                                result = false;
                            })];
                    case 10:
                        data = _a.sent();
                        if (!data) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.unzipFile(downloadUrl)];
                    case 11:
                        unZipResult = _a.sent();
                        if (unZipResult) {
                            result = true;
                        }
                        else {
                            result = false;
                        }
                        _a.label = 12;
                    case 12: return [2 /*return*/, result];
                }
            });
        });
    };
    /**
    * unzip file
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    ChatModePage.prototype.unzipFile = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var result, folderPath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = true;
                        folderPath = url.substr(0, url.lastIndexOf('/')) + '/';
                        return [4 /*yield*/, this.zip.unzip(url, folderPath).catch(function (error) {
                                result = false;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
    * log out function
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    ChatModePage.prototype.logout = function () {
        this.events.publish(__WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* constant */].EVENT_CHANGE_LOGIN_PAGE);
    };
    return ChatModePage;
}());
ChatModePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-chat-mode',template:/*ion-inline-start:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/pages/chat-mode/chat-mode.html"*/'<!--\n\n  Generated template for the ChatModePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content no-padding no-bounce>\n\n  <!--Header row-->\n\n  <ion-row class="content-header">\n\n    <ion-content no-bounce>\n\n      <ion-row class="header">\n\n        <ion-col col-5>\n\n          <ion-row align-items-start>\n\n            <button (click)="showSpecifyingPeriod($event)" class="custom-filter-button">\n\n              <span style="vertical-align: middle; font-size:14px; font-family: Hiragino Sans;color:#2D2D2D;">{{startDate|date:\'yyyy/MM/dd\'}} <br>～ {{endDate|date:\'yyyy/MM/dd\'}}\n\n              <img style="vertical-align: middle" src="assets/icon/iconCalender.png"></span>\n\n          </button>\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col col-3 offset-4>\n\n          <ion-toolbar>\n\n            <ion-input placeholder="検索" [(ngModel)]="searchWord" class="item-search-menu-center" (ionInput)="searchItem($event)" [(ngModel)]="searchValue"> </ion-input>\n\n            <ion-buttons right>\n\n              <button ion-button icon-only (click)="searchTap()">\n\n                  <ion-icon name="search"></ion-icon>\n\n              </button>\n\n            </ion-buttons>\n\n        </ion-toolbar>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-content>\n\n  </ion-row>\n\n  <!--Content row-->\n\n  <ion-row class="content-content">\n\n    <ion-content>\n\n      <ion-list>\n\n        <!--First item-->\n\n        <ion-item class="item-list">         \n\n          <!-- All Notices content -->\n\n          <div *ngFor="let item of arraySearch; let i = index;">\n\n            <ion-title class="date-time-style" *ngIf="i == 0 || (i != 0 && common.formatDate(arraySearch[i].Modified) != common.formatDate(arraySearch[i-1].Modified))">\n\n              {{common.formatDate2Jp(item.Modified,false)}}\n\n            </ion-title>\n\n            <!--Content-->\n\n            <ion-row class="item-content">\n\n              <ion-col col-1>\n\n                <div class="circle-icon">\n\n                  <img src="assets/image/avatar_chatmode.png" />\n\n                </div>\n\n              </ion-col>\n\n              <ion-col col-9>\n\n                <ion-row>\n\n                  <ion-col>\n\n                    <p class="item-content-devide"></p>\n\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <ion-col>\n\n                    <p class="talkbubble" [innerHTML]="item.Notice">\n\n                    </p>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-col>\n\n              <ion-col col-auto></ion-col>\n\n              <ion-col col-1>\n\n                <div class="item-content-devide-time">\n\n                  {{item.Modified | date:\'HH:mm\'}}\n\n                </div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </div>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n    </ion-content>\n\n  </ion-row>\n\n  <ion-row class="content-footer">\n\n      <ion-content no-bounce>\n\n          <ion-row class="footer">\n\n              <ion-col text-right>\n\n                  <button ion-button (click)="showWalkthroughModal()" >使い方をみる</button>\n\n                  <button ion-button (click)="logout()">ログアウト</button>\n\n                </ion-col>\n\n          </ion-row>\n\n        </ion-content>\n\n  </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/pages/chat-mode/chat-mode.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_6__app_common__["a" /* commonClass */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_zip__["a" /* Zip */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
], ChatModePage);

//# sourceMappingURL=chat-mode.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_constant__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = (function () {
    function SettingPage(viewCtr, iab, events, common) {
        this.viewCtr = viewCtr;
        this.iab = iab;
        this.events = events;
        this.common = common;
        this.callEvent = events;
    }
    /**
    * open staff website
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    SettingPage.prototype.openStaff = function () {
        this.iab.create(__WEBPACK_IMPORTED_MODULE_4__app_constant__["a" /* constant */].STAFF_LINK);
    };
    /**
    * load Facilities website
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    SettingPage.prototype.openFacilities = function () {
        this.iab.create(__WEBPACK_IMPORTED_MODULE_4__app_constant__["a" /* constant */].FACILITY_LINK);
    };
    SettingPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.common.writeToBehaviorLog(__WEBPACK_IMPORTED_MODULE_4__app_constant__["a" /* constant */].SCREEN_SETTING_CODE, __WEBPACK_IMPORTED_MODULE_4__app_constant__["a" /* constant */].MSG_BEHAVIOR_BLOG)];
                    case 1:
                        _a.sent();
                        // handle event back button to chat mode screen
                        this.navBar.backButtonClick = function (e) {
                            _this.viewCtr.dismiss();
                            _this.callEvent.publish('chatPage');
                        };
                        return [2 /*return*/];
                }
            });
        });
    };
    return SettingPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Navbar */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Navbar */])
], SettingPage.prototype, "navBar", void 0);
SettingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-setting',template:/*ion-inline-start:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/pages/setting/setting.html"*/'<!--\n\n  Generated template for the SettingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header style="background-color: #979797">\n\n  <ion-navbar transparent>\n\n    <ion-title>設定</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding no-bounce>\n\n  <div style="margin-top:3%">\n\n    <ion-row>\n\n      <ion-col offset-1 col-7>\n\n          <button ion-button style="width:60%;background-color:#0095d9" (click)="openStaff()">スタッフ情報設定</button>\n\n          <br/>\n\n          <ion-row>\n\n            <ion-col offset-1>\n\n              <p>脳若ケアを使うスタッフの新規登録・変更・削除を行います。<br/>\n\n              （ボタンをタップするとWebサイトに移動します）</p>\n\n            </ion-col>\n\n          </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n    <br/>\n\n    <br/>\n\n    <ion-row>\n\n      <ion-col offset-1 col-7>\n\n          <button ion-button style="width:60%;background-color:#0095d9" (click)="openFacilities()">拠点（施設）情報設定</button>\n\n          <br/>\n\n          <ion-row>\n\n            <ion-col offset-1>\n\n              <p>利用者の所属する拠点（施設）の新規登録・変更・削除を行います。<br/>\n\n              （ボタンをタップするとWebサイトに移動します）</p>\n\n            </ion-col>\n\n          </ion-row>\n\n      </ion-col>            \n\n    </ion-row>\n\n  </div>\n\n</ion-content>\n\n<ion-footer style="min-height: 7%;background-color: lightgrey;">\n\n</ion-footer>'/*ion-inline-end:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/pages/setting/setting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__app_common__["a" /* commonClass */]])
], SettingPage);

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(299);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_calendar__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_storage__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_screen_orientation__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ion_datepicker__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_Register_User_Register_User__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_Updating_User_Updating_User__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_specify_period_popover_specify_period_popover__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_chat_mode_chat_mode__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_setting_setting__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_play_list_play_list__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_user_list_user_list__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_walkthrough_walkthrough__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_user_detail_user_detail__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_contents_commentary_contents_commentary__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_playing_content_playing_content__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_no_ah_playing_no_ah_playing__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_login_auth_requestor__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_staff_popover_staff_popover__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_user_sorting_order_popover_user_sorting_order_popover__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_facility_popover_facility_popover__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_deleting_user_registration_popover_deleting_user_registration_popover__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_filter_by_series_popover_filter_by_series_popover__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_filter_by_yamato_language_tag_popover_filter_by_yamato_language_tag_popover__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_contents_sorting_order_popover_contents_sorting_order_popover__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__app_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_file_transfer__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_file__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__common_authenticated_http_service__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_zip__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_levelpopover__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_pop_up_detail_user__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_detail_pop_up_detail_pop_up__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_chat_mode_chat_mode__["a" /* ChatModePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_setting_setting__["a" /* SettingPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_play_list_play_list__["a" /* PlayListPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_user_list_user_list__["a" /* UserListPage */],
            __WEBPACK_IMPORTED_MODULE_29__components_staff_popover_staff_popover__["a" /* StaffPopoverComponent */],
            __WEBPACK_IMPORTED_MODULE_23__pages_walkthrough_walkthrough__["a" /* WalkThroughPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_contents_commentary_contents_commentary__["a" /* ContentsCommentaryPage */],
            __WEBPACK_IMPORTED_MODULE_13__components_Register_User_Register_User__["a" /* RegisterUserComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_Updating_User_Updating_User__["a" /* UpdatingUserComponent */],
            __WEBPACK_IMPORTED_MODULE_26__pages_playing_content_playing_content__["a" /* PlayingContentPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_user_detail_user_detail__["a" /* UserDetailPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_no_ah_playing_no_ah_playing__["a" /* NoAhPlayingPage */],
            __WEBPACK_IMPORTED_MODULE_32__components_deleting_user_registration_popover_deleting_user_registration_popover__["a" /* DeletingUserRegistrationPopoverComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_user_sorting_order_popover_user_sorting_order_popover__["a" /* UserSortingOrderPopoverComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_facility_popover_facility_popover__["a" /* FacilityPopoverComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_filter_by_series_popover_filter_by_series_popover__["a" /* FilterBySeriesPopoverComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_filter_by_yamato_language_tag_popover_filter_by_yamato_language_tag_popover__["a" /* FilterByYamatoLanguageTagPopoverComponent */],
            __WEBPACK_IMPORTED_MODULE_35__components_contents_sorting_order_popover_contents_sorting_order_popover__["a" /* ContentsSortingOrderPopoverComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_specify_period_popover_specify_period_popover__["a" /* SpecifyPeriodPopoverComponent */],
            __WEBPACK_IMPORTED_MODULE_41__components_levelpopover__["a" /* levelPopoverPage */],
            __WEBPACK_IMPORTED_MODULE_42__components_pop_up_detail_user__["a" /* popUpDetail */],
            __WEBPACK_IMPORTED_MODULE_43__components_detail_pop_up_detail_pop_up__["a" /* DetailPopUpComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_12_ion_datepicker__["b" /* DatePickerModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */], {
                backButtonText: 'もどる',
                iconMode: 'ios',
                modalEnter: 'modal-slide-in',
                modalLeave: 'modal-slide-out',
                tabsPlacement: 'bottom',
                pageTransition: 'ios-transition',
                scrollAssist: false,
                autoFocusAssist: false
            }, {
                links: [
                    { loadChildren: '../pages/contents-commentary/contents-commentary.module#ContentsCommentaryPageModule', name: 'ContentsCommentaryPage', segment: 'contents-commentary', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/no-ah-playing/no-ah-playing.module#NoAhPlayingPageModule', name: 'NoAhPlayingPage', segment: 'no-ah-playing', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/playing-content/playing-content.module#PlayingContentPageModule', name: 'PlayingContentPage', segment: 'playing-content', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/user-detail/user-detail.module#UserDetailPageModule', name: 'UserDetailPage', segment: 'user-detail', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_chat_mode_chat_mode__["a" /* ChatModePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_setting_setting__["a" /* SettingPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_play_list_play_list__["a" /* PlayListPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_user_list_user_list__["a" /* UserListPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_walkthrough_walkthrough__["a" /* WalkThroughPage */],
            __WEBPACK_IMPORTED_MODULE_29__components_staff_popover_staff_popover__["a" /* StaffPopoverComponent */],
            __WEBPACK_IMPORTED_MODULE_25__pages_contents_commentary_contents_commentary__["a" /* ContentsCommentaryPage */],
            __WEBPACK_IMPORTED_MODULE_13__components_Register_User_Register_User__["a" /* RegisterUserComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_Updating_User_Updating_User__["a" /* UpdatingUserComponent */],
            __WEBPACK_IMPORTED_MODULE_26__pages_playing_content_playing_content__["a" /* PlayingContentPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_user_detail_user_detail__["a" /* UserDetailPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_no_ah_playing_no_ah_playing__["a" /* NoAhPlayingPage */],
            __WEBPACK_IMPORTED_MODULE_32__components_deleting_user_registration_popover_deleting_user_registration_popover__["a" /* DeletingUserRegistrationPopoverComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_user_sorting_order_popover_user_sorting_order_popover__["a" /* UserSortingOrderPopoverComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_facility_popover_facility_popover__["a" /* FacilityPopoverComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_filter_by_series_popover_filter_by_series_popover__["a" /* FilterBySeriesPopoverComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_filter_by_yamato_language_tag_popover_filter_by_yamato_language_tag_popover__["a" /* FilterByYamatoLanguageTagPopoverComponent */],
            __WEBPACK_IMPORTED_MODULE_35__components_contents_sorting_order_popover_contents_sorting_order_popover__["a" /* ContentsSortingOrderPopoverComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_specify_period_popover_specify_period_popover__["a" /* SpecifyPeriodPopoverComponent */],
            __WEBPACK_IMPORTED_MODULE_41__components_levelpopover__["a" /* levelPopoverPage */],
            __WEBPACK_IMPORTED_MODULE_42__components_pop_up_detail_user__["a" /* popUpDetail */],
            __WEBPACK_IMPORTED_MODULE_43__components_detail_pop_up_detail_pop_up__["a" /* DetailPopUpComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_calendar__["a" /* Calendar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_28__pages_login_auth_requestor__["a" /* AuthRequestor */],
            __WEBPACK_IMPORTED_MODULE_36__app_common__["a" /* commonClass */],
            __WEBPACK_IMPORTED_MODULE_37__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_38__ionic_native_file__["a" /* File */],
            { provide: __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"], useClass: __WEBPACK_IMPORTED_MODULE_39__common_authenticated_http_service__["a" /* AuthenticatedHttpService */] },
            __WEBPACK_IMPORTED_MODULE_40__ionic_native_zip__["a" /* Zip */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    1912: '明45/大1',
    1913: '大正2',
    1914: '大正3',
    1915: '大正4',
    1916: '大正5',
    1917: '大正6',
    1918: '大正7',
    1919: '大正8',
    1920: '大正9',
    1921: '大正10',
    1922: '大正11',
    1923: '大正12',
    1924: '大正13',
    1925: '大正14',
    1926: '大15/昭1',
    1927: '昭和2',
    1928: '昭和3',
    1929: '昭和4',
    1930: '昭和5',
    1931: '昭和6',
    1932: '昭和7',
    1933: '昭和8',
    1934: '昭和9',
    1935: '昭和10',
    1936: '昭和11',
    1937: '昭和12',
    1938: '昭和13',
    1939: '昭和14',
    1940: '昭和15',
    1941: '昭和16',
    1942: '昭和17',
    1943: '昭和18',
    1944: '昭和19',
    1945: '昭和20',
    1946: '昭和21',
    1947: '昭和22',
    1948: '昭和23',
    1949: '昭和24',
    1950: '昭和25',
    1951: '昭和26',
    1952: '昭和27',
    1953: '昭和28',
    1954: '昭和29',
    1955: '昭和30',
    1956: '昭和31',
    1957: '昭和32',
    1958: '昭和33',
    1959: '昭和34',
    1960: '昭和35',
    1961: '昭和36',
    1962: '昭和37',
    1963: '昭和38',
    1964: '昭和39',
    1965: '昭和40',
    1966: '昭和41',
    1967: '昭和42',
    1968: '昭和43',
    1969: '昭和44',
    1970: '昭和45',
    1971: '昭和46',
    1972: '昭和47',
    1973: '昭和48',
    1974: '昭和49',
    1975: '昭和50',
    1976: '昭和51',
    1977: '昭和52',
    1978: '昭和53',
    1979: '昭和54',
    1980: '昭和55',
    1981: '昭和56',
    1982: '昭和57',
    1983: '昭和58',
    1984: '昭和59',
    1985: '昭和60',
    1986: '昭和61',
    1987: '昭和62',
    1988: '昭和63',
    1989: '昭64/平1',
    1990: '平成2',
    1991: '平成3',
    1992: '平成4',
    1993: '平成5',
    1994: '平成6',
    1995: '平成7',
    1996: '平成8',
    1997: '平成9',
    1998: '平成10',
    1999: '平成11',
    2000: '平成12',
    2001: '平成13',
    2002: '平成14',
    2003: '平成15',
    2004: '平成16',
    2005: '平成17',
    2006: '平成18',
    2007: '平成19',
    2008: '平成20',
    2009: '平成21',
    2010: '平成22',
    2011: '平成23',
    2012: '平成24',
    2013: '平成25',
    2014: '平成26',
    2015: '平成27',
    2016: '平成28',
    2017: '平成29',
    2018: '平成30',
    2019: '平成31',
});
//# sourceMappingURL=japanese-calendar-chart.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { WalkThroughPage } from '../pages/walkthrough/walkthrough';
// import { Events } from 'ionic-angular';
// import { UserDetailPage } from '../pages/user-detail/user-detail';
var MyApp = (function () {
    function MyApp(nativeStorage, platform, statusBar, splashScreen) {
        // constructor(private nativeStorage: NativeStorage,platform: Platform, statusBar: StatusBar, private screenOrientation: ScreenOrientation) {
        var _this = this;
        this.nativeStorage = nativeStorage;
        // set to landscape
        //  this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        // allow user rotate
        //  this.screenOrientation.unlock();
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            _this.nativeStorage.getItem('token').then(function (data) {
                if (data) {
                    console.log('1');
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */];
                }
                else {
                    console.log('2');
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
                }
            }, function (error) {
                console.log('err' + error);
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
            });
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginInputValidator; });
/**
 * Class for check login input value's validation
 */
var LoginInputValidator = (function () {
    function LoginInputValidator() {
    }
    /**
     * Return true if both email and password are valid. Return false if otherwise
     * @param email email input value
     * @param password password input value
     */
    LoginInputValidator.prototype.isInputsValid = function (email, password) {
        return this.isEmailValid(email) && this.isPasswordValid(password);
    };
    /**
     * Return true if email is valid. Return false if otherwise
     * @param email email input value
     */
    LoginInputValidator.prototype.isEmailValid = function (email) {
        var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return email && email.length != 0 && email.length <= 30 && emailRegex.test(email);
    };
    /**
     * Return true if password is valid. Return false if otherwise
     * @param email password input value
     */
    LoginInputValidator.prototype.isPasswordValid = function (password) {
        return password && password.length >= 6 && password.length <= 30;
    };
    return LoginInputValidator;
}());

//# sourceMappingURL=login_input_validator.js.map

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticatedHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticatedHttpService = (function (_super) {
    __extends(AuthenticatedHttpService, _super);
    function AuthenticatedHttpService(backend, defaultOptions, events) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.events = events;
        _this.self = _this;
        return _this;
    }
    AuthenticatedHttpService.prototype.request = function (url, options) {
        var _this = this;
        return _super.prototype.request.call(this, url, options).catch(function (error) {
            if (error.status === 401 || error.status === 403) {
                _this.events.publish('changeLoginPage');
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    return AuthenticatedHttpService;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]));
AuthenticatedHttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["XHRBackend"], __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* Events */]])
], AuthenticatedHttpService);

//# sourceMappingURL=authenticated-http.service.js.map

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return popUpDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { NavController, ViewController, NavParams } from 'ionic-angular/index';

/**
 * Generated class for the StaffPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var popUpDetail = (function () {
    function popUpDetail(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.level = this.navParams.get('level');
    }
    popUpDetail.prototype.close = function () {
        console.log(this.level);
        this.viewCtrl.dismiss(this.level);
    };
    return popUpDetail;
}());
popUpDetail = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n    <ion-list radio-group [(ngModel)]=\"level\">\n    <ion-item>\n    <ion-label class=\"title-item\">cancel</ion-label>\n  </ion-item>\n    <ion-item>\n      <ion-label>\u3059\u3079\u3066\u306E\u30A4\u30D9\u30F3\u30C8</ion-label>\n      <ion-radio (ionSelect)=\"close()\" value=\"id1\"></ion-radio>\n    </ion-item>\n    <ion-item>\n    <ion-label>\u3059\u3079\u3066\u306E\u30A4\u30D9\u30F3\u30C8</ion-label>\n      <ion-radio (ionSelect)=\"close()\" value=\"id2\"></ion-radio>\n    </ion-item>\n    <ion-item>\n    <ion-label> \u3059\u3079\u3066\u306E\u30A4\u30D9\u30F3\u30C8</ion-label>\n      <ion-radio (ionSelect)=\"close()\" value=\"id3\"></ion-radio>\n    </ion-item>\n  </ion-list>\n    ",
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], popUpDetail);

//# sourceMappingURL=pop-up-detail-user.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_list_user_list__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__play_list_play_list__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_mode_chat_mode__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__setting_setting__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contents_commentary_contents_commentary__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_detail_user_detail__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__no_ah_playing_no_ah_playing__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_constant__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
















/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = (function () {
    function TabsPage(viewCtr, navCtrl, events, nativeStorage, common, file, loadingCtrl) {
        var _this = this;
        this.viewCtr = viewCtr;
        this.navCtrl = navCtrl;
        this.events = events;
        this.nativeStorage = nativeStorage;
        this.common = common;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
        this.active_background = 'url("assets/image/NowakaButton/active_button.png") no-repeat center';
        this.deactive_background = 'url("assets/image/NowakaButton/deactive_button.png") no-repeat center';
        this.initial();
        this.callEvent = events;
        events.subscribe('changeLoginPage', function () {
            _this.loginPage();
        });
        events.subscribe('chatPage', function () {
            _this.chatPage();
        });
    }
    /**
    * initial data
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    TabsPage.prototype.initial = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, directoryFolder;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            spinner: __WEBPACK_IMPORTED_MODULE_13__app_constant__["a" /* constant */].DOTS_TYPE,
                            content: __WEBPACK_IMPORTED_MODULE_13__app_constant__["a" /* constant */].REGISTER_LOADING_TEXT
                        });
                        loading.present();
                        // Get token of login user
                        _a = this.common;
                        return [4 /*yield*/, this.common.getToken()];
                    case 1:
                        // Get token of login user
                        _a.tokenObj = _b.sent();
                        // Get all content file.
                        this.common.listFile = [];
                        directoryFolder = this.file.dataDirectory + 'contents/';
                        return [4 /*yield*/, this.common.getAllFile(directoryFolder)];
                    case 2:
                        _b.sent();
                        loading.dismiss();
                        // Set chat mode to root page
                        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__chat_mode_chat_mode__["a" /* ChatModePage */];
                        this.chatpage = this.active_background;
                        this.playlistpage = this.deactive_background;
                        this.userlistpage = this.deactive_background;
                        this.disable = "chat";
                        return [2 /*return*/];
                }
            });
        });
    };
    TabsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.events.subscribe('changeContentsCommentaryIntoRootPage', function (item, listItem) {
            _this.contentsCommentaryPage(item, listItem);
        });
        this.events.subscribe('changeUserDetailIntoRootPage', function (item) {
            _this.userDetailPage(item);
        });
        this.events.subscribe('goToNoAHPlayingPage', function (item) {
            _this.noAHPlayingPage(item);
        });
    };
    TabsPage.prototype.ionViewWillLeave = function () {
        this.events.unsubscribe('goToNoAHPlayingPage');
        this.events.unsubscribe('changeUserDetailIntoRootPage');
        this.events.unsubscribe('changeContentsCommentaryIntoRootPage');
    };
    /**
    * set up chat page
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    TabsPage.prototype.chatPage = function () {
        if (this.disable != 'chat') {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__chat_mode_chat_mode__["a" /* ChatModePage */];
            this.chatpage = this.active_background;
            this.playlistpage = this.deactive_background;
            this.userlistpage = this.deactive_background;
            this.disable = "chat";
        }
    };
    /**
    * set up playlist page
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    TabsPage.prototype.playlistPage = function () {
        if (this.disable != 'playlist') {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__play_list_play_list__["a" /* PlayListPage */];
            this.playlistpage = this.active_background;
            this.userlistpage = this.deactive_background;
            this.chatpage = this.deactive_background;
            this.disable = "playlist";
        }
    };
    /**
    * set up userlist page
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    TabsPage.prototype.userlistPage = function () {
        if (this.disable != 'userlist') {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_3__user_list_user_list__["a" /* UserListPage */];
            this.userlistpage = this.active_background;
            this.chatpage = this.deactive_background;
            this.playlistpage = this.deactive_background;
            this.disable = "userlist";
        }
    };
    /**
    * set up setting page
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    TabsPage.prototype.settingPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__setting_setting__["a" /* SettingPage */]);
    };
    /**
    * set up content commentary page
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    TabsPage.prototype.contentsCommentaryPage = function (item, listItem) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__contents_commentary_contents_commentary__["a" /* ContentsCommentaryPage */], {
            idItem: item,
            listItem: listItem
        });
    };
    /**
    * set up login page
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    TabsPage.prototype.loginPage = function () {
        this.common.saveValueLocalStorage('token', null);
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */];
        this.navCtrl.setRoot(this.rootPage);
    };
    /**
    * set up user detail page
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    TabsPage.prototype.userDetailPage = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__user_detail_user_detail__["a" /* UserDetailPage */], {
            idItem: item
        });
    };
    /**
    * set up noAh page
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    TabsPage.prototype.noAHPlayingPage = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__no_ah_playing_no_ah_playing__["a" /* NoAhPlayingPage */], {
            user: item
        });
    };
    /**
    * log out function
    *    param:
    *      -N/A
    *    return:
    *      -N/A
   */
    TabsPage.prototype.logout = function () {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */];
        this.navCtrl.setRoot(this.rootPage);
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-tabs',template:/*ion-inline-start:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/pages/tabs/tabs.html"*/'<ion-content no-bounce no-padding>\n\n  <ion-row class="row-global">\n\n    <!-- tabbar-->\n\n    <ion-col col-3 class="col-tabbar">\n\n      <div class="left_button left_button_top">\n\n\n\n      </div>\n\n      <div class="left_button left_button_mid">\n\n          \n\n      </div>\n\n      <button class="left_button left_button_bot" (click)="settingPage()">\n\n        <img class="title_img setting_title_img" src="assets/image/NowakaButton/setting-title.png">\n\n      </button>\n\n      <button class="right_button right_button_chatmode" (click)="chatPage()" [ngStyle]="{\'background\': chatpage }">\n\n          <img class="title_img" src="assets/image/NowakaButton/chatmode_title.png">\n\n      </button>\n\n      <button class="right_button right_button_playlist" (click)="playlistPage()" [ngStyle]="{\'background\': playlistpage }">\n\n        <img class="title_img" src="assets/image/NowakaButton/contentlist_title.png">\n\n      </button>\n\n      <button class="right_button right_button_userlist" (click)="userlistPage()" [ngStyle]="{\'background\': userlistpage }">\n\n        <img class="title_img" src="assets/image/NowakaButton/userlist_title.png">\n\n      </button>\n\n      <div class="right_button right_button_none">\n\n          \n\n      </div>\n\n    </ion-col>\n\n    <!-- end tabbar-->\n\n    <!-- content-->\n\n    <ion-col>\n\n      <ion-nav [root]="rootPage"></ion-nav>\n\n    </ion-col>\n\n    <!-- end content-->\n\n  </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_11__app_common__["a" /* commonClass */],
        __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentsCommentaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playing_content_playing_content__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_deleting_user_registration_popover_deleting_user_registration_popover__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var ContentsCommentaryPage = (function () {
    function ContentsCommentaryPage(events, navCtrl, navParams, popoverCtrl, sanitizer, file, common, http) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.sanitizer = sanitizer;
        this.file = file;
        this.common = common;
        this.http = http;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.arrayPlayer = [];
        this.idItem = navParams.get("idItem");
        this.listContents = navParams.get("listItem");
        this.attrName = 'selectedUser';
        this.datePipe = new __WEBPACK_IMPORTED_MODULE_7__angular_common__["d" /* DatePipe */]('jp');
    }
    ContentsCommentaryPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data, i, player, userObject, listUsers, y, index, url, newFolderName, currentFolderPath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.common.writeToBehaviorLog(__WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].SCREEN_CONTENT_COMMENTARY_CODE, __WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].MSG_BEHAVIOR_BLOG);
                        return [4 /*yield*/, this.common.loadValueLocalStorage(this.attrName)];
                    case 1:
                        data = _a.sent();
                        if (!(data == null)) return [3 /*break*/, 2];
                        for (i = 1; i <= 6; i++) {
                            player = {
                                id: null,
                                pos: i,
                                name: '',
                                image: ''
                            };
                            this.arrayPlayer.push(player);
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        userObject = this.common.tokenObj;
                        return [4 /*yield*/, this.http.get(__WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].API_GET_USER + "?UserId=''" + "&AgreementId=" + userObject.userObject.AgreementId, userObject.options).toPromise()
                                .catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.common.showModalDialogConfirm(__WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].NWK_CK_005, false)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 3:
                        listUsers = _a.sent();
                        if (listUsers) {
                            listUsers = listUsers.json().items;
                            for (y = 0; y < data.length; y++) {
                                index = this.common.findWithAttr(listUsers, 'Id', data[y].id);
                                if (index == -1) {
                                    data[y].id = null;
                                    data[y].name = '';
                                    data[y].image = '';
                                }
                            }
                            this.arrayPlayer = data;
                        }
                        _a.label = 4;
                    case 4: return [4 /*yield*/, this.common.getContentFile(this.idItem.ContentCode + '/' + this.idItem.ContentCode, 'tuto/tuto.html')];
                    case 5:
                        url = _a.sent();
                        if (!url) return [3 /*break*/, 8];
                        // Delete temp folder of contents
                        return [4 /*yield*/, this.deleteTemp()];
                    case 6:
                        // Delete temp folder of contents
                        _a.sent();
                        newFolderName = this.datePipe.transform(Date.now(), 'hhmmss');
                        ;
                        currentFolderPath = this.file.dataDirectory + 'contents/' + this.idItem.ContentCode + '/' + this.idItem.ContentCode + '/';
                        return [4 /*yield*/, this.file.copyDir(currentFolderPath, 'tuto', this.file.dataDirectory, newFolderName)
                                .catch(function (error) {
                                console.log('copyDir error: ' + error);
                            })];
                    case 7:
                        _a.sent();
                        // Load Iframe
                        url = this.file.dataDirectory + newFolderName + '/tuto.html';
                        url = url.substr(7, url.length);
                        this.urlContent = this.sanitizer.bypassSecurityTrustResourceUrl(String(url));
                        return [3 /*break*/, 9];
                    case 8:
                        this.urlContent = url;
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    /**
      * delete folder temp
      *    param:
      *      -N/A
      *    return:
      *      -N/A
     */
    ContentsCommentaryPage.prototype.deleteTemp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentFolder, _i, currentFolder_1, subFolder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.file.listDir(this.file.dataDirectory, '').catch(function (error) {
                            console.log(error);
                        })];
                    case 1:
                        currentFolder = _a.sent();
                        if (!currentFolder) return [3 /*break*/, 5];
                        _i = 0, currentFolder_1 = currentFolder;
                        _a.label = 2;
                    case 2:
                        if (!(_i < currentFolder_1.length)) return [3 /*break*/, 5];
                        subFolder = currentFolder_1[_i];
                        if (!(!subFolder.isFile && subFolder.name != 'contents')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.file.removeRecursively(this.file.dataDirectory, subFolder.name)
                                .catch(function (err) {
                                console.log('removeRecursively error: ' + err);
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
    * show pop up delete user
    *    param:
    *      ev: event
    *      item: object
    *    return:
    *      -N/A
   */
    ContentsCommentaryPage.prototype.presentPopover = function (ev, item) {
        var _this = this;
        this.common.writeToBehaviorLog(__WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].SCREEN_DELETE_USER_CODE, __WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].MSG_BEHAVIOR_BLOG);
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_deleting_user_registration_popover_deleting_user_registration_popover__["a" /* DeletingUserRegistrationPopoverComponent */], { pos: item, arrSelect: this.arrayPlayer, contentCode: 'content' + this.idItem.ContentCode }, { cssClass: 'custom-popover' });
        this.popover.present({
            ev: ev
        });
        this.popover.onDidDismiss(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!data) return [3 /*break*/, 4];
                        if (!(data.action == __WEBPACK_IMPORTED_MODULE_8__app_constant__["a" /* constant */].SELECT_TEXT)) return [3 /*break*/, 2];
                        for (i = 0; i < this.arrayPlayer.length; i++) {
                            if (data.pos == this.arrayPlayer[i].pos) {
                                this.arrayPlayer[i].id = data.Id;
                                this.arrayPlayer[i].name = data.UserName;
                                this.arrayPlayer[i].image = 'url("' + data.PhotoURL + '") no-repeat center';
                            }
                        }
                        // Save information of selected user to local storage.
                        return [4 /*yield*/, this.common.saveValueLocalStorage(this.attrName, this.arrayPlayer)];
                    case 1:
                        // Save information of selected user to local storage.
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        if (data.pos == 1) {
                            this.arrayPlayer[0].id = null;
                            this.arrayPlayer[0].name = '';
                            this.arrayPlayer[0].image = '';
                        }
                        else if (data.pos == 2) {
                            this.arrayPlayer[1].id = null;
                            this.arrayPlayer[1].name = '';
                            this.arrayPlayer[1].image = '';
                        }
                        else if (data.pos == 3) {
                            this.arrayPlayer[2].id = null;
                            this.arrayPlayer[2].name = '';
                            this.arrayPlayer[2].image = '';
                        }
                        else if (data.pos == 4) {
                            this.arrayPlayer[3].id = null;
                            this.arrayPlayer[3].name = '';
                            this.arrayPlayer[3].image = '';
                        }
                        else if (data.pos == 5) {
                            this.arrayPlayer[4].id = null;
                            this.arrayPlayer[4].name = '';
                            this.arrayPlayer[4].image = '';
                        }
                        else if (data.pos == 6) {
                            this.arrayPlayer[5].id = null;
                            this.arrayPlayer[5].name = '';
                            this.arrayPlayer[5].image = '';
                        }
                        // Save information of selected user to local storage.
                        return [4 /*yield*/, this.common.saveValueLocalStorage(this.attrName, this.arrayPlayer)];
                    case 3:
                        // Save information of selected user to local storage.
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    /**
      * delete user
      *    param:
      *      -N/A
      *    return:
      *      -N/A
     */
    ContentsCommentaryPage.prototype.deleteUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        for (i = 0; i < this.arrayPlayer.length; i++) {
                            this.arrayPlayer[i].id = null;
                            this.arrayPlayer[i].name = '';
                            this.arrayPlayer[i].image = '';
                        }
                        // Save information of selected user to local storage.
                        return [4 /*yield*/, this.common.saveValueLocalStorage(this.attrName, this.arrayPlayer)];
                    case 1:
                        // Save information of selected user to local storage.
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
      * show Playing content
      *    param:
      *      -N/A
      *    return:
      *      -N/A
     */
    ContentsCommentaryPage.prototype.pushToPlayingContent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__playing_content_playing_content__["a" /* PlayingContentPage */], {
            contentId: this.idItem.Id,
            contenCode: this.idItem.ContentCode,
            contenName: this.idItem.ContentName,
            categoryId: this.idItem.CategoryId,
            arrayPlayer: this.arrayPlayer,
            listContents: this.listContents
        });
    };
    return ContentsCommentaryPage;
}());
ContentsCommentaryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-contents-commentary',template:/*ion-inline-start:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/pages/contents-commentary/contents-commentary.html"*/'<!--\n\n  Generated template for the ContentsCommentaryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header style="background-color: #89BA2A">\n\n  <ion-navbar transparent>\n\n    <ion-row class="row-header">\n\n      <ion-col offset-2 class="ipad-10-5">\n\n        <ion-row align-items-center justify-content-center class="full-row-size">\n\n          <!-- item 1 -->\n\n          <ion-col class="user-circle" *ngFor="let item of arrayPlayer ">\n\n            <button class="user-set" (click)="presentPopover($event,item)" [ngStyle]="{\'background\': item.image}">\n\n              <ion-row class="user-set-cached-up">\n\n                <div></div>\n\n              </ion-row>\n\n              <ion-row class="user-set-cached-main" align-items-center justify-content-center>\n\n                <div class="user-name">{{item.name}}</div>\n\n              </ion-row>\n\n              <ion-row class="user-set-cached-down"></ion-row>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n      <ion-col class="ipad-10-5" col-3 offset-1>\n\n        <ion-row class="full-row-size" align-items-center justify-content-center>\n\n          <button ion-button class="clear-button" (click)="deleteUser()">すべてのひとをクリア</button>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="has-header padding iframe-issue">\n\n  <iframe class="contents" *ngIf="urlContent" [src]="urlContent">\n\n  </iframe>\n\n</ion-content>\n\n\n\n<ion-footer text-center style="background-color: #e8e8e8">\n\n  <button class="button-footer" (click)="pushToPlayingContent()">すすむ</button>\n\n</ion-footer>'/*ion-inline-end:"/Users/quangdat/Documents/S3JP2/Project/Artifacts/SourceCode/CK2App/Source code/HybridApp/NouwakaCare/Nouwaka/src/pages/contents-commentary/contents-commentary.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_6__app_common__["a" /* commonClass */],
        __WEBPACK_IMPORTED_MODULE_9__angular_http__["Http"]])
], ContentsCommentaryPage);

//# sourceMappingURL=contents-commentary.js.map

/***/ })

},[294]);
//# sourceMappingURL=main.js.map