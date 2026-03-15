import { test, expect } from '../fixtures/customFixture';
import { BasePage } from '../pages/basePage';
import { clickElement, enterText } from '../utils/elementActions';


test('Add random product to cart ', async ({ page,loginPage,productPage,productDetailPage,basePage }) => {

  await basePage.navigateToBaseURL('https://automationexercise.com/');
  await loginPage.LoginToApplication();
  await productPage.navigateToProductPage();

  const { name, productPrice } =await productDetailPage.randomizeProductSelection();

  await expect(page.locator('.product-information h2')).toBeVisible();
  await expect(page.locator('.product-information span span')).toBeVisible();

  if (name && productPrice) {
    await expect(page.locator('.product-information h2')).toContainText(name);
    await expect(page.locator('.product-information span span')).toContainText(productPrice);
  }

  const { name: detailName, price: detailPrice } =
    await productDetailPage.getProductDetails();

  expect(detailName).toBe(name);
  expect(detailPrice).toBe(productPrice);

  await productDetailPage.enterQuantity('2');
  await enterText(page.locator('#name'), 'Sirisha', 'Entering Name in Comment Section');
  await enterText(page.locator('#email'), 'sirisha@example.com', 'Entering Email in Comment Section');
  await enterText(page.locator('#review'), 'This is a great product!', 'Entering Review in Comment Section');

  const modal = page.locator('#cartModal');

  if (await modal.isVisible()) {
    await page.getByText('Continue Shopping').click();
  }
    
  await clickElement(page.locator('#button-review'), 'Clicking on Submit Review Button');
    
  await page.getByText('Thank you for your review.').waitFor({ state: 'visible', timeout: 5000 });
  await productDetailPage.clickAddToCart();
  
});