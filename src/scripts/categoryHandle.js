import {categories} from './productsData.js'

function filterButton(){
    const filters = document.querySelectorAll(".filter__category")

    filters.forEach(filter => {
        filter.addEventListener("click",(event) =>{
            const chosed = event.target.innerText
            
            filters.forEach(button =>{
                
                if(button.innerText == chosed){
                    button.classList.add("filter__category-selected")
                } else {
                    button.classList.remove("filter__category-selected")
                }
            })
            
        })
    })
}

export function genderCreator(){
    const filterDiv = document.querySelector(".filter__categories")
    
    categories.forEach(category => {
        const button = document.createElement("button")

        button.innerText = category

        button.className = "filter__category"

        

        filterDiv.appendChild(button)

    });

    filterButton()
}

function sliderBackground(){
    const slider = document.querySelector(".filter__slider")
    slider.style.background = `linear-gradient(90deg, var(--color-brand-1) ${slider.value}%, var(--color-grey-5) ${slider.value}%)`
    slider.addEventListener("input", () =>{
        const percentage = (slider.value / slider.max * 100)
        // console.log(percentage)
        slider.style.background = `linear-gradient(90deg, var(--color-brand-1) ${percentage}%, var(--color-grey-5) ${percentage}%)`
    })
}

sliderBackground()