import UsersSearchResult from './UsersSearchResult.vue'
import {userFixtures} from "@/api/userFixtures";
import {API_BASE_URL} from "@/config";

describe('<UsersSearchResult />', () => {
  it('runs initial request, shows loading and then results', () => {

    const expected = userFixtures.successfulServerResponse();
    cy.intercept(`${API_BASE_URL}*`,  expected).as('getSearch')

    cy.mount(UsersSearchResult, {props: {query: 'fact'}})

    cy.contains('Loading...')
    cy.get("[role='list']").should('not.exist')
    cy.get('[data-testid="message"]').should('not.exist')

    cy.wait('@getSearch')

    cy.get("[data-testid='users']")
    cy.get("[role='list']")
    cy.get("[role='listitem']").its('length').should('eq', expected.items.length)

    cy.get('[data-testid="message"]').should('not.exist')
  })

  it('render message if no results', () => {
    cy.intercept(`${API_BASE_URL}*`,  { items: []}).as('getSearch')

    cy.mount(UsersSearchResult, {props: {query: 'abracdabra'}})


    cy.get('[data-testid="message"]').should('have.text', 'User search returned no results.')
    cy.get("[role='list']").should('not.exist')
    cy.contains('Loading...').should('not.exist')
  })

  it('should handle 403 error', () => {
    cy.intercept('GET', `${API_BASE_URL}*`, {
      statusCode: 403,
      body: userFixtures.rateLimitingError()
    }).as('searchUsers')


    cy.mount(UsersSearchResult, {props: {query: 'fact'}})


    cy.wait('@searchUsers');

    cy.contains('You’re going too fast! Please try again in 1 minute.')
  })
})
