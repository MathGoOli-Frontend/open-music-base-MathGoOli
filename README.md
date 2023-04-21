# m2 S4 Open music

## **Estrutura HTML**

![open music.svg](./readmeSrc/open%20music.svg)

## Catálogo de funções

### index.js

arquivo que importa e chama as funções do index.html

### theme.js

arquivo que lida com o dark mode

dakmode() : faz a lógica botão do dark mode e a verificação do tema no local storage

### categoryHandle.js

arquivo que cuida dos botes de filtro e do slider

categoriesButtonsCreator() cria todos os botões de categoria de forma dinamica. obs não cria o eventlistener

filterButton() adiciona a função de click nos botões de pesquisa e triga a função de filtro

sliderBackground() lida com todas as configurações do slider. 
incluindo:
1 - valor máximo
2 - O event listener: com a função filtro.
3 - O event listener: com fundo com duas cores dinâmicas.

### cardHandle.js

arquivo que cria os cards e lida com a a função de filtragem

createCard() recebe objeto (item da products) retorna um card li

makeDeck(array) : 
Faz o loop de um array de produtos.
usa a função createCard()
adiciona no deck de cartas

filterCards(array) filtra o array de produtos usando a função filterButtonStorage() e o slider.

### dataLocalStorage.js

arquivo que lida com a armazenagem de dados no local storage

filterButtonStorage(item) verifica se o local storage tem a chave do filtro e armazena e a retorna 

darkmodeStorage(item) verifica se o local storage tem a chave do dark mode e armazena e a retorna