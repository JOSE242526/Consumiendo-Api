import React from 'react'

const LocationInfo = ({location}) => {


  return (
    <article className='card__location'>
        <h2>{location?.name}</h2>
        <ul>
            <li className='card-location'><span>Type: </span>{location?.type}</li>
            <li className='location'><span>Dimension: </span>{location?.dimension}</li>
            <li className='location'><span>Population: </span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default LocationInfo