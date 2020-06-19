import React from 'react';

const Button = ({ removeHandler, index }) => {
    return (
        <button onClick={() => removeHandler(index)}>Remove</button>
    )
}
export default Button;
