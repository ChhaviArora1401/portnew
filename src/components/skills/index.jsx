import React from 'react';
import styled from "styled-components";
import Jest from "../../assets/logos/jest.png";
import Tailwind from "../../assets/logos/tailwind.jpg";
import Redux from "../../assets/logos/redux.png";
import Restapi from "../../assets/logos/restapi.png";
import Jquery from "../../assets/logos/jquery.png";
import RTL from "../../assets/logos/React-Testing-Libraries.png";
import Next from "../../assets/logos/nextjs.png";
import Router from "../../assets/logos/router.png";
import Firebase from "../../assets/logos/firebase.png";
import Vscode from "../../assets/logos/vscode.png";

const Wrapper = styled.section`
flex-direction: column;
.skills {
    display: grid;
    -ms-grid-columns: (minmax(80px, 1fr))[auto-fill];
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    grid-column-gap: 50px;
    grid-row-gap: 50px;
    justify-items: center;
}
`

const Iwrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    font-size: 0.8rem;
    background-color: white;
    padding: 10px 10px;
    border-radius: 15px;
    min-width: 86px;
    max-width: fit-content;
    white-space: nowrap;
    height: 75px;
    box-shadow: 0px 4px 8px rgb(134 151 168/10%);
    border: 1px solid #eee;
    justify-content: space-between;
    img {
        height: 46px;
        min-width: 50%;
        max-width: 70px;
    }
@media (max-width: 768px) { 
    color: #333;
    .skills {
        row-gap: 15px;
    -webkit-column-gap: 15px;
            column-gap: 15px;
    }
}
`
const icon = [
    {
        src: "https://www.rapiddg.com/sites/default/files/imce-files/react.png",
        span: "React"
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
        span: "JavaScript"
    },
    {
        src: Redux,
        span: "Redux"
    },
    {
        src: Firebase,
        span: "Firebase"
    },
    {
        src: Next,
        span: "Next.js"
    },
    {
        src: RTL,
        span: "Testing Library",
    },
    {
        src: Jest,
        span: "Jest"
    },
    {
        src: Router,
        span: "React Router"
    },
    {
        src: Restapi,
        span: "Rest APIs"
    },
    {
        src: Jquery,
        span: "JQuery"
    },
    {
        src: "https://avatars.githubusercontent.com/u/18133?s=200&v=4",
        span: "Git"
    },
    {
        src: Tailwind,
        span: "Tailwind CSS"
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
        span: "HTML"
    },
    {
        src: "https://www.kindpng.com/picc/m/464-4640184_css3-png-download-css-icon-transparent-png.png",
        span: "CSS"
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png",
        span: "VITE"
    },
    {
        src: Vscode,
        span: "VS Code"
    },
];

const Icons = (props) => {
    return <Iwrapper>
        <img src={props.src} />
        <span>{props.span}</span>
    </Iwrapper>
};


const Skills = (props) => {
    const { pre_head, head } = props;
    return <Wrapper className="main-content padding" id="skills">
        <div className="headings">
            <span>{pre_head}</span>
            <p>{head}</p>
        </div>
        <div className="skills sectionContain">
            {
                icon.map((li, index) => {
                    return <Icons src={li.src} span={li.span} key={index} />
                })
            }
        </div>
    </Wrapper >
};

export default Skills