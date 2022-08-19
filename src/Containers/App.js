import React, {useState,useEffect } from 'react';
import {Cardlist} from '../Components/Cardlist';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/scroll';
import ErrorBoundary from '../Components/ErrorBoundary';

const App=()=>{
    const[robots,setRobots]=useState([])
    const[searchfield,setSearchfield]=useState('')

 useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{response.json()})
    .then((user)=>{setRobots(user)})
},[]) 
const onSearch=(event)=>{
 setSearchfield(event.target.value);
}
const filterBots=robots.filter((robots)=>{
    return robots.name.toLowerCase().includes(searchfield.toLowerCase())
  })
  console.log(robots,searchfield);
  // console.log(filterBots)
  if(!robots.length){
   return <h1>Please wait...</h1>
  }
  else{
    return(
    
      <div className='tc'>
        <h1 className='f1'>ROBOTFRIENDS</h1> 
        <Searchbox  onSearch={onSearch}/>
        <Scroll>
          <ErrorBoundary>
          <Cardlist  robots={filterBots}/> 
          </ErrorBoundary> 
        </Scroll>
       
      </div>
     
       )
  }
  
}

export default App




