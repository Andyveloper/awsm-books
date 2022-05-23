const bookContainer = document.querySelector('.book-list__container');
const form = document.querySelector('.add-book__add-form')
const title = document.querySelector('#book-title');
const author = document.querySelector('#book-author');
const submitBtn = document.querySelector('#book-submit');
const bookLibrary = []; // store LI instead of book title / author
let removeButtons = [];

submitBtn.addEventListener('click', (event) => {
  let book = new Object();
  book.title = title.value;
  book.author = author.value;
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
  bookLibrary.push(listBook);
});

function removeBook(button) {
  button.addEventListener('click', (event) => {
    // remove the index of the LI
    bookContainer.removeChild(bookLibrary[removeButtons.indexOf(button)]);
    bookLibrary.splice(removeButtons.indexOf(button), 1);
    removeButtons.splice(removeButtons.indexOf(button), 1);
  });
}
