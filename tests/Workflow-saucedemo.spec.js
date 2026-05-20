import { test, expect } from '@playwright/test';
import {Login} from '../Pages/Login.page';
import { Cartandcheckoutpage } from '../Pages/Cart.page';


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