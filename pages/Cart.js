const { expect } = require("@playwright/test")


class Cart{
    constructor(page){
        this.page=page
         this.item=page.locator('.inventory_item_name')
         this.checkoutBtn=page.locator("#checkout")
    }
    async verifyCart(){
await this.item.waitFor()
   await expect(this.item).toBeVisible()
    }
    async checkout(){
        await this.checkoutBtn.click()
    }
}
module.exports=Cart