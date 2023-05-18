import { useState } from "react";
import {
  addBook,
  getBooks,
  updateBook,
  getBookById,
} from "../features/apiCalls";
import BooksView from "./../components/BooksView";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState({});

  const handleBookEdit = async (id) => {
    const response = await getBookById(id);
    setBook(response);
  };

  const onChangeBookTitle = (event) => {
    setBook((previousBookValue) => {
      return {
        ...previousBookValue,
        bookTitle: event.target.value,
      };
    });
  };

  const handleChangeBookAuthor = (event) => {
    setBook((previousBookValue) => {
      return {
        ...previousBookValue,
        bookAuthor: event.target.value,
      };
    });
  };

  const handleChangeQuantity = (event) => {
    setBook((previousBookValue) => {
      return {
        ...previousBookValue,
        quantity: Number(event.target.value),
      };
    });
  };

  return (
    <div class="container">
      <h2>Create/Edit a Book</h2>
      <p>
        <input
          defaultValue={book.bookAuthor}
          placeholder="Enter author name."
          name="bookAuthor"
          type="text"
          onChange={handleChangeBookAuthor}
        />
      </p>
      <p>
        <input
          defaultValue={book.bookTitle}
          placeholder="Enter book title here."
          name="bookTitle"
          type="text"
          onChange={onChangeBookTitle}
        />
      </p>
      <p>
        <input
          defaultValue={book.quantity}
          placeholder="Enter book quantity here."
          name="quantity"
          type="number"
          onChange={handleChangeQuantity}
        />
      </p>
      <button
        onClick={async () => {
          await addBook(book);
        }}
      >
        Add Book
      </button>
      &nbsp;
      <button
        onClick={async () => {
          console.log(book);
          await updateBook(book);
        }}
      >
        Edit Book
      </button>
      <h2>Books:</h2>
      {books && <BooksView books={books} onEdit={handleBookEdit} />}
      <button
        onClick={async () => {
          const response = await getBooks();
          console.log(response);
          setBooks(response);
        }}
      >
        Refresh Books
      </button>
    </div>
  );
}