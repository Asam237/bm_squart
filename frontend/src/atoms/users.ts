import { atom, selector } from "recoil"

export const usersState = atom({
    key: "users-state",
    default: {
        myCurrentUser: null
    }
})

export const myCurrentUser = selector({
    key: "my-current-user",
    get: ({ get }) => {
        const myCurrentUser = get(usersState)
        return myCurrentUser
    }
})