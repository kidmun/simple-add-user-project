import react from 'react';

const AddUser = props => {
    const addUserHandler = (event) => {
  event.preventDefault();
    }
return(
<form onSubmit={addUserHandler}>
    <label htmlFor="username">username</label>
    <input id="username" type="text"/>

    <label htmlFor="age">Age (Years)</label>
    <input id="age" type="number"/>

    <button type="submit">Add User</button>
    </form>
);
};

export default AddUser;