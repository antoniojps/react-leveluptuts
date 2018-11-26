import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Movie extends Component {

  static propTypes = {
    movie: PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Year: PropTypes.string.isRequired,
    }),
  }

  render() {
    const { Title, Year } = this.props.movie
    return (
      <div>
        <h3>{Title}</h3>
        <p>{Year}</p>
      </div>
    )
  }
}