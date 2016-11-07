import React from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import Steps from './components/Steps';
import Footer from './components/Footer';
import './Main.styl';

const Main = () => (
  <div className="main">
    <Header />
    <Hero />
    <Steps />
    <Footer />
  </div>
);

module.exports = Main;
