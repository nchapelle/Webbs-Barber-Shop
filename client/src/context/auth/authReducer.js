import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL } from "../types";

export default (state, action) => {
  switch ((action.type)) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
        localStorage.setItem("token", action.payload.token);
        return {
            //spread state 
            ...state, 
            ...action.payload,
            isAuthenticated: true,
            loading: false, 
            user: action.payload
        };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
        //add login fail / auth error / logout type
        localStorage.removeItem("token")
        return {
            ...state, 
            token: null, 
            isAuthenticated: false, 
            loading: false, 
            user: null, 
        };
    default:
      return state;
  }
};
