import { functionFloat } from '../../components/header.js'
import { useState } from 'react'

export function FiveDayLowsDayOne ({className, text}) {
	const [temp, setDayOneLow] = useState()



	functionFloat.processFiveDayLowsDayOne = async function processFiveDayLowsDayOne(data) {
  				setDayOneLow(data); 
  
}

	return (
		<div className={ className }> <div className="fiveDayOutlookDecriptionWraps
		">Windspeeds mph </div>{ temp } º F  </div>
		)
	}




export default FiveDayLowsDayOne;