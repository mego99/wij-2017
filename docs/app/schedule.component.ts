import { Component } from '@angular/core';

@Component({
  selector: 'schedule',
  template: `
  <div class="schedule-wrapper">
    <h1>Schedule</h1>

    <h2>Registration</h2>
    <p class="time">1:00PM <span class="location">Theater Lobby</span></p>

    <h2>Opening Keynote Address</h2>
    <h3 class="speaker">Fumiko Hayashi</h3>
    <p class="time">1:30PM-2:00PM <span class="location">Theater</span></p>

    <h2>Panel: Women, Children, and the Workplace</h2>
    <h3 class="speaker">Noriko Silvester</h3>
    <h3 class="speaker">TBD<span class="caption"> moderator</span></h3>
    <p class="time">2:15PM-3:05PM <span class="location"></span></p>

    <h3 class="break">Break</h3>

    <h2>Individual Sessions</h2>
    <p class="time-close">3:20PM-4:00PM</p>
    <div class="speakers-wrapper">
      <div class="speaker-mini">
        <h3 class="speaker">Yumiko Murakami</h3>
        <p class="location">Theater</p>
      </div>
      <div class="speaker-mini">
        <h3 class="speaker">Emmy Harris</h3>
        <p class="location">Black Box</p>
      </div>
      <div class="speaker-mini">
        <h3 class="speaker">Peter Wihman</h3>
        <p class="location">MPR</p>
      </div>
    </div>

    <h3 class="break">Break</h3>

    <h2>Panel: Possibilities and Power</h2>
    <h3 class="speaker">Motoko Rich, Akiko Nakajo, Keiko Ishitani</h3>
    <h3 class="speaker">Akiko Ryu Innes<span class="caption"> moderator</span></h3>
    <p class="time">4:15PM-5:05PM <span class="location"></span></p>

    <h2>Closing Keynote Address</h2>
    <h3 class="speaker">Kuniko Inoguchi</h3>
    <p class="time">5:15PM-5:45PM <span class="location">Theater</span></p>


  </div>
  `,
  styles:[`
    .schedule-wrapper {
      margin:0px 10vw;
    }
    h2 {
      font-size:1.8em;
      text-align:left;
      margin:0;
    }
    p {
      font-size:1em;
      margin:0;
    }
    h3 {
      font-size:1.2em;
    }
    .location {
      text-transform:uppercase;
      text-align:right;
      color:#ffbfc6;
      text-align:left;
    }
    .time {
      text-transform:uppercase;
      text-align:left;
      margin-bottom:20px;
    }
    .speaker {
      text-style:bold;
      margin:0;
      text-align:left;
    }
    .caption {
      font-size:0.6em;
      text-transform: uppercase;
      text-style:oblique;
    }
    .speakers-wrapper {
      display:flex;
      flex-direction:row;
      margin-bottom:20px;
    }
    .time-close {
      text-transform:uppercase;
      text-align:left;
    }
    .speaker-mini {
      padding-right:20px;
    }
    h3.break {
      text-transform:uppercase;
      margin: 20px 0 20px 10px;
      text-align:left;
    }
    `]
})
export class ScheduleComponent { }
