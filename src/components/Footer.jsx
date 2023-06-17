import React from 'react';
import logo from '../assets/logo.jpg'
import me from '../assets/photo1686990711.jpeg';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
        <div>
            <img src={me} 
            alt="Founder" />

            <h2>Vikram Kanzariya</h2>
            <p>Motivation is Temporary , but Discpline lasts Forever</p>
        </div>

        
        <aside>
            <h2>Social Media</h2>

            <article>
                <a href="https://github.com/vikramkanzariya" target={"blank"} ><AiFillGithub /> </a>
                <a href="https://www.linkedin.com/in/vikram-kanzariya-97b055206/" target={"blank"} ><AiFillLinkedin /> </a>
                <a href="https://www.instagram.com/vikram_kanzariya_3082/" target={"blank"} ><AiFillInstagram /> </a>
            </article>
        </aside>

        <a href="#home"> 
            <AiOutlineArrowUp /> 
        </a>

    </footer>
  )
}

export default Footer