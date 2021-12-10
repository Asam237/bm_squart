import { atom, selector } from "recoil"
export const testState = atom({
    key: "test-state",
    default: {
        currentTest: null
    }
})

export const currentTest = selector({
    key: "current-test",
    get: ({ get }) => {
        const { currentTest } = get(testState)
        if (currentTest === null) {
            return null
        }

        console.log("DATA>>", fetch("https://dashboard.mystore.lamater.net/api/2021-05/companies/430/collections/" + currentTest)
            .then(r => r.json()))
    }
})