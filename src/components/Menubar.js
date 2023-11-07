import React, { Component } from 'react'
import Brand from './Brand'
import Home from './Home'
import About from './About'
import Team from './Team'
import Contact from './Contact'
import Neelachol_homes from './projects/Neelachol_homes'
import Neelachol_eco_orchard from './projects/Neelachol_eco_orchard'
import Neelachol_properties from './projects/Neelachol_properties'
import Neelachol_rain_drop_housing from './projects/Neelachol_rain_drop_housing'
import ScrollToTop from './ScrollToTop';
import Book_now from './Book_now';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Menubar extends Component{
    
    render(){
        return (
            <Router >
                <ScrollToTop />
        <section class="menu py-0 sticky-top ">
            <div class="container px-0">
                <nav class="navbar navbar-light navbar-expand-sm">
                    <Brand></Brand>
              {/* Toggler/collapsibe Button */}
                    <button class="navbar-toggler mr-3"   type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon" ></span>
                    </button>
                    {/* <!-- Links --> */}
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <Link to="/" class="nav-link"> হোম   </Link>
                        {/* <a class="nav-link" href="#">HOME</a> */}
                    </li>
                    <li class="nav-item">
                        <Link to="/about" class="nav-link"> আমাদের সম্পর্কে  </Link>
                        {/* <a class="nav-link" href="#">HOME</a> */}
                    </li>
                    {/* <li class="nav-item dropdown">
                        <Link to="/about" class="nav-link dropdown-toggle" data-toggle="dropdown"  data-hover="dropdown"> আমাদের সম্পর্কে </Link>
                        
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="">চেয়ারম্যানের বার্তা</a></li>
                            <li><a class="dropdown-item" href="">ভিশন ও মিশন </a></li>
                            <li><a class="dropdown-item" href=""> পরিচালনা পর্ষদ </a></li>
                            <li><a class="dropdown-item" href=""> Management Key Personeel</a></li>
                            <li><a class="dropdown-item" href="">বিজনেস অ্যাসোসিয়েটস</a></li>
                            <li><a class="dropdown-item" href="">অ্যাওয়ার্ড</a></li> 
                        </ul>
                    </li> */}
                
                    {/* <!-- Dropdown --> */}
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown"  data-hover="dropdown">
                        প্রকল্পসমূহ 
                        </a>
                        <ul class="dropdown-menu">
                        <li>
                            <Link to="/neelachol-homes" class="dropdown-item">নীলাচল হোমস্ </Link>
                        </li>
                        <li>
                            <Link to="/neelachol-properties" class="dropdown-item">নীলাচল প্রপার্টিজ </Link>
                        </li>
                        <li>
                            <Link to="/neelachol-eco-orchard" class="dropdown-item">নীলাচল ইকো অরচার্ড</Link>
                        </li>
                        <li>
                            <Link to="/neelachol-rain-drop-housing" class="dropdown-item">নীলাচল রেইন ড্রপ হাউজিং </Link>
                        </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <Link to="#" class="nav-link"> টীম </Link>
                        {/* <Link to="/team" class="nav-link"> টীম </Link> */}
                    </li> 
                    <li class="nav-item">
                        <Link to="/contact" class="nav-link">যোগাযোগ</Link>
                    </li>
                    </ul>
                    </div>
                </nav>
            </div>
        </section>
        {/* <Switch> */}
        

        
         <Route exact path="/">
            <Home  title="Neelacho Assest Ltd. | Home" />
          </Route>
           <Route path="/about">
            <About />
          </Route>
          {/*
          <Route path="/projects">
            <Projects />
          </Route> */}
          <Route path="/team">
            <Team  title="Neelacho Assest Ltd. | Team" />
          </Route>
          <Route path="/contact">
            <Contact  title="Neelacho Assest Ltd. | Contact"/>
          </Route>
          
          <Route path="/neelachol-homes"  >          
            <Neelachol_homes title="Neelacho Assest Ltd. | Homes" />
          </Route>
          <Route path="/neelachol-eco-orchard">          
            <Neelachol_eco_orchard  title="Neelacho Assest Ltd. | Eco Orchard" />
          </Route>
          <Route path="/neelachol-properties">          
            <Neelachol_properties  title="Neelacho Assest Ltd. | Properties" />
          </Route>
          <Route path="/neelachol-rain-drop-housing">          
            <Neelachol_rain_drop_housing  title="Neelacho Assest Ltd. | Rain Drop Housing" />
          </Route>
          <Route path="/book-now">          
            <Book_now  title="Neelacho Assest Ltd. | Book Now" />
          </Route>
        {/* </Switch> */}
        
        </Router>
        );
    }
}
export default Menubar