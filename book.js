class Book {
  constructor(title, author, number) {
    this.title = title;
    this.author = author;
    this.number = number;
  }
}

const booksData = [
  { title: 'Book 1', author: 'Author A', number: '1234567890' },
  { title: 'Book 2', author: 'Author B', number: '2345678901' },
  { title: 'Book 3', author: 'Author C', number: '3456789012' },
];

const books = booksData.map(bookData => new Book(bookData.title, bookData.author, bookData.number));

const userSortingInput = prompt('Enter the sorting criteria (e.g., "number ASC" or "title Desc"):');
const [field, order] = userSortingInput.split(' ');

if (['title', 'author', 'number'].includes(field) && ['Asc', 'Desc'].includes(order)) {
  books.sort((book1, book2) => {
    if (field === 'number') {
      return order === 'Asc' ? book1.number.localeCompare(book2.number) : book2.number.localeCompare(book1.number);
    } else if (field === 'title') {
      return order === 'Asc' ? book1.title.localeCompare(book2.title) : book2.title.localeCompare(book1.title);
    } else {
      return order === 'ASC' ? book1.author.localeCompare(book2.author) : book2.author.localeCompare(book1.author);
    }
  });

  console.log('Sorted Books:');
  books.forEach(book => {
    console.log(`Title: ${book.title}, Author: ${book.author}, number: ${book.number}`);
  });
} else {
  console.log('Invalid sorting criteria. Please enter a valid field (title, author, number) and order (Asc, Desc).');
}
