import axios from "axios"
const BASE_URL = "http://127.0.0.1:5000/api/client";

const headers = {
    'Content-Type': 'application/json',
};
export const getClienService = async (token: string) => {
    try {
        const result = await axios.get(
            `${BASE_URL}`,
            {

                headers: {
                    Authorization: `${token}`,
                }
            }
        );
        return result.data
    } catch (e: any) {
        console.log(e)
    }

}
