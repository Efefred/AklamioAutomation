/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
})

before('Sign Up on Conduit ', () => {
    cy.visit('/')
    cy.signUpHappyPath()
})

describe('Delete a Post', () => { 

    it ('Delete a Post', () => {
        cy.deletePost() 
    })  
})    