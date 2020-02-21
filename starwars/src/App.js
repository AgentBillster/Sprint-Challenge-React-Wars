import React, { useState, useEffect } from "react";
import axios from "axios"
import './App.css';
import Card from "./components/card"

const App = () => {
  const [Characters, setCharacters] = useState ([])

  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
    .then(response => {
      console.log(response.data.results)
      setCharacters(response.data.results)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      
        {Characters.map(character => {
          return <div>
            <Card 
          name = {character.name}
          height = {character.height}
          mass = {character.mass}
          hairColor = {character.hair_color}
          skinColor = {character.skin_color}
          eyeColor = {character.eye_color}
          birth = {character.birth_year}
          />
          </div>
        })}

      
    </div>
  );
}

export default App;
