import React, { Component }  from 'react';
import './Hello.css';
import Learn from './learn.js';
class Hello extends Component {
render() {
    return(
        <div className='tc f1'>  
             <h1>Hello World</h1>
             <p>This is react</p>
             {this.props.greeting}
              <Learn name={'i am'+' react'}/>
        </div>


       
    )
   //we can use a className that acts like css just like bootstrap. Check out tachyons style docs for their docs  
   //Props is defined in the parent element. 'this' refers to the Hello component but using Hello directly gives an error. 'greeting' is the name of the prop 
}
}

//the above class can also  be re-written as
const Hello=(props)=>{
    return(
    <div className='tc f1'>  
        <h1>Hello World</h1>
        <p>This is react</p>
        {props.greeting}
         <Learn name={'i am'+' react'}/>
   </div>

    )
}
//the class above has now been converted to a function. We don't use 'this' because it is no more a class. We simply just make it a parameter in the function
export default Hello
