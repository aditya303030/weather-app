import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import './App.css';

//api link
//https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={cbba97b5444bbc7799753a7e3e2456b2}

function App() {

  //states
  const [user,setUser] = useState('')

  const url = "https://randomuser.me/api"
  const fetchData = () => {
    axios.get(url)
    .then(res => console.log(res.data.results[0]))
    .then(res => setUser(JSON.stringify(res.data.results[0])))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchData()
  },[])


  return(
    <>
      {user}
    </> 
  )
}

export default App;
