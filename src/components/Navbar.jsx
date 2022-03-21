import React from 'react'
const Navbar = ({location, setLocation, searchLocationWeather})=> {
  return (
    <nav className='navbar'>
        <div className='search'>
            <input 
                type="text" 
                value={location}
                placeholder='Search city...'
                onChange={e=> setLocation(e.target.value)}
                onKeyPress={searchLocationWeather}/>
        </div>
    </nav>
  )
}

export default Navbar