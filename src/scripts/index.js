/* Desenvolva sua lógica aqui ... */
import {darkmode} from "./theme.js"
import {genderCreator} from "./categoryHandle.js"
import {makeDeck} from "./cardHandle.js"
// 
import {products, categories} from "./productsData.js"

darkmode()
genderCreator()
makeDeck(products)