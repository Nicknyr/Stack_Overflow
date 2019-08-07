import React from 'react';
import styled, { css } from 'styled-components';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import questions1 from '../assets/questions-1.svg';
import questions2 from '../assets/questions-2.svg';
import questions3 from '../assets/questions-3.svg';
import questions4 from '../assets/questions-4.svg';
import questions5 from '../assets/questions-5.svg';
import questions6 from '../assets/questions-6.svg';
import questionsBig1 from '../assets/questions-1-big.svg';
import questionsBig2 from '../assets/questions-2-big.svg';
import questionsBig3 from '../assets/questions-3-big.svg';
import questionsBig4 from '../assets/questions-4-big.svg';
import questionsBig5 from '../assets/questions-5-big.svg';
import questionsBig6 from '../assets/questions-6-big.svg';


const Styles = styled.div`
    padding-top: 5em;
    padding-bottom: 10em;

    .featured-question {
      background: grey;
      height: 15em;
      width: 100%;
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

const Bar = styled.div`
  background: #f2720c;
  width: 80px;
  height: 6px;
  margin: 2em auto;
  display: block;
`;


class Questions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Styles>
          <Container>
            <H2>Questions are everywhere, answers are on Stack Overflow</H2>
            <Bar></Bar>
            <Row>
              <Col className="questions-section" xs={{span: 4}}>
                <Col xs={{span: 12}}>
                  <img src={questions1} alt="questions" height="50" width="50"/>
                </Col>
                <Col xs={{span: 12}}>
                <p>Ask a question</p>
                </Col>
              </Col>
              <Col className="questions-section" xs={{span: 4}}>
                <Col xs={{span: 12}}>
                  <img src={questions2} alt="questions" height="50" width="50"/>
                </Col>
                <Col xs={{span: 12}}>
                <p>Vote on everything</p>
                </Col>
              </Col>
              <Col className="questions-section" xs={{span: 4}}>
                <Col xs={{span: 12}}>
                  <img src={questions3} alt="questions" height="50" width="50" />
                </Col>
                <Col xs={{span: 12}}>
                  <p>Answer questions</p>
                </Col>
              </Col>
              <Col className="questions-section" xs={{span: 4}}>
                <Col xs={{span: 12}}>
                  <img src={questions4} alt="questions" height="50" width="50" />
                </Col>
                <Col xs={{span: 12}}>
                  <p>Tag your question</p>
                </Col>
              </Col>
              <Col className="questions-section" xs={{span: 4}}>
                <Col xs={{span: 12}}>
                  <img src={questions5} alt="questions" height="50" width="50" />
                </Col>
                <Col xs={{span: 12}}>
                  <p>Accept an answer</p>
                </Col>
              </Col>
              <Col className="questions-section" xs={{span: 4}}>
                <Col xs={{span: 12}}>
                  <img src={questions6} alt="questions" height="50" width="50" />
                </Col>
                <Col xs={{span: 12}}>
                  <p>Get recognized</p>
                </Col>
              </Col>
            </Row>
            <Row>
              <Col className="featured-question" xs={{span: 12}}>

              </Col>
            </Row>
          </Container>
        </Styles>
      </div>
    );
  }
}

export default Questions;
