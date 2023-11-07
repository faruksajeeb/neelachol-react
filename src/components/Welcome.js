import React, { Component } from 'react'

class Welcome extends Component{
    clickMe(a){
        alert(a)
    }
    render(){
    return <div>
            <button className="btn btn-danger" onClick={this.clickMe.bind(this,"From bind")}>Click Me Class</button>
            <h1>{this.props.name}</h1>
        </div>
    
    }
}
export default Welcome