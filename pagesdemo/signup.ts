import { Locator, Page } from "@playwright/test"
export class signup{
    page:Page
    signupbtn:Locator
    username:Locator
    password:Locator
    closebtn:Locator
    constructor(page:Page){
     this.page=page
     this.signupbtn=page.locator("#signin2")
     this.closebtn=page.locator(".btn.btn-secondary")
     this.username=page.locator("#sign-username")
     this.password=page.locator("#sign-password")
    }
    async gourl(){
        await this.page.goto("https://demoblaze.com/")
    }
    async signupEnterdata(){
        await this.signupbtn.click()
        await this.username.fill("4aleenamathew@gmail.com")
        await this.password.fill("test@890")
        
    }
    async signupclose(){
        await this.signupbtn.click()
        await this.closebtn.click()
    }
}