import React from "react";
import PropTypes from "prop-types";

function Button({ children, version, type, isDisabled }) {
    return (
        <button
            type={type}
            className={`btn btn-${version}`}
            disabled={isDisabled}
        >
            {children}
        </button>
    );
}

Button.defaultProps = {
    version: "primary",
    isDisabled: false,
    type: "button",
    children: "Send",
};
Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
};

export default Button;
