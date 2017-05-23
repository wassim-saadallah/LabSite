import { SiteLaboPage } from './app.po';

describe('site-labo App', () => {
  let page: SiteLaboPage;

  beforeEach(() => {
    page = new SiteLaboPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
