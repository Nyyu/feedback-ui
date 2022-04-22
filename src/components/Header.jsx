import React from "react";
import { Link } from "react-router-dom";
import PropType from "prop-types";

function Header({ text, bgColor, txtColor }) {
    return (
        <header style={{ backgroundColor: bgColor }}>
            <div className="container">
                <Link
                    className="Link"
                    style={{
                        // More specific cus link/visited properties
                        color: txtColor,
                    }}
                    to={{
                        pathname: "/",
                    }}
                >
                    <h2>{text}</h2>
                </Link>
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
