import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'speakers',
  template: `
    <h1>Keynote Speakers</h1>
    <div class="wrapper">
      <div class="keynote-wrapper level-wrapper">

        <div class="speaker-wrapper keynote-speaker">
        <div class="img-wrapper"><img class="speaker-img" src="../assets/HayashiC.png" alt="Fumiko Hayashi" /></div>
          <div class="speaker-bio-wrapper">
            <h2>Fumiko Hayashi</h2>
            <p>fumiko hayashi bio</p>
          </div>
        </div>

        <div class="speaker-wrapper keynote-speaker">
          <div class="img-wrapper"><img class="speaker-img" src="../assets/InoguchiC.png" alt="Kuniko Inoguchi" /></div>
          <div class="speaker-bio-wrapper">
            <h2>Kuniko Inoguchi</h2>
            <p>Kuniko INOGUCHI, Ph.D. is Member, House of Councillors of Japan, Chairman, Special Committee on Okinawa and Northern Problems, and Member, of the Science Council of Japan. She was appointed Minister of State for Gender Equality and Social Affairs (2005 to 2006), and elected as Member of the House of Representatives (2005 to 2009). Prior to her political appointments, she served as Ambassador Extraordinary and Plenipotentiary and Head of the Delegation of Japan to the Conference on Disarmament in Geneva, Switzerland (2002 to 2004). Prior to her appointment as Ambassador, she taught first as Associate Professor, then Professor of Political Science in the Faculty of Law at Sophia University, Tokyo (1981 to 2002). <br><br>She received her Ph.D. in Political Science from Yale University (1982), M.A. from Yale University (1977), and B.A. from Sophia University (1975). She is married to Takashi Inoguchi, President of the University of Niigata Prefecture, and former Professor of the University of Tokyo. They reside in Tokyo and have two daughters.</p>
          </div>

        </div>
      </div>

      <h1>Panel One</h1>

      <div class="panel-one-top level-wrapper">

        <div class="speaker-wrapper">
          <div class="img-wrapper"><img class="speaker-img" src="../assets/NakajoC.png" alt="Akiko Nakajo" /></div>
          <div class="speaker-bio-wrapper">
            <h2>Akiko Nakajo</h2>
            <p>Akiko leads APAC Google Partner Plex where Google helps our clients and partners develop their innovative visions, strategies, and digitize their business. She joined Google in April 2013 and she led and expanded Google’s digital marketing business. Prior to Google, she was President/Head of Asia Pacific in Bloomberg K.K. in Japan. <br><br>Akiko has a BA in Political Science and Economics from Waseda University and an MBA from The University of Chicago. She completed the Advanced Management Program at Harvard Business School. She serves for Kirin Company, Limited as a Director of the Board (outside) from April, 2016. She is a proud mother of two young boys.</p>
          </div>
        </div>

        <div class="speaker-wrapper">
          <div class="img-wrapper"><img class="speaker-img" src="../assets/ShahC.png" alt="Sachin Shah" /></div>
          <div class="speaker-bio-wrapper">
            <h2>Sachin Shah</h2>
            <p>Sachin N. Shah received a B.S. degree in electrical engineering and a master’s degree in technology and business management from Stevens Institute of Technology in New Jersey. Shah is Executive Vice President for MetLife. He is the Chairman, President and Chief Executive Officer of MetLife Insurance K.K. He is also a member of the Board of Directors and Representative Statutory Executive Officer of MetLife Insurance K.K. Before his assignments in Japan, Shah was the global leader for the integration of Alico into MetLife until closing of the transaction in November 2010. Shah serves on the board of the US Japan Business Council and on the Board of Governors for the American Chamber of Commerce in Japan.</p>
          </div>
        </div>

      </div>

      <div class="panel-one-bottom level-wrapper">

        <div class="speaker-wrapper">
          <div class="img-wrapper"><img class="speaker-img" src="../assets/SilvesterC.png" alt="Noriko Silvester" /></div>
          <div class="speaker-bio-wrapper">
            <h2>Noriko Silvester</h2>
            <p>Akiko leads APAC Google Partner Plex where Google helps our clients and partners develop their innovative visions, strategies, and digitize their business. She joined Google in April 2013 and she led and expanded Google’s digital marketing business. Prior to Google, she was President/Head of Asia Pacific in Bloomberg K.K. in Japan. <br><br>Akiko has a BA in Political Science and Economics from Waseda University and an MBA from The University of Chicago. She completed the Advanced Management Program at Harvard Business School. She serves for Kirin Company, Limited as a Director of the Board (outside) from April, 2016. She is a proud mother of two young boys.</p>
          </div>
        </div>

        <div class="speaker-wrapper">
          <div class="img-wrapper"><img class="speaker-img" src="../assets/NagaseC.png" alt="Nobuko Nagase" /></div>
          <div class="speaker-bio-wrapper">
            <h2>Nobuko Nagase</h2>
            <p>Sachin N. Shah received a B.S. degree in electrical engineering and a master’s degree in technology and business management from Stevens Institute of Technology in New Jersey. Shah is Executive Vice President for MetLife. He is the Chairman, President and Chief Executive Officer of MetLife Insurance K.K. He is also a member of the Board of Directors and Representative Statutory Executive Officer of MetLife Insurance K.K. Before his assignments in Japan, Shah was the global leader for the integration of Alico into MetLife until closing of the transaction in November 2010. Shah serves on the board of the US Japan Business Council and on the Board of Governors for the American Chamber of Commerce in Japan.</p>
          </div>
        </div>

      </div>

      <h1>Breakout</h1>

      <div class="breakout-level level-wrapper">

        <div class="speaker-wrapper">
          <div class="img-wrapper"><img class="speaker-img" src="../assets/HarrisC.png" alt="Emmy Harris" /></div>
          <div class="speaker-bio-wrapper">
            <h2>Emmy Harris</h2>
            <p>Emmy currently serves as the Asia Managing Director for Change.org -- the world's largest petition platform, with over 180 million users in 196 countries. <br><br>Before joining Change.org and returning to Tokyo, Emmy lived in New York City and played an instrumental role in building Purpose (purpose.com) into a leading social movement incubator and consultancy.<br><br>Emmy began her career at the global management consulting firm McKinsey \& Company and cut her teeth in politics on the 2008 Obama campaign. She is a graduate of Yale College, where she majored in East Asian Studies and studied abroad in Beijing and Taipei. She was born and raised in Tokyo and lives there now with her husband and one-year-old daughter.</p>
          </div>
        </div>

        <div class="speaker-wrapper">
          <div class="img-wrapper"><img class="speaker-img" src="../assets/MurakamiC.png" alt="Yumiko Murakami" /></div>
          <div class="speaker-bio-wrapper">
            <h2>Yumiko Murakami</h2>
            <p>Yumiko Murakami has been at the forefront of policy discussions between OECD and governments, businesses and academia in Japan and Asia, covering a wide range of economic policy areas since she joined the OECD in 2013 as Head of OECD Tokyo Centre. She has been leading discussions with various stake holders, particularly in the areas of Corporate Governance, tax guidelines, gender diversity, education, international trade and innovation.<br><br>Yumiko has diversified professional experiences, ranging from a number of leadership positions in banking business to UN PKO.<br><br>Yumiko has MBA from Harvard University, MA from Stanford University and BA from Sophia University.</p>
          </div>
        </div>

        <div class="speaker-wrapper">
          <div class="img-wrapper"><img class="speaker-img" src="../assets/WihmanC.png" alt="Peter Wihman" /></div>
          <div class="speaker-bio-wrapper">
            <h2>Peter Wihman</h2>
            <p>Peter has been with Microsoft for over twenty years working in various field management roles for the Enterprise and Microsoft Consulting Services, and is now based at the Microsoft Japan office in Tokyo, Japan. He is part of the Japanese Enterprise and Partner group, managing a team of over two hundred deep specialists across the Microsoft cloud and devices portfolio. During his career within Microsoft, Peter has focused on pushing the envelope in leading teams to sell and implement best of breed enterprise solutions in collaboration, integration and mainframe application re-platforming. Peter will speak about the importance of diversity in the workplace.</p>
          </div>
        </div>

      </div>

      <h1>Panel Two</h1>

      <div class="panel-two-top level-wrapper">

        <div class="speaker-wrapper">
          <div class="img-wrapper"><img class="speaker-img" src="../assets/RichC.png" alt="Motoko Rich" /></div>
          <div class="speaker-bio-wrapper">
            <h2>Motoko Rich</h2>
            <p>Akiko leads APAC Google Partner Plex where Google helps our clients and partners develop their innovative visions, strategies, and digitize their business. She joined Google in April 2013 and she led and expanded Google’s digital marketing business. Prior to Google, she was President/Head of Asia Pacific in Bloomberg K.K. in Japan. <br><br>Akiko has a BA in Political Science and Economics from Waseda University and an MBA from The University of Chicago. She completed the Advanced Management Program at Harvard Business School. She serves for Kirin Company, Limited as a Director of the Board (outside) from April, 2016. She is a proud mother of two young boys.</p>
          </div>
        </div>

        <div class="speaker-wrapper">
          <div class="img-wrapper"><img class="speaker-img" src="../assets/BacaC.png" alt="Danielle Baca" /></div>
          <div class="speaker-bio-wrapper">
            <h2>Danielle Baca</h2>
            <p>Danielle Baca started with Nike in 2002 as an Administrative Assistant in Entertainment Marketing and since then, has had experiences in Sports Marketing and North America’s Direct To Consumer business. In the summer of 2012 she was offered the chance to move to Amsterdam and lead the Digital Merchandising function for Europe. Following 3 years in the Netherlands Danielle accepted the opportunity to run Nike’s e-commerce business in Japan as the General Manager of Nike.com/JP. Prior to Nike, Danielle worked in the Hotel and Retail industries Colorado and on the East Coast.<br><br>Danielle is a graduate of Fort Lewis College in Durango, Colorado, an avid runner and passionate about her and her kids’ sports. Although Danielle grew up in sunny Colorado, she, her husband Bob and their two kids now call Oregon home.</p>
          </div>
        </div>

      </div>

      <div class="panel-two-bottom level-wrapper">

        <div class="speaker-wrapper">
          <div class="img-wrapper"><img class="speaker-img" src="../assets/IshitaniC.png" alt="Keiko Ishitani" /></div>
          <div class="speaker-bio-wrapper">
            <h2>Keiko Ishitani</h2>
            <p>Keiko Ishitani is a managing director in the marketing department of Ueshima Coffee Company. Previous to working at UCC, Keiko worked for Procter and Gamble for 26 years. There, she worked as a brand manager for health care and Febreze before becoming a marketing director for pet care. She operated as a Global Franchise Leader in the US before moving back to Tokyo to become the brand operations leader in Japan and later in Singapore for the Asia Pacific region. She earned her BA at Tsudajuku University, and currently lives in Tokyo with her husband, two kids, and three dogs.</p>
          </div>
        </div>

        <div class="speaker-wrapper">
          <div class="img-wrapper"><img class="speaker-img" src="../assets/TaylorC.png" alt="Akiko Ryu Innes-Taylor" /></div>
          <div class="speaker-bio-wrapper">
            <h2>Akiko Ryu Innes-Taylor</h2>
            <p>Akiko Ryu Innes Taylor joined the Saga Nutrition Institute of Otsuka Pharmaceutical as a researcher in 1986 and was later transferred to the marketing department. In 1993 she was appointed as the Brand manager of Pocari Sweat. She left Otsuka in 1996, and moved to American Advertising agency, and after worked at Bluebell Japan and Sisley Japan between 2000 and 2005. In 2006, she returned to Otsuka Pharmaceuticals as a Senior Operating Officer. In 2015, she was transferred to Otsuka Holdings (the parent company of Otsuka Pharmaceuticals) as a Senior Operating Officer, Head of Human Resource Planning Office, and has been devoted to finding excellent talents and develop them further since then. </p>
          </div>
        </div>

      </div>

      <h1>Interpreter</h1>

      <div class="speaker-wrapper">
        <div class="img-wrapper"><img class="speaker-img" src="../assets/MiyataC.png" alt="Mika Jiang Miyata" /></div>
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
      flex-direction:column;
      padding-bottom:30px;
      align-items:center;
      flex-basis:45%;
      padding-left: 10px;
      padding-right:10px;
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
      margin-bottom:20px;
    }
    .level-wrapper {
      display:flex;
      flex-direction:row;
      justify-content:space-between;
    }
    .keynote-speaker {
      flex-basis:50%;
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
