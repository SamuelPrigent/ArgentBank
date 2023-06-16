import PropTypes from "prop-types";

// Alert Message for form
function Alert({ alert }) {
  return <div className={`${alert.error ? "alert-msg" : ""}`}>{alert.msg}</div>;
}

export default Alert;

Alert.propTypes = {
  alert: PropTypes.object,
};
