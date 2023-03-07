import React, { useEffect, useState } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import GetService from '../API/GetService';
import FetchingToValue from '../utils/FetchingToValue';
import {MyButton} from '../components/Button';
import {IoArrowBackOutline} from "react-icons/io5";
import Info from '../components/Info'
import MyLoader from '../UI/MyLoader'
const DetailsPage = () => {
  const navigate = useNavigate();
  const [country, setCountry] = useState([]);
    let {id} = useParams();
    useEffect(()=>{
      FetchingToValue(GetService.getByName(id), setCountry)
    },[id])
    
  return (
    <div className="">
      <MyButton  onClick={()=> navigate(-1)}><IoArrowBackOutline size={'12px'}/> Go back</MyButton>
      {country.length >0 
        ? country.map((c)=>{
         const InfoCountry = {
           img: c.flags.png,
           name: c.name,
           borders: c.borders,
           topLevelDomain:c.topLevelDomain,
           currencies:c.currencies,
           languages:c.languages, 
           infoList:[
             {title: 'Native Name', discription: c.nativeName},
             {title: 'Population', discription: c.population.toLocaleString()},
             {title: 'Region', discription: c.region},
             {title: 'Sub Region', discription: c.subregion},
             {title: 'Capital', discription: c.capital},
           ],
         }
         return <Info key={c.name} {...InfoCountry}/>
       })
        : <MyLoader/>
      
    }      
    </div>
  )
}

export default DetailsPage