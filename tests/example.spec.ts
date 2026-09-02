import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   await page.getByRole('link', { name: 'Get started' }).click();

//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test('get started', async ({ page }) => {
  await page.goto('http://localhost:4200/');

  await page.getByLabel('email').fill('abcd');
  await page.getByPlaceholder('name').fill('      ');
  await page.getByPlaceholder('password').fill('12345');

  await page.getByRole('button',{name:'Submit'}).click();
  const submitButton = page.getByRole('button', { name: 'Submit' });

  await expect(submitButton).toBeVisible();
  // await page.screenshot({path:'screenshot/form-submission.png'});
  await expect(page.locator('.heading')).toBeVisible()

  await expect(page.getByText('counter works!')).toBeVisible()
});
