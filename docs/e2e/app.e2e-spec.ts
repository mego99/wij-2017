import { Wij2017Page } from './app.po';

describe('wij-2017 App', function() {
  let page: Wij2017Page;

  beforeEach(() => {
    page = new Wij2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
