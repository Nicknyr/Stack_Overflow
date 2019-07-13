import React from 'react';
import styled, { css } from 'styled-components';
import { Card, Button, Container, Row, Col, ButtonToolbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import robot from '../assets/robot.svg';
import jobsTech from '../assets/jobs-tech.svg';
import jobsSalary from '../assets/jobs-salary.svg';
import jobsVisa from '../assets/jobs-visa.svg';
import jobsRemote from '../assets/jobs-remote.svg';

const Styles = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:700&display=swap');
  clip-path: polygon(0 0, 100% 4vw, 100% 100%, 0 100%);
  background-color: #E1ECF4;
  width: 100%;
  height: auto;
  position: relative;

  .robot {
    position: relative;
    height: 200px;

    img {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }

  .anchor-p {
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    font-size: .9em;
    padding-left: 2em;
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
  padding-top: 5em;
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

const A = styled.a`
  background: white;
  border-radius: 5px;
  color: #212529;
  font-family: 'Roboto Slab', serif;
  font-weight: lighter;
  display: block;
  margin-bottom: 1em;
  margin-left: auto;
  margin-right: auto;
  padding: 16px !important;

  &:hover {
    color: #212529;
    text-decoration: none;
  }

  img {
    line-height: 5em;
  }
`;

const BUTTON = styled(Button)`
  background: #F48024;
  color: white;
  border: none;
  margin-top: 3em;
  margin-right: auto;
  margin-left: auto;
  height: 3em;
  width: 8em;
  display: block;

  &:hover {
    background: #F48024;
  }
`;


const Jobs = () => {
  return (
    <Styles>
        <Container>
          <Row>
            <Col xs={{span: 12,}} >
              <H2>Looking for a job?</H2>
            </Col>
            <Col xs={{span: 8, offset: 2}} md={{span: 6, offset: 0}} xl={{span: 2, offset: 0}}>
                <A href="#">
                  <Row>
                    <Col xs={2}>
                      <img src={jobsTech} alt="jobs tech" height="50" width="50" />
                    </Col>
                    <Col xs={{span: 9, offset: 1}} className="anchor-p">
                      <p>Browse jobs by technology</p>
                    </Col>
                  </Row>
                </A>
            </Col>
            <Col xs={{span: 8, offset: 2}} md={{span: 6, offset: 0}} xl={{span: 2, offset: 0}}>
              <A href="#">
                <Row>
                  <Col xs={2}>
                    <img src={jobsSalary} alt="jobs salary" height="50" width="50"/>
                  </Col>
                  <Col xs={{span: 9, offset: 1}} className="anchor-p">
                    <p>Browse jobs by salary</p>
                  </Col>
                </Row>
              </A>
            </Col>
            <Col xs={{span: 8, offset: 2}} md={{span: 6, offset: 0}} xl={{span: 2, offset: 0}}>
              <A href="#">
                <Row>
                  <Col xs={2}>
                    <img src={jobsVisa} alt="jobs visa" height="50" width="50"/>
                  </Col>
                  <Col xs={{span: 9, offset: 1}} className="anchor-p">
                    <p>Browse jobs by visa sponsorship</p>
                  </Col>
                </Row>
              </A>
            </Col>
            <Col xs={{span: 8, offset: 2}} md={{span: 6, offset: 0}} xl={{span: 2, offset: 0}}>
              <A href="#">
                <Row>
                  <Col xs={2}>
                    <img src={jobsRemote} alt="jobs remote" height="50" width="50"/>
                  </Col>
                  <Col xs={{span: 9, offset: 1}} className="anchor-p">
                    <p>Browse remote-friendly jobs</p>
                  </Col>
                </Row>
              </A>
            </Col>
            <Col xs={12} xl={{span: 2, offset: 0}}>
              <BUTTON>View all jobs</BUTTON>
            </Col>
            <Col xs={{span: 1, offset: 11 }} className="robot">
              <img src={robot} alt="robot" height="50" width="50"/>
            </Col>
          </Row>
        </Container>
    </Styles>
  );
}

export default Jobs;
