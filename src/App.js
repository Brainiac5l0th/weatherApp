import axios from 'axios';
import React, { useState } from 'react';
import Mainbody from './components/Mainbody';
import Navbar from './components/Navbar';
const App = () => {
    const [location, setLocation] =useState('');
    const [data, setData] = useState('')
    const [airData, setAirData] = useState({});
    
    const searchLocationWeather = ((e)=>{
        if(e.key === 'Enter'){
            axios.all([
                axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=a65f08ba8a9bc8b828f80046adbfacc0`),
                axios.get(`https://api.waqi.info/feed/${location}/?token=6765a22f76ee358d0134b2dfb1e01c41db38c583`)
                ])
                .then(axios.spread(function (weatherResponse, aqiResponse) {
                        setData(weatherResponse.data);
                        setAirData(aqiResponse.data);
                        console.log(weatherResponse.data,aqiResponse.data)
                    }));
            setLocation('');
        }
    })
  return (
    <>
        <div className='mainBody'>
            <Navbar location={location} setLocation={setLocation} searchLocationWeather={searchLocationWeather}/>
            <Mainbody data={data} airData= {airData} />
        </div>
    </>
  )
}

export default App