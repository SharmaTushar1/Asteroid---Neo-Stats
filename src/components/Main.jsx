import React from 'react'

const Main = () => {
  const curUrl = window.location.href;
  const startDate = curUrl.substring((curUrl.indexOf('startDate=')+10), (curUrl.indexOf('startDate=')+10)+10); {/* +10 because len of startDate */}
  const endDate = curUrl.substring((curUrl.indexOf('endDate=')+8), (curUrl.indexOf('endDate=')+10)+10); { /* +8 for endDate and 10 for the date len itself */}
  return (
    <div className=''>
      {startDate}
      <br />
      {endDate}
    </div>
  )
}

export default Main