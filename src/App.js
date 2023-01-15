import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Temp from './components/Temp';
function App() {
  const [data, setData] = useState("");
  const [resp, getResp] = useState("");
  const handleInput = (e)=>{
    setData(e.target.value);
  }
  
  const handleSubmit = async (e)=>{
    e.preventDefault();
  let getdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&units=metric&appid=42d294d52500e75f26cb14ce9af2a1b1`)
  getResp(await getdata.json())
  

 }

  return (
    <div className="App">
     <Form resp={data}  action={handleSubmit } handleInput={handleInput} />
     <Temp resp={resp} />
    </div>
  );
}

export default App;



  //  let getdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=bihar&appid=42d294d52500e75f26cb14ce9af2a1b1`)
  //  let resp = await getdata.json();
  //  console.log(resp.main.temp)