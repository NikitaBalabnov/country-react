import React, { useEffect, useState } from 'react'
import { CustomSelect } from './CustomSelect';
import Search from './Search'
import styled from 'styled-components'

//Styles
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media(min-width: 767px){
        flex-direction: row;
        justify-content: space-between;
    }
`
//----Styles

const Controls = ({onSearch}) => {
    const [search, setSearch] = useState(''); 
    const [select, setSelect] = useState('');
    const options = [
        {value:'Africa', label:'Africa'},
        {value:'America', label:'America'},
        {value:'Asia', label:'Asia'},
        {value:'Europe', label:'Europe'},
        {value:'Oceania', label:'Oceania'},
    ];
    useEffect(()=>{
      const regionValue = select?.value || '';  
      onSearch(search, regionValue);
    },[search, select])
  return (
    <Wrapper>
       <Search search={search} setSearch={setSearch}></Search> 
       <CustomSelect value={select} onChange={setSelect} options={options} placeholder={'Filter by rigion...'} isClearable isSearchable={false}/>
    </Wrapper>
  )
}

export default Controls