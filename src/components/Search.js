import React from 'react';

const Search = ({ handleSelectChange, selectValue, dogBreeds }) => {
        console.log(dogBreeds);
        console.log('dogBreeds');
        return (
        <div style={{marginBottom: "100px"}}>
            <label style={{display: "block"}} for="dog-breeds">Search Dogs</label>
            <select
                value={selectValue}
                onChange={(event) => handleSelectChange(event.target.value)} 
                name="Dog Breeds" 
                id="dog-breeds"
            >
                    {dogBreeds && 
                        dogBreeds.map(dog => <option value={dog}>{dog}</option>)
                    }
            </select>
        </div>
    )
}

export default Search;