import "./App.css";
import { useState } from "react";

import Hello from "./components/Hello";
import Users from "./pages/Users";
import Books from "./pages/Books";

function App() {
  const [viewUsers, setViewUsers] = useState(false);
  const [viewBooks, setViewBooks] = useState(false);

  /**
   * Handler to view/hide Component
   */
  const handleViewUsers = () => {
    setViewUsers((value) => !value);
  };

  const handleViewBooks = () => {
    setViewBooks((value) => !value);
  };

  return (
    <div>
      <Hello></Hello>
      {/* Users Button */}
      <button onClick={handleViewUsers}>
        {viewUsers ? `Close` : `View`} Users
      </button>
      {/* Users Component */}
      {viewUsers && <Users />}
      &nbsp;
      {/* Books Button */}
      <button onClick={handleViewBooks}>
        {viewBooks ? `Close` : `View`} Books
      </button>
      {/* Books Component */}
      {viewBooks && <Books />}
    </div>
  );
}

export default App;
