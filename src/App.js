import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Photo from './Photo'
// import PreLoadScreen from './components/PreLoadScreen';

function App() {
  const [data, setData] = useState('');
  
  useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=WnIQ9X2dt6H6A3zTOii6MKCZC40hlHt0R5JpHSXA
      `)
      .then(resp => {
        setData(resp.data)  
      })
      .catch(err => {
          console.error('error')
      })
  
  }, []);
  return (
    <div className="App">
      <h1>Nasa's Photo of the Day!</h1>
      <Photo data={data}/>
      </div>
  );
}

export default App;
