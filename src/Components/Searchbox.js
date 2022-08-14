import React from 'react';

const Searchbox = (props) => {

return(
   <div className="pa3">
    <input type="search" placeholder="Search robots" className='pa3 ba b--blue bg-lightest-blue' onChange={props.onSearch}></input>
   </div> 
//onChange is an event listener just like in html when we did onclick. Onchange happens when the value of an element has been changed
//Onchange then runs the onsearch function defined in App.js 

)   
}
export default Searchbox