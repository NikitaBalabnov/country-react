import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
//Styles
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    max-width: 200px;
    width: 100%;
    margin: 0 auto;
`
const MyButton = styled.button.attrs({
    
})`
    background: var(--color-ui-base);
    padding: 1rem 2rem;
    box-shadow: var(--shadow);
    color: var(--color-text);
    border: none;
    cursor: pointer;
`
//------Styles
const HomePage = () => {
    const navigate = useNavigate();
  return (
    <Wrapper>
        <MyButton onClick={() => navigate('/countries')}>Open country page</MyButton>
    </Wrapper>
  )
}

export default HomePage