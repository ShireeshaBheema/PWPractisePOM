import { ProductDetailPage } from './productDetailPage';
import {Page,Locator} from '@playwright/test';
import { clickElement } from '../utils/elementActions';
import { enterText } from '../utils/elementActions';

export class BasePage {
    protected readonly page: Page;
    private readonly registrationPageLink : Locator;
    private readonly loginPageLink : Locator;
    private readonly productPageLink : Locator;
    private readonly productDetailPage:Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginPageLink = this.page.getByRole('link', { name: 'Signup / Login' });
        this.productPageLink = this.page.getByRole('link', { name: 'Products' });
        this.registrationPageLink = this.page.getByRole('link', { name: 'Signup / Login' });
        this.productDetailPage = this.page.getByRole('link', { name: 'View Product' });
    }
    async navigateToBaseURL(url: string) {
        await this.page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    }

    async clickSignUpLink(){
        await clickElement(this.registrationPageLink,'Clicking on SignUp Link');
    }
    async clickLoginPageLink(){
        await clickElement(this.loginPageLink,'Clicking on Login Page Link');
    }
    async clickProductPageLink(){
        await clickElement(this.productPageLink,'Clicking on Product Page Link');
    }
    async clickProductDetailPageLink(){
        await clickElement(this.productDetailPage,'Clicking on Product Detail Page Link');
    }
    async clickRegistrationPageLink(){
        await clickElement(this.registrationPageLink,'Clicking on Registration Page Link');
    }
}