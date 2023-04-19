import {categories} from './productsData.js'

export function genderCreator(){
    const filterDiv = document.querySelector(".filter__categories")
    
    categories.forEach(category => {
        const div = document.createElement("div")
        div.className = "filter__category"

        const label = document.createElement("label")
        label.htmlFor = category
        label.innerText = category

        const input = document.createElement("input")
        input.type = "radio"
        input.id = category
        input.value = category
        input.name = "category"

        div.append(label, input)

        filterDiv.appendChild(div)

    });
}