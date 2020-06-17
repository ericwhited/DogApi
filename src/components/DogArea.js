import React, { useState } from 'react';
import Dog from '../components/Dog'
import styled from 'styled-components'

const DogArea = ({ breedPhotos, addHandler }) => {
    const Container = styled.div`
        display: inline-flex;
        width: 700px;
        flex-wrap: wrap;
    `

    return (
        <Container style={{border: "2px solid red"}}>
            {breedPhotos && 
                breedPhotos.map(img => {
                    return (
                        <Dog 
                            img={img} 
                            alt={img} 
                            addHandler={addHandler}
                        />
                    )
                })
            }
        </Container>
    )
}

export default DogArea;