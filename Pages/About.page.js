import {expect, page} from '@playwright/test';

export class Aboutpage {
/***
 * @param {Page} page
 */

locatorSideMenu = '[id="react-burger-menu-btn"]';
locatorAbout = '[id="about_sidebar_link"]';

    constructor(page) {
      this.page = page;
    }
async ClickAbout() {
    await expect
    (this.page.getByText('Swag Labs')
).toBeVisible();

    await this.page.locator(this.locatorSideMenu).click();
    await expect(this.page.getByText('About')).toBeVisible();
    await this.page.locator(this.locatorAbout).click();
     await expect(this.page).toHaveURL('https://saucelabs.com/');

     await this.page.getByRole('banner').getByText('Solutions', { exact: true }).click();
     await this.page.getByRole('link', { name: 'location Visual testing' }).click();
     await expect(this.page).toHaveURL('https://saucelabs.com/products/visual-testing');
  }
  

}