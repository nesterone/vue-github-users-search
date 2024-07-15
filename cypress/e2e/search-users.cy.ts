// https://on.cypress.io/api

describe('Search Users', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Github Users')
  })
})
