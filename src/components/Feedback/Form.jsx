import React, { useState } from "react";
import Button from "../Button";
import Card from "../Card";
import RatingSelector from "./RatingSelector";

function Form({ newItem }) {
    const [text, setText] = useState("");
    const [rating, setRating] = useState(10);
    const [alert, setAlert] = useState(
        `Text must be at least more 10 characters`
    );
    const [btnDisabled, setBtnDisabled] = useState(true);

    const handleTextChange = (e) => {
        const { value } = e.target;
        setText(value);

        if (text === "") {
            setBtnDisabled(true);
        } else if (text !== "" && text.trim().length < 10) {
            setBtnDisabled(true);
            setAlert(`Text must be at least more 10 characters`);
        } else if (text.trim().length > 10) {
            setBtnDisabled(false);
            setAlert(null);
        } else {
            setBtnDisabled(true);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        newItem(text, rating);
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
