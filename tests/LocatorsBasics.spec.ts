import test from "@playwright/test";


test("login",async({ page }) => {
    await page.goto('https://letcode.in/button');
    await page.getByRole('link', {name:'Goto Home'}).click();
    await page.getByRole('button', {name:'Find Location'}).click();
    await page.getByRole('heading', {name:'button'}).click();
    await page.getByRole('textbox', {name:'textbox'}).click();
    await page.getByRole('checkbox', {name:'checkbox'}).click();

})