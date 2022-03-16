import * as axios from "axios"

export const getHeroesApi = () => {
    return axios.get("https://api.opendota.com/api/heroStats")
    
}
axios.get("https://api.opendota.com/api/heroStats").then((result) => {
    localStorage.setItem("allHeroes",JSON.stringify(result.data));
    }
)