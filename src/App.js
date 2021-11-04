import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Photo from './Photo';
import styled from 'styled-components';

const StyledApp = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledH1 = styled.h1`
  color: #444444;
  padding: 10px;
  border-bottom: 2px solid black;
  margin: auto;

`

function App() {
  const [data, setData] = useState('');
  
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
    
  return (
    <StyledApp>
      <StyledH1>{data === '' ? "Hang ON it's loading" : "Astronomy Photo of the Day"}</StyledH1>
      <p>(Nerds only)</p>
      { data.length > 0 ? data.map(item => (
        <Photo data={item}/>)) : <Photo data={data}/> }
      </StyledApp>
  );
}

export default App;
