import React from 'react';
import styled from "styled-components";

const Wrapper = styled.section`
flex-direction: column;
font-size: 1.25rem;
font-weight: 500;
article {
    text-align: justify;
}
@media (max-width: 768px) {  
    font-size: 1.15rem;
}
`
const About = (props) => {
    const { pre_head, head } = props;
    return <Wrapper id="about" className="main-content padding">
        <div className='headings'>
            <span>{pre_head}</span>
            <p>{head}</p>
        </div>
        <article className='about sectionContain'>
            <p>Frontend Developer with 2.5 years of hands-on experience building responsive and scalable web applications using React, Redux, Firebase, and Tailwind CSS. Skilled in routing (React Router), testing (Jest, RTL), and modern frameworks like Next.js. Adept at writing clean, maintainable code and working in fast-paced, agile teams.</p>
        </article>
    </Wrapper >
};

export default About