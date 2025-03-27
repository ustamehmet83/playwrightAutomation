//const {test,expect}=require('@playwright/test');
import {test,expect} from '@playwright/test';

test('Locators',async({page})=>{

await page.goto('https://www.demoblaze.com/index.html')

//click on login button - property

//await page.click("#login2")
await page.locator("#login2").click()

await page.locator('input[id="loginusername"]').click()

await page.locator('input[id="loginusername"]').fill('pavanol')

await page.locator('input[id="loginpassword"]').click()

await page.locator('input[id="loginpassword"]').fill('password')

await page.locator('//button[.="Log in"]').click()

})

