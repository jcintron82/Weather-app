import { functionFloat } from '../../components/header.js'
import {useState} from 'react'

export function FiveDayHumidityDayThree({className, text}) {
	const [humidity, setDayThreeHumidity] = useState()



	functionFloat.processFiveDayHumidityDayThree = async function processFiveDayHumidityDayThree(data) {
  setDayThreeHumidity(data); 
  
}

	return (
		<div className={ className }><div className="fiveDayOutlookDecriptionWraps
		">Humidity: </div> { humidity }%  </div>
		)
	}




export default FiveDayHumidityDayThree;