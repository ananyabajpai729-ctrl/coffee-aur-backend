import { useState } from 'react'
import {useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const[aesthetics, setAesthetics] = useState([])

  useEffect(() =>{
    axios.get('/api/aesthetics')
    .then((response) =>{
      setAesthetics(response.data);
    })
    .catch((error) => {
      console.log(error)
    })
  })

  return (
    <>
      <h1>
        Coffee aur Fullstack
      </h1>
      <p>
          Aesthetics: {aesthetics.length}
      </p>

      {
          aesthetics.map((aesthetic, index) =>(
              <div key = {aesthetic.id}>
                <h3>{aesthetic.title}</h3>
                <h3>{aesthetic.content}</h3>
              </div>
          ))
      }
    </>
  )
}

export default App
