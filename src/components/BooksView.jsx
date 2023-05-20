import { deleteBook } from "../features/apiCalls"

export default function BooksView ({books, onEdit }) {
    return (
    <div>
        {books.map(book=> (
            <div key={book.book_id}>
                <p>
                    {book.book_id}: {book.bookAuthor} - "{book.bookTitle}" ({book.quantity})
                    &nbsp;
                    <button onClick={()=>{
                        onEdit(book.book_id)
                    }}>Edit</button>
                    &nbsp;
                    <button onClick={()=>{
                        deleteBook(book.book_id);
                    }}>Delete</button>
                </p>
            </div>
        ))}
    </div>
    )
}