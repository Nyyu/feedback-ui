import React from "react";
import Item from "./Item";

function List({ feedback, handleDelete }) {
    return (
        <div className="feedback-list">
            {feedback.length !== 0 || feedback === undefined
                ? feedback.map((item) => (
                      <Item
                          key={item.id}
                          item={item}
                          handleDelete={handleDelete}
                      />
                  ))
                : "No feedback yet"}
        </div>
    );
}

export default List;
