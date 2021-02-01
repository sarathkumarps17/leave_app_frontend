import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Card, Button } from "semantic-ui-react";
// import { connect } from "react-redux";

class LeftMenu extends Component {
  render() {
    return (
      <Menu
        size="large"
        className="left-menu"
        fixed="top"
        pointing
        secondary
        vertical
      >
        {
          // <Menu.Item>
          //     <Card wrapped="true">
          //         <Card.Content textAlign='center'>
          //             <div
          //             style={{ background: `url(${this.props.avatar})center/cover no-repeat`,height:'150px'}}
          //              className="ui small bordered circular image" ></div>
          //             <br />  <br />
          //             <Card.Header >{this.props.name}</Card.Header>
          //             <Card.Meta>
          //                 Advertiser
          //         </Card.Meta>
          //         </Card.Content>
          //         <Card.Content textAlign='center' extra>
          //             <Button as={NavLink} to="/edit-profile" basic>View Profile</Button>
          //         </Card.Content>
          //     </Card>
          // </Menu.Item>
        }
        <Menu.Item
          name="Status"
          as={NavLink}
          to="/"
          exact
          activeClassName="active"
          icon="calendar alternate"
        />
        <Menu.Item
          name="Stations"
          as={NavLink}
          to="/stations"
          activeClassName="active"
          icon="building"
        />
      </Menu>
    );
  }
}

// const mapStateToProps = (state) => ({
//   name: state.auth.advertiser.firstname + " " + state.auth.advertiser.lastname,
//   avatar: state.auth.advertiser.avatar,
// });
export default LeftMenu;
