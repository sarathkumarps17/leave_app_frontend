import React from 'react'
import { Container, Grid, Card, Icon } from "semantic-ui-react";
function ACDashboard() {
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

                </Grid.Row>
                <Grid.Row>

                </Grid.Row>
            </Grid>

        </Container>
    )
}

export default ACDashboard
