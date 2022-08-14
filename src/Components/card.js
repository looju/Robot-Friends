import React from 'react';

const card= ({id,name,email})=> {
    return(
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow  hover-bg-dark-blue bw-2 shadow-6'>
            <img src={`https://robohash.org/${id}size=200x200`} alt='robot' />
            <div>
              <h2>{name}</h2> 
              <p>{email}</p>
            </div>
        </div>
    ) 
}
//don't forget to add curly brackets to all JSX elements
//notice that const card=(props)=> now became const card =({prop elements})=>.
// It's called destructuring and now you don't have to do {props.name} or {props.email} again. Just {email} and it still works
export default card;