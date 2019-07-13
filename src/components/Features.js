import React from 'react';
import styled, { css } from 'styled-components';
import { Card, Button, Container, Row, Col, ButtonToolbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Styles = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:700&display=swap');
  clip-path: polygon(0 0, 100% 4vw, 100% 100%, 0 100%);
  background-color: #f7f6f9 ;
  width: 100%;
  height: auto;
`;

const CustomCard = styled(Card)`
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2em;
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
          <Col xs={{span: 8, offset: 2}} md={{span: 4, offset: 0}}>
            <CustomCard>
              <Card.Body>
                <Card.Title className="text-center">Public Q&A</Card.Title>
                <Card.Text>
                  Quickly find and share internal knowledge with <A href="$">Private Q&A</A>
                </Card.Text>
              </Card.Body>
             </CustomCard>
           </Col>
           <Col xs={{span: 8, offset: 2}} md={{span: 4, offset: 0}}>
             <CustomCard>
               <Card.Body>
                 <Card.Title className="text-center">Public Q&A</Card.Title>
                 <Card.Text>
                   Find the perfect candidate for your growing technical team with <A href="#">Talent solutions</A>
                 </Card.Text>
               </Card.Body>
              </CustomCard>
            </Col>
            <Col xs={{span: 8, offset: 2}} md={{span: 4, offset: 0}}>
              <CustomCard>
                <Card.Body>
                  <Card.Title className="text-center">Public Q&A</Card.Title>
                  <Card.Text>
                    Accelerate the discovery of your products or services through our <A href="#">Advertising platform</A>
                  </Card.Text>
                </Card.Body>
               </CustomCard>
           </Col>
           </Row>
      </CONTAINER>
    </Styles>
  );
}

export default Features;
