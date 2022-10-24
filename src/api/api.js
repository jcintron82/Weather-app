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

async function processData(data) {
	let div = document.getElementById('div')
	console.log(data)
	
}
