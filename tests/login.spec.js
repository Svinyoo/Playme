import { test, expect } from '@playwright/test';
import {Login} from '../Pages/Login.page';

test('Test for LoginPage', async ({ page }) => {

  const login = new Login(page);

  await login.goto();
  await login.FillUsernamePassword('visual_user', 'secret_sauce');
  await login.clickLogin();



    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="cart-desc-label"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('Zaytest');
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill('play');
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill('10150');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
});