import axios from "axios"


export class IntroService {
    static getIntro = async () => {
        try {
            const result = await axios({
                url: 'http://localhost:5000/api/intro',
                method: 'GET'
            })
            return result.data
        } catch (e) {
            console.log(e)
        }
    }
}