// Import commands.js using ES2015 syntax:
import './commands'
import '@shelex/cypress-allure-plugin';

Cypress.on('uncaught:exception', (err, runnable) => {
    //Returning false prevents Cypress from failing the test
    return false
})


