import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/style.css'
import Navigation from './components/Navigation'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SteamCallback from './components/SteamCallback'
import MyProfile from './components/MyProfile'
import Friends from './components/Friends'
function App() 
{
  return (  
        <Router>
          <Header />
          <Navigation />
          <div class="content">
            <Routes>
                <Route path="/callback" element={<SteamCallback />} />
                <Route path="/profile" element={<><MyProfile /></>} />
                <Route path="/relationships" element={<Friends />} />
            </Routes>
          </div>
        </Router>
      )
}

export default App
