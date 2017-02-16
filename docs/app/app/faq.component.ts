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
    <p>Yes, there is a required fee to attend the conference. However, SAGE will be fundraising for the Asian University for Women in Bangladesh, so we encourage all participants to donate 500 yen. If everyone that attends donates 500 yen to AUW, we will be able to raise one scholarship for one student to attend university for a year!</p>

    <h3>Is there a dress code? </h3>
    <p>No, there is no dress code. </p>
  `
})
export class FaqComponent { }
