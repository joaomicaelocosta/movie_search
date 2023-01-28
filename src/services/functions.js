import axios from "axios";

const access_token = "37806dd1300837fa217e0539b5252818";

export async function movieLoad(query) {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/search/movie?api_key='+access_token+"&query='"+query+"'", {
            headers: {
                'Content-Type' : 'application/json;charset=utf-8',
            }
        })
        return response.data
    }catch(error) {
        return error;
    }
    
}