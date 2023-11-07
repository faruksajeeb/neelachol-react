import React, { Component } from 'react';

class Neelachol_homes extends Component {
    componentDidMount() {
        document.title = this.props.title
    }
    render() {
        return (
            <section id="single-project" class="py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 single-project-title text-left  mb-5">
                            <h1> নীলাচল <span style={{color:"#1B7ECF"}}> হোমস্ </span></h1>                    
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
                                <img class="img-fluid"  src="images/projects/neelachol-home/slider/1.jpg" class="d-block w-100" alt="..." data-remote="" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"></img>
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
                                <h3 class="my-3"> প্রকল্পের বর্ণনা </h3>
                                <p class="text-justify">
                                নীলাচল হোমস্ প্রকল্পটি ঢাকার সন্নিকটে কুড়িল ফ্লাইওভার থেকে ৩০০ ফুট
                                প্রশস্ত রাস্তা দিয়ে মাত্র ৯ কিঃ মিঃ পথ এবং ঢাকার অদূরে টঙ্গি হতে মাত্র ০৮ কিঃ
                                মিঃ দূরে ঢাকা গাজীপুর ১৮০ ফুট প্রশস্থ বাইপাস রোডের পার্শ্ববর্তী স্থানে গ্রামঃ
                                রাথুরা, ইউনিয়নঃ নগরী, থানাঃ কালীগঞ্জ, জেলাঃ গাজীপুর ছুটি রিসোর্ট এবং রাজউক
                                পূর্বাচল ৩০ নং সেক্টরের সন্নিকটে জলাশয় এবং বন্যা প্রবাহ মুক্ত সবুজ বনানী
                                ঘেরা পরিবেশে অবস্থিত । এখান থেকে অতি সহজেই আপনি ঢাকা বিমানবন্দর ,
                                উত্তরা , গুলশান, মতিঝিল বা ঢাকার যে কোনো অংশে অফিস / যাতায়াত করতে পারবেন
                                । প্রকল্পটি দক্ষিন এশিয়ার সর্ববৃহৎ আবাসন প্রকল্প রাজউক পূর্বাচল নতুন
                                উপশহরের সন্নিকটে হওয়ায় ভবিষ্যৎ সচিবালয় , প্রধানমন্ত্রীর কার্যালয় , ঢাকা
                                বিশ্ববিদ্যালয় ২য় ক্যাম্পাস , রাজউক অফিস ,মেডিকেল কলেজ ,হাসপাতাল ,জাতীয়
                                ক্রীড়া কমপ্লেক্স , ওয়ার্ল্ড ব্যাংক ,এশিয়ান ডেভেলপমেন্ট ব্যাংক ,বিদেশী দূতাবাস
                                ,খেলার মাঠ , মসজিদ ,স্কুল ,কলেজসহ নানা জাতীয় ও আন্তর্জাতিক অবকাঠামোর
                                কাছে তৈরি হবে আপনার স্বপ্নের নিবাস ।
                                </p>
                                <h5 class="text-bold">প্রকল্পের নাগরিক সুযোগ সুবিধাঃ</h5>
                                <ul>
                                    <li>নির্স্কন্তক ও নিষ্কণ্টক জমির নিশ্চয়তা ।</li>
                                    <li>একটি পরিবেশ বান্ধব সবুজে ঘেরা একটি আদর্শ নগরী হবে আমদের নীলাচল হোমস।</li>
                                    <li>প্রকল্পে থাকবে খেলার মাঠ, স্কুল – কলেজ , মসজিদ, মাদ্রাসা, হাসপাতাল,
মার্কেট ও কবরস্থান।</li>
                                    <li>প্রকল্পের ভিতরে থাকবে সর্বনিম্ম ২৫ ফুট থেকে সর্বচ্চো ৪০ ফুট প্রসস্ত
রাস্তা।</li>
                                    <li>স্থপতি, পরিবেশবিদ ও শহর পরিকল্পনাবিদ দিয়ে প্রকল্পটির পরিকল্পনা করা
হয়েছে।</li>
                                    <li>প্রকল্পটিতে থাকবে নিজস্ব বিদ্যুৎ উৎপাদন ব্যবস্থা যা সার্বক্ষণিক বিদ্যুৎ
সরবরাহ নিশ্চিত করবে।</li>
                                    <li>বুকিং মানি ডাউন পেমেন্ট ছাড়া কিস্তির টাকায় প্লট বুকিং এর সুবিধা। ( শর্ত
প্রযোজ্য )</li>
                                    <li>নির্দিষ্ট মেয়াদে প্লট পাওয়ার গ্যারান্টি ।</li>
                                    <li>এখনই বাড়ি করার বা যেকোনো বাণিজ্যিক প্রতিষ্ঠান করার জন্য রয়েছে ভরাটকৃত
রেডি প্লটের সুযোগ ।</li>
                                    <li>আমাদের প্রকল্পের জমির মূল্য বাড়ছে প্রতি ২ বছরে দ্বিগুণ করে।</li>
                                </ul>
                                <h5 class="text-bold">প্লট ক্রয়ে দীর্ঘ মেয়াদী কিস্তির সুবিধাঃ</h5>
                                <p  class="text-justify">আমাদের প্রকল্পে রয়েছে ৬০ হতে ৭২ মাসের দীর্ঘ কিস্তির সুবিধা । এই সুবিধা
নিঃসন্দেহে নিম্মমধ্যবিত্তদের জন্য অপূর্ব সুযোগ বয়ে আনবে বলে আমাদের বিশ্বাস</p>
                                <p>
                                # গ্রাহকগণ পর পর ৩ টি কিস্তির (মাসিক হিসেবে) টাকা পরিশোধ করতে ব্যর্থ
হইলে কন প্রকার শর্ত ছাড়া তাৎক্ষনিক কোম্পানি তার প্লটের বরাদ্দ পত্র বাতিল
করার পূর্ণ অধিকার সংরক্ষণ করেন।
                                </p>
                                <p  class="text-justify">
                                # গ্রাহকগণ তাহার ইচ্ছানুযায়ী যে কোন সময়ে অত্র প্লটের বরাদ্দ পত্র বাতিলের
আবেদন করিতে পারিবেন অথবা তাহার কিস্তির (মাসিক হিসেবে ) টাকা সময়মতো
পরিশোধে ব্যর্থ হলে কোম্পানি তার প্লটের বরাদ্দ পত্র বাতিল করার পূর্ণ অধিকার
সংরক্ষণ করেন তবে শর্ত থাকে যে ৩৬ মাসের পূর্বে বরাদ্দ পত্র বাতিল করিতে
চাইলে ডকুমেন্টেশন ও সার্ভিস চার্জ বাবদ পরিশোধিত মূল্যের উপর ১০% হারে
চার্জ কর্তন করা হবে। বাকি টাকা প্লটের বরাদ্দ পত্র আবেদনের তারিখ হইতে ৬
(ছয়) মাস পর কিস্তিতে প্রদান করা হইবে।
                                </p>
                                <p class="text-justify">
                                আপনি যদি মনে করেন , এখানে বিনিয়োগ করা প্রয়োজন , সেক্ষেত্রে আপনি
প্রকল্প ভিজিট করে পছন্দ হলে বিনিয়োগ করতে পারেন । আমরা আপনাকে প্রকল্পে
ভিজিট এর সুযোগ করে দিব । আপনি বিদেশে বসবাসরত হলেও সদেশে আপনার কোন
সহকর্মী বা আত্মীয়স্বজনকে দিয়েও প্রকল্প ভিজিট করাতে পারেন । ধন্যবাদ !
                                </p>

                                <h3 class="mt-5">প্রকল্পের অবস্থান</h3>
                                
                                {/* <div id="googleMap" style={{width:"100%",height:"400px"}}> </div>    */}
                                {/* <!--Google map--> */}
                                <div id="map-container-google-9" class="z-depth-1-half map-container-5" style={{height: "300px"}}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58384.92482686636!2d90.4739027481347!3d23.852081141939163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755cbe13e12ca1b%3A0xe440738bb6817d87!2sPurbachal%20New%20Town!5e0!3m2!1sen!2sbd!4v1600667339563!5m2!1sen!2sbd" width="600" height="450" frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                  </div>
                                {/* <!--Google Maps--> */}
                                </div>
                            </div>
                            <div class="row py-5">
                                <h3 class="my-5"> লেআউট প্লান  </h3>
                                <p class="text-justify">
                                       <img src="images/projects/neelachol-home/layout_plan.png"></img> 
                                </p>
                            </div>
                        </div>
                       
                        <div class="col-md-4">
                        <img src="images/projects/neelachol-home/logo.jpg" class="img-fluid" alt=""></img>
                        <h3>CATEGORIES</h3><hr/>
                        <p>Homes</p>
                        <h3>লোকেশন ম্যাপ </h3><hr/>
                        <p> 
                           <img src="images/projects/neelachol-home/location_map.jpg" class="img-fluid" alt=""></img>
                        </p>
                        <h3>3D ANIMATED PREVIEW</h3><hr/>
                        <p></p>
                        </div>
                    </div>
                </div>
                
            </section>
        );
    }
}

export default Neelachol_homes;