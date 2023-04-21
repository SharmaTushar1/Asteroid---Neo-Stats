import React, { useState, useEffect } from 'react';
import './../styles/Home.css';
import { Link, useNavigate } from "react-router-dom";
import Error from './Error';

const Home = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isError, setIsError] = useState(false)
  const navigate = useNavigate();
  const isValidInput = (start, end) => {
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return !((new Date(start) > new Date(end)) || (diffDays>7) || isNaN(Date.parse(end)) || isNaN(Date.parse(start)));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidInput(startDate, endDate)) {
      navigate({
        pathname: `/main`,
        search: `startDate=${startDate}+endDate=${endDate}`
      })
    };
  }

  const handleChange = (e) => { 
    setStartDate(e.target.value);
  }

  useEffect(() => {
    !isValidInput(startDate, endDate) ? setIsError((true)) : setIsError(false);
    console.log("isError => ",isError);
  }, [startDate, endDate])

  return (
    <div className='home'>
      <div className='date'>
        <form action="">
          <div className='form-container'>
            <div className='form-container-child'>
              <label htmlFor="startDate">Start Date</label>
              <input type="date" name="startDate" id="startDate" className='dates' value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
            </div>
            <div className='form-container-child'>
              <label htmlFor="endDate">End Date</label>
              <input type="date" name="endDate" id="endDate" className='dates' value={endDate} onChange = {(e) => setEndDate(e.target.value)}/>
            </div>
          </div>
          <button type="submit" onClick={handleSubmit} >Submit</button>
        </form>
      </div>
      {isError && (
        <Error />
      )}
    </div>
  )
}

export default Home