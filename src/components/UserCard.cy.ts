import UserCard from './UserCard.vue'
import { userFixtures } from '@/api/userFixtures'

describe('<UserCard />', () => {
  it('renders with basic props', () => {
    const [joe] = userFixtures.successfulServerResponse().items

    cy.mount(UserCard, {
      props: {
        name: joe.login,
        avatar: joe.avatar_url
      }
    })
    cy.contains(joe.login)
    cy.get(`img[alt="User Avatar"]`).should('have.attr', 'src', joe.avatar_url)
  })
})
