import { functionFloat } from '../../components/header.js'
import { useState } from 'react'

export function HighTempsDayFour({className}) {
	const [temp, setTemp] = useState()



	functionFloat.processHighTempsDayFour= async function processHighTempsDayFour(data) {
  				setTemp(data); 
  
}

	return (
		<div className={ className }> <div className="fiveDayOutlookDecriptionWraps
		">RealFeel High: </div>{ temp }º F </div>
		)
	}




export default HighTempsDayFour;