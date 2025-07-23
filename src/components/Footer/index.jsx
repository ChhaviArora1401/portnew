import React from 'react';
import styled from "styled-components";

const Wrapper = styled.footer`
height: 50px;
margin-top: 2%;
background-color: white;
font-size: 0.99rem;
padding-left: 6%;
`
const Foot = () => {
    return <Wrapper className='flex'>
        <center>© Chhavi Arora 2025</center>
    </Wrapper >
};

export default Foot