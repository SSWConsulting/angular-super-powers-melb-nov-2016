import { browser, element, by } from 'protractor';

export class FbcCrmPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fbc-root h1')).getText();
  }
}
