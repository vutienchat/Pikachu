import AudioGame from "../component/Audio"
import User from "../component/localStorage"
class SignIn {
    render() {
        return /*html*/`
        <div class="flex items-center h-screen justify-center">
                <form class="px-16 py-6 bg-black bg-opacity-80 rounded shadow-xl w-96" id="loginForm">
                    <div class="mt-2">
                        <label class="block  text-sm text-white">Username</label>
                        <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                        type="text" id="username" placeholder="Name" required>
                    </div>

                    <div class="mt-4 items-center flex justify-between">
                        <button  class="focus:outline-none text-blue-600 text-sm py-2.5 px-5 rounded-md border border-blue-600 hover:bg-blue-600 hover:text-white">Play Game</button>
                        <a class="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400"
                        href="#">Esqueceu a senha ?</a>
                    </div>
                    <div class="text-center">
                        <a class="inline-block right-0 align-baseline font-light text-sm text-500 hover:text-red-400">
                            Criar uma conta
                        </a>
                    </div>

                </form>
                </div>
        `
    }
   async afterRender() {
    AudioGame.pauseAudio()
        const loginForm = document.querySelector('#loginForm');
        loginForm.addEventListener('submit', (e) =>{
            e.preventDefault()
            const username =  document.querySelector('#username') as HTMLInputElement;
            User.setName(username.value)
            window.location.hash = '/play'
        })
    }
}
export default new SignIn;