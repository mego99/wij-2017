import { Component } from '@angular/core';

@Component({
  selector: 'speakers',
  template: `
    <h1>Speakers</h1>
    <div class="speaker-list-wrapper">

      <div class="speaker-wrapper">
        <img class="speaker-img" src="sample-speaker.png" alt="speaker"/>
        <div class="bio-wrapper">
          <h3 class="speaker-name">Speaker Name</h3>
          <p> Renge Jibu started her career at Nikkei Business Publications and worked as a journalist at various business magazines in Japan. In 2006, she was a Fulbright Visiting Scholar at the Centre for the Education of Women at the University of Michigan. During this time she conducted research about American dual-career couples with children. She has since written two books on the topic; "Kasegu Tsuma • Sodateru Otto ― Fuufu no Senryaku Teki Yakuwari Koukan” and “Futari no Kosodate Ruulu.” In 2013, she was a researcher at the Showa Women’s University’s Modern Business Research Institute, and currently she is Vice President at Toshima \& Associates. </p>
        </div>
      </div>
      <div class="speaker-wrapper">
        <img class="speaker-img" src="sample-speaker.png" alt="speaker"/>
        <div class="bio-wrapper">
          <h3 class="speaker-name">Speaker Name</h3>
          <p> Renge Jibu started her career at Nikkei Business Publications and worked as a journalist at various business magazines in Japan. In 2006, she was a Fulbright Visiting Scholar at the Centre for the Education of Women at the University of Michigan. During this time she conducted research about American dual-career couples with children. She has since written two books on the topic; "Kasegu Tsuma • Sodateru Otto ― Fuufu no Senryaku Teki Yakuwari Koukan” and “Futari no Kosodate Ruulu.” In 2013, she was a researcher at the Showa Women’s University’s Modern Business Research Institute, and currently she is Vice President at Toshima \& Associates. </p>
        </div>
      </div>
      <div class="speaker-wrapper">
        <img class="speaker-img" src="sample-speaker.png" alt="speaker"/>
        <div class="bio-wrapper">
          <h3 class="speaker-name">Speaker Name</h3>
          <p> Renge Jibu started her career at Nikkei Business Publications and worked as a journalist at various business magazines in Japan. In 2006, she was a Fulbright Visiting Scholar at the Centre for the Education of Women at the University of Michigan. During this time she conducted research about American dual-career couples with children. She has since written two books on the topic; "Kasegu Tsuma • Sodateru Otto ― Fuufu no Senryaku Teki Yakuwari Koukan” and “Futari no Kosodate Ruulu.” In 2013, she was a researcher at the Showa Women’s University’s Modern Business Research Institute, and currently she is Vice President at Toshima and Associates. </p>
        </div>
      </div>

    </div>
  `,
  styles:[`
    .speaker-img {
      height:200px;
    }
    .speaker-wrapper {
      display:flex;
      flex-direction:row;
      align-items:flex-start;
      padding-bottom:50px;
    }
    .bio-wrapper {
      padding-left: 30px;
    }
    .speaker-list-wrapper {
      display: flex;
      flex-direction: column;
    }
    .speaker-name {
      margin-top:0;
    }

    @media screen and (max-width:600px) {
      .speaker-wrapper {
        flex-direction:column;
        justify-content:center;
        align-items:center;
      }
      .bio-wrapper {
        padding:0;
      }
      .speaker-img {
        padding-bottom: 5px;
      }
      .speaker-name {
        margin:5px;
      }
      p {
        margin:0;
      }
    }
    `]
})
export class SpeakersComponent { }
