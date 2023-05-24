const { chromium } = require('@playwright/test');
const authorization = require('../user');

test("falseTest", async ({page}) => {
    await page.goto("https://netology.ru/?modal=sign_in");
    await page.waitForNavigation();

    await page.locator('[placeholder="Email"]').click();
    await page.locator('[placeholder="Email"]').fill(authorization.email);
    
    await page.locator('[placeholder="Пароль"]').click();
    await page.locator('[placeholder="Пароль"]').fill(authorization.password);

    await Promise.all([
        page.waitForNavigation(),
        page.locator('[data-testid="login-submit-btn"]').click(),
    ]);

    await page.locator('text=Мои курсы и профессии').click();

    await page.pause();

    await expect(page).toHaveURL('https://netology.ru/profile');
    await expect(page.locator('h2')).toHaveText('Мои курсы и профессии');
});