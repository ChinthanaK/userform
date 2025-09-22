import { useState } from "react";
import AddUser from "./components/users/AddUser";
import UserList from "./components/users/UserList";
function App() {
  const [usersList, setUsersList] = useState([]);

  const onAddUserHandler = (uName, uAge) =>{
    setUsersList((prevUsers) =>{
      return [
        ...prevUsers,
        {id:Math.random(), name:uName, age:uAge }
      ]
    })
  }
  return (
    <div>
      <AddUser onAddUser={onAddUserHandler}/>
      <UserList users={usersList}/>
    </div>
  );
}

export default App;
