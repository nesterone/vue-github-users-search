import UserCard from './UserCard.vue'

describe('<UserCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(UserCard, { props : { name: 'joe'}})

    cy.contains('User Card')

    cy.contains('joe')

  })
})
