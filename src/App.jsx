import React from 'react'
import './App.css'
import Button from './components/Button/Button'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'

const App = () => {
  const handleClick = () => alert('Button clicked');

  return (
    <div className='App'>
      <Navbar />
      <Home />
    </div>
  )
}

export default App
