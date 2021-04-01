import React from 'react';
import PropTypes from 'prop-types';
import Button from "./Button";
 



const Header = (props) => {
    const{title,onAdd,showAddForm} = props;

    return (
        <header className="header">
        <h1>{title}</h1>
        <Button 
        onClick={onAdd}
        text={showAddForm ? 'close' : 'Add'}
        color={showAddForm ? 'red' : 'green'}
         />
        </header>
    
    )
}


export default Header;


