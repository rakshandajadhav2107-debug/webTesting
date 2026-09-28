import {test, expect } from "@playwright/test";

test('sauce demo login with playwright locators', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
     await expect(page).toHaveTitle('Swag Labs');  //Tab validation
     console.log(await page.title());   
     await expect(page.getByText('Swag Labs')).toBeVisible();  //Ui Page validation
    
     //await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
     //await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
     //await page.getByRole('button', { name: 'Login' }).click();
     //await expect(page.getByText('Products')).toBeVisible();
    //await expect(page.getByText('You have successfully logged in!')).toBeVisible();

    // await page.waitForTimeout(3000);

    // await page.getByPlaceholder('Username').fill('standard_user');
    // await page.getByPlaceholder('Password').fill('secret_sauce');
    // await page.getByTestId('login-button').click();
    // await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');  // test passed if the url is same as expected


    //await page.locator('input#user-name').fill('standard_user');
    //await page.locator('input#password').fill('secret_sauce');
    //await page.locator('input.submit-button').click();
    //await expect(page).toHaveURL(/inventory\.html/);  // test passed if the url is same as expected
  
    //await expect(page.locator('.title')).toHaveText('Products');  // test passed if the text is same as expected
    //await expect(page.locator('.title').filter({hasText: 'Products'})).toBeVisible();  // test passed if the element is visible
  
    await page.locator('//input[@id="user-name"]').fill('standard_user');
    await page.locator('//input[@id="password"]').fill('secret_sauce');
    await page.locator('//input[@id="login-button"]').click();

    


  });