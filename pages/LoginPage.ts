import {Page,Locator} from '@playwright/test';
import { clickElement } from '../utils/elementActions';
import { enterText } from '../utils/elementActions';

export class LoginPage {

    private readonly page: Page;
    private readonly loginLink : Locator;
    private readonly userName : Locator;
    private readonly password : Locator;
    private readonly loginButton : Locator;

    constructor (page: Page) {
        this.page = page;
        this.loginLink = this.page.locator("a[href='/login']");
        this.userName = this.page.locator("input[data-qa='login-email']");
        this.password = this.page.locator('input[data-qa="login-password"]');
        this.loginButton = this.page.locator('button[data-qa="login-button"]');
    }

    async clickLoginLink(){
        await clickElement(this.loginLink,'Clicking on Login Link');
    }

    async enterUserName(userName: string){
        await enterText(this.userName, userName,'Entering User Name');
    }
    async enterPassword(password: string){
        await enterText(this.password, password,'Entering Password');
    }

    async clickLoginButton(){
        await clickElement(this.loginButton,'Clicking on Login Button');
    }

    async PerformLogin(userName:string, password: string){
        await this.enterUserName(userName);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
   
}