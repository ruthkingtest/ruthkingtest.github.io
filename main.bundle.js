webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row spacer\">\n    <div class=\"columns small-12 medium-7 padded-container\">\n        <h4>I am Ruth King. I have been in private practice for over 20 years.</h4>\n        <p>In that time, I have accumulated in excess of 14,000 hours of face to face client work.\n            I am based in The Top Floor, Church Walk in the centre of Colchester, Essex. I have extensive experience\n            of short and long term therapy.</p>\n        <p>I am a psychodynamic psychotherapist. From an initial background in education my training has included\n            psychodynamic, humanistic, person centred, transpersonal and CBT.</p>\n        <p>I bring my experience and these tools to help you get to where you need to go.</p>\n        <p>I co-founded and co-managed the Crouch Street Centre in Colchester which had an excellent reputation, but now no longer exists.</p>\n        <p>I look forward to meeting and speaking with you.</p>\n    </div>\n    <div class=\"columns small-12 medium-5\">\n        <div class=\"portraits\">\n            <img src=\"./assets/images/ruth_2.jpg\" alt=\"Ruth King portrait\">\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'rk-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html")
        })
    ], AboutComponent);
    return AboutComponent;
}());

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<rk-header id=\"home\"></rk-header>\n<main>\n    <rk-testimonial></rk-testimonial>\n    <h3 class=\"scroll\"><span id=\"about\"></span></h3>\n    <section id=\"about-section\">\n        <rk-about></rk-about>\n        <rk-testimonial></rk-testimonial>\n    </section>\n    <h3 class=\"scroll\"><span id=\"services\"></span></h3>\n    <section  class=\"spacer\" id=\"services-section\">\n        <rk-services></rk-services>\n        <section id=\"experience-section\" class=\"gradient spacer\">\n            <rk-experience></rk-experience>\n        </section>\n        <section id=\"referrals-section\">\n            <rk-referrals></rk-referrals>\n        </section>\n    </section>\n    <h3 class=\"scroll\"><span id=\"testimonials\"></span></h3>\n    <section  class=\"gradient spacer\" id=\"testimonials-section\">\n        <rk-testimonials></rk-testimonials>\n    </section>\n    <section class=\"spacer\" id=\"contact-section\">\n        <rk-map></rk-map>\n        <h3 class=\"scroll\"><span id=\"contact\"></span></h3>\n        <rk-contact></rk-contact>\n    </section>\n</main>\n<rk-footer></rk-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'rk-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__testimonial_testimonial_component__ = __webpack_require__("../../../../../src/app/testimonial/testimonial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_services_component__ = __webpack_require__("../../../../../src/app/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__experience_experience_component__ = __webpack_require__("../../../../../src/app/experience/experience.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__referrals_referrals_component__ = __webpack_require__("../../../../../src/app/referrals/referrals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__testimonials_testimonials_component__ = __webpack_require__("../../../../../src/app/testimonials/testimonials.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__map_map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__email_service__ = __webpack_require__("../../../../../src/app/email.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_perfect_scrollbar__ = __webpack_require__("../../../../angular2-perfect-scrollbar/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_perfect_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular2_perfect_scrollbar__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__testimonial_testimonial_component__["a" /* TestimonialComponent */],
                __WEBPACK_IMPORTED_MODULE_5__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_6__services_services_component__["a" /* ServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__experience_experience_component__["a" /* ExperienceComponent */],
                __WEBPACK_IMPORTED_MODULE_8__referrals_referrals_component__["a" /* ReferralsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__testimonials_testimonials_component__["a" /* TestimonialsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_13__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_16__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_18_angular2_perfect_scrollbar__["PerfectScrollbarModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_15__email_service__["a" /* EmailService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__email_service__ = __webpack_require__("../../../../../src/app/email.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = (function () {
    function AppService(emailService) {
        this.emailService = emailService;
    }
    AppService.prototype.sendEmail = function (email) {
        return this.emailService.sendEmail(email);
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__email_service__["a" /* EmailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__email_service__["a" /* EmailService */]) === "function" && _a || Object])
    ], AppService);
    return AppService;
    var _a;
}());

