import React, { Component } from 'react';

class Neelachol_rain_drop_housing extends Component {
    componentDidMount() {
        document.title = this.props.title
    }
    render() {
        return (
            <section id="single-project" class="py-5">
                <div class="container my-5">
                    <div class="row">
                        <div class="col-md-12 single-project-title text-left">
                            <h1>নীলাচল <span style={{color:"#1B7ECF"}}> রেইন ড্রপ হাউজিং</span></h1>                    
                        </div>
                    </div>         
                    <div class="row">
                        <div class="col-md-8 col-sm-12 col-xs-12">
                        <div class="container mt-5"  >
                        {/* <OwlCarousel  > */}
                            <div class="carousel-container position-relative row" >                            
                            {/* <!-- Sorry! Lightbox doesn't work - yet. --> */}                            
                            <div id="carouselExampleControls"  class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner" >
                                <div class="carousel-item active" data-slide-number="0">
                                <img class="img-fluid"  src="images/projects/neelachol-rain-drop/slider/1.jpg" class="d-block w-100" alt="..." data-remote="" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"></img>
                                </div>
                                <div class="carousel-item" data-slide-number="1">
                                <img class="img-fluid"  src="images/projects/neelachol-home/slider/2.jpg" class="d-block w-100" alt="..." data-remote="" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"></img>
                                </div>
                                <div class="carousel-item" data-slide-number="2">
                                <img class="img-fluid"  src="images/projects/neelachol-home/slider/3.jpg" class="d-block w-100" alt="..." data-remote="" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"></img>
                                </div>
                                <div class="carousel-item" data-slide-number="3">
                                <img class="img-fluid"  src="images/projects/neelachol-home/slider/4.jpg" class="d-block w-100" alt="..." data-remote="" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"></img>
                                </div>
                                <div class="carousel-item" data-slide-number="4">
                                <img class="img-fluid"  src="images/projects/neelachol-home/slider/5.jpg" class="d-block w-100" alt="..." data-remote="" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"></img>
                                </div>
                                <div class="carousel-item" data-slide-number="5">
                                <img class="img-fluid"  src="images/projects/neelachol-home/slider/6.jpg" class="d-block w-100" alt="..." data-remote="" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"></img>
                                </div>                        
                            </div>
                            </div>
                            
                            {/* <!-- Carousel Navigation --> */}
                            <div id="carousel-thumbs" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <div class="row mx-0">
                                    <div id="carousel-selector-0" class="thumb col-4 col-sm-2 px-1 py-2 " data-target="#carouselExampleControls" data-slide-to="0">
                                        <img src="images/projects/neelachol-home/slider/thumbnail/1.jpg" class="img-fluid" alt="..."></img>
                                    </div>
                                    <div id="carousel-selector-1" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#carouselExampleControls" data-slide-to="1">
                                        <img src="images/projects/neelachol-home/slider/thumbnail/2.jpg" class="img-fluid" alt="..."></img>
                                    </div>
                                    <div id="carousel-selector-2" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#carouselExampleControls" data-slide-to="2">
                                        <img src="images/projects/neelachol-home/slider/thumbnail/3.jpg" class="img-fluid" alt="..."></img>
                                    </div>
                                    <div id="carousel-selector-3" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#carouselExampleControls" data-slide-to="3">
                                        <img src="images/projects/neelachol-home/slider/thumbnail/4.jpg" class="img-fluid" alt="..."></img>
                                    </div>
                                    <div id="carousel-selector-4" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#carouselExampleControls" data-slide-to="4">
                                        <img src="images/projects/neelachol-home/slider/thumbnail/5.jpg" class="img-fluid" alt="..."></img>
                                    </div>
                                    <div id="carousel-selector-5" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#carouselExampleControls" data-slide-to="5">
                                        <img src="images/projects/neelachol-home/slider/thumbnail/6.jpg" class="img-fluid" alt="..."></img>
                                    </div>                                    
                                </div>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carousel-thumbs" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carousel-thumbs" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                            </div>
                            
                            </div> 
                            {/* </OwlCarousel> */}
                            </div> 
                            <div class="row py-5">
                                <div class="col-md-12 text-left">
                                    <h3 class="my-3"> প্রকল্পের বর্ণনা  </h3>
                                    <p class="text-justify">

                                    </p>
                                    <h3 class="my-3"> প্লট লে-আউট  </h3>
                                    <p class="text-justify">
                                        <img class="img-fluid w-100" src="images/projects/neelachol-rain-drop/plot-layout.png" alt=""></img>
                                    </p>                                
                                </div>
                            </div>
                        </div>
                       
                        <div class="col-md-4">
                        <img src="images/projects/rain-drop-housing.jpg" class="img-fluid" alt=""></img>
                        <h5 class="mt-5">ক্যাটেগরি</h5><hr/>
                        <h3 class="pb-5">হাউজিং</h3>
                        {/* <h3>PREVIEW</h3><hr/>
                        <p></p>
                        <h3>3D ANIMATED PREVIEW</h3><hr/>
                        <p></p> */}
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                <h3 class="my-5"> প্রকল্পের অবস্থান </h3>                                
                {/* <div id="googleMap" style={{width:"100%",height:"400px"}}> </div>    */}
                {/* <!--Google map--> */}
                <div id="map-container-google-9" class="z-depth-1-half map-container-5" style={{height: "300px"}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3650.724000617034!2d90.4014314!3d23.7928407!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7825a374183%3A0x876b0c5a48954bcc!2sNeelachol%20Assets%20Limited!5e0!3m2!1sen!2sbd!4v1600847199763!5m2!1sen!2sbd" width="600" height="450" frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
                {/* <!--Google Maps--> */}
                </div>
                
            </section>
        );
    }
}

export default Neelachol_rain_drop_housing;