"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ScheduleComponent = (function () {
    function ScheduleComponent() {
    }
    return ScheduleComponent;
}());
ScheduleComponent = __decorate([
    core_1.Component({
        selector: 'schedule',
        template: "\n  <div class=\"schedule-wrapper\">\n    <h1>Schedule</h1>\n\n    <div class=\"schedule-block\">\n      <h2>Registration</h2>\n      <p class=\"time\">1:00PM <span class=\"location\">Theater Lobby</span></p>\n    </div>\n\n    <div class=\"schedule-block\">\n      <h2>Opening Address</h2>\n      <h3 class=\"speaker\">Miki Jiang Miyata<span class=\"caption\"> interpreter</span></h3>\n      <h3 class=\"speaker\">Fumiko Hayashi <span class=\"caption\">Mayor of Yokohama</span></h3>\n      <p class=\"time\">1:30PM-2:00PM <span class=\"location\">Theater</span></p>\n    </div>\n\n    <div class=\"schedule-block\">\n      <h2>Panel: Women, Children, and the Workplace</h2>\n      <h3 class=\"speaker\">Noriko Silvester <span class=\"caption\">Candlewick</span></h3>\n      <h3 class=\"speaker\">Akiko Nakajo <span class=\"caption\">Google</span></h3>\n      <h3 class=\"speaker\">TBD<span class=\"caption\"> moderator</span></h3>\n      <p class=\"time\">2:15PM-3:05PM <span class=\"location\"></span></p>\n    </div>\n\n    <div class=\"schedule-block\">\n      <h3 class=\"break\">Break</h3>\n    </div>\n\n    <div class=\"schedule-block\">\n      <h2>Individual Sessions</h2>\n      <p class=\"time-close\">3:20PM-4:00PM</p>\n      <div class=\"speakers-wrapper\">\n        <div class=\"speaker-mini\">\n          <h3 class=\"speaker\">Yumiko Murakami <span class=\"caption\">OECD</span></h3>\n          <p class=\"location\">Theater</p>\n        </div>\n        <div class=\"speaker-mini\">\n          <h3 class=\"speaker\">Emmy Harris <span class=\"caption\">Change.org</span></h3>\n          <p class=\"location\">Black Box</p>\n        </div>\n        <div class=\"speaker-mini\">\n          <h3 class=\"speaker\">Peter Wihman <span class=\"caption\">Microsoft</span></h3>\n          <p class=\"location\">MPR</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"schedule-block\">\n      <h3 class=\"break\">Break</h3>\n    </div>\n\n    <div class=\"schedule-block\">\n      <h2>Panel: Empowerment Through Collaboration</h2>\n      <h3 class=\"speaker\">Motoko Rich <span class=\"caption\">New York Times</span>, Danielle Baca <span class=\"caption\">Nike</span>, Keiko Ishitani <span class=\"caption\">UCC</span></h3>\n      <h3 class=\"speaker\">Akiko Ryu Innes<span class=\"caption\"> moderator</span></h3>\n      <p class=\"time\">4:15PM-5:05PM <span class=\"location\"></span></p>\n    </div>\n\n    <div class=\"schedule-block\">\n      <h2>Closing Keynote Address</h2>\n      <h3 class=\"speaker\">Kuniko Inoguchi <span class=\"caption\">Member, House of Councillors</span></h3>\n      <p class=\"time\">5:15PM-5:45PM <span class=\"location\">Theater</span></p>\n    </div>\n\n  </div>\n  ",
        styles: ["\n    .schedule-wrapper {\n      margin:0px 10vw;\n    }\n    h2 {\n      font-size:1.8em;\n      text-align:left;\n      margin:0;\n    }\n    p {\n      font-size:1em;\n      margin:0;\n    }\n    h3 {\n      font-size:1.2em;\n    }\n    .location {\n      text-transform:uppercase;\n      text-align:right;\n      color:#ffbfc6;\n      text-align:left;\n    }\n    .time {\n      text-transform:uppercase;\n      text-align:left;\n    }\n    .speaker {\n      text-style:bold;\n      margin:0;\n      text-align:left;\n    }\n    .caption {\n      font-size:0.6em;\n      text-transform: uppercase;\n      text-style:oblique;\n    }\n    .speakers-wrapper {\n      display:flex;\n      flex-direction:row;\n      margin-bottom:20px;\n    }\n    .time-close {\n      text-transform:uppercase;\n      text-align:left;\n    }\n    .speaker-mini {\n      padding-right:20px;\n    }\n    h3.break {\n      text-transform:uppercase;\n      margin: 20px 0 20px 10px;\n      text-align:left;\n    }\n    div.schedule-block {\n      margin-bottom:50px;\n    }\n    "]
    }),
    __metadata("design:paramtypes", [])
], ScheduleComponent);
exports.ScheduleComponent = ScheduleComponent;
//# sourceMappingURL=schedule.component.js.map