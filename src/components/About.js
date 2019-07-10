import React from 'react';
import styled, { css } from 'styled-components';
import { Card, Button, Container, Row, Col, ButtonToolbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Styles = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:700&display=swap');
  background-color: snow;
  width: 100%;
  height: auto;

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
`;

const About = () => {
  return (
    <Styles>
      <Container>
      <CustomCard>
        <svg width="118" height="78" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="#848A91"><path d="M34.05 55.73L18.5 43.5h-12L1.25 5.47 67.69.69 52.4 43.5H30.99zM10.5 16.5h45M10.5 25.5h39M10.5 34.5h24M69.16 77.39l-4.7-2.89h-6.12l-2.71-12.23 24.29-2.48-3.23 14.71h-8.83zM61.5 65.5h13M61.5 68.5h10M61.5 71.5h7M80.16 36.07l5.34-4.57h7V19.03l-24.8-3.4 2.8 15.87 10.78.1zM89.5 21.5h-17M89.5 25.5h-15M89.5 28.5h-9M96.84 70.5l10.77-9h6.12l2.89-19.85-39.59-4.57 8.84 25.42h12.57zM111.5 46.5h-27M111.5 52.5h-23M111.5 57.5h-15M43.39 43.49L58.34 61.5M61.74 18.69l8.84 12.57M92.5 25l15.11 15.43M80 59.5l3.15-3.78M52.57 43.49l27.52 3.06"/></g></svg>
        <Card.Body>
          <Card.Title className="text-center">Public Q&A</Card.Title>
          <Card.Text>
            Get answers to more than 16.5 million questions and give back by sharing your knowledge with others. Sign up for an account.
          </Card.Text>
          <Button variant="primary" className="text-center">Go somewhere</Button>
        </Card.Body>
       </CustomCard>
       <CustomCard>
         <svg width="128" height="82" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="#848A91"><path d="M33.48 55.73L18.19 43.5H5.5L.68 5.47 67.12.69 51.83 43.5H30.42zM9.5 16.5h45M9.5 25.5h39M9.5 34.5h24M109.41 81.13l8.29-6.63h6.8l2.68-20.61-36-2.59 8.29 23.2h11.03zM122.5 59.5h-25M122.5 64.5h-22M122.5 69.5h-13"/><circle cx="81.5" cy="33.5" r="15"/><path d="M73.5 31.5h15v10h-15zM74.94 30.84s-.69-7.5 6.24-7.5 6.25 7.5 6.25 7.5"/><path d="M76.68 30.84s-.51-5.41 4.5-5.41 4.51 5.41 4.51 5.41M92.68 44.59l7 7M55.68 32.59L69.5 24.5"/></g></svg>
         <Card.Body>
           <Card.Title className="text-center">Private Q&A</Card.Title>
           <Card.Text>
             Level up with Stack Overflow while you work. Share knowledge privately with your coworkers using our flagship Q&A engine.
           </Card.Text>
           <Button variant="primary" className="text-center">Learn more</Button>
         </Card.Body>
        </CustomCard>
        <CustomCard>
          <svg width="128" height="67" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="#848A91"><path d="M28.49 65.72L15.72 55.5H5.5L1.09 23.73l55.5-4L43.82 55.5H25.94zM8.5 33.5h38M8.5 40.5h33M8.5 47.5h20"/><circle cx="75.5" cy="26.5" r="15"/><path d="M83.5 13.5l10.59-2.52M109 31.13l8.29-6.63h7.21l2.28-20.61-36-2.59 8.28 23.2h11.6zM122.5 9.5h-25M122.5 14.5h-22M122.5 19.5h-13M48.5 43.5l12-12M66.5 23.5h18v10h-18zM71.59 23.48a3.5 3.5 0 0 1 7 0M70.5 23.5v10M79.5 23.5v10"/></g></svg>
          <Card.Body>
            <Card.Title className="text-center">Browse jobs</Card.Title>
            <Card.Text>
              Find the right job through high quality listings and search for roles based on title, technology stack, salary, location, and more.
            </Card.Text>
            <Button variant="primary" className="text-center">Find a job</Button>
          </Card.Body>
         </CustomCard>
      </Container>
    </Styles>
  );
}

export default About;
