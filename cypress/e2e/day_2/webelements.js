///<reference types="cypress"/>
describe('Web Elements',()=>{
    it('First web element test',()=>{
        //tag name
        cy.get('form')
        //by ID
        cy.get('#loginpage-form')
        //by classname
        cy.get('.form-group')
        //by attribute name
        cy.get('[placeholder]')
        //by attribute name and value
        cy.get('[placeholder="Email Address"]')
        //by tag name and attribute with value
        cy.get('form[class="form"]')
        //by two differen attributes or more
        cy.get('[class="form-group"][id="loginpage-form-email-container"]')

        cy.contains('blue').click()


    })
})