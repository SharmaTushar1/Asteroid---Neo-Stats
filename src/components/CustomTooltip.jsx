import React from 'react'
import AsteroidCard from './AsteroidCard'
import Asteroid from '../images/asteroid.svg'

const CustomTooltip = ({chart, tooltip, allAsteroidData, date}) => {
  const curDataPoint = tooltip.title[0];
  let curDataPointDate;
  for (const date in allAsteroidData) {
    // console.log("Inside looop =>  ", new Date(date).getDate() );
    if (new Date(date).getDate() == curDataPoint) {
      curDataPointDate = date;
    }
  }
  return (
    <div className='tooltip'>
      {/* {console.log("Chart => ", allAsteroidData)} */}
      <div className="asteroid-card-container">
        <AsteroidCard 
          img = {Asteroid}
          allAsteroidList = {allAsteroidData[curDataPointDate]}
          tooltip = {tooltip}
        />
      </div>
    </div>
  )
}

export default CustomTooltip