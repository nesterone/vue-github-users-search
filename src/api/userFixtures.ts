import type { User } from '@/api/User'

export const userFixtures = {
  defaultList(): User[] {
    return [
      {
        avatar: 'https://avatars.githubusercontent.com/u/660378?v=4',
        name: 'factset'
      },
      {
        avatar: 'https://avatars.githubusercontent.com/u/132286975?v=4',
        name: 'FactoryTalk-Optix'
      },
      {
        avatar: 'https://avatars.githubusercontent.com/u/10263490?v=4',
        name: 'fact'
      }
    ]
  },

  successfulServerResponse() {
    return {
      total_count: 6082,
      incomplete_results: false,
      items: [
        {
          login: 'fact',
          id: 10263490,
          node_id: 'MDEyOk9yZ2FuaXphdGlvbjEwMjYzNDkw',
          avatar_url: 'https://avatars.githubusercontent.com/u/10263490?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/fact',
          html_url: 'https://github.com/fact',
          followers_url: 'https://api.github.com/users/fact/followers',
          following_url: 'https://api.github.com/users/fact/following{/other_user}',
          gists_url: 'https://api.github.com/users/fact/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/fact/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/fact/subscriptions',
          organizations_url: 'https://api.github.com/users/fact/orgs',
          repos_url: 'https://api.github.com/users/fact/repos',
          events_url: 'https://api.github.com/users/fact/events{/privacy}',
          received_events_url: 'https://api.github.com/users/fact/received_events',
          type: 'Organization',
          site_admin: false,
          score: 1.0
        },
        {
          login: 'FactoryTalk-Optix',
          id: 132286975,
          node_id: 'O_kgDOB-KJ_w',
          avatar_url: 'https://avatars.githubusercontent.com/u/132286975?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/FactoryTalk-Optix',
          html_url: 'https://github.com/FactoryTalk-Optix',
          followers_url: 'https://api.github.com/users/FactoryTalk-Optix/followers',
          following_url: 'https://api.github.com/users/FactoryTalk-Optix/following{/other_user}',
          gists_url: 'https://api.github.com/users/FactoryTalk-Optix/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/FactoryTalk-Optix/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/FactoryTalk-Optix/subscriptions',
          organizations_url: 'https://api.github.com/users/FactoryTalk-Optix/orgs',
          repos_url: 'https://api.github.com/users/FactoryTalk-Optix/repos',
          events_url: 'https://api.github.com/users/FactoryTalk-Optix/events{/privacy}',
          received_events_url: 'https://api.github.com/users/FactoryTalk-Optix/received_events',
          type: 'Organization',
          site_admin: false,
          score: 1.0
        },
        {
          login: 'factset',
          id: 660378,
          node_id: 'MDEyOk9yZ2FuaXphdGlvbjY2MDM3OA==',
          avatar_url: 'https://avatars.githubusercontent.com/u/660378?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/factset',
          html_url: 'https://github.com/factset',
          followers_url: 'https://api.github.com/users/factset/followers',
          following_url: 'https://api.github.com/users/factset/following{/other_user}',
          gists_url: 'https://api.github.com/users/factset/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/factset/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/factset/subscriptions',
          organizations_url: 'https://api.github.com/users/factset/orgs',
          repos_url: 'https://api.github.com/users/factset/repos',
          events_url: 'https://api.github.com/users/factset/events{/privacy}',
          received_events_url: 'https://api.github.com/users/factset/received_events',
          type: 'Organization',
          site_admin: false,
          score: 1.0
        }
      ]
    }
  }
}
