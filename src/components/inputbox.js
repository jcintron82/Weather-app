import {useState} from 'react';

function Input({className,type, onChange}) {


  return (
    <div>
    <input className={className} type={type} onChange={onChange} ></input>
    </div>
    );
}

export default Input