import { functionFloat } from '../../components/header.js'
import { useState } from 'react'

export function FiveDayHumidityDayFour ({ className, text }) {
	const [humidity, setDayFourHumidity] = useState()



	functionFloat.processFiveDayHumidityDayFour = async function processFiveDayHumidityDayFour(data) {
  				setDayFourHumidity(data); 
  
}

	return (
		<div className={ className }><div className="fiveDayOutlookDecriptionWraps
		">Humidity: </div> { humidity }%  </div>
		)
	}




export default FiveDayHumidityDayFour;