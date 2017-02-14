import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'speakers',
  template: `
    <h1>Speakers</h1>
    <div class="wrapper">
      <div class="speaker-wrapper">
      <div class="img-wrapper"><img class="speaker-img" src="../assets/x.png" alt="Fumiko Hayashi" /></div>
        <div class="speaker-bio-wrapper">
          <h2>Fumiko Hayashi</h2>
          <p>fumiko hayashi bio</p>
        </div>
      </div>
      <div class="speaker-wrapper">
        <div class="img-wrapper"><img class="speaker-img" src="../assets/InoguchiR.png" alt="Rich" /></div>
        <div class="speaker-bio-wrapper">
          <h2>Kuniko Inoguchi</h2>
          <p>Kuniko INOGUCHI, Ph.D. is Member, House of Councillors of Japan, Chairman, Special Committee on Okinawa and Northern Problems, and Member, of the Science Council of Japan. She was appointed Minister of State for Gender Equality and Social Affairs (2005 to 2006), and elected as Member of the House of Representatives (2005 to 2009). Prior to her political appointments, she served as Ambassador Extraordinary and Plenipotentiary and Head of the Delegation of Japan to the Conference on Disarmament in Geneva, Switzerland (2002 to 2004). Prior to her appointment as Ambassador, she taught first as Associate Professor, then Professor of Political Science in the Faculty of Law at Sophia University, Tokyo (1981 to 2002). <br><br>She received her Ph.D. in Political Science from Yale University (1982), M.A. from Yale University (1977), and B.A. from Sophia University (1975). She is married to Takashi Inoguchi, President of the University of Niigata Prefecture, and former Professor of the University of Tokyo. They reside in Tokyo and have two daughters.</p>
        </div>
      </div>
      <div class="speaker-wrapper">
        <div class="img-wrapper"><img class="speaker-img" src="../assets/HarrisR.png" alt="Rich" /></div>
        <div class="speaker-bio-wrapper">
          <h2>Emmy Harris</h2>
          <p>Emmy currently serves as the Asia Managing Director for Change.org -- the world's largest petition platform, with over 180 million users in 196 countries. <br><br>Before joining Change.org and returning to Tokyo, Emmy lived in New York City and played an instrumental role in building Purpose (purpose.com) into a leading social movement incubator and consultancy.<br><br>Emmy began her career at the global management consulting firm McKinsey \& Company and cut her teeth in politics on the 2008 Obama campaign. She is a graduate of Yale College, where she majored in East Asian Studies and studied abroad in Beijing and Taipei. She was born and raised in Tokyo and lives there now with her husband and one-year-old daughter.</p>
        </div>
      </div>
      <div class="speaker-wrapper">
        <div class="img-wrapper"><img class="speaker-img" src="../assets/BacaR.png" alt="Rich" /></div>
        <div class="speaker-bio-wrapper">
          <h2>Danielle Baca</h2>
          <p>Danielle Baca started with Nike in 2002 as an Administrative Assistant in Entertainment Marketing and since then, has had experiences in Sports Marketing and North America’s Direct To Consumer business. In the summer of 2012 she was offered the chance to move to Amsterdam and lead the Digital Merchandising function for Europe. Following 3 years in the Netherlands Danielle accepted the opportunity to run Nike’s e-commerce business in Japan as the General Manager of Nike.com/JP. Prior to Nike, Danielle worked in the Hotel and Retail industries Colorado and on the East Coast.<br><br>Danielle is a graduate of Fort Lewis College in Durango, Colorado, an avid runner and passionate about her and her kids’ sports. Although Danielle grew up in sunny Colorado, she, her husband Bob and their two kids now call Oregon home.</p>
        </div>
      </div>
      <div class="speaker-wrapper">
        <div class="img-wrapper"><img class="speaker-img" src="../assets/MiyataR.png" alt="Rich" /></div>
        <div class="speaker-bio-wrapper">
          <h2>Mika Jiang Miyata</h2>
          <p>Mika Jiang Miyata studied as a child at Nishimachi International School and the American School in Japan (1987). After high school, she studied Comparative Culture at Sophia University. She graduated in 1992 and obtained her interpretation training at the Diplomatt School. She specializes in business and medical interpretation.</p>
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
    }
    .img-wrapper {
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
