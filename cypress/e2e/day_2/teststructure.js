describe('First Test Suit',function(){

    beforeEach(()=>{
        cy.visit('')
    })
    
    it('First Test Case',function(){
        syntax
    })
    it('Second Test Case',function(){
        syntax
    })
    it('Third Test Case',function(){
        syntax
    })

})
describe('Second Test suit',()=>{
    it('First Test Case',()=>{
        syntax
    })
    it('Second Test Case',()=>{
        syntax
    })
    it('Third Test Case',()=>{
        syntax
    })
})

/** https://docs.cypress.io/api/cypress-api/custom-commands
 * Examples of parent commands:
    cy.visit()
    cy.get()
    cy.request()
    cy.exec()
    cy.intercept()
 */

/**
 * Child Commands
    Child commands are always chained off of a parent command, or another child command.
    The previous subject will automatically be yielded to the callback function.

* Examples of child commands:
    .click()
    .trigger()
    .find()
    .should()
    .as()
 */

    /**
     * Examples of dual commands:
      cy.contains()
      cy.screenshot()
      cy.scrollTo()
      cy.wait()
     */