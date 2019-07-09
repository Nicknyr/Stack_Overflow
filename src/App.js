import React from 'react';
import styled, { css } from 'styled-components';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faAngleRight } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faAngleRight);

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
      <Footer />
    </div>
  );
}

export default App;
