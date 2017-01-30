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


@NgModule({
  imports:      [
     BrowserModule,
     RouterModule.forRoot([
       {
         path:'speakers',
         component: SpeakersComponent
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
    ContactComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
