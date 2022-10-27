import Button from './button'
import  Input from './inputbox'
import {FetchAPI} from '../api/api'
import '../App.css';
import {useState} from 'react';

function Body(props) {

const [text, setText] = useState('');

const handleChange = (e) => {
  setText(e.target.value)
  console.log(e.target.value)
}

 const onClickSearch = (event) => {
  event.preventDefault();
  FetchAPI(text)
  console.log(text)
 }

  return (
   
    <body className="body">
    <Button  onClick={onClickSearch} className='searchBtn' text='Search'/>
    <Input className='newLocationSearch' type='text'  onChange={handleChange}/>
    </body>

  );
}
export default Body;