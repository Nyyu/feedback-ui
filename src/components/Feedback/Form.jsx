import React, { useState } from "react";
import Button from "../Button";
import Card from "../Card";

function Form() {
    const [text, setText] = useState("");
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
    return (
        <>
            <Card>
                <form onSubmit={(e) => e.preventDefault()}>
                    <h2>How'd you rate your service with us?</h2>
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
