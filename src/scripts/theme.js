/* Desenvolva sua lógica aqui ... */

export function darkmode(){
    const button = document.querySelector(".header__button-darkmode")
    const img = document.querySelector(".header__button-darkmode img")
    const html = document.querySelector("html")


    button.addEventListener("click", () => {
        html.classList.toggle("darkmode")

        if (html.classList.contains("darkmode")){
            img.src = "./src/assets/icons/moon.svg"
        } else{
            img.src = "./src/assets/icons/sun.svg"
        }
    })
}