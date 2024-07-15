import UserCard from './UserCard.vue'
import {userFixtures} from "@/api/userFixtures";

describe('<UserCard />', () => {
  it('renders with basic props', () => {
   const [joe] = userFixtures.defaultList()

    cy.mount(UserCard, {
      props: {
        name: joe.name,
        avatar: joe.avatar
      }
    })
    cy.contains(joe.name)
    cy.get(`img[alt="User Avatar"]`).should('have.attr', 'src', joe.avatar)
  })
})
