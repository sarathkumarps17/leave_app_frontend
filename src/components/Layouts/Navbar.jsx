import React from "react";
import {
  Button,
  Container,
  Grid,
  Icon,
  // Dropdown,
  // Header,
  // Image,
  Menu,
} from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../redux/actions/auth";
import { connect } from "react-redux";
import toggleSideBar from "../../redux/actions/ToggleSidebar"
// import logo from "../../assets/images/logo.png";

// TODO: Update <Search> usage after its will be implemented

const Navbar = ({ logout, toggleSideBar, visible }) => (
  <Menu fixed="top" className="top-navbar">
    <Button icon={visible ? "angle double right" : "angle double left"} animated onClick={toggleSideBar} className="toggle-button" />
    <Menu.Item as={Link} to="/" header className="logo">
      {/* <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} /> */}
      {/*<div style={{background:`url(${logo}) center center/124px no-repeat`,width:'13em',height:'30px'}}></div> */}
    </Menu.Item>

    <Menu.Menu className="homebar" position="right">
      <Menu.Item as={NavLink} to="/" activeClassName="active" >
        Home
        </Menu.Item>
      <Menu.Item onClick={logout}>Log Out</Menu.Item>
    </Menu.Menu>
  </Menu>
);
const mapStateToProps = state => ({
  visible: state.visible
})
export default connect(mapStateToProps, { logout, toggleSideBar })(Navbar);
