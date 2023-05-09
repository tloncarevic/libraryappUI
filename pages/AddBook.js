import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  addBook,
  updateBook,
  getBookById,
  uploadBookThumbnail,
} from "../features/apiCalls";

const BASE_API_URL = "http://localhost:8080";
const AddBook = () => {
  const { id } = useParams();
  const [defaultValue, setDefaultValue] = useState({
    bookTitle: "",
    bookAuthor: "",
    bookPrice: "",
    availableQuantity: "",
  });
  const [selectedImage, setSelectedImage] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getBook = async () => {
      const { data } = await getBookById(id);
      console.log(data);
      if (data) setDefaultValue({ ...data[0] });
    };
    getBook();
  }, [id]);

  useEffect(() => {
    let url;
    if (selectedImage) {
      url = URL.createObjectURL(selectedImage);
      setPreviewUrl(url);
    }
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [selectedImage]);

  const {
    bookTitle,
    bookAuthor
  } = defaultValue;
  console.log(bookId);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);
    let formData = new FormData(e.target);
    let fileFormData = new FormData();
    let files = e.target[4].files;
    const values = Object.fromEntries(formData.entries());
    const bId = !bookId
      ? values.book_title.toLowerCase().replaceAll(/[\s\t]+/g, "-")
      : bookId;
    fileFormData.append("bookId", bId);
    delete values.bookThumbnail;
    try {
      if (!!selectedImage) {
        fileFormData.append("bookThumbnail", files[0]);
        let { data, error } = await uploadBookThumbnail(fileFormData);
        if (error) throw new Error(error);
        values["bookThumbnail"] = data;
      }
      if (bId && !!bookId) {
        let { data, error } = await updateBook(values, bookId);
        if (error) throw new Error(error);
      } else if (bId) {
        let formValues = {
          bookId: bId,
          ...values,
          bookThumbnail: "test-book.jpg",
        };
        let { data, error } = await addBook(formValues);
        if (error) throw new Error(error);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container max-w-5xl py-10">
      <div className="flex space-x-6 mb-10 items-center">
        <button
          onClick={() => navigate(-1)}
          className="h-10 leading-none text-xl"
        >
          {"<"}
        </button>
        <h2 className="text--title">
          {defaultValue.book_title ? "Update Book" : "Add Book"}
        </h2>
      </div>
      <div className="flex flex-col">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Book Title</label>
            <input
              defaultValue={book_title || ""}
              name="book_title"
              placeholder="Enter Book Title..."
              type="text"
            />
          </div>
          <div className="mb-4">
            <label>Book Description</label>
            <textarea
              defaultValue={bookDescription || ""}
              name="bookDescription"
              className="resize-none"
              rows={5}
            ></textarea>
          </div>
          <div className="mb-4">
            <label>Book Price</label>
            <input
              defaultValue={bookPrice}
              name="bookPrice"
              placeholder="Enter Book Price..."
            />
          </div>
          <div className="mb-4">
            <label>Available Quantity</label>
            <input
              defaultValue={availableQuantity}
              name="availableQuantity"
              placeholder="Enter Available Quantity..."
            />
          </div>
          <div className="mb-10">
            <label>Book Thumnail</label>
            <input
              onChange={(e) => {
                setSelectedImage(e.target.files[0]);
              }}
              accept="image/*"
              name="bookThumbnail"
              type={"file"}
            />
            {(bookThumbnail || previewUrl) && (
              <img
                className="h-48"
                alt="thumbnail"
                src={
                  previewUrl
                    ? previewUrl
                    : `${BASE_API_URL}/uploads/${bookThumbnail}`
                }
              />
            )}
          </div>
          <div className="flex items-center mb-5">
            <button className="w-full">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;