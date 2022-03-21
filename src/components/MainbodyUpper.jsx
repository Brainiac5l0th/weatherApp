import React from 'react'

const MainbodyUpper=({data})=> {
  return (
    <>
    <div>
        {data.weather && <h3 className='weaDescrip'>{data.weather[0].description}</h3>}
        {data.main && (<h1 className='temp'>{data.main.temp.toFixed()}°F</h1>)}
    </div>
    <div>
        {data.name &&data.sys.country && <h1 className='cityName'>{data.name}, {data.sys.country}</h1>}
    </div>
    </>
  )
}

export default MainbodyUpper