import './App.css';
import Filter from './components/Filter';
import Footer from './components/Footer';
import Header from './components/Header';
import House from './components/House';
import { useEffect, useState } from 'react';
import SearchResults from './components/SearchResults';
import {Routes, Route} from 'react-router-dom'; 
import SearchedHouse from './components/SearchedHouse';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {

  let [housesData,setHousesData] = useState([]);

  //useEffect to reach houses.json and send one house obj to House.js
  //we use it when we want to get information for the component once
  // useEffect(() => {
  //   console.log("in useEffect");


  //   //writing a function within a function
  //   const fetchData = async () => {
  //     let resp = await fetch('/houses.json'); //goes to the url and gives what it's supposed to give
  //     let data = resp.json();
      
  //     setHouseData(data);
  //     console.log(houseData); 
  //   }    

  //   fetchData(); 
    
  //   //write data to the state so we can use it anywhere
  // }, []);

  useEffect(() => {
    console.log('in useEffect');
    const fetchData = async ()=> {
      let resp =  await fetch('/houses.json');
      let data = await resp.json();
      //console.log(' data from json - ');
      //console.log(data);
      setHousesData(data);    
    
     // console.log('data from state');
      //console.log(housesData);
      //write the data to the state so we can use it anywhere in the component
    };
    fetchData();
  },[]);


  return (
    <div className="container-fluid">
      <Header/>
      <Filter houses={housesData}/>

      <Routes>
        <Route path="/" element={<House houseinfo={housesData[Math.floor(Math.random() * housesData.length)]}/>}/>
        <Route path="searchresults/:county" element={<SearchResults houses={housesData}/>}/>
        <Route path="searchedHouse/:id" element={<SearchedHouse houses={housesData}/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
        
      <Footer/>
    </div>
  );
}

export default App;
