import React, {useState} from 'react'
import './App.css';
import Header from './components/Header';
import Main from './components/Main.jsx';
import {Routes, Route} from 'react-router-dom'
import CountryPage from './pages/CountryPage';
import ErrorPage from './pages/ErrorPage';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';

function App() {
  const [cards, setCards] = useState([]);
  return (
    <div className="App">
      <Header/>
      <Main>
       <Routes>
         <Route path='/country-react' element={<HomePage/>}/>
         <Route path='/countries' element={<CountryPage cards={cards} setCards={setCards}/>}/>
         <Route path='/details/:id' element={<DetailsPage/>}/>
         <Route path='/error' element={<ErrorPage/>}/>
       </Routes>
      </Main>
    </div>
  );
}

export default App;
