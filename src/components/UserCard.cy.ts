import UserCard from './UserCard.vue'

describe('<UserCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(UserCard)

    cy.contains('User Card')
  })
})
