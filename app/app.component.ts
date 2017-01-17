import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="body-wrapper">
    <ul class="nav-wrapper flex-item">
        <li class="nav-item nav"><a routerLink="/index">Home </a> </li>
        <li class="nav-item nav"><a routerLink="/about">About Us</a> </li>
        <li class="nav-item nav"><a routerLink="/speakers">Speakers </a> </li>
        <li class="nav-item nav"><a routerLink="/register">Register </a> </li>
        <li class="nav-item nav"><a routerLink="/contact">Contact </a> </li>
        <li class="nav-item nav"><a routerLink="/faq">FAQ </a> </li>
      </ul>
      <div class="content-wrapper flex-item">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .nav-item {
      font-family: 'Nunito Sans', sans-serif;
      display:inline-block;
      padding:10px;
      border-radius:5px;
    }
    .nav-item:hover {
    }
    a {
      text-decoration:none;
      color:#000;
    }
    a:hover {
      color:#1ec9b0;
      transition-duration:0.5s;
    }
    .nav-wrapper {
      display:inline-block;
      text-align:center;
      border-bottom: 3px solid #000;
      padding: 20px;
      margin:0;
      top:0;
      left:0;
      max-width:100vw;
      background-color:rgba(0,0,0,0.2);
    }
    .body-wrapper {
      display:flex;
      flex-direction:column;
      justify-content:center;
    }
    .content-wrapper {
      text-align:center;
      padding: 0 10vw 0 10vw;
      max-width:100vw;
      height:auto;
    }
    `
  ]
})
export class AppComponent  {
  title = 'Women in Japan 2017'
}
