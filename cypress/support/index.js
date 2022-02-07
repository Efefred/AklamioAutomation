// Import commands.js using ES2015 syntax:
import './commands'

//Returning false prevents Cypress from failing the test
Cypress.on('uncaught:exception', (err, runnable) => {  
    return false
})


