import axios from "axios"
const BASE_URL = "http://127.0.0.1:5000/api/products";

const headers = {
    'Content-Type': 'application/json',
};
export const addSale = async (name: string, numero: string, price: number, category: string) => {

    const data = {
        name,
        numero,
        price,
        category

    }
    try {
        const result = await axios({
            url: `${BASE_URL}`,
            data,
            method: "POST",
            headers
        })
        return result.data
    }
    catch (e) {
        console.log("Erreur de la requete : ", e)
    }

}