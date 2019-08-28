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
  Row,
  InputGroup} from 'react-bootstrap';

const NAVBAR = styled(Navbar)`
    .input-group {
      width: 50%;
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
      <div>
      <NAVBAR bg="light" expand="all">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link href="#home">
              <a href="">Home</a>
            </Nav.Link>
            <Nav.Link href="#home">
              <a href="">Stack Overflow</a>
            </Nav.Link>
            <Nav.Link href="#home">
              <a href="">Tags</a>
            </Nav.Link>
            <Nav.Link href="#home">
              <a href="">Users</a>
            </Nav.Link>
            <Nav.Link href="#home">
              <a href="">Programming Jobs</a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home">
          <img src={logo} alt="stack overflow logo" width="180"/>
        </Navbar.Brand>
        <Nav className="mr-auto d-inline-block">
          <Nav.Link href="#" className="d-inline">
            <BUTTON>Products</BUTTON>
          </Nav.Link>
          <Nav.Link href="#link" className="d-inline">
            <BUTTON>Customers</BUTTON>
          </Nav.Link>
          <Nav.Link href="#link" className="d-inline">
            <BUTTON>Use cases</BUTTON>
          </Nav.Link>
        </Nav>
      </NAVBAR>
      <InputGroup>
        <FormControl
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Log in</Button>
          <Button variant="outline-secondary">Sign up</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
    );
  }
}

export default NavBar;
