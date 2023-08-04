import React from 'react';
import styled from "styled-components";
import Intro from '../../components/main';
import About from '../../components/about';
import Skills from '../../components/skills';
import Project from '../../components/project';
import Contact from '../../components/Contact';
import Experience from '../../components/experience';

const Wrapper = styled.div`
width: calc(100% - 90px);
margin-left: 90px;
overflow: hidden;
@media (max-width: 990px) {
    width: 97%;
    margin-left: 0px;
    overflow: hidden;
    margin: 0 2% 0 2%;
}
@media (max-width: 768px) { 
    // margin: 0 1%;
}
.bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: url('https://cdn.wallpapersafari.com/20/74/x58BEZ.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
}
`

const headings = [
    {
        pre_head: "SOME INFO",
        head: "ABOUT ME"
    },
    {
        pre_head: "CHECK OUT MY",
        head: "SKILLS"
    },
    {
        pre_head: "KNOW ABOUT MY",
        head: "EXPERIENCE"
    },
    {
        pre_head: "TAKE A LOOK AT MY",
        head: "PROJECTS"
    },
    {
        pre_head: "SAY HELLO",
        head: "CONTACT"
    }
];

const Main = () => {
    return <Wrapper>
        <div className='bg'></div>
        <div className="pageWrapper">
            <Intro />
            <main>
                <About pre_head={headings[0].pre_head} head={headings[0].head} />
                <Skills pre_head={headings[1].pre_head} head={headings[1].head} />
                <Experience pre_head={headings[2].pre_head} head={headings[2].head} />
                <Project pre_head={headings[3].pre_head} head={headings[3].head} />
                <Contact pre_head={headings[4].pre_head} head={headings[4].head} />
            </main>
        </div>
    </Wrapper >
};

export default Main