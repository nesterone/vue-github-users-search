import UserList from './UserList.vue'

describe('<UserList />', () => {
  it('renders', () => {
    cy.mount(UserList)

    cy.get("[role='list']")
  })
})
