import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './App.css';

//api link
// https://hub.dummyapis.com/employee?noofrecords=10&idStarts=1001

function App() {

  //states
  const [randomJSONdata,setrandomJSONdata] = useState([])

  const fetchData = () => {
    const url = 'https://hub.dummyapis.com/employee?noofrecords=10&idStarts=1001'
    axios.get(url)
      .then((res) => {
        setrandomJSONdata(res.data)
        console.log(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  useEffect(() => {
    fetchData()
  },[])

  return(
    <>
      <div>
        {randomJSONdata.map((datax,idx) => {
          return <p key={idx}>{datax.firstName}</p>
          // <img src={datax.imageurl} />
        })}
        {randomJSONdata.map((datax,idx) => {
          // return <p key={idx}>{datax.firstName}</p>
          return <img key={idx} src={datax.imageUrl} alt="no pic found"/>
        })}
      </div>
    </>
  )
}

export default App;
