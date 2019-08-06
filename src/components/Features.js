import React from 'react';
import styled, { css } from 'styled-components';
import { Card, Button, Container, Row, Col, ButtonToolbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import findCandidate from '../assets/find-candidate.svg';
import privateQuestions from '../assets/private-questions.svg';
import accelerate from '../assets/accelerate.svg';

const Styles = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:700&display=swap');
  clip-path: polygon(0 0, 100% 4vw, 100% 100%, 0 100%);
  background-color: #f7f6f9 ;
  width: 100%;
  height: auto;

  .feature-container {
    background: white;
    height: 9em;
    margin-bottom: 1em;
    display: flex;
    align-items: center;
    box-shadow: 0 4px 8px rgba(59,64,69,0.2);
    line-height: 1.2;
    font-size: 1em;
    border-radius: 5px;

    p {
      color: #242729;
      font-size: 1em;
      margin-bottom: 0;
      margin-top: 0;
    }

    @media(min-width: 768px) {
      height: 15em;
      padding: 20px;
    }
  }

`;

const H2 = styled.h2`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3em;
  font-size: 1.5em;
  font-weight: bolder;
  font-family: 'Roboto Slab', serif;
  width: 100%;
`;

const Bar = styled.div`
  background: #f2720c;
  width: 80px;
  height: 6px;
  margin: 1.3em auto;
  display: block;
`;

const P = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: .95em;
  color: 242729;
  line-height: 1.3;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3em;
`;

const A = styled.a`
  color: #F48024;

  &:hover {
    color: #F48024;
    text-decoration: none;
  }
`

const CONTAINER = styled(Container)`
  padding-top: 5em;
  padding-bottom: 5em;
`;

const Features = () => {
  return (
    <Styles>
      <CONTAINER>
        <Row>
          <Col xs={{span: 12}} md={{span: 8, offset: 2}}>
            <H2>For businesses, by developers</H2>
            <Bar></Bar>
            <P>
              Our mission is to help developers write the script of the future. This means helping you find and hire skilled developers for your business and providing them the tools they need to share knowledge and work effectively.
            </P>
          </Col>
        </Row>
        <Row>
          <Col xs={{span: 8, offset: 2}} md={{span: 3, offset: 1}}>
            <Row className="feature-container">
              <Col xs={{span: 3}} md={{span: 6, offset: 3}}>
                <img src={findCandidate} alt="find candidate" height="75" width="75" />
              </Col>
              <Col xs={{span: 8, offset: 0}} md={{span: 10, offset: 1}}>
                <p>Quickly find and share internal knowledge with <A href="$">Private Q&A</A></p>
              </Col>
            </Row>
           </Col>
           <Col xs={{span: 8, offset: 2}} md={{span: 3, offset: 1}}>
             <Row className="feature-container">
               <Col xs={{span: 3}} md={{span: 6, offset: 3}}>
                 <img src={privateQuestions} alt="private questions" height="75" width="75" />
               </Col>
               <Col xs={{span: 8, offset: 0}} md={{span: 10, offset: 1}}>
                 <p>Find the perfect candidate for your growing technical team with Talent solutions</p>
              </Col>
             </Row>
            </Col>
            <Col xs={{span: 8, offset: 2}} md={{span: 3, offset: 1}}>
              <Row className="feature-container">
                <Col xs={{span: 3}} md={{span: 6, offset: 3}}>
                  <img src={accelerate} alt="accelerate" height="75" width="75" />
                </Col>
                <Col xs={{span: 8, offset: 0}} md={{span: 10, offset: 1}}>
                  <p>Accelerate the discovery of your products or services through our <A href="#">Advertising platform</A></p>
                </Col>
              </Row>
              </Col>
           </Row>
      </CONTAINER>
    </Styles>
  );
}

export default Features;
