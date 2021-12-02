import { atom, selector } from "recoil"

export const userState = atom({
    key: 'user-state',
    default: {
        currentUser: null
    }
})
