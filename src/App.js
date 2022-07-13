import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './App.css';

//api link
//https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={cbba97b5444bbc7799753a7e3e2456b2}

function App() {

  //states

  const [weatherJSON,setweatherJSON] = useState('')

  const fetchAPIdata = () => {
    // const url =  `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=cbba97b5444bbc7799753a7e3e2456b2`
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=cbba97b5444bbc7799753a7e3e2456b2'
    axios.get(url)
      .then((res) => {
        console.log(res.data)
        setweatherJSON(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  useEffect(()=>{
    fetchAPIdata()
  },[])

  return(
    <>
      <div className='container'>
        {/* <h1>Name: </h1>{weatherJSON.name}
        <h1>Weather: </h1>
        <h1>Wind: </h1>
        <h2>Deg: </h2> {weatherJSON.wind.deg} */}
        
        <h1>Name: </h1> {weatherJSON.name}
        <h1>Wind: </h1>
        <h2>Deg: </h2> {weatherJSON.wind.deg} 

        {/* <input onChange={(event)=> setlatitude(event.target.value)} placeholder='Enter latitude'></input>
        <input onChange={(event)=> setlongitude(event.target.value)} placeholder='Enter longitude'></input>
        <button onClick={handleSubmit} type='submit'>Submit</button> */}
      </div>
    </>
  )
}

export default App;
