import React from "react";
import Card from "../ui/Card";
import classes from "./AddUser.module.css"
import Button from "../ui/Button";
import { useState, Fragment, useRef } from "react";
import ErrorModal from "../ui/ErrorModal";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();


    //const [enteredUsername, setEnteredUsername] = useState('');
    //const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({ title: 'Invalid Input', message: 'Please enter valid non empty values.' });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({ title: 'Invalid Age', message: 'Please enter age > 0.' });
            return;
        }

        props.onAddUser(enteredName, enteredUserAge);
        // setEnteredUsername('');
        // setEnteredAge('');
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    const errorHandler = () => {
        setError(null);
    }

    // const userNameChangeHandler = event => {
    //     setEnteredUsername(event.target.value);
    // };

    // const ageChangeHandler = event => {
    //     setEnteredAge(event.target.value);
    // };

    return (
        <Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text"
                        ref={nameInputRef} />

                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number"
                        ref={ageInputRef} />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Fragment>
    );
};

export default AddUser