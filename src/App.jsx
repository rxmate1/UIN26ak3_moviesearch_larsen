import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Movie from './pages/Movie'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
  <Routes>
    <Route index element={<Home />} />
    <Route path = ":movie" element={<Movie />} />

  </Routes>
)
}

export default App
