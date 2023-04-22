import React from 'react'
import "../styles/AsteroidCard.css"

const AsteroidCard = ({img, allAsteroidList, tooltip}) => {

  const asteroidVelocity = [];
  const asteroidDistance = [];

  for (const date in allAsteroidList) {
    asteroidDistance.push({name: allAsteroidList[date].name , distance: allAsteroidList[date].close_approach_data[0].miss_distance['kilometers']});
    asteroidVelocity.push({name: allAsteroidList[date].name, velocity: allAsteroidList[date].close_approach_data[0].relative_velocity['kilometers_per_hour']})
  }

  // get Max speed and displacement
  let maxVelocity = asteroidVelocity[0].velocity;
  let fastestAsteroidIndex = 0;
  let closestAsteroidIndex = 0;
  let closestDistance = asteroidVelocity[0].distance;

  for (let i = 1; i<asteroidVelocity.length; i++) {
    // maxVelocity = Math.max(maxVelocity, Math.abs(asteroidVelocity[i].name));
    fastestAsteroidIndex = Math.abs(asteroidVelocity[i].name)>Math.abs(maxVelocity)?i:fastestAsteroidIndex;
    closestAsteroidIndex = Math.abs(asteroidDistance[i].name)>Math.abs(closestDistance)?i:closestAsteroidIndex
  }


  console.log("distance array => ", asteroidDistance);
  console.log("speed array => ", asteroidVelocity);



  return (
    <div className='allAsteroids'>
      <div>On {tooltip.title[0]}</div>
      <div className="asteroid-card-container">
        {allAsteroidList.map((asteroid) => (
          <div className='asteroid-card'>
            {console.log(asteroid)}
            <img src={img} alt="" />
            <div>
              <div>Name: {asteroid.name}</div>
              {console.log(asteroid.estimated_diameter.kilometers)}
              <div>Diameter: {(asteroid.estimated_diameter.kilometers.estimated_diameter_min + asteroid.estimated_diameter.kilometers.estimated_diameter_max)/2} km</div>
            </div>
          </div>
        ))}
      </div>
      
      <div>
        ClosestAsteroid: <div>{asteroidDistance[closestAsteroidIndex].name}</div>
        Fastest Asteroid: <div>{asteroidVelocity[fastestAsteroidIndex].name}</div>
      </div>
    </div>
  )
}

export default AsteroidCard