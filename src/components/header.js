import {arr} from "../api/api"
import {useState} from 'react'
import { createContext, useContext } from "react";
export { float }

const float = {};


// async function FetchAPI(location) {

//   try {

//   let result = await fetch ('http://api.openweathermap.org/data/2.5/weather?q=' + location +'&APPID=bd3dd8d1151b1e784fcf021aa29927c5',
//    {mode: 'cors'});

//   let final = await result.json()

//   return  console.log(float)

//   }
//   catch(err) {
//     alert(err)
//   }
// }
//  async function processData(data) {
//  console.log(float)


  
// }



 export function Header({tempValue, locationValue, onChange}) {



float.function = async function FetchAPI(location) {

let formattedLoc = location.replaceAll(/%20/g, " ");

  try {

  let result = await fetch ('http://api.openweathermap.org/data/2.5/weather?q='  + location.replace(' ', ",") +'&APPID=bd3dd8d1151b1e784fcf021aa29927c5&units=imperial',
   {mode: 'cors'});

  let final = await result.json()

  return processData(final)

  }
  catch(err) {
    alert(err)
  }
}
 async function processData(data) {
let dayname = new Date(data.dt * 1000).toLocaleDateString('en', { dateStyle: 'long'});

let unix_timestamp = data.dt
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var date = new Date(unix_timestamp * 1000);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes =  date.getMinutes();
// Seconds part from the timestamp
var seconds = date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = dayname + ' ' + hours + ':' + minutes ;


  setLocation(data.name)
  setTemp(data.main.temp)
  setTime(formattedTime)
  setWindspeed(data.wind.speed)
  console.log(data)

  
}
  const [locationDOM, setLocation] = useState(1)
  const [tempDOM, setTemp] = useState(1)
  const [timeDOM, setTime] = useState(1)
  const [windDOM, setWindspeed] = useState(1)


  return (
    <header className="header">
    <div>
   <h1> Temperature: {tempDOM} F</h1>
   <h2> {locationDOM} </h2>
   </div>
   <div>
    <h1> {timeDOM} </h1>
    <h2> Windspeed {windDOM} mph</h2>
    </div>
    </header>

  );

}




export default Header;