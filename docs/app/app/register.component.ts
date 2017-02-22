import { Component } from '@angular/core';

@Component({
  selector: 'register',
  template: `
    <h1>Registration</h1>
    <p>Registration is a two-part process. Please fill out both forms below.</p>
    <div class="links-wrapper">
      <a href="https://docs.google.com/a/asij.ac.jp/forms/d/e/1FAIpQLScwBhX_hhsNxgCbgqmtGn5udoJPwvNQykEWcMafl7yR1n0lZQ/viewform" target="_blank"><h1>Form 1 \> </h1></a>
      <a href="https://docs.google.com/forms/d/18gF_FJnNM57gVqiQ3d_HC3uTvRvNf5FzISr745-Rxqo/viewform" target="_blank"><h1>Form 2 \> </h1></a>

    </div>
  `,
  styles:[`
    a {
      cursor:pointer;
      padding:50px;
      flex-basis:100%;
      background-image:url('../assets/logo-small.png');
      background-repeat:no-repeat;
      background-position: 0% 25%;
      margin:30px;
      color:black;
      background-color:#ff9898;
    }
    a:hover {
      color:#573e3e;
    }
    .links-wrapper {
      display:flex;
      flex-direction:column;

    }
    .link {

    }
    `]
})
export class RegisterComponent { }
