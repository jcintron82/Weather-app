import { functionFloat } from '../../components/header.js'
import { useState } from 'react'

export function FiveDayLowsDayFour({className}) {
	const [temp, setDayFourLow] = useState()



	functionFloat.processFiveDayLowsDayFour= async function processFiveDayLowsDayFour(data) {
  				setDayFourLow(data); 
  
}

	return (
		<div className={ className }><div className="fiveDayOutlookDecriptionWraps
		">Windspeeds mph </div> { temp } º F  </div>
		)
	}




export default FiveDayLowsDayFour;