///<reference types="cypress"/>

 describe("Login Test", () => {
    it("TC1 Positive Scnerio", () => {
        cy.visit("https://www.demoblaze.com/")
        cy.loginCommand("miky","Test1234")
        
        cy.get('#nameofuser').should("be.visible")
    })
}) 

describe("Login Test With Envoriment", () => {
    it('TC001 positive scenario',()=>{
        cy.visit(Cypress.env('baseUrl'))
        cy.viewport('macbook-16')

        cy.loginCommand(Cypress.env('username'),Cypress.env('password'))
       
        cy.get('#nameofuser').should('be.visible')

    })
})


