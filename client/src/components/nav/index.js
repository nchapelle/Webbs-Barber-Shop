import React from "react";

function Nav(){
    return (
        <nav>
            <h1>Webb's Barber Shop</h1>
            <ul>
                <li><a data-page="Home" href="/">Home</a></li>
                <li><a data-page="Appointments" href="/register">Register</a></li>
                <li><a data-page="Contact" href="/login">Login</a></li>
            </ul>
        </nav>   
    );

}

export default Nav