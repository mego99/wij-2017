import { Component } from '@angular/core';
import { NavComponent } from './nav.component';
import { Location } from '@angular/common';

@Component({
  selector: 'my-app',
  template: `
  <div class="body-wrapper">
  <my-nav *ngIf="location.path() !== '/splash'"></my-nav>

      <router-outlet name="my-nav"></router-outlet>
      <div class="content-wrapper flex-item">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`

    a {
      text-decoration:none;
      color:#000;
    }
    a:hover {
      color:#1ec9b0;
      transition-duration:0.5s;
    }
    .body-wrapper {
      display:flex;
      flex-direction:column;
      justify-content:center;
    }
    .content-wrapper {
      text-align:center;
      padding: 0 10vw 0 10vw;
      max-width:100vw;
      height:auto;
    }
    `
  ]
})
export class AppComponent  {
  title = 'Women in Japan 2017';
  public hideNav: boolean = true;
  public location: Location;
  constructor(location: Location) {this.location = location};
}
