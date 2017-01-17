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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var speakers_component_1 = require('./speakers.component');
var schedule_component_1 = require('./schedule.component');
var about_component_1 = require('./about.component');
var contact_component_1 = require('./contact.component');
var faq_component_1 = require('./faq.component');
var register_component_1 = require('./register.component');
var students_component_1 = require('./students.component');
var index_component_1 = require('./index.component');
var auw_component_1 = require('./auw.component');
var splash_component_1 = require('./splash.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    {
                        path: 'about',
                        component: about_component_1.AboutComponent
                    },
                    {
                        path: 'speakers',
                        component: speakers_component_1.SpeakersComponent
                    },
                    {
                        path: 'students',
                        component: students_component_1.StudentsComponent
                    },
                    {
                        path: 'schedule',
                        component: schedule_component_1.ScheduleComponent
                    },
                    {
                        path: 'speakers',
                        component: speakers_component_1.SpeakersComponent
                    },
                    {
                        path: 'register',
                        component: register_component_1.RegisterComponent
                    },
                    {
                        path: 'faq',
                        component: faq_component_1.FaqComponent
                    },
                    {
                        path: 'contact',
                        component: contact_component_1.ContactComponent
                    },
                    {
                        path: 'index',
                        component: index_component_1.IndexComponent
                    },
                    {
                        path: 'auw',
                        component: auw_component_1.AuwComponent
                    },
                    {
                        path: '',
                        redirectTo: '/splash',
                        pathMatch: 'full'
                    },
                    {
                        path: 'splash',
                        component: splash_component_1.SplashComponent
                    }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                speakers_component_1.SpeakersComponent,
                schedule_component_1.ScheduleComponent,
                about_component_1.AboutComponent,
                faq_component_1.FaqComponent,
                register_component_1.RegisterComponent,
                students_component_1.StudentsComponent,
                contact_component_1.ContactComponent,
                index_component_1.IndexComponent,
                auw_component_1.AuwComponent,
                splash_component_1.SplashComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map