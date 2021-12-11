import axios from "axios"

export const introService = async () => {

    try {
        const result = await axios({
            url: 'http://localhost:5000/api/intro',
            method: 'GET'
        })
        return result
    } catch (e) {
        console.log(e)
    }

}