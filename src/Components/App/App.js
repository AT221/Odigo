import React from 'react';
import './App.css';
import NavBar from '../NavBar/Navbar';
import Benefits from '../Benefits/Benefits';
import TopGallery from '../TopGallery/TopGallery';
import Body from '../Body/Body';
import BottomGallery from '../BottomGallery/BottomGallery';
import Footer from '../Footer/Footer';


const App = () => {
  return (
    <div>
      <NavBar />
      <Benefits />
      <TopGallery />
      <Body />
      <BottomGallery />
      <Footer />
    </div>
  );
}

export default App;
