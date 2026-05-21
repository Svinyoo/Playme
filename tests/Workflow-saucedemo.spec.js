import { test, expect } from '@playwright/test';
import { Login, LoginErrorMessage } from '../Pages/Login.page';
import { Cartandcheckoutpage } from '../Pages/Cart.page';

//* Test for LoginPage and Cart and Checkout workflow on saucedemo.com *//
test('Test for LoginPage', async ({ page }) => {
  const login = new Login(page);
  const cartandcheckout = new Cartandcheckoutpage(page);

  await login.goto();
  await login.FillUsernamePassword('visual_user', 'secret_sauce');
  await login.clickLogin();

  await cartandcheckout.addBackpackToCart();
  await cartandcheckout.openCart();
  await cartandcheckout.clickCheckout();

  await cartandcheckout.fillNameSurname('Zaybest', 'Zing', '10510');
  await cartandcheckout.clickContinue();
  await cartandcheckout.clickFinish();
});


/*Test for LoginPage with invalid credentials*/ 
test('Test for LoginPage with invalid credentials', async ({ page }) => {

  const login = new Login(page);
  const loginErrorMessage = new LoginErrorMessage(page);

  await login.goto();
  await login.FillUsernamePassword('invalid_user', 'invalid_password');
  await login.clickLogin();

  await expect(await loginErrorMessage.getErrorMessage()).toBe("Epic sadface: Username and password do not match any user in this service");
});
