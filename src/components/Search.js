import React, {useState} from 'react';

const Search = ({ handleInputChange, searchHandler, inputValue }) => {
        return (
        <div style={{marginBottom: "100px"}}>
        <label style={{display: "block"}} for="search-dogs">Search Dogs</label>
            <input id="search-dogs" value={inputValue} onChange={e => handleInputChange(e)} type="text" />
            <button onClick={e => searchHandler(e)}>Search</button>
        </div>
    )
}

export default Search;