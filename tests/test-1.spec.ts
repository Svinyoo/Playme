import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
});await page.goto('https://www.saucedemo.com/');
await page.locator('[data-test="username"]').click();
await expect(page.getByText('Swag Labs')).toBeVisible();
await page.locator('[data-test="username"]').click();
await page.locator('[data-test="username"]').fill('visual_user');
await page.locator('form').click();
await page.locator('[data-test="password"]').click();
await page.locator('[data-test="password"]').fill('secret_sauce');
await page.locator('[data-test="login-button"]').click();