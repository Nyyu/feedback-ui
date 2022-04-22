import { FaTimes } from "react-icons/fa";
import Card from "../Card";

function Item({ item, handleDelete }) {
    return (
        <>
            <Card>
                <div className="num-display">{item.rating}</div>

                <button onClick={() => handleDelete(item.id)} className="close">
                    <FaTimes color="purple" />
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
