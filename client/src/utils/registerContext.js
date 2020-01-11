import React from "react";

const registerContext = React.createContext({
  firstName: {
    value: "",
    onChange: () => {}
  },
  lastName: {
    value: "",
    onChange: () => {}
  },  
  email: {
    value: "",
    onChange: () => {}
  },
  password: {
    value: "",
    onChange: () => {}
  },
  password2: {
    value: "",
    onChange: () => {}
  }
});

export default registerContext;