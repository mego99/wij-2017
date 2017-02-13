import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'speakers',
  template: `
    <h1>Speakers</h1>
    <div class="wrapper">
      <div class="speaker-wrapper">
        <img class="speaker-img" src="../assets/HarrisR.png" alt="Rich" />
        <div class="speaker-bio-wrapper">
          <h2>Emmy Harris</h2>
          <p>Emmy began her career at the global management consulting firm McKinsey \& Company and cut her teeth in politics on the 2008 Obama campaign. She is a graduate of Yale College, where she majored in East Asian Studies and studied abroad in Beijing and Taipei. She was born and raised in Tokyo and lives there now with her husband and one-year-old daughter.</p>
        </div>
      </div>
      <div class="speaker-wrapper">
        <img class="speaker-img" src="../assets/HarrisR.png" alt="Rich" />
        <div class="speaker-bio-wrapper">
          <h2>Emmy Harris</h2>
          <p>Emmy began her career at the global management consulting firm McKinsey \& Company and cut her teeth in politics on the 2008 Obama campaign. She is a graduate of Yale College, where she majored in East Asian Studies and studied abroad in Beijing and Taipei. She was born and raised in Tokyo and lives there now with her husband and one-year-old daughter.</p>
        </div>
      </div>
      <div class="speaker-wrapper">
        <img class="speaker-img" src="../assets/HarrisR.png" alt="Rich" />
        <div class="speaker-bio-wrapper">
          <h2>Emmy Harris</h2>
          <p>Emmy began her career at the global management consulting firm McKinsey \& Company and cut her teeth in politics on the 2008 Obama campaign. She is a graduate of Yale College, where she majored in East Asian Studies and studied abroad in Beijing and Taipei. She was born and raised in Tokyo and lives there now with her husband and one-year-old daughter.</p>
        </div>
      </div>
      <div class="speaker-wrapper">
        <img class="speaker-img" src="../assets/HarrisR.png" alt="Rich" />
        <div class="speaker-bio-wrapper">
          <h2>Emmy Harris</h2>
          <p>Emmy began her career at the global management consulting firm McKinsey \& Company and cut her teeth in politics on the 2008 Obama campaign. She is a graduate of Yale College, where she majored in East Asian Studies and studied abroad in Beijing and Taipei. She was born and raised in Tokyo and lives there now with her husband and one-year-old daughter.</p>
        </div>
      </div>
    </div>
  `,
  styles:[`
    h2 {
      padding:0;
      margin:0;
    }
    p {
    }
    .wrapper {
      display:flex;
      flex-direction:column;
    }
    .speaker-wrapper {
      display:flex;
      flex-direction:row;
      padding-bottom:30px;
    }
    .speaker-bio-wrapper {
      display:flex;
      flex-direction:column;
    }
    .speaker-img {
      width:200px;
      height:200px;
      margin-right:50px;
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
