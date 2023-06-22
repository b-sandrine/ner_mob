import APP_URL from "../config/url"
import axios from "axios"

const candidateService = {
    getAllCandidates: async () => {
        await axios.get(`${APP_URL}/candidates/list`)
            .then((response) => {
                console.log(response.data.result)
                return response.data.result;
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export default candidateService;