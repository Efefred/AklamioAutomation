/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
})

before(' ', () => {
     cy.visit('/')
     cy.SignIn()
})

describe('Create Post Test', () => { 

    //@Error Path
    it('Validate that Title Field is Required', () => {
        cy.postTitleEmpty()
    })
    it('Validate that About Field is Required', () => {
        cy.postAboutEmpty()
    })
    it('Validate that Main Field is Required', () => {
        cy.postMainEmpty()
    })

    it('Validate that Title is Unique', () => {
        cy.enterExistingTitle()
    })
    
    //@Happy Path 
    it('Validate that Comment Page Shows if Post Creation was Successful', () => {
        cy.createNewPost()
    })

  




    
    
})