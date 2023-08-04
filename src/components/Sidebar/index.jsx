import React, { useState } from 'react';
import styled from "styled-components";
import "./nav.css"

const Wrapper = styled.div`
nav {
  background-color: #8444df;
  position: absolute;
  transition: 0.3s;
  height: 100vh;
  width: 105px;
  text-decoration: none;
  font-size: 20px;
  color: white;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;
}

nav:hover {
    width: 220px;
}

.text {
  visibility: hidden;
  color: #fff;
}

:hover .text {
  visibility: visible;
}

.logo {
    text-align: center;
    padding: 30px 15px;
    font-size: 3rem;
    letter-spacing: 1px;
    font-weight: 300;
    background-color: #773dc8;
}

.menu {
    display: flex;
    flex-direction: column;
    font-size: 0.85em;
    max-height: 300px;
    text-align: center;
}

.menu .subitem, .menu .last {
    display: flex;  
    padding: 12px 0px 12px 30px;
    margin: 0 15px 5px 15px;
    margin-bottom: 5px;
}

.subitem .text, .last .text {
    margin: 0 15px 0 15px;
}

.menu .subitem:hover {
    background-color: #9D69E5;
    border-radius: 10px;
    -webkit-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2);
}

.menu .last {
    align-items: flex-end;
}

a {
    text-decoration: none;
    color: white;
}

@media (max-width: 990px) {
  .text {
  visibility: visible;
  }
  nav {
    width: 220px;
  }
  
}

`
const Side = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return <Wrapper>
        <div className='navbar'>
            <span className='menu-bars'>
                <i class="fa-solid fa-bars" onClick={showSidebar}></i>
            </span>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <span className='navbar-toggle' onClick={showSidebar}>
                <span className='menu-bars'>
                    <i class="fa-solid fa-xmark"></i>
                </span>
            </span>
            <div className='logo'>
                CA
            </div>
            <div className='menu'>
                <a href="#home"><div className="subitem"><span className='icon'><i class="fa-solid fa-house"></i></span> <span className="text">Home</span></div></a>
                <a href="#about"><div className="subitem"><span className='icon'><i class="fa-solid fa-user"></i></span> <span className="text">About</span></div></a>
                <a href="#skills"><div className="subitem"><span className='icon'><i class="fa-solid fa-laptop-code"></i></span> <span className="text">Skills</span></div></a>
                <a href="#works"><div className="subitem"><span className='icon'><i class="fa-solid fa-briefcase"></i></span> <span className="text">Works</span></div></a>
                <a href="#contact"><div className="subitem"><span className='icon'><i class="fa-solid fa-phone"></i></span> <span className="text">Contact</span></div></a>
            </div>
            <div className='menu'>
                <div className="last"><span className='icon'><i class="fa-solid fa-arrow-down-long"></i></span> <span className="text">Scroll&nbsp;Down</span></div>
            </div>
        </nav>
    </Wrapper>
};

export default Side