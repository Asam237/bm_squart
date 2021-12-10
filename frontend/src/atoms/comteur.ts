import { atom, selector } from "recoil"
export const compteurState = atom({
    key: "compteur-state",
    default: 0
})

export const compteurDoubleState = selector({
    key: "compteur-double-state",
    get: ({ get }) => {
        const n = get(compteurState)
        return n * 2
    }
})