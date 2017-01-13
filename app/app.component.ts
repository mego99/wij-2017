import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <a routerLink="/index">Home</a>
  <a routerLink="/about">About</a>
  <a routerLink="/contact">Contact</a>
  <a routerLink="/speakers">Speakers</a>
  <a routerLink="/students">Students</a>
  <a routerLink="/register">Register</a>
  <a routerLink="/faq">FAQ</a>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent  {
  title = 'Women in Japan 2017'
}
