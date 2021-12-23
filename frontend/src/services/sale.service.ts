import axios from "axios"
const BASE_URL = "http://127.0.0.1:5000/api/products";

export const addSale = async (name: string, numero: string, product: string, price: number, category: string, access_token: string) => {

    const data = {
        name,
        numero,
        product,
        price,
        category
    }
    const header = {
        'Content-Type': 'application/json',
        'Authorization': ` ${access_token}`
    };
    axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`
    console.log("header", header)
    try {
        const result = await axios({
            url: `${BASE_URL}`,
            method: "POST",
            data,
        })
        return result.data
    }
    catch (e: any) {
        console.log("Erreur de la requete : ", e.response)
    }

}