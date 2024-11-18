import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/style.css'
import Navigation from './Navigation'
import Header from './Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './Profile'

function App() 
{
  return ( 
      <div>
        <Header />
        <Profile />
        <Navigation />
      </div>
      )
}

export default App
