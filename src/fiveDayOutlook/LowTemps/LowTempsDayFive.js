import { functionFloat } from '../../components/header.js'
import { useState } from 'react'

export function FiveDayLowsDayFive({className}) {
	const [temp, setDayFiveLow] = useState()



	functionFloat.processFiveDayLowsDayFive= async function processFiveDayLowsDayFive(data) {
  				setDayFiveLow(data); 
  
}

	return (
		<div className={ className }><div className="fiveDayOutlookDecriptionWraps
		">Windspeeds mph </div> { temp } º F  </div>
		)
	}




export default FiveDayLowsDayFive;