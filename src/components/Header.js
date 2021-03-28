import React from 'react';
import PropTypes from 'prop-types';
import Button from "./Button";
 



const Header = (props) => {

    const onClick = () => {
        console.log("clickk")
    }
    return (
        <header className="header">
        <h1>{props.title}</h1>
        <Button onClick={onClick}/>
        </header>
    
    )
}


export default Header;
