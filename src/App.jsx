import './App.css'
import Favorites from './Pages/Favorites';
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import { MovieProvider } from './contexts/MovieContext';

function App() {

  return (
    <MovieProvider>
    <div>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </div>
    </MovieProvider>
  )
}

export default App;
