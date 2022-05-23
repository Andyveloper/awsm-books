const bookContainer = document.querySelector('.book-list__container');
const form = document.querySelector('.add-book__add-form')
const title = document.querySelector('#book-title');
const author = document.querySelector('#book-author');
const submitBtn = document.querySelector('#book-submit');
const bookLibrary = [];
const removeButtons = [];

submitBtn.addEventListener('click', (event) => {
  let book = new Object();
  book.title = title.value;
  book.author = author.value;
  bookLibrary.push(book);
  const listBook = document.createElement('li');
  const bookDiv = document.createElement('div');
  const bookTitle = document.createElement('p');
  const bookAuthor = document.createElement('p');
  const removeButton = document.createElement('button');
  removeButton.innerHTML = 'Remove';
  removeButton.classList.add('remove-button');
  removeBook(removeButton);
  removeButtons.push(removeButton);
  listBook.appendChild(bookDiv);
  bookDiv.append(bookTitle, bookAuthor, removeButton);
  bookContainer.appendChild(listBook);
  bookTitle.innerHTML = book.title;
  bookAuthor.innerHTML = book.author;
});

function removeBook(button) {
  button.addEventListener('click', (event) => {
    console.log('a');
   });
};


// when click on button
// save title and author into object
// object must be in array
