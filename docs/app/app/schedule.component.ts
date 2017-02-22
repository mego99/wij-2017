import { Component } from '@angular/core';

@Component({
  selector: 'schedule',
  template: `
  <div class="schedule-wrapper">
    <embed class="pdf" src="assets/schedule.pdf" type="application/pdf" width="100%" />

  </div>
  `,
  styles:[`
    .pdf {
      height:100vh;
    }
    @media only screen and (max-width:600px) {
      .pdf {
        height:100vh;
        width:100vw;
        left:0;
        position:absolute;
      }
    }
    `]
})
export class ScheduleComponent { }
