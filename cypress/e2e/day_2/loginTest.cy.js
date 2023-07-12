///<reference types="cypress"/>

describe("Login Test", () => {
    it("TC1 Positive Scnerio", () => {
        cy.visit("https://www.demoblaze.com/")
        cy.get('#login2').click()
        cy.get('#loginusername').type("miky")
        cy.get('#loginpassword').type("Test1234").wait(750)
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('#nameofuser').should("be.visible")


    }

    )
}

)