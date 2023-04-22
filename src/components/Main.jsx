import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import '../styles/Main.css'

const Main = () => {
  const curUrl = window.location.href;
  const START_DATE = curUrl.substring((curUrl.indexOf('startDate=')+10), (curUrl.indexOf('startDate=')+10)+10); {/* +10 because len of startDate */}
  const END_DATE = curUrl.substring((curUrl.indexOf('endDate=')+8), (curUrl.indexOf('endDate=')+10)+10); { /* +8 for endDate and 10 for the date len itself */}

  // we should store it on backend as this is exposed and anyone can get the access of our api token. But, here doing it on frontend only. ***Not a good practice though***

  const [allData, setAllData] = useState(null)

  useEffect(() => {
    fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${START_DATE}&end_date=${END_DATE}&api_key=${process.env.REACT_APP_API_KEY}`)
    .then((response) => response.json())
    .then(data => {setAllData(data)})
    .catch((err) => console.log(err));
  }, [])
  return (
    <div className='chart-container'>
      <div>
      <p>X axis is date and Y axis is the number of asteroids</p>
      <p>Hover on asteroid to see more data</p>
      {
        allData && <Hero 
        START_DATE={START_DATE} 
        END_DATE={END_DATE}
        allData = {allData}
      />
      }
      </div>
    </div>
  )
}

export default Main