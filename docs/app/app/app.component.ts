import { Component, OnInit } from '@angular/core';
import { NavComponent } from './nav.component';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

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
      max-width:80vw;
      height:auto;
    }
    `
  ]
})
export class AppComponent implements OnInit {
  title = 'Problems, Possibilities, Power';
  public hideNav: boolean = true;
  public location: Location;
  constructor(location: Location, private titleService: Title) {
    this.location = location;
  };

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  ngOnInit() {
    this.setTitle("Women In Japan 2017 | " + this.title);
  }
}
