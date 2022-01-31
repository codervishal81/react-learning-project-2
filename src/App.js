import React, {useState} from 'react';
import AddUser from './components/users/AddUser';
import UsersList from './components/users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => [...prevUsersList, {id: Math.random().toString(),name: userName, age: userAge}]);
  };

  return (
    <div>
      <div>
        <AddUser onAddUser={addUserHandler}/>
      </div>
      <div>
        <UsersList users={usersList}/>
      </div>
    </div>
  );
}

export default App;
