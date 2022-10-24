function Button({className, onClick, text}) {


  return (
    <div>
    <button onClick={onClick}
      className={className}>
        {text}
      </button>
    </div>
    );
}

Button.defaultProps = {
  color:'white'
}

export default Button