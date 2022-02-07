/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
})

before('Sign in to the application', () => {
    cy.visit('/')
    cy.SignIn()
})   

describe('Sign Out', () => { 

    it('Sign out of the website',  () => {
        cy.signOut()
    })    
 

})