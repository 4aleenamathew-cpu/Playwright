import test, { expect } from "@playwright/test";
test.describe.configure({mode:'parallel'})
//older method
test("First PLaywright Test",async function(){
//empty test case
})
//Newer Method
//we can write more than one test case in a single file
test("Browser context playwright test",async({browser})=>{  //fixtures-browser
    const context=await browser.newContext()
    const page=await context.newPage()       //browser context
    await page.goto("https://google.com")    //used in multiple windows ,tabs,cookies scenarios
    console.log(await page.title())
    await page.goto("https://www.saucedemo.com")
    await page.locator("#user-name").fill("standarduser") //id ->#,classname->.
    await page.locator("#password").fill("secret_sauce")
    await page.locator("#login-button").click()
    console.log(await page.locator(".error-message-container.error").textContent())
    await expect(page.locator(".error-message-container.error")).toHaveText("Epic sadface: Username and password do not match any user in this service")
    await expect(page.locator(".error-message-container.error")).toContainText("Epic sadface:")
    //defining  locators as variables
    const username=page.locator("#user-name")
    const login=page.locator("#login-button")
    const title=page.locator(".inventory_item_name")
    await username.fill("")
    await username.fill("standard_user")
    await login.click()
    console.log(await title.first().textContent())//print first element if the elements have same locator
    console.log(await title.nth(1).textContent())
    console.log(await title.allTextContents())

  //  await page.pause()
})

test("Page PlayWright test",async({page})=>{
    await page.goto("https://google.com")      //page context
    console.log(await page.title())
    await expect(page).toHaveTitle("Google")
})
//Assertion=conditional check

test("UI controls",async({page})=>{
    await page.goto('https://selenium.qabible.in/index.php')
    await page.locator('.nav-item').nth(1).click()
    await page.locator('.list-group-item').nth(1).click()
    await page.locator('#gridCheck').check()
    await expect(page.locator('#gridCheck')).toBeChecked()
    expect(await page.locator('#gridCheck').isChecked()).toBeTruthy()
    await page.locator('.list-group-item').nth(2).click()
    await page.locator('#inlineRadio1').check()
    await expect(page.locator('#inlineRadio1')).toBeChecked()
    await page.locator('#inlineRadio24').check()
    expect(await page.locator('#inlineRadio24').isChecked()).toBeTruthy()
    await page.locator("//a[normalize-space()='Select Input']").click()
    await page.locator('#single-input-field').selectOption('Red')
    //a[normalize-space()='Form Submit']
    await expect(page.locator('#single-input-field')).toHaveValue('Red')
    await page.locator("//a[normalize-space()='Form Submit']").click()
    // await page.locator("//li[@class='list-group-item']/a[text()='Form Submit']").click()
    await page.locator('#validationCustom01').fill('Aleena')
    await page.locator('#validationCustom02').fill('Mathew')
    await page.locator('#validationCustomUsername').fill('4aleenamathew@gmail.com')
    await page.locator('#validationCustom03').fill('Kannur')
    await page.locator('#validationCustom04').fill('Kerala')
    await page.locator('#validationCustom05').fill('560017')
    await page.locator('#invalidCheck').check()
    await page.locator('.btn.btn-primary').click()
    await expect(page.locator('#message-one')).toHaveText('Form has been submitted successfully!')
    await page.locator('.list-group-item').nth(0).click()
    await page.locator('#single-input-field').fill('Hello world')
    await page.locator('#button-one').click()
    await expect(page.locator('#message-one')).toHaveText('Your Message : Hello world')
    //await page.pause()
})
test("child window and new tab",async({browser})=>{
const context=await browser.newContext()
const page=await context.newPage()
await page.goto("https://www.google.com")
const [newPage]=await Promise.all([
    context.waitForEvent('page'),
    page.evaluate(()=>window.open("https://www.saucedemo.com"))
])
const newtab=await context.newPage()
await newtab.goto("https://github.com")
console.log("child window and new tab opened successfully"
)

//await page.pause()
})

//import { test, expect } from '@playwright/test';
//code generated using codegen
test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Aleena');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('Mathew');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('560017');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
});
test("speciallocators",async({page})=>{
    await page.goto('https://selenium.qabible.in/index.php')
    await page.getByRole("link",{name:"Input Form"}).click()//special locatorfor link,button
    await page.getByRole("link",{name:"Checkbox Demo"}).click()
    await page.getByLabel("Click on this check box").check()//for checkbox,rado button,for test
    await page.getByRole("link",{name:"Radio Buttons Demo"}).click()
    //await page.getByRole("radio",{name:"45 to 60"}).check()
    await page.getByLabel("45 to 60").check()
   await page.getByRole("link",{name: "Select Input"}).click();
    await page.getByLabel("Select Color").selectOption("Red")
    await page.getByRole("link",{name:"Form Submit",exact: true}).click()
    await page.getByPlaceholder("First name").fill("Aleena")//can used in test field
    await page.getByPlaceholder("Last name").fill("Mathew")
    await page.getByPlaceholder("Username").fill("4aleenamathew@gmail.com")
    await page.getByPlaceholder("City").fill("kannur")
    await page.getByPlaceholder("State").fill("kerala")
    await page.getByPlaceholder("Zip").fill("560017")
    await page.getByLabel("Agree to terms and conditions").check()
    await page.getByRole("button",{name:"Submit form"}).click()
    //assertion
    await expect(page.getByText("Form has been submitted successfully!")).toBeVisible()
    await page.getByRole("link",{name:"Simple Form Demo"}).click()
    await page.getByPlaceholder("Message").fill("Hello world")
    await page.getByRole("button",{name:"Show Message"}).click()
    await expect(page.getByText("Your Message : Hello world")).toBeVisible()
   // await page.pause()
})