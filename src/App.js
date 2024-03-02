import React, { useState,useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([])
  console.log(process.env.REACT_APP_API_URL);

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_API_URL}/api/jokes`)
    .then((res)=>{setJokes(res.data)})
    .catch((err)=>{
      console.log(`err ${err}`);
    })

  },[])
console.log("jokes",jokes);
  return (
    <>
    <h1>fdh</h1>
    <p>Jokes : {jokes.length}</p>
    {
      jokes.map((joke, idx) => {
      return  <div key={idx}>
          <h4>{joke.title}</h4>
          <p>{joke.content}</p>
        </div>
      })
    }
  </>
  );
}

export default App;
