import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import List from "./components/Feedback/List";
import Data from "./data/feedbackData";
import Stats from "./components/Feedback/Stats";
import Form from "./components/Feedback/Form";
import { v4 as uuid } from "uuid";

function App() {
    const [data, setData] = useState(Data);

    function handleDelete(id) {
        if (window.confirm("Are you sure?"))
            setData((prev) => prev.filter((e) => e.id !== id));
    }
    function addFeedback(obj) {
        setData((prev) => {
            obj.id = uuid();
            return [obj, ...prev];
        });
    }
    return (
        <>
            <Header />
            <div className="container">
                <Form handleAdd={(obj) => addFeedback(obj)} />
                <Stats feedback={data} />
                <List feedback={data} handleDelete={handleDelete} />
            </div>
        </>
    );
}

export default App;
