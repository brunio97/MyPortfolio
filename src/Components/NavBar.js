import React, { useEffect, useState } from "react";
import {Container, Nav, Navbar} from 'react-bootstrap';
import { FaGithub,FaLinkedin} from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";
import logoBS from '../assets/logoBS.png';
import 'bootstrap/dist/css/bootstrap.min.css';
const NavBar = () => {
  const [activeLink, setActiveLink]=useState('home');
  const [scrolled, setScrolled]=useState(false);

  useEffect(()=>{
    const onScroll = ()=>{
      if (window.scrollY>50){
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    }
    window.addEventListener('scroll',onScroll);
    return()=>window.removeEventListener('scroll',onScroll);
  },[])

  const onUpdateLink = (value) => {
    setActiveLink(value);
  }
return(
    <Navbar expand="md" className={scrolled? "scrolled":""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logoBS} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <span className="navbar-toggle-icon" ><TiThMenuOutline className="tog-icon"/></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home'? 'active navbar-link': 'navbar-links'} onClick={()=> onUpdateLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about'? 'active navbar-link': 'navbar-links'} onClick={()=> onUpdateLink('about')}>About</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills'? 'active navbar-link': 'navbar-links'} onClick={()=> onUpdateLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects'? 'active navbar-link': 'navbar-links'} onClick={()=> onUpdateLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://github.com/brunio97"><FaGithub className="fa-icon"/></a>
              <br></br>
              <a href="https://www.linkedin.com/in/bruno-salinas-velez/"><FaLinkedin className="fa-icon"/></a>
            </div>
            <button className="vvd" onClick={()=>window.location.href = '#contact'}><span>Let's <br></br>connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
);

}

export default NavBar;