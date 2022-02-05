import user from '../fixtures/Signup.json'
import data from '../fixtures/PostAndComment.json'

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
})

//@SIGN UP
//USER LEAVES A REQUIRED FIELD (USERNAME) EMPTY
Cypress.Commands.add('requiredFieldUsernameEmpty', () => {  
    cy.get(':nth-child(3) > .nav-link').click()
    cy.get('p.text-xs-center > a').should('be.visible')
    cy.get(':nth-child(2) > .form-control').type(user.email)
    cy.get(':nth-child(3) > .form-control').type(user.password)
    cy.get('.btn').contains('Sign in').click()
    cy.get(user.selector).should('have.text', user.error_message_username_empty)
    cy.get(':nth-child(2) > .form-control').clear()
    cy.get(':nth-child(3) > .form-control').clear()
    
})
//USER LEAVES A REQUIRED FIELD (EMAIL) EMPTY
Cypress.Commands.add('requiredFieldEmailEmpty', () => {  
    cy.get(':nth-child(1) > .form-control').type(user.username)
    cy.get(':nth-child(3) > .form-control').type(user.password)
    cy.get('.btn').contains('Sign in').click()
    cy.get(user.selector).should('have.text', user.error_message_email_empty)
    cy.get(':nth-child(1) > .form-control').clear()
    cy.get(':nth-child(3) > .form-control').clear()
    
})
//USER LEAVES A REQUIRED FIELD (PASSWORD) EMPTY
Cypress.Commands.add('requiredFieldPasswordEmpty', () => {  
    cy.get(':nth-child(1) > .form-control').type(user.username)
    cy.get(':nth-child(2) > .form-control').type(user.email)
    cy.get('.btn').contains('Sign in').click()
    cy.get(user.selector).should('have.text', user.error_message_password_empty)
    cy.get(':nth-child(1) > .form-control').clear()
    cy.get(':nth-child(2) > .form-control').clear()
    
})
   
//USER MAKES A DUPLICATE ENTRY
Cypress.Commands.add('duplicateEntry', () => {  
    cy.get(':nth-child(1) > .form-control').type(user.username_duplicate)
    cy.get(':nth-child(2) > .form-control').type(user.email)
    cy.get(':nth-child(3) > .form-control').type(user.password)
    cy.get('.btn').contains('Sign in').click()
    cy.get(user.selector).should('have.text', user.error_message_username_duplicate)

    //Clear the input fields
    cy.get(':nth-child(1) > .form-control').clear()
    cy.get(':nth-child(2) > .form-control').clear()
    cy.get(':nth-child(3) > .form-control').clear()
})    

Cypress.Commands.add('signUpHappyPath', () => {  
    cy.get(':nth-child(3) > .nav-link').click()
    cy.get('p.text-xs-center > a').should('be.visible')
    
    //Generate random characters
    const randomChar = (length) => {
        let result = ''
        const characters = user.random_characters
        const charactersLength = characters.length
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        return result
      }
    //Data is entered into the text fields
    cy.get(':nth-child(1) > .form-control').type(randomChar(5))
    cy.get(':nth-child(2) > .form-control').type("abc"+randomChar(6)+"@gmail.com")
    cy.get(':nth-child(3) > .form-control').type(randomChar(8)) 
    cy.get('.btn').contains('Sign in').click()
    cy.get('.feed-toggle > .nav > :nth-child(2) > .nav-link').should('have.text', 'Global Feed')
})


