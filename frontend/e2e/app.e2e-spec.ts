import { DokkitPage } from './app.po';

describe('dokkit App', () => {
  let page: DokkitPage;

  beforeEach(() => {
    page = new DokkitPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
