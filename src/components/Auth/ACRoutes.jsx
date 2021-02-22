import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
function ACRoutes({ checkToken,
    userType,
    component: Component,
    ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) =>
                userType !== "AC" ? <Redirect to="/" /> : <Component {...props} />
            }
        />
    );
};

ACRoutes.propTypes = {
    userType: PropTypes.string.isRequired,
};
const mapStateToprops = (state) => ({
    userType: state.auth.user.userType
});

export default connect(mapStateToprops)(ACRoutes);
