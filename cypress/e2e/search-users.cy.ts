describe('Search Users', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Github Users')
  })

  it('has a users component', () => {
    cy.visit('/')

    cy.get('[data-testid=users]')
  })
})
