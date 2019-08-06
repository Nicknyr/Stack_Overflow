import React, {Component} from 'react';
import styled, { css } from 'styled-components';
import sprites from '../assets/sprites.svg';
import logo from '../assets/stack-overflow-logo-large.svg';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Brand,
  Col,
  Row} from 'react-bootstrap';

const NAVBAR = styled(Navbar)`
  .form-inline {
    width: 60%;
  }

  .form-inline {
    width: 70%;
  }

  .form-control {
    width: 80%;
  }

  .navbar-nav {
    width: 30%;
  }

  .navbar-brand {
    width: 12%;
  }

  .nav-link {
    font-size: 14px;
    font-weight: 500;
  }

`;

const BUTTON = styled(Button)`
  font-size: 12px;
  font-weight: bold;
  background: #0095ff;
  border: 1px solid #07c;
  box-shadow: inset 0 1px 0 #66bfff;
`;

const loginButton = styled(Button)`
  font-size: 12px;
`;

class NavBar extends Component {
  render() {
    return (
      <NAVBAR bg="light" expand="md">
        <Navbar.Brand href="#home" className="mr-4">
          <img
            src={logo}
            height="40"
            width="200"
            className="d-inline-block align-middle"
            alt="stackoverflow logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-2">
            <Nav.Link href="#home">Products</Nav.Link>
            <Nav.Link href="#link">Customers</Nav.Link>
            <Nav.Link href="#home">Use cases</Nav.Link>
          </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
              <loginButton className="mr-2">Log In</loginButton>
              <BUTTON>Sign Up</BUTTON>
            </Form>
        </Navbar.Collapse>
      </NAVBAR>
    );
  }
}

export default NavBar;
