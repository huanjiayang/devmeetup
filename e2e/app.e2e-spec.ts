import { DevmeetupPage } from './app.po';

describe('devmeetup App', () => {
  let page: DevmeetupPage;

  beforeEach(() => {
    page = new DevmeetupPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
