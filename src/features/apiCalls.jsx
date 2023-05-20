import axios from "axios";
import { URL, PORT } from "./constants";


// USERS ----------------------------------------------------------------

export const getUsers = async () => {
    try {
      const res = await axios.get(URL+ ":"+ PORT + "/users");
      return res.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
  
  export const addUser = async (user) => {
    try {
      const res = await axios.post(URL+ ":"+ PORT + "/users", user);
      return res.data;
    } catch (err) {
      console.log(err);
      return { error: err };
    }
  };
  
  export const updateUsers = async (user) => {
    try {
      const res = await axios.put(
        URL+ ":"+ PORT + "/users/" + user.user_id,
        user
      );
      return res.data;
    } catch (err) {
      return {
        error: err,
      };
    }
  };
  export const deleteUser = async (userId) => {
    try {
      const res = await axios.delete(
        URL+ ":"+ PORT + "/users/" + userId
      );
      return res.data;
    } catch (err) {
      return { error: err };
    }
  };
  export const getUserById = async (id) => {
    try {
      const res = await axios.get(URL+ ":"+ PORT + "/users/" + id);
      return res.data
    } catch (err) {
      return {error: err.message}
    }
  };
  

// BOOKS ----------------------------------------------------------------

export const getBooks = async () => {
  try {
    const res = await axios.get(URL+ ":"+ PORT + "/books");
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const addBook = async (book) => {
  try {
    const res = await axios.post(URL+ ":"+ PORT + "/books", book);
    return res.data;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};

export const updateBook = async (book) => {
  try {
    const res = await axios.put(
      URL+ ":"+ PORT + "/books/" + book.book_id,
      book
    );
    return res.data;
  } catch (err) {
    return {
      error: err,
    };
  }
};
export const deleteBook = async (bookId) => {
  try {
    const res = await axios.delete(
      URL+ ":"+ PORT + "/books/" + bookId
    );
    return res.data;
  } catch (err) {
    return { error: err };
  }
};
export const getBookById = async (id) => {
  try {
    const res = await axios.get(URL+ ":"+ PORT + "/books/" + id);
    return res.data
  } catch (err) {
    return {error: err.message}
  }
};


export const uploadBookThumbnail = async (formData) => {
  try {
    const res = await axios.post(
      URL+ ":"+ PORT + "/thumbnailUpload/",
      formData
    );
    return res.data
      
  } catch (err) {
    console.log(err);
    return {error: err.message};
  }
};

// BORROW ----------------------------------------------------------------