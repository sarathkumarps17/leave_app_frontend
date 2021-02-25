import React from 'react';
import { connect } from "react-redux"

import {
    Segment,
    Sidebar,
} from "semantic-ui-react"
import LeftMenu from './LeftMenu';
import ACContent from './ACContent';


function Layout({ userType, visible }) {
    if (userType)
        return (<Sidebar.Pushable
            as={Segment}
        >
            <LeftMenu />
            <Sidebar.Pusher>
                {/* <Navbar /> */}
                <ACContent />

            </Sidebar.Pusher>
        </Sidebar.Pushable>
        )
}
const mapStateToProps = state => ({
    userType: state.auth.user,
    visible: state.visible
})
export default connect(mapStateToProps)(Layout);
