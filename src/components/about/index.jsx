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
            <p>A self-taught front end developer who loves coding.
                My front end journey started since March 2021.
                I pursued graduation in BCA from <span className='color-text'>Vivekananda Institute of Professional Studies</span>.
                I am an Experienced front-end web developer with expertise in React and a track record of delivering exceptional user experiences. Proficient in modern web technologies, responsive design, and cross-browser compatibility, driving the development of visually appealing and performant web applications.</p>
        </article>
    </Wrapper >
};

export default About