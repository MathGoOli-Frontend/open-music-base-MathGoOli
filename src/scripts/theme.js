/* Desenvolva sua lógica aqui ... */
import {darkmodeStorage} from "./dataLocalStorage.js"

export function darkmode(){
    // faz a lógica botão do dark mode e a verificação do tema no local storage
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
            img.src = "./src/assets/icons/sun.svg" 
            darkmodeStorage(true)
        } else{
            img.src = "./src/assets/icons/moon.svg"
            darkmodeStorage(false)
        }
    })
}