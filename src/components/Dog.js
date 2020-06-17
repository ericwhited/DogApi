import React from 'react';
import styled, { css } from 'styled-components'
import Button from './Button'

const StlyedDog = styled.div`
    border: 2px solid black;   
    display: inline-flex;
    text-align: center;
    flex-direction: column;
    flex: 1;
`

const DogImg = styled.img`
    height: 50px;
    margin: 5px;
    padding: 3px;

    ${props => props.selected && css`
        border: 4px solid blue
    `}
`

const Dog = ({ img, alt, index, addHandler, removeHandler, isFavorite }) => {
    return (
        <StlyedDog>
            <DogImg 
                src={img} 
                alt={alt} 
                // selected={selected}
            />
            <Button 
                addHandler={addHandler} 
                removeHandler={removeHandler} 
                img={img} 
                isFavorite={isFavorite}
                index={index} 
            />
        </StlyedDog>
    )
}

export default Dog;

