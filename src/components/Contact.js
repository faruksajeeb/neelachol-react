import React, { Component } from 'react';

class Contact extends Component {
    componentDidMount() {
        document.title = this.props.title
    }
    render() {
        return (
            <section id="contact" class="py-5">
            <div class="container">
            <div class="row pb-5">
                <div class="col-md-12">
                <div class="contact-title text-center">
                    <h1>যোগাযোগ  <span>করুন</span></h1>                
                </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                <h2 class="py-4 h2 text-left">আমাদের <span>সাথে থাকুন </span>
                    <div class="line_1"></div>
                    <div class="line_2"></div>
                    <div class="line_3"></div>
                </h2>                
                <div class="text-left">
                <p><i class="fa fa-headphones-alt"></i> 02-9820405, 02-41081710</p>
                <a href="#.">
                    <p><i class="fa fa-envelope"></i> info@neelachol.com.bd</p>
                </a>
                <a href="http://neelachol.com.bd" target="_blank">
                    <p><i class="fa fa-globe" aria-hidden="true"></i> www.neelachol.com.bd</p>
                </a>
                <p><i class="fa fa-map-marker" aria-hidden="true"></i> 
                    Rupsha Tower, Flat #9/B, House # 07 Road # 17, Kemal Ataturk Avenue, Dhaka 1213,
    Banani Model Town, Dhaka Division, Bangladesh</p>
                </div>
                <div class="text-left contact-section-icon" >
                    <a href="https://www.facebook.com/neelachol.assets.ltd" target="_blank"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                    <a href="#"><i class="fab fa-pinterest-p"></i></a>
                </div>
            
                {/* <!-- <img src="images/telephone-cable.jpg" alt="" class="img-fluid"> --> */}
                </div>
                <div class="col-md-6 text-left">
                    <h2 class="py-4 h2">আমাদের একটি <span>বার্তা পাঠান</span>
                        <div class="line_1"></div>
                        <div class="line_2"></div>
                        <div class="line_3"></div>
                    </h2>
                
                <form action="#" method="POST">
                    <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" placeholder="Enter email" id="email" />
                    </div>
                    <div class="form-group">
                    <label for="pwd">Number:</label>
                    <input type="text" class="form-control" placeholder="Enter Number" id="number" />
                    </div>
                    <div class="form-group">
                    <label for="pwd">Message:</label>
                    <textarea class="form-control" value="" rows="6"></textarea>
                    </div>                    
                    <button type="button" class="btn btn-primary btn-lg">SENT NOW</button>
                </form> 
                </div>
            </div>
            </div>  
        </section>
        );
    }
}

export default Contact;
