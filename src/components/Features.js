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
  padding-bottom: 3em;

  .feature-container {
    background: white;
    height: 9em;
    margin-bottom: 2em;
    display: flex;
    align-items: center;
    box-shadow: 0 4px 8px rgba(59,64,69,0.2);
    line-height: 1.2;
    font-size: 1em;
    border-radius: 10px;

    p {
      color: #242729;
      font-size: .9em;
      font-weight: 500;
      margin-bottom: 0;
      margin-top: 0;
    }
  }

  @media(min-width: 768px) {
    .feature-container {
      height: 15em;
    }
  }


  @media(min-width: 992px) {
    .col-md-3 {
      flex: 0 0 30%;
      max-width: 30%;
    }

    .feature-container {
      height: 9.5em;
      padding-top: 1.5em;
      padding-bottom: 1.5em;

      p {
        font-size: 1em;
      }
    }
  }

`;

const H2 = styled.h2`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3em;
  font-family: 'Roboto Slab', serif;
  width: 100%;
  font-size: 1.6em;
  font-weight: 700;

  @media(min-width: 768px) {
    font-size: 2em;
  }
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
  font-size: .96em;
  color: #242729;
  line-height: 1.2;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3em;
  margin-bottom: 5em;

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
          <Col
            xs={{span: 12}}
            md={{span: 10, offset: 1}} 
            lg={{span: 9}}
            className="mx-auto">
            <H2>For businesses, by developers</H2>
            <Bar></Bar>
            <P>
              Our mission is to help developers write the script of the future. This means helping you find and hire skilled developers for your business and providing them the tools they need to share knowledge and work effectively.
            </P>
          </Col>
        </Row>
        <Row className="d-flex justify-content-md-around">
          <Col
            xs={{span: 10, offset: 1}}
            sm={{span: 8, offset: 2}}
            md={{span: 3, offset: 0}}
            lg={{span: 3, offset: 0}}
            >
              <Row className="feature-container">
                <Col xs={{span: 5}} md={{span: 12}} lg={{span: 4}} className="text-center">
                  <img src={privateQuestions} alt="private questions" height="75" width="75" />
                </Col>
                <Col xs={{span: 7}} md={{span: 12, offset: 0}} lg={{span: 7, offset: 0}}>
                  <p>Quickly find and share internal knowledge with <A href="$">Private Q&A</A></p>
                </Col>
              </Row>
           </Col>
           <Col
             xs={{span: 10, offset: 1}}
             sm={{span: 8, offset: 2}}
             md={{span: 3, offset: 0}}
             lg={{span: 3, offset: 0}}
             >
               <Row className="feature-container">
                 <Col xs={{span: 5}} md={{span: 12}} lg={{span: 4}} className="text-center">
                   <img src={findCandidate} alt="find candidate" height="75" width="75" />
                 </Col>
                 <Col xs={{span: 7}} md={{span: 12, offset: 0}} lg={{span: 7}}>
                   <p>Find the perfect candidate for your growing technical team with <A href="$">Talent solutions</A></p>
                </Col>
               </Row>
            </Col>
            <Col
              xs={{span: 10, offset: 1}}
              sm={{span: 8, offset: 2}}
              md={{span: 3, offset: 0}}
              lg={{span: 3, offset: 0}}
              >
                <Row className="feature-container">
                  <Col xs={{span: 5}} md={{span:12}} lg={{span: 4}} className="text-center">
                    <img src={accelerate} alt="accelerate" height="75" width="75" />
                  </Col>
                  <Col xs={{span: 7}} md={{span: 12, offset: 0}} lg={{span: 7}}>
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
