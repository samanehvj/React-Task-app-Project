import React from 'react'
import PropTypes from 'prop-types';



const Button = ({color,onClick}) => {
   
    return (
        <button 
        onClick={onClick} 
        style={{backgroundColor:color}}
         className="btn"> ADD
         
         </button>
    );

};

Button.defaultProps = {
    color: 'yellow',
};

Button.propTypes = {
    color: PropTypes.string,
};



export default Button
