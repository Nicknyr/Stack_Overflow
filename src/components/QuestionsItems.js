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



const QuestionsItems = (props) => {
    return (
      <div>
        <Container className="d-flex flex-md-row flex-column justify-content-center">
          <Row className="d-flex flex-md-column flex-row order-1 justify-content-center">
            <Col className={props.isVisible === 'option1' ? 'highlighted' : 'questions-section'}>
              {/* Applies arrow on highlighted item */}
              <Col className={props.isVisible === 'option1' ? 'pointer-left' : null}>
              </Col>
              <label className="cursor-pointer" onClick={props.handleOptionChange}>
                <input
                  type="radio"
                  value="option1"
                  checked={props.isVisible === 'option1'}
                  onChange={props.handleOptionChange}>
                </input>
                <Col xs={{span: 12}} className="text-center">
                  <img src={questions1} alt="pic" height="50"/>
                </Col>
                <p className="text-center">Ask a question</p>
              </label>
            </Col>
            <Col className={props.isVisible === 'option2' ? 'highlighted' : 'questions-section'}>
              {/* Applies arrow on highlighted item */}
              <Col className={props.isVisible === 'option2' ? 'pointer-left' : null}>
              </Col>
              <label className="cursor-pointer" onClick={props.handleClick}>
                <input
                  type="radio"
                  value="option2"
                  checked={props.isVisible === 'option2'}
                  onChange={props.handleOptionChange}>
                </input>
                <Col xs={{span: 12}} className="text-center">
                  <img src={questions2} alt="pic" height="50"/>
                </Col>
                <p className="text-center">Vote on everything</p>
              </label>
            </Col>
            <Col className={props.isVisible === 'option3' ? 'highlighted' : 'questions-section'}>
              {/* Applies arrow on highlighted item */}
              <Col className={props.isVisible === 'option3' ? 'pointer-left' : null}>
              </Col>
              <label className="cursor-pointer" onClick={props.handleClick}>
                <input
                  type="radio"
                  value="option3"
                  checked={props.isVisible === 'option3'}
                  onChange={props.handleOptionChange}>
                </input>
                <Col xs={{span: 12}} className="text-center">
                  <img src={questions3} alt="pic" height="50"/>
                </Col>
                <p className="text-center">Answer questions</p>
              </label>
            </Col>
        </Row>
        <Row className="d-flex flex-md-column align-items-end flex-row order-md-3 order-2 justify-content-center">
          <Col className={props.isVisible === 'option4' ? 'highlighted' : 'questions-section'}>
            {/* Applies arrow on highlighted item */}
            <Col className={props.isVisible === 'option4' ? 'pointer-right' : null}>
            </Col>
            <label className="cursor-pointer" onClick={props.handleClick}>
              <input
                type="radio"
                value="option4"
                checked={props.isVisible === 'option4'}
                onChange={props.handleOptionChange}>
              </input>
              <Col xs={{span: 12}} className="text-center">
                <img src={questions4} alt="pic" height="50"/>
              </Col>
              <p className="text-center">Tag your question</p>
            </label>
          </Col>
          <Col className={props.isVisible === 'option5' ? 'highlighted' : 'questions-section'}>
            {/* Applies arrow on highlighted item */}
            <Col className={props.isVisible === 'option5' ? 'pointer-right' : null}>
            </Col>
            <label className="cursor-pointer" onClick={props.handleClick}>
              <input
                type="radio"
                value="option5"
                checked={props.isVisible === 'option5'}
                onChange={props.handleOptionChange}>
              </input>
              <Col xs={{span: 12}} className="text-center">
                <img src={questions5} alt="pic" height="50"/>
              </Col>
              <p className="text-center">Accept an answer</p>
            </label>
          </Col>
          <Col className={props.isVisible === 'option6' ? 'highlighted' : 'questions-section'}>
            {/* Applies arrow on highlighted item */}
            <Col className={props.isVisible === 'option6' ? 'pointer-right' : null}>
            </Col>
            <label className="cursor-pointer" onClick={props.handleClick}>
              <input
                type="radio"
                value="option6"
                checked={props.isVisible === 'option6'}
                onChange={props.handleOptionChange}>
              </input>
              <Col xs={{span: 12}} className="text-center">
                <img src={questions6} alt="pic" height="50"/>
              </Col>
              <p className="text-center">Get recognized</p>
            </label>
          </Col>
        </Row>
        <Row className="d-flex flex-md-column flex-row image-container order-md-2 order-3 justify-content-center">
          <Col
            xs={{span: 12}}
            className="featured-question order-lg-2 order-3">
            {
              props.isVisible === 'option1' ?
                <Col xs={{span: 12}}>
                  <img src={questionsBig1} alt="featured image"/>
                </Col>
              : ""
            }

            {
              props.isVisible === 'option2' ?
                <Col xs={{span: 12}}>
                    <img src={questionsBig2} alt="featured image" />
                </Col>
              : ""
            }

            {
              props.isVisible === 'option3' ?
                <Col xs={{span: 12}}>
                    <img src={questionsBig3} alt="featured image" />
                </Col>
              : ""
            }

            {
              props.isVisible === 'option4' ?
                <Col xs={{span: 12}}>
                    <img src={questionsBig4} alt="featured image" />
                </Col>
              : ""
            }

            {
              props.isVisible === 'option5' ?
                <Col xs={{span: 12}}>
                    <img src={questionsBig5} alt="featured image" />
                </Col>
              : ""
            }

            {
              props.isVisible === 'option6' ?
                <Col xs={{span: 12}}>
                    <img src={questionsBig6} alt="featured image" />
                </Col>
              : ""
            }
        </Col>
        </Row>
        </Container>
      </div>
    );
}

export default QuestionsItems;
