import type {User} from "@/api/User";

export const  userFixtures = {


    defaultList (): User[]  {
        return [
            {
                avatar: 'https://avatars.githubusercontent.com/u/660378?v=4',
                name: 'fact'
            },
            {
                avatar: 'https://example.com/tom',
                name: 'tom'
            }
        ]

    }

}
