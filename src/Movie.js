import React from 'react'
import PropTypes from 'prop-types'

const Movie = (props => {
  const { movie: { Title, Year } } = props
  return (
    <div>
      <h3>{Title}</h3>
      <p>{Year}</p>
    </div>
  )
})

Movie.propTypes = {
  movie: PropTypes.shape({
    Year: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
  }).isRequired,
}

export default Movie
