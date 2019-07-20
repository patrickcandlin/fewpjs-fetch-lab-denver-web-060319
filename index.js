const urlApiGOT = "https://anapioficeandfire.com/api/books"

function fetchBooks() {
  
  return fetch(urlApiGOT)
    .then(response => response.json())
    .then(renderBooks)

}

function renderBooks(json) {
  const main = document.querySelector('main')
   json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  const url = "https://anapioficeandfire.com/api/books"
  fetchBooks()
})
