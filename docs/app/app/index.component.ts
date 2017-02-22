import { Component } from '@angular/core';

@Component({
  selector: 'index',
  template: `
    <h1 class="main-title">Women in Japan 2017</h1>
    <p>
      This one-day conference (March 8th, 2017) for high school and university students will explore the current status of women in Japan. This conference is meant for high school and university students to explore the current status of women in Japan. Themed, “Problems, Possibilities, Power,” we will assess the current barriers facing women and explore the possibilities for future empowerment. We are honored to announce Fumiko Hayashi, Mayor of Yokohama, and Kuniko Inoguchi, House of Councillors Member, as our keynote speakers.
    </p>
    <img class="bottom net" src="../assets/bottom.png"/>
    <img class="top net" src="../assets/top.png"/>
  `,
  styles:[`
    p {
      background-color:rgba(255, 255, 255, 0.7);
    }
    .net {
      width:60vw;
      position:fixed;
      z-index:-5;

    }
    .top {
      right:2vw;
      top:2vw;
    }
    .bottom {
      left:2vw;
      bottom:2vw;
    }
    `]
})
export class IndexComponent { }
