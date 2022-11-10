import { functionFloat } from '../../components/header.js'
import { useState } from 'react'

export function HighTempsDayOne({className}) {
	const [temp, setTemp] = useState()



	functionFloat.processFiveDayHighsDayOne= async function processFiveDayHighsDayOne(data) {
  				setTemp(data); 
  
}

	return (
		<div className={ className }> <div className="fiveDayOutlookDecriptionWraps
		">High: </div>{ temp }º F </div>
		)
	}




export default HighTempsDayOne;