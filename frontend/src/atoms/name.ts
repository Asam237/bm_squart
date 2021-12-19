import { atom } from "recoil"
import { getClienService } from "../services/client.service"

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
    default: getClienService("token")
})