import React from "react";

function Stats({ feedback }) {
    function handleAvg(e) {
        return (e.reduce((total, e) => total + e.rating, 0) / e.length)
            .toFixed(1)
            .replace(/[.,]0$/, "");
    }
    return (
        <div className="feedback-stats">
            <h4>{feedback.length !== 0 && `${feedback.length} Reviews`} </h4>
            <h4>
                {isNaN(handleAvg(feedback))
                    ? ""
                    : `Average Rating: ${handleAvg(feedback)}`}
            </h4>
        </div>
    );
}

export default Stats;
