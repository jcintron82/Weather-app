import { functionFloat } from '../../components/header.js'
import { useState } from 'react'

export function FiveDayHumidityDayOne({ className, text }) {
	const [dayOneHumidity, setDayOneHumidity] = useState()



	functionFloat.processFiveDayHumidity = async function processFiveDayHumidity( day1 ) {
  setDayOneHumidity(day1); 
  
}

	return (
		<div className={ className }><div className="fiveDayOutlookDecriptionWraps
		">Humidity: </div> { dayOneHumidity }%  </div>
		)
	}




export default FiveDayHumidityDayOne;