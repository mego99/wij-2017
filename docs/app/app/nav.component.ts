import { Component } from '@angular/core';

@Component({
  selector:'my-nav',
  template:`
  <ul class="nav-wrapper flex-item">
      <li class="nav-item nav"><a routerLink="/index">Home </a> </li>
      <li class="nav-item nav"><a routerLink="/about">About Us</a> </li>
      <li class="nav-item nav"><a routerLink="/speakers">Speakers </a> </li>
      <li class="nav-item nav"><a routerLink="/register">Register </a> </li>
      <li class="nav-item nav"><a routerLink="/schedule">Schedule </a> </li>
      <li class="nav-item nav"><a routerLink="/contact">Contact </a> </li>
      <li class="nav-item nav"><a routerLink="/faq">FAQ </a> </li>
    </ul>
    `,
    styles: [`
      .nav-item {
        font-family: 'Nunito Sans', sans-serif;
        display:inline-block;
        padding:10px;
        border-radius:5px;
      }
      .nav-item:hover {
      }
      .nav-wrapper {
        text-align:center;
        border-bottom: 3px solid #000;
        margin:0;
        top:0;
        left:0;
        background-color:#ed2024;
        width:100vw;
        padding:20px;
        box-sizing:border-box;
      }
      a {
        color:#131313;
        text-decoration: none;
      }
      a:hover {
        color:#ffe0e1;
        transition:.5s;
      }
      a:active {
        color:#ff003d;
      }
      `]
})
export class NavComponent {
}
