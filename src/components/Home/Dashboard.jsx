import React from 'react';
import { Container, Grid } from "semantic-ui-react";
import LeaveList from './LeaveList';

function Dashboard() {
    return (
        <Container fluid className="dashboard">
            <Grid columns={3}>
                <Grid.Column>
                    <LeaveList />
                </Grid.Column>
            </Grid>
        </Container>
    )
}

export default Dashboard
