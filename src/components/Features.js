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
  height: 9em;
  width: 20em;
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
          <H2>For businesses, by developers</H2>
          <Bar></Bar>
          <P>
            Our mission is to help developers write the script of the future. This means helping you find and hire skilled developers for your business and providing them the tools they need to share knowledge and work effectively.
          </P>
        </Row>
      <CustomCard>
        <Card.Body>
          <Card.Title className="text-center">Public Q&A</Card.Title>
          <Card.Text>
            Quickly find and share internal knowledge with <A href="$">Private Q&A</A>
          </Card.Text>
        </Card.Body>
       </CustomCard>
       <CustomCard>
         <svg width="118" height="78" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="#848A91"><path d="M34.05 55.73L18.5 43.5h-12L1.25 5.47 67.69.69 52.4 43.5H30.99zM10.5 16.5h45M10.5 25.5h39M10.5 34.5h24M69.16 77.39l-4.7-2.89h-6.12l-2.71-12.23 24.29-2.48-3.23 14.71h-8.83zM61.5 65.5h13M61.5 68.5h10M61.5 71.5h7M80.16 36.07l5.34-4.57h7V19.03l-24.8-3.4 2.8 15.87 10.78.1zM89.5 21.5h-17M89.5 25.5h-15M89.5 28.5h-9M96.84 70.5l10.77-9h6.12l2.89-19.85-39.59-4.57 8.84 25.42h12.57zM111.5 46.5h-27M111.5 52.5h-23M111.5 57.5h-15M43.39 43.49L58.34 61.5M61.74 18.69l8.84 12.57M92.5 25l15.11 15.43M80 59.5l3.15-3.78M52.57 43.49l27.52 3.06"/></g></svg>
         <Card.Body>
           <Card.Title className="text-center">Public Q&A</Card.Title>
           <Card.Text>
             Find the perfect candidate for your growing technical team with <A href="#">Talent solutions</A>
           </Card.Text>
         </Card.Body>
        </CustomCard>
        <CustomCard>
          <svg width="118" height="78" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="#848A91"><path d="M34.05 55.73L18.5 43.5h-12L1.25 5.47 67.69.69 52.4 43.5H30.99zM10.5 16.5h45M10.5 25.5h39M10.5 34.5h24M69.16 77.39l-4.7-2.89h-6.12l-2.71-12.23 24.29-2.48-3.23 14.71h-8.83zM61.5 65.5h13M61.5 68.5h10M61.5 71.5h7M80.16 36.07l5.34-4.57h7V19.03l-24.8-3.4 2.8 15.87 10.78.1zM89.5 21.5h-17M89.5 25.5h-15M89.5 28.5h-9M96.84 70.5l10.77-9h6.12l2.89-19.85-39.59-4.57 8.84 25.42h12.57zM111.5 46.5h-27M111.5 52.5h-23M111.5 57.5h-15M43.39 43.49L58.34 61.5M61.74 18.69l8.84 12.57M92.5 25l15.11 15.43M80 59.5l3.15-3.78M52.57 43.49l27.52 3.06"/></g></svg>
          <Card.Body>
            <Card.Title className="text-center">Public Q&A</Card.Title>
            <Card.Text>
              Accelerate the discovery of your products or services through our <A href="#">Advertising platform</A>
            </Card.Text>
          </Card.Body>
         </CustomCard>
      </CONTAINER>
    </Styles>
  );
}

export default Features;
