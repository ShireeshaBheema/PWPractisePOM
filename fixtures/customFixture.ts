import { RegistrationPage } from './../pages/RegistrationPage';
import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { ProductDetailPage } from '../pages/productDetailPage';
import { BasePage } from '../pages/basePage';

type CustomFixtures = {
  loginPage: LoginPage;
  productPage: ProductPage;
  productDetailPage: ProductDetailPage;
  basePage: BasePage;
  registrationPage: RegistrationPage;
};

export const test = base.extend<CustomFixtures>({
  
  basePage: async ({ page }, use) => {
    const basePageInstance = new BasePage(page);
    await use(basePageInstance);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  productPage: async ({ page }, use) => {
    const productPage = new ProductPage(page);
    await use(productPage);
  },

  productDetailPage: async ({ page }, use) => {
    const productDetailPage = new ProductDetailPage(page);
    await use(productDetailPage);
  },

  registrationPage: async ({ page }, use) => {
    const registrationPage = new RegistrationPage(page);
    await use(registrationPage);
  }

});

export { expect };