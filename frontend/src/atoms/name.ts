import { atom } from "recoil"

export const nameState = atom({
    key: "name-state",
    default: ""
})

export const userState = atom({
    key: "user-state",
    default: ""
})