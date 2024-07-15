import UserCard from './UserCard.vue'

describe('<UserCard />', () => {
  it('renders with basic props', () => {
    const avatar = 'https://avatars.githubusercontent.com/u/660378?v=4'
    cy.mount(UserCard, {
      props: {
        name: 'joe',
        avatar
      }
    })
    cy.contains('joe')
    cy.get(`img[alt="User Avatar"]`).should('have.attr', 'src', avatar)
  })
})
