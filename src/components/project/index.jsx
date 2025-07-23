import React from 'react';
import styled from "styled-components";
import despoina from "../../assets/despoina.png";
import halloween from "../../assets/halloween.png";
import weeezaa from "../../assets/weeezaa.png";
import fanwiki from "../../assets/fanwiki.png";
import portfolio from "../../assets/portfolio.png";
import documentIt from "../../assets/documentIt.png";
// import 

const Wrapper = styled.section`
.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1rem;
    align-items: center;
}
`

const Pwrapper = styled.div`
display: flex;
flex-direction: row;
border-radius: 15px;
box-shadow: 0px 14px 28px rgb(134 151 168/8%);
border: 1px solid #eee;
justify-content: space-evenly;
align-items: flex-start;
padding: 15px 0 10px 0;
.image {
    flex: 0 0 350px;
    border-radius: 10px;
    display: block;
    margin: auto 0;
}
img {
    width: 100%;
    border-radius: 10px;
    border: 1px solid #ddd;
}
.desc {
    width: 55%;
}
a {
    color: #8444df;
}
h3 {
    color: black;
}
h3 a {
    text-decoration: none;
}
@media (max-width: 1200px) { 
    .image img{
        width: 97%;
    }
}
@media (max-width: 1075px) { 
    font-size: 0.97rem;
    .image img{
        width: 90%;
    }
}
@media (max-width: 930px) { 
    font-size: 0.95rem;
    .image img{
        width: 90%;
        margin: 0 0 0 5%;
    }
    .spans {
        display: flex;
        flex-direction: row;    
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
}
@media (max-width: 768px) { 
    margin-top: 15px;
    flex-direction: column;
    .image {
         flex: 0 0 0;
    }
    .desc {
        text-align: center;
        margin: auto;
        width: 100%;
    }
    h3 {
        color: #fff;
    }
}
`

const works = [
    {
        src: "",
        heading: "React Money Manager",
        techstats: [
            "React",
            "Redux",
            "XLSX (SheetJS)",
            "JavaScript",
            "FireBase"
        ],
        desc: "Built a full-stack expense tracker using React.js and Firebase Firestore. Implemented Google OAuth for secure authentication and user session persistence. Designed reusable components and custom React hooks for transactions and balance logic. Added Excel/CSV import for bank statement parsing and transaction ingestion. Integrated Chart.js for interactive charts with category-wise breakdown. Enabled manual balance editing, category customization, and date range filtering in a responsive UI.",
        livelink: "https://reactmoneymanager-97354.web.app"
    },
    {
        src: documentIt,
        heading: "Document It (Google Docs Clone)",
        techstats: [
            "React",
            "HTML",
            "CSS",
            "JavaScript",
            "FireBase"
        ],
        desc: "Document It is a CRUD based app made from scratch using ReactJS. It is a collection of docs stored and shared online. The data is stored and updated using Firebase’s Firestore Database.",
        livelink: "https://document-it.netlify.app"
    },
    {
        src: fanwiki,
        heading: "Fanwiki",
        techstats: [
            "React",
            "HTML",
            "CSS",
            "JavaScript"
        ],
        desc: "Created the front end of FanWiki Web App from scratch using ReactJS. It is a wiki page of games & movies series. The populated data of the web app is scraped from fandom.com using Node JS.",
        livelink: "https://fanwiki.netlify.app/"
    },
    {
        src: portfolio,
        heading: "Portfolio",
        techstats: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        desc: "This is a website bulit with HTML, CSS, JavaScript to showcase the skills and projects, it uses Vanilla JavaScript for the effects, has a working contact form that connects to Gmail and works on almost every OS.",
        livelink: "https://chhaviarora1401.github.io/MyPortfolio/"
    },
    {
        src: despoina,
        heading: "Despoina (Password Tool)",
        techstats: [
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap 4"
        ],
        desc: "Despiona is a web based password tool to manage all of your password needs. It involves strength checker, and gives you a strong password if you cant seem to find one and lets you know how much time would it take for your password to be brute forced.",
        livelink: "https://chhaviarora1401.github.io/web/"
    },
    {
        src: halloween,
        heading: "Halloween Carnival",
        techstats: [
            "PHP",
            "HTML",
            "CSS",
            "JavaScript"
        ],
        desc: "Halloween Carnival is a platform made on XAMPP Stack(OS, Apache, MySQL, PHP), which is a demonstration of how SQL injection is used to bypass a login system without login credentials purely for hacking basic fundamentals study.",
        livelink: "http://halloween-carnival.rf.gd/"
    },
    {
        src: weeezaa,
        heading: "Weeezaa Board",
        techstats: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        desc: "Weeezaa Board is a modified version of a Ouija board game, built using HTML, CSS and JavaScript. Users can ask any questions and an answer is auto generated and presented in an exciting way by the Ghost.",
        livelink: "https://chhaviarora1401.github.io/Weeezaa-Board/"
    }

];

const Iwrapper = styled.span`
padding: 2%;
`

const Tech = (props) => {
    return <Iwrapper className=''>
        <span className='subitems color-text'>{props.span}</span>
    </Iwrapper>
};

const Project = (props) => {
    const { pre_head, head } = props;
    return <Wrapper id="works" className="padding">
        <div className='headings'>
            <span>{pre_head}</span>
            <p>{head}</p>
        </div>
        <div className="sectionContain">
            {works.map((li, index) => {
                    return <Work key={index} src={li.src} heading={li.heading} span={li.techstats} desc={li.desc} livelink={li.livelink} />
            })}
        </div>
    </Wrapper>
};

const Work = (props) => {
    return <Pwrapper>
        <div className='image'>
            <img src={props.src} />
        </div>
        <div className='desc'>
            <a href={props.livelink} target="_blank" rel="noreferrer"><h3>{props.heading}</h3></a>
            Technologies Used:
            <span span className='spans'>
                {props.span.map((li, index) => {
                        return <Tech span={li} key={index} />
                })}
            </span>
            <p>{props.desc}</p>
            <p>
                <span><a href={props.livelink} target="_blank" rel="noreferrer">Project Live Link</a></span>
            </p>
        </div>
    </Pwrapper >
}

export default Project