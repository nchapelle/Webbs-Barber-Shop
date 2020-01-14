import React from "react";

function Nav(){
    return (
        <nav>
            <h1><a data-page="Home" href="/">Webb's Barber Shop</a></h1>
            <ul>
                <li><a data-page="Calendar" href="/calendar">Calendar</a></li>
                <li><a data-page="Appointments" href="/register">Register</a></li>
                <li><a data-page="Contact" href="/login">Login</a></li>
            </ul>
        </nav>   
    );

}

export default Nav