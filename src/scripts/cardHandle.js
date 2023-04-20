import {products, categories} from "./productsData.js"

function createCard ({title, category, price, img, band, year, id}){
    // recebe objeto retorna um card
    const li = document.createElement("li")
    li.className = "album__card"

    const cardImg = document.createElement("img")
    cardImg.src = img
    cardImg.className = "album__image"
    
    const mainDiv = document.createElement("div")
    mainDiv.className = "card__mainDiv"

    const div1 = document.createElement("div")
    div1.className = "card__div"

    const spanBandName = document.createElement("span")
    spanBandName.className = "album__bandName title-3"
    spanBandName.innerText = band

    const spanYear = document.createElement("span")
    spanYear.className = "title-3"
    spanYear.innerText = year

    const h3MusicName = document.createElement("h3")
    h3MusicName.className = "title-2"
    h3MusicName.innerText = title

    const div2 = document.createElement("div")
    div2.className = "card__div"

    const spanPrice = document.createElement("span")
    spanPrice.className = "title-2"
    spanPrice.innerText = price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    const button = document.createElement("button")
    button.className = "title-3 album__button"
    button.innerText = "Comprar"

    div1.append(spanBandName, spanYear)
    div2.append(spanPrice, button)
    mainDiv.append(div1, h3MusicName, div2)

    li.append(cardImg, mainDiv)

    return li
}

export function makeDeck(array){
    const deck = document.querySelector(".album__deck")
    deck.innerHTML = ""
    array.forEach(card => {
        deck.appendChild(createCard(card))
    });
}