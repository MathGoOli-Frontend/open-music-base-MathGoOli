
export function filterButtonStorage(item){
    /* verifica se o local storage tem a chave do filtro e armazena e a retorna  */
    if(item){
        localStorage.setItem("filterButton", item)
    }
    
    if (localStorage.getItem("filterButton") == undefined){
        localStorage.setItem("filterButton", "Todos")
        return localStorage.getItem("filterButton")
    } else {
        return  localStorage.getItem("filterButton")
    }
}

export function darkmodeStorage(item){
    /* verifica se o local storage tem a chave do dark mode e armazena e a retorna  */
    if(localStorage.getItem("darkmode") === undefined){
        localStorage.setItem("darkmode", false)
        return localStorage.getItem("darkmode")
    } 
    if (item != undefined){
        localStorage.setItem("darkmode", item)
    }
    return localStorage.getItem("darkmode")
}
