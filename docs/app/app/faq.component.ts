import { Component } from '@angular/core';

@Component({
  selector: 'faq',
  template: `
    <h1>Frequently Asked Questions</h1>

    <div class="qa-wrapper">
      <h3>Do I have to register or can I just come?</h3>
      <p>All participants must register to attend the conference. We are a secure campus with entrance requirements, and we also have seating limitations at our venues. Please register through the registration tab.</p>
    </div>

    <div class="qa-wrapper">
      <h3>What if the Google form does not work?</h3>
      <p>If the Google form does not work for you, please email "wij.sage@gmail.com" with your name, email address, grade, school, and if you would like a Japanese to English translation headset.</p>
    </div>

    <div class="qa-wrapper">
      <h3>Do I have to pay to attend?</h3>
      <p>Yes, there is a required fee of ¥500 to attend the conference. This fee will be collected at the door during registration. SAGE will also be holding several fundraising events during the conference, from which all funds will go to scholarships for women to attend the Asian University for Women in Bangladesh.</p>
    </div>

    <div class="qa-wrapper">
      <h3>Is there a dress code? </h3>
      <p>Although there is no formal dress code, participants are encouraged to wear red as a show of solidarity with international women's rights movements.</p>
    </div>

    <div class="qa-wrapper">
      <h3>Will I miss class for the conference? (I am an ASIJ student)</h3>
      <p>No, as the conference is on a PACT day, it will only begin after all classes have finished. There will be buses available after the conference.</p>
    </div>

    <div class="qa-wrapper">
      <h3>How do I get to ASIJ?</h3>
      <p>Please use the map provided below for guidance.</p>
      <img src="../assets/map.png" alt="Map to ASIJ" />
    </div>
  `,
  styles:[`
    img {
      width:70vw;
      margin:auto;
    }
    .qa-wrapper {
      padding-bottom:15px;
      padding-top:15px;
    }
    h3 {
      margin:0;
    }
    p {
      margin:0;
    }
    `]
})
export class FaqComponent { }
