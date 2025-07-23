import React from 'react';
import "./ep.css";

const exper = [
    {
        time: "September 2022 - October 2024",
        Company: "EasyInsights",
        jobTitle: "Front End Developer",
        points: [
            "Developed and maintained multiple screens for a SaaS analytics platform, including a Data Sources screen to authorize and manage marketing accounts (e.g., Facebook, Zoho, Google Analytics) with search, edit, and filter capabilities.",
            "Contributed to multi-team workspace management by developing views showing team usage stats and supporting dataview duplication, data blending, alerts, metrics across workspaces.",
            "Built a dynamic homepage dashboard with key widgets and role-based navigation logic tailored to user workspaces and teams.",
            "Implemented smooth user experiences with loading animations, custom date ranges, search functionality, and dynamic table features with pagination, sorting by name, role-based filtering."
        ]
    },
    {
        time: " June 2022 - August 2022",
        Company: "EasyInsights",
        jobTitle: "Front End Developer Intern",
        points: [ "Worked on EasyInsights.ai website pages, implementing mobile-responsive layouts for improved user experience on smaller screens.",
            "Gained hands-on experience with class-based React components, contributing to legacy parts of the application."
        ]
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
                        <span className='icon-details'>
                            <span className="expcard-img">
                            <i class="fa-solid fa-briefcase" style={{ color: "#f7f7f7" }}></i>
                        </span>
                        <span className='sub-box'>
                            <h6 style={{ color: "#8444df" }}>{li.time}</h6>
                            <h4> {li.jobTitle} </h4>
                            <h5>{li.Company}</h5>
                        </span>
                        </span>
                        {li.points && <span>
                            {li.points.map((p, i) => ( <li key={i}>{p}</li>
                            ))}
                        </span>}
                    </article>
                })}
            </div>
        </section>
    )
}

export default Experience