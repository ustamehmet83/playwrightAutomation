const {test, expect} = require('@playwright/test');

test('Handle dropdowns', async ({ page }) => {


await page.goto('https://testautomationpractice.blogspot.com/') 

//Multiple ways to select option from dropdown

//1. Select by Visible Text

await page.evaluate(() => {
    const element = document.querySelector('#country');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });


await page.locator('#country').selectOption({label: 'India'})

await page.locator('#country').selectOption({value:'uk'})
await page.locator('#country').selectOption({index:1})

await page.waitForTimeout(3000)

});