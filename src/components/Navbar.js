import React, {Component} from 'react';
import styled, { css } from 'styled-components';
import sprites from '../assets/sprites.svg';
import logo from '../assets/stack-overflow-logo-large.svg';
import logoSmall from '../assets/logoSmall.png';
import ToggleMenuNavbar from './ToggleMenuNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import onClickOutside from 'react-onclickoutside';
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
    border-top: 3px solid #F48024;
    border-bottom: 1px solid lightgray;

    .navbar {

    }

    .input-group {
      flex: 1;
    }

    .navbar-brand {
      margin-right: 0;
    }

    .navbar-toggler {
      border: none !important;
      padding: 0;
      border: none;
    }
`;

const BUTTON = styled(Button)`
  font-size: 12px;
  font-weight: bolder;
  border-radius: 20px;
  padding: 6px 10px;
  color: #535a60;
  background: transparent;
  border: 0px transparent;

  &:hover {
    background: #e4e6e8;
    border: 1px solid #e4e6e8;
    box-shadow: inset 0 1px 0 #e4e6e8;
    color: #0C0D0E;
  }
`;

const ORANGEBUTTON = styled(BUTTON)`
  background: #F48024;
  border: 1px solid #F48024;
  box-shadow: inset 0 1px 0 #F48024;
  color: #FFF;

  &:hover {
    background: #da670b;
    border: 1px solid #da670b;
    box-shadow: inset 0 1px 0 #da670b;
    color: #FFF;
  }
`;

const LOGINBUTTON = styled(BUTTON)`
  color: #07C;
  font-weight: normal;

  &:hover {
    color: #005999;
    background-color: rgba(0,119,204,0.1);
    border-color: transparent;
    box-shadow: none;
  }
`;

const SIGNUPBUTTON = styled(BUTTON)`
  color: #FFF;
  background-color: #0095ff;
  border: 1px solid #07C;
  box-shadow: inset 0 1px 0 #66BFFF;

  &:hover {
    color: rgba(255,255,255,0.9);
    background-color: #07C;
    border-color: #005999;
    box-shadow: inset 0 1px 0 #3AF;
  }
`;


class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displaySearchbarBottom: true,
      showToggleMenu: false
    }

  }

  handleClickOutside = evt => {
    this.setState({
      showToggleMenu: false
    })
  };

  handleClick = () => {
    this.setState(prevState => ({
      displaySearchbarBottom: !prevState.displaySearchbarBottom
    }));
  }

  menuClick = () => {
    this.setState({
      showToggleMenu: !this.state.showToggleMenu
    })
  }

  render() {
    return (
      <NAVBAR className="fixed-top justify-content-between d-flex py-0" bg="light" expand="all" ref={this.setWrapperRef}>
        <Navbar.Brand href="#home" className="order-2">
          <img src={logo} className="d-none d-md-block" alt="stack overflow logo" width="160"/>
          <img src={logoSmall} className="d-md-none d-xs-block" alt="stack overflow logo" width="45"/>
        </Navbar.Brand>
        <Nav className="mr-auto d-inline-block order-3">
          <Nav.Link href="#" className="d-inline mr-1">
            <ORANGEBUTTON>Products</ORANGEBUTTON>
          </Nav.Link>
          <Nav.Link href="#link" className="d-none d-md-inline-block mr-1">
            <BUTTON>Customers</BUTTON>
          </Nav.Link>
          <Nav.Link href="#link" className="d-none d-md-inline-block mr-1">
            <BUTTON>Use cases</BUTTON>
          </Nav.Link>
        </Nav>
        <FontAwesomeIcon onClick={this.handleClick} className="business-icon d-md-none order-4" icon="search" />
        <InputGroup className="input-group-sm ml-4 order-5">
          <FormControl
            placeholder="Search..."
            aria-label="Search"
            aria-describedby="basic-addon2"
            className="d-none d-md-block"
          />
        <InputGroup.Append className="ml-auto order-6">
            <LOGINBUTTON variant="outline-secondary mr-1">Log in</LOGINBUTTON>
            <SIGNUPBUTTON variant="outline-secondary">Sign up</SIGNUPBUTTON>
          </InputGroup.Append>
        </InputGroup>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="order-1"
          onClick={this.menuClick}/>
        <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse>
        {this.state.showToggleMenu ?
          <ToggleMenuNavbar />
          : null
        }
      </NAVBAR>

    );
  }
}

export default onClickOutside(NavBar);
