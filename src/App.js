import React, {useEffect, useState} from 'react';
import Search from './components/Search'
import DogArea from './components/DogArea'
import Favorites from './components/Favorites'
// import Dog from './components/Dog'

function App() {

  useEffect(() => {
    fetch(
      `https://dog.ceo/api/breeds/list/all`,
      {
        method: "GET",
      }
    )
      .then(res => res.json())
      .then(response => {
        console.log(response)
      })
      .catch(error => console.log(error));
  }, []);

  const [inputValue, updateInputValue] = useState('')
  const [breedPhotos, updateBreedPhotos] = useState([])
  const [favorites, updateFavorites] = useState([])


  const handleInputChange = (e) => {
      updateInputValue(e.target.value)
  }

  const searchHandler = (e) => {
      e.preventDefault()
      console.log(inputValue)
      fetch(
      `https://dog.ceo/api/breed/${inputValue}/images`,
      {
          method: "GET",
      }
      )
      .then(res => res.json())
      .then(response => {
          updateBreedPhotos(response.message)
          console.log(response)

      })
      .catch(error => console.log(error));
  }

  const addHandler = (img) => {
    updateFavorites([...favorites, img])
}

  const removeHandler = (img) => {
    const newFavorites = [...favorites]
    newFavorites.splice(img, 1)
    updateFavorites(newFavorites)
  }

  return (
    <div className="App" style={{padding: "2rem 4rem"}}>
      <p>Hey</p>
      <Search
        inputValue={inputValue} 
        handleInputChange={handleInputChange} 
        searchHandler={searchHandler}
      />
      <DogArea breedPhotos={breedPhotos} addHandler={addHandler} />
      <Favorites favorites={favorites} removeHandler={removeHandler} />
    </div>
  );
}

export default App;
