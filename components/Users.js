import React, { useEffect, useState } from "react";
import { getUsers } from "../features/apiCalls";
import { Link } from "react-router-dom";
const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await getUsers();
      if (error) {
        console.log(error);
      } else {
        setUsers(data);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="container py-10 w-full max-w-5xl">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text--title">Library Users List</h2>
        <Link to="/addUser">
          <button>Add User</button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 gap-y-6 md:gap-6">
        {users.length > 0 ? (
          users.map((user) => {
            return <User key={user.userId} {...user} />;
          })
        ) : (
          <p>No Users Found.</p>
        )}
      </div>
    </div>
  );
};

export default Users;