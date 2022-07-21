import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

//api link
//https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={cbba97b5444bbc7799753a7e3e2456b2}

function App() {

  //states
  // const [latitude,setLatitude] = useState('')
  // const [longitude, setLongitude] = useState('')
  // const [weatherData, setWeatherData] = useState()

  // const fetchData = () => {
  //   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=cbba97b5444bbc7799753a7e3e2456b2`
  //   axios.get(url)
  //     .then(response => {
  //       console.log(response.data)
  //       const data = JSON.stringify(response.data)
  //       setWeatherData(data)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }

  const [name,setName] = useState('');

  const fetchData = () => {
    const url = "https://reqres.in/api/users"
    axios.get(url)
      .then((response) => {
        const datax = (response.data)
        setName(datax)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(()=> {
    fetchData()
  },[])

  console.log(name)
  return(
    <>
      {/* {name.map((namex,id)=> {
        return <pre key={id}>{namex[0].first_name}</pre>
      })} */}
      {
        name.map((namex,idx) => {
          return <pre key={idx}>{namex[0].first_name}</pre>
        })
      }
      {/* <div className='container'>
        Longitude:
        <input onChange={(e) => setLongitude(e.target.value)} />
        Latitude:
        <input onChange={(e) => setLatitude(e.target.value)} />
        <button  onClick ={fetchData} type="submit" >Submit</button>
        <div className='JSON'>
          <h1>Raw JSON</h1>
          {weatherData}
        </div>
        <div className='weather-data'>
          
          
        </div>
      </div> */}
    </>
  )
}

export default App;
