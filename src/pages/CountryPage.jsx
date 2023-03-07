import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Controls from '../components/Form/Controls';
import GetService from '../API/GetService';
import List from '../components/List of Country/List';
import Card from '../components/List of Country/Card';
import MyLoader from '../UI/MyLoader';
import FetchingToValue from '../utils/FetchingToValue';
const HomePage = ({cards, setCards}) => {
  const[isLoading, setIsLoading] = useState(true);
  //Fetching Cards
      
      
      useEffect(()=>{
        if(!cards.length){
          FetchingToValue(GetService.getAll(), setCards); 
        }
      },[]);
  //------Fetching Cards
  //Filter
      const [filteredCards, setFilteredCards] = useState([]);
      useEffect(()=>{
        setFilteredCards(cards);
      },[cards])
      function CardsFilter(search, select){
        let data = [...cards]; 
        if(search){
         data =  data.filter((card)=> card.name.toLowerCase().includes(search.toLowerCase()))
        }
        if(select){
          data = data.filter((card)=> card.region.includes(select))
        }
          setFilteredCards(data);
      }
  //------Filter
  //Rouiting UseNavigate
    const navigate = useNavigate();
  return (
    <div>
         <Controls onSearch={CardsFilter}/>
         {filteredCards.length>0
         ? <List>
          {filteredCards.map((c)=>{
            const countryInfo ={
             img: c.flags.png,
             title: c.name,
             info:[
               {title:'Population', discription:c.population.toLocaleString()},
               {title:'Region', discription: c.region},
               {title:'Capital', discription: c.capital},
             ]
            }
            return <Card onClick={() =>navigate(`/details/${c.name}`) } key={c.name} {...countryInfo}/>
          })}
          </List>
          : <MyLoader/>
        }
       
    </div>
  )
}

export default HomePage