import React from 'react'
const MainbodyLower=({airData})=> {
    const Airqualitydetails = (aqi) =>{
        if(aqi>=0 && aqi<=50){
            return {
                name:'Good',
                color:'Green',
                details:'Air quality is satisfactory, and air pollution poses little or no risk.'
            }
        }
        else if(aqi>=51 && aqi<=100){
            return{
                name:'Moderate',
                color:'Yellow',
                details:'Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution.'
            }
        }
        else if(aqi>=101 && aqi<=150){
            return{
            name:'Unhealthy for Sensitive Groups	',
            color:'Orange',
            details:'Members of sensitive groups may experience health effects. The general public is less likely to be affected.'
            }
        }
        else if(aqi>=151 && aqi<=200){
            return{	
            name:'Unhealthy',
            color:'Red',
            details:'Some members of the general public may experience health effects. Members of sensitive groups may experience more serious health effects.'
            }
        }
        else if(aqi>=201 && aqi<=300){
            return{
            name:'Very Unhealthy',
            color:'Purple',
            details:'Health alert: The risk of health effects is increased for everyone.'
            }
        }
        else{
            return{
            name:'Hazardous',
            color:'Maroon',
            details:'Health warning of emergency conditions: everyone is more likely to be affected.'
            }
        }
        
    }
  return (
    <>
        {airData.status==='ok' ?( 
            <div>
                <div>
                    <h3>{Airqualitydetails(airData.data.aqi).name} </h3>
                    {airData.data && <span>[AQI = {airData.data.aqi}]</span>}
                </div>
                <p>{Airqualitydetails(airData.data.aqi).details}</p> 
            </div> 
            ) : (
            <h1 className='empty'>there is no AQI(Airquality) details in the database.</h1>
        )}
    </>
  )
}

export default MainbodyLower