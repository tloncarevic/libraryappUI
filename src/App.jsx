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
    <div class="navigation">

      <Hello></Hello>

      {/* View/Close Button */}
      <button class="button-view-close" onClick={handleViewUsers}>
        {viewUsers ? `Close` : `View`} Users
      </button>
      &nbsp;
      <button class="button-view-close" onClick={handleViewBooks}>
        {viewBooks ? `Close` : `View`} Books
      </button>

      {/* Create/Edit Component */}
      {viewUsers && <Users />}
      {viewBooks && <Books />}
    </div>
  );
}

export default App;
