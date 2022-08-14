import React from 'react';
import Card from './card';


const Cardlist=({robots})=>{
  const cardarrayloop=robots.map((user,i)=>{
    return  <Card  key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
  })//when using map, you can only map after importing that component. You can use any keyword to represent the array of what you want to loop through(eg i can cahnge 'user' to 'username' or 'house' and it still works). You have to put it together with i if you wish to use i or any element you put it with                         
    
  
    return(
        <div>
        {cardarrayloop}
        </div>
    )
}
export {Cardlist} // i could always use export default CardList and import it the normal way
