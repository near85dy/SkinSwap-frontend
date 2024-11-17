import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'
import Navigation from './Navigation'
import Header from './Header'

function App() 
{
  return ( 
      <div>
        <Header />
        <Navigation />
      </div>
      )
}

export default App
