import {Page,Locator} from '@playwright/test';
import { clickElement } from '../utils/elementActions';
import { enterText } from '../utils/elementActions';
import { BasePage } from './basePage';

export class ProductDetailPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }
    get AddToCartButton(){
        return this.page.getByRole('button', { name: 'Add to cart' });

    }
    get ProductName(){
        return this.page.locator('.product-information h2');
    }
    get setQuantityInput(){
        return this.page.locator('input#quantity');
    }
    get ProductPrice(){
        return this.page.locator('.product-information span span');
    }

    async clickAddToCart(){
        await clickElement(this.AddToCartButton,'Clicking on Add To Cart Button');
    }
    async enterQuantity(quantity: string){
        await enterText(this.setQuantityInput, quantity, 'Entering Quantity');
    }
    async getProductDetails(){
        const name = await this.ProductName.textContent();
        const price = await this.ProductPrice.textContent();
        return { name, price };
    }
    async randomizeProductSelection(){
        
        const products = await this.page.locator('[class="productinfo text-center"]').all();
        if(products.length === 0){
            throw new Error('No products found on the page');
        }
        const randomIndex = Math.floor(Math.random() * products.length);
        await clickElement(this.page.getByRole('link', { name: 'View Product' }).nth(randomIndex));
        const name= await this.page.locator("div[class='product-information'] h2").textContent();
        console.log(`Randomly selected product: ${name}`);
        const productPrice = await this.page.locator("div[class='product-information'] span span").textContent();
        console.log(`Price of the selected product: ${productPrice}`);
       
        console.log(`Randomly selected product at index ${randomIndex} and navigated to its detail page`);
        return { name, productPrice }; 
    }
    
}
