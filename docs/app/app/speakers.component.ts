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
            <p>Fumiko Hayashi was elected as the first woman Mayor of Yokohama in 2009, and reelected in August 2013. She puts a lot of effort into support for female empowerment strategies, such as solving the issue of children on waiting lists of child care centers, female entrepreneurship and networking among women. Before assuming office as Mayor, she had an extensive career in the business world. She found her niche in the occupation of car sales and became the top salesperson in the company. She served as President of BMW Tokyo, Corp., Chairperson and CEO of The Daiei, Inc., Operating Officer of Nissan Motor Co. Ltd. Selected as one of Wall Street Journal’s “50 Women to Watch” in 2004 and one of Fortune Magazine’s “50 Most Powerful Women in Business: International” in 2008.</p>
          </div>
        </div>

        <div class="speaker-wrapper keynote-speaker">
          <div class="img-wrapper"><img class="speaker-img" src="../assets/InoguchiC.png" alt="Kuniko Inoguchi" /></div>
          <div class="speaker-bio-wrapper">
            <h2>Kuniko Inoguchi</h2>
            <p>Kuniko Inoguchi, Ph.D. is a Member of the House of Councillors of Japan; Chairman of the Special Committee on Okinawa and Northern Problems; and Member of the Science Council of Japan. She was appointed Minister of State for Gender Equality and Social Affairs (2005 to 2006), and elected as Member of the House of Representatives (2005 to 2009). Prior to her political appointments, she served as Ambassador Extraordinary and Plenipotentiary and Head of the Delegation of Japan to the Conference on Disarmament in Geneva, Switzerland (2002 to 2004). Prior to her appointment as Ambassador, she taught first as Associate Professor, then Professor of Political Science in the Faculty of Law at Sophia University, Tokyo (1981 to 2002). She received her Ph.D. in Political Science from Yale University (1982), M.A. from Yale University (1977), and B.A. from Sophia University (1975). She lives in Tokyo with her husband and two daughters.</p>
          </div>

        </div>
      </div>

      <h1>Panel One</h1>

      <div class="panel-one-top level-wrapper">

        <div class="speaker-wrapper">
          <div class="img-wrapper"><img class="speaker-img" src="../assets/NakajoC.png" alt="Akiko Nakajo" /></div>
          <div class="speaker-bio-wrapper">
            <h2>Akiko Nakajo</h2>
            <p>Akiko leads APAC Google Partner Plex where Google helps our clients and partners develop their innovative visions, strategies, and digitize their business. She joined Google in April 2013 and she led and expanded Google’s digital marketing business. Prior to Google, she was President/Head of Asia Pacific in Bloomberg K.K. in Japan. Akiko has a BA in Political Science and Economics from Waseda University and an MBA from The University of Chicago. She completed the Advanced Management Program at Harvard Business School. She serves for Kirin Company, Limited as a Director of the Board (outside) from April, 2016. She is a proud mother of two young boys.</p>
          </div>
        </div>

        <div class="speaker-wrapper">
          <div class="img-wrapper"><img class="speaker-img" src="../assets/ShahC.png" alt="Sachin Shah" /></div>
          <div class="speaker-bio-wrapper">
            <h2>Sachin Shah</h2>
            <p>Sachin N. Shah is Executive Vice President for MetLife. He is the Chairman, President and Chief Executive Officer of MetLife Insurance K.K. He is also a member of the Board of Directors and Representative Statutory Executive Officer of MetLife Insurance K.K. Shah has held these positions since August 1, 2013 and is responsible for overseeing all of MetLife’s Japan operations. Prior to this role, he was the Chief Operating Officer for MetLife Insurance K.K. from 2011. Before his assignments in Japan, Shah was the global leader for the integration of Alico into MetLife until closing of the transaction in November 2010. Shah serves on the board of the US Japan Business Council and also on the board of governors for the American Chamber of Commerce in Japan. Shah received a B.S. degree in electrical engineering and a master’s degree in technology and business management from Stevens Institute of Technology in New Jersey.</p>
          </div>
        </div>

      </div>

      <div class="panel-one-bottom level-wrapper three">

        <div class="speaker-wrapper">
          <div class="img-wrapper"><img class="speaker-img" src="../assets/SilvesterC.png" alt="Noriko Silvester" /></div>
          <div class="speaker-bio-wrapper">
            <h2>Noriko Silvester</h2>
            <p>Noriko Silvester is the Founder and Managing Director of Candlewick Co., Ltd. She started her career as an executive secretary in an American financial firm in Japan, but dissatisfied with merely a supporting position, she moved into sales and training in a cosmetic firm. In this role, Noriko continued to develop her career as she traveled nationwide.  In 1999, she took an opportunity to join British pharmaceutical retailer, Boots, as one of the founding members in Japan. When Boots withdrew from Japan some years later, she decided to take direct control of her career and started Candlewick, a PR and marketing consultancy. 14 years onwards, 90% of Candlewick’s staff are women and 66% are working mothers.</p>
          </div>
        </div>

        <div class="speaker-wrapper">
          <div class="img-wrapper"><img class="speaker-img" src="../assets/NagaseC.png" alt="Nobuko Nagase" /></div>
          <div class="speaker-bio-wrapper">
            <h2>Nobuko Nagase</h2>
            <p>Nobuko Nagase is a professor of Labor Economics and Social Policy at Ochanomizu University in Tokyo, Japan. She has written about work and family from the Asian perspective, comparing Japan with other East Asian and Western economies. Her interests include wage structure and work choice, labor market regulations and social security, tax and other institutional effects on work and gender, marital behavior and child-birth timing. She obtained her Ph.D. in 1995 from the University of Tokyo, Economics Department.Nagase is a Council Member of Science Council of Japan from 2014, and the Chair of Work and Life Balance Research of Science Council. She has served in governmental appointments such as the Statistics Commission, the Japanese Tax Commission, and Special Committee on Council for Gender Equality at the Japanese Cabinet Office.</p>
          </div>
        </div>

        <div class="speaker-wrapper">
          <div class="img-wrapper"><img class="speaker-img" src="../assets/coming-soon-speaker.png" alt="Karen Kameya" /></div>
          <div class="speaker-bio-wrapper">
            <h2>Karen Kameya</h2>
            <p>Karin Kameya is a consultant in the Health Sciences Global Business Unit at Oracle, specializing in clinical trial data capture systems for clients in the pharmaceutical industry and academia. Prior to joining Oracle, she was a clinical data manager at contract research organization CMIC. Karin is a graduate of Pomona College, where she majored in Mathematics. She currently lives in Tokyo with her husband and two sons.</p>
          </div>
        </div>

      </div>

      <h1>Breakout</h1>

      <div class="breakout-level level-wrapper three">

        <div class="speaker-wrapper">
          <div class="img-wrapper"><img class="speaker-img" src="../assets/HarrisC.png" alt="Emmy Harris" /></div>
          <div class="speaker-bio-wrapper">
            <h2>Emmy Harris</h2>
            <p>Emmy currently serves as the Asia Managing Director for Change.org—the world's largest petition platform, with over 180 million users in 196 countries. Before joining Change.org and returning to Tokyo, Emmy lived in New York City and played an instrumental role in building <a href="purpose.com"> Purpose</a> into a leading social movement incubator and consultancy. Emmy began her career at the global management consulting firm McKinsey \& Company and cut her teeth in politics on the 2008 Obama campaign. She is a graduate of Yale College, where she majored in East Asian Studies and studied abroad in Beijing and Taipei. She was born and raised in Tokyo and lives there now with her husband and one-year-old daughter.</p>
          </div>
        </div>

        <div class="speaker-wrapper">
          <div class="img-wrapper"><img class="speaker-img" src="../assets/MurakamiC.png" alt="Yumiko Murakami" /></div>
          <div class="speaker-bio-wrapper">
            <h2>Yumiko Murakami</h2>
            <p>Yumiko Murakami has been at the forefront of policy discussions between OECD and governments, businesses and academia in Japan and Asia, covering a wide range of economic policy areas since she joined the OECD in 2013 as Head of OECD Tokyo Centre. She has been leading discussions with various stake holders, particularly in the areas of Corporate Governance, tax guidelines, gender diversity, education, international trade and innovation. Yumiko has diversified professional experiences, ranging from a number of leadership positions in banking business to UN PKO. Yumiko has MBA from Harvard University, MA from Stanford University and BA from Sophia University.</p>
          </div>
        </div>

        <div class="speaker-wrapper">
          <div class="img-wrapper"><img class="speaker-img" src="../assets/WihmanC.png" alt="Peter Wihman" /></div>
          <div class="speaker-bio-wrapper">
            <h2>Peter Wihman</h2>
            <p>Peter Wihman has been with Microsoft for over twenty years working in various field management roles for the Enterprise and Microsoft Consulting Services, and is now based at the Microsoft Japan office in Tokyo, Japan. He is part of the Japanese Enterprise and Partner group, managing a team of over two hundred deep specialists across the Microsoft cloud and devices portfolio. During his career within Microsoft, Peter has focused on pushing the envelope in leading teams to sell and implement best of breed enterprise solutions in collaboration, integration and mainframe application re-platforming. He is happily married and is the father of two girls. Peter will speak about the importance of diversity in the workplace.</p>
          </div>
        </div>

      </div>

      <h1>Panel Two</h1>

      <div class="panel-two-top level-wrapper">

        <div class="speaker-wrapper">
          <div class="img-wrapper"><img class="speaker-img" src="../assets/RichC.png" alt="Motoko Rich" /></div>
          <div class="speaker-bio-wrapper">
            <h2>Motoko Rich</h2>
            <p>Motoko Rich is Tokyo Bureau Chief for <i>The New York Times</i>, where she writes about politics, national security, foreign policy, women’s issues, the challenges of an aging society, and culture.  She came to Japan in August, after nearly four years writing about K-12 education for the <i>Times</i>’ national desk. She focused primarily on public schools and the challenges they face in testing, demographic change, race relations, preparing and evaluating teachers, school discipline, technology and government policy. Before coming to <i>The Times</i>, Ms. Rich was a reporter at <i>The Wall Street Journal</i> and the <i>Financial Times</i> in London. Born in Los Angeles and raised in Tokyo and Petaluma, Calif., Ms. Rich graduated from Yale in 1991. She also received a degree in English from Cambridge University in England. She currently lives with her husband and two children in Tokyo.</p>
          </div>
        </div>

        <div class="speaker-wrapper">
          <div class="img-wrapper"><img class="speaker-img" src="../assets/BacaC.png" alt="Danielle Baca" /></div>
          <div class="speaker-bio-wrapper">
            <h2>Danielle Baca</h2>
            <p>Danielle Baca started with Nike in 2002 as an Administrative Assistant in Entertainment Marketing and since then, has had experiences in Sports Marketing and North America’s Direct To Consumer business. In the summer of 2012 she was offered the chance to move to Amsterdam and lead the Digital Merchandising function for Europe. Following 3 years in the Netherlands Danielle accepted the opportunity to run Nike’s e-commerce business in Japan as the General Manager of Nike.com/JP. Prior to Nike, Danielle worked in the Hotel and Retail industries Colorado and on the East Coast. Danielle is a graduate of Fort Lewis College in Durango, Colorado, an avid runner and passionate about her and her kids’ sports. Although Danielle grew up in sunny Colorado, she, her husband Bob and their two kids now call Oregon home.</p>
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
            <p>Akiko Ryu Innes-Taylor serves as Senior Vice President and Head of Human Resource Planning at Otsuka Holdings Co., Ltd. In this position, she is devoted to finding and developing excellent talents. She originally joined Otsuka Pharmaceuticals as a researcher at the Saga Nutrition Institute in 1986, but has since worked in Marketing and Global Communication. Akiko has also worked for the American Advertising Agency and Master Foods (currently Mars Japan). In 2000, she took a job at Bluebell Japan, where she was General Manager for Cosmetics. In 2005, prior to moving to Otsuka, she was a Representative Director for Sisley Japan. Akiko has also long-been an advocate for the advancement for women, and has participated in the APEC Women \& Economy Summit several times.</p>
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
    h1 {
      display:inline-table;
      margin:auto;
      margin-bottom:50px;
      margin-top:50px;
    }
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
    .three {
      flex-basis:33%;
    }
    .bio-cs {
      color:#ff3434;
      text-style:oblique;
    }

    @media (max-width:600px) {
      .level-wrapper {
        flex-direction:column;
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
