import { functionFloat } from '../../components/header.js'
import { useState } from 'react';

let weatherForecast = '';


export function DayOneDescription({className}) {
	const [desc, setDayOneDesc] = useState()



	functionFloat.processDayOneDescription= async function processDayOneDescription(data) {
				const sunnyDayIcon =  <img src= 'http://openweathermap.org/img/w/01d.png'></img>
  				const cloudyDayIcon =  <img src= 'http://openweathermap.org/img/w/04d.png'></img>
  				const rainyDayIcon = <img src= 'http://openweathermap.org/img/w/10d.png'></img>
  				const thunderstormIcon = <img src= 'http://openweathermap.org/img/w/11d.png'></img>
  				const snowyDayIcon = <img src= 'http://openweathermap.org/img/w/13d.png'></img>
  				const mistyDayIcon = <img src= 'http://openweathermap.org/img/w/50d.png'></img>

  				if (data == 'Clouds') {
 					 return setDayOneDesc(cloudyDayIcon),
 					 weatherForecast = data;

				}else if (data == 'Clear') {
 					 return setDayOneDesc(sunnyDayIcon),
 					 weatherForecast = data;

				}else if (data == 'Rain' || 'Drizzle') {
  					 return setDayOneDesc(rainyDayIcon),
 					 weatherForecast = data;

				}else if (data == 'Snow') {
  					 return setDayOneDesc(snowyDayIcon),
 					 weatherForecast = data;

				}else if (data == 'Thunderstorm') {
  					 return setDayOneDesc(thunderstormIcon),
 					 weatherForecast = data;
				}
				else {
					return setDayOneDesc(mistyDayIcon),
 					 weatherForecast = data;
				}

				return weatherForecast = data;
	}

	return (
		<div className={ className }> <div className="fiveDayOutlookDecriptionWraps
		">Forecast: </div><div className='weatherForecast'>{weatherForecast}{ desc }</div> </div>
		)
	}


export default DayOneDescription;