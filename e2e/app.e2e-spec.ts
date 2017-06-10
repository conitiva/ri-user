import { RiUserPage } from './app.po';

describe('ri-user App', () => {
  let page: RiUserPage;

  beforeEach(() => {
    page = new RiUserPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
