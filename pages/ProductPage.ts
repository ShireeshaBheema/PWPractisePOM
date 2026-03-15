import {Page,Locator} from '@playwright/test';
import { expect } from '@playwright/test';
import { clickElement } from '../utils/elementActions';
import { BasePage } from './basePage';

export class ProductPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }
    async navigateToProductPage(){
        await this.clickProductPageLink();
    }
    
    get AddToCartButton(){
        return this.page.locator('[class="productinfo text-center"] [class="btn btn-default add-to-cart"]');  
    }
    async clickAddToCart(){
        await clickElement(this.AddToCartButton,'Clicking on Add To Cart Button');
    }

    async randomizeProductSelection(){
        // Get all 'Add to Cart' buttons
        const buttonCount = await this.AddToCartButton.count();
        
        if(buttonCount === 0){
            throw new Error('No products found on the page');
        }

        // Generate a random index between 0 and buttonCount-1
        const randomIndex = Math.floor(Math.random() * buttonCount);
        
        // Click the random product's 'Add to Cart' button
        await this.AddToCartButton.nth(randomIndex).click();
        console.log(`Randomly selected product at index ${randomIndex} and clicked Add to Cart`);
    }

    async filterProductsByCategory(category: string, subCategory: string) {
        await this.page.locator('.panel-group.category-products')
            .getByRole('link', { name: category })
            .click();

        await this.page.locator('.panel.panel-default')
        .filter({ has: this.page.locator('a[data-parent="#accordian"]', { hasText: category }) })
        .getByRole('link', { name: subCategory })
        .click();

    }

    async filterProductsByBrand(brand: string){
        await clickElement(this.page.getByRole('link', { name: brand }));
    }

    async verifyFilteredProducts(expectedCategory: string, expectedSubCategory: string) {

        await expect(this.page).toHaveURL(/category_products/);
        await expect(this.page.locator('.title.text-center')).toContainText(expectedSubCategory, { ignoreCase: true });
    }

    async verifyFilteredProductsByBrand(expectedBrand: string) {

        const productCount = await this.AddToCartButton.count();

        if (productCount === 0) {
            throw new Error('No products found on the page');
        }

        const randomIndex = Math.floor(Math.random() * productCount);

        await clickElement(
            this.page.getByRole('link', { name: 'View Product' }).nth(randomIndex),
            'Opening random product'
        );

        const productBrand = await this.page
            .locator('.product-information p:has-text("Brand")')
            .textContent();

        console.log(`Brand of the selected product: ${productBrand}`);

        await expect(productBrand).toContain(expectedBrand);
    }
    
}
