import React from 'react'
import '../styles/Error.css'

const Error = ({issue}) => {
  return (
    <div>
      {
          <div className='error-box'>
            Please enter a valid date. <br/>
            The difference should not be more than a week.
          </div>
        
      }
    </div>
  )
}

export default Error