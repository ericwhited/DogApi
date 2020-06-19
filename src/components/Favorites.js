import React from 'react';
import Dog from './Dog'

const Favorites = ({favorites, removeHandler}) => {
    console.log('favorites');

    return (
        <div>
            <h2>Favorites</h2>
            {favorites && 
                favorites.map( (favorite, index) => {
                    return (
                        <Dog
                            key={index}
                            index={index}
                            img={Object.values(favorite)} 
                            breed={Object.keys(favorite)} 
                            removeHandler={removeHandler}
                        />
                    )
                })
            }
        </div>
    )
}

export default Favorites