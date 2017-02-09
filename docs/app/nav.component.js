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
var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent = __decorate([
        core_1.Component({
            selector: 'my-nav',
            template: "\n  <ul class=\"nav-wrapper flex-item\">\n      <li class=\"nav-item nav\"><a routerLink=\"/index\">Home </a> </li>\n      <li class=\"nav-item nav\"><a routerLink=\"/about\">About Us</a> </li>\n      <li class=\"nav-item nav\"><a routerLink=\"/speakers\">Speakers </a> </li>\n      <li class=\"nav-item nav\"><a routerLink=\"/register\">Register </a> </li>\n      <li class=\"nav-item nav\"><a routerLink=\"/schedule\">Schedule </a> </li>\n      <li class=\"nav-item nav\"><a routerLink=\"/contact\">Contact </a> </li>\n      <li class=\"nav-item nav\"><a routerLink=\"/faq\">FAQ </a> </li>\n    </ul>\n    ",
            styles: ["\n      .nav-item {\n        font-family: 'Nunito Sans', sans-serif;\n        display:inline-block;\n        padding:10px;\n        border-radius:5px;\n      }\n      .nav-item:hover {\n      }\n      .nav-wrapper {\n        text-align:center;\n        border-bottom: 3px solid #000;\n        padding: 20px;\n        margin:0;\n        top:0;\n        left:0;\n        max-width:100vw;\n        background-color:rgba(255, 255, 255, 0.2);\n        width:100%;\n        box-sizing:border-box;\n      }\n      "]
        }), 
        __metadata('design:paramtypes', [])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map