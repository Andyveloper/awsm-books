const bookContainer = document.querySelector('.book-list__container');
const form = document.querySelector('.add-book__add-form')
const title = document.querySelector('#book-title');
const author = document.querySelector('#book-author');
const submitBtn = document.querySelector('#book-submit');

const bookLibrary = [];

function saveBook() {
  const book = new Object() 
  book.title = title.value;
  book.author = author.value;
  return bookLibrary.push(book);
}

// form.submit(saveBook());

// when click on button
// save title and author into object
// object must be in array

let whatever = {
  nombre: 'camilo',
  apellido: 'Rodriguez'
}

let arreglo = [];

arreglo.push(whatever);
