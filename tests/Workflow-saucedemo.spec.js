import { expect } from '@playwright/test';
import { test } from '../Pages/base'
import { Login, LoginErrorMessage } from '../Pages/Login.page';
import { Cartandcheckoutpage } from '../Pages/Cart.page';
import { Aboutpage } from '../Pages/About.page';
import { validUsers } from '../test-data/login-data'; // Importing validUsers from login-data.js
import { invalidUsers } from '../test-data/login-data'; // Importing invalidUsers from login-data.js
import { problemUsers } from '../test-data/login-data'; // Importing problemUsers from login-data.js

test.beforeEach (async ({ login }) => {
    await login.goto();
});



//* Test for LoginPage and Cart and Checkout workflow on saucedemo.com *//
test('Test for LoginPage', async ({ login, cartandcheckout }) => {

  // const login = new Login(page);-- this is now being passed as a fixture from the test-setup file, so we don't need to create a new instance here.
  // const cartandcheckout = new Cartandcheckoutpage(page);

  // await login.goto();
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
test('Test for LoginPage with invalid credentials', async ({ login,LoginErrorMessage }) => {

  // const login = new Login(page);
  // const loginErrorMessage = new LoginErrorMessage(page);

  // await login.goto();
  await login.FillUsernamePassword('invalid_user', 'invalid_password');
  await login.clickLogin();

  await expect(await LoginErrorMessage.getErrorMessage()).toBe("Epic sadface: Username and password do not match any user in this service");
});



test('Test for About page' , async ({ login, aboutpage }) => {
  await login.FillUsernamePassword('visual_user', 'secret_sauce');
  await login.clickLogin();

  await aboutpage.ClickAbout();

});


//test data from login-data.js//

validUsers.forEach(({ username, password }) => {
  test(`Login successfully with valid credentials: ${username}`, async ({ login }) => {
    await login.FillUsernamePassword(username, password);
    await login.clickLogin(); 
  
  })})

