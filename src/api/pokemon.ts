import {axiosClient} from './axiosClient'
const pokemonAPI = { 
    get(id: number){
        const url:string = `pokemon/${id}`;
        return axiosClient.get(url)
    }
} 
export default pokemonAPI