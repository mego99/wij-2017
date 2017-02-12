import { Component } from '@angular/core';

@Component({
  selector: 'splash',
  template: `
    <div class="splash-wrapper">
      <h1>WELCOME TO</h1>
      <h1 class="main-title">WOMEN IN JAPAN 2017</h1>
      <a class="splash-button" routerLink="/index">Enter Site \>\></a>
    </div>
  `,
  styles:[`
      .splash-button {
        text-transform:uppercase;
        padding:5px;
        background-color:rgba(255, 255, 255, 0.3);
        color:#343434;
        font-size:2em;
      }
      .nav-wrapper {
        display:none;
      }
      a.splash-button {
        font-family: 'Unica One', system, sans-serif;
      }
      @media (min-width:600px) {
        .splash-wrapper {
          transform:translate(-50%,-50%);
          position:absolute;
          top:50vh;
          left:50vw;
        }
      @media (max-width:600px) {
        .splash-wrapper {
          margin-top:10vh;
        }
      }
    `]
})
export class SplashComponent {
  public hideNav: boolean = true;
}
