import React from 'react'

const Data = () => {
  return (
    <div>
      {
        !data ?
          <h1 className='loading'>Loading...</h1>
        :
          <div className='parent'>
            <h1 className='heading'>COVID-19: India</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <List stateData={filter} />
          </div>
      }
    </div>
  )
}

export default Data
