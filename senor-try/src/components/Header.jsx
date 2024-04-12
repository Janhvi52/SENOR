import './Header.css';
import Button from './Button';
import HeaderSocials from './HeaderSocials';
import illustration1 from '../assets/good.png'

const Header = () => {
  return (
    <header className='header_container'>
    <div className='left_portion'>
    <h4>We are presenting</h4>
    <h1>SenOR legal advisor using LLM</h1>
    <h3 className="text-light"> "SenOR" represents "Sentinel of Rights," </h3>
    <br/>Symbolizing a digital guardian dedicated to safeguarding and advocating for <span>legal rights</span> 
    <Button/>
    </div>
    <div className='right_portion'>
      <img src={illustration1} width="100%" height="80%" alt='illustration'/>
    </div>
    <p className="const_mail">senor@gmail.com</p>
   <HeaderSocials/>
    </header>
  )
}

export default Header