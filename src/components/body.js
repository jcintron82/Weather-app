import Button from './button'
import  Input from './inputbox'
import {FetchAPI, float} from './header'
import '../App.css';
import {useState} from 'react';
import Header from './header'

function Body(props) {
const [temp, setTemp] = useState(0);
const [text, setText] = useState('');

const handleChange = (e) => {
  setText(e.target.value)
  console.log(e.target.value)
}

 const onClickSearch = (event) => {
  setTemp(text)
  float.function(text)

 }

  return (
   
    <body className="body">
    
    <Button  onClick={onClickSearch} className='searchBtn' text='Search'/>
    <Input className='newLocationSearch' type='text'  onChange={handleChange}/>
    </body>

  );
}
export default Body;