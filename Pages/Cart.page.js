import  { Page }   from '@playwright/test'

export class   Cartandcheckoutpage  {

constructor(page) {
    this.page = page;
}



    locatorFirstName = '[data-test="firstName"]';
    locatorLastName = '[data-test="lastName"]';
    locatorPostalCode = '[data-test="postalCode"]';
    locatorAddBackpack = '[data-test="add-to-cart-sauce-labs-backpack"]';
    locatorCartLink = '[data-test="shopping-cart-link"]';
    locatorCheckout = '[data-test="checkout"]';
    locatorContinue = '[data-test="continue"]';
    locatorFinish = '[data-test="finish"]';

    async addBackpackToCart() {
      await this.page.locator(this.locatorAddBackpack).click();
    }

    async openCart() {
      await this.page.locator(this.locatorCartLink).click();
    }

    async clickCheckout() {
      await this.page.locator(this.locatorCheckout).click();
    }

    async fillNameSurname(firstName, lastName, postCode) {
      await this.page.locator(this.locatorFirstName).fill(firstName);
      await this.page.locator(this.locatorLastName).fill(lastName);
      await this.page.locator(this.locatorPostalCode).fill(postCode);
    }

    
    async clickContinue() {
      await this.page.locator(this.locatorContinue).click();
    }

    async clickFinish() {
      await this.page.locator(this.locatorFinish).click();
    }

}