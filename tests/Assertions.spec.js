const {test,expect}=require('@playwright/test');
test('Assertions',async({page})=>{

await page.goto('https://demo.nopcommerce.com/register')

await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

await expect(page).toHaveTitle('nopCommerce demo store. Register')

const logElement=await page.getByAltText('nopCommerce demo store')

await expect(logElement).toBeVisible()

const searchStoreBox=await page.locator('#small-searchterms')

await expect(searchStoreBox).toBeEnabled()

const maleRadioBtn= page.locator('#gender-male')
await maleRadioBtn.click()

await expect(maleRadioBtn).toBeChecked()

const newsletterCheckbox= page.locator('#Newsletter')

await expect(newsletterCheckbox).toBeChecked()

const registerBtn=page.getByRole('button',{name:'Register'})

await expect(registerBtn).toHaveAttribute('type','submit')

const register=page.locator('//h1[.="Register"]')

await expect(register).toHaveText('Register')

await expect(register).toContainText('Register')

const emailField=page.locator('#Email')

const emailValue='test@demo.com'
await emailField.fill(emailValue)

await expect(emailField).toHaveValue(emailValue)

const options=page.locator('select[name="DateOfBirthMonth"] option')

//await expect(options).toHaveCount(13)



});