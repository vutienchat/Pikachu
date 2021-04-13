export const Point = (countPoint : number):void => {
    const elementtotal = document.querySelector('#total') as HTMLElement
    elementtotal.innerHTML = `${countPoint * 1000}`;
}
export const isWinGame = (count:number):boolean =>{
    const lengthData =  document.querySelectorAll('.chon').length;
   if(count == (lengthData/2)){
       return true;
   }else{
       return false;
   }
}