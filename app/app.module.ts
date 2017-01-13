import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { SpeakersComponent } from './speakers.component';
import { ScheduleComponent } from './schedule.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { FaqComponent } from './faq.component';
import { RegisterComponent } from './register.component';
import { StudentsComponent } from './students.component';
import { IndexComponent } from './index.component';


@NgModule({
  imports:      [
     BrowserModule,
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
    IndexComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
