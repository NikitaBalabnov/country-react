import React, { useEffect, useRef, useState } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {Container} from './Container'
import { IoMoon, IoMoonSharp} from "react-icons/io5";
import ToUpperCaseLetter from '../utils/ToUpperCaseLetter';
// Styles 
const MyHeader = styled.header`
    box-shadow: var(--shadow);
    background: var(--color-bg);
`;
const Wrapper = styled.div`
    padding: 30px 0;
`;
const MyHeaderItems = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-text);
    font-size: var(--fz-bg);
    font-weight: var(--fw-normal);
`

const Title  = styled(Link).attrs({
    to: '/countries',
})`
    text-decoration: none;
    color: inherit;
`;
const ThemeSwitcher = styled.div`
    color: inherit;
    cursor: pointer;
    display: flex;
    align-items: center;
    & span{
        margin-left: 7px;
    }
`;
// --Styles 
const Header = () => {

const [theme, setTheme] = useState('light');
function ToggleTheme(){
    setTheme(() => theme === 'light' ?  'dark' :'light')
}
useEffect(()=>{
    document.body.setAttribute('data-theme', theme);
},[theme])
const ThemeName = theme==='light' ? 'Dark' :'Light';
  return (
    <>
        <MyHeader>
            <Container>
                <Wrapper>
                    <MyHeaderItems>
                        <Title>
                        Where is the World? 
                        </Title>
                        <ThemeSwitcher onClick={ToggleTheme}>
                            <IoMoon size={'18px'}/>
                            <span> {ThemeName} theme</span>
                        </ThemeSwitcher>
                    </MyHeaderItems>
                </Wrapper>   
            </Container> 
        </MyHeader>
    </>
  )
}

export default Header