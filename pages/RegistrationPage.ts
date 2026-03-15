import { Page,test,Locator }  from "@playwright/test";
import { clickElement } from "../utils/elementActions";
import { enterText } from "../utils/elementActions";
import { BasePage } from "./basePage";

export class RegistrationPage extends BasePage {

    constructor (page: Page) {
        super(page);
    }

    get SignUpLink(){
        return this.page.locator("a[href='/login']");
    }
    get Username(){
        return this.page.locator("input[data-qa='signup-name']");
    }
    get Email(){
        return this.page.locator("input[data-qa='signup-email']");
    }
    get SignUpButton(){
        return this.page.locator("button[data-qa='signup-button']");
    }
    get TitleRadioButton(){
        return this.page.locator("input[id='id_gender2']");
    }
    get Password(){
         return this.page.locator("#password");
    }
    get DayOfBirth(){
        return this.page.locator("#days");
    }
    get MonthOfBirth(){
        return this.page.locator("#months");
    }
    get YearOfBirth(){
        return this.page.locator("#years");
    }
    get NewsletterCheckbox(){
        return this.page.locator("#newsletter");
    }
    get OffersCheckbox(){
        return this.page.locator("#optin");
    }
    get FirstName(){
        return this.page.locator("#first_name");
    }
    get LastName(){
        return this.page.locator("#last_name");
    }
    get Company(){
         return this.page.locator("#company");
    }
    get Address1(){
        return this.page.locator("#address1");
    }
    get Country(){
        return this.page.locator("#country");
    }
    get State(){
        return this.page.locator("#state");
    }
    get City(){
        return this.page.locator("#city");
    }
    get ZipCode(){
        return this.page.locator("#zipcode");
    }
    get MobileNumber(){
        return this.page.locator("#mobile_number");
    }
    get CreateAccountButton(){
        return this.page.locator("button[data-qa='create-account']");
    }

    async clickSignUpLink(){
        await clickElement(this.SignUpLink,'Clicking on SignUp Link');
    }

    async enterSignUpDetails(userName:string, email:string){
        await enterText(this.Username, userName,'Entering User Name');
        await enterText(this.Email, email,'Entering Email');
        await clickElement(this.SignUpButton,'Clicking on SignUp Button');
    }

    async enterAccountInformation(password:string, day:string, month:string, year:string){
        await this.TitleRadioButton.check();
        await enterText(this.Password, password,'Entering Password');
        await this.DayOfBirth.selectOption(day);
        await this.MonthOfBirth.selectOption(month);
        await this.YearOfBirth.selectOption(year);
        await this.NewsletterCheckbox.check();
        await this.OffersCheckbox.check();
    }

    async enterAddressDetails(firstName:string, lastName:string, company:string, address1:string, country:string, state:string, city:string, zipcode:string, mobileNumber:string){
        await enterText(this.FirstName, firstName,'Entering First Name');
        await enterText(this.LastName, lastName,'Entering Last Name');
        await enterText(this.Company, company,'Entering Company Name');
        await enterText(this.Address1, address1,'Entering Address Line 1');
        await this.Country.selectOption(country);
        await enterText(this.State, state,'Entering State');
        await enterText(this.City, city,'Entering City');
        await enterText(this.ZipCode, zipcode,'Entering Zip Code');
        await enterText(this.MobileNumber, mobileNumber,'Entering Mobile Number');
    }

    async clickCreateAccountButton(){
        await clickElement(this.CreateAccountButton,'Clicking on Create Account Button');
    }

}