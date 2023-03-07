import React from 'react'
import styled from 'styled-components'
import { Container } from './Container'
//Styles
const Wrapper = styled.main`
    padding: 2rem 0;
    @media(min-width: 767px){
        padding: 4rem 0;
    }
`
//----Styles
const Main = ({children}) => {
  return (
    <Wrapper>
        <Container>{children}</Container>
    </Wrapper>
  )
}

export default Main