import React from "react";
import {
  Container,
  // Dropdown,
  // Header,
  // Image,
  Menu,
} from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../redux/actions/auth";
import { connect } from "react-redux";
// import logo from "../../assets/images/logo.png";

// TODO: Update <Search> usage after its will be implemented

const Navbar = ({ logout }) => (
  <Menu fixed="top">
    <Container>
      <Menu.Item as={Link} to="/" header className="logo">
        {/* <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} /> */}
        {/*<div style={{background:`url(${logo}) center center/124px no-repeat`,width:'13em',height:'30px'}}></div> */}
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item as={NavLink} to="/" activeClassName="active">
          Home
        </Menu.Item>
        <Menu.Item onClick={logout}>Log Out</Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);

export default connect(null, { logout })(Navbar);
