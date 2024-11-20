import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import MenuMui from './MenuMui' 
import Header from './Header'

import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Blog from './pages/Blog';


function App() {

  return (
    <div className="App">

    <div className='hello-empty'>EMPTY SPACE TO UP</div>
      <Header/> 
      
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/blog" element={<Blog/>}/>          
        </Routes>
      </Router> 


    </div>
  );
}

export default App;
