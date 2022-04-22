import React from "react";
import PropType from "prop-types";

function Header({ text, bgColor, txtColor }) {
    return (
        <header style={{ backgroundColor: bgColor, color: txtColor }}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    );
}

Header.defaultProps = {
    text: "Feedback UI",
    bgColor: "rgba(0, 0, 0, .4)",
    txtColor: "#ff6a95",
};
Header.propType = {
    text: PropType.string,
};

export default Header;
