import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Photo from './Photo'
// import PreLoadScreen from './components/PreLoadScreen';

function App() {
  const [data, setData] = useState('');
  // https://api.nasa.gov/planetary/apod?api_key=WnIQ9X2dt6H6A3zTOii6MKCZC40hlHt0R5JpHSXA
  
  useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=WnIQ9X2dt6H6A3zTOii6MKCZC40hlHt0R5JpHSXA`)
      .then(resp => {
        console.log(resp)
        setData(resp.data)  
      })
      .catch(err => {
          console.error('error')
      })
  
  }, []);
  console.log(data)
    
  return (
    <div className="App">
      <h1>{data === '' ? "Hang ON it's loading" : "Nasa's Photo of the Day!"}</h1>
      { data.length > 0 ? data.map(item => (
        <Photo data={item}/>)) : <Photo data={data}/> }
      </div>
  );
}

export default App;
