import React from 'react'

import {Route,Link, Router} from "react-router-dom";


function Projects(){
    return(
        <section id="projects">
            <div class="container py-5">
                <div class="row mb-5">
                    <div class="col-md-12 text-center">
                        <div class="project-title">
                            <h1>আমাদের <span> প্রকল্পসমূহ </span></h1>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 col-sm-12 col-xs-12 project-single">
                        <a href="">                    
                        <div class="card my-3" >
                            <img class="card-img-top img-fluid" src="images/projects/neelachol-homes-logo.jpg" alt="Card image" />
                            <div class="project-overlayer"></div>
                            
                                <Link to="/neelachol-homes" class="btn btn-default at-project-btn">
                                    View Details
                                </Link>                                                     
                            
                            {/* <a  href="project.html" role="button">View Details</a> */}
                            <div class="card-body">
                            <h4 class="card-title">নীলাচল হোমস্</h4>
                            </div>
                        </div>
                    </a>
                    </div>
                    <div class="col-md-3 col-sm-12 col-xs-12 project-single">
                    <a href="">  
                        <div class="card my-3" >
                            <img class="card-img-top img-fluid" src="images/projects/neelachol-echo-orchard.jpg" alt="Card image" />
                            <div class="project-overlayer"></div>
                            <Link to="/neelachol-eco-orchard" class="btn btn-default at-project-btn">
                                    View Details
                            </Link> 
                            {/* <a class="btn btn-default at-project-btn" href="project.html" role="button">View Details</a> */}
                            <div class="card-body">
                            <h4 class="card-title">নীলাচল ইকো অর্চারড</h4>
                            </div>
                        </div>
                    </a>
                    </div>
                    <div class="col-md-3 col-sm-12 col-xs-12 project-single">
                    <a href="">  
                        <div class="card my-3" >
                            <img class="card-img-top img-fluid" src="images/projects/neelachol-properties-logo.jpg" alt="Card image" />
                            <div class="project-overlayer"></div>
                            <Link to="/neelachol-properties" class="btn btn-default at-project-btn">
                                    View Details
                            </Link> 
                            {/* <a class="btn btn-default at-project-btn" href="project.html" role="button">View Details</a> */}
                            <div class="card-body">
                            <h4 class="card-title">নীলাচল প্রপার্টিজ </h4>
                            </div>
                        </div>
                    </a>
                    </div>
                    <div class="col-md-3 col-sm-12 col-xs-12 project-single">
                    <a href="">  
                        <div class="card my-3" >
                            <img class="card-img-top img-fluid" src="images/projects/rain-drop-housing.jpg" alt="Card image" />
                            <div class="project-overlayer"></div>
                            <Link to="/neelachol-rain-drop-housing" class="btn btn-default at-project-btn">
                                    View Details
                            </Link> 
                            {/* <a class="btn btn-default at-project-btn" href="project.html" role="button">View Details</a> */}
                            <div class="card-body">
                            <h4 class="card-title">  নীলাচল রেইন ড্রপ হাউজিং </h4>
                            </div>
                        </div>
                    </a>
                    </div>
                </div>
                
            </div>
        </section>
    )
}
export default Projects