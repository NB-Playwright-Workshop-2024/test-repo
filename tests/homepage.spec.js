const { test, expect } = require('@playwright/test');

test('Check if the tagline', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Get your dream house with us! ')).toBeVisible();
    });