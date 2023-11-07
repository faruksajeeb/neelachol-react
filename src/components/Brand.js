import React from 'react'
import {Link} from "react-router-dom"

function Brand(){
    return(
        <div>
            <Link to="/" class="navbar-brand">
                <img src="images/neelachol-logo.jpg" alt="NEELACHOL" />
            </Link>
        </div>
    )
}
export default Brand