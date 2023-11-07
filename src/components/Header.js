import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { color: "#99CC33" };
      }
      changeColor = color => {
        this.setState({ color });
      };

    render() {
        return (
            <section className="header pt-2"  style={{ background: this.state.color }}>
                <div className="container header-inner">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <i className="fas fa-headphones-alt"></i> 02-9820405, 02-41081710
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                        <i className="fas fa-envelope"></i> <a href="#">info@neelachol.com.bd</a>
                            
                        </div>
                        <div className="col-lg-2 col-md-1 col-sm-6">
                            
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 social">
                            <div className=" text-right">                           
                                <a href="https://www.facebook.com/neelachol.assets.ltd" target="_blank"><i className="fab fa-facebook" ></i></a>
                                <a href="#"  target="_blank"><i className="fab fa-twitter"></i></a>
                                <a href="#"  target="_blank"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#"  target="_blank"><i className="fab fa-instagram"></i></a>
                                <a href="#"  target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#"  target="_blank"><i className="fab fa-youtube"></i></a>
                                <a href="#"  target="_blank"><i className="fab fa-pinterest-p"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Header;

