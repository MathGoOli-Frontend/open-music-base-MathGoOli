/* Desenvolva sua lógica aqui ... */
import {darkmode} from "./theme.js"
import {genderCreator} from "./categoryHandle.js"
import {makeDeck, filterCards} from "./cardHandle.js"
// 
import {products, categories} from "./productsData.js"

darkmode()
genderCreator()
makeDeck(filterCards(products))


