import{test,expect} from '../fixtures/customFixture';
import { BasePage } from '../pages/basePage';

test('Filter products by category and subcategory', async ({ page, loginPage, productPage, basePage }) => {

    await basePage.navigateToBaseURL('https://automationexercise.com/');
    await loginPage.LoginToApplication();
    await productPage.navigateToProductPage();
    await expect(page.locator('.features_items')).toBeVisible();
    await productPage.filterProductsByCategory('Kids', 'Dress');
    await productPage.verifyFilteredProducts('Kids', 'Dress');

    await productPage.filterProductsByBrand('Polo');
    await productPage.verifyFilteredProductsByBrand('Polo');

    //await productPage.randomizeProductSelection();
    await page.getByText('Add to cart').first().click();
    await expect(page.locator('#cartModal')).toBeVisible();
    await page.getByText('Continue Shopping').click();
});
