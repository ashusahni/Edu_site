import React from "react";
import "./App.css";
import { Component } from "react";


class ErrorBoundary extends React.Component{
  constructor (props){
    super(props)
    this.state= {hasError: true}
  }

  static getDerivedStateFromError(error){
    return {hasError :false}
  }

  componentDidCatch(error, info){
    console.log('error caught:', error, info)
  }
  render(){
    if(this.state.hasError){
      return <h2>Somethhin went wrong</h2>
    }
   return this.props.children
  }

}

const App = () => {
  return (
    <div>
      <ErrorBoundary>
  <Card1/>
      </ErrorBoundary>

  <Card2/>
    </div>



  )
}

const Card1=()=>{
 
  
  return(
    <div style={{background:"blue",color:"white" , borderRadius:20, padding: 20, margin:20}}>
      <h3> card to use error handling</h3>
      <p>shotty got let me crush</p>
    </div>
  )
}

const Card2=()=>{
  return(
    <div style={{background:"blue",color:"white" , borderRadius:20, padding: 20, }}>
      <h3>card for tthe template for cheking</h3>
    </div>
  )
}




export default App;
