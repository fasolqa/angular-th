import { AngularMaterialThemeExamplePage } from './app.po';

describe('angular-material-theme-example App', () => {
  let page: AngularMaterialThemeExamplePage;

  beforeEach(() => {
    page = new AngularMaterialThemeExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
