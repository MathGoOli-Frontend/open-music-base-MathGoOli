/* Desenvolva sua lógica aqui ... */
import {darkmodeStorage} from "./dataLocalStorage.js"

export function darkmode(){
    const button = document.querySelector(".header__button-darkmode")
    const img = document.querySelector(".header__button-darkmode img")
    const html = document.querySelector("html")

    if(darkmodeStorage() == "true"){
        html.classList.add("darkmode")
        img.src = "./src/assets/icons/moon.svg"
    }


    button.addEventListener("click", () => {
        html.classList.toggle("darkmode")

        if (html.classList.contains("darkmode")){
            img.src = "./src/assets/icons/moon.svg"
            darkmodeStorage(true)
        } else{
            img.src = "./src/assets/icons/sun.svg"
            darkmodeStorage(false)
        }
    })
}