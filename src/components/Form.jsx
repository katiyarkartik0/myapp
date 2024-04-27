import { useState } from "react";

const Form = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //   console.log({username,password})
  const setUserData = props.setUserData;
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setUserData({ username: username, password: password });
        }}
      >
        <h1>My Form</h1>
        username:
        <input
          onChange={(event) => setUsername(event.target.value)}
          type="text"
        ></input>
        <br></br>
        password
        <input
          onChange={(event) => setPassword(event.target.value)}
          type="password"
        ></input>
        <br></br>
        <button type="submit">Submit</button>
        <br></br>
      </form>
    </>
  );
};

export default Form;
