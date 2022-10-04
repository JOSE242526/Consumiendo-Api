import { useEffect, useState } from 'react'
import './App.css'
import LocationInfo from './Components/LocationInfo'
import axios from "axios"
import CardResidents from './Components/CardResidents'
import getRandomNumber from './Utils/getRandomNumber'
import FilterList from './Components/FilterList'

function App() {

  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState("")
  const [suggedList, setSuggedList] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    let id = getRandomNumber()
    if(searchInput) {
      id = searchInput
    }

    const URL = `https://rickandmortyapi.com/api/location/${id}`
    

    axios.get(URL)
    .then(res => {
      setHasError(false)
      setLocation(res.data)
    })
    .catch(err => setHasError(true))
  }, [searchInput])


  const handleSubmit = e => {
    e.preventDefault()
    setSearchInput(e.target.idLocation.value)
  }

  const handleChange = event => {

    if(event.target.value === "") {
     setSuggedList()
    } else {

      const URL = `https://rickandmortyapi.com/api/location?name=${event.target.value}`

    axios.get(URL)
      .then(res => setSuggedList(res.data.results))
      .catch(err => console.log(err))
    }

    }

    console.log(suggedList)
  return (
    <div className="App">
      <header className='card__header-App'>
      <h1>Rick And Morty</h1>
      </header>
      <form className='card__form' onSubmit={handleSubmit}>
        <input 
        id="idLocation"
        placeholder='Enter another number from 1 to 126' 
        type="text"
        onChange={handleChange} 
        />
        <button className='btn__card'>Search</button>
       <FilterList 
       suggedList={suggedList}
       setSearchInput={setSearchInput}
       /> 
      </form>

      {
        hasError ? 
        <Error />
        :
        <>
        </>
      }

      <LocationInfo location={location}/>
      <div className='card__container'>
      {
        location?.residents.map(url => (
          <CardResidents
          key={url} 
          url={url}/>
        ))
      }
      </div>
    </div>
  )
}


export default App
