import {categories, products} from './productsData.js'
import {filterCards,makeDeck} from "./cardHandle.js"
import {filterButtonStorage} from "./dataLocalStorage.js"

function filterButton(){
    const filters = document.querySelectorAll(".filter__category")

    filters.forEach(filter => {
        filter.addEventListener("click",(event) =>{
            const chosed = event.target.innerText
            filterButtonStorage(event.target.innerText)
            filters.forEach(button =>{
                
                if(button.innerText == chosed){
                    button.classList.add("filter__category-selected")
                    button.dataset.isSelected = true
                } else {
                    button.classList.remove("filter__category-selected")
                    button.dataset.isSelected = false
                }
            })
            
            makeDeck(filterCards(products))
        })
    })
}

export function genderCreator(){
    const filterDiv = document.querySelector(".filter__categories")
    const config = filterButtonStorage()
    categories.forEach(category => {
        const button = document.createElement("button")

        button.innerText = category


        button.className = "filter__category"

        if (config === category){
            button.dataset.isSelected = true
            button.className = "filter__category filter__category-selected"
        }else{
            button.dataset.isSelected = false
        }

        filterDiv.appendChild(button)

    });

    filterButton()
}

function sliderBackground(){
    const slider = document.querySelector(".filter__slider")
    slider.style.background = `linear-gradient(90deg, var(--color-brand-1) ${slider.value}%, var(--color-grey-5) ${slider.value}%)`
    const priceSpan = document.querySelector(".priceTag")

    products.forEach(product =>{
        if(slider.max < product.price){
            slider.max = product.price
        }
    })
    slider.addEventListener("input", () =>{
        let percentage = (slider.value / slider.max * 100)
        if (percentage < 50){
            percentage = percentage + Math.abs(percentage-100) * 0.01
        } else if(percentage > 50){
            percentage = percentage - percentage * 0.01
        }
        // console.log(percentage)
        slider.style.background = `linear-gradient(90deg, var(--color-brand-1) ${percentage}%, var(--color-grey-5) ${percentage}%)`

        priceSpan.innerText = "Até: " + Number(slider.value).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

        makeDeck(filterCards(products))
    })
}


sliderBackground()