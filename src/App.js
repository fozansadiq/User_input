import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userLists, setUserLists] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserLists((preUserList) => [
      ...preUserList,
      { name: uName, age: uAge, id: Math.random().toString() }
    ]);
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userLists} />
    </div>
  );
}

export default App;
