import React from 'react'
import {Route,Link, Router} from "react-router-dom";

function Call(){
    return(
        <section id="call-section ">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6 text-right py-5 at-call-left"> 
                        <div class="at-inside-Call pr-5 my-5">
                            <h3>বুক করুন</h3>

                            <h2>আপনার স্বপ্নের বাড়িটি </h2>
                           {/* <Link to="/book-now" class="btn btn-lg btn-light ">
                                 বুক করুন
                            </Link>  */}
                            
                        </div>
                    </div>
                    <div class="col-md-6 text-left py-5 at-call-right">
                        <div class="at-Call-right-inside pl-5 my-5">
                            {/* <h2>We are ready to receive your call</h2> */}
                            <h2>  বিস্তারিত জানতে কল করুন </h2>
                            <div class="at-short-line"></div>
                            <h3>02-9820405, 02-41081710</h3>
                        </div>
                    </div>            
                </div>
            </div>
        </section>
    )
}
export default Call 