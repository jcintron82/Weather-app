import { functionFloat } from '../../components/header.js'
import { useState } from 'react'

export function FiveDayLowsDayThree({className}) {
	const [temp, setDayThreeLow] = useState()



	functionFloat.processFiveDayLowsDayThree = async function processFiveDayLowsDayThree(data) {
  				setDayThreeLow(data); 
  
}

	return (
		<div className={ className }><div className="fiveDayOutlookDecriptionWraps
		">Low: </div> { temp } º F  </div>
		)
	}




export default FiveDayLowsDayThree;