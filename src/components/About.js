import React from 'react';
import styled, { css } from 'styled-components';
import { Card, Button, Container, Row, Col, ButtonToolbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import publicqa from '../assets/public-qa.svg';
import privateqa from '../assets/private-qa.svg';
import jobs from '../assets/jobs.svg';

const Styles = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:700&display=swap');
  background-color: white;
  width: 100%;
  height: auto;
  padding-bottom: 3em;

  img {
     margin: 1.2em;
  }

  .greeting {
    margin-top: 1.5em;
    margin-bottom: 1.5em;
  }

  .middle-card {
    position: relative;
    bottom: 70px;
  }


`;

const CustomCard = styled(Card)`
  ${props => props.middle && css`
    positon: absolute;
    bottom: 100px;
  `}

  padding: 1em;
  height: 24em;
  margin-bottom: 2.5em;
  -webkit-box-shadow: 0px 6px 15px 1px rgba(212,208,212,0.76);
  -moz-box-shadow: 0px 6px 15px 1px rgba(212,208,212,0.76);
  box-shadow: 0px 6px 15px 1px rgba(212,208,212,0.76);

  &:hover {
    -webkit-box-shadow: 0px 2px 5px 2px rgba(212,208,212,1);
    -moz-box-shadow: 0px 2px 5px 2px rgba(212,208,212,1);
    box-shadow: 0px 2px 5px 2px rgba(212,208,212,1);
  }

  .card-title {
    font-family: 'Roboto Slab', serif;
    font-weight: 200;
    color: 242729;
    font-size: 1.3em;
  }

  .card-text {
    text-align: center;
    font-weight: 500;
    font-size: 10em;
    color: #242729;
    line-height: 1.3;
    font-size: .9em;
    margin-top: 1.5em;
    margin-bottom: 1.5em;

  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
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

  @media(min-width: 726px) {
    margin-bottom: 7em;
  }
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
  margin: 1.9em auto;
  display: block;
`;


const BUTTON = styled(Button)`
  display: block;
  border: none;
  font-size: .9em;
  font-weight: 500;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 24px;
  width: auto;
  height: 3em;
  margin-left: auto;
  margin-right: auto;

  ${props => props.purple && css`
    background: #2b2d6e;

    &:hover {
      background: #2b2d6e;
    }
  `}

  ${props => props.orange && css`
    background: #F48024;

    &:hover {
      background: #F48024;
    }
  `}
`;


const About = () => {
  return (
    <Styles>
      <Container>
      <Row>
        <Col className="greeting" xs={{span: 12}} md={{span: 8, offset: 2}}>
          <H2 >For developers, by developers</H2>
          <Bar></Bar>
          <P>
            Stack Overflow is an <A href="#">open community</A> for anyone that codes. We help you get answers to your toughest coding questions, share knowledge with your coworkers in private, and find your next dream job.
          </P>
        </Col>
      </Row>
      <Row>
        <Col xs={{span:8, offset: 2}} md={{span: 4, offset: 0}}>
          {/* Only show animated CustomCard on large screens */}
          <CustomCard data-aos="fade-right" className="d-none d-lg-block">
            <Col xs={{span: 8, offset: 2}}>
              <img src={publicqa} alt="public qa" height="82" width="128" />
            </Col>
            <Card.Body>
              <Card.Title className="text-center">Public Q&A</Card.Title>
              <Card.Text>
                  Get answers to more than 16.5 million questions and give back by sharing your knowledge with others. Sign up for an account.
              </Card.Text>
              <BUTTON purple>Browse Questions</BUTTON>
            </Card.Body>
           </CustomCard>
           {/* On xs, sm, md screens show CustomCard without animation */}
           <CustomCard className="d-block d-lg-none">
             <Col xs={{span: 12}}>
               <img src={publicqa} alt="public qa" height="82" width="128" />
             </Col>
             <Card.Body>
               <Card.Title className="text-center">Public Q&A</Card.Title>
               <Card.Text>
                   Get answers to more than 16.5 million questions and give back by sharing your knowledge with others. Sign up for an account.
               </Card.Text>
               <BUTTON purple>Browse Questions</BUTTON>
             </Card.Body>
            </CustomCard>
        </Col>
        <Col xs={{span: 8, offset: 2}} md={{span: 4, offset: 0}}>
          {/* Only show animated CustomCard on large screens */}
           <CustomCard data-aos="fade-up" className="d-none d-lg-block middle-card">
             <Col xs={{span: 8, offset: 2}}>
               <img src={privateqa} alt="private qa" height="82" width="128"/>
             </Col>
             <Card.Body>
               <Card.Title className="text-center">Private Q&A</Card.Title>
               <Card.Text>
                    Level up with Stack Overflow while you work. Share knowledge privately with your coworkers using our flagship Q&A engine.
               </Card.Text>
               <BUTTON orange>Learn more</BUTTON>
             </Card.Body>
            </CustomCard>
             {/* On xs, sm, md screens show CustomCard without animation */}
            <CustomCard className="d-block d-lg-none">
              <Col xs={{span: 12}}>
                <img src={privateqa} alt="private qa" height="82" width="128"/>
              </Col>
              <Card.Body>
                <Card.Title className="text-center">Private Q&A</Card.Title>
                <Card.Text>
                     Level up with Stack Overflow while you work. Share knowledge privately with your coworkers using our flagship Q&A engine.
                </Card.Text>
                <BUTTON orange>Learn more</BUTTON>
              </Card.Body>
             </CustomCard>
          </Col>
          <Col xs={{span: 8, offset: 2}} md={{span: 4, offset: 0}}>
            {/* Only show animated CustomCard on large screens */}
            <CustomCard data-aos="fade-left" className="d-none d-lg-block">
              <Col xs={{span: 8, offset: 2}}>
                <img src={jobs} alt="jobs" height="82" width="128"/>
              </Col>
              <Card.Body>
                <Card.Title className="text-center">Browse jobs</Card.Title>
                <Card.Text>
                    Find the right job through high quality listings and search for roles based on title, technology stack, salary, location, and more.
                </Card.Text>
                <BUTTON purple>Find a job</BUTTON>
              </Card.Body>
             </CustomCard>
             {/* On xs, sm, md screens show CustomCard without animation */}
             <CustomCard className="d-block d-lg-none">
               <Col xs={{span: 12}}>
                 <img src={jobs} alt="jobs" height="82" width="128"/>
               </Col>
               <Card.Body>
                 <Card.Title className="text-center">Browse jobs</Card.Title>
                 <Card.Text>
                     Find the right job through high quality listings and search for roles based on title, technology stack, salary, location, and more.
                 </Card.Text>
                 <BUTTON purple>Find a job</BUTTON>
               </Card.Body>
              </CustomCard>
           </Col>
         </Row>
      </Container>
    </Styles>
  );
}

export default About;
