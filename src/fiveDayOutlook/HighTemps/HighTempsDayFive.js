import { functionFloat } from '../../components/header.js'
import { useState } from 'react'

export function HighTempsDayFive({className}) {
	const [temp, setTemp] = useState()



	functionFloat.processHighTempsDayFive= async function processHighTempsDayFive(data) {
  				setTemp(data); 
  
}

	return (
		<div className={ className }> <div className="fiveDayOutlookDecriptionWraps
		">High: </div>{ temp }º F </div>
		)
	}




export default HighTempsDayFive;