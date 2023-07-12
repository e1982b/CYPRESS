export class Login {

    navigate() {
        cy.visit("https://www.demoblaze.com/").wait(500)
    }
    assertTitle() {
        cy.title().should("eq", "STORE").wait(500)
    }

    loginBtn() {
        cy.get('#login2').click().wait(500)
        return this
    }
    username() {
        cy.get('#loginusername').type("miky").wait(500)
        return this
    }
    password() {
        cy.get('#loginpassword').type("Test1234").wait(500)
        return this
    }
    submit() {
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click().wait(500)
        return this
    }
    assertUsername() {
        cy.get('#nameofuser').should("be.visible")
    }
}
