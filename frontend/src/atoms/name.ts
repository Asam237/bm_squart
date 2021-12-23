import { atom } from "recoil"
import { getClienService } from "../services/client.service"
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()


export const nameState = atom({
    key: "name-state",
    default: ""
})

export const userState = atom({
    key: "user-state",
    default: ""
})

export const clientState = atom({
    key: "client-state",
    default: getClienService("")
})

export const clientIdState = atom({
    key: "clientid-state",
    default: "",
    effects_UNSTABLE: [persistAtom],
})
export const categoryState = atom({
    key: "category-state",
    default: "",
    effects_UNSTABLE: [persistAtom],
})