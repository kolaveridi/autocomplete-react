import React, { Component } from 'react';
import './AutocompleteText.css';
export default class Autocomplete extends  React.Component{
    constructor(props){
        super(props);
        
        this.state={
            suggestions:[],
            text:''
            
        }
    }
    onTextChanged=(e)=>{
        const {items}=this.props;
         const value=e.target.value;
         console.log("value",value);
         let suggestions=[];
          if(value.length>0){
            const regex= new RegExp(`${value}`,'i');
            const suggestions=items.sort().filter(v => regex.test(v));
            console.log('suggestions',suggestions);
            this.setState(()=>({suggestions,text:value}))
          }
          else{
            this.setState({
                suggestions:[],
                text:''
            });
          }
          console.log('this.state.suggestions',this.state.suggestions);
        }

        suggestionSelected=(value)=>{
            this.setState({
                text:value,
                suggestions:[]
            })
        }
          
    renderSuggestions=()=>{
        const {suggestions}=this.state;
        
        if(suggestions.length===0){
            return null;
        }
        else{

            return(
                <ul>
                {suggestions.map((item)=><li onClick={()=>this.suggestionSelected(item)}>  {item}</li>)}
               </ul> 
            );
        }
    }
    render(){
        const {text}=this.state;
        console.log("text",text);
        return(
          <div className="AutocompleteText">
               <input value={text}  onChange={this.onTextChanged} type="text">
               </input>
                {this.renderSuggestions()}
             </div>


        );
    }
}