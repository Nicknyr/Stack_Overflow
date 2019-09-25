import React from 'react';
import styled, { css } from 'styled-components';
import { Card, Button, Container, Row, Col, ButtonToolbar, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCoffee } from '@fortawesome/free-solid-svg-icons';


const Styles = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:700&display=swap');
  background: #2b2d6e;
  width: 100%;
  height: auto;
  clip-path: polygon(0 0, 100% 4vw, 100% calc(100% - 4vw), 0 100%);
  margin-top: -3em;
  position: relative;
  padding-bottom: 3em;
`;

const CustomCard = styled(Card)`
  positon: absolute;
  bottom: 0;
  left: 0;
  height: auto;
  margin-bottom: 2em;
  border-radius: 5px;

  .card-body {
    padding: 0;
  }

  .card-subtitle {
    text-align: center;
    font-size: .9em;
  }

  .card-title {
    font-family: 'Roboto Slab', serif;
    color: 242729;
  }

  .card-text {
    padding: .5em .5em;

    .dollar {
      font-weight: 700;
      font-family: 'Roboto Slab', serif;
      font-size: 1.9em;
    }

    .plan {
      color: #242729;
      font-size: .7em;
      display: inline-block;
      width: 100px;
      margin-bottom: 0;
      margin-left: 5px;
    }
  }

  ul {
    padding-left: .5em;
    //padding-top: 1em;
    padding-bottom: .8em;
  }

  ul li {
    margin-top: .8em;
    list-style-type: none;
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
  margin-bottom: 16px;
  font-size: 1.6em;
  font-weight: 700;
  font-family: 'Roboto Slab', serif;
  width: 100%;
  color: white;
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
  margin-bottom: 24px;
  color: white;
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
  margin: 2em auto;
  display: block;
`;

const CustomButton = styled(Button)`
  background: #f2720c;
  color: white;
  border: none;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2em;
  margin-bottom: 3.5em;
  height: 2.8em;
  width: 8em;
  font-size: .95em;
  color: white;
  font-weight: 500;

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
  width: 100%;
  height: 2.7em;

  &:hover {
    background: #2b2d6e;
  }
`;

const CONTAINER = styled(Container)`
  padding-top: 7em;
  padding-bottom: 5em;
`;


const Plans = () => {
  return (
    <Styles>
      <CONTAINER>
      <Row>
        <Col xs={{span: 12}} md={{span: 8, offset: 2}}>
          <H2>Unlock siloed knowledge with Stack Overflow for Teams</H2>
          <Bar></Bar>
        </Col>
        <Col xs={{span: 10, offset: 1}} md={{span: 8, offset: 2}}>
          <P>
            Wikis, chat messages, or formal documentation for knowledge management aren’t effective. Our question and answer format is a proven approach for accessing the right information in less time.
          </P>
          <CustomButton>Learn more</CustomButton>
        </Col>
      </Row>
      <Row>
        <Col xs={{span: 8, offset: 2}} md={{span: 4, offset: 0}} className="d-flex align-items-end">
          <CustomCard small>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Card.Title className="text-center">Basic</Card.Title>
                  <Card.Subtitle>Private Q&A for teams</Card.Subtitle>
                </ListGroup.Item>
              </ListGroup>
                <Card.Text>
                  <ul>
                   <li>
                     <Row className="no-gutters">
                       <Col xs={{span: 2}} md={{span: 3}}>
                         <span className="dollar">$5</span>
                       </Col>
                       <Col xs={{span: 4}}>
                         <p className="plan">Per user / month</p>
                         <p className="plan">billed annually</p>
                       </Col>
                     </Row>
                   </li>
                   <li>
                     <Row>
                       <Col xs={{span: 1}}>
                         <FontAwesomeIcon
                           icon={faCheck}
                           size="md"
                           color="grey"
                           />
                       </Col>
                       <Col xs={{span: 10}}>
                         <span>Free 14 day trial</span>
                       </Col>
                     </Row>
                   </li>
                   <li>
                     <Row>
                       <Col xs={{span: 1}}>
                         <FontAwesomeIcon
                           icon={faCheck}
                           size="md"
                           color="grey"
                           />
                       </Col>
                       <Col xs={{span: 10}}>
                         <span>A single team hosted on stackoverflow.com</span>
                       </Col>
                     </Row>
                   </li>
                   <li>
                     <Row>
                       <Col xs={{span: 1}}>
                         <FontAwesomeIcon
                           icon={faCheck}
                           size="md"
                           color="grey"
                           />
                       </Col>
                       <Col xs={{span: 10}}>
                         <span>Unlimited private questions and answers</span>
                       </Col>
                     </Row>
                   </li>
                   <li>
                     <Row>
                       <Col xs={{span: 1}}>
                         <FontAwesomeIcon
                           icon={faCheck}
                           size="md"
                           color="grey"
                           />
                       </Col>
                       <Col xs={{span: 10}}>
                         <span>Searchable archive</span>
                       </Col>
                     </Row>
                   </li>
                  </ul>
                  <Col xs={{span: 12}}>
                    <BlueButton variant="primary" className="text-center">Create your team</BlueButton>
                  </Col>
                </Card.Text>
            </Card.Body>
            </CustomCard>
          </Col>
          <Col xs={{span: 8, offset: 2}} md={{span: 4, offset: 0}} className="d-flex align-items-end">
            <CustomCard medium>
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
                    <Row className="no-gutters">
                      <Col xs={{span: 2}} md={{span: 3}}>
                        <span className="dollar">$11</span>
                      </Col>
                      <Col xs={{span: 4}}>
                        <p className="plan">Per user / month</p>
                        <p className="plan">billed annually</p>
                      </Col>
                    </Row>
                   <li> </li>
                   <li>
                     <Row>
                       <Col xs={{span: 1}}>
                         <FontAwesomeIcon
                           icon={faCheck}
                           size="md"
                           color="grey"
                           />
                       </Col>
                       <Col xs={{span: 10}}>
                         <span>All the features of Basic</span>
                       </Col>
                     </Row>
                   </li>
                   <li>
                     <Row>
                       <Col xs={{span: 1}}>
                         <FontAwesomeIcon
                           icon={faCheck}
                           size="md"
                           color="grey"
                           />
                       </Col>
                       <Col xs={{span: 10}}>
                         <span>Single Sign-On (SSO), with SAML</span>
                       </Col>
                     </Row>
                   </li>
                   <li>
                     <Row>
                       <Col xs={{span: 1}}>
                         <FontAwesomeIcon
                           icon={faCheck}
                           size="md"
                           color="grey"
                           />
                       </Col>
                       <Col xs={{span: 10}}>
                         <span>Invoicing</span>
                       </Col>
                     </Row>
                   </li>
                   <li>
                     <Row>
                       <Col xs={{span: 1}}>
                         <FontAwesomeIcon
                           icon={faCheck}
                           size="md"
                           color="grey"
                           />
                       </Col>
                       <Col xs={{span: 10}}>
                         <span>Reporting and Analytics</span>
                       </Col>
                     </Row>
                   </li>
                   <li>
                     <Row>
                       <Col xs={{span: 1}}>
                         <FontAwesomeIcon
                           icon={faCheck}
                           size="md"
                           color="grey"
                           />
                       </Col>
                       <Col xs={{span: 10}}>
                         <span>Priority customer support</span>
                       </Col>
                     </Row>
                   </li>
                   <li>
                     <Row>
                       <Col xs={{span: 1}}>
                         <FontAwesomeIcon
                           icon={faCheck}
                           size="md"
                           color="grey"
                           />
                       </Col>
                       <Col xs={{span: 10}}>
                         <span>99.5% uptime</span>
                       </Col>
                     </Row>
                   </li>
                  </ul>
                  <Col xs={{span: 12}}>
                    <BlueButton variant="primary" className="text-center">Request a demo</BlueButton>
                  </Col>
                </Card.Text>
            </Card.Body>
          </CustomCard>
          </Col>
          <Col xs={{span: 8, offset: 2}} md={{span: 4, offset:0}} className="d-flex align-items-end">
            <CustomCard large>
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
                    <Row className="no-gutters">
                      <Col xs={{span: 2}} md={{span: 3}}>
                        <span className="dollar">$17</span>
                      </Col>
                      <Col xs={{span: 4}}>
                        <p className="plan">Per user / month</p>
                        <p className="plan">billed annually</p>
                      </Col>
                    </Row>
                   <li>
                     <Row>
                       <Col xs={{span: 1}}>
                         <FontAwesomeIcon
                           icon={faCheck}
                           size="md"
                           color="grey"
                           />
                       </Col>
                       <Col xs={{span: 10}}>
                         <span>All the features of Basic and Business</span>
                       </Col>
                     </Row>
                   </li>
                   <li>
                     <Row>
                       <Col xs={{span: 1}}>
                         <FontAwesomeIcon
                           icon={faCheck}
                           size="md"
                           color="grey"
                           />
                       </Col>
                       <Col xs={{span: 10}}>
                         <span>Host on your cloud, your own servers, or our private cloud</span>
                       </Col>
                     </Row>
                   </li>
                   <li>
                     <Row>
                       <Col xs={{span: 1}}>
                         <FontAwesomeIcon
                           icon={faCheck}
                           size="md"
                           color="grey"
                           />
                       </Col>
                       <Col xs={{span: 10}}>
                         <span>Single Sign-On: AD, SAML</span>
                       </Col>
                     </Row>
                   </li>
                   <li>
                     <Row>
                       <Col xs={{span: 1}}>
                         <FontAwesomeIcon
                           icon={faCheck}
                           size="md"
                           color="grey"
                           />
                       </Col>
                       <Col xs={{span: 10}}>
                         <span>Robust Read and Write API</span>
                       </Col>
                     </Row>
                   </li>
                   <li>
                     <Row>
                       <Col xs={{span: 1}}>
                         <FontAwesomeIcon
                           icon={faCheck}
                           size="md"
                           color="grey"
                           />
                       </Col>
                       <Col xs={{span: 10}}>
                         <span>Dedicated Customer Success and Community Building</span>
                       </Col>
                     </Row>
                   </li>
                   <li>
                     <Row>
                       <Col xs={{span: 1}}>
                         <FontAwesomeIcon
                           icon={faCheck}
                           size="md"
                           color="grey"
                           />
                       </Col>
                       <Col xs={{span: 10}}>
                         <span>99.5% uptime</span>
                       </Col>
                     </Row>
                   </li>
                   <li>
                     <Row>
                       <Col xs={{span: 1}}>
                         <FontAwesomeIcon
                           icon={faCheck}
                           size="md"
                           color="grey"
                           />
                       </Col>
                       <Col xs={{span: 10}}>
                         <span>Customized Themes and Privileges</span>
                       </Col>
                     </Row>
                   </li>
                  </ul>
                  <Col xs={{span: 12}}>
                    <BlueButton variant="primary" className="text-center">Request a demo</BlueButton>
                  </Col>
                </Card.Text>
            </Card.Body>
           </CustomCard>
         </Col>
       </Row>
      </CONTAINER>
    </Styles>
  );
}

export default Plans;
