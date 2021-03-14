import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { getSubdivisionStrength } from "../../../redux/actions/user"
import { Container, Grid, Card, Icon, Label, Menu, Tab } from "semantic-ui-react";
import LeaveList from '../LeaveList';
import LeaveCalendar from "./LeaveCalendar"
function ACDashboard({ getSubdivisionStrength }) {
    let initialState = { IO: { strength: 0, leave: 0, unavailable: 0 }, SI: { strength: 0, leave: 0, unavailable: 0 } }
    const [state, setstate] = useState(initialState)
    const fetchStrength = async () => {
        try {
            let res = await getSubdivisionStrength();
            if (res) {
                setstate(res)
            }
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        fetchStrength()
        return () => {

        }
    }, [])
    console.log(state)
    const panes = [
        {
            menuItem: (
                <Menu.Item key='Leaves'>
                    My Leave Applications
                </Menu.Item>
            ),
            render: () => <Tab.Pane><LeaveList /></Tab.Pane>,
        },
        {
            menuItem: { key: 'Strength Status', icon: 'users', content: 'User Leave Stat' },
            render: () => <Tab.Pane><LeaveCalendar /></Tab.Pane>,
        },
    ]
    return (
        <Container fluid className="dashboard">
            <Grid columns={3}>
                <Grid.Column>
                    <Card fluid className="strength-card">
                        <Card.Header className="text-center heading">
                            <div className="content-class">
                                <Icon className="card-icon" name='users' color="blue" />
                                <span className="heading-strength" >Total Strength</span>
                            </div>

                        </Card.Header>
                        <Card.Content className="text-center ">
                            <h3 className="card-header">Inspectors: {state.IO.strength}</h3>
                            <h3 className="card-header">Sub Inspectors:{state.SI.strength}</h3>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card fluid className="strength-card">
                        <Card.Header className="text-center heading">
                            <div className="content-class">
                                <Icon className="card-icon" name='users' color="red" />
                                <span className="heading-leave">On Leave/Unavailable</span>
                            </div>

                        </Card.Header>
                        <Card.Content className="text-center">

                            <h3 className="card-header">Inspectors: {state.IO.leave + state.IO.unavailable}</h3>
                            <h3 className="card-header">Sub Inspectors:{state.SI.leave + state.SI.unavailable}</h3>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card fluid className="strength-card">
                        <Card.Header className="text-center heading">
                            <div className="content-class">
                                <Icon className="card-icon" name='users' color="green" />
                                <span className="heading-available" >Available Streangth</span>
                            </div>

                        </Card.Header>
                        <Card.Content className="text-center">
                            <h3 className="card-header">Inspectors: {state.IO.strength - (state.IO.leave + state.IO.unavailable)}</h3>
                            <h3 className="card-header">Sub Inspectors:{state.SI.strength - (state.SI.leave + state.SI.unavailable)}</h3>
                        </Card.Content>
                    </Card>
                </Grid.Column>

                <Grid.Row className="panes">
                    <Tab className="panes-body" panes={panes} />
                </Grid.Row>
                <Grid.Row>

                </Grid.Row>
            </Grid>

        </Container>
    )
}

export default connect(null, { getSubdivisionStrength })(ACDashboard)
