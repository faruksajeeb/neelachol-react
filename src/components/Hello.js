import React from 'react'

function Hello(props){
    
    return(
        <div>
            <button onClick={clickMe} className="btn btn-primary" >Click Me</button>
            <h1>Hello {props.name}</h1>
        </div>        
    );
}
function clickMe(){
    alert ("Thank you for Click Me.")
}
export default Hello