//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"columns small-12 medium-8 small-centered\">\n        <h4 class=\"text-center\">Enquire</h4>\n        <p>Please use the form below to get in touch with me, all enquiries will be\n            treated in confidence.</p>\n    </div>\n</div>\n<form #f=\"ngForm\" (submit)=\"send(f, f.valid)\" novalidate>\n    <div class=\"row\">\n        <div class=\"columns small-12 medium-8 small-centered\">\n            <div class=\"row\">\n                <div class=\"columns small-6\">\n                    <label for=\"Forename\">First name *</label>\n                    <input required type=\"text\" id=\"Forename\" name=\"first\"\n                           [(ngModel)]=\"email.firstName\" #first=\"ngModel\"\n                           [ngClass]=\"{'invalid': first.invalid && f.submitted}\"\n                           [disabled]=\"disabled\" />\n                    <span *ngIf=\"first.invalid && f.submitted\">required</span>\n                </div>\n                <div class=\"columns small-6\">\n                    <label for=\"Surname\">Last name *</label>\n                    <input required type=\"text\" id=\"Surname\" name=\"last\"\n                           [(ngModel)]=\"email.lastName\" #last=\"ngModel\"\n                           [ngClass]=\"{'invalid': last.invalid && f.submitted}\"\n                           [disabled]=\"disabled\" />\n                    <span *ngIf=\"last.invalid && f.submitted\">required</span>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"columns small-12 medium-8 small-centered\">\n            <label for=\"EmailAddress\">Email address *</label>\n            <input required\n                   type=\"email\"\n                   id=\"EmailAddress\"\n                   name=\"emailFrom\"\n                   [ngClass]=\"{'invalid': emailFrom.invalid && f.submitted}\"\n                   [(ngModel)]=\"email.emailFrom\" #emailFrom=\"ngModel\" \n                   [disabled]=\"disabled\" />\n            <span *ngIf=\"emailFrom.invalid && f.submitted\">required</span>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"columns small-12 medium-8 small-centered\">\n            <label for=\"Telephone\">Phone number *</label>\n            <input required type=\"text\" id=\"Telephone\" name=\"phone\"\n                   [ngClass]=\"{'invalid': phone.invalid && f.submitted}\"\n                   [(ngModel)]=\"email.telephone\" #phone=\"ngModel\" \n                   [disabled]=\"disabled\" />\n            <span *ngIf=\"phone.invalid && f.submitted\">required</span>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"columns small-12 medium-8 small-centered\">\n            <label for=\"Message\">Message *</label>\n            <textarea required rows=\"5\" id=\"Message\" name=\"message\"\n                      [(ngModel)]=\"email.message\" #message=\"ngModel\"\n                      [ngClass]=\"{'invalid': message.invalid && f.submitted}\"\n                      [disabled]=\"disabled\"></textarea>\n            <span *ngIf=\"message.invalid && f.submitted\">required</span>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"columns small-12 medium-8 small-centered\">\n            <div class=\"row\">\n                <div class=\"columns small-12 medium-6\">\n                    <button type=\"submit\" class=\"button expanded\" [disabled]=\"disabled\">Submit</button>\n                </div>\n                <div class=\"columns small-12 medium-6 text-center\">\n                    <span class=\"success\" #success><strong>Message sent!</strong></span>\n                    <span class=\"error\" #error><strong>Message failed!</strong></span>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects__ = __webpack_require__("../../../../../src/app/objects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = (function () {
    function ContactComponent(appService) {
        this.appService = appService;
        this.email = new __WEBPACK_IMPORTED_MODULE_1__objects__["a" /* Email */]();
        this.disabled = false;
    }
    ContactComponent.prototype.send = function (form, isValid) {
        var _this = this;
        var component = this;
        if (!isValid)
            return false;
        this.disabled = true;
        var email = new __WEBPACK_IMPORTED_MODULE_1__objects__["a" /* Email */](this.email.firstName, this.email.lastName, this.email.emailFrom, this.email.telephone, this.email.message);
        this.appService.sendEmail(email).subscribe(function (success) {
            component.error.nativeElement.classList.remove("show-validation");
            component.success.nativeElement.classList.remove("show-validation");
            if (!success) {
                component.error.nativeElement.classList.add("show-validation");
                return false;
            }
            component.success.nativeElement.classList.add("show-validation");
            component.email = new __WEBPACK_IMPORTED_MODULE_1__objects__["a" /* Email */]();
            form.resetForm();
            _this.disabled = false;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('success'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], ContactComponent.prototype, "success", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('error'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
    ], ContactComponent.prototype, "error", void 0);
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'rk-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === "function" && _c || Object])
    ], ContactComponent);
    return ContactComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/email.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmailService = (function () {
    function EmailService(http) {
        this.http = http;
        this.emailUrl = "https://bitsandbobs.azurewebsites.net/api/email";
    }
    EmailService.prototype.sendEmail = function (email) {
        var body = JSON.stringify(email);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.emailUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    EmailService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    EmailService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(errMsg);
    };
    EmailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], EmailService);
    return EmailService;
    var _a;
}());

