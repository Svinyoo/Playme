import { test as base } from '@playwright/test';
import { Login , LoginErrorMessage } from './Login.page';
import { Cartandcheckoutpage } from './Cart.page';
import { Aboutpage } from './About.page';
import { validUsers } from '../test-data/login-data'; // Importing validUsers from login-data.js
import { invalidUsers } from '../test-data/login-data'; // Importing invalidUsers from login-data.js        
import { problemUsers } from '../test-data/login-data'; // Importing problemUsers from login-data.js



type baseFixtures = {
    login: Login;
    cartandcheckout: Cartandcheckoutpage;
    LoginErrorMessage: LoginErrorMessage;
    aboutpage: Aboutpage;
    
    validUsers: { username: string; password: string }[];
    invalidUsers: { username: string; password: string }[];
    problemUsers: { username: string; password: string }[];
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