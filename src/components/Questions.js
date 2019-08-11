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

    }

    .questions-section {
      &:hover {
        -webkit-box-shadow: 0px 2px 5px 2px rgba(212,208,212,1);
        -moz-box-shadow: 0px 2px 5px 2px rgba(212,208,212,1);
        box-shadow: 0px 2px 5px 2px rgba(212,208,212,1);
      }
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

const H3 = styled.h3`
  font-family: 'Roboto Slab', serif;
  font-size: 1.3em;
  text-align: center;
  padding-top: 2em;
  padding-bottom: 2em;
`;

const Bar = styled.div`
  background: #f2720c;
  width: 80px;
  height: 6px;
  margin: 2em auto;
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
  background: #F48024;
`;

class Questions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: "",
      image1: {questionsBig1},
      image2: {questionsBig2},
      image3: {questionsBig3},
      image4: {questionsBig4},
      image5: {questionsBig5},
      image6: {questionsBig6}
    };
  }

  handleClick = e => {
    this.setState({
      isVisible: e.target.className
    });

    console.log("e contains : " + e.target.className);
  }

  render() {
    return (
      <div>
        <Styles>
          <Container>
            <H2>Questions are everywhere, answers are on Stack Overflow</H2>
            <Bar></Bar>
            <Container>
            <Row>
              <Col className="questions-section" xs={{span: 4}}>
                <Col xs={{span: 12}} className="one" onClick={this.handleClick}>
                  <img src={questions1} alt="questions" height="50" width="50"/>
                </Col>
                <Col xs={{span: 12}}>
                  <p>Ask a question</p>
                </Col>
              </Col>
              <Col className="questions-section" xs={{span: 4}}>
                <Col xs={{span: 12}} className="two" onClick={this.handleClick}>
                  <img src={questions2} alt="questions" height="50" width="50"/>
                </Col>
                <Col xs={{span: 12}}>
                <p>Vote on everything</p>
                </Col>
              </Col>
              <Col className="questions-section" xs={{span: 4}}>
                <Col xs={{span: 12}} className="three" onClick={this.handleClick}>
                  <img src={questions3} alt="questions" height="50" width="50" />
                </Col>
                <Col xs={{span: 12}}>
                  <p>Answer questions</p>
                </Col>
              </Col>
              <Col className="questions-section" xs={{span: 4}}>
                <Col xs={{span: 12}} className="four" onClick={this.handleClick}>
                  <img src={questions4} alt="questions" height="50" width="50" />
                </Col>
                <Col xs={{span: 12}}>
                  <p>Tag your question</p>
                </Col>
              </Col>
              <Col className="questions-section" xs={{span: 4}}>
                <Col xs={{span: 12}} className="five" onClick={this.handleClick}>
                  <img src={questions5} alt="questions" height="50" width="50" />
                </Col>
                <Col xs={{span: 12}}>
                  <p>Accept an answer</p>
                </Col>
              </Col>
              <Col className="questions-section" xs={{span: 4}}>
                <Col xs={{span: 12}} className="six" onClick={this.handleClick}>
                  <img src={questions6} alt="questions" height="50" width="50" />
                </Col>
                <Col xs={{span: 12}}>
                  <p>Get recognized</p>
                </Col>
              </Col>
            </Row>
            </Container>
            <Row>
              <Col className="featured-question" xs={{span: 12}}>

                {
                  this.state.isVisible === "one col-12" ?
                    <img src={questionsBig1} alt="featured image"/>
                  : ""
                }

                {
                  this.state.isVisible === "two col-12" ?
                    <img src={questionsBig2} alt="featured image" />
                  : ""
                }

                {
                  this.state.isVisible === "three col-12" ?
                    <img src={questionsBig3} alt="featured image" />
                  : ""
                }

                {
                  this.state.isVisible === "four col-12" ?
                    <img src={questionsBig4} alt="featured image" />
                  : ""
                }

                {
                  this.state.isVisible === "five col-12" ?
                    <img src={questionsBig5} alt="featured image" />
                  : ""
                }

                {
                  this.state.isVisible === "six col-12" ?
                    <img src={questionsBig6} alt="featured image" />
                  : ""
                }

                <H3>Ask a question publicly on 170+ Stack Exchange sites or privately using Stack Overflow for Teams.</H3>
                <BUTTON>Create an account</BUTTON>
              </Col>
            </Row>
          </Container>
        </Styles>
      </div>
    );
  }
}

export default Questions;
