import type {User} from "@/api/User";

export const  userFixtures = {


    defaultList (): User[]  {
        return [
            {
                avatar: 'https://avatars.githubusercontent.com/u/660378?v=4',
                name: 'factset'
            },
            {
                avatar: 'https://avatars.githubusercontent.com/u/10263490?v=4',
                name: 'fact'
            }
        ]

    }

}
