import React, { Component } from 'react';
import {Cardlist} from '../Components/Cardlist';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/scroll';


import './App.css';
class App extends  Component {
constructor(){
  super()
  this.state={
    robots:[ ],
    searchfield:''
  }
} //It's the syntax for calling the state you have defined. 
//A state is usually created between the components that wish to interact
//State is an object that describes your application. They are usually used in the parent component which passes state to the children

componentDidMount(){ //this is called after render in the react lifecycle. But since it affects the state and changes the DOM, render is called after it again to repaint the virtual DOM 
console.log('heyyy')
fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>response.json())

.then((users)=>{this.setState({robots:users})})
}

onSearch = (event) => {
 
  this.setState({searchfield: event.target.value});// this is so that the searchfield's original empty string is equivalent to the value of the event(which would be the value from the user input). We can't use something like this.state.searchfield. This.setstate is the standard
}
//onSearch=()=>{}. This syntax is only used when we are creating a method of our own. This is so that 'this' refers to the state defined by the parent 
//this.state.robots.filter simply runs a function with robots(as parameter) to return the name of the robots in lowercase if the searchfield value tallies the robot name
//remember that searchfield has been specified to be the value of the event
//includes() is used to search strings for a particular substring and returns true or false depending on if the string is found
  render(){
    const filterBots=this.state.robots.filter((robots)=>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    // console.log(filterBots)
    if(!this.state.robots){
      <h1>Please wait...</h1>
    }
    else{
      return(
      
        <div className='tc'>
          <h1 className='f1'>ROBOTFRIENDS</h1> 
          <Searchbox  onSearch={this.onSearch}/>
          <Scroll>
          <Cardlist  robots={filterBots}/>  
          </Scroll>
         
        </div>
       
         )
    }
    
  }
}
//searchbox now has a property which is the onsearch function.
export default App
