// getting html elements
const bookContainer = document.querySelector('.book-list__container');
const title = document.querySelector('#book-title');
const author = document.querySelector('#book-author');
const submitBtn = document.querySelector('#book-submit');
const bookLibrary = [];

// PROJECT 2 // PROJECT 2// PROJECT 2// PROJECT 2// PROJECT 2
// PROJECT 2 // PROJECT 2// PROJECT 2// PROJECT 2// PROJECT 2
// PROJECT 2 // PROJECT 2// PROJECT 2// PROJECT 2// PROJECT 2
class Book {
  constructor (title, author, index) {
    this.title = title;
    this.author = author;
    this.index = index;
  }
}

class Library {
  constructor (books = []) {
    this.books = books;
  }

  add(book) {
    this.books.push(book);
  }

  remove(index) {
    this.books.splice(this.getBook(index), 1);
  }

  getBook(index) {
    for (let i = 0; i < this.books.length; i ++) {
      if (this.books[i].index === index) {
        return i;
      }
    }
    return -1;
  }
}
const library = new Library();
// PROJECT 2 // PROJECT 2// PROJECT 2// PROJECT 2// PROJECT 2
// PROJECT 2 // PROJECT 2// PROJECT 2// PROJECT 2// PROJECT 2
// PROJECT 2 // PROJECT 2// PROJECT 2// PROJECT 2// PROJECT 2

const storagedData = () => {
  localStorage.setItem('bookInfo', JSON.stringify(library.books));
};

function removeBookDiv(button, index) {
  button.addEventListener('click', () => {
    const div = document.getElementById(`book${index}`);
    bookContainer.removeChild(div);
    library.remove(index);
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
  // creating new book
  const newBook = new Book(title, author, Date.now());
  library.add(newBook);
  // settings html elements
  listBook.setAttribute('id', `book${newBook.index}`);
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
      library.books[i] = getBookInfo[i];
      createNewBookDiv(library.books[i].title, library.books[i].author);
    }
  }
};
populateData();