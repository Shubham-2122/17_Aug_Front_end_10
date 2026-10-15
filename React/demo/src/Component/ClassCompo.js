// component : block of code when need simple use it. resue ,reduce
// class vs function
// class : Component
// render : return html


import React, { Component } from "react";

class ClassCompo extends Component{
    render(){
        return(
            <div>
                <h1>hello this class component</h1>
            </div>   
        )
    }
}

export default ClassCompo

// import React, { Component } from 'react'

// class ClassCompo extends Component {
//   render() {
//     return (
//       <div>
//         RCE 
//       </div>
//     )
//   }
// }

// export default ClassCompo

// import React, { Component } from 'react'

// export default class ClassCompo extends Component {
//   render() {
//     return (
//       <div>ClassCompo</div>
//     )
//   }
// }
