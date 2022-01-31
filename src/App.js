import React, { useState, Fragment } from 'react';
import AddUser from './components/users/AddUser';
import UsersList from './components/users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => [...prevUsersList, { id: Math.random().toString(), name: userName, age: userAge }]);
  };

  // To avoid div soup problem we can use either <></> as root wrapping element. Or we can use <React.Fragment> element as wrapping element.

  /* return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  ); */

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
