import UsersSearchResult from './UsersSearchResult.vue'
import {userFixtures} from "@/api/userFixtures";
import {API_BASE_URL} from "@/config";

describe('<UsersSearchResult />', () => {
  it('request for search and renders the same amount of results', () => {

    const expected = userFixtures.successfulServerResponse();
    cy.intercept(`${API_BASE_URL}*`,  expected).as('getSearch')

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
