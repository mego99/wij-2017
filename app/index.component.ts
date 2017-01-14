import { Component } from '@angular/core';

@Component({
  selector: 'index',
  template: `
    <h1 class="main-title">Women in Japan 2017</h1>
    <p>
    This one-day conference (March 8th, 2016) for high school and university students will explore the current status of women in Japan. Participants will assess current barriers for women and consider future opportunities for social transformation. The various speakers and panel will engage young people with the most pressing social, political, and economic issues facing women in Japan. We are honored to announce that Ms. Akie Abe will be our keynote speaker. </p>
    <p class="japanese">このカンファレンス（2016年3月8日）のねらいは、高校生や大学生が日本の女性の現状を探ることです。参加者は現代の女性が抱える問題点を検討し、未来に向けての社会変革の機会を模索します。（ゲスト）スピーカーの方々は、日本の女性が直面している社会、政治、経済問題について参加者と話し合います。この度、光栄なことに基調講演に安倍昭恵さんをお迎えすることになります。</p>
  `,
  styles:[`
    .main-title {
      font-size: 5em;
    }
    `]
})
export class IndexComponent { }
