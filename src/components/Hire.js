import React from 'react';
import styled, { css } from 'styled-components';
import { Card, Button, Container, Row, Col, ButtonToolbar, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Styles = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:700&display=swap');
  background: ##f7f6f9;
  width: 100%;
  height: auto;
  clip-path: polygon(0 4vw, 100% 0, 100% calc(100% - 4vw), 0 100%);
  margin-top: -3em;

  svg {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2em;
    margin-bottom: 2em;
  }
`;

const CustomButton = styled(Button)`
  background: #f2720c;
  color: white;
  border: none;
  border-radius: 2px;

  &:hover {
    background: #f2720c;
  }
`;

const BlueButton = styled(Button)`
  background: #2b2d6e;
  border: none;
  margin-left: auto;
  margin-right: auto;
  display: block;
  border-radius: 2px;
  width: 95%;
  height: 2.7em;

  &:hover {
    background: #2b2d6e;
  }
`;

const CONTAINER = styled(Container)`
  padding-top: 5em;
  padding-bottom: 5em;
  padding-left: 3em;
  padding-right: 3em;
`;

const H3 = styled.h3`
  font-family: 'Roboto Slab', serif;
`;

const Hire = () => {
  return (
    <Styles>
      <CONTAINER>
       <Row>
        <H3>Hire your technical talent</H3>
        <p>
          We help expand your technical hiring strategy to promote your employer brand and highlight relevant open roles to our community of 50 million monthly visitors.
        </p>
        <CustomButton>Stack Overflow Talent</CustomButton>
       </Row>
       <Row>
        <H3>Reach developers worldwide</H3>
        <p>
          Use the world’s largest resource for people who code to help you increase awareness and showcase your product or service across Stack Overflow’s network of Q&A sites.
        </p>
        <CustomButton>Stack Overflow Advertising</CustomButton>
       </Row>
      </CONTAINER>
    </Styles>
  );
}

export default Hire;
