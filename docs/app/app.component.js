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
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Women in Japan 2017';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <div class=\"body-wrapper\">\n    <ul class=\"nav-wrapper flex-item\">\n        <li class=\"nav-item nav\"><a routerLink=\"/index\">Home </a> </li>\n        <li class=\"nav-item nav\"><a routerLink=\"/about\">About Us</a> </li>\n        <li class=\"nav-item nav\"><a routerLink=\"/speakers\">Speakers </a> </li>\n        <li class=\"nav-item nav\"><a routerLink=\"/register\">Register </a> </li>\n        <li class=\"nav-item nav\"><a routerLink=\"/contact\">Contact </a> </li>\n        <li class=\"nav-item nav\"><a routerLink=\"/faq\">FAQ </a> </li>\n      </ul>\n      <div class=\"content-wrapper flex-item\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  ",
        styles: ["\n    .nav-item {\n      font-family: 'Nunito Sans', sans-serif;\n      display:inline-block;\n      padding:10px;\n      border-radius:5px;\n    }\n    .nav-item:hover {\n    }\n    a {\n      text-decoration:none;\n      color:#000;\n    }\n    a:hover {\n      color:#1ec9b0;\n      transition-duration:0.5s;\n    }\n    .nav-wrapper {\n      display:inline-block;\n      text-align:center;\n      border-bottom: 3px solid #000;\n      padding: 20px;\n      margin:0;\n      top:0;\n      left:0;\n      max-width:100vw;\n      background-color:rgba(0,0,0,0.2);\n    }\n    .body-wrapper {\n      display:flex;\n      flex-direction:column;\n      justify-content:center;\n    }\n    .content-wrapper {\n      text-align:center;\n      padding: 0 10vw 0 10vw;\n      max-width:100vw;\n      height:auto;\n    }\n    "
        ]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map