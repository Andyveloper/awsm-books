// getting html elements
const bookContainer = document.querySelector('.book-list__container');
const form = document.querySelector('.add-book__add-form')
const title = document.querySelector('#book-title');
const author = document.querySelector('#book-author');
const submitBtn = document.querySelector('#book-submit');
let bookLibrary = [];

// submit button function
submitBtn.addEventListener('click', (event) => {
  createNewBookDiv(title.value, author.value);
});

function createNewBookDiv(title, author) {
  // creating html elements
  const listBook = document.createElement('li');
  const bookDiv = document.createElement('div');
  const bookTitle = document.createElement('p');
  const bookAuthor = document.createElement('p');
  const removeButton = document.createElement('button');
  const newBook = new Object;
  // creating new book
  newBook.title = title;
  newBook.author = author;
  newBook.index = Date.now();
  listBook.setAttribute('id', `book${newBook.index}`);
  bookLibrary.push(newBook);
  // settings html elements
  removeButton.innerHTML = 'Remove';
  removeButton.classList.add('remove-button');
  removeButton.setAttribute('id', `button${newBook.index}`);
  removeButton.addEventListener('click', removeBookDiv(removeButton.id));
  bookContainer.appendChild(listBook);
  listBook.appendChild(bookDiv);
  bookDiv.append(bookTitle, bookAuthor, removeButton);
  bookTitle.innerHTML = newBook.title;
  bookAuthor.innerHTML = newBook.author;
}

function removeBookDiv(index) {
  const div = document.getElementById(`button${index}`);
  bookContainer.removeChild(div);
  for (let i = 0; i < bookLibrary.length; i++) {
    if (bookLibrary[i].index === `book${index}`) {
      bookLibrary.splice(i,1);
    }
  }
}
