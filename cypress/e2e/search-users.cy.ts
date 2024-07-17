describe('Search Users', () => {
  it('has a users component with items by default', () => {
    cy.visit('/')

    cy.get('[data-testid=users] [role=listitem]').its('length').should('eq', 3);
  })

  it('types a new query and get results', () => {
    cy.visit('/')

    const query = 'test';
    const queryRegexp = new RegExp(query, 'i')

    cy.get('input[name="search"]').clear().type(query).should('have.value', query);

    cy.contains('Loading...')

    cy.get('[role=listitem]').filter((index, element) => {
      cy.log(element.innerText)
      return queryRegexp.test(element.innerText);
    }).should('have.length', 3);
  });
})
