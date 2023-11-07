import React, { Component } from 'react';
const sectionBackgroundImage = {
    backgroundImage:"url('../images/projects/neelachol-eco-orchard/background.png')",
    backgroundRepeat: "no-repeat",
    backgroundPositionY: "bottom"
}
const topSectionBackgroundImage = {
    backgroundImage:"url('../images/projects/neelachol-eco-orchard/mango-tree.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right bottom"
}
class Neelachol_eco_orchard extends Component {
    componentDidMount() {
        document.title = this.props.title
    }
    
    render() {
        return (
            <section id="single-project" class="py-5" style={sectionBackgroundImage}>
                <div class="container-fluid" style={topSectionBackgroundImage}>
                <div class="container" >
                            
                    <div class="row ">
                        <div class="col-md-8 col-sm-12 col-xs-12">
                        <div class="container "  >
                        <div class="row">
                        <div class="col-md-12 single-project-title text-left mb-5">
                            <h1> নীলাচল <span style={{color:"#EF3924"}}>ইকো</span> <span style={{color:"#F67A24"}}> অরচার্ড</span> <span style={{color:"#FCAE18"}}> </span></h1>                    
                        </div>
                    </div> 
                        {/* <OwlCarousel  > */}
                            <div class="carousel-container position-relative row" >                            
                            {/* <!-- Sorry! Lightbox doesn't work - yet. --> */}                            
                            <div id="carouselExampleControls"  class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner" >
                                <div class="carousel-item active" data-slide-number="0">
                                    <img class="img-fluid"  src="images/projects/neelachol-eco-orchard/slider/4.jpg" class="d-block w-100" alt="..." data-remote="" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"></img>
                                </div>
                                <div class="carousel-item " data-slide-number="1">
                                <img class="img-fluid"  src="images/projects/neelachol-eco-orchard/slider/1.jpg" class="d-block w-100" alt="..." data-remote="" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"></img>
                                </div>
                                <div class="carousel-item" data-slide-number="2">
                                <img class="img-fluid"  src="images/projects/neelachol-eco-orchard/slider/2.jpg" class="d-block w-100" alt="..." data-remote="" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"></img>
                                </div>
                                <div class="carousel-item" data-slide-number="3">
                                <img class="img-fluid"  src="images/projects/neelachol-eco-orchard/slider/3.jpg" class="d-block w-100" alt="..." data-remote="" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"></img>
                                </div>
                                
                                <div class="carousel-item" data-slide-number="4">
                                <img class="img-fluid"  src="images/projects/neelachol-eco-orchard/slider/5.jpg" class="d-block w-100" alt="..." data-remote="" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"></img>
                                </div>
                                <div class="carousel-item" data-slide-number="5">
                                <img class="img-fluid"  src="images/projects/neelachol-eco-orchard/slider/6.jpg" class="d-block w-100" alt="..." data-remote="" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"></img>
                                </div>                        
                            </div>
                            </div>
                            
                            {/* <!-- Carousel Navigation --> */}
                            <div id="carousel-thumbs" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <div class="row mx-0">
                                    <div id="carousel-selector-0" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#carouselExampleControls" data-slide-to="0">
                                        <img src="images/projects/neelachol-eco-orchard/slider/thumbnail/4.jpg" class="img-fluid" alt="..."></img>
                                    </div>
                                    <div id="carousel-selector-1" class="thumb col-4 col-sm-2 px-1 py-2 " data-target="#carouselExampleControls" data-slide-to="1">
                                        <img src="images/projects/neelachol-eco-orchard/slider/thumbnail/1.jpg" class="img-fluid" alt="..."></img>
                                    </div>
                                    <div id="carousel-selector-2" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#carouselExampleControls" data-slide-to="2">
                                        <img src="images/projects/neelachol-eco-orchard/slider/thumbnail/2.jpg" class="img-fluid" alt="..."></img>
                                    </div>
                                    <div id="carousel-selector-3" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#carouselExampleControls" data-slide-to="3">
                                        <img src="images/projects/neelachol-eco-orchard/slider/thumbnail/3.jpg" class="img-fluid" alt="..."></img>
                                    </div>
                                    
                                    <div id="carousel-selector-4" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#carouselExampleControls" data-slide-to="4">
                                        <img src="images/projects/neelachol-eco-orchard/slider/thumbnail/5.jpg" class="img-fluid" alt="..."></img>
                                    </div>
                                    <div id="carousel-selector-5" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#carouselExampleControls" data-slide-to="5">
                                        <img src="images/projects/neelachol-eco-orchard/slider/thumbnail/6.jpg" class="img-fluid" alt="..."></img>
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
                                    অনেক আত্মত্যাগে অর্জিত আমাদের এই জন্মভূমি । সুজলা সুফলা শস্য শ্যামলা
                                    আমাদের এই বাংলাদেশ । সুদূর প্রসারী দিগন্ত জুড়ে সবুজের বিস্তার । চির সবুজের পুরো
                                    দেশটাই যেন শস্য ভাণ্ডার । কিন্তু এই শস্য ভাণ্ডারের উৎপাদিত খাদ্য সামগ্রী
                                    আমাদের জন্য কতটা নিরাপদ? আমাদের মৌলিক চাহিদার অন্যতম প্রধান হচ্ছে খাদ্য।
                                    আর এই খাদ্য সামগ্রীকে আমরা বুঝে না বুঝে সজ্ঞানে প্রতিনিয়ত বিষাক্ত থেকে
                                    বিষাক্ততর পর্যায়ে পরিণত করছি।বাণিজ্যিকভাবে ফল উৎপাদনকারী এবং অধিক
                                    মুনাফা লোভী ব্যবসায়ীরা অতিমাত্রায় কীটনাশক ও বিভিন্ন হরমোন প্রয়োগ করে
                                    প্রতিটি ফলমূল করে তুলছে খাওয়ার অনুপযোগী । এই বিষাক্ত ফলমূল খেয়ে আমাদের
                                    নিষ্পাপ শিশুরা আক্রান্ত হচ্ছে বিভিন্ন প্রাণঘাতী রোগে ।সচেতন নাগরিক হিসেবে
                                    একবার ভেবে দেখুনতো অতি যত্ন করে আপনার প্রিয় সন্তানের মুখে তুলে দিচ্ছেন পুষ্টি
                                    নাকি প্রাণনাশক বিষ ।আসলে এই সামাজিক অবক্ষয় থেকে আমাদের পরিত্রাণ হওয়া
                                    অত্যাবশ্যকীয় । আমাদের বাংলাদেশে ফলমূলের এই বিষাক্ত আগ্রাসন থেকে
                                    সামাজিকভাবে আমাদের সকলের দূর্বার প্রতিরোধ গড়ে তোলা নৈতিক দায়িত্ব হয়ে
                                    দাঁড়িয়েছে ।আর এই নৈতিকতার বহিঃপ্রকাশ ঘটানোর জন্য আমরা নীলাচল ইকো
                                    অরচার্ড&#39; আপনাকে সার্বিকভাবে সহযোগিতা করছি । আশাকরি আপনার এই ক্ষুদ্র
                                    ভূমিকা আমাদের সচেতন সমাজকে অনেক দূর এগিয়ে নেবে ।সারা বিশ্বে আম অত্যন্ত জনপ্রিয় ফল হিসেবে পরিচিত ।নানাবিধ পুষ্টি গুনে সমৃদ্ধ আমের চাহিদা অন্যান্য দেশের
                                    মত আমাদের দেশেও অনেক বেশী । সম্পূর্ণ বিষমুক্ত এই আম এদেশের সচেতন
                                    নাগরিকদের দ্বারপ্রান্তে পৌঁছে দেয়ার নীলাচল ইকো অরচার্ড যে ব্যতিক্রমধর্মী
                                    উদ্যোগ নিয়েছে তা হলো আপনার একান্ত নিজস্ব একখানা অর্গানিক আম বাগান ।
                                    নিরাপদ খাদ্য নিশ্চিত করার লক্ষে আমাদের সহযোগীতায় আপনি হয়ে উঠুন বিশমুক্ত
                                    একখানা আম বাগানের গর্বিত মালিক ।</p>
                                    <h5>সুবিধা সমুহঃ</h5>
                                    <p>
    <ul>
        <li>সাব – কাবলা দলিলের মাধ্যমে রেজিস্ট্রিকৃত নিষ্কণ্টক পাঁচ শতাংশ জমিসহ
        বাগানের মালিকানা।</li>
                    <li>আম বাগান যা রোপণের ২য় বছর থেকেই ফল উৎপাদন করবে
        ইন-শা-আল্লাহ ।</li>
                    <li>গাছ রোপণ , রক্ষণাবেক্ষণ, পরিচর্যা সবকিছুই অত্র প্রতিষ্ঠান করবে।</li>
                    <li>৫ থেকে ৬ বছরের মধ্যেই সম্পূর্ণ বিনিয়োগকৃত টাকা প্রাপ্তির সুযোগ।</li>
                    <li>ঘরে বসেই বিশমুক্ত ফল পাওয়ার নিশ্চয়তা । গাছ থেকে ফল সংগ্রহের পর সামান্য
        পরিবহন খরচের বিনিময়ে আপনার বাগানের ফল আপনাদের বাসায় পৌঁছে দেয়া হবে।</li>
                    <li>সম্পূর্ণ হালাল আয়ের সুযোগ।</li>
                    <li>৫ শতাংশের একক বাগানের প্যাকেজ মূল্যে আপনি পাচ্ছেন ৫ শতাংশ জমি, ৪৫টি
        ফলের চারা, জমি তৈরি ও চারা রোপণ খরচ ,বাগান সুরক্ষার জন্য তৈরি বেড়া , প্রথম
        বছরী সমস্ত সার, পানি ও অন্যান্য পরিচর্যার খরচ এবং বাগান মালিকের একবার
        বাআন পরিদর্শন খরচ।</li>
                    <li>নামমাত্র সার্ভিস চার্জের বিনিময়ে গাছ পরিচর্যার সমস্ত দায়-দায়িত্ব আমরাই
        নিচ্ছি।</li>
                    <li>আধুনিক প্রযুক্তি 3G বা 4G লাইভ ভিডিও কলের মাধ্যমে ঘরে বসেই আপনি
        দেখতে পারবেন আপনার বাগানটি ।</li>
                    <li>আমাদের সাথে অংশ নিয়ে একদিকে আপনি পাচ্ছেন বিষমুক্ত ফল যা আপনার প্রিয়
        সন্তানটি নিশ্চিন্তে খাবে সর্বোপরি আপনার বাগানের ফল যদি কোন কিটপতঙ্গ ,
        মানুষ, পশু পাখি খায় তবে আপনি পাবেন ``ছদকায়ে জারিয়ার `` সওয়াব । সুতরাং যে
        বিনিয়োগ আপনার ইহকাল ও পরকালের প্রশান্তির সুযোগ এনে দেয় –এর চেয়ে ভাল
        বিনিয়োগ আর কি হতে পারে?</li>
                    <li>মুসলিম শরিফে বর্ণিত আছে রাসুলুল্লাহ (সাঃ) এরশাদ করেন - `` কোন বেক্তি যদি
        কোন গাছের চারা রোপণ করে এবং এর থেকে প্রাপ্ত কোন কিছু যদি মানুষ, পাখি অথবা
        চতুষ্পদ প্রাণী খায় তবে সে বেক্তি ছদকায়ে জারিয়ার সওয়াব পাবে।</li>
                    <li>আম্রপালি গাছ সর্বোচ্চ ১২ থেকে ১৫ বছর পর্যন্ত ফল দিয়ে থাকে। তাই এখনে ১২
        বছরের হিসেব প্রদর্শন করা হয়েছে।</li>
                    <li>প্রথম বছর প্রতিটি গাছের মুকুল ছেটে ফেলা হবে। জার ফলশ্রুতিতে গাছের ডালপালা
        সুন্দরভাবে বেড়ে উঠবে এবং এতে ২য় বছর ফলন বেশী আসবে।</li>
                    <li>৪র্থ বছর ফল নেয়ার পর ঘনত্ব কমাতে ২২টি গাছ কাটা হবে।</li>
                    <li>৮ম বছর ফল নেয়ার ঘনত্ব কমাতে ৮ টি গাছ কাটা হবে।</li>
                    <li>বড় জাতের ল্যাংড়া বা ফজলি ১টি গাছে সর্বোচ্চ ৩০ থেকে ৩৫ মন বা ১২০০-১৪০০
        কেজি পর্যন্ত এবং আম্রপালি একটি গাছে সর্বোচ্চ ৩ থেকে ৪ মন বা ১২০-১৬০
        কেজি পর্যন্ত আম উৎপাদন হয়ে থাকে।</li>
                    <li>উল্লেখ্য যে উপরোক্ত পরিসংখ্যানে সর্বনিম্ম উৎপাদন এবং বাজারমূল্য দেখানো
        হয়েছে।</li>
                    <li>উৎপন্ন আমের গুনগত মান থিক রাখার জন্য এক গাছের ক্যানপির সংস্পর্শে
        যাওয়া মাত্রই ঘনত্ব কমানো হবে।</li>
</ul>
</p>
<h5>নীতিমালাঃ</h5>
<p>
    <ul>
 
            <li>পাঁচ শতাংশের প্রতিটি বাগানের জন্য ৫০,০০০/-(পঞ্চাশ হাজার) টাকা বুকিং মানিসহ
        গ্রাহককে বাগান প্রাপ্তির জন্য নিলাচল ইকো অরচার্ড এর অনুকুলে নির্ধারিত ফরমে 
        আবেদন করতে হবে।</li>
            <li>প্রতিটি ব্যক্তি একই নামে একাধিক বাগান বুকিং দিতে পারবেন ।</li>
            <li>কিস্তির ক্ষেত্রে বুকিং মানি ও মোট মূল্যের ২০% ডাউন পেমেন্ট প্রদানের পর
অবশিষ্ট টাকা মাসিক কিস্তিতে পরিশোধ করতে হবে।</li>
            <li>সকল পেমেন্ট নিলাচল ইকো অরচার্ড এর অনুকেলে নগদ/ চেক/ ব্যাংক ড্রাফট/ পে-
অর্ডার এর মাধ্যমে পরিশোধ করতে হবে।</li>
            <li>জাতীয় পরিচয় পত্র / পাসপোর্ট/ পৌরসভা / ইউনিয়ন পরিষদ / সিটি কর্পোরেশনের
কাউন্সিলর কর্তৃক নাগরিকত্ব সনদ পত্রের ফটোকপি ও ৩ কপি পাসপোর্ট সাইজের
ছবিসহ কোম্পানির নির্ধারিত ফরমে আবেদন করতে হবে।</li>
            <li>নমিনীর ২ কপি পাসপোর্ট সাইজের ছবি ও জাতীয় পত্র / নিবন্ধনের ফটোকপি দিতে
হবে।</li>
            <li>বাগান গ্রহীতা পর পর তিন মাস কিস্তির টাকা পরিশোধে ব্যর্থ হলে খেলাপী গ্রাহক
হিসেবে বিবেচিত হবেন। খেলাপী গ্রাহক তিন মাসের মধ্যে উল্লেখিত ভাবে বকেয়া
কিস্তি পরিশোধ না করলে কোম্পানি বিধি মোতাবেক বাগানের বুকিং বাতিল করে দিতে
পারবে।</li>
            <li>বাগান পরিচর্যার ও রক্ষণাবেক্ষণের সুবিধার্থে পনার বাগানটি কোম্পানির
তত্ত্বাবধানে থাকবে।</li>
            <li>বাগানের মাসিক কিস্তি ও সার্ভিস চার্জ প্রতি ইংরেজি মাসের ১০ তারিখের মধ্যে
জমা দিতে হবে।</li>
            <li>এককালীন মূল্যের সমুদয় টাকা বুকিং তারিখ হতে পরবর্তী এক মাসের মধ্যে
পরিশোধ করতে হবে।</li>
            <li>সম্পূর্ণ মূল্য পরিশোধ সাপেক্ষে নিলাচল ইকো অরচার্ড গ্রাহক বারবার তিন মাসের
মধ্যে জমি রেজিস্ট্রি করে বাগান হস্তান্তর ।</li>
    </ul>
</p>

                                </div>
                            </div>
                        </div>
                       
                        <div class="col-md-4">
                        <img src="images/projects/neelachol-echo-orchard.jpg" class="img-fluid" alt=""></img>
                        <h5 class="mt-5">ক্যাটেগরি </h5><hr/>
                        <h3 class="pb-5"> ফলের বাগান </h3>
                        {/* <h3>PREVIEW</h3><hr/>
                        <p></p>
                        <h3>3D ANIMATED PREVIEW</h3><hr/>
                        <p></p> */} 
                        <figure class="mb-5">
                            <img src="images/projects/neelachol-eco-orchard/2.png" alt="Trulli" style={{width:"100%"}}/>
                            <figcaption>৪৫ টি গাছের একক বাগান (৪ বছর পর্যন্ত) </figcaption>
                        </figure>
                        <figure class="mb-5">
                            <img src="images/projects/neelachol-eco-orchard/1.png" alt="Trulli" style={{width:"100%"}}/>
                            <figcaption> ১৫ টি গাছের একক বাগান (৯ থেকে ১৫ বছর পর্যন্ত) </figcaption>
                        </figure>
                        
                          
                        </div>
                    </div>
                    
                </div>
                </div>
                
                <div class="container-fluid" >
                <div class="row">
                        <div class="col-md-12">
                        <table class="table table-bordered table-sm table-hover table-striped">
                                <thead>
                                    <tr style={{backgroundColor:"#009933",color:"#FFF", fontSize:"30px"}}>
                                        <th colspan="11" style={{padding:"15px"}}>
                                            এক ইউনিট বাগানে আম উৎপাদনের সম্ভাব্য পরিসংখ্যান 
                                        </th>
                                    </tr>
                                    <tr style={{backgroundColor:"#009933",color:"#FFF"}}>
                                        
                                        <th style={{width:"100px"}}>মেয়াদ</th>
                                        <th>আম্রপালি গাছের সংখ্যা</th>
                                        <th>গাছ প্রতি উৎপাদন কেজি</th>
                                        <th>মোট উৎপাদিত আম্রপালি কেজি</th>
                                        <th>বড় জাতের ল্যাংড়া/ফযলি ইত্যাদি গাছের সংখ্যা</th>
                                        <th>গাছ প্রতি উৎপাদন কেজি</th>
                                        <th>বড় জাতের গাছ হতে উৎপাদন কেজি</th>
                                        <th>সর্বমোট উৎপাদন কেজি</th>
                                        <th>আমের মূল্য টাকা/কেজি</th>
                                        <th>প্রতি বছর আমের মোট মূল্য (টাকা)</th>
                                        <th>বাৎসরিক ক্রমজোজিত আয়(টাকা)</th>
                                    </tr>
                                </thead>
                                <tbody style={{backgroundColor:""}}>
                                    <tr><td>১ম বছর</td><td>৪৩</td><td>০</td><td>০</td><td>২</td><td>০</td><td>০</td><td>০</td><td>০</td><td>০</td><td>০</td></tr>
                                    <tr><td>২ম বছর</td><td>৪৩</td><td>৫</td><td>২১৫</td><td>২</td><td>০</td><td>০</td><td>২১৫</td><td>৬০</td><td>১২৯০০</td><td>১২৯০০</td></tr>
                                    <tr><td>৩ম বছর</td><td>৪৩</td><td>৯</td><td>৩৮৭</td><td>২</td><td>০</td><td>০</td><td>৩৮৭</td><td>৬৫</td><td>২৫১৫৫</td><td>৩৮০৫৫</td></tr>
                                    <tr><td>৪ম বছর</td><td>৪৩</td><td>২০</td><td>৮৬০</td><td>২</td><td>১৭</td><td>৩৪</td><td>৮৯৪</td><td>৭০</td><td>৬২৫৮০</td><td>১০০৬৩৫</td></tr>
                                    <tr><td>৫ম বছর</td><td>২১ </td><td>২৭</td><td>৫৬৭</td><td>২</td><td>২৫</td><td>৫০</td><td>৬১৭</td><td>৭৫</td><td>৪৬২৭৫</td><td>১৪৬৯১০</td></tr>
                                    <tr><td>৬ম বছর</td><td>২১</td><td>৪০</td><td>৮৪০</td><td>২</td><td>৪৫</td><td>৯০</td><td>৯৩০</td><td>৮০</td><td>৭৪৪০০</td><td>২২১৩১০</td></tr>
                                    <tr><td>৭ম বছর</td><td>২১</td><td>৬০</td><td>১২৬০</td><td>২</td><td>৬০</td><td>১২০</td><td>১৩৮০</td><td>৮৫</td><td>১১৭৩০০</td><td>৩৮৮৬১০</td></tr>
                                    <tr><td>৮ম বছর</td><td>২১</td><td>৭২</td><td>১৫১২</td><td>২</td><td>৭৫</td><td>১৫০</td><td>১৬৬২</td><td>৯০</td><td>১৪৯৫৮০</td><td>৪৮৮১৯০</td></tr>
                                    <tr><td>৯ম বছর</td><td>১৩</td><td>৮৫</td><td>১১০৫</td><td>২</td><td>৯০</td><td>১৮০</td><td>১২৮৫ </td><td>৯৫</td><td>১২২০৭৫</td><td>৬১০২৬৫</td></tr>
                                    <tr><td>১০ম বছর</td><td>১৩</td><td>৯৫ </td><td>১২৩৫</td><td>২</td><td>১১০</td><td>২২০</td><td>১৪৫৫</td><td>১০০</td><td>১৪৫৫০০</td><td>৭৫৫৭৬৫</td></tr>
                                    <tr><td>১১তম বছর</td><td>১৩</td><td>১১০ </td><td>১৪৩০</td><td>২</td><td>১৩৫</td><td>২৭০</td><td>১৭০০</td><td>১১০</td><td>১৮৭০০০</td><td>৯৪২৭৬৫</td></tr>
                                    <tr><td>১২তম বছর</td><td>১৩</td><td>১১৫ </td><td>১৪৯৫</td><td>২</td><td>১৬৫</td><td>৩৩০</td><td>১৮২৫</td><td>১২০</td><td>২১৯০০০</td><td>১১৬১৭৬৫</td></tr>
                                </tbody>
                            </table>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-8 offset-md-2 p-3" style={{borderRadius:"50px", backgroundColor:"#009933",color:"#FFF", fontSize:"25px"}}>
                                                        <span> ১ ইউনিট বাগানের এককালীন মূল্য ২,৫০,০০০/= (দুই লক্ষ পঞ্চাশ হাজার টাকা )</span>
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-md-8 offset-md-2 p-3" style={{borderRadius:"50px", backgroundColor:"#009933",color:"#FFF", fontSize:"25px"}}>
                                                        <span> ১ ইউনিট বাগানের কিস্তিতে মূল্য ৩,০০,০০০/= (তিন লক্ষ টাকা )</span>
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-md-8 offset-md-2 p-3" style={{borderRadius:"50px", backgroundColor:"#009933",color:"#FFF", fontSize:"25px"}}>
                                                        <span> মাসিক কিস্তির ব্যবস্থা রয়েছে। (কিস্তির মেয়াদ সর্বোচ্চ) </span>
                                                    </div>
                                                </div>

                                                <div class="row mt-2">
                                                    <div class="col-md-8 offset-md-2 p-3" style={{fontWeight:"bold",borderRadius:"50px",border:"2px solid #009933", backgroundColor:"#FFF",color:"#009933", fontSize:"22px"}}>
                                                        <span> আমাদের সহযোগিতায় আপনিও হয়ে উঠুন বিষমুক্ত একটি বাগানের গর্বিত মালিক।  </span>
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-md-8 offset-md-2 p-3" style={{fontWeight:"bold",borderRadius:"50px",border:"2px solid #009933", backgroundColor:"#FFF",color:"#009933", fontSize:"22px"}}>
                                                        <span>আগামী প্রজন্মের জন্য প্রতিটি খাদ্যকে নিরাপদ করা আমাদের সকলের নৈতিক দায়িত্ব। </span>
                                                    </div>
                                                </div>
                                                
                                                </div>
            </section>
        );
    }
}

export default Neelachol_eco_orchard;