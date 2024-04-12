import React from 'react'
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs";
import {BsMedium} from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://github.com/ishita-singhal/SenOR-interface" target="_blank" rel="noreferrer"><BsGithub/></a>
        {/* <a href="https://www.linkedin.com/in/janhvi-singh-539989227/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://www.instagram.com/janhvi.__.singh/" target="_blank" rel="noreferrer"><BsInstagram/></a> */}
        {/* <a href="https://auth.geeksforgeeks.org/user/janhvi52/articles" target="_blank" rel="noreferrer"><BsMedium/></a> */}
        <a href="NA" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="NA" target="_blank" rel="noreferrer"><BsInstagram/></a>
       <a href="NA" target="_blank" rel="noreferrer"><BsMedium/></a>
    </div>
  )
}

export default HeaderSocials