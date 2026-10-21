// state : it's simple of vriable 
// state : same file use 
// state : it chnage name
// class and function 
// class : this.state : defined 
// class state :  this.setState() : change name 
// Events use
// class ; as object created done

import React, { Component } from 'react'
import ImageData from './ImageData';

class ClassState extends Component {
    constructor(){
        super();
        this.state = {
            name : "het",
            couter : 0,
            isImage : true
        }
    }
  render() {
    // console.log(this.state)
    return (
      <div>
        <h1>Name : {this.state.name}</h1>

        <button onClick={()=>{this.setState({name:"shubham"})}}>Chnage Name</button>
        <button onClick={()=>{this.setState({name:"sujal"})}}>Chnage Name 2</button>

        <h1>Count : {this.state.couter}</h1>
        {/* sum = sum + 1 */}
        <button onClick={()=>{this.setState({couter : this.state.couter + 1 })}}>Increment</button>
        <button onClick={()=>{this.setState({couter : this.state.couter - 1 })}}>Decrement</button>
        <button onClick={()=>{this.setState({couter : 0 })}}>Reset</button>
        <hr />
        <br />

        <button onClick={()=>this.setState({isImage : false})}>Hide</button>
        <button onClick={()=>this.setState({isImage : true})}>Show</button>
        <button onClick={()=>this.setState({isImage : !this.state.isImage})}>Toggle</button>

        {
            this.state.isImage ? <ImageData /> : false
        }

      </div>
    )
  }
}

export default ClassState