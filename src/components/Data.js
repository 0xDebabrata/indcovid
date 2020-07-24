import React, { useEffect, useState } from 'react';
import List from './List';
import SearchBox from './SearchBox';

const Data = () => {

  const [data, setData] = useState([])
  const [searchfield, setSearchfield] = useState('')

  useEffect(() => {
    fetch('https://api.covid19india.org/data.json')
      .then(response => response.json())
      .then(data => setData(data['statewise']))
  })

  const onSearchChange = (e) => {
    setSearchfield(e.target.value)
  }

  const filter = data.filter(state => {
    return state.state.toLowerCase().includes(searchfield.toLowerCase());
  })

  return (
    <div>
      {
        !data ?
          <h1 className='loading'>Loading...</h1>
        :
          <div className='parent'>
            <h1 className='heading'>COVID-19: India</h1>
            <SearchBox searchChange={onSearchChange}/>
            <List stateData={filter} />
          </div>
      }
    </div>
  )
}

export default Data
