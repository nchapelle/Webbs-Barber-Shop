const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
  //convert empty fields into "" in order to validate
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  //Name Checks
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First Name is required.";
  }
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last Name is required.";
  }
  // Email Checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required.";
  }
  //Pasword Checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Password is required";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 21 })) {
    errors.password = "Password must contain at least 6 characters.";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match. ";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
