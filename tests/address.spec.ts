import { test, expect } from '@playwright/test';

// const addresses = ['Bhopal', 'Ujjain', 'Indore', 'Barnagar'];
const address = 'Bhopal';

test('take multiple address', async ({ page }) => {
    await page.goto('http://localhost:4200/');

    await page.getByLabel('email').fill('abcd@gmail.com');
    const addressInput = page.getByLabel('address');
    const addBtn = page.getByRole('button', { name: 'Add Address' });
    await addBtn.click();
    // for (const address of addresses) {
    //     await addressInput.fill(address);
    // }
    await addressInput.fill('Bhopal');
    const addressContainer = page.locator('#address');
    await expect(addressContainer).toBeVisible();


    const addressItems = page.locator('#address > div');
    await expect(addressItems).toHaveText(address);
});