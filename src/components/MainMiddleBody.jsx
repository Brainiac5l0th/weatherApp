import React from 'react'

const MainMiddleBody =({data})=> {
  return (
      <>
        <div>
            <div className="importantInfo">
                {data.main && <span className='bold'>{data.main.feels_like.toFixed()}°F</span>}
                <p>Feels Like</p>
            </div>
            <div className="importantInfo">
                {data.wind && <span className='bold'>{data.wind.speed.toFixed()} MPH</span>}
                <p>Wind Speed</p>
            </div>
        </div>
        <div>
            <div className="importantInfo">
                {data.main && <span className='bold'>{data.main.humidity} %</span>}
                <p>Humidity</p>
            </div>
            <div className="importantInfo min-max">
                {data.visibility && <span className='bold'>{data.visibility.toFixed()/1000}km</span>}
                <p>Visibility</p>  
            </div>
        </div>
      </>
  )
}

export default MainMiddleBody