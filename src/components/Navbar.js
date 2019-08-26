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
      width: 70%;

      input {
        width: 70%;
      }

      .btn .btn-outline-success{

      }
    }

    .basic-navbar-nav {
      margin-right: 0;
      margin: 0;
    }
`;

const BUTTON = styled(Button)`
  font-size: 12px;
  font-weight: bold;
  background: #F48024;
  border: 1px solid #F48024;
  box-shadow: inset 0 1px 0 #F48024;
  border-radius: 20px;
  padding-left: 10px;
  padding-right: 10px;

  &:hover {
    background: #F48024;
    border: 1px solid #F48024;
    box-shadow: inset 0 1px 0 #F48024;
  }
`;

const loginButton = styled(Button)`
  font-size: 12px;
`;

class NavBar extends Component {
  render() {
    return (
      <NAVBAR bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="#home">
          <img src={logo} alt="stack overflow logo" width="180"/>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link href="#home">
              <BUTTON>Products</BUTTON>
            </Nav.Link>
            <Nav.Link href="#link">
              <BUTTON>Customers</BUTTON>
            </Nav.Link>
            <Nav.Link href="#link">
              <BUTTON>Use cases</BUTTON>
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2 ml-auto" />
            <Button variant="outline-success">Log in</Button>
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </NAVBAR>

    );
  }
}

export default NavBar;
