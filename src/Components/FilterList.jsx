import React from 'react'

const FilterList = ({suggedList, setSearchInput}) => {

    const handleOnclick = id => setSearchInput(id)

    
  return (
    <ul>
        {
            suggedList?.map(location => (
                <li onClick={() => handleOnclick(location.id)} key={location.id}>{location.name}</li>
            ))
        }
    </ul>
  )
}

export default FilterList