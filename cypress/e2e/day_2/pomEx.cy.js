///<reference types="cypress"/>
import { Login } from "../../pageObjects/login"

const login = new Login();

describe('Login Test With POM', () => {
    it('Assert Title', () => {
        login.navigate()
        login.assertTitle()

    })
    it("Login with POM", () => {
        login.navigate();
        login.loginBtn();
        login.username();
        login.password();
        login.submit();
        login.assertUsername();
    }
    )

    it("Login with POM with this",()=>{
        login.navigate();
        login.loginBtn();
        login.username();
        password();
        submit();
        assertUsername();
    }
    )

})