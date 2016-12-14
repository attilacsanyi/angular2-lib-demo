import { ModuleBPage } from './app.po';

describe('module-b App', function() {
  let page: ModuleBPage;

  beforeEach(() => {
    page = new ModuleBPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
