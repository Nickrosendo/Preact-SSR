import React from 'react';

export default (props) => {
  const restaurants = props.restaurants.map(rest => {
    return (
      <li key={rest._id}>
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