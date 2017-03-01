import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  template: `

    <h1>Contact Us!</h1>

    <div class="links-wrapper">
      <div class="contact-category-wrapper">
        <a href="mailto:wij.sage@gmail.com"><img class="link-image" src="../assets/gmail.png"/></a>
        <h1>Email</h1>
      </div>

      <div class="contact-category-wrapper">
        <a href="https://www.facebook.com/wij.sage"><img class="link-image" src="../assets/facebook.png"/></a>
        <h1>Our Facebook Page</h1>
      </div>

      <div class="contact-category-wrapper">
        <a href="https://www.facebook.com/events/163735387449802/"><img class="link-image" src="../assets/facebook.png"/></a>
        <h1>Our Facebook Event</h1>
      </div>
    </div>



    `,
    styles:[`
      .h1 {
        display:inline-table;
      }
      .links-wrapper {
        display:flex;
        flex-direction:row;
        flex-basis:30%;
        justify-content:space-around;
        align-items:flex-end;
        margin-top:50px;
      }
      .link-image {
        width:200px;
      }
      .contact-category-wrapper {
        display:flex;
        flex-direction:column;
      }
      @media (max-width:600px) {
        .links-wrapper {
          flex-direction:column;
          align-items:center;
        }
      }
      `]
})
export class ContactComponent { }
