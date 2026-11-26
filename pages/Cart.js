const { expect } = require("@playwright/test")


class Cart{
    constructor(page){
        this.page=page
         this.item=page.locator('.inventory_item_name')
         this.checkoutBtn=page.locator("#checkout")
    }
    async verifyCart(){
await this.item.nth(0).waitFor()
   await expect(this.item.nth(0)).toBeVisible()
    }
    async checkout(){
        await this.checkoutBtn.click()
    }
}
module.exports=Cart