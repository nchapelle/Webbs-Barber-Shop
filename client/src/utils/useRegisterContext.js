import { useState } from "react";

const useUserModel = () => {
  const [firstNameState, setFirstName] = useState("First Name");
  const [lastNameState, setLastName] = useState("Last Name");
  const [emailState, setEmail] = useState("Email");
  const [passwordState, setPassword] = useState("Password");
  const [password2State, setPassword2] = useState("Confirm Password");

  return {
    error: nameState === "" ? "Please enter a name" : "",
    firstName: {
      value: firstNameState,
      onChange: e => setFirstName(e.target.value)
    },
    lastName: {
      value: lastNameState,
      onChange: e => setLastName(e.target.value)
    },
    email: {
      value: emailState,
      onChange: e => setEmail(e.target.value)
    },
    password: {
      value: passwordState,
      onChange: e => setPassword(e.target.value)
    },
    password2: {
        value: password2State,
        onChange: e => setPassword2(e.target.value)
      }  
  };
};

export default useUserModel;
