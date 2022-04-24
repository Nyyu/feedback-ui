import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "../Card";
import { useContext } from "react";
import FeedbackContext from "../../Context/FeedbackContext";

function Item({ item }) {
    const { handleDelete, handleEditFeedback } = useContext(FeedbackContext);
    return (
        <>
            <Card>
                <div className="num-display">{item.rating}</div>

                <button onClick={() => handleDelete(item.id)} className="close">
                    <FaTimes color="purple" />
                </button>
                <button
                    onClick={() => handleEditFeedback(item)}
                    className="edit"
                >
                    <FaEdit color="purple" />
                </button>
                <div className="text-display">{item.text}</div>
            </Card>
        </>
    );
}

Item.defaultProps = {
    score: 0,
    Mytext: "There's no scores to be shown",
};

export default Item;
