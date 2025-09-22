import React,{useState} from 'react'
import Card from '../UI/Card';
import Button from '../UI/Button';
// import ErrorModal from '../UI/ErrorModal';
import "./AddUser.css"
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [eneteredAge, setEnteredAge]=useState("");
    const [error, setError] = useState();
    

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredName.trim().length===0 || eneteredAge.trim().length===0){
           setError({title:"Invalid Input", message:"Please enter valid username and age(non-empty values)"})
           return;
        }
        if(eneteredAge < 0){
            setError({title:"Invalid Input", message:"Please enter a valid age(>0)"})
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
    const errorHandler = () =>{
        setError(null);
    }
   
   
  return (
    <div>
       {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className="input">
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">UserName</label>
                <input type="text" id="username" onChange={usernameChangeHandler} value={enteredName}/>
                <label htmlFor="age">Age</label>
                <input type="number" id="age" onChange={ageChangeHandler} value={eneteredAge} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    </div>
  )
}

export default AddUser
