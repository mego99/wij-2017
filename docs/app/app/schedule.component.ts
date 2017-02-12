import { Component } from '@angular/core';

@Component({
  selector: 'schedule',
  template: `
  <div class="schedule-wrapper">
    <h1>Schedule</h1>

    <div class="schedule-block">
      <h2>Registration</h2>
      <p class="time">1:00PM <span class="location">Theater Lobby</span></p>
    </div>

    <div class="schedule-block">
      <h2>Opening Address</h2>
      <h3 class="speaker">Miki Jiang Miyata<span class="caption"> interpreter</span></h3>
      <h3 class="speaker">Fumiko Hayashi <span class="caption">Mayor of Yokohama</span></h3>
      <p class="time">1:30PM-2:00PM <span class="location">Theater</span></p>
    </div>

    <div class="schedule-block">
      <h2>Panel: Women, Children, and the Workplace</h2>
      <h3 class="speaker">Noriko Silvester <span class="caption">Candlewick</span></h3>
      <h3 class="speaker">Akiko Nakajo <span class="caption">Google</span></h3>
      <h3 class="speaker">TBD<span class="caption"> moderator</span></h3>
      <p class="time">2:15PM-3:05PM <span class="location"></span></p>
    </div>

    <div class="schedule-block">
      <h3 class="break">Break</h3>
    </div>

    <div class="schedule-block">
      <h2>Individual Sessions</h2>
      <p class="time-close">3:20PM-4:00PM</p>
      <div class="speakers-wrapper">
        <div class="speaker-mini">
          <h3 class="speaker">Yumiko Murakami <span class="caption">OECD</span></h3>
          <p class="location">Theater</p>
        </div>
        <div class="speaker-mini">
          <h3 class="speaker">Emmy Harris <span class="caption">Change.org</span></h3>
          <p class="location">Black Box</p>
        </div>
        <div class="speaker-mini">
          <h3 class="speaker">Peter Wihman <span class="caption">Microsoft</span></h3>
          <p class="location">MPR</p>
        </div>
      </div>
    </div>

    <div class="schedule-block">
      <h3 class="break">Break</h3>
    </div>

    <div class="schedule-block">
      <h2>Panel: Empowerment Through Collaboration</h2>
      <h3 class="speaker">Motoko Rich <span class="caption">New York Times</span>, Danielle Baca <span class="caption">Nike</span>, Keiko Ishitani <span class="caption">UCC</span></h3>
      <h3 class="speaker">Akiko Ryu Innes<span class="caption"> moderator</span></h3>
      <p class="time">4:15PM-5:05PM <span class="location"></span></p>
    </div>

    <div class="schedule-block">
      <h2>Closing Keynote Address</h2>
      <h3 class="speaker">Kuniko Inoguchi <span class="caption">Member, House of Councillors</span></h3>
      <p class="time">5:15PM-5:45PM <span class="location">Theater</span></p>
    </div>

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
    div.schedule-block {
      margin-bottom:50px;
    }
    `]
})
export class ScheduleComponent { }
