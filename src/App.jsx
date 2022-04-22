import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import List from "./components/Feedback/List";
import Data from "./data/feedbackData";
import Stats from "./components/Feedback/Stats";
import Form from "./components/Feedback/Form";

function App() {
    const [data, setData] = useState(Data);

    function handleDelete(id) {
        if (window.confirm("Are you sure?"))
            setData((prev) => prev.filter((e) => e.id !== id));
    }
    function handleAdd(text, rating) {
        setData((prev) => [
            ...prev,
            {
                // Easy and dumb way without using any package like UUID or sth else
                id: prev.length + 1,
                rating: rating,
                text: text,
            },
        ]);
    }
    return (
        <>
            <Header />
            <div className="container">
                <Form newItem={(text, rating) => handleAdd(text, rating)} />
                <Stats feedback={data} />
                <List feedback={data} handleDelete={handleDelete} />
            </div>
        </>
    );
}

export default App;
