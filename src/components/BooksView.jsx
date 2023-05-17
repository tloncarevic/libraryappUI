import { deleteBook } from "../features/apiCalls"

export default function BooksView ({books, onEdit }) {
    return (
    <div>
        {books.map(book=> (
            <div key={book.id}>
                <p>
                    {book.id}: {book.bookAuthor} - "{book.bookTitle}" ({book.quantity})
                    &nbsp;
                    <button onClick={()=>{
                        onEdit(book.id)
                    }}>Edit</button>
                    &nbsp;
                    <button onClick={()=>{
                        deleteBook(book.id);
                    }}>Delete</button>
                </p>
            </div>
        ))}
    </div>
    )
}