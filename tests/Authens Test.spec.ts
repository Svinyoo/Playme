import { expect, test, type Page } from '@playwright/test';
import { parse } from 'csv-parse/sync';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { Login } from '../Pages/Login.page';
import { loginData } from '../test-data/login-data';

type LoginCredential = {
  username: string;
  password: string;
};

const csvCredentials = parse(
  readFileSync(resolve(process.cwd(), 'test-data/test-data-csv.csv'), 'utf-8'),
  { columns: true, skip_empty_lines: true },
) as LoginCredential[];

function credentialFor(username: string, source: LoginCredential[]): LoginCredential {
  const credential = source.find((item) => item.username === username);
  if (!credential) throw new Error(`Missing login data for ${username}`);
  return credential;
}

async function expectSuccessfulLogin(page: Page, credential: LoginCredential): Promise<void> {
  const loginPage = new Login(page);
  await loginPage.goto();
  await loginPage.FillUsernamePassword(credential.username, credential.password);
  await loginPage.clickLogin();

  await expect(page).toHaveURL(/inventory\.html/);
  // performance_glitch_user intentionally takes longer to render this screen.
  await expect(page.locator('[data-test="inventory-container"]')).toBeVisible({ timeout: 15_000 });
}

test.describe('Sauce Demo authentication', () => {
  // The first three cases import credentials from test-data/login-data.js.
  test('standard', async ({ page }) => {
    await expectSuccessfulLogin(page, credentialFor('standard_user', loginData));
  });

  test('problem', async ({ page }) => {
    await expectSuccessfulLogin(page, credentialFor('problem_user', loginData));
  });

  test('error', async ({ page }) => {
    await expectSuccessfulLogin(page, credentialFor('error_user', loginData));
  });

  // The remaining cases parse credentials from test-data/test-data-csv.csv.
  test('locked out', async ({ page }) => {
    const loginPage = new Login(page);
    const credential = credentialFor('locked_out_user', csvCredentials);
    await loginPage.goto();
    await loginPage.FillUsernamePassword(credential.username, credential.password);
    await loginPage.clickLogin();

    await expect(page.locator('[data-test="error"]')).toContainText(
      'Epic sadface: Sorry, this user has been locked out.',
    );
  });

  test('performance glitch', async ({ page }) => {
    await expectSuccessfulLogin(page, credentialFor('performance_glitch_user', csvCredentials));
  });

  test('visual', async ({ page }) => {
    await expectSuccessfulLogin(page, credentialFor('visual_user', csvCredentials));
  });
});
