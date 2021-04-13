import AudioGame from "./Audio"
import { isWinGame, Point } from "./Point";
let countIsMatch: number = 0;
let count: number =0;
let ElementClicked1:HTMLElement;
let ElementClicked2:HTMLElement;
export function processGameItemClicked():void {
    const chon = document.querySelectorAll('.chon')
    chon.forEach((element:HTMLElement) => {
        element.addEventListener("click",ClickPokemon)
    })
    function ClickPokemon(){
        count++;
        if(count == 1){
            ElementClicked1 = this
            ElementClicked1.classList.add('opacity-80')
            ElementClicked1.removeEventListener("click",ClickPokemon)
        }
        if(count == 2){   
            ElementClicked2 = this
            if(ElementClicked1.dataset.id === ElementClicked2.dataset.id){
                ElementClicked1.classList.remove('opacity-80','cursor-pointer')
                ElementClicked2.classList.remove('cursor-pointer')
                ElementClicked1.classList.add('opacity-0')
                ElementClicked2.classList.add('opacity-0')
                ElementClicked1.removeEventListener("click",ClickPokemon)
                ElementClicked2.removeEventListener("click",ClickPokemon)
                countIsMatch++
                Point(countIsMatch)
                if(isWinGame(countIsMatch)){
                    document.querySelector('#modalWinGame').classList.remove('scale-0')
                    countIsMatch = 0;
                    AudioGame.pauseAudio()
                }
                count = 0
            } else{
                ElementClicked1.classList.remove('opacity-80')
                ElementClicked1.addEventListener("click",ClickPokemon)
                count = 0
                
            }
        }
    }
}
export const resetGame = async(x) =>{
    countIsMatch = 0;
    count =0;
    const resets = document.querySelectorAll('#resetGame')
    resets.forEach(reset =>{
        reset.addEventListener("click", async function(){
            document.querySelector('#mainContentId').innerHTML = await x.render();
            x.afterRender()
            })
    })
}
export const cencelGame = ():void =>{
    const cencel = document.querySelector('#cencelGame') as HTMLElement
    cencel.addEventListener("click",AudioGame.pauseAudio)
}
