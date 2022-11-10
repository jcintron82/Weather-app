import { functionFloat } from '../../components/header.js';
import { useState } from 'react';

export function FiveDayHumidityDayTwo ({className, text}) {
	const [humidity, setDayTwoHumidity] = useState()



	functionFloat.processFiveDayHumidityDayTwo = async function processFiveDayHumidityDayTwo(data) {
  				setDayTwoHumidity(data); 
  
}

	return (
		<div className={ className }> <div className="fiveDayOutlookDecriptionWraps
		">Humidity: </div>{ humidity }% </div>
		)
	}




export default FiveDayHumidityDayTwo;