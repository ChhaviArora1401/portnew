import React from 'react';
import styled from "styled-components";
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './index.css';

const Wrapper = styled.section`
flex-direction: column;
.parti {
    display: flex;
    justify-content: space-between;
}

.c1 {
    height: 150px;
    padding: 2.5% 7%;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 8px rgb(134 151 168/10%);
    border: 1px solid #eee;
    border-radius: 15px;
    width: 40%;
    margin: 0 auto;
    justify-content: space-evenly;
    align-items: center;
}

.c1 img {
    width: 20px;
}

.icon {
    display: inline-block;
    padding: 10px 18px;
    background: #f7f7f7;
    border-radius: 7px;
    font-size: 1.7rem;
    margin-bottom: 25px;
}

a {
    color: #333;
}

.half {
    display: flex;
}

.fields {
    border: 1px solid #eee;
    -webkit-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
    padding: 11px 20px;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 1px;  
    margin: 1%;  
    width: 94.5%;
}
@media (min-width: 1319px) { 
    .half {
        width: 102%;
    }
}
@media (max-width: 768px) { 
    .half {
        flex-direction: column;
    }
    .button {
    padding: 15px 35px;
    width: 35%;
    margin: 10% auto 0 auto; 
    }
    .c1 {
        width: 100%;
    }
    .fields {
       width: 90%;
    }
    .icon {
        background-color: rgba(0,0,0, 0.4);
    }
    #mail {
        color: #666;
    }
}
@media (max-width: 499px) { 
     .fields {
       width: 84%;
       margin: 3% 0;
    }
    .button {
        padding: 15px 28px;
    }
    .c1 {
        width: 80%;
    }
}
@media (max-width: 399px) { 
    .button {
        padding: 15px 20px;
    }
    .c1 {
        width: 80%;
        font-size: 0.9rem;
    }
}



`

const Contact = (props) => {
    const form = useRef();
    const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
    const showAlert = (show = false, msg = '', type = '') => {
        setAlert({ show, msg, type });
    }
    const sendEmail = (e) => {
        e.preventDefault();
        // console.log(form.current);
        emailjs.sendForm('service_iv3qepd', 'template_p1l1ivm', form.current, 'user_RRk6qcHyhRjAvmOnJnSnEhg')
            .then((result) => {
                setTimeout(() => {
                    showAlert(true, "Email has been sent successfully", "success")
                }, 1000);
            }, (error) => {
                setTimeout(() => {
                    showAlert(true, "Try again", "error");
                }, 1000);
                console.log(error.text);

            });
    };
    const { pre_head, head } = props;
    return <Wrapper className="main-content padding" id="contact">
        <div className='headings'>
            <span>{pre_head}</span>
            <p>{head}</p>
        </div>
        <div className="sectionContain">
            <h3>Get In Touch</h3>
            <div className='parti'>
                <div className='c1'>
                    <span className='icon'><i class="fa-solid fa-envelope"></i></span>
                    <a href="mailto:chhaviarora1401@gmail.com" id="mail">chhaviarora1401@gmail.com</a>
                    Email me
                </div>
            </div>
            <h3>Contact Form</h3>
            <form ref={form} onSubmit={sendEmail}>
                <div className='half'>
                    <input type="text" name="name" placeholder="Name" className="fields" />
                    <input type="text" name="email" placeholder="Email" className="fields" />
                </div>
                <input type="text" name="subject" placeholder="Subject" className="fields full" />
                <textarea type="text" name="message" placeholder="Message" className="fields full" />
                {alert.show && <span className={alert.type}>{alert.msg}</span>}
                <input type="Submit" className="button" />
            </form>
        </div>
    </Wrapper>
};

export default Contact