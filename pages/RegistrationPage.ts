import { Page,test,Locator }  from "@playwright/test";
import { clickElement } from "../utils/elementActions";
import { enterText } from "../utils/elementActions";

export class RegistrationPage {

    private readonly page: Page;
    private readonly signUpLink: Locator;
    private readonly username:Locator;
    private readonly email:Locator;
    private readonly signUpButton:Locator;

    private readonly titleRadioButton: Locator;
    private readonly password:Locator;
    private readonly dayOfBirth:Locator;
    private readonly monthOfBirth:Locator;
    private readonly yearOfBirth:Locator
    private readonly newsletterCheckbox:Locator;
    private readonly offersCheckbox:Locator

    private readonly firstName:Locator;
    private readonly lastName:Locator;
    private readonly company:Locator
    private readonly address1:Locator;
    private readonly country:Locator;
    private readonly state:Locator;
    private readonly city:Locator;
    private readonly zipcode:Locator;
    private readonly mobileNumber:Locator;
    private readonly createAccountButton:Locator;

    constructor(page: Page) {
        this.page = page;
        this.signUpLink = this.page.locator("a[href='/login']");
        this.username = this.page.locator("input[data-qa='signup-name']");
        this.email = this.page.locator("input[data-qa='signup-email']");
        this.signUpButton = this.page.locator("button[data-qa='signup-button']");

        this.titleRadioButton = this.page.locator("input[id='id_gender2']");
        this.password = this.page.locator("#password");
        this.dayOfBirth = this.page.locator("#days");
        this.monthOfBirth = this.page.locator("#months");
        this.yearOfBirth = this.page.locator("#years");
        this.newsletterCheckbox = this.page.locator("#newsletter");
        this.offersCheckbox = this.page.locator("#optin");

        this.firstName = this.page.locator("#first_name");
        this.lastName = this.page.locator("#last_name");
        this.company = this.page.locator("#company");
        this.address1 = this.page.locator("#address1");
        this.country = this.page.locator("#country");
        this.state = this.page.locator("#state");
        this.city = this.page.locator("#city");
        this.zipcode = this.page.locator("#zipcode");
        this.mobileNumber = this.page.locator("#mobile_number");
        this.createAccountButton = this.page.locator("button[data-qa='create-account']");

    }

    async clickSignUpLink(){
        await clickElement(this.signUpLink,'Clicking on SignUp Link');
    }

    async enterSignUpDetails(userName:string, email:string){
        await enterText(this.username, userName,'Entering User Name');
        await enterText(this.email, email,'Entering Email');
        await clickElement(this.signUpButton,'Clicking on SignUp Button');
    }

    async enterAccountInformation(password:string, day:string, month:string, year:string){
        await this.titleRadioButton.check();
        await enterText(this.password, password,'Entering Password');
        await this.dayOfBirth.selectOption(day);
        await this.monthOfBirth.selectOption(month);
        await this.yearOfBirth.selectOption(year);
        await this.newsletterCheckbox.check();
        await this.offersCheckbox.check();
    }

    async enterAddressDetails(firstName:string, lastName:string, company:string, address1:string, country:string, state:string, city:string, zipcode:string, mobileNumber:string){
        await enterText(this.firstName, firstName,'Entering First Name');
        await enterText(this.lastName, lastName,'Entering Last Name');
        await enterText(this.company, company,'Entering Company Name');
        await enterText(this.address1, address1,'Entering Address Line 1');
        await this.country.selectOption(country);
        await enterText(this.state, state,'Entering State');
        await enterText(this.city, city,'Entering City');
        await enterText(this.zipcode, zipcode,'Entering Zip Code');
        await enterText(this.mobileNumber, mobileNumber,'Entering Mobile Number');
    }

    async clickCreateAccountButton(){
        await clickElement(this.createAccountButton,'Clicking on Create Account Button');
    }

}