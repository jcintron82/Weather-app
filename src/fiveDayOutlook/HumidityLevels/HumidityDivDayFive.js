import { functionFloat } from '../../components/header.js'
import { useState } from 'react'

export function FiveDayHumidityDayFive ({ className, text }) {
	const [humidity, setDayFiveHumidity] = useState()



	functionFloat.processFiveDayHumidityDayFive = async function processFiveDayHumidityDayFive(data) {
  				setDayFiveHumidity(data); 
  
}

	return (
		<div className={ className }><div className="fiveDayOutlookDecriptionWraps
		">Humidity: </div>{ humidity }%  </div>
		)
	}




export default FiveDayHumidityDayFive;