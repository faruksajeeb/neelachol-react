import React from 'react';
import './App.css';
import Header from './components/Header'; 
import Menubar from './components/Menubar';
import Footer from './components/Footer';
//var cors = require('cors')

// app.use(cors()) // Use this after the variable declaration


function App() {
  return (
    <div className="App">
      <Header   ></Header>
      <Menubar></Menubar>
      {/* <Slider></Slider> */}
      {/* <About></About> */}
      {/* <Call></Call> */}
      {/* <Project></Project> */}
      {/* <Team></Team> */}
      {/* <Contact></Contact> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
