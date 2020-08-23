import React from 'react';
import logo from './logo.svg';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Demo from "./components/Demo"


import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;
