import React from "react";
import Card from "../ui/Card";
import classes from "./AddUser.module.css"
import Button from "../ui/Button";
import { useState, Fragment } from "react";
import ErrorModal from "../ui/ErrorModal";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({title: 'Invalid Input', message: 'Please enter valid non empty values.'});
            return;
        }
        if (+enteredAge < 1) {
            setError({title: 'Invalid Age', message: 'Please enter age > 0.'});
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');        
    };

    const errorHandler = () => {
        setError(null);
    }

    const userNameChangeHandler = event => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value);
    };
    
    return (
        <Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" onChange={userNameChangeHandler} value={enteredUsername} />

                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge} />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Fragment>
    );
};

export default AddUser