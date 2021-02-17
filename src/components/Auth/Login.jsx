import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Button,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Loader,
  Dimmer,
} from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../redux/actions/auth";

function Login({ login, isAuthenticated }) {
  useEffect(() => {
    return () => {
      // setsubmitting(false);
    };
  }, []);
  const [submitting, setsubmitting] = useState(false);
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  if (!submitting)
    return (
      <Grid
        textAlign="center"
        style={{ height: "80vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" textAlign="center">
            <Grid.Row>
              <Grid.Column>
                <Image src="/dome-logo.png" />
              </Grid.Column>
              <Grid.Column>Log into Leave Manager</Grid.Column>
            </Grid.Row>
          </Header>

          <Formik
            initialValues={{ userName: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.userName) {
                errors.userName = "Required";
              } else if (!/^[0-9]{6,6}$/i.test(values.userName)) {
                errors.userName = "Invalid userName address";
              }
              return errors;
            }}
            onSubmit={async (values) => {
              setsubmitting(true);
              await login(values.userName, values.password);
              setsubmitting(false);
            }}
          >
            {({ isSubmitting, errors, values }) => (
              <>
                <Form className="ui large form">
                  <Segment stacked>
                    <div className="field">
                      <div className="ui fluid left icon input">
                        <Field
                          type="text"
                          value={values.userName}
                          name="userName"
                          placeholder="Enter your PEN"
                        />
                        <i className="user icon"></i>
                      </div>
                      {errors.userName && (
                        <Message color="red" size="mini">
                          <ErrorMessage name="userName" component="div" />
                        </Message>
                      )}
                    </div>
                    <div className="field">
                      <div className="ui fluid left icon input">
                        <Field
                          type="password"
                          value={values.password}
                          name="password"
                          placeholder="Enter your password"
                        />
                        <i className="lock icon"></i>
                      </div>

                      {errors.password && (
                        <Message color="red" size="mini">
                          <ErrorMessage name="password" component="div" />
                        </Message>
                      )}
                    </div>
                    <Button
                      fluid
                      size="large"
                      type="submit"
                      primary
                      disabled={isSubmitting}
                    >
                      Login
                    </Button>
                  </Segment>
                </Form>
              </>
            )}
          </Formik>
        </Grid.Column>
      </Grid>
    );
  else
    return (
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
          <Loader size="large">Please wait while we verify your account</Loader>
        </Dimmer>
      </Segment>
    );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);
