import { test as base } from '@playwright/test';
import { Login } from '../Login.page';
import { Cartandcheckoutpage } from '../Cart.page';

type baseFixtures = {
    login: Login;
    cartandcheckout: Cartandcheckoutpage;
};

export const test = base.extend<baseFixtures>({
    login: async ({ page }, use) => {
        await use(new Login(page));
    },
    cartandcheckout: async ({ page }, use) => {
        await use(new Cartandcheckoutpage(page));
    },

    LoginErrorMessage: async ({ page }, use) => {
        await use(new LoginErrorMessage(page));
    }

}); 