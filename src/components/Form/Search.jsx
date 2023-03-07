import React from 'react'
import {IoSearch} from 'react-icons/io5'
import styled from 'styled-components'

//Styles
const InputContainer = styled.label`
    font-size: var(--fz-sm);
    background-color: var(--colot-ui-base);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;

    box-shadow: var(--shadow);
    border-radius: 6px;
    width: 100%;
    margin-bottom: 1rem;

    & IoSearch{
        margin-right: 5px;
    }

    @media(min-width: 767px){
        width: 260px;
        margin-bottom: 0;
    }
`
const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search a country...',
})`
    background: transparent;
    border: none;
    outline: none;
    margin-left: 2rem;
    color: var(--color-text);
    font-family: var(--family);
`
//---Styles
const Search = ({search, setSearch}) => {
  return (
    <InputContainer>
        <IoSearch size={'15px'} className='icon'/>
        <Input value={search} onChange={(e)=> setSearch(e.target.value)}/>
    </InputContainer>
  )
}

export default Search