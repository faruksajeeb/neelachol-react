import React, { Component } from 'react';

class Neelachol_properties extends Component {
    componentDidMount() {
        document.title = this.props.title
    }
    render() {
        return (
            <section id="single-project" class="py-5">
                <div class="container">
                    
                    <div class="row">
                        <div class="col-md-8 col-sm-12 col-xs-12">
                            <div class="container"  >
                                <div class="row mb-3">
                                    <div class="col-md-12 single-project-title text-left  mb-5">
                                        <h1> নীলাচল <span style={{color:"#1B7ECF"}}> প্রপার্টিজ </span></h1> 
                                        {/* <p>Coming soon...</p>                    */}
                                        {/* <OwlCarousel  > */}
                                        
                                    </div>
                                </div> 
                                <div class="row">
                                <div class="carousel-container position-relative row" >                            
                                            {/* <!-- Sorry! Lightbox doesn't work - yet. --> */}                            
                                            <div id="carouselExampleControls"  class="carousel slide" data-ride="carousel">
                                                <div class="carousel-inner" >
                                                    <div class="carousel-item active" data-slide-number="0">
                                                        <img class="img-fluid"  src="images/projects/neelachol-properties/slider/1.jpg" class="d-block w-100" alt="..." data-remote="" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"></img>
                                                    </div>                                                
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <img src="images/projects/neelachol-properties-logo.jpg" class="img-fluid" alt=""></img>
                            {/* <h3>CATEGORIES</h3><hr/>
                            <p>Properties</p>
                            <h3>PREVIEW</h3><hr/>
                            <p></p>
                            <h3>3D ANIMATED PREVIEW</h3><hr/>
                            <p></p> */}
                        </div>
                    </div>     
                    
                </div>
                
            </section>
        );
    }
}

export default Neelachol_properties;