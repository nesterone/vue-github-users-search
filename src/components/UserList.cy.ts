import UserList from './UserList.vue'
import type { User } from '@/api/User'
import { userFixtures } from '@/api/userFixtures'

interface TestInput {
  items?: User[]
}

describe('<UserList />', () => {
  it('renders', () => {
    const expected = userFixtures.defaultList()
    cy.mount(UserList, {
      props: {
        items: expected
      }
    })

    cy.get("[data-testid='users']")
    cy.get("[role='list']")
    cy.get("[role='listitem']").its('length').should('eq', expected.length)

    cy.get('[data-testid="message"]').should('not.exist')
  })

  function testListMessage(input: TestInput) {
    return function () {
      cy.mount(UserList, { props: { items: input.items } })

      cy.get('[data-testid="message"]').should('have.text', 'User search returned no results.')
      cy.get("[role='list']").should('not.exist')
    }
  }

  it(
    'renders message when empty',
    testListMessage({
      items: []
    })
  )

  it('renders message when not defined', testListMessage({}))
})
