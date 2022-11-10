import { functionFloat } from '../../components/header.js'
import { useState } from 'react';

let weatherForecast = '';


export function DayTwoDescription({className}) {
	const [desc, setDesc] = useState()



	functionFloat.processDayTwoDescription= async function processDayTwoDescription(data) {
				const sunnyDayIcon =  <img src= 'http://openweathermap.org/img/w/01d.png' alt='a sunny day'></img>
  				const cloudyDayIcon =  <img src= 'http://openweathermap.org/img/w/04d.png' alt='a cloudy day'></img>
  				const rainyDayIcon = <img src= 'http://openweathermap.org/img/w/10d.png' alt='a rainy day'></img>
  				const thunderstormIcon = <img src= 'http://openweathermap.org/img/w/11d.png' alt='a thunderstorm'></img>
  				const snowyDayIcon = <img src= 'http://openweathermap.org/img/w/13d.png' alt='a snowy day'></img>
  				const mistyDayIcon = <img src= 'http://openweathermap.org/img/w/50d.png' alt='a misty day'></img>

  				if (data === 'Clouds') {
 					 return setDesc(cloudyDayIcon),
 					 weatherForecast = data;

				}else if (data === 'Clear') {
 					 return setDesc(sunnyDayIcon),
 					 weatherForecast = data;

				}else if (data === 'Rain' || 'Drizzle') {
  					 return setDesc(rainyDayIcon),
 					 weatherForecast = data;

				}else if (data === 'Snow') {
  					 return setDesc(snowyDayIcon),
 					 weatherForecast = data;

				}else if (data === 'Thunderstorm') {
  					 return setDesc(thunderstormIcon),
 					 weatherForecast = data;
				}
				else {
					return setDesc(mistyDayIcon),
 					 weatherForecast = data;
				}

				return weatherForecast = data;
	}

	return (
		<div className={ className }> <div className="fiveDayOutlookDecriptionWraps
		">Forecast: </div><div className='weatherForecast'>{weatherForecast}{ desc }</div> </div>
		)
	}


export default DayTwoDescription;