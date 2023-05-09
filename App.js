import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { getUsers, getUserById, addUser, updateUsers, addBook, updateBook, getBookById, getBooks } from "./features/apiCalls";
import { PORT, URL } from "./constants";
import { UserEdit } from "./pages/UserEdit";
import { BookEdit } from "./pages/BookEdit";
// import Users from "./components/Users";
// import Books from "./components/Books";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AddUser from "./pages/AddUser";
// import AddBook from "./pages/AddBook";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/addUser" element={<AddUser />} />
//         <Route path="/" element={<Users/>} />
//         <Route path="/updateUser/:id" element={<AddUser />} />

//         <Route path="/addBook" element={<AddBook />} />
//         <Route path="/" element={<Books/>} />
//         <Route path="/updateBook/:id" element={<AddBook />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
function App() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [books, setBooks] = useState([])
  const [book, setBook] = useState({})

  useEffect(()=>{
    // const fetchUsers = async ()=>{
    //   const usersResponse = await fetch(`${URL}:${PORT}/users`);
    //   const response = await usersResponse.json();
    //   setUsers(response);
    // }
    // fetchUsers();
  }, [])
  return <div>
    <h2>Create/Edit User</h2>
    <p>
      <input  defaultValue={user.firstName} placeholder="Enter first name here." name="firstName" type="text" onChange={(event)=>{
      setUser(val=>{
        return {
          ...val,
          firstName: event.target.value
        }
      })
    }}/>
    </p>
     <p><input  defaultValue={user.lastName} placeholder="Enter last name here." name="lastName" type="text" onChange={(event)=>{
      setUser(val=>{
        return {
          ...val,
          lastName: event.target.value
        }
      })
    }}/>
    </p>
     <p><input defaultValue={user.email} placeholder="Enter email here." name="email" type="text" onChange={(event)=>{
      setUser(val=>{
        return {
          ...val,
          email: event.target.value
        }
      })
    }}/>
    </p>
    <button onClick={async ()=>{
      await addUser(user);
    }}>Add User</button>

    <button onClick={async ()=>{
       await updateUsers(user);
    }}>Edit User</button>
    
    <h2>Users:</h2>
    <UserEdit users={users} onEdit={async (id)=>{
         const response = await getUserById(id)
         setUser(response)
    }}/>
    <button onClick={async ()=>{
      const response = await getUsers()
      setUsers(response)
    }}>Refresh Users</button>

    <h2>Create/Edit a Book</h2>
    <p>
      <input  defaultValue={book.bookAuthor} placeholder="Enter author name." name="bookAuthor" type="text" onChange={(event)=>{
      setBook(val=>{
        return {
          ...val,
          bookAuthor: event.target.value
        }
      })
    }}/>
    </p>
     <p><input  defaultValue={book.bookTitle} placeholder="Enter book title here." name="bookTitle" type="text" onChange={(event)=>{
      setBook(val=>{
        return {
          ...val,
          bookTitle: event.target.value
        }
      })
    }}/>
    </p>

    <button onClick={async ()=>{
      await addBook(book);
    }}>Add Book</button>

    <button onClick={async ()=>{
       await updateBook(book);
    }}>Edit Book</button>
    
    <h2>Books:</h2>
    <BookEdit books={books} onEdit={async (id)=>{
         const response = await getBookById(id)
         setBook(response)
    }}/>
    <button onClick={async ()=>{
      const response = await getBooks()
      setBooks(response)
    }}>Refresh Books</button>
  </div>
}

export default App;