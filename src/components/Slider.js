import React from 'react'

function Slider(){
    return(
        <section id="slider-section">
            <div class="wrapper">            
                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                    <div class="carousel-item active item">
                        <img src="images/slider/1.jpg" class="d-block w-100" alt="..."/>
                        <div class="animated-title">
                            <div class="text-top">
                            <div>
                                {/* <h1>Get your dream home from</h1> */}
                                <h1 style={{fontSize:'35px'}}> আপনার স্বপ্নের বাড়ীটি পেতে আসুন </h1>
                                {/* <!-- <span>apple's design</span> --> */}
                            </div>
                            </div>
                            <div class="text-bottom">
                            <div>
                                {/* <span>NEELACHOL</span> */}
                                <span>নীলাচলে </span>
                            </div>
                            </div>
                        </div>
                        <div class="carousel-caption d-none d-md-block">
                            {/* <!-- <h5>Get your dream home from </h5> --> */}                        
                    </div>
                    </div>
                    <div class="carousel-item item">
                        <img src="images/slider/2.jpg" class="d-block w-100" alt="..."/>
                        <div class="animated-title">
                            <div class="text-top">
                            <div>
                                {/* <h1>We know your</h1> */}
                            <h1>আমরা জানি আপনার </h1>
                            
                                {/* <!-- <span>apple's design</span> --> */}
                            </div>
                            </div>
                            <div class="text-bottom">
                            <div><span>স্বপ্নগুলি </span></div>
                            </div>
                        </div>
                        <div class="carousel-caption d-none d-md-block">
                        {/* <!-- <h5>We know your <span>dreams</span></h5>                       --> */}
                        </div>
                    </div>
                    <div class="carousel-item item">
                        <img src="images/slider/3.jpg" class="d-block w-100" alt="..."/>
                        <div class="animated-title">
                            <div class="text-top">
                            <div>
                                <h1>হোক স্বপ্নের বিনিয়োগ</h1>
                                {/* <!-- <span>apple's design</span> --> */}
                            </div>
                            </div>
                            <div class="text-bottom">
                            <div><span> নীলাচলে </span></div>
                            </div>
                        </div>
                        <div class="carousel-caption d-none d-md-block">
                        {/* <!-- <h5>Get your <span>dream home</span> today</h5> --> */}                        
                        </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Slider