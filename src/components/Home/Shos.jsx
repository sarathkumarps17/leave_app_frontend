import React from 'react';
import { Grid, Card } from 'semantic-ui-react'

function Shos() {
    return (
        <div className="homecard">
            <Grid>

                <Grid.Row>
                    <Grid.Column width={8}>
                        <div className="homecard_3">
                            <Card
                                href='#card-example-link-card'
                                header='Apply HPL'
                                meta='Half Pay Leave'
                                description='Apply New HPL'
                            />
                        </div>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <div className="homecard_4">
                            <Card
                                href='#card-example-link-card'
                                header='Extend Leave'
                                meta=''
                                description='Extend your Current leave'
                            />
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Shos
