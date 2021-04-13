import pokemonAPI from "../api/pokemon";
import _ from 'lodash';
import { cencelGame, processGameItemClicked,resetGame} from "../component/handlePlayGame";
import AudioGame from "../component/Audio"
import { modalWinGame } from "../component/modalGame";
import User from '../component/localStorage'
interface PokemonInterface {
    id: number;
    name: string;
    image: string;
}
class PlayPokemonPage {
   async render() {
        const pokemons: number = 12;
        let arrPokemons: PokemonInterface[] = [];
        for (let i = 1; i <= pokemons; i++) {
            const {data:pokemon} = await pokemonAPI.get(i)
            arrPokemons = [...arrPokemons, { id: pokemon.id, name: pokemon.name, image: pokemon.sprites.back_default }]
        }
       const newArrPokemons = [...arrPokemons,...arrPokemons]
       const ListPokemonObj = _.shuffle(newArrPokemons)
       const listPokemons =  ListPokemonObj.map(pokemon => {
             return /*html*/ `
                 <div class= "border border-gray-300 p-1 shadow text-center bg-white chon cursor-pointer" data-id = ${pokemon.id}>
                     <div class="flex justify-center">
                         <img  src="${pokemon.image}" title="${pokemon.name}" />
                     </div>
                 </div>
             `
         }).join("")
         return /*html*/`
         <div class= "w-3/5 mx-auto">
            <h1 class="text-center text-4xl font-momo font-semibold my-3 uppercase text-white">Pokemon</h1> 
            <div class="flex justify-between items-center pb-1">
               <div> 
                    <span class="text-white font-medium">Name : </span>
                    <span class="text-red-500 font-black">${User.getName()}</span>
               </div>
               <div> 
                    <span class="text-white font-medium">Point:</span>  
                    <span class="text-red-500 font-black" id="total">0</span>
               </div>
            </div>
            <div class="grid grid-cols-6 gap-2">${listPokemons}</div>
            <div class="flex justify-center items-center mt-5">
                <button type="button" id="resetGame" class="focus:outline-none text-white text-sm py-2 px-5 rounded-md bg-gradient-to-r from-red-400 to-red-600 transform hover:scale-110 mr-2">Reset Game</button>
                <button type="button" id="cencelGame" class="focus:outline-none text-white text-sm py-2 px-5 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-600 transform hover:scale-110">Cencel Game</button>
            </div>                                             
         </div>
         <div class="modalWinGame">
            ${modalWinGame()}
         </div>
           
         `;
    }
    async afterRender() {
        AudioGame.startAudio();
        processGameItemClicked();
        resetGame(this);
        cencelGame();
    }
    
}

export default new PlayPokemonPage;