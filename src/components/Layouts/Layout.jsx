import React from 'react';
import { connect } from "react-redux"

import {
    Segment,
    Sidebar,
} from "semantic-ui-react"
import LeftMenu from './LeftMenu';
import ACContent from './ACContent';
// import Dashboard from '../Home/Dashboard';
import UserContent from './UserContent';


function Layout({ userType, visible }) {
    if (userType)
        return (<Sidebar.Pushable
            as={Segment}
        >
            <LeftMenu />
            <Sidebar.Pusher>
                {userType === 2 ? <ACContent /> : <UserContent />}
                {/* <ACContent /> */}
            </Sidebar.Pusher>
        </Sidebar.Pushable>
        )
}
const mapStateToProps = state => ({
    userType: state.auth.user.userType,
    visible: state.visible
})
export default connect(mapStateToProps)(Layout);
