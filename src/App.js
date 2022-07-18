import axios from 'axios';
import React, { useState } from 'react';
import './App.css';

//api link
//https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={cbba97b5444bbc7799753a7e3e2456b2}

function App() {

  //states
  const [latitude,setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [weatherData, setWeatherData] = useState([])

  const fetchData = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=cbba97b5444bbc7799753a7e3e2456b2`
    axios.get(url)
      .then(response => {
        console.log(response.data)
        const weatherJSON = JSON.stringify(response.data)
        console.log(weatherJSON)
        setWeatherData(weatherJSON)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return(
    <>
      <div className='container'>
        Longitude:
        <input onChange={(e) => setLongitude(e.target.value)} />
        Latitude:
        <input onChange={(e) => setLatitude(e.target.value)} />
        <button  onClick ={fetchData} type="submit" >Submit</button>
        {weatherData.name}
        <div className='weather-data'>
          <div className='name'>
            {/* {weatherData} */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
