import { NgModule }      from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent }  from './app.component';
import { SpeakersComponent } from './speakers.component';
import { ScheduleComponent } from './schedule.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { FaqComponent } from './faq.component';
import { RegisterComponent } from './register.component';
import { StudentsComponent } from './students.component';
import { IndexComponent } from './index.component';
import { AuwComponent } from './auw.component';
import { SplashComponent } from './splash.component';
import { NavComponent } from './nav.component';


@NgModule({
  imports:      [
     BrowserModule,
     HttpModule,
     RouterModule.forRoot([
       {
         path:'about',
         component: AboutComponent
       },
       {
         path:'speakers',
         component: SpeakersComponent
       },
       {
         path:'students',
         component: StudentsComponent
       },
       {
         path:'schedule',
         component: ScheduleComponent
       },
       {
         path:'speakers',
         component: SpeakersComponent
       },
       {
         path:'register',
         component: RegisterComponent
       },
       {
         path:'faq',
         component: FaqComponent
       },
       {
         path:'contact',
         component: ContactComponent
       },
       {
         path:'index',
         component: IndexComponent
       },
       {
         path:'auw',
         component: AuwComponent
       },
       {
         path:'',
         redirectTo: '/splash',
         pathMatch:'full'
       },
       {
         path:'splash',
         component: SplashComponent
       }
     ])
  ],
  declarations: [
    AppComponent,
    SpeakersComponent,
    ScheduleComponent,
    AboutComponent,
    FaqComponent,
    RegisterComponent,
    StudentsComponent,
    ContactComponent,
    IndexComponent,
    AuwComponent,
    SplashComponent,
    NavComponent
  ],
  providers: [
    Title
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
