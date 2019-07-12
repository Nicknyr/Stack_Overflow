import React, {Component} from 'react';
import styled, { css } from 'styled-components';
import sprites from '../assets/sprites.svg';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Brand } from 'react-bootstrap';

const NAVBAR = styled(Navbar)`
  .form-inline {
    width: 60%;
  }

  .form-inline .form-control {
    width: 70%;
    margin-right: 20%;
  }

  .navbar-brand {
    background: url('../assets/sprites.svg') no-repeat 0 -500px;
    width: 150px;
    height: 30px;
  }

  .nav-link {
    background: #F48024;
  }
`;


class NavBar extends Component {
  render() {
    return (
      <NAVBAR bg="light" expand="lg">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Products</Nav.Link>
            <Nav.Link href="#link">Customers</Nav.Link>
            <Nav.Link href="#home">Use cases</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Navbar.Text>
                Log In
              </Navbar.Text>
            <Button variant="outline-success">Sign Up</Button>
          </Form>
        </Navbar.Collapse>
      </NAVBAR>
    );
  }
}

export default NavBar;
