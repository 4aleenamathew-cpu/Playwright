import { Locator, Page } from "@playwright/test"

export class Shipdetails{
    page:Page
    firstname:Locator
    lastname:Locator
    postalcode:Locator
    continuebtn:Locator
    constructor(page:Page){
        this.page=page
        this.firstname=page.locator("#first-name")
        this.lastname=page.locator("#last-name")
        this.postalcode=page.locator("#postal-code")
        this.continuebtn=page.locator("#continue")
    }
    async enterdetails(fname:string,lname:string,postalcode:string){
        await this.firstname.fill(fname)
         await this.lastname.fill(lname)
          await this.postalcode.fill(postalcode)

    }
    async clickcontinue(){
      await this.continuebtn.click()
    }
}
//module.exports=Shipdetails
