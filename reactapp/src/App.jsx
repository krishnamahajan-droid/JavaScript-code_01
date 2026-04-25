import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { add, subtract } from './utility'
import Sample from './component/Sample'
import HomePage from './component/HomePage'
import Contact from './component/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><HomePage/><Sample count={count} setCount={setCount}/></>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App