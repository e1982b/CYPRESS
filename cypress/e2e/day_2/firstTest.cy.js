///<reference types="cypress"/>

describe('First test suite',function(){
    it('Test case 1',function(){
        cy.visit("https://www.google.com/")
        cy.get('#APjFqb').should('be.visible').type('cypress{enter}').wait(500)
        cy.get('[lang="en"] > .tF2Cxc > .yuRUbf > a > .TbwUpd > :nth-child(2) > .VuuXrf')
        .should('have.text','Cypress').click()
    })
}) 
describe('Second Test suite',()=>{
    it('Test Case 2',()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.title().should('eq','Wikipedia')
        cy.get('#searchInput').clear().type('cypress{enter}').wait(500)
        cy.url().should('include','/wiki/Cypress').wait(500)
        cy.get('h1').should('have.text','Cypress')
    })
})