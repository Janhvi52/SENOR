import item1 from '../assets/asha.jpg';
import './Guide.css';

const Guide = () => {
 return (
    <div className='guide_msg'>
    <h2>Project Guide</h2>
    <br/>
    <div className='flexx'>
    <div><img src={item1}/>
    <h3>Dr. ASHA T. </h3>
    <p>Professor & HoD<br/>
Department of Information Science & Engineering,
Bangalore Institute of Technology,
</p>
    <div className='button_link'>
        <a href="https://sites.google.com/site/ashatbitcse" className='btn'>Website</a>
    </div></div>
    <div className='paraa'>
    <p>We extend our heartfelt gratitude for your invaluable support and guidance throughout the journey of this project. Your leadership has been instrumental in steering us towards success. Your wisdom and encouragement have inspired us to achieve excellence. We are immensely grateful for your unwavering dedication and belief in our vision. This project stands as a testament to the collaborative spirit fostered under your mentorship. Thank you for being an exceptional leader.
    Thank you so much for inspiring and motivating us for this idea of chatbot. You have always helped us in getting through thick n thins.</p>
    </div>
    </div>
    </div>

  )
}

export default Guide