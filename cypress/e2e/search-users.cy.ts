
const MAX_ITEMS_DEFAULT = 25;
describe('Search Users', () => {
  it('has a users component with items by default', () => {
    cy.visit('/')

    cy.get('[data-testid=users] [role=listitem]').its('length').should('eq', MAX_ITEMS_DEFAULT);
  })

  it('types a new query and get results', () => {
    cy.visit('/')

    const query = 'test';

    cy.get('input[name="search"]').clear().type(query).should('have.value', query);

    cy.contains('Loading...')

    cy.get('[data-testid=users] [role=listitem]').its('length').should('eq', MAX_ITEMS_DEFAULT);
  });
})
