import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Message } from 'semantic-ui-react'

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div className="alert mt-2" id='alert' key={alert.id}>
      {alert.alertType === "success" ? <Message success>{alert.msg}</Message> :
        (alert.alertType === "warning" ? <Message warning>{alert.msg}</Message> :
          <Message negative>{alert.msg}</Message>
        )
      }
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};
const mapPropsToState = (state) => ({
  alerts: state.alert,
});

export default connect(mapPropsToState)(Alert);
