import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './Pages/Homepage/Homepage'

const App = ()=> {
  return (
    <Router>
     
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
         
        </Routes>
        <Footer />
      
    </Router>
  );
}

export default App;
