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
import ToggleMenuNavbar from './components/ToggleMenuNavbar';
import QuestionsSection from './components/QuestionsSection';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCheckSquare,
  faAngleRight,
  faCheck,
  faGlobeAmericas,
  faBusinessTime,
  faSearch} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faAngleRight, faCheck, faGlobeAmericas, faBusinessTime, faSearch);

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

// Extra small devices (portrait phones, less than 576px)
// No media query since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
//@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
//@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
//@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
//@media (min-width: 1200px) { ... }

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <About />
      <Features />
      <Plans />
      <Hire />
      <QuestionsSection />
      <Learn />
      <Jobs />
      <Footer />
    </div>
  );
}

export default App;
