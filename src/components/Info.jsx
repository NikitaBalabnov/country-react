import React, { useEffect, useState } from 'react'
import {Code_Url} from '../API/config'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const Info = ({name, img, borders, infoList = [], topLevelDomain, currencies =[], languages =[]}) => {
    const navigate = useNavigate();
    const [neighbours, setNeighbours] = useState([]);
    
    useEffect(()=>{
        {borders &&
            axios.get(Code_Url(borders)).then(({data})=> setNeighbours(data.map(c => c.name)));
        }
    },[borders])
  return (
    <Wrapper>
        <InfoTop>
            <InfoImg src={img} alt={name}/>
            <InfoBody> 
                    <InfoTitle>{name}</InfoTitle>
                    <InfoBodyList>
                        <InfoList>
                                {infoList.map((i)=>{
                                return <InfoListItem key={i.title} className=""> <b>{i.title}</b>: {i.discription}</InfoListItem>
                            })}
                        </InfoList>
                        <InfoList>
                            <InfoListItem>
                                <b>Top Level of Domain</b>: {topLevelDomain.map((domain)=> <span key={domain}>{domain} </span> )} 
                            </InfoListItem>
                            <InfoListItem>
                                <b>Currencies</b>: {currencies.map((c)=> <span key={c.code}>{c.name} </span> )}  
                            </InfoListItem>
                            <InfoListItem>
                                <b>Languages</b>: {languages.map((l)=> <span key={l.nativeName}>{l.name} </span> )}  
                            </InfoListItem>
                        </InfoList>
                    </InfoBodyList>
                </InfoBody>
        </InfoTop>
       
        <InfoTagGroup>
            {borders 
                ? <span>Border Countries</span>
                : <span>There are no border countries</span>
            }
            
            <TagGroup>
                {borders 
                    && neighbours.map((b)=> <TagName onClick={()=> navigate(`/details/${b}`)} key={b}>{b} </TagName>)
                }    
            </TagGroup>
        </InfoTagGroup>
        
    
    </Wrapper>
  )
}
//Styles
const Wrapper = styled.section`
    margin-top: 3rem;


    @media(min-width: 767px){;
    }
    @media(min-width: 1024px){
        
    }
`
const InfoTop = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 25px;
    
    @media(min-width: 767px){
        flex-direction: row;
        gap: 5rem;
    }
`
const InfoBody = styled.div`
    diplay: flex;
`
const InfoTitle = styled.h5`
    color: var(--color-text);
    font-size: 30px;
    font-weight: bold;
    margin: 2rem 0;
`

const InfoImg = styled.img`
    display: block;
    max-width: 450px;
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media(min-width: 767px){
        max-width: 500px;
    }
`
const InfoBodyList = styled.div`
    display: flex;
    flex-direction: column;
    @media(min-width: 767px){
        flex-direction: row;
        gap: 5rem;
    }
`
const InfoList = styled.ul`
    list-style-type: none;
    padding: 0;
`
const InfoListItem = styled.li`
    margin-bottom: 8px;
    & b{
        font-weight: bold;
    }
`
const InfoTagGroup = styled.div`
    & span{
        font-weight: bold;
        font-size: 18px;
    }
`
const TagGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
    & :not(:last-child){
        margin-right: 10px;
    }
`
const TagName = styled.button`
    padding: .3rem 2rem;
    background: var(--color-ui-base);
    border: none;
    
    box-shadow: var(--shadow);
    color: var(--color-text);
    cursor: pointer;
    transition: all .2s ease-in-out;
    &:hover{
        box-shadow: none;
    }
    margin-bottom: 7px;
`
//------Styles
export default Info
