import axios from "axios"
const BASE_URL = "http://127.0.0.1:5000/api/auth";

const headers = {
    'Content-Type': 'application/json',
};

export const loginService = async (email: string, password: string) => {
    const data = {
        email,
        password
    }
    console.log("Data here !", data)
    try {
        const result = await axios({
            url: `${BASE_URL}/login`,
            data,
            method: "POST",
            headers
        })
        console.log("Result:::::", await result.data)
        return result.data
    } catch (e) {
        console.log("Erreur de la console !", e)
    }
}


export const registerService = async (username: string, email: string, password: string) => {
    const data = {
        username,
        email,
        password
    }
    try {
        const result = await axios({
            url: `${BASE_URL}/register`,
            data,
            method: "POST",
            headers
        })
        console.log("RESULT:::", result.data)
        return result.data
    } catch (e) {
        console.log(e)
    }

}
