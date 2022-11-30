import React from 'react'
import './Nav.css'
import Requests from './Requests'

function Nav({ setSelectedOption }) {
  return (
    <div className='nav'>
      <h4 onClick={() => setSelectedOption(Requests.fetchTrending)}>Trending</h4>
      <h4 onClick={() => setSelectedOption(Requests.fetchTopRated)}>Top rated</h4>
      <h4 onClick={() => setSelectedOption(Requests.fetchActionMovies)}>Action</h4>
      <h4 onClick={() => setSelectedOption(Requests.fetchHorrorMovies)}>Horror</h4>
      <h4 onClick={() => setSelectedOption(Requests.fetchRomanceMovies)}>Romance</h4>
      <h4 onClick={() => setSelectedOption(Requests.fetchMystery)}>Mystery</h4>
      <h4 onClick={() => setSelectedOption(Requests.fetchSciFi)}>Sci-fi</h4>
      <h4 onClick={() => setSelectedOption(Requests.fetchWestern)}>Western</h4>
      <h4 onClick={() => setSelectedOption(Requests.fetchAnimation)}>Animation</h4>
      <h4 onClick={() => setSelectedOption(Requests.fetchTV)}>TV Movie</h4>
    </div>
  )
}

export default Nav
