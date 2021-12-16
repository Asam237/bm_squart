import axios from "axios"
const BASE_URL = "https://dashboard.mystore.lamater.net/api/2021-05";

const headers = {
    'Content-Type': 'application/json',
};

export const login = async (email: string, password: string) => {
    const data = {
        email,
        password
    }
    try {
        const result = await axios({
            url: `${BASE_URL}/clients/register`,
            data,
            method: "POST",
            headers
        })
        console.log("RESULT:::", result.data)
        return result.data
    } catch (e) {
        console.log("Erreur de la console !", e)
    }
}


export const register = async (email: string, tel: string, firstname: string, surname: string, password: string) => {
    const data = {
        email,
        tel,
        firstname,
        surname,
        password
    }
    try {
        const result = await axios({
            url: `${BASE_URL}/clients/register`,
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
