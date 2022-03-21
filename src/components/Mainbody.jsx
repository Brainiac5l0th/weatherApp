import React from 'react'
import MainbodyLower from './MainbodyLower'
import MainbodyUpper from './MainbodyUpper'
import MainMiddleBody from './MainMiddleBody'

const Mainbody = ({data, airData})=> {
  return (
    <main className='bodySection'>
    {data? (
        <>
            <div className='body-upper'>
                <MainbodyUpper data={data} />
            </div>
            <div className='body-middle'>
                <MainMiddleBody data={data} />
            </div>
            <div className="body-lower">
                <MainbodyLower airData={airData} />
            </div>
        </>
    ):(
        <h1 className='empty'> Name a City in the SearchBox for weather information.</h1>
    )}
    </main>
  )
}

export default Mainbody