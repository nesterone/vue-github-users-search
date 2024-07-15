import UserList from './UserList.vue'
import type { User } from '@/api/User'

interface TestInput {
  items?: User[]
}

describe('<UserList />', () => {
  it('renders', () => {
    cy.mount(UserList, {
      props: {
        items: [
          {
            avatar: 'https://example.com',
            name: 'joe'
          }
        ]
      }
    })

    cy.get("[role='list']")

    cy.get("li").its('length').should('eq', 1)

    cy.get('[data-testid="message"]').should('not.exist')
  })

  function testListMessage(input: TestInput) {
    return function () {
      cy.mount(UserList, { props: { items: input.items } })

      cy.get('[data-testid="message"]').should('have.text', 'No users found.')
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
