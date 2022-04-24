import { createContext, useState } from "react";
import feedbackData from "../data/feedbackData";
import { v4 as uuid } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState(feedbackData);
    const [editFeedback, setEditFeedback] = useState({
        item: {},
        edit: false,
    });

    // Add item in the list
    function addFeedback(obj) {
        setFeedback((prev) => {
            obj.id = uuid();
            return [obj, ...prev];
        });
    }

    // Deletes the item
    function handleDelete(id) {
        if (window.confirm("Are you sure?"))
            setFeedback((prev) => prev.filter((e) => e.id !== id));
    }

    // Edit the item
    function handleEditFeedback(item) {
        setEditFeedback({
            item,
            edit: true,
        });
    }

    // Update Item
    function updateItem(id, updItem) {
        setFeedback(
            feedback.map((e) => (e.id === id ? { ...e, ...updItem } : e))
        );
    }

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                editFeedback,
                handleAdd: (obj) => addFeedback(obj),
                handleDelete,
                handleEditFeedback,
                updateItem,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
//
