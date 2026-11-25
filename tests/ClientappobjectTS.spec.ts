import test, { expect } from "@playwright/test";
import { POMmanager } from "../pagesTS/POMmanager";
import { customtest } from "../utils/testbaseTS";
const testdata=JSON.parse(JSON.stringify(require("../utils/placeordertestdata.json")))
for(const data of testdata){
test(`Automation of shopping cart application using page object model for ${data.productname} in typescript`,async({page})=>{
    //const uname="standard_user"
       //const pass="secret_sauce"
       // const productname="Sauce Labs Backpack"
        const pommanager=new POMmanager(page)
        //const loginobject=new Login(page)
        const loginobject=pommanager.getLogin()
        await loginobject.goto()
        await loginobject.validLogin(data.uname,data.pass)
        //const dashboard=new Dashboard(page)
        const dashboard=pommanager.getDashboard()
        await dashboard.selectProduct(data.productname)
        await dashboard.movetocart()
        //const cart=new Cart(page)
        const cart=pommanager.getCart()
        await cart.verifyCart()
        await cart.checkout()
        //const shipping=new Shipdetails(page)
        const shipping=pommanager.getShippingdetails()
        await shipping.enterdetails("Aleena","Mathew","560017")
        await shipping.clickcontinue()
        //const summary=new Summary(page)
        const summary=pommanager.getSummary()
        await summary.verifySummary()
        await summary.clickFinish()
        await expect(page.locator(".complete-header")).toHaveText("Thank you for your order!") 
        //await page.pause()
    })
}

customtest('customized testcase',async({page,testDataForOrder})=>{
const pommanager=new POMmanager(page)
    //const loginobject=new Login(page)
    const loginobject=pommanager.getLogin()
    await loginobject.goto()
    await loginobject.validLogin(testDataForOrder.uname,testDataForOrder.pass)
    //const dashboard=new Dashboard(page)
    const dashboard=pommanager.getDashboard()
    await dashboard.selectProduct(testDataForOrder.productname)
    await dashboard.movetocart()
    //const cart=new Cart(page)
    const cart=pommanager.getCart()
    await cart.verifyCart()
    await cart.checkout()
})