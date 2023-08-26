import React from "react";
import logoKeep from './image/logoKeep.png'

const Header = () => {

    return(
        <>
            <div className="header">
                <img src={logoKeep} alt=" logoerror!" width=" 70" height="60"/>
                <h1> Keep App</h1>

            </div>
        </>
    );

}

export default Header;