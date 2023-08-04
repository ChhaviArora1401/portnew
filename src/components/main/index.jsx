import React from 'react';
import styled from "styled-components";
import Me from "../../assets/me.jpg";

const Wrapper = styled.header`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
width: 100%;

.image img{
    width: 20%;
    border-radius: 150px;
    box-shadow: 12px 0 #d9c8f1, 24px 0 #e2d6f3, 36px 0 #ece6f5;
}

.image {
    display: flex;
    flex: 0 0 50%;
    justify-content: center;
    width: 100%;
    position: relative;
}

.text {
    padding: 30px 0;
    margin: auto;
    width: 80%;
    text-align: center;
}

h1 {
    font-size: 2.5rem;
    letter-spacing: 2px;
    margin: 24px 0;
}

a {
    text-decoration: none;
    margin: 0 15px 0 0;
}

.buttons {
    display: flex;
    width: 70%;
    margin: 0 auto;
    align-items: center;
    flex-direction: row;
    justify-content: center;
}

.socials {
    margin: 0 30px;
    display: flex;
    font-size: 20px;
}

.socials button {
    padding: 9px 10px;
    background-color: white;
    border-radius: 6px;
    font-size: 20px;
    color: #8444df;
    border: 1px solid #eee;
    box-shadow: 0px 4px 6px rgb(134 151 168/10%);
    display: inline-block;
    cursor: pointer;
}

.socials button:hover {
    box-shadow: 0 7px 15px rgba(0, 0, 0, 0.2);
}

.socials button:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

}
@media (max-width: 768px) { 
    .image img{
    width: 40%;
    }
    .image {
        margin: 10% 0 0 0;
    }
    .text {
        width: 100%;
    }
}

@media (max-width: 499px) { 
    .text {
        width: 90%;
        font-size: 1.1rem;
    }
    .buttons {
        flex-direction: column;
    }
    .socials {
        margin: 5% 0 0 0;
    }
}

@media (max-width: 399px) { 
height: auto;
}
`
const Intro = () => {
    return <Wrapper id="home" className="main-content">
        <div className='sectionContain'>
            <div className='image'><img src={Me} /></div>
            <div className='text'>
                <em>HI THERE! I'M</em>
                <h1 className='head'><span className='color-text'>CHHAVI</span> ARORA</h1>
                <p>A <span className='color-text'>Front-End Web Developer</span> passionate about creating interactive applications and experiences on the web.</p>
                <div className='buttons'>
                    <a href="https://drive.google.com/file/d/1j6VcwikLl55pomlR9VZGbHze89KaYog8/view?usp=sharing" target="_blank" rel="noreferrer"><button className='button-intro'>Resume</button></a>
                    <span className='socials'>
                        <a href="https://www.linkedin.com/in/chhaviarora1401/" target="_blank" rel="noreferrer"><button><i class="fa-brands fa-linkedin"></i></button></a>
                        <a href="https://github.com/ChhaviArora1401" target="_blank" rel="noreferrer"><button><i class="fa-brands fa-github-square"></i></button></a>
                        <a href="https://twitter.com/chhaviarora1401" target="_blank" rel="noreferrer"><button><i class="fa-brands fa-twitter-square"></i></button></a>
                    </span>
                </div>
            </div>
        </div>
    </Wrapper >
};

export default Intro