import axios from "axios"
const BASE_URL = "http://127.0.0.1:5000/api/auth";

let access_token = ""
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + access_token
};


export const loginService = async (username: string, password: string) => {
    const data = {
        username,
        password,
        token: access_token
    }
    try {
        const result = await axios({
            url: `${BASE_URL}/login`,
            data,
            method: "POST",
            headers
        })
        return result.data
    } catch (e) {
        console.log("Erreur de la requette : ", e)
    }
}


export const registerService = async (username: string, email: string, password: string) => {
    const data = {
        username,
        email,
        password
    }
    console.log("data", data)
    try {
        const result = await axios({
            url: `${BASE_URL}/register`,
            data,
            method: "POST",
            headers
        })
        console.log("RESULT:::", result.data)
        if (result.status === 201) {
            return result.data
        } else {
            console.log("error")
        }
    } catch (e) {
        console.log("Error : ", e)
    }

}
