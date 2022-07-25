import axios from 'axios';
import React, { useState } from 'react';
import './App.css';

//api link
//https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={cbba97b5444bbc7799753a7e3e2456b2}

function App() {
  //states
  const [userInfo,setUserInfo] = useState([])
  const [loading, setLoading] = useState(false);
  

  //https://randomuser.me/api

  const fetchRandomData = async () => {
    setLoading(true)
    const url = 'https://randomuser.me/api'
    const response = await axios.get(url)
    setUserInfo(response.data.results)
    setLoading(false)
  }
  // fetchRandomData()
  

  return(
    <>
      <button onClick={fetchRandomData}>Fetch Random Data</button>
      {loading ? (
        <h4>Loading...</h4>) :
        (userInfo.map((item,idx) =>
            <h4 key={idx}>{item.name.first}</h4>)
        )
      }
      {
        (userInfo.map((item,idx) =>
            <img key={idx} src={item.picture.large} alt="No user image found"></img>)
        )
      }
    </> 
  )
}

export default App;
