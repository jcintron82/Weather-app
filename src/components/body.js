import Button from './button'
import  Input from './inputbox'
import {FetchAPI} from '../api/api'
import '../App.css';
import {useState} from 'react';

function Body(props) {

const [inputValue, setInputValue] = useState('');

const handleChange = (event) => {
  setInputValue(event.target.value);
  console.log('h', event.target.value)
   console.log(setInputValue)
   console.log(inputValue)
}


const getData = (e) => {
  const weatherData = e.target.value;
  weatherData =+ inputValue
  console.log(weatherData)
}

 const onClickSearch = () => {
  FetchAPI()
 }

  return (
    <body className="body">
    <div>
    </div>
    <Button  onClick={onClickSearch} className='searchBtn' text='Search'/>
    <Input className='newLocationSearch' type='text' onChange={handleChange}/>

    </body>

  );
}

export default Body;