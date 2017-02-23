import { Component } from '@angular/core';

@Component({
  selector: 'splash',
  template: `
    <div class="splash-wrapper">
      <h3 class="welcome">WELCOME TO</h3>
      <h3 class="title">WOMEN IN JAPAN 2017</h3>
      <a class="splash-button" routerLink="/index">Enter Site \>\></a>
    </div>
    <div class="logo"></div>
  `,
  styles:[`
      h3 {
        font-family: 'Unica One', sans-serif;
        margin:0;
      }
      .welcome {
        font-size: 2.5em;
      }
      .background {
        /*background-color: #ed2024;*/
      }
      .title {

        top:5vh;
        margin-top:0.2vh;
        margin-bottom:0.2vh;
      }
      .logo {
        background-image: url('../assets/logo-main.png');
        background-repeat: no-repeat;
        background-size:50vw;
        height:50vw;
        width:50vw;
        position:fixed;
        top:2vh;
        left:50vw;
        transform:translate(-50%,0);
        z-index:-10;

      }
      .splash-button {
        text-transform:uppercase;
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

      .splash-wrapper {
        top:10vh;
        position:absolute;
        margin:auto;
        left:50vw;
        transform:translateX(-50%);
      }

      @media only screen and (min-width:600px) {
        .splash-wrapper {
          transform:translate(-50%,-50%);
          position:absolute;
          top:40vh;
          left:50vw;
        }
        .title {
          font-size:7em;
        }
        ,splash-wrapper {
          display:flex;
        }
      @media only screen and (max-width:600px) {
        .splash-wrapper {
          top:20vh;
          position:absolute;
        }
        .title {
          font-size:3em;
        }
        h3 {
          font-size:2em;
        }
      }
    `]
})
export class SplashComponent {
  public hideNav: boolean = true;
}
