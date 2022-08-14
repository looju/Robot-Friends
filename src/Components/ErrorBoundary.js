import React, { Component } from 'react';
class ErrorBoundary extends Component {
   constructor(props) {  //it's using props because it is a parent and has a child property
    super(props);
    this.state={
        error:false
    }
    
   }

   componentDidCatch(error,info){ //if any errors, it triggers
    this.setState({error:true})
   }

   render(){
        if(this.state.error){ //if true
            return <h1>Something went wrong</h1>
        }
       else{
        return this.props.children
       }
    
   }

}

export default ErrorBoundary