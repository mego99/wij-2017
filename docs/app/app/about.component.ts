import { Component } from '@angular/core';

@Component({
  selector: 'about',
  template: `
    <h1>About SAGE</h1>
    <p>The American School in Japan (ASIJ) Students Advocating for Gender Equality’s (SAGE) mission is to spread awareness about gender inequality issues all around the world, while also raising money for the Asian University for Women (AUW) in Bangladesh. Last year SAGE was able to raise enough money to support the scholarship of one young woman to the Asian University for Women.</p>
    <h1>About AUW</h1>
    <p>Founded in 2008, the Asian University for Women (AUW) is an independent, international university in Chittagong, Bangladesh seeking to educate a new generation of leaders in Asia. AUW admits students solely on the basis of merit, regardless of their family’s income level, and nearly all students are on full scholarship with many as the first in their family to attend university. AUW offers a one-year, pre-collegiate bridge program called the Access Academy, as well as a three-year undergraduate program based in the liberal arts and sciences. The University is committed to graduating generations of women leaders who will tackle their countries’ social, economic, and political issues while collaborating across cultural, ethnic, and religious lines. They have approximately 500 students enrolled from 15 countries in Asia and the Middle East.<br><br>The support foundation also has student profiles on their website. If you go <a href='http://asian-university.org/impact/'> here</a> and then pick a country, the profiles are at the bottom of the page. <br><br>SAGE has been fundraising for AUW for around three and a half years. In total, we have raised enough money to support three full scholarships. We would like to take this opportunity to spread awareness about AUW, and raise another scholarship for a young woman to attend AUW for a year. </p>
  `
})
export class AboutComponent {
  title = "About";
}
