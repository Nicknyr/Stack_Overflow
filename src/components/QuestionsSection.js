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
import QuestionsItems from './QuestionsItems';


const Styles = styled.div`
  padding-top: 5em;
  padding-bottom: 10em;

  img {
    max-width: 100%;
  }

  .cursor-pointer {
    cursor: pointer !important;
  }

  input {
    display: none;
  }

  label {
    width: 100%;
  }

  .questions-section {
    padding: 5px;
  }

  .highlighted {
    padding: 5px;
    box-shadow: 0 4px 12px rgba(36,39,41,0.2) !important;
    border: 1px solid rgba(36,39,41,0.2);
    border-radius: 5px;
  }

  @media(min-width: 768px) {

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
  padding-bottom: .8em;
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

class QuestionsSection extends React.Component {
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
  }

  render() {
    return (
      <div>
        <Styles>
          <Container>
            <H2>Questions are everywhere, answers are on Stack Overflow</H2>
            <Bar></Bar>
            <QuestionsItems
              isVisible={this.state.isVisible}
              handleOptionChange={this.handleOptionChange}
            />
            <H3>Ask a question publicly on 170+ Stack Exchange sites or privately using Stack Overflow for Teams.</H3>
            <BUTTON>Create an account</BUTTON>
          </Container>
        </Styles>
      </div>
    );
  }
}

export default QuestionsSection;
