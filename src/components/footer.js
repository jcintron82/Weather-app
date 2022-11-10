import Button from './button'

function Footer() {

  const onClickGithub = () => {

  }
 
  return (
    <footer className='footer'>
    clickable github logo
    @jcintron82
    <Button color='red' text='' onClick={onClickGithub}/>
    </footer>
    
    );
}

export default Footer