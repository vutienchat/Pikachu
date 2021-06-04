export const modalWinGame = ():string => {
    return /*html */ `
      <div class= "h-screen w-screen bg-gray-800 bg-opacity-90 absolute top-0 left-0 transform scale-0 transition delay-300 duration-300" id="modalWinGame">
        <div class= "flex items-center justify-center h-full">
          <div class= "bg-white w-2/4 h-2/4 flex items-center justify-center" style="background-image: url('http://static.gamehub.vn/img/files/2018/07/17/Lien_Quan_Poke_1.jpg'); background-repeat: no-repeat;background-size: cover">
            <div>
                 <div class= " font-extrabold text-yellow-500 animate-bounce " id="nameModal" style="font-size:5em">Chiến Thắng</div>
                 <div class="text-center pt-10">
                  <button type="button" id="resetGame"  class="focus:outline-none text-white text-sm py-2 px-5 rounded-md bg-gradient-to-r from-red-400 to-red-600 transform hover:scale-110 mr-2">Chơi Tiếp</button>
                  <a href="#/">
                  <button type="button"  class="focus:outline-none text-white text-sm py-2 px-5 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-600 transform hover:scale-110">Đăng Nhập</button>
                  </a>
                 </div>
            </div>
          </div>
        </div>
      </div>
    ` 
}