import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


function App() {

  // state = {
  //   display: false,
  //   toyData: []
  // }

  //This hook is equal to above state
  const [display, setDisplay] = useState(false)

  //How to set up a hook to replace state and setState
  const [toyData, setToyData] = useState([])

  useEffect(() => {
    let URL = 'http://localhost:3000/toys'
    fetch(URL)
    .then(resp => resp.json())
    .then(data => setToyData(data))
  }, [])

  const addNewToy = (name, image) => {
    console.log(name, image)
    // build your Data object
    const newToy = {
      name: name,
      image: image,
      likes: 0,
    }
    // build config object and pass Data object
    const configObj = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newToy)
    }
    
      let URL = 'http://localhost:3000/toys'
      fetch(URL, configObj)
      .then(resp => resp.json())
      .then(data => setToyData(prevState => [...prevState, data ]))
  }



  const handleClick = () => {
    let newBoolean = !display
    setDisplay(newBoolean)
  }

  
    return (
      <>
        <Header/>
        {display
            ?
          <ToyForm addToy={addNewToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toyData={toyData} />
      </>
    );
}

export default App;
