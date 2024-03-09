// firebase deployment url=https://weatherapp-b1869.web.app/


import React,{useState} from 'react'
import './App.css'
const App = () => {
  const[city,setCity]=useState("")
  const[result,setResult]=useState("")

   const onChangeHandler=(e)=>{
    setCity(e.target.value);
   }
   const onsubmitHandler =(e)=>{
    e.preventDefault();
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
    response=>response.json()
   ).then(data =>{
    const kelvin=data.main.temp
    const celsius=kelvin-273.15
   setResult("Temperature at "+city +" "+ "is"+"\n"+Math.round(celsius)+"°C")
   setCity("");
   }).catch(error=>console.log(error));
   }
  return (
    <div className='bg'>
       <div className='main'> 
          <div className='in'>
           <h3>Weather App</h3>
            <form onSubmit={onsubmitHandler}>
             <input type='text' name="city" value={city} onChange={onChangeHandler}/> <br/> <br/>
             <input type='submit' name="Get Temperature" placeholder="submit"/>
            </form>  <br/>
              <b>{result}</b>
          </div>
       </div>
    
    </div>
  )
}

export default App
