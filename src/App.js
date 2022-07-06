import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './App.css';

//https://randomuser.me/api

const fetchRandonData = () => {
  return axios.get('https://randomuser.me/api')
    .then(({data}) => {
      // handle success
      console.log(data);
      return JSON.stringify(data,null,2) 
    })
    .catch((err) => {
      // handle error
      console.log(err);
    })
}

function App() {
  // const [resource,setResource] = useState('posts')
  // const [items,setItems] = useState([])

  // useEffect(()=>{
  //   fetch(`https://jsonplaceholder.typicode.com/${resource}`)
  //     .then(response => response.json())
  //     .then(json => setItems(json))
  // },[resource])
  const [data,setdata] = useState('')
  useEffect(()=> {
    fetchRandonData().then((randomdata)=> {
      setdata(randomdata)
    })
  },[])
  return (
    <>
      <div className="App">
        {/* <button onClick={()=> setResource('posts')}>posts</button>
        <button onClick={()=> setResource('comments')}>comments</button>
        <button onClick={()=> setResource('users')}>users</button> */}
        <pre>
          {data}
        </pre>
      </div>
    </>
  );
}

export default App;
