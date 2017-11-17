import { AngularMessPage } from './app.po';

describe('angular-mess App', () => {
  let page: AngularMessPage;

  beforeEach(() => {
    page = new AngularMessPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
