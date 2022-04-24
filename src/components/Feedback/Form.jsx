import React, { useState, useContext, useEffect } from "react";
import Button from "../Button";
import Card from "../Card";
import RatingSelector from "./RatingSelector";
import FeedbackContext from "../../Context/FeedbackContext";

function Form() {
    const { handleAdd, editFeedback, updateItem } = useContext(FeedbackContext);

    const [text, setText] = useState("");
    const [rating, setRating] = useState(10);
    const [alert, setAlert] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);

    useEffect(() => {
        if (editFeedback.edit) {
            setText(editFeedback.item.text);
            setRating(editFeedback.item.rating);
            setBtnDisabled(false);
        }
    }, [editFeedback]);

    const handleTextChange = (e) => {
        const { value } = e.target;
        setText(value);

        if (value === "") {
            setBtnDisabled(true);
        } else if (value !== "" && value.trim().length <= 9) {
            setBtnDisabled(true);
            setAlert(`Text must be at least more 10 characters`);
        } else if (value.trim().length > 10) {
            setBtnDisabled(false);
            setAlert(null);
        } else {
            setBtnDisabled(true);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            setAlert("");
            if (editFeedback.edit) {
                updateItem(editFeedback.item.id, {
                    text,
                    rating,
                });
            } else {
                handleAdd({
                    text,
                    rating,
                });
            }
        } else {
            setAlert(`Text must be at least more 10 characters`);
        }
    };

    return (
        <>
            <Card>
                <form onSubmit={handleSubmit}>
                    <h2>How'd you rate your service with us?</h2>
                    <RatingSelector
                        updateRating={(value) => setRating(value)}
                    />
                    <div className="input-group">
                        <input
                            id="form__input"
                            onChange={handleTextChange}
                            type="text"
                            placeholder="Write a review"
                            value={text}
                            version={"btn-primary"}
                        />
                        <Button
                            type="submit"
                            version="primary"
                            isDisabled={btnDisabled}
                        >
                            Send
                        </Button>
                    </div>
                    {alert && <div className="message">{alert}</div>}
                </form>
            </Card>
        </>
    );
}

export default Form;
