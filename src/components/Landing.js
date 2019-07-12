import React from 'react';
import styled, { css } from 'styled-components';
import { Card, Button, Container, Row, Col, ButtonToolbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Styles = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:700&display=swap');
  clip-path: polygon(0 0, 100% 0%, 100% 90%, 0 96%);
  background-color: #ffcf10;
  width: 100%;
  height: 35em;
  margin-bottom: 2em;
  position: relative;
`;

const LandingH1 = styled.h1`
  font-family: 'Roboto Slab', serif;
  font-size: 1.8em;
  text-align: center;
  font-weight: bolder;
  position: relative;
`;

const LandingP = styled.p`
  font-size: 1.2em;
  font-weight: 500;
  text-align: center;
  padding-top: .5em;
  padding-bottom: .5em;
`;

const LandingContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CustomButton = styled(Button)`
  display: block;
  padding: 12px 24px;
  width: 40em;
  text-align: center;
`;

const CustomALight = styled.a`
  padding: 12px 24px;
  background: white;
  border: 1px solid #F48024;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: block;
  color: #F48024;
  border-radius: 5px;
  margin-bottom: .5em;
  font-weight: 500;
  font-size: .9em;

  &:hover {
    text-decoration: none;
    color: #F48024;
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
        <LandingH1>We &lt;3 People Who Code</LandingH1>
        <Row>
          <Col xs={{ span: 8, offset: 2}}>
            <LandingP>We build products that empower developers and connect them to solutions that enable productivity, growth, and discovery.</LandingP>
          </Col>
        </Row>
        <Row>
        <CustomALight href="#">For Developers</CustomALight>
        </Row>
        <Row>
          <CustomAOrange href="#">For Businesses</CustomAOrange>
        </Row>
      </LandingContainer>
      </Container>
    </Styles>
  );
}

export default Landing;
