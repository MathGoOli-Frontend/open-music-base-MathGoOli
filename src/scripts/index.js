/* Desenvolva sua lógica aqui ... */
import {darkmode} from "./theme.js"
import {categoriesButtonsCreator, sliderBackground} from "./categoryHandle.js"
import {makeDeck, filterCards} from "./cardHandle.js"
import {products, categories} from "./productsData.js"

darkmode()
categoriesButtonsCreator()
sliderBackground()
makeDeck(filterCards(products))


