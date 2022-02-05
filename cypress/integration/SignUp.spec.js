Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
})

before('Navigate to the Sign Up Page', () => {
    cy.visit('/')
})

describe('Sign Up Test', () => {
    
    it('Validate that Username Field is Required', () => {
        cy.requiredFieldUsernameEmpty()
    })
    it('Validate that Email Field is Required', () => {
        cy.requiredFieldEmailEmpty()
    })
    it('Validate that Password Field is Required', () => {
        cy.requiredFieldPasswordEmpty()
    })
    it('Validate that the User Cannot Make a Duplicate Entry', () => {
        cy.duplicateEntry() 
    })
    it('Validate that Home Page Shows if Sign Up was Successful', () => {
        cy.signUpHappyPath() 
    })

})    