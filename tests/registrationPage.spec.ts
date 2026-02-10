import {test,expect} from '@playwright/test';
import { RegistrationPage } from '../pages/RegistrationPage';

test('SignUp/Registration',async({page})=>{
    
    await page.goto('https://automationexercise.com/',{
        waitUntil:'domcontentloaded',
        timeout:90000
    });
    

    const registrationPage = new RegistrationPage(page);

    await registrationPage.clickSignUpLink();
    await registrationPage.enterSignUpDetails('User1','testingusername2@gmail.com');

    await expect(page.locator('h2:has-text("Enter Account Information")')).toBeVisible();

    await registrationPage.enterAccountInformation('testing@123','5','March','1998');
    await registrationPage.enterAddressDetails('User1','Name1','Google','b-506,Gandhi nagar','India','Karnataka','Hubli','500060','1234567');
    await registrationPage.clickCreateAccountButton();

    await expect(page.locator('h2:has-text("Account Created!")')).toBeVisible();




})