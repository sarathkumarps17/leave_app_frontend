import { Router, Switch, Route } from "react-router-dom";
import React from "react";
// import Register from "./Auth/Register";
import Navbar from "./Layouts/Navbar";
import "./App.css";
import Login from "./Auth/Login";
// import ProtectedRoute from "./Auth/ProtectedRoute";
import { Segment, Loader, Dimmer } from "semantic-ui-react";
import { connect } from "react-redux";
import Home from "./Home/Home";
import history from "../history";

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
function App(props) {
  return (
    <div className="App">
      <Router history={history}>
        <React.Suspense fallback={loading}>
          <Navbar />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/" component={Home} />
          </Switch>
        </React.Suspense>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => ({
  alerts: Object.values(state.alert),
});

export default connect(mapStateToProps)(App);
