import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole('link', { name: 'Blijf op Amazon.com' }).click();
  await page.getByRole('button', { name: 'Submit' }).first().click();
  await page.getByRole('link', { name: 'Choose a language for shopping in Amazon United States. The current selection' }).click();
  await page.getByRole('link', { name: 'Amazon', exact: true }).click();
  await page.getByRole('link', { name: 'Jeans under $' }).click();
  await page.getByRole('button', { name: '0', exact: true }).click();
  await page.getByRole('link', { name: 'Sign in', exact: true }).click();
});