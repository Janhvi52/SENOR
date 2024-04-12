import './Navbar.css';
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {AiOutlineContacts} from "react-icons/ai"
import {TbTools} from "react-icons/tb"
import {BiCodeBlock} from "react-icons/bi"
import { useState } from 'react';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active':''}><AiOutlineHome/></a>
      <a href="#skills" onClick={()=>setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' :''}><TbTools/></a>
      <a href="#journey" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}><AiOutlineUser/></a>
      <a href="#projects" onClick={()=>setActiveNav('#projects')} className={activeNav === '#projects'?'active':''}><BiCodeBlock/></a>
      <a href="#Contact" onClick={()=>setActiveNav('#Contact')} className={activeNav === '#Contact'?'active':''}><AiOutlineContacts/></a>
    </nav>
  )
}

export default Navbar;