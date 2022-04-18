import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = (props) => {

    const [enteredUserName, setEnteredUserName] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) { 
            return;
        }
        if (+enteredAge < 1) { 
            return;
        }
        console.log(enteredUserName, enteredAge)
        setEnteredUserName('')
        setEnteredAge('')
        
    }
    const userNameCHangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    };

    const ageCHangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

return(
    <Card className={classes.input}>
<form onSubmit={addUserHandler}>
    <label htmlFor="username">username</label>
    <input id="username" type="text" value={enteredUserName} onChange={userNameCHangeHandler}/>

    <label htmlFor="age">Age (Years)</label>
    <input id="age" type="number" value={enteredAge} onChange={ageCHangeHandler}/>

    <Button type="submit">Add User</Button>
    </form>
    </Card>
);
};

export default AddUser;