import React from "react";


const scroll = (props)=>{
return(
    <div style={{overflowY:'scroll bg-dark', height:'900px'}}> {props.children} </div>
 )
}

export default scroll