import React from 'react';

const Button = ({ addHandler, removeHandler, img, isFavorite, index }) => {
    return (
        // <button>{favorite ? "true" : "false"}</button>
        !isFavorite
            ? <button onClick={() => addHandler(img)}>Add</button>
            : <button onClick={() => removeHandler(index)}>Remove</button>
    )
}

export default Button;