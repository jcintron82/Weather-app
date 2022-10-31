import {Header} from '../components/header'


export async function FetchAPI(location) {

	try {

	let result = await fetch ('http://api.openweathermap.org/data/2.5/weather?q=' + location +'&APPID=bd3dd8d1151b1e784fcf021aa29927c5',
	 {mode: 'cors'});

	let final = await result.json()

	return processData(final)

	}
	catch(err) {
		alert(err)
	}
}

export async function processData(data) {
	console.log(data.cod)

	
}
