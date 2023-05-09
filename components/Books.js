import React, { useEffect, useState } from "react";
import { getBooks } from "../features/apiCalls";
import { Link } from "react-router-dom";
const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const { data, error } = await getBooks();
      if (error) {
        console.log(error);
      } else {
        setBooks(data);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="container py-10 w-full max-w-5xl">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text--title">Library Books Inventory</h2>
        <Link to="/addBook">
          <button>Add Book</button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 gap-y-6 md:gap-6">
        {books.length > 0 ? (
          books.map((book) => {
            return <Book key={book.bookId} {...book} />;
          })
        ) : (
          <p>No Books Found.</p>
        )}
      </div>
    </div>
  );
};

export default Books;