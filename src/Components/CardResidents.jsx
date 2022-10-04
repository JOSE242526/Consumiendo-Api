import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Style/CardResidents.css'


const CardResidents = ({url}) => {

    const [residents, setResidents] = useState()

useEffect(() => {
  axios.get(url)
    .then(res => setResidents(res.data))
    .catch(err => console.log(err))
}, [])


  return (
    <article className='card'>
        <header className='card__header'>
            <img className='card__img' src={residents?.image} alt="" />
            <div className='card__container-status'>
                <div className={'card__circle-status ${residents?.status}'}> </div>
                <span className='card__status'>{residents?.status}</span>
            </div>
        </header>
    <section className='card__body'>
        <h3 className='card__name' >{residents?.name}</h3>
        <ul className='card__list'>
            <li className='card__item'><span className='card__span'>Specie: </span>{residents?.species}</li>
            <li className='card__item'><span className='card__span'>Origin: </span>{residents?.origin.name}</li>
            <li className='card__item'><span className='card__span'>Episodes where appear: </span>{residents?.episode.length}</li>
        </ul>
    </section>
    </article>
  )
}

export default CardResidents