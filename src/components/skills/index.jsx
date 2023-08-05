import React from 'react';
import styled from "styled-components";

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
    padding: 10px 0;
    border-radius: 15px;
    width: 86px;
    height: 75px;
    box-shadow: 0px 4px 8px rgb(134 151 168/10%);
    border: 1px solid #eee;
    justify-content: space-between;
    img {
        width: 40%;
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
        src: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
        span: "HTML"
    },
    {
        src: "https://www.kindpng.com/picc/m/464-4640184_css3-png-download-css-icon-transparent-png.png",
        span: "CSS"
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
        span: "JavaScript"
    },
    {
        src: "https://howtodoinjava.com/wp-content/uploads/jquery_logo.png",
        span: "JQuery"
    },
    {
        src: "https://avatars.githubusercontent.com/u/18133?s=200&v=4",
        span: "Git"
    },
    {
        src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fworldvectorlogo.com%2Flogo%2Fredux&psig=AOvVaw3XWU40oPhi7coNSwXZi_Gs&ust=1691263155745000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIiYga7cw4ADFQAAAAAdAAAAABAE",
        span: "Redux"
    },
    {
        src: "https://mui.com/static/logo.png",
        span: "MUI"
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png",
        span: "VITE"
    },
    {
        src: "https://yt3.ggpht.com/_q52i8bUAEvcb7JR4e-eNTv23y2A_wg5sCz0NC0GrGtcw1CRMWJSOPVHUDh_bngD0q4gMvVeoA=s900-c-k-c0x00ffffff-no-rj",
        span: "VS Code"
    },
    {
        src: "https://cdn.iconscout.com/icon/free/png-256/php-27-226042.png",
        span: "Php"
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
        span: "C++"
    },
    {
        src: "https://thumbs.dreamstime.com/b/sql-icon-sql-icon-simple-vetor-icon-125045332.jpg",
        span: "SQL"
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