const { chromium } = require('@playwright/test');
const authorization = require("../user");

test("test", async ({page}) => {
  await page.goto('https://netology.ru/?modal=sign_in');
 
  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').fill(authorization.email);

  await page.locator('[placeholder="Пароль"]').click();
  await page.locator('[placeholder="Пароль"]').fill('12345');
  

  await page.locator('[data-testid="login-submit-btn"]').click();
  await page.locator('[data-testid="login-error-hint"]').click();
  
  await page.pause();
   
  await expect(page.locator('[data-testid="login-error-hint"]')).toHaveText('Вы ввели неправильно логин или пароль');
});