//# sourceMappingURL=email.service.js.map

/***/ }),

/***/ "../../../../../src/app/experience/experience.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row expanded small-spacer\">\n    <div class=\"columns small-centered text-center\">\n        <h4>Experience</h4>\n        <p>I have a range of experience working with:</p>\n    </div>\n</div>\n<div class=\"row expanded\">\n    <div class=\"columns small-12 large-8\">\n        <div class=\"row\">\n            <div class=\"columns text-center small-12 medium-6 small-spacer\">\n                <ul>\n                    <li>Low Mood. Depression</li>\n                    <li>Loss and Grief. Bereavement</li>\n                    <li>Stress. Anxiety</li>\n                    <li>Relationship Difficulties</li>\n                    <li>Separation and Divorce</li>\n                    <li>Addiction</li>\n                </ul>\n            </div>\n            <div class=\"columns text-center small-12 medium-6 small-spacer\">\n                <ul>\n                    <li>Life Crises</li>\n                    <li>Phobias</li>\n                    <li>Eating Disorders</li>\n                    <li>Self Awareness</li>\n                    <li>Work Related Problems</li>\n                    <li>Panic Attacks</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"columns small-12 large-4\">\n        <div class=\"row\">\n            <div class=\"columns text-center small-12\">\n                <ul>\n                    <li>Mid-life Crisis</li>\n                    <li>Health Problems</li>\n                    <li>Terminal Illness</li>\n                    <li>Gender Dysphoria</li>\n                    <li>Sexual Difficulties</li>\n                    <li>Post Traumatic Stress Disorder</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/experience/experience.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExperienceComponent = (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'rk-experience',
            template: __webpack_require__("../../../../../src/app/experience/experience.component.html")
        })
    ], ExperienceComponent);
    return ExperienceComponent;
}());

