import { functionFloat } from '../../components/header.js'
import { useState } from 'react'

export function HighTempsDayTwo({className}) {
	const [temp, setTemp] = useState()



	functionFloat.processHighTempsDayTwo= async function processHighTempsDayTwo(data) {
  				setTemp(data); 
  
}

	return (
		<div className={ className }> <div className="fiveDayOutlookDecriptionWraps
		">High: </div>{ temp }º F </div>
		)
	}




export default HighTempsDayTwo;