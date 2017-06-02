import { CatalogosVioletaPage } from './app.po';

describe('catalogos-violeta App', () => {
  let page: CatalogosVioletaPage;

  beforeEach(() => {
    page = new CatalogosVioletaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
