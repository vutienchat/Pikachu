// import lab from './labs/lab1';

import Error404Page from "./pages/Error404Page";
import PlayPokemonPage from "./pages/PlayPokemonPage";
import SignIn from "./pages/SignIn";
import { parseRequestUrl } from "./utils";
interface RoterInterface{
    [index:string]: any
}
const routers:RoterInterface ={
    "/": SignIn,
    "/play": PlayPokemonPage
} 
const router = async()=>{
    const {resource, id} = parseRequestUrl()
    const parseUrl = (resource ? `/${resource}` : `/`) + (id ? `/:id` : '');
    const page = routers[parseUrl] ? routers[parseUrl] : Error404Page;
    const mainContentId =  document.querySelector('#mainContentId')
    mainContentId.innerHTML = await page.render();
    await page.afterRender();
}
window.addEventListener('DOMContentLoaded',router)
window.addEventListener('hashchange',router)
