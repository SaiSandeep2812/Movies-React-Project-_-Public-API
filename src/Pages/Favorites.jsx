import React from 'react'
import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'

const Favorites = () => {

  const {favorites} = useMovieContext();

  if (favorites) {
    return (<div className='favorites'>
      <h2>Your Favorites Movies</h2>
      <div className="movies_grid">
            {favorites.map(movie => ( <MovieCard movie={movie} key={movie.id} /> ))}
        </div></div>)
  }

  return (
    <div className='favorites-empyt'>
        <h2>No Favorite movies yet</h2>
      
    </div>
  )
}

export default Favorites
