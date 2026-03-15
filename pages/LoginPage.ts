import {Page,expect} from '@playwright/test';
import { clickElement } from '../utils/elementActions';
import { enterText } from '../utils/elementActions';
import { BasePage } from './basePage'; 

export class LoginPage extends BasePage {
    
    constructor (page: Page) {
        super(page);
    }
    get LoginLink(){
        return this.page.locator("a[href='/login']");;
    }
    get UserName(){
        return this.page.locator("input[data-qa='login-email']");
    }
    get Password(){
        return this.page.locator('input[data-qa="login-password"]');
    }
    get LoginButton(){
        return this.page.locator('button[data-qa="login-button"]');
    }
    

    async clickLoginLink(){
        await clickElement(this.LoginLink,'Clicking on Login Link');
    }

    async enterUserName(userName: string){
        await enterText(this.UserName, userName,'Entering User Name');
    }
    async enterPassword(password: string){
        await enterText(this.Password, password,'Entering Password');
    }

    async clickLoginButton(){
        await clickElement(this.LoginButton,'Clicking on Login Button');
    }

    async PerformLogin(userName:string, password: string){
        await this.enterUserName(userName);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
    async LoginToApplication(){
        await this.clickLoginLink();
        await this.PerformLogin('sirishapw@test.com','testing@123');
        await expect(this.page.locator('a:has-text(" Logged in as ")')).toBeVisible();
    }
   
}