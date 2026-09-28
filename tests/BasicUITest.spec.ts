import test, { chromium } from "@playwright/test";



test.only('With Fixture', async ({ page }) => {
  await page.goto('https://www.amazon.com/');

});


  test('Without Fixture', async ( ) => {
    const browser = await chromium.launch();
    
    const page = await browser.newPage();
    await page.goto('https://www.google.co.in/index.html')


    
  });
