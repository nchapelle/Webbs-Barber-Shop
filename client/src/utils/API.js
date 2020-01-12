import axios from "axios";

export default {
    registerUser: function(data){
        return axios.post("/register", data)
    },

    loginUser: function(data){
        return axios.post("/login", data)
    }
}
