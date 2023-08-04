import React, { useState } from 'react';
import styled from "styled-components";
import "./nav.css"

const Wrapper = styled.div`

`
const Side = (props) => {
    
    console.log(props)
    // const showSidebar = () => {
    //     setSidebar(!sidebar);
    // }

    return <section>
        <nav className={'nav-menu'}>
            <div className='logo'>
                CA
            </div>
            <div className='menu'>
                <a href="#home" onClick={() => props.setSidebar(false)}><div className="subitem"><span className='icon'><i class="fa-solid fa-house"></i></span> <span className="text">Home</span></div></a>
                <a href="#about" onClick={() => props.setSidebar(false)}><div className="subitem"><span className='icon'><i class="fa-solid fa-user"></i></span> <span className="text">About</span></div></a>
                <a href="#skills" onClick={() => props.setSidebar(false)}><div className="subitem"><span className='icon'><i class="fa-solid fa-laptop-code"></i></span> <span className="text">Skills</span></div></a>
                <a href="#experience" onClick={() => props.setSidebar(false)}><div className="subitem"><span className='icon'><i class="fa-solid fa-briefcase" style={{ color: "#f7f7f7" }}></i></span> <span className="text">Experience</span></div></a>
                <a href="#works" onClick={() => props.setSidebar(false)}><div className="subitem"><span className='icon'><i class="fa-solid fa-briefcase"></i></span> <span className="text">Works</span></div></a>
                <a href="#contact" onClick={() => props.setSidebar(false)}><div className="subitem"><span className='icon'><i class="fa-solid fa-phone"></i></span> <span className="text">Contact</span></div></a>
            </div>
            <div className='menu'>
                <div className="last"><span className='icon'><i class="fa-solid fa-arrow-down-long"></i></span> <span className="text">Scroll&nbsp;Down</span></div>
            </div>
        </nav>
    </section>
};

export default Side