//# sourceMappingURL=experience.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"row expanded\">\n        <div class=\"columns small-12\">\n            <div class=\"slogan\">\n                <h5>An <strong>accredited therapist</strong> in practice for over 20 years</h5>\n            </div>\n        </div>\n    </div>\n    <div class=\"row expanded\">\n        <div class=\"columns small-12 medium-7 address-telephone\">\n            <p>The Top Floor, Church Walk, Colchester, Essex, CO1 1NS</p>\n            <p><a href=\"mailto:ruthnking@outlook.com??Subject=Website%20Enquiry\">ruthnking@outlook.com</a></p>\n            <p>07879 697 164</p>\n        </div>\n        <div class=\"columns small-12 medium-5 copyright\">\n            Copyright 2018\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'rk-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header (window:scroll)=\"scrolling()\">\n    <div class=\"logo\">\n        <img src=\"./assets/images/banner_logo.svg\" alt=\"Ruth King | Counselling & Psychotherapy\">\n    </div>\n    <hr>\n    <div class=\"nav-container\" #nav>\n        <a class=\"mobile-menu-toggle\" href=\"javascript:void(0)\" (click)=\"toggleNav()\">Menu</a>\n        <nav>\n            <ul>\n                <li><a (click)=\"toggleNav()\" href=\"#home\">Home</a></li>\n                <li><a (click)=\"toggleNav()\" href=\"#about\">About</a></li>\n                <li><a (click)=\"toggleNav()\" href=\"#services\">Services</a></li>\n                <li><a (click)=\"toggleNav()\" href=\"#testimonials\">Testimonials</a></li>\n                <li><a (click)=\"toggleNav()\" href=\"#contact\">Contact</a></li>\n            </ul>\n        </nav>\n    </div>\n</header>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var HeaderComponent = (function () {
    function HeaderComponent(document) {
        this.document = document;
        this._menuExpanded = false;
    }
    HeaderComponent.prototype.toggleNav = function () {
        this._menuExpanded = !this._menuExpanded;
        if (this._menuExpanded)
            this.navigation.nativeElement.classList.add("expanded");
        else
            this.navigation.nativeElement.classList.remove("expanded");
    };
    HeaderComponent.prototype.scrolling = function () {
        if (window.pageYOffset > 140)
            this.document.body.classList.add("fixed");
        else
            this.document.body.classList.remove("fixed");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('nav'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], HeaderComponent.prototype, "navigation", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'rk-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html")
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a;
}());

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row spacer\">\n    <div class=\"columns small-12\">\n        <h4>Location</h4>\n        <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2462.5135120221826!2d0.8929291655010637!3d51.88809227969944\n        !2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d904f68d40b4f1%3A0x616d0507ce47cb95!2sChurch+\n        Walk%2C+Colchester+CO1+1NS!5e0!3m2!1sen!2suk!4v1509569664798\" frameborder=\"0\" height=\"600\" style=\"border:0\">\n        </iframe>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MapComponent = (function () {
    function MapComponent() {
    }
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'rk-map',
            template: __webpack_require__("../../../../../src/app/map/map.component.html")
        })
    ], MapComponent);
    return MapComponent;
}());

//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/objects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Email; });
var Email = (function () {
    function Email(first, last, emailFrom, telephone, message) {
        if (first === void 0) { first = null; }
        if (last === void 0) { last = null; }
        if (emailFrom === void 0) { emailFrom = null; }
        if (telephone === void 0) { telephone = null; }
        if (message === void 0) { message = null; }
        this.appName = "RuthKingTherapist";
        this.firstName = first;
        this.lastName = last;
        this.emailTo = "ruthnking@outlook.com";
        this.emailFrom = emailFrom;
        this.subject = "Client Enquiry";
        this.telephone = telephone;
        this.message = message;
    }
    return Email;
}());

//# sourceMappingURL=objects.js.map

/***/ }),

/***/ "../../../../../src/app/referrals/referrals.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row expanded\">\n    <div class=\"columns small-12 text-center\">\n        <h4>Accepting referrals from:</h4>\n    </div>\n</div>\n<div class=\"row expanded\">\n    <div class=\"columns small-12 text-center\">\n        <ul>\n            <li>Individuals - Self Referrals</li>\n            <li>GP Surgeries</li>\n            <li>Private Industry</li>\n            <li>Private Health Care Companies</li>\n            <li>Community Mental Health Teams</li>\n            <li>Academic Institutions</li>\n            <li>Emergency Services</li>\n        </ul>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/referrals/referrals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferralsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReferralsComponent = (function () {
    function ReferralsComponent() {
    }
    ReferralsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'rk-referrals',
            template: __webpack_require__("../../../../../src/app/referrals/referrals.component.html")
        })
    ], ReferralsComponent);
    return ReferralsComponent;
}());

