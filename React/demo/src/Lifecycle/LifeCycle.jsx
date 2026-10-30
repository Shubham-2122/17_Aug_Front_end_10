// life cycle only fo class component


import React, { Component } from 'react'

class LifeCycle extends Component {

    constructor() {
        super()
        this.state = {
            name : "shubham"
        }
    }
    componentDidMount() {
        console.log("Mouthinh phase")
    }

    componentDidUpdate(){
        console.log("Update phase")
    }

    componentWillUnmount(){
        console.log("Unmouting phase")
    }
    render() {



        return (
            <div>

                {/* 
        
            1) mouting : initial value 

            2) updateting : state chanage 

            3) unmouting : null value
        */}

            <h1>Name : {this.state.name}</h1>

            <button onClick={()=>this.setState({name:"ketan"})}>Change name</button>

            </div>
        )
    }
}

export default LifeCycle