import UsersSearchResult from './UsersSearchResult.vue'
import {userFixtures} from "@/api/userFixtures";

describe('<UsersSearchResult />', () => {
  it('request for search and renders the same amount of results', () => {

    const expected = userFixtures.successfulServerResponse();
    cy.intercept('https://api.github.com/search/users*',  expected).as('getSearch')

    cy.mount(UsersSearchResult, {props: {query: 'fact'}})

    cy.get('[data-testid="message"]').should('have.text', 'User search returned no results.')
    cy.get("[role='list']").should('not.exist')

    cy.wait('@getSearch')

    cy.get("[data-testid='users']")
    cy.get("[role='list']")
    cy.get("[role='listitem']").its('length').should('eq', expected.items.length)

    cy.get('[data-testid="message"]').should('not.exist')
  })
})
