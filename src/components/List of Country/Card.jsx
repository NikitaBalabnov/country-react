import React from 'react'
import styled from 'styled-components'
//Styles
const Wrapper = styled.article`
    display: flex;
    overflow: hidden;
    border-radius: 5px;
    flex-direction: column;
    box-shadow: var(--shadow);
    background: var(--color-ui-base);
    color: var(--color-text);
    fotn-size: var(--fz-sm);
    cursor: pointer;
`;
const CardImg = styled.img`
    width: 100%;
    height: 150px;
    display: block;
    object-fit: cover;
    object-position: center;
`
const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem 2rem 1rem;
`
const CardTitle = styled.h3`

`
const CardList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`
const CardListItem = styled.li`

`
//------Styles
const Card = ({img, title, info = [], onClick}) => {
  return (
    <Wrapper onClick={onClick}>
        <CardImg src={img} alt={title}/>
        <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardList>
                {info.map((e)=>
                    <CardListItem key={e.title}>
                        <b>{e.title}:</b> {e.discription}
                    </CardListItem>
                )}
            </CardList>
        </CardBody>
    </Wrapper>
  )
}

export default Card