import { functionFloat } from '../../components/header.js'
import { useState } from 'react'

export function FiveDayLowsDayTwo({className, text}) {
	const [temp, setDayTwoLow] = useState()



	functionFloat.processFiveDayLowsDayTwo = async function processFiveDayLowsDayTwo(data) {
  				setDayTwoLow(data); 
  
}

	return (
		<div className={ className }><div className="fiveDayOutlookDecriptionWraps
		">Low: </div> { temp } º F  </div>
		)
	}




export default FiveDayLowsDayTwo;