import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './App.css';

//https://randomuser.me/api



function App() {
  const [userdata,setuserData] = useState([]);
  
  const fetchData = () => {
    axios.get('https://api.randomuser.me/')
      .then(response=> setuserData(response.data.results[0].name))
      .then(data => data)
      .catch(error => console.error(error))
  }
  
  useEffect(()=>{
    fetchData()
  },[])
  console.log(userdata)
  
  if (userdata) {
    return (
      <>
        <button>Next user data</button>
        <p>{userdata.title}</p>
        <p>{userdata.first}</p>
        <p>{userdata.last}</p>
        <img />
      </>
    )
  }

  return (
    <>
      <p>No user data</p>
    </>
  );
}

export default App;
