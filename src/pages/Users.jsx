import { useState } from "react";
import {
  addUser,
  getUsers,
  updateUsers,
  getUserById,
} from "../features/apiCalls";
import UsersView from "./../components/UsersView";

export default function Users() {
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState({});

  const handleEdit = async (id) => {
    const responseUser = await getUserById(id);
    setUser(responseUser);
  };
  const handleChangeFirstName = (event) => {
    setUser((previousUserValue) => {
      return {
        ...previousUserValue,
        firstName: event.target.value,
      };
    });
  };
  /**
   * Handles change of last name
   * @param {Event} event
   */
  const handleChangeLastName = (event) => {
    setUser((previousUserValue) => {
      return {
        ...previousUserValue,
        lastName: event.target.value,
      };
    });
  };
  const handleChangeEmail = (event) => {
    setUser((previousUserValue) => {
      return {
        ...previousUserValue,
        email: event.target.value,
      };
    });
  };
  return (
    <div class="container">
      <h2>Create/Edit User</h2>
      <p>
        <input
          defaultValue={user.firstName}
          placeholder="Enter first name here."
          name="firstName"
          type="text"
          onChange={handleChangeFirstName}
        />
      </p>
      <p>
        <input
          defaultValue={user.lastName}
          placeholder="Enter last name here."
          name="lastName"
          type="text"
          onChange={handleChangeLastName}
        />
      </p>
      <p>
        <input
          defaultValue={user.email}
          placeholder="Enter email here."
          name="email"
          type="text"
          onChange={handleChangeEmail}
        />
      </p>
      <button
        onClick={async () => {
          await addUser(user);
        }}
      >
        Add User
      </button>
      &nbsp;
      <button
        onClick={async () => {
          await updateUsers({ ...user });
        }}
      >
        Edit User
      </button>

      <h2>Users:</h2>
      <UsersView allUsers={allUsers} onEdit={handleEdit} />
      <button
        onClick={async () => {
          const response = await getUsers();
          console.log(response);
          setAllUsers(response);
        }}
      >
        Refresh Users
      </button>
    </div>
  );
}