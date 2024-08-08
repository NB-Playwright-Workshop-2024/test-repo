const { test, expect } = require('@playwright/test');

const postDescription = 'ABCDS';

test.describe('Blog Post Functionality with Mocked API', () => {

  test.beforeEach(async ({ page }) => {
    console.log("beforeEach")
    await page.goto('/');
    await page.locator('input[name="email"]').fill("bob@bob.com");
    await page.locator('input[name="password"]').fill("12345");
    await page.locator('button:text("LOGIN")').click();
  });
//Test
   test('Check Login', async ({ page }) => {
      await expect(page.getByText("viewed your profile")).toBeVisible();
    
    });
    

});
