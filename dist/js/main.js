// getting html elements
const bookContainer = document.querySelector('.book-list__container');
const title = document.querySelector('#book-title');
const author = document.querySelector('#book-author');
const submitBtn = document.querySelector('#book-submit');

const bookLibrary = [];

const storagedData = () => {
  localStorage.setItem('bookInfo', JSON.stringify(bookLibrary));
};

function removeBookDiv(button, index) {
  button.addEventListener('click', () => {
    const div = document.getElementById(`book${index}`);
    bookContainer.removeChild(div);
    for (let i = 0; i < bookLibrary.length; i++) {
      if (bookLibrary[i].index === index) {
        bookLibrary.splice(i, 1);
      }
    }
    storagedData();
  });
}

function createNewBookDiv(title, author) {
  // creating html elements
  const listBook = document.createElement('li');
  const bookDiv = document.createElement('div');
  const bookTitle = document.createElement('p');
  const bookAuthor = document.createElement('p');
  const removeButton = document.createElement('button');
  const newBook = {};
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
  removeBookDiv(removeButton, newBook.index);
  bookContainer.appendChild(listBook);
  listBook.appendChild(bookDiv);
  bookDiv.append(bookTitle, bookAuthor, removeButton);
  bookTitle.innerHTML = newBook.title;
  bookAuthor.innerHTML = newBook.author;
}

// submit button function
submitBtn.addEventListener('click', () => {
  createNewBookDiv(title.value, author.value);
  storagedData();
});

const populateData = () => {
  const getBookInfo = JSON.parse(localStorage.getItem('bookInfo'));
  if (getBookInfo) {
    for (let i = 0; i < getBookInfo.length; i++) {
      bookLibrary[i] = getBookInfo[i];
      createNewBookDiv(bookLibrary[i].title, bookLibrary[i].author);
    }
  }
};

populateData();