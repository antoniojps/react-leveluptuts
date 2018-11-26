import React, { Component } from 'react'
import Movie from './Movie'
import './App.css'

class App extends Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    try {
      const res = await fetch('http://www.omdbapi.com/?s=Batman&page=1&apikey=7b858b1c')
      const { Search: movies } = await res.json()
      this.setState({ movies })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { movies } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1>App</h1>
        </header>
        <div className="spacing">
          {movies.map(movie => <Movie movie={movie} key={movie.imdbID} />)}
        </div>
      </div>
    );
  }
}

export default App
