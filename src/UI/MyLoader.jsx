import React from 'react'
import styled, { keyframes } from 'styled-components'

//Styles
const rotate360 = keyframes`
  from {
    transform: rotate(0deg) scale(1);
  }
  to {
    transform: rotate(360deg) scale(1.5);
    
  }
`;
const Wrapper = styled.div`
  width: 100%;
`
const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  margin: 2.5rem auto;
  border: 2px dashed teal;
  background: transparent;
  width: 55px;
  height: 55px;
  border-radius: 50%;
`;
//------Styles

const MyLoader = () => {
  return (
      <Wrapper>
          <Spinner></Spinner>
      </Wrapper>
  )
}
 
export default MyLoader