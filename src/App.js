import React from 'react';
import styled, { css } from 'styled-components';
import Footer from './components/Footer';
import Landing from './components/Landing';
import About from './components/About';
import Features from './components/Features';
import NavBar from './components/Navbar';
import Plans from './components/Plans';
import Hire from './components/Hire';
import Learn from './components/Learn';
import Jobs from './components/Jobs';
import Questions from './components/Questions';
import QuestionsRadio from './components/QuestionsRadioButton';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faAngleRight, faCheck } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee, faAngleRight, faCheck);

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <About />
      <Features />
      <Plans />
      <Hire />
      <QuestionsRadio />
      <Learn />
      <Jobs />
      <Footer />
    </div>
  );
}

export default App;
