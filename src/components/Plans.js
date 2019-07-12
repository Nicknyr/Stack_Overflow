import React from 'react';
import styled, { css } from 'styled-components';
import { Card, Button, Container, Row, Col, ButtonToolbar, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Styles = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:700&display=swap');
  background: #2b2d6e;
  width: 100%;
  height: auto;
  clip-path: polygon(0 0, 100% 4vw, 100% calc(100% - 4vw), 0 100%);
  margin-top: -3em;

  svg {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2em;
    margin-bottom: 2em;
  }
`;

const CustomCard = styled(Card)`
  width: 17em;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2em;

  .card-body {
    padding: 0;
  }

  .card-subtitle {
    text-align: center;
  }

  .card-title {
    font-family: 'Roboto Slab', serif;
    font-weight: light;
    color: 242729;
  }

  .card-text {
    padding: 1em .5em;
  }

  .fa-check {
    display: inline-block;
  }

  .fa-ul {
    background: red;
    padding-left: 0;
    margin-left: 0;
  }

  .fa-li {
    width: 100%;
  }

  .card-text {
    font-size: .9em;
    color: #242729;
    font-weight: 500;
    display: inline-block;
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
  color: white;
`;

const P = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: .95em;
  color: white;
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

const Bar = styled.div`
  background: #f2720c;
  width: 80px;
  height: 6px;
  margin: 1.3em auto;
  display: block;
`;

const CustomButton = styled(Button)`
  background: #f2720c;
  color: white;
  border: none;
  margin-left: auto;
  margin-right: auto;

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
`;

const Plans = () => {
  return (
    <Styles>
      <CONTAINER>
      <Row>
        <H2>Unlock siloed knowledge with Stack Overflow for Teams</H2>
        <Bar></Bar>
        <P>
          Wikis, chat messages, or formal documentation for knowledge management aren’t effective. Our question and answer format is a proven approach for accessing the right information in less time.
        </P>
        <CustomButton>Learn more</CustomButton>
      </Row>
      <CustomCard>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Card.Title className="text-center">Basic</Card.Title>
              <Card.Subtitle>Private Q&A for teams</Card.Subtitle>
            </ListGroup.Item>
          </ListGroup>
            <Card.Text>
              <ul>
               <li>$5 Per user / month billed annually</li>
               <li>Get answers to more than 16.5 million questions and give back by sharing your knowledge with others. Sign up for an account.</li>
               <li>Free 14 day trial</li>
               <li> A single team hosted on stackoverflow.com</li>
               <li>Unlimited private questions and answers</li>
               <li>Searchable archive</li>
              </ul>
              <BlueButton variant="primary" className="text-center">Create your team</BlueButton>
            </Card.Text>
        </Card.Body>
        </CustomCard>
        <CustomCard>
        <Card.Body>
          <ListGroup variant="flush">
              <ListGroup.Item>
                <Card.Title className="text-center">Business</Card.Title>
                <Card.Subtitle>
                  Private Q&A with secure single sign-on and premium features for your whole organization
                </Card.Subtitle>
              </ListGroup.Item>
          </ListGroup>
            <Card.Text>
              <ul>
               <li>$11 Per user / month billed annually</li>
               <li>All the features of Basic</li>
               <li>Single Sign-On (SSO), with SAML</li>
               <li> Invoicing</li>
               <li>Reporting and Analytics</li>
               <li>Priority customer support</li>
               <li>99.5% uptime</li>
              </ul>
              <BlueButton variant="primary" className="text-center">Request a demo</BlueButton>
            </Card.Text>
        </Card.Body>
        </CustomCard>
        <CustomCard>
        <Card.Body>
          <ListGroup variant="flush">
              <ListGroup.Item>
                <Card.Title className="text-center">Enterprise</Card.Title>
                <Card.Subtitle>
                  Your own standalone Q&A community, with enhanced security and flexible hosting options
                </Card.Subtitle>
              </ListGroup.Item>
          </ListGroup>
            <Card.Text>
              <ul>
               <li>$17 Per user / month billed annually</li>
               <li>All the features of Basic and Business</li>
               <li>Host on your cloud, your own servers, or our private cloud</li>
               <li>Single Sign-On: AD, SAML</li>
               <li>Robust Read and Write API</li>
               <li>Dedicated Customer Success and Community Building</li>
               <li>99.5% uptime</li>
               <li>Customized Themes and Privileges</li>
              </ul>
              <BlueButton variant="primary" className="text-center">Request a demo</BlueButton>
            </Card.Text>
        </Card.Body>
       </CustomCard>
      </CONTAINER>
    </Styles>
  );
}

export default Plans;
