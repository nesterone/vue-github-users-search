import UsersSearchResult from './UsersSearchResult.vue'

describe('<UsersSearchResult />', () => {
  it('renders', () => {
    cy.mount(UsersSearchResult, {props: {query: 'fact'}})
  })
})