//# sourceMappingURL=referrals.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row spacer\">\n    <div class=\"columns small-12 medium-9 end\">\n        <div class=\"padded-container right-border\">\n            <h4>Why therapy?</h4>\n            <p>Therapy, counselling or psychotherapy is a safe, confidential space where you can tell your\n                story and be listened to. You can explore your feelings and confront and manage change. Each\n                person's experience of life is different and complicated. You work at your own pace\n                and are supported in the process of change.</p>\n            <p>Psychodynamic therapy is about bringing your unconscious to consciousness and allowing you to\n                understand, process, change and grow.</p>\n        </div>\n    </div>\n</div>\n<rk-testimonial></rk-testimonial>\n<div class=\"row spacer\">\n    <div class=\"columns small-12 medium-9 medium-offset-3\">\n        <div class=\"padded-container left-border\">\n            <h4>Our therapeutic relationship</h4>\n            <p>I aim to develop a trusting relationship that is safe, non-judgemental and empowering. By working\n                collaboratively in a supportive way we can create a space where complicated and difficult feelings can\n                be\n                expressed and explored.</p>\n            <p>In a nurturing therapeutic relationship, difficult to manage feelings can be processed and you can feel\n                better\n                equipped to effectively manage the process of change.</p>\n        </div>\n    </div>\n</div>\n<rk-testimonial></rk-testimonial>\n<div class=\"row spacer\">\n    <div class=\"columns small-12 medium-9 end\">\n        <div class=\"padded-container right-border\">\n            <h4>Sessions</h4>\n            <p>Sessions will be face to face and are 50 minutes long. They are weekly, but can be twice weekly\n                during times of crisis.</p>\n            <p>I am an accredited member of the British Association for Counselling and Psychotherapy and am bound by\n                their code of ethics. I have regular supervision and our discussions are confidential.</p>\n            <p>Fees upon request, it is a sliding scale and you decide what you can afford.</p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ServicesComponent = (function () {
    function ServicesComponent() {
    }
    ServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'rk-services',
            template: __webpack_require__("../../../../../src/app/services/services.component.html")
        })
    ], ServicesComponent);
    return ServicesComponent;
}());

//# sourceMappingURL=services.component.js.map

/***/ }),

/***/ "../../../../../src/app/testimonial/testimonial.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row gradient expanded testimonial spacer\">\n  <div class=\"columns small-centered small-12 medium-9 large-6 text-center quotes\">\n    <em *ngFor=\"let quote of quotes\">\"{{quote}}\"</em>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/testimonial/testimonial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TestimonialComponent = (function () {
    function TestimonialComponent() {
        this.quotes = [];
    }
    TestimonialComponent.prototype.ngOnInit = function () {
        this.quotes.push("I can not recommend Ruth highly enough as a therapist");
        this.quotes.push("Ruth helps to create a space and a relationship of total acceptance and deep listening");
        this.quotes.push("I have found the security of seeing Ruth the perfect place for me to revisit childhood trauma with adult eyes");
        this.quotes.push("Warm, thoughtful and perceptive, Ruth’s professional and caring approach instantly put me at ease");
        this.quotes.push("Ruth is an intuitive and skilled therapist. Professional, but human. She has helped me to make my life better. I cannot recommend her enough");
        this.quotes.push("There are life lessons you remember forever and keep reminding yourself when life gets tough, they help you get through to the other side");
        this.quotes = this.shuffle(this.quotes);
    };
    TestimonialComponent.prototype.shuffle = function (a) {
        for (var i = a.length; i; i--) {
            var j = Math.floor(Math.random() * i);
            _a = [a[j], a[i - 1]], a[i - 1] = _a[0], a[j] = _a[1];
        }
        return a;
        var _a;
    };
    TestimonialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'rk-testimonial',
            template: __webpack_require__("../../../../../src/app/testimonial/testimonial.component.html")
        })
    ], TestimonialComponent);
    return TestimonialComponent;
}());

//# sourceMappingURL=testimonial.component.js.map

/***/ }),

