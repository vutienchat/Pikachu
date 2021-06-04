import AudioGame from "./Audio"
import { modalWinGame } from "./modalGame";
import { isWinGame, Point } from "./Point";
let countIsMatch: number = 0;
let count: number = 0;
let ElementClicked1: HTMLElement;
let ElementClicked2: HTMLElement;
function notifyPlay() {
    alert('Bạn đang ở chế độ tạm dừng , hãy ấn play game')
}
function ClickPokemon() {
    count++;
    if (count == 1) {
        ElementClicked1 = this
        ElementClicked1.classList.add('bg-yellow-300')
        ElementClicked1.removeEventListener("click", ClickPokemon)
    }
    if (count == 2) {
        ElementClicked2 = this
        if (ElementClicked1.dataset.id === ElementClicked2.dataset.id) {
            ElementClicked2.classList.add('bg-yellow-300')
            ElementClicked1.classList.remove('cursor-pointer')
            ElementClicked2.classList.remove('cursor-pointer')
            ElementClicked1.removeEventListener("click", ClickPokemon)
            ElementClicked2.removeEventListener("click", ClickPokemon)
            setTimeout(() => {
                ElementClicked1.classList.add('opacity-0')
                ElementClicked2.classList.add('opacity-0')
            }, 300);
            countIsMatch++
            Point(countIsMatch)
            if (isWinGame(countIsMatch)) {
                document.querySelector('#modalWinGame').classList.remove('scale-0')
                countIsMatch = 0;
                AudioGame.pauseAudio()
            }
            count = 0
        } else {
            ElementClicked1.classList.remove('bg-yellow-300')
            ElementClicked1.classList.add('bg-red-400')
            ElementClicked2.classList.add('bg-red-400')
            setTimeout(() => {
                ElementClicked1.classList.remove('bg-red-400')
                ElementClicked2.classList.remove('bg-red-400')
            }, 500);
            ElementClicked1.addEventListener("click", ClickPokemon)
            count = 0
        }
    }
}
export function processGameItemClicked(): void {
    const chon: NodeList = document.querySelectorAll('.chon')
    chon.forEach((element: HTMLElement) => {
        element.addEventListener("click", ClickPokemon)
    })

}
export const resetGame = async (x) => {
    countIsMatch = 0;
    count = 0;
    const resets = document.querySelectorAll('#resetGame')
    resets.forEach(reset => {
        reset.addEventListener("click", async function () {
            document.querySelector('#mainContentId').innerHTML = await x.render();
            x.afterRender()
        })
    })
}
var setIntervalId:any;
function countDown() {
    const time: HTMLElement = document.querySelector('#countDown') as HTMLElement;
    let count: number = parseInt(time.innerText);
    setIntervalId = setInterval(() => {
        count--
        time.innerHTML = count.toString();
        if (count == 0) {
            clearInterval(setIntervalId)
            document.querySelector('#modalWinGame').classList.remove('scale-0');
            const nameModal: HTMLElement = document.querySelector('#nameModal') as HTMLElement;
            nameModal.innerText = 'Thất Bại'
            countIsMatch = 0;
        }
    }, 1000)
}
export const isplay = () => {
    let isplay: boolean = true;
    const chon: NodeList = document.querySelectorAll('.chon')
    const btnIsplay = document.querySelector('#btnIsplay') as HTMLElement
    countDown()
    btnIsplay.addEventListener("click", function () {
        isplay = !isplay;
        if (isplay) {
            countDown()
            chon.forEach((element: HTMLElement) => {
                element.addEventListener("click", ClickPokemon)
                element.removeEventListener("click", notifyPlay)
            });
            AudioGame.playAudio();
            btnIsplay.innerHTML = `<button type="button" id="cencelGame" class="focus:outline-none text-white text-sm py-2 px-5 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-600 transform hover:scale-110">Cencel Game</button>`
        } else {
            clearInterval(setIntervalId)
            chon.forEach((element: HTMLElement) => {
                element.removeEventListener("click", ClickPokemon)
                element.addEventListener("click", notifyPlay);
            });
            AudioGame.pauseAudio();
            btnIsplay.innerHTML = `<button type="button" id="playGame" class="focus:outline-none text-white text-sm py-2 px-5 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-600 transform hover:scale-110">Play Game</button>`
        }
    });
}
