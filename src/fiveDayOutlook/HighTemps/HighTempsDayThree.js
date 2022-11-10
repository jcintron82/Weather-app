import { functionFloat } from '../../components/header.js'
import { useState } from 'react'

export function HighTempsDayThree({className}) {
	const [temp, setTemp] = useState()



	functionFloat.processHighTempsDayThree= async function processHighTempsDayThree(data) {
  				setTemp(data); 
  
}

	return (
		<div className={ className }> <div className="fiveDayOutlookDecriptionWraps
		">High: </div>{ temp }º F </div>
		)
	}




export default HighTempsDayThree;