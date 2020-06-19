import React, {useEffect, useState} from 'react';
import Search from './components/Search'
import DogArea from './components/DogArea'
import Favorites from './components/Favorites'
// import Dog from './components/Dog'

function App() {
  const [dogBreeds, updateDogBreeds] = useState([])

  useEffect(() => {
    fetch(
      `https://dog.ceo/api/breeds/list/all`,
      {
        method: "GET",
      }
    )
      .then(res => res.json())
      .then(response => {
        updateDogBreeds(Object.keys(response.message))
        console.log(response)
      })
      .catch(error => console.log(error));
  }, []);

  const [selectValue, updateSelectValue] = useState('')
  const [favorites, updateFavorites] = useState([
  ])


  const handleSelectChange = (e) => {
    updateSelectValue(e)
    fetch(
      `https://dog.ceo/api/breed/${e}/images`,
      {
        method: "GET"
      }
    )
    .then(res => res.json())
    .then(res => updateFavorites( [...favorites, {[e]: res.message[0]}] ))
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
        dogBreeds={dogBreeds}
        selectValue={selectValue}
        handleSelectChange={handleSelectChange} 
        updateSelectValue={updateSelectValue}
      />
      <Favorites favorites={favorites} removeHandler={removeHandler} />
    </div>
  );
}

export default App;
