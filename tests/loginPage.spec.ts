import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DataProvider } from '../utils/dataProvider';

//json data
const testdata = DataProvider.getTestDataFromJSON('./testdata/data.json');
for(const data of testdata){

    test(`Login Test for ${data.user_id} user with Json data`, async({page})=>{

        await page.goto('https://automationexercise.com/');
        const loginPage = new LoginPage(page);
        await loginPage.clickLoginLink();
        await loginPage.PerformLogin(data.email,data.password);

        if(data.valid === false){
            await expect(page.locator('p:has-text("Your email or password is incorrect!")')).toBeVisible();
        }
        else{
            await expect(page.locator('a:has-text(" Logged in as ")')).toBeVisible();
        }
        
        
    })
}

//csv data
const csvtestdata = DataProvider.getTestDataFromCSV('./testdata/data.csv');
for(const data of csvtestdata){

    test(`Login Test for ${data.user_id} user with CSV data`, async({page})=>{

        await page.goto('https://automationexercise.com/');
        const loginPage = new LoginPage(page);
        await loginPage.clickLoginLink();
        await loginPage.PerformLogin(data.email,data.password);

        if(data.valid === 'false'){
            await expect(page.locator('p:has-text("Your email or password is incorrect!")')).toBeVisible();
        }
        else{
            await expect(page.locator('a:has-text(" Logged in as ")')).toBeVisible();
        }
        
        
    })
}