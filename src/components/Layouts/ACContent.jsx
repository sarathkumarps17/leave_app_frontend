import React, { Suspense, Fragment } from 'react'
import {
    Route,
    Switch
} from 'react-router-dom'
import { Segment, Dimmer, Loader } from "semantic-ui-react"

// routes config
import { AC_routes } from "./routes"

const loading = (
    <Segment
        style={{
            position: "absolute",
            left: "0",
            right: "0",
            top: "0",
            bottom: "0",
        }}
    >
        <Dimmer active inverted>
            <Loader size="large">Please wait ..</Loader>
        </Dimmer>
    </Segment>
);

const TheContent = () => {
    return (
        <div className="body-container">
            <Suspense fallback={loading}>
                <Switch>
                    {AC_routes.map((route, idx) => {
                        return route.component && (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={props => (
                                    <Fragment>
                                        <route.component {...props} />
                                    </Fragment>
                                )} />
                        )
                    })}
                    {/* <Redirect from="/" to="/dashboard" /> */}
                </Switch>
            </Suspense>
        </div>
    )
}

export default React.memo(TheContent)
