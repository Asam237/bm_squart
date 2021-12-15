import axios from "axios"

const BASE_URL = "https://dashboard.mystore.lamater.net/api/2021-05";

export class AuthService {
    static register = async (email: string, tel: string, firstname: string, surname: string, password: string) => {
        const data = {
            email,
            tel,
            firstname,
            surname,
            password
        }
        await axios({
            url: `${BASE_URL}/clients/register`,
            data,
            method: "POST"
        })

    }

    static login = async (email: string, password: string) => {
        const data = {
            email,
            password
        }
        await axios({
            url: `${BASE_URL}/clients/login`,
            data,
            method: "POST"
        })
    }

}