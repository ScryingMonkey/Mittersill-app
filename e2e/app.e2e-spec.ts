import { MittersillAppPage } from './app.po';

describe('mittersill-app App', () => {
  let page: MittersillAppPage;

  beforeEach(() => {
    page = new MittersillAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
