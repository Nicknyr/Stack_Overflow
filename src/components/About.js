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

  img {
    margin: 1.2em;
  }


`;

const CustomCard = styled(Card)`
  ${props => props.middle && css`
    positon: absolute;
    bottom: 100px;
  `}

  margin-bottom: 2em;
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
    font-weight: light;
    color: 242729;
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
`;

const P = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 1em;
  color: #242729;
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

const CardP = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 1em;
  color: #242729;
  line-height: 1.3;
  font-size: 13px;
`;

const BUTTON = styled(Button)`
  display: block;
  border: none;

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
        <Col xs={{span: 12}} md={{span: 8, offset: 2}}>
          <H2 >For developers, by developers</H2>
          <Bar></Bar>
          <P>
            Stack Overflow is an <A href="#">open community</A> for anyone that codes. We help you get answers to your toughest coding questions, share knowledge with your coworkers in private, and find your next dream job.
          </P>
        </Col>
      </Row>
      <Row>
        <Col xs={{span: 8, offset: 2}} md={{span: 4, offset: 0}}>
          {/* Only show animated CustomCard on large screens */}
          <CustomCard data-aos="fade-right" className="d-none d-lg-block">
            <Col xs={{span: 8, offset: 2}}>
              <img src={publicqa} alt="public qa" height="82" width="128" />
            </Col>
            <Card.Body>
              <Card.Title className="text-center">Public Q&A</Card.Title>
              <Card.Text>
                <CardP>
                  Get answers to more than 16.5 million questions and give back by sharing your knowledge with others. Sign up for an account.
                </CardP>
              </Card.Text>
              <Col xs={{span: 8, offset: 2}}>
                <BUTTON purple>Browse Questions</BUTTON>
              </Col>
            </Card.Body>
           </CustomCard>
           {/* On xs, sm, md screens show CustomCard without animation */}
           <CustomCard className="d-block d-lg-none">
             <Col xs={{span: 8, offset: 2}}>
               <img src={publicqa} alt="public qa" height="82" width="128" />
             </Col>
             <Card.Body>
               <Card.Title className="text-center">Public Q&A</Card.Title>
               <Card.Text>
                 <CardP>
                   Get answers to more than 16.5 million questions and give back by sharing your knowledge with others. Sign up for an account.
                 </CardP>
               </Card.Text>
               <Col xs={{span: 8, offset: 2}}>
                 <BUTTON purple>Browse Questions</BUTTON>
               </Col>
             </Card.Body>
            </CustomCard>
        </Col>
        <Col xs={{span: 8, offset: 2}} md={{span: 4, offset: 0}}>
          {/* Only show animated CustomCard on large screens */}
           <CustomCard data-aos="fade-up" className="d-none d-lg-block">
             <Col xs={{span: 8, offset: 2}}>
               <img src={privateqa} alt="private qa" height="82" width="128"/>
             </Col>
             <Card.Body>
               <Card.Title className="text-center">Private Q&A</Card.Title>
               <Card.Text>
                 <CardP>
                    Level up with Stack Overflow while you work. Share knowledge privately with your coworkers using our flagship Q&A engine.
                 </CardP>
               </Card.Text>
               <Col xs={{span: 6, offset: 3}}>
                 <BUTTON orange>Learn more</BUTTON>
               </Col>
             </Card.Body>
            </CustomCard>
             {/* On xs, sm, md screens show CustomCard without animation */}
            <CustomCard className="d-block d-lg-none">
              <Col xs={{span: 8, offset: 2}}>
                <img src={privateqa} alt="private qa" height="82" width="128"/>
              </Col>
              <Card.Body>
                <Card.Title className="text-center">Private Q&A</Card.Title>
                <Card.Text>
                  <CardP>
                     Level up with Stack Overflow while you work. Share knowledge privately with your coworkers using our flagship Q&A engine.
                  </CardP>
                </Card.Text>
                <Col xs={{span: 6, offset: 3}}>
                  <BUTTON orange>Learn more</BUTTON>
                </Col>
              </Card.Body>
             </CustomCard>
          </Col>
          <Col xs={{span: 8, offset: 2}} md={{span: 4, offset: 0}}>
            {/* Only show animated CustomCard on large screens */}
            <CustomCard data-aos="fade-left" className="d-none d-lg-block">
              <Col xs={{span: 8, offset: 2}}>
                <img src={jobs} alt="jobs" height="67" width="128"/>
              </Col>
              <Card.Body>
                <Card.Title className="text-center">Browse jobs</Card.Title>
                <Card.Text>
                  <CardP>
                    Find the right job through high quality listings and search for roles based on title, technology stack, salary, location, and more.
                  </CardP>
                </Card.Text>
                <Col xs={{span: 6, offset: 3}}>
                  <BUTTON purple>Find a job</BUTTON>
                </Col>
              </Card.Body>
             </CustomCard>
             {/* On xs, sm, md screens show CustomCard without animation */}
             <CustomCard className="d-block d-lg-none">
               <Col xs={{span: 8, offset: 2}}>
                 <img src={jobs} alt="jobs" height="67" width="128"/>
               </Col>
               <Card.Body>
                 <Card.Title className="text-center">Browse jobs</Card.Title>
                 <Card.Text>
                   <CardP>
                     Find the right job through high quality listings and search for roles based on title, technology stack, salary, location, and more.
                   </CardP>
                 </Card.Text>
                 <Col xs={{span: 6, offset: 3}}>
                   <BUTTON purple>Find a job</BUTTON>
                 </Col>
               </Card.Body>
              </CustomCard>
           </Col>
         </Row>
      </Container>
    </Styles>
  );
}

export default About;