/***/ "../../../../../src/app/testimonials/testimonials.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row small-up-1 medium-up-2 large-up-3\">\n  <div class=\"columns column-block\">\n    <h4>Testimonials</h4>\n  </div>\n</div>\n<div class=\"row small-up-1 medium-up-2 large-up-3\">\n  <div class=\"columns column-block content\" *ngFor=\"let item of testimonials\">\n    <p class=\"top-border\" [perfect-scrollbar]>{{item}}</p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/testimonials/testimonials.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TestimonialsComponent = (function () {
    function TestimonialsComponent() {
        this.testimonials = [];
    }
    TestimonialsComponent.prototype.ngOnInit = function () {
        this.testimonials.push("I can not recommend Ruth highly enough as a therapist.  I went to Ruth feeling overwhelmed and anxious about issues that had worried me for many years.  After seeing her for regular counselling sessions my confidence has increased and I feel stronger and happier with the decisions I make.  Ruth gets just the right balance between empathising with me and helping me to challenge the thoughts that lead to my anxieties.");
        this.testimonials.push("I have seen Ruth weekly since [2011]. I was running out of strategies to use to give a sense of meaning and purpose to life. I had increasingly withdrawn into a private closed-off existence soothed with too much solitary drinking and treating everything outside as either hostile or futile. My wife had decided to move out and even as I discussed this with her in a reasonable manner I did not feel that I had anything left to offer. I do not like to ask for help and approached my meetings with Ruth as an opportunity to unload all of my past, current and future problems and wait for the solution to become clear. The early meetings were a combination of dumping and confessional probably." + "\n" + "What actually happened was that Ruth helps to create a space and a relationship of total acceptance and deep listening within which my patterns of relating to life have become visible. Ruth allows me to be able to talk about anything and sometimes the time is filled with my difficulties getting a plumber and other times it might be about death." + "\n" + "Ruth will illuminate and challenge giving an opportunity for self-awareness. I think it is this encouragement and facilitation of self-awareness that is the USP. There is no suggestion of the need to rid oneself of these patterns, of fixing, curing and so on but a continual expansion of understanding the parts and ways of being that I encompass and therefore I have a choice whether to indulge these or not or at least to see that they are operating.");
        this.testimonials.push("I have found the security of seeing Ruth the perfect place for me to revisit childhood trauma with adult eyes, enabling me to make new choices in my present an no longer being a prisoner of the past. Definitely life changing.");
        this.testimonials.push("Warm, thoughtful and perceptive, Ruth’s professional and caring approach instantly put me at ease. Her support an encouragement have been incredible and she has helped me through some of my most difficult times. Ruth has equipped me with the tools to deal with my depression and anxiety and has helped me find (and keep) my voice. With her support I have become a stronger person, much better equipped to deal with whatever life throws my way. I can’t recommend Ruth more highly or thank her enough.");
        this.testimonials.push("I found it difficult to make  my first approach to a therapist. I worried how I would be able to explain what was troubling me, and if I actually knew what it was. After meeting Ruth I felt assured that she had no such expectations of me. Instead, it felt like a joint endeavour. Over the weeks, as she got to know me and I felt safe enough to seek more freely, we began to understand the source of my problems and how to move forward. Ruth is an intuitive and skilled therapist. Professional, but human. She has helped me to make my life better. I cannot recommend her enough.");
        this.testimonials.push("I was flat, numb and depressed after a breakdown and went to visit Ruth for some counselling which initially I was apprehensive about as I thought that was just for people with “mental health issues”, not for one second including myself in that camp." + "\n" + "Ruth chatted as much as I wanted, there was no pressure. Ruth tailors the session to the individual and the circumstances." + "\n" + "I found the sessions relaxing, unthreatening and Ruth very easy to open up to. Even the hard unpleasant things were easy to discuss because Ruth did not judge or criticise, just listening. To be fair Ruth spoke very little and let me do most of the talking, getting things off my chest. Just a few well placed subtle questions to start my flow again. I really felt I could tell Ruth anything and it was alright. You start to see things clear and start putting things into perspective." + "\n" + "I used to look forward to my weekly sessions and they would be a highlight of my week, I would be disappointed if a week was missed for holiday or such like." + "\n" + "Ruth has the patience of a saint and certainly has played a big part of my life enabling me to get my life and career back on track." + "\n" + "There are life lessons you remember forever and keep reminding yourself when life gets tough, they help you get through to the other side." + "\n" + "Not only did Ruth perform her magic on me once but twice and both times I had fantastic results." + "\n" + "I would highly recommend Ruth and counselling to anyone (and I have many times shared my own experiences as above) unhappy in life for whatever reason.");
    };
    TestimonialsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'rk-testimonials',
            template: __webpack_require__("../../../../../src/app/testimonials/testimonials.component.html")
        })
    ], TestimonialsComponent);
    return TestimonialsComponent;
}());

//# sourceMappingURL=testimonials.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map