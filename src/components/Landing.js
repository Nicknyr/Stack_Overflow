import React from 'react';
import styled, { css } from 'styled-components';
import { Card, Button, Container, Row, Col, ButtonToolbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import landing from '../assets/landing.svg';
import landingLarge from '../assets/landing-large.svg';

const Styles = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:700&display=swap');
  clip-path: polygon(0 0, 100% 0%, 100% 90%, 0 96%);
  background: #ffcf10;
  background-image: url(${landing});
  bbackground-repeat: no-repeat;
  background-position: top center;
  width: 100%;
  height: 35em;
  margin-bottom: 1em;
  position: relative;

  @media (min-width: 768px) {
    background-image: url(${landingLarge});
    background-repeat: no-repeat;
    background-position: top center;
    height: 32em;
  }
`;

const LandingH1 = styled.h1`
  font-family: 'Roboto Slab', serif;
  font-size: 2em;
  text-align: center;
  font-weight: bolder;
  position: relative;

  @media (min-width: 768px) {
    font-size: 3.5em;
  }
`;

const LandingP = styled.p`
  font-size: 1.2em;
  font-weight: 500;
  text-align: center;
  padding-top: .5em;
  padding-bottom: .5em;

  @media (min-width: 768px) {
    font-size: 1.3em;
    line-height: 1.3;
  }
`;

const LandingContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


const CustomALight = styled.a`
  padding: 12px 12px;
  background: white;
  border: 1px solid #F48024;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: block;
  color: #F48024;
  border-radius: 2px;
  margin-bottom: .5em;
  font-weight: 500;
  font-size: .9em;
  width: 10em;

  &:hover {
    text-decoration: none;
    color: #F48024;
  }

  @media (min-width: 768px) {
    display: inline-block;
    margin: .5em;
  }
`;

const CustomAOrange = styled(CustomALight)`
  background: #F48024;
  color: white;

  &:hover {
    text-decoration: none;
    color: white;
  }
`;


const Landing = () => {
  return (
    <Styles>
      <Container>
      <LandingContainer>
        <Row>
          <Col xs={{ span: 10, offset: 1}} md={{span: 12, offset: 0}}>
            <LandingH1>We &lt;3 people who code</LandingH1>
          </Col>
          <Col xs={{ span: 8, offset: 2}} md={{span: 6, offset: 3}} lg={{span: 4, offset: 4}}>
            <LandingP>We build products that empower developers and connect them to solutions that enable productivity, growth, and discovery.</LandingP>
          </Col>
        </Row>
        <Row>
          <Col xs={{span: 12}} className="text-center">
            <CustomALight href="#">For Developers</CustomALight>
            <CustomAOrange  href="#">For Businesses</CustomAOrange>
          </Col>
        </Row>
      </LandingContainer>
      </Container>
    </Styles>
  );
}

export default Landing;
