import { test, expect } from '@playwright/test';

test("popup validation",async({page})=>{
    await page.goto('https://www.saucedemo.com/')
await expect(page.locator(".error-message-container.error")).toBeHidden()
await page.locator("#login-button").click()
await expect(page.locator(".error-message-container.error")).toBeVisible()
//alerts
await page.goto('https://selenium.qabible.in/index.php')
await page.locator("#alert-modal").click()
await page.getByRole("link",{name:"Javascript Alert"}).click()
page.on('dialog',async dialog=>{
    await page.waitForTimeout(3000)
    await dialog.accept()//dimss() can used to cancel
})
await page.locator(".btn.btn-warning").click()
//frames
await page.goto("https://demoqa.com/frames")
const framepage=page.frameLocator("#frame1")
console.log(await framepage.locator("#sampleHeading").textContent())
await expect(framepage.locator("#sampleHeading")).toHaveText("This is a sample page")
//await page.pause()
})
test("Screenshot",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await expect(page.locator(".error-message-container.error")).toBeHidden()
    await page.locator("#login-button").click()
    await page.locator(".error-message-container.error").screenshot({path:'error.png'})
    await expect (page.locator(".error-message-container.error")).toBeVisible()
    await page.screenshot({path:'error1.png'})

})
test("Visual comparison",async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    expect(await page.screenshot()).toMatchSnapshot('sauce demo.png')
})