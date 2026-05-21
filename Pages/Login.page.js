import { Page } from '@playwright/test';



export class Login {

baseurl = 'https://www.saucedemo.com/';

  locatorUsername = '[data-test="username"]';
  locatorPassword = '[data-test="password"]';

/***
 * @param {Page} page
 */
    constructor(page) {
      this.page = page;
    }

   async goto() {
       await this.page.goto(this.baseurl);
    }

    async FillUsernamePassword(username, password) {
      await this.page.locator(this.locatorUsername).click();
      await this.page.locator(this.locatorUsername).fill(username);
      await this.page.locator(this.locatorPassword).fill(password);
    }

    async clickLogin() {
        await this.page.locator('[data-test="login-button"]').click();
    }

  }

export class LoginErrorMessage {
/***
 * @param {Page} page
 */
 constructor(page) {
      this.page = page;
    }

  async getErrorMessage() {
    return await this.page.locator('[data-test="error"]').textContent();
  }

}