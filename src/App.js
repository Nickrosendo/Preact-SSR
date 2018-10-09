import React from 'react';

export default (props) => {
  const restaurants = props.restaurants.map(rest => {
    return (
      <li key={rest._id}>
        <h1>Titulo</h1>
        {rest.name}
      </li>
    )
  })

  return (
    <ul>
      {restaurants}
    </ul>
  )
}