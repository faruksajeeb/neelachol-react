import React, { Component } from 'react';
import Slider from './Slider'
import About from './About'
import Call from './Call'
import Projects from './Projects'
class Home extends Component {
    componentDidMount() {
        document.title = this.props.title
    }
    render() {
        return (
            <div>
                <Slider />
                <About />
                <Call />
                <Projects/>
            </div>
        );
    }
}

export default Home;