import React,{useState} from 'react'
import Card from '../UI/Card';
import Button from '../UI/Button';
import "./AddUser.css"

const AddUser = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [eneteredAge, setEnteredAge]=useState("");

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredName.trim().length===0 || eneteredAge.trim().length===0){
            return;
        }
        if(eneteredAge < 0){
            return;
        }
       props.onAddUser(enteredName, eneteredAge);
        setEnteredName("");
        setEnteredAge("");
        }
    const usernameChangeHandler = (event) =>{
        setEnteredName(event.target.value);
    }
    const ageChangeHandler = (event) =>{
        setEnteredAge(event.target.value);
    }
   
  return (
    <Card className="input">
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">UserName</label>
            <input type="text" id="username" onChange={usernameChangeHandler} value={enteredName}/>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" onChange={ageChangeHandler} value={eneteredAge} />
            <Button type="submit">Add User</Button>
        </form>
  </Card>
  )
}

export default AddUser