//@CREATE A POST
//USER LEAVES A REQUIRED FIELD (TITLE) EMPTY
Cypress.Commands.add('postTitleEmpty', () => {  
    cy.get('.container > .nav > :nth-child(2) > .nav-link').contains('New Post').click()
    cy.get(':nth-child(2) > .form-control').type(data.article_about)
    cy.get(':nth-child(3) > .form-control').type(data.article_main) 
    cy.get(':nth-child(4) > .form-control').type(data.tags)
    cy.get('.btn').contains('Publish Article').click()
    cy.get(data.selector).should('have.text', data.error_field_title_empty)
    //Clear the input fields
    cy.get(':nth-child(2) > .form-control').clear()
    cy.get(':nth-child(3) > .form-control').clear() 
    cy.get(':nth-child(4) > .form-control').clear()
})
//USER LEAVES A REQUIRED FIELD (ABOUT) EMPTY
Cypress.Commands.add('postAboutEmpty', () => {  
    cy.get(':nth-child(1) > .form-control').type(data.article_title)
    cy.get(':nth-child(3) > .form-control').type(data.article_main) 
    cy.get(':nth-child(4) > .form-control').type(data.tags)
    cy.get('.btn').contains('Publish Article').click()
    cy.get(data.selector).should('have.text', data.error_field_about_empty)

    cy.get(':nth-child(1) > .form-control').clear()
    cy.get(':nth-child(3) > .form-control').clear() 
    cy.get(':nth-child(4) > .form-control').clear()
})
//USER LEAVES A REQUIRED FIELD (MAIN) EMPTY
Cypress.Commands.add('postMainEmpty', () => {  
    cy.get(':nth-child(1) > .form-control').type(data.article_title)
    cy.get(':nth-child(2) > .form-control').type(data.article_about)
    cy.get(':nth-child(4) > .form-control').type(data.tags)
    cy.get('.btn').contains('Publish Article').click()
    cy.get(data.selector).should('have.text', data.error_field_main_empty)

    cy.get(':nth-child(1) > .form-control').clear()
    cy.get(':nth-child(2) > .form-control').clear() 
    cy.get(':nth-child(4) > .form-control').clear()
})
//USER MAKES A DUPLICATE ENTRY
Cypress.Commands.add('enterExistingTitle', () => {  
    cy.get(':nth-child(1) > .form-control').type(data.article_title_existing)
    cy.get(':nth-child(2) > .form-control').type(data.article_about)
    cy.get(':nth-child(3) > .form-control').type(data.article_main) 
    cy.get(':nth-child(4) > .form-control').type(data.tags)

    //Publish Article button is clicked
    cy.get('.btn').contains('Publish Article').click()

    //Assert that the error message appear
    cy.get(data.selector).should('have.text', data.error_field_duplicate)   

    //Clear the Text Fields
    cy.get(':nth-child(1) > .form-control').clear()
    cy.get(':nth-child(2) > .form-control').clear()
    cy.get(':nth-child(3) > .form-control').clear() 
    cy.get(':nth-child(4) > .form-control').clear()
})
//USER CREATES A NEW POST
Cypress.Commands.add('createNewPost', () => {  

    //Generate random data
    const randomChar = (length) => {
        let result = ''
        const characters = user.random_characters
        const charactersLength = characters.length
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        return result
      }

    //Data is entered into the text fields
    cy.get(':nth-child(1) > .form-control').type(randomChar(10))
    cy.get(':nth-child(2) > .form-control').type(randomChar(15))
    cy.get(':nth-child(3) > .form-control').type(randomChar(20)) 
    cy.get(':nth-child(4) > .form-control').type(randomChar(4))

    //Publish Article button is clicked  
    cy.get('.btn').contains('Publish Article').click()
    
    //Assertion for a successful Post Creation 
    cy.url().should('contain', '#/article/')
    cy.get('.card-footer > .btn').should('have.text', 'Post Comment')
})

//@POST COMMENT
//USER ENTERS COMMENT
Cypress.Commands.add('enterComment', () => {
    cy.get('.container > .nav > :nth-child(2) > .nav-link').contains('New Post').click()
    cy.createNewPost()
    cy.get('.form-control').type(data.comment)
})
//USER POSTS COMMENT
Cypress.Commands.add('postComment', () => {
    cy.get('.card-footer > .btn').should('have.text', 'Post Comment').click()
    cy.get('.card-block').should('have.text', data.comment)
})  

//@DELETE POST
Cypress.Commands.add('deletePost', () => {
    cy.enterComment()
    cy.postComment()
    cy.get('.btn-outline-danger').contains('Delete Article').click()
    cy.get('.feed-toggle > .nav > :nth-child(2) > .nav-link').contains('Global Feed')   
})

//@SIGN OUT
Cypress.Commands.add('signOut', () => {
    cy.get(':nth-child(3) > .nav-link').contains('Settings').click() 
    cy.get('.btn-outline-danger').contains('Or click here to logout.').click()
    cy.get('.logo-font').should('have.text', 'conduit')
}) 


Cypress.Commands.add('SignIn', () => {
        cy.get('.container > .nav > :nth-child(2) > .nav-link').click()
        cy.get(':nth-child(1) > .form-control').type(data.email)
        cy.get(':nth-child(2) > .form-control').type(data.password)
        cy.get('.btn').contains('Sign in').click()
        cy.get('.feed-toggle > .nav > :nth-child(2) > .nav-link').should('have.text', 'Global Feed')
})