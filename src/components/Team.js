import React, { Component } from 'react';
// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Team extends Component {
    componentDidMount() {
        document.title = this.props.title
    }
    render() {
        return (
            <section id="team" class='bg-dark'>

                <div class="container  py-5 ">
                    <div class="row agent-title pb-5">
                        <div class="col-md-12 team-title col-sm-12 text-center">
                            <h1> আমাদের<span> টীম </span></h1>                        
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 p-2">
                                <img src="images/team/1.png" alt="image" /> 
                                <div class="team-member-label p-3">
                                    <h4>MD Kamrul Hasan</h4>
                                    <span>Sales Executive</span><br/> 
                                    <span class="mobile">+880 1733811596</span>                          
                                </div>
                        </div>
                        <div class="col-md-4 p-2">
                                <img src="images/team/2.png" alt="image" /> 
                                <div class="team-member-label p-3">
                                    <h4>MD Kamrul Hasan</h4>
                                    <span>Sales Executive</span><br/> 
                                    <span class="mobile">+880 1733811596</span>                          
                                </div>
                        </div>
                        <div class="col-md-4 p-2">
                                <img src="images/team/3.png" alt="image" /> 
                                <div class="team-member-label p-3">
                                    <h4>MD Kamrul Hasan</h4>
                                    <span>Sales Executive</span><br/> 
                                    <span class="mobile">+880 1733811596</span>                          
                                </div>
                        </div>
                        <div class="col-md-4 p-2">
                                <img src="images/team/4.png" alt="image" /> 
                                <div class="team-member-label p-3">
                                    <h4>MD Kamrul Hasan</h4>
                                    <span>Sales Executive</span><br/> 
                                    <span class="mobile">+880 1733811596</span>                          
                                </div>
                        </div>
                        <div class="col-md-4 p-2">
                                <img src="images/team/5.png" alt="image" /> 
                                <div class="team-member-label p-3">
                                    <h4>MD Kamrul Hasan</h4>
                                    <span>Sales Executive</span><br/> 
                                    <span class="mobile">+880 1733811596</span>                          
                                </div>
                        </div>
                        <div class="col-md-4 p-2">
                                <img src="images/team/6.png" alt="image" /> 
                                <div class="team-member-label p-3">
                                    <h4>MD Kamrul Hasan</h4>
                                    <span>Sales Executive</span><br/> 
                                    <span class="mobile">+880 1733811596</span>                          
                                </div>
                        </div>
                    </div>
                   
                    
                </div>
            </section>
        );
    }
}

export default Team;

