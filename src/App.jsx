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
    return (
        <>
            <Header />
            <div className="container">
                <Form />
                <Stats feedback={data} />
                <List feedback={data} handleDelete={handleDelete} />
            </div>
        </>
    );
}

export default App;
