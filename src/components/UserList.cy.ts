import UserList from './UserList.vue'

describe('<UserList />', () => {
  it('renders', () => {
    cy.mount(UserList)

    cy.get("[role='list']")
  })

  it('renders message when empty', () => {
    cy.mount(UserList, {props: {items: []}})

    cy.get('[data-testid="message"]');
  })
})
