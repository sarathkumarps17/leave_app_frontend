import React from 'react'
import { Container, Grid, Card, Icon, Label, Menu, Tab } from "semantic-ui-react";
import LeaveList from '../LeaveList';
function ACDashboard() {
    const panes = [
        {
            menuItem: { key: 'Strength Status', icon: 'users', content: 'Users' },
            render: () => <Tab.Pane>Strength</Tab.Pane>,
        },
        {
            menuItem: (
                <Menu.Item key='Leaves'>
                    Leaves
                </Menu.Item>
            ),
            render: () => <Tab.Pane><LeaveList /></Tab.Pane>,
        },
    ]
    return (
        <Container fluid className="dashboard">
            <Grid columns={3}>
                <Grid.Column>
                    <Card>
                        <Card.Header>
                            <Icon name='users' color="blue" />
                                Total Streangth
                            </Card.Header>
                        <Card.Content>
                            <h3>Inspectors:</h3>
                            <h3>Sub Inspectors:</h3>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Card.Header>
                            <Icon name='users' color="red" />
                               On Leave/Unavailable
                            </Card.Header>
                        <Card.Content>
                            <h3>Inspectors:</h3>
                            <h3>Sub Inspectors:</h3>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Card.Header>
                            <Icon name='users' color="green" />
                                Available Streangth
                            </Card.Header>
                        <Card.Content>
                            <h3>Inspectors:</h3>
                            <h3>Sub Inspectors:</h3>
                        </Card.Content>
                    </Card>
                </Grid.Column>

                <Grid.Row>
                    <Tab panes={panes} />
                </Grid.Row>
                <Grid.Row>

                </Grid.Row>
            </Grid>

        </Container>
    )
}

export default ACDashboard
