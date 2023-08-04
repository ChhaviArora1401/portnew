import React from 'react';
import styled from "styled-components";

const Wrapper = styled.section`
  .load {
      width: 50%;
      background: grey;
      position: fixed;
      height: 100%;
      z-index: 100;
  }
  .r {
    float: right;
    margin-left: 50%;
  }
  .l {
    float: left;
  }
`
const Loader = () => {
    return <Wrapper>
        <div className="load l">hey</div>
        <div className="load r">You</div>
    </Wrapper >
};

export default Loader