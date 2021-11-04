import React, { useState, useEffect } from "react";
import axios from 'axios'

import "./App.css";

function App() {
  const [ photo, setPhoto ] = useState();
  // Get the information from the web and pass them down to the children components.

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod`)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.error(err)
    })
  }, [])

  return (
    <div className="App">
      <h1>Nasa Photo(s) of the Day </h1>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
