import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  addUser,
  updateUser,
  getUserById,
} from "../features/apiCalls";

const BASE_API_URL = "http://localhost:8080";
const AddUser = () => {
  const { id } = useParams();
  const [defaultValue, setDefaultValue] = useState({
    first_name: "",
    last_name: "",
    email: "",
    book_id: "",
  });
  const [selectedImage, setSelectedImage] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await getUserById(id);
      console.log(data);
      if (data) setDefaultValue({ ...data[0] });
    };
    getUser();
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
    first_name,
    last_name,
    email,
    book_id,
    user_id,
  } = defaultValue;
  console.log(userId);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);
    let formData = new FormData(e.target);
    let fileFormData = new FormData();
    let files = e.target[4].files;
    const values = Object.fromEntries(formData.entries());
    const uId = !userId
      ? values.first_name.toLowerCase().replaceAll(/[\s\t]+/g, "-")
      : userId;
    fileFormData.append("userId", uId);
    delete values.userThumbnail;
    try {
      if (uId && !!userId) {
        let { data, error } = await updateUser(values, userId);
        if (error) throw new Error(error);
      } else if (uId) {
        let formValues = {
          userId: uId,
          ...values
        };
        let { data, error } = await addUser(formValues);
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
          {defaultValue.first_name ? "Update User" : "Add User"}
        </h2>
      </div>
      <div className="flex flex-col">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>User Title</label>
            <input
              defaultValue={first_name || ""}
              name="first_name"
              placeholder="Enter User Title..."
              type="text"
            />
          </div>
          <div className="mb-4">
            <label>User Description</label>
            <textarea
              defaultValue={last_name || ""}
              name="last_name"
              className="resize-none"
              rows={5}
            ></textarea>
          </div>
          <div className="mb-4">
            <label>User Price</label>
            <input
              defaultValue={userPrice}
              name="userPrice"
              placeholder="Enter User Price..."
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
          <div className="flex items-center mb-5">
            <button className="w-full">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;