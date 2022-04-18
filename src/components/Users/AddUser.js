import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {

    const [enteredUserName, setEnteredUserName] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) { 
            setError({
                title: 'invalid input!',
                message: 'please enter a valid name or age(non- empty values)'
            }
                
            );
            return;
        }
        if (+enteredAge < 1) {
            setError(
                {
                    title: 'invalid age!',
                    message: 'please enter age greater than 0'
                }
            );
            return;
        }
        props.onAddUser(enteredUserName,enteredAge)
        setEnteredUserName('')
        setEnteredAge('')
        
    }
    const userNameCHangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    };

    const ageCHangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };
    const errorHandler = () => { 
        setError(null)
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
<form onSubmit={addUserHandler}>
    <label htmlFor="username">username</label>
    <input id="username" type="text" value={enteredUserName} onChange={userNameCHangeHandler}/>

    <label htmlFor="age">Age (Years)</label>
    <input id="age" type="number" value={enteredAge} onChange={ageCHangeHandler}/>

    <Button type="submit">Add User</Button>
    </form>
            </Card>
            </div>
);
};

export default AddUser;