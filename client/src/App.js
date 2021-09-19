import React, { useEffect, useState } from 'react';
import './App.css';
import CardItem from './components/CardItem';
import fakeData from './data/fakeData';


function App() {
  const [data, setData] = useState({});
  useEffect(()=>{
    setData(fakeData);
  }, [])

  //console.log("data", data);
  return (
    <div className="App">
      <CardItem data={data}/>
    </div>
  );
}

export default App;
