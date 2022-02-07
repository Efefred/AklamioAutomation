/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
})

describe('Navigate to Conduit Website', () => { 

    it('Validate that a User Can Access the Conduit Website', () => {
        cy.navigateToConduitSite()
    })
})
