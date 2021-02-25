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
    <div className="navbar-toggler">
      <Icon className="navbar-toggler-icon" size="big" name={visible ? "angle double left" : "angle double right"} onClick={toggleSideBar} />
    </div>

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
