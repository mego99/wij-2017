import { Component } from '@angular/core';

@Component({
  selector: 'splash',
  template: `
    <h1>WELCOME TO</h1>
    <h1 class="main-title">WOMEN IN JAPAN 2017</h1>
    <a class="splash-button" routerLink="/index">Enter Site</a>
  `,
  styles:[`
      .splash-button {
        text-transform:uppercase;
        padding:5px;
        background-color:rgba(255, 255, 255, 0.3);
        color:#343434;
        font-size:2em;
      }
    `]
})
export class SplashComponent { }
