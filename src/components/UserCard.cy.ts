import UserCard from './UserCard.vue'
import { userFixtures } from '@/components/__test__/userFixtures'

describe('<UserCard />', () => {
  it('renders with basic props', () => {
    const [joe] = userFixtures.successfulServerResponse().items

    cy.mount(UserCard, {
      props: {
        name: joe.login,
        avatar: joe.avatar_url,
        type: joe.type,
        siteAdmin: joe.site_admin
      }
    })
    cy.contains(joe.login)
    cy.contains(joe.type)
    cy.get(`img[alt="User Avatar"]`).should('have.attr', 'src', joe.avatar_url)
  })
})
