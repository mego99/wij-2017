"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var AppComponent = (function () {
    function AppComponent(location) {
        this.title = 'Women in Japan 2017';
        this.hideNav = true;
        this.location = location;
    }
    ;
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div class=\"body-wrapper\">\n  <my-nav *ngIf=\"location.path() !== '/splash'\"></my-nav>\n\n      <router-outlet name=\"my-nav\"></router-outlet>\n      <div class=\"content-wrapper flex-item\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  ",
            styles: ["\n\n    a {\n      text-decoration:none;\n      color:#000;\n    }\n    a:hover {\n      color:#1ec9b0;\n      transition-duration:0.5s;\n    }\n    .body-wrapper {\n      display:flex;\n      flex-direction:column;\n      justify-content:center;\n    }\n    .content-wrapper {\n      text-align:center;\n      padding: 0 10vw 0 10vw;\n      max-width:100vw;\n      height:auto;\n    }\n    "
            ]
        }), 
        __metadata('design:paramtypes', [common_1.Location])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map