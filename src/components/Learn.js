import React from 'react';
import styled, { css } from 'styled-components';
import { Card, Button, Container, Row, Col, ButtonToolbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import developer from '../assets/developer.svg';
import openSource from '../assets/open-source.svg';
import advocate from '../assets/advocate.svg';
import careerSwitcher from '../assets/career-switcher.svg';


const Styles = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:700&display=swap');
  clip-path: polygon(0 0, 100% 0%, 100% 90%, 0 96%);
  background-color: white;
  width: 100%;
  height: auto;
  margin-bottom: 2em;
  padding-bottom: 10em;

  img {
    margin-left: auto;
    margin-right: auto;
    margin-top: 3em;
    display: block;
  }
`;

const H2 = styled.h2`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.5em;
  font-weight: bolder;
  font-family: 'Roboto Slab', serif;
  width: 100%;

  @media(min-width: 768px) {
    font-size: 2em;
  }
`;

const H3 = styled.h3`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1em;
  margin-bottom: 1em;
  font-size: 1.2em;
  font-weight: bolder;
  font-family: 'Roboto Slab', serif;
  width: 100%;
`;

const P = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: .95em;
  color: 242729;
  line-height: 1em;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3em;
`;

const Bar = styled.div`
  background: #f2720c;
  width: 80px;
  height: 6px;
  margin: 1.3em auto;
  display: block;
`;

const A = styled.a`
  color: #07C;

  &:hover {
    opacity: 1.7;
    text-decoration: none;
  }
`;


const Learn = () => {
  return (
    <Styles>
      <Container>
        <Row>
          <Col xs={{span: 11}} md={{span: 8}} className="mx-auto">
            <H2>Learn and grow with Stack Overflow</H2>
            <Bar></Bar>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={3}>
            <img src={developer} />
            <H3>Write the script of the future</H3>
            <P>
              Get your coding questions answered to learn, build, and level up whether you’re beginning with <A href="#">JavaScript</A> or a <A href="#">React</A> professional.
            </P>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <img src={openSource} />
            <H3>Support open source</H3>
            <P>
              Reach users of your project by following tags, answering newcomer questions, and empowering experts in the community. <A href="#">Read the curl project creator’s story</A>.
            </P>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <img src={advocate} />
            <H3>Acquire and share knowledge</H3>
            <P>
              Answer questions and <A href="#">gain insights</A> from an audience of developers using your technology on Stack Overflow.
            </P>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <img src={careerSwitcher} />
            <H3>Find career opportunities</H3>
            <P>
              Create a profile that shows off your expertise and credentials to help you make your next move. Start your <A href="#">Developer Story</A>.
            </P>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
}

export default Learn;
