const {test,expect} = require('@playwright/test');
 
test('Search by county', async ({ page }) => {
  await page.goto('http://144.24.129.185:8080/');
  await page.getByRole('combobox').selectOption('Kent');
  const trCount = await page.locator('tr').count();
  expect(trCount).toEqual(3);
});
 