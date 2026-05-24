import { test as base } from '@playwright/test';
import { Login , LoginErrorMessage } from './Login.page';
import { Cartandcheckoutpage } from './Cart.page';
import { Aboutpage } from './About.page';


type baseFixtures = {
    login: Login;
    cartandcheckout: Cartandcheckoutpage;
    LoginErrorMessage: LoginErrorMessage;
    aboutpage: Aboutpage;
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
    },

    aboutpage: async ({ page }, use ) => {
        await use(new Aboutpage(page));
    } 
    
}); 