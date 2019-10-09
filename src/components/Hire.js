import React from 'react';
import styled, { css } from 'styled-components';
import { Card, Button, Container, Row, Col, ButtonToolbar, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import jobsTech from '../assets/jobs-tech.svg';
import findCandidate from '../assets/find-candidate.svg';
import privateQuestions from '../assets/private-questions.svg';
import accelerate from '../assets/accelerate.svg';

const Styles = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:700&display=swap');
  background: #f7f6f9;
  clip-path: polygon(0 2vw, 100% 0, 100% calc(100% - 2vw), 0 100%);
  width: 100%;
  height: auto;
  margin-top: -3em;

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
  padding-top: 128px !important;
  padding-bottom: 128px !important;

`;

const H3 = styled.h3`
  font-family: 'Roboto Slab', serif;
  font-size: 1.4em;
  font-weight: bolder;

  @media(min-width: 768px) {
    font-size: 1.7em;
  }
`;

const P = styled.p`
  color: #242729;
  font-size: .9em;
  font-weight: 500;
  line-height: 1.3;
`;

const Hire = () => {
  return (
    <Styles>
      <CONTAINER>
       <Row className="justify-content-around">
         <Col xs={12} md={5} lg={6} className="mb-5 mb-md-0">
           <img src={findCandidate} height="75" width="75"/>
           <H3>Hire your technical talent</H3>
           <P>
             We help expand your technical hiring strategy to promote your employer brand and highlight relevant open roles to our community of 50 million monthly visitors.
           </P>
           <CustomButton>Stack Overflow Talent</CustomButton>
         </Col>
         <Col xs={12} md={5} lg={6}>
           <img src={accelerate} height="75" width="75"/>
           <H3>Reach developers worldwide</H3>
           <P>
             Use the world’s largest resource for people who code to help you increase awareness and showcase your product or service across Stack Overflow’s network of Q&A sites.
           </P>
          <CustomButton>Stack Overflow Advertising</CustomButton>
          </Col>
       </Row>
      </CONTAINER>
    </Styles>
  );
}

export default Hire;
