import React,{useEffect,useState} from 'react';
import './App.css';

//https://randomuser.me/api



function App() {
  const [userdata,setuserData] = useState([]);
  
  const fetchData = () => {
    fetch('https://api.randomuser.me/')
      .then(response => response.json())
      .then(data => setuserData(data.results))
      .catch(error=>console.log(error))
  }
  // const getUserInfo = () =>{

  // }
  console.log(userdata)
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>
    <div>
      {/* {
        data.map((entry,idx)=>{
          return <pre key={idx}>{entry}</pre>
        })
      } */}
    </div>
    </>
  );
}

export default App;
