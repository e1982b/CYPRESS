// cypress reference type
///<reference types="cypress"/>

// visit
cy.visit('open url')
cy.visit('url',{timeout:10000})

//should is a promise in here
cy.url().should('include',path)

//finding element
cy.get(loc).click()
cy.get(loc).should('be.visible')
cy.get(loc).should('be.exist')
//negative scenario
cy.get(loc).should('not.be.visible')
cy.get(loc).should('not.be.exist')

cy.get('h1').should('have.text','Sign In')
cy.get('p').should('have.value','my-1')

//parent to child or child to parent
cy.get(loc).first()
cy.get(loc).last()
cy.get(loc).eq(2).click()

cy.get(loc).next().click()
cy.go('back')//come to previous page come after test
cy.get('tbody tr').nextAll().click({multiple:true})// web table like tbody click each of one by one
//if youdont usemultiple true it will throw exeption
cy.get(loc).prev().click() // previous one
cy.get(loc).prevAll().click()

//position handling
cy.get(loc).click('top')
cy.get(loc).click('bottom')
cy.get(loc).click('topLeft')

//hover handling
cy.get(loc).trigger('mouseover').click()
cy.get(loc).trigger('mouseup').click()
cy.get(loc).trigger('mousedown').click()

//login
cy.get('#loginpage-input-email').clear().type('username')