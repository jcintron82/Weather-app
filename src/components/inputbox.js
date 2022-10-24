function Input({className,type,getData}) {


  return (
    <div>
    <input className={className} type={type} onChange={getData}></input>
    </div>
    );
}

export default Input