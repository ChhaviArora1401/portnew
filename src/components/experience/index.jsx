import React from 'react';
import "./ep.css";

const exper = [
    {
        time: "September 2021 - Present",
        Company: "EasyInsights",
        jobTitle: "Front End Web Developer",
    },
    {
        time: " June 2021 - August 2021",
        Company: "EasyInsights",
        jobTitle: "Front End Web Developer Intern",
    },
]

const Experience = (props) => {
    const { pre_head, head } = props;
    return (
        <section className="main-content padding" id="experience" style={{flexDirection: "column"}}>
            <div className='headings'>
                <span>{pre_head}</span>
                <p>{head}</p>
            </div>
            <div className="sectionContain">
                {exper.map((li, index) => {
                    return <article className='experience-card' key={index}>
                        <span className="expcard-img">
                            <i class="fa-solid fa-briefcase" style={{ color: "#f7f7f7" }}></i>
                        </span>
                        <span className='sub-box'>
                            <h6 style={{ color: "#8444df" }}>{li.time}</h6>
                            <h4> {li.jobTitle} </h4>
                            <h5>{li.Company}</h5>
                        </span>
                    </article>
                })}
            </div>
        </section>
    )
}

export default Experience