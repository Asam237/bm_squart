import axios from "axios"
import { atom } from "recoil"
import introJSON from "./intro.json"

export const introState = atom({
    key: "intro-state",
    default: introJSON
    // default: axios.get("http://localhost:5000/api/intro")
    //     .then(r => r.data)
    //     .catch((e: any) => console.log(e))
})
