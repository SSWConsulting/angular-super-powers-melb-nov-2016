import { FbcCrmPage } from './app.po';

describe('fbc-crm App', function() {
  let page: FbcCrmPage;

  beforeEach(() => {
    page = new FbcCrmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fbc works!');
  });
});
