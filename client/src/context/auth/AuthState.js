import React, {useReducer} from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";

import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL } from "../types";
//LOADED USER, AUTH_ERROR, CLEAR_ERROR

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem("token"),
        isAuthenticated: null,
        loading: true, 
        user: null, 
        error: null
    };
    const [state, dispatch] = useReducer(authReducer, initialState);
    
    const register = async formData => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        try {
            const res = await axios.post("/api/users/register", formData, config);

            dispatch({
                type: REGISTER_SUCCESS, 
                payload: res.data
            });
                        
        } catch (err){
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg
            });
        }

    };

    const login = async formData => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        try {
            const res = await axios.post("/api/users/login", formData, config);
        
            dispatch({
                type: LOGIN_SUCCESS, 
                payload: res.data
            });

        } catch (err){
            dispatch({
                type: LOGIN_FAIL,
                payload: err.response.data.msg
            })
        }
    };

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                register,
                login
            }}
        >
            {props.children}
        </AuthContext.Provider>
            
    )

};

export default AuthState;


