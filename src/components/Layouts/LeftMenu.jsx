import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Card, Button, Sidebar } from "semantic-ui-react";
import { connect } from "react-redux";


function LeftMenu({ user, visible }) {
  return (
    <Sidebar
      as={Menu}
      animation="push"
      direction="left"
      icon='labeled'
      inverted
      vertical
      visible={visible}
      width="very thin"
      className="left-sidebar"
    >
      <Menu.Item className="profile-card">
        <Card wrapped="true" >
          <Card.Content textAlign='center'>
            <Card.Header >{user.name}</Card.Header>
            <Card.Meta>
              {user.designation}
            </Card.Meta>
          </Card.Content>
          <Card.Content textAlign='center' extra>
            <Button as={NavLink} to="/edit-profile" basic>View Profile</Button>
          </Card.Content>
        </Card>
      </Menu.Item>
      <Menu.Item
        name="Status"
        as={NavLink}
        to="/"
        exact
        activeClassName="active"
        icon="calendar alternate"
      />

      {user.userType === 2 && <>
        <Menu.Item
          name="Leave Applicatios"
          as={NavLink}
          to="/leaveRequests"
          activeClassName="active"
          icon="envelope outline"
        />
        <Menu.Item
          name="inspectors"
          as={NavLink}
          to="/sho"
          activeClassName="active"
          icon="building"
        >

        </Menu.Item>


        <Menu.Item
          name="Sub Inspectors"
          as={NavLink}
          to="/si"
          activeClassName="active"
          icon="shield"
        >

        </Menu.Item>


      </>}
      <Menu.Item
        name="Applay Leave"
        as={NavLink}
        to="/leave"
        activeClassName="active"
        icon="edit"
      >

      </Menu.Item>
    </Sidebar>



  );
}



const mapStateToProps = (state) => ({
  user: state.auth.user,
  visible: state.visible
});
export default connect(mapStateToProps)(LeftMenu);
