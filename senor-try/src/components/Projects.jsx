import './Projects.css';
import item1 from '../assets/anish.jpg';
import item2 from '../assets/ishita.jpg';
import item3 from '../assets/janhvi.jpg'
import item4 from '../assets/pooja.jpg'
import item5 from '../assets/asha.jpg'
import {BsGithub} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";

const data =[
  {
    id: 1,
    image: item1,
    title:'Anish VV',
    text:'A platform that provides users to converse over the globe though a ChatRoom.Further Users can add notes, thoughts and espy Graph of Emotions, Word Cloud and track Mental Health through it.Uses Socket.io for ChatRoom and Node JS, Express JS for implementing client and server sides.React JS and Tailwind CSS for applications UI .HTML and Pure JS for Mental Health implementation.',
    github:'https://github.com/anish2105',
    demo:'https://www.linkedin.com/in/anishvvantagodi/'
  },
  {
    id: 2,
    image: item2,
    title:'Ishita Singhal',
    text:'A platform that provides users to converse over the globe though a ChatRoom.Further Users can add notes, thoughts and espy Graph of Emotions, Word Cloud and track Mental Health through it.Uses Socket.io for ChatRoom and Node JS, Express JS for implementing client and server sides.React JS and Tailwind CSS for applications UI .HTML and Pure JS for Mental Health implementation.',
    github:'https://github.com/ishita-singhal',
    demo:'http://www.linkedin.com/in/ishitasinghal12'
  },
  {
    id: 3,
    image: item3,
    title:'Janhvi Singh',
    text:'An Animated 3D Portfolio Website built using Next.js ,Three.js, GSAP, Tailwind CSS.',
    github:'https://github.com/Janhvi52',
    demo:'https://www.linkedin.com/in/janhvi-singh-539989227/'
  },
  {
    id: 4,
    image: item4,
    title:'Pooja Harihar',
    text:'A platform that provides users to converse over the globe though a ChatRoom.Further Users can add notes, thoughts and espy Graph of Emotions, Word Cloud and track Mental Health through it.Uses Socket.io for ChatRoom and Node JS, Express JS for implementing client and server sides.React JS and Tailwind CSS for applications UI .HTML and Pure JS for Mental Health implementation.',
    
    github:'https://github.com/poojaharihar03',
    demo:'https://www.linkedin.com/in/poojaharihar'
  },
  // {
  //   id: 5,
  //   image: item5,
  //   title:'Dr. ASHA T.',
  //   text:'A platform that provides users to converse over the globe though a ChatRoom.Further Users can add notes, thoughts and espy Graph of Emotions, Word Cloud and track Mental Health through it.Uses Socket.io for ChatRoom and Node JS, Express JS for implementing client and server sides.React JS and Tailwind CSS for applications UI .HTML and Pure JS for Mental Health implementation.',
    
  //   github:'https://sites.google.com/site/ashatbitcse',
  //   demo:'https://www.linkedin.com/in/poojaharihar'
  // },
]

const Projects = () => {
  return (
    <div id='projects'>
    <h2>Team SenOR</h2>
    <div className='container portfolio_container'>
 {
  data.map(({id,image,title,github,demo,text})=>{
    return(
      <article key={id} className='portfolio_item'>
        <div className='portfolio_item-image'>
        {/* <p className='textt'>{text}</p> */}
        <img src={image} alt="image1"/>
        </div>
          <h3>{title}</h3>
          <div className='button_proj'>          
          <a href={github} className='btn'>GitHub <BsGithub/></a>
          <a href={demo} target='_blank' rel="noreferrer" className='btn btn-primary'>LinkedIn <BsLinkedin/></a>
      </div>
</article>
    )
  })
 }
    
    </div>
    </div>
  )
}

export default Projects