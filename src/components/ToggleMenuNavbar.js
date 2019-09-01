import React from 'react';
import styled, {css} from 'styled-components';
import { NavDropdown, Button, Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Styles = styled.div`
  background: white;
  position: fixed;
  top: 3em;
  height: auto;
  width: 15em;
  z-index: 1000;
  border-right: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  box-shadow: 0 0 0 rgba(12,13,14,0.05);

  .svg-inline--fa {
    margin-right: 4px;
  }

  .business-icon {
    color: #F48024;
  }

  ul li {
    list-style-type: none;
    font-size: 13px;
    line-height: 1.8;
    padding-top: 4px;
    padding-bottom: 4px;

    a {
      color: #535a60;

      &:hover {
        text-decoration: none;
        color: black;
      }
    }
  }

  h4 {
    font-size: .8em;
  }

  .home-container {
    background-color: rgba(12,13,14,0.05);
    border-right: 4px solid #F48024;
    padding: 3px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const ToggleMenuNavbar = () => {
  return (
    <Styles>
      <Container>
        <Col className="home-container" xs={{span: 12}}>
          <h4>Home</h4>
        </Col>
        <h4>PUBLIC</h4>
        <ul>
          <li>
            <span>
              <FontAwesomeIcon icon="globe-americas" />
            </span>
            <span>
              <a href="#">Stack Overflow</a>
            </span>
          </li>
          <li>
            <a href="#">Tags</a>
          </li>
          <li>
            <a href="#">Users</a>
          </li>
          <li>
            <a href="#">Developer Jobs</a>
          </li>
        </ul>
        <h4>TEAMS</h4>
        <span>
          <FontAwesomeIcon className="business-icon" icon="business-time" />
        </span>
        <span>Q&A for Work</span>
      </Container>
    </Styles>
  );
}


export default ToggleMenuNavbar;
