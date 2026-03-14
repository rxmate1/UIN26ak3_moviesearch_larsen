import { Routes, Route } from 'react-router-dom'
import Movie from './pages/Movie'
import Home from './pages/Home'

function App() {

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path=":movie" element={<Movie />} />
    </Routes>
  )
}

export default App