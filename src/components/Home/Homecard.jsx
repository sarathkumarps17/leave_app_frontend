import React from 'react'
import { Grid, Image, Card } from 'semantic-ui-react'

function Homecard() {
  return(
      <div className="homecard">
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <div className="homecard_1">
                  <Card
                    href='#card-example-link-card'
                    header='Apply CL'
                    meta='Casual Leave'
                    description='New Casul Leave Application'
                  />
                </div>
              </Grid.Column>
              <Grid.Column width={8}>
                <div className="homecard_2">
                    <Card
                      href='#card-example-link-card'
                      header='Apply EL'
                      meta='Earn Leave'
                      description='Apply New Earn Leave'
                    />
                  </div>
              </Grid.Column>
            </Grid.Row>

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

export default Homecard;