import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

//api link
//https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={cbba97b5444bbc7799753a7e3e2456b2}

function App() {

  

  //states
  const [userInfo,setUserInfo] = useState([])
  const [loading, setLoading] = useState(false);
  
  // const fetchData = () => {
  //   return axios.get(url)
  //   .then(({data}) => {
  //     // setUserUnfo(response.data.results[0])
  //     console.log(data.results) 
  //     return data;
  //   })
  //   .catch(error => console.log(error))
  // } 
  // console.log(userInfoJSON)

  // useEffect(() => {
  //   fetchData().then(randomdata => {
  //     setUserInfoJSON(JSON.stringify(randomdata.results))
  //     setUserInfo(randomdata.results)
  //   })
  // },[])

  useEffect(() => {
    const fetchRandomData = async () => {
      setLoading(true)
      const url = 'https://jsonplaceholder.typicode.com/users'
      const response = await axios.get(url)
      setUserInfo(response.data)
      setLoading(false)
    }
    fetchRandomData()
  },[])
  
  console.log(userInfo)

  return(
    <>
      {loading ? (
        <h4>Loading...</h4>) :
        (userInfo.map((item,idx) =>
            // Presently we only fetch 
            // title from the API 
            <h4 key={idx}>{item.name}</h4>)
        )
      }
    </> 
  )
}

export default App;
