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

  .questions-section {
      &:hover {
        box-shadow: 0 4px 12px rgba(36,39,41,0.2) !important;
      }

      padding: 12px;
    }

  label {
    width: 100%;
    height: 100%;

    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    span {
      font-size: .9em;
      font-weight: 500;
    }
  }

  .cursor-pointer {
    cursor: pointer !important;
  }

  input {
    display: none;
  }

  .hide-img {
    display: none;
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

class QuestionsRadio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: "option1"
    };
  }

  handleOptionChange = e => {
    this.setState({
      isVisible: e.target.value
    });

    console.log(this.state.isVisible);
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
              <Col className="questions-section" xs={{span: 4}} >
                <label className="cursor-pointer one" onClick={this.handleClick}>
                  <input
                    type="radio"
                    value="option1"
                    checked={this.state.isVisible === 'option1'}
                    onChange={this.handleOptionChange}>
                  </input>
                  <Col xs={{span: 12}}>
                    <img src={questions1} alt="pic" height="50"/>
                  </Col>
                  <Col xs={{span: 12}}>
                    <span>Ask a question</span>
                  </Col>
                </label>
              </Col>
              <Col className="questions-section" xs={{span: 4}}>
                <label className="cursor-pointer one" onClick={this.handleClick}>
                  <input
                    type="radio"
                    value="option2"
                    checked={this.state.isVisible === 'option2'}
                    onChange={this.handleOptionChange}>
                  </input>
                  <Col xs={{span: 12}}>
                    <img src={questions2} alt="pic" height="50"/>
                  </Col>
                  <span>Vote on everything</span>
                </label>
              </Col>
              <Col className="questions-section" xs={{span: 4}}>
                <label className="cursor-pointer one" onClick={this.handleClick}>
                  <input
                    type="radio"
                    value="option3"
                    checked={this.state.isVisible === 'option3'}
                    onChange={this.handleOptionChange}>
                  </input>
                  <Col xs={{span: 12}}>
                    <img src={questions3} alt="pic" height="50"/>
                  </Col>
                  <span>Answer questions</span>
                </label>
              </Col>
              <Col className="questions-section" xs={{span: 4}}>
                <label className="cursor-pointer one" onClick={this.handleClick}>
                  <input
                    type="radio"
                    value="option4"
                    checked={this.state.isVisible === 'option4'}
                    onChange={this.handleOptionChange}>
                  </input>
                  <Col xs={{span: 12}}>
                    <img src={questions4} alt="pic" height="50"/>
                  </Col>
                  <span>Tag your question</span>
                </label>
              </Col>
              <Col className="questions-section" xs={{span: 4}}>
                <label className="cursor-pointer one" onClick={this.handleClick}>
                  <input
                    type="radio"
                    value="option5"
                    checked={this.state.isVisible === 'option5'}
                    onChange={this.handleOptionChange}>
                  </input>
                  <Col xs={{span: 12}}>
                    <img src={questions5} alt="pic" height="50"/>
                  </Col>
                  <span>Accept an answer</span>
                </label>
              </Col>
              <Col className="questions-section" xs={{span: 4}}>
                <label className="cursor-pointer one" onClick={this.handleClick}>
                  <input
                    type="radio"
                    value="option6"
                    checked={this.state.isVisible === 'option6'}
                    onChange={this.handleOptionChange}>
                  </input>
                  <Col xs={{span: 12}}>
                    <img src={questions6} alt="pic" height="50"/>
                  </Col>
                  <span>Get recognized</span>
                </label>
              </Col>
            </Row>
            </Container>
            <Row>
              <Col className="featured-question" xs={{span: 12}}>
                {
                  this.state.isVisible === 'option1' ?
                    <Col xs={{span: 12}}>
                        <img src={questionsBig1} alt="featured image"/>
                    </Col>
                  : ""
                }

                {
                  this.state.isVisible === 'option2' ?
                    <Col xs={{span: 12}}>
                        <img src={questionsBig2} alt="featured image" />
                    </Col>
                  : ""
                }

                {
                  this.state.isVisible === 'option3' ?
                    <Col xs={{span: 12}}>
                        <img src={questionsBig3} alt="featured image" />
                    </Col>
                  : ""
                }

                {
                  this.state.isVisible === 'option4' ?
                    <Col xs={{span: 12}}>
                        <img src={questionsBig4} alt="featured image" />
                    </Col>
                  : ""
                }

                {
                  this.state.isVisible === 'option5' ?
                    <Col xs={{span: 12}}>
                        <img src={questionsBig5} alt="featured image" />
                    </Col>
                  : ""
                }

                {
                  this.state.isVisible === 'option6' ?
                    <Col xs={{span: 12}}>
                        <img src={questionsBig6} alt="featured image" />
                    </Col>
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

export default QuestionsRadio;
