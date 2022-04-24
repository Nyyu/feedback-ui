import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const jsonData = await fetch("/feedback?_sort=id&_order=desc");
        const data = await jsonData.json();
        setFeedback(data);
        setIsLoading(false);
    }

    const [editFeedback, setEditFeedback] = useState({
        item: {},
        edit: false,
    });

    // Add item in the list
    async function addFeedback(obj) {
        const res = await fetch("/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        });
        const data = await res.json();
        setFeedback((prev) => [data, ...prev]);
    }

    // Deletes the item
    async function handleDelete(id) {
        if (window.confirm("Are you sure?")) {
            await fetch(`/feedback/${id}`, { method: "DELETE" });
            setFeedback((prev) => prev.filter((e) => e.id !== id));
        }
    }

    // Edit the item
    function handleEditFeedback(item) {
        setEditFeedback({
            item,
            edit: true,
        });
    }

    // Update Item
    async function updateItem(id, updItem) {
        const res = await fetch(`/feedback/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updItem),
        });

        const data = await res.json();
        setFeedback(feedback.map((e) => (e.id === id ? { ...e, ...data } : e)));
        setEditFeedback({
            item: {},
            edit: false,
        });
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
                isLoading,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
