Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
})

before('Navigate to ', () => {
    cy.visit('/')
    cy.SignIn()
})

describe('Enter a Comment and Post it', () => { 
    it ('Enter a Comment', () => {
        cy.enterComment() 
    })

    it ('Post Comment', () => { 
        cy.postComment()  
    }) 
})    