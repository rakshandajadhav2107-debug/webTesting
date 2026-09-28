import {test, expect} from '@playwright/test';

test('Playwright Basic Actions and Assertions', async ({ page }) => {
  await page.goto('https://xqa.io/practice');
  await expect(page).toHaveURL('https://xqa.io/practice');  // test passed if the url is same as expected

  console.log(await page.title());  // print the title of the page in console
  await expect(page).toHaveTitle(/practice exercises/i);
  //await page.getByRole('link', { name: 'Elements', exact:true }).click();
  await page.getByRole('heading', { name: 'Elements'}).click();
  await expect(page.getByLabel('Full Name')).toBeVisible();  // test passed if the element is visible

  await page.locator('input#userName').fill('Playwright User');
  console.log(await page.locator('input#userName').inputValue());
  
  await expect(page.locator('input#userName')).toHaveValue('Playwright User');  // test passed if the value is same as expected

  
  await page.waitForTimeout(3000);
  

});
//Playwright Actions and Assertions 

//Action methods-
//click() -- use to tap or press a button, link, or other clickable element on the page
//fill()  -- use to type text into a textbox or input field
//title() -- use to get the current page title
//inputValue() -- use to read the text currently inside a textbox

//Assertion Methods-

//toHaveTitle() -- use to check that the page title matches the expected title
//toHaveURL()   -- use to check that the current page URL matches the expected URL
//toBeVisible() -- use to check that an element is visible on the page
//toHaveText()   -- use to check that an element shows the exact expected text
//toHaveValue()  -- use to check that an input field contains the expected value