import React from 'react';
import { Container, Grid, Card, Icon } from "semantic-ui-react"

function Dashboard() {
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

                            <h3>SHO:</h3>

                            <h3>SI:</h3>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Card.Header>
                            <Icon name='users' color="red" />
                            Total Streangth
                        </Card.Header>
                        <Card.Content>
                            <h3>SHO:</h3>
                            <h3>SI:</h3>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Card.Header>
                            <Icon name='users' color="red" />
                            Total Streangth
                        </Card.Header>
                        <Card.Content>
                            <h3>SHO:</h3>
                            <h3>SI:</h3>
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

export default Dashboard
