import React, { Component } from 'react';
export default class Hideabletext extends React.Component{
  
    constructor(props){
        super(props);
        this.state={
            isHidden:false
        };

    }
    toggleisHidden=()=>{
        this.setState((currentState)=>({
             isHidden:!currentState.isHidden
        }));
    }
    render(){
       return(

        <div> 
            <button onClick={()=>this.toggleisHidden()} >Toggle</button>
             { !this.state.isHidden && this.props.text}
            </div>

       );

    }
}