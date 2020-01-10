import React from "react";

function Nav(){
    return (
        <nav>
            <h1>Webb's Barber Shop</h1>
            <ul>
                <li><a data-page="Home" href="/">Home</a></li>
                <li><a data-page="Appointments" href="/">Appointments</a></li>
                <li><a data-page="Contact" href="/">Contact</a></li>
            </ul>
        </nav>   
    );

}

export default Nav