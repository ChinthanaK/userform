import React from 'react'
import Card from '../UI/Card';
import Button from '../UI/Button';
import "./AddUser.css"

const AddUser = () => {
    const addUserHandler = (event) => {
        event.preventDefault();
    }
  return (
    <Card className="input">
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">UserName</label>
            <input type="text" id="username" />
            <label htmlFor="age">Age</label>
            <input type="number" id="age" />
            <Button type="submit">Add User</Button>
        </form>
  </Card>
  )
}

export default AddUser
