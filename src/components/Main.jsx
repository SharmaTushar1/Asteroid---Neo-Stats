import React, { useEffect } from 'react';
import Chart from './Chart';

const Main = () => {
  const curUrl = window.location.href;
  const START_DATE = curUrl.substring((curUrl.indexOf('startDate=')+10), (curUrl.indexOf('startDate=')+10)+10); {/* +10 because len of startDate */}
  const END_DATE = curUrl.substring((curUrl.indexOf('endDate=')+8), (curUrl.indexOf('endDate=')+10)+10); { /* +8 for endDate and 10 for the date len itself */}

  // we should store it on backend as this is exposed and anyone can get the access of our api token. But, here doing it on frontend only. ***Not a good practice though***

  useEffect(() => {
    fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${START_DATE}&end_date=${END_DATE}&api_key=${process.env.REACT_APP_API_KEY}`)
    .then((response) => response.json())
    .then(data => console.log(data))
    .catch((err) => console.log(err));
  }, [])
  return (
    <div className=''>
      <Chart 
        START_DATE={START_DATE} 
        END_DATE={END_DATE}
      />
    </div>
  )
}

export default Main