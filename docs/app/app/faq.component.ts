import { Component } from '@angular/core';

@Component({
  selector: 'faq',
  template: `
    <h1>Frequently Asked Questions</h1>
    <h3>Do I have to register or can I just come?</h3>
    <p>All participants must register to attend the conference. We are a secure campus with entrance requirements, and we also have seating limitations at our venues. Please register through the registration tab.</p>

    <h3>What if the Google form does not work?</h3>
    <p>If the Google form does not work for you, please email "wij.sage@gmail.com" with your name, email address, grade, school, and if you would like a Japanese to English translation headset.</p>

    <h3>Do I have to pay to attend?</h3>
    <p>Yes, there is a required fee of ¥500 to attend the conference. This fee will be collected at the door during registration. SAGE will also be holding several fundraising events during the conference, from which all funds will go to scholarships for women to attend the Asian University for Women in Bangladesh.</p>

    <h3>Is there a dress code? </h3>
    <p>No, there is no dress code. </p>
  `
})
export class FaqComponent { }
