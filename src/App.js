import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'
import { useState } from 'react';


function App() {



  return (
    <div className="container">
   <Header />
    <Body />
    {/*<Footer />*/}
    
    </div>
  );
}

export default App;
