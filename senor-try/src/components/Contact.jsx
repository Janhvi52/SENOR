import './Contact.css';
import Button from './Button';

const Contact = () => {
  return (
    <section id='Contact'>
    <div className='contact_msg'>
    <h2>About Us</h2>
    <br/>
    <p>This website is designed to empower all the citizens with comprehensive Indian legal knowledge, safeguarding them from potential exploitation by those in positions of power. Its mission is to inform and protect, ensuring individuals have access to valuable insights about laws, fostering a more informed and just society.</p>
    <Button/>
    </div>
    <footer>
      <p className='footer_p'>@<span>Team SenOR</span> | All rights reserved.</p>
    </footer>
    </section>
  )
}

export default Contact