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

const Dog = ({ breed, img, alt, index, removeHandler }) => {
    return (
        <StlyedDog>
            <p>{breed}</p>
            <DogImg 
                src={img} 
                alt={alt} 
            />
            <Button 
                removeHandler={removeHandler} 
                img={img} 
                index={index} 
            />
        </StlyedDog>
    )
}

export default Dog;

