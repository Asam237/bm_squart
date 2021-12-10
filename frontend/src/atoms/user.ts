import { atom, selector } from "recoil";

export const userState = atom({
    key: "user-state",
    default: {
        currentUser: null
    }
})

export const currentUser = selector({
    key: "current-user",
    get: ({ get }) => {
        const { currentUser } = get(userState)
        if (currentUser === null) {
            return null
        }
        return fetch("https://jsonplaceholder.typicode.com/users" + currentUser)
            .then(r => r.json())
    }
})