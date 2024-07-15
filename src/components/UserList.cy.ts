import UserList from './UserList.vue'

interface User {
  avatar: string;
  name: string;
}

interface TestInput {
  items?: User[];
}

describe('<UserList />', () => {
  it('renders', () => {
    cy.mount(UserList)

    cy.get("[role='list']")
  })

  function testListMessage(input : TestInput) {
    return function () {
      cy.mount(UserList, {props: {items: input.items}})

      cy.get('[data-testid="message"]').should('have.text', 'No users found.');
    }
  }

  it('renders message when empty', testListMessage({
    items: []
  }))

  it('renders message when not defined', testListMessage({}))
})
