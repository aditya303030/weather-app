import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './App.css';

//https://randomuser.me/api

const fetchRandonData = () => {
  return axios.get('https://randomuser.me/api')
    .then(({data}) => {
      // handle success
      console.log(data);
      return data; 
    })
    .catch((err) => {
      // handle error
      console.log(err);
    })
}

const getUserInfo = (userInfo) => {
  // return userInfo.
  // const userName =
  const {name:{first,last}} = userInfo;
  return `${first} ${last}` 
}

function App() {

  const [data,setdata] = useState('')
  const [userInfos,setUserInfos] = useState([])

  useEffect(()=> {
    fetchRandonData().then((randomdata)=> {
      setdata(JSON.stringify(randomdata,null,2))
      setUserInfos(randomdata.results)
    })
  },[])
  console.log(userInfos)
  return (
    <>
      <div className="App">
        <pre>
          {data}
        </pre>
        {/* {
          userInfos.map((userInfo,id)=> {
            return <pre key={id}>{getUserInfo(userInfo)}</pre>
          })
        } */}
      </div>
    </>
  );
}

export default App;
