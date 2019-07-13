import React from 'react';
import styled, { css } from 'styled-components';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import stackoverflowLogo from '../assets/stack-overflow-logo.svg';

const StyledFooter = styled.div`
  background-color: #242729;
  height: auto;
  width: 100%;
  color: snow;
  padding: 1em;

  h5 {
    color: #bbc0c4;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 1.3;
    font-size: .7em;
    padding-top: .2em;
    padding-bottom: .2em;
  }

  ul {
    list-style-type: none;
    display: inline-block;
    padding: 0;

    li a {
      font-size: .7em;
      color: #848d95;
      margin-right: .4em;

      &:hover {
        color: #bbc0c4;
        text-decoration: none;
      }
    }
  }

  .social li {
    color: red;
    display: inline-block;
  }

  p {
    color: #848d95;
    font-size: .7em;
  }

  @media (min-width: 768px) {
    h5 {
      font-size: .8em;
    }

    ul li {
      font-size: 1.1em;
    }

    .social li {
      font-size: 1em;
    }
  }

`;

const CopyrightP = styled.p`
  @media (min-width: 768px) {
     margin-top: 10em;;
   }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Row>
        <Col className="d-none d-md-block" md={{span: 1}}>
          <img src={stackoverflowLogo} alt="stackoverflow logo" height="50" width="50" />
        </Col>
        <Col xs={{span: 4}} sm={{span: 3}} md={{span: 2, offset: 0}}>
          <h5>Stack Overflow</h5>
          <ul>
            <li><a href="#">Questions</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Developer Jobs Directory</a></li>
            <li><a href="#">Salary Calculator</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Mobile</a></li>
            <li><a href="#">Disable Responsiveness</a></li>
          </ul>
        </Col>
        <Col xs={{span: 3, offset: 1}} sm={{span: 3, offset: 0}} md={{span: 2, offset: 0}}>
          <h5>Products</h5>
          <ul>
            <li><a href="#">Teams</a></li>
            <li><a href="#">Talent</a></li>
            <li><a href="#">Advertising</a></li>
            <li><a href="#">Enterprise</a></li>
          </ul>
        </Col>
        <Col xs={{span: 3, offset: 1}} sm={{span: 3, offset: 0}} md={{span: 2, offset: 0}}>
          <h5>Company</h5>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Work Here</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </Col>
        <Col xs="4" sm={{span: 3}}>
          <h5>Stack Exchange Network</h5>
          <ul>
            <li>
              <a href="#">Technology</a>
              <FontAwesomeIcon icon="angle-right" />
            </li>
            <li>
              <a href="#">Life / Arts</a>
              <FontAwesomeIcon icon="angle-right" />
            </li>
            <li>
              <a href="#">Culture / Recreation</a>
              <FontAwesomeIcon icon="angle-right" />
            </li>
            <li>
              <a href="#">Science</a>
              <FontAwesomeIcon icon="angle-right" />
            </li>
            <li>
              <a href="#">Other</a>
              <FontAwesomeIcon icon="angle-right" />
            </li>
          </ul>
        </Col>
        <Col xs="12" md={{span: 2}}>
          <ul class="social">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
          <CopyrightP>site design / logo © 2019 Stack Exchange Inc; user contributions licensed under cc by-sa 3.0 with attribution required. rev 2019.7.9.34262</CopyrightP>
        </Col>
      </Row>
    </StyledFooter>
  );
}

export default Footer;
