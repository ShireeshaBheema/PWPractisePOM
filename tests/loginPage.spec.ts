import {test, expect} from '../fixtures/customFixture';
import { DataProvider } from '../utils/dataProvider';
import { BasePage } from '../pages/basePage';

//json data
const testdata = DataProvider.getTestDataFromJSON('./testdata/data.json');
for(const data of testdata){

    test(`Login Test for ${data.user_id} user with Json data`, async({page,loginPage,basePage})=>{

        await basePage.navigateToBaseURL('https://automationexercise.com/');
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

    test(`Login Test for ${data.user_id} user with CSV data`, async({page,loginPage,basePage})=>{

        await basePage.navigateToBaseURL('https://automationexercise.com/');
        
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

//login with credentials
test('Login Test with valid credentials', async({page,loginPage})=>{

    await loginPage.navigateToBaseURL('https://automationexercise.com/');
    await loginPage.LoginToApplication();
})