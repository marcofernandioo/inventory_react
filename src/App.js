import React from 'react';
// import logo from './logo.svg';
// import Login from './screen/Login';
import Login from './screen/Login';
import NameList from './screen/NameList';
import ContactUs from './screen/contactForm';


// import './App.css';

function App(props) {
  return (
      <div> 
        <h2>Hello there, {props.name}</h2>
        <h3>Your name is {props.secName}</h3>
        <Login />
        <br></br>
        {/* <ContactUs /> */}
        <br></br>
        <hr></hr>
        <br></br>
        <NameList />
      </div>
  );
}


export default App;
