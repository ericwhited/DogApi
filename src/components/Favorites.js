import React from 'react';
import Dog from './Dog'
import styled from 'styled-components'

const Favorites = ({favorites, removeHandler}) => {
    console.log('favorites');

    return (
        <div>
            <h2>Favorites</h2>
            {favorites && 
                favorites.map((favorite, index) => {
                    return (
                        <Dog
                            index={index}
                            img={favorite} 
                            alt={favorite} 
                            removeHandler={removeHandler} 
                            isFavorite={true} 
                        />
                    )
                })
            }
        </div>
    )
}

export default Favorites