import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'speakers',
  template: `
    <h1>Speakers</h1>
    <div class="speaker-list-wrapper">

      <div class="speaker-wrapper special" (click)="openPopup('speaker1')" >
        <img class="speaker-img" src="assets/sample-speaker.png" alt="speaker"/>
        <div id="speaker1" class="popup hidden">
          <div class="popup-exit" (click)="closePopup('speaker1', $event)"></div>
          <h3 class="speaker-name">Speaker Name</h3>
          <p> Renge Jibu started her career at Nikkei Business Publications and worked as a journalist at various business magazines in Japan. In 2006, she was a Fulbright Visiting Scholar at the Centre for the Education of Women at the University of Michigan. During this time she conducted research about American dual-career couples with children. She has since written two books on the topic; "Kasegu Tsuma • Sodateru Otto ― Fuufu no Senryaku Teki Yakuwari Koukan” and “Futari no Kosodate Ruulu.” In 2013, she was a researcher at the Showa Women’s University’s Modern Business Research Institute, and currently she is Vice President at Toshima and Associates. </p>
        </div>
      </div>

      <div class="speaker-3-wrapper">

        <div class="speaker-wrapper" (click)="openPopup('speaker2')" >
          <img class="speaker-img" src="assets/sample-speaker.png" alt="speaker"/>
          <div id="speaker2" class="popup hidden">
            <h3 class="speaker-name">Speaker Name</h3>
            <p> Renge Jibu started her career at Nikkei Business Publications and worked as a journalist at various business magazines in Japan. In 2006, she was a Fulbright Visiting Scholar at the Centre for the Education of Women at the University of Michigan. During this time she conducted research about American dual-career couples with children. She has since written two books on the topic; "Kasegu Tsuma • Sodateru Otto ― Fuufu no Senryaku Teki Yakuwari Koukan” and “Futari no Kosodate Ruulu.” In 2013, she was a researcher at the Showa Women’s University’s Modern Business Research Institute, and currently she is Vice President at Toshima and Associates. </p>
          </div>
        </div>

        <div class="speaker-wrapper snd" (click)="openPopup('speaker3')" >
          <img class="speaker-img" src="assets/sample-speaker.png" alt="speaker"/>
          <div id="speaker3" class="popup hidden">
            <h3 class="speaker-name">Speaker Name</h3>
            <p> Renge Jibu started her career at Nikkei Business Publications and worked as a journalist at various business magazines in Japan. In 2006, she was a Fulbright Visiting Scholar at the Centre for the Education of Women at the University of Michigan. During this time she conducted research about American dual-career couples with children. She has since written two books on the topic; "Kasegu Tsuma • Sodateru Otto ― Fuufu no Senryaku Teki Yakuwari Koukan” and “Futari no Kosodate Ruulu.” In 2013, she was a researcher at the Showa Women’s University’s Modern Business Research Institute, and currently she is Vice President at Toshima and Associates. </p>
          </div>
        </div>

        <div class="speaker-wrapper snd" (click)="openPopup('speaker4')" >
          <img class="speaker-img" src="assets/sample-speaker.png" alt="speaker"/>
          <div id="speaker4" class="popup hidden">
            <h3 class="speaker-name">Speaker Name</h3>
            <p> Renge Jibu started her career at Nikkei Business Publications and worked as a journalist at various business magazines in Japan. In 2006, she was a Fulbright Visiting Scholar at the Centre for the Education of Women at the University of Michigan. During this time she conducted research about American dual-career couples with children. She has since written two books on the topic; "Kasegu Tsuma • Sodateru Otto ― Fuufu no Senryaku Teki Yakuwari Koukan” and “Futari no Kosodate Ruulu.” In 2013, she was a researcher at the Showa Women’s University’s Modern Business Research Institute, and currently she is Vice President at Toshima and Associates. </p>
          </div>
        </div>

      </div>

      <div class="speaker-3-wrapper">

        <div class="speaker-wrapper" (click)="openPopup('speaker5')" >
          <img class="speaker-img" src="assets/sample-speaker.png" alt="speaker"/>
          <div id="speaker5" class="popup hidden">
            <h3 class="speaker-name">Speaker Name</h3>
            <p> Renge Jibu started her career at Nikkei Business Publications and worked as a journalist at various business magazines in Japan. In 2006, she was a Fulbright Visiting Scholar at the Centre for the Education of Women at the University of Michigan. During this time she conducted research about American dual-career couples with children. She has since written two books on the topic; "Kasegu Tsuma • Sodateru Otto ― Fuufu no Senryaku Teki Yakuwari Koukan” and “Futari no Kosodate Ruulu.” In 2013, she was a researcher at the Showa Women’s University’s Modern Business Research Institute, and currently she is Vice President at Toshima and Associates. </p>
          </div>
        </div>

        <div class="speaker-wrapper snd" (click)="openPopup('speaker6')" >
          <img class="speaker-img" src="assets/sample-speaker.png" alt="speaker"/>
          <div id="speaker6" class="popup hidden">
            <h3 class="speaker-name">Speaker Name</h3>
            <p> Renge Jibu started her career at Nikkei Business Publications and worked as a journalist at various business magazines in Japan. In 2006, she was a Fulbright Visiting Scholar at the Centre for the Education of Women at the University of Michigan. During this time she conducted research about American dual-career couples with children. She has since written two books on the topic; "Kasegu Tsuma • Sodateru Otto ― Fuufu no Senryaku Teki Yakuwari Koukan” and “Futari no Kosodate Ruulu.” In 2013, she was a researcher at the Showa Women’s University’s Modern Business Research Institute, and currently she is Vice President at Toshima and Associates. </p>
          </div>
        </div>

        <div class="speaker-wrapper snd" (click)="openPopup('speaker7')" >
          <img class="speaker-img" src="assets/sample-speaker.png" alt="speaker"/>
          <div id="speaker7" class="popup hidden">
            <h3 class="speaker-name">Speaker Name</h3>
            <p> Renge Jibu started her career at Nikkei Business Publications and worked as a journalist at various business magazines in Japan. In 2006, she was a Fulbright Visiting Scholar at the Centre for the Education of Women at the University of Michigan. During this time she conducted research about American dual-career couples with children. She has since written two books on the topic; "Kasegu Tsuma • Sodateru Otto ― Fuufu no Senryaku Teki Yakuwari Koukan” and “Futari no Kosodate Ruulu.” In 2013, she was a researcher at the Showa Women’s University’s Modern Business Research Institute, and currently she is Vice President at Toshima and Associates. </p>
          </div>
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
      flex-direction:column;
      align-items:flex-start;
      padding: 0 1.2vw;
      padding-bottom:50px;

    }
    .special {
      margin:auto;
      padding-bottom:60px;
    }
  /*  .snd {
      padding-left:60px;
    } */
    .bio-wrapper {
      padding-left: 30px;
    }
    .speaker-list-wrapper {
      display: flex;
      flex-direction: column;
      flex-wrap:wrap;
    }
    .speaker-3-wrapper {
      display: flex;
      flex-direction:row;
      margin:auto;
      flex-wrap:wrap;
      justify-content:center;
    }
    .speaker-name {
      margin-top:0;
    }

    .popup {
      background-color:rgba(255, 135, 153, 0.8);
      position:absolute;
      margin:10px 15vw;
      left:0;
      padding:30px;
      border-radius:10px;

    }
    .popup-exit {
      height:50px;
      width:50px;
      border-radius:25px;
      background-color:red;
      position:absolute;
      right:0;
      top:0;
    }
    .hidden {
      transition-duration:1s;
      display:none;
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
      .speaker-3-wrapper {
        flex-direction:column;
      }
      .snd {
        padding-left:0;
        padding-top:50px;
      }
    }
    `]
})
export class SpeakersComponent {
  openPopup(id:string) {
      var popupDiv = document.getElementById(id);
      if (popupDiv.getAttribute('class').search('hidden') != -1) {
        popupDiv.removeAttribute('class');
        popupDiv.setAttribute('class','popup');
      };
    }

  closePopup(id:string, event:any) {
    event.stopPropagation();
    var popupDiv = document.getElementById(id);
    popupDiv.setAttribute('class','popup hidden');
  }
}
