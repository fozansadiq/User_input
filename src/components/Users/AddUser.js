import Card from "../UI/Card";
import classes from "../Users/AddUsers.module.css";
import Button from "../UI/Button";
import { useRef, useState } from "react";
import ErrorModel from "../UI/ErrorModal";
const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enterdName = nameInputRef.current.value;
    const enterUserAge = ageInputRef.current.value;
    if (enterdName === 0 || enterUserAge === 0) {
      setError({
        title: "invalid input",
        message: "Please enter valid input "
      });
      return;
    }
    if (+enterUserAge < 1) {
      setError({
        title: "invlaid age",
        message: "Please enter valid age (>0)"
      });
      return;
    }
    // console.log(enteredUserName, enteredAge);
    props.onAddUser(enterdName, enterUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="username">UserName</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age(Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
