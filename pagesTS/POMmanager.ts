//const Cart = require("./Cart")
//const Dashboard = require("./Dashboard")
//const Login = require("./Login")
//const Shipdetails = require("./Shipdetails")
//const Summary = require("./Summary")
import { Locator, Page } from "@playwright/test"
import { Login } from "./Login"
import { Dashboard } from "./Dashboard"
import { Cart } from "./Cart"
import { Shipdetails } from "./Shipdetails"
import { Summary } from "./Summary"
export class POMmanager{
    page:Page
    login:Login
    dashboard:Dashboard
    cart:Cart
    shipping:Shipdetails
    summary:Summary
    constructor(page:Page){
        this.page=page
        this.login=new Login(page)
        this.dashboard=new Dashboard(page)
        this.cart=new Cart(page)
        this.shipping=new Shipdetails(page)
        this.summary=new Summary(page)


    }
    getLogin(){
        return this.login

    }
    getDashboard(){
        return this.dashboard
    }
    getCart(){
        return this.cart
    }
    getShippingdetails(){
        return this.shipping

    }
    getSummary(){
        return this.summary
    }
}
//module.exports=POMmanager