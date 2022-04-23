import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import List from "./components/Feedback/List";
import Data from "./data/feedbackData";
import Stats from "./components/Feedback/Stats";
import Form from "./components/Feedback/Form";
import About from "./components/Pages/About/About";
import AboutLink from "./components/Pages/About/AboutLink";
import { v4 as uuid } from "uuid";
import Item from "./components/Pages/Item/Item";

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
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <>
                                <Form handleAdd={(obj) => addFeedback(obj)} />
                                <Stats feedback={data} />
                                <List
                                    feedback={data}
                                    handleDelete={handleDelete}
                                />
                                <AboutLink />
                            </>
                        }
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="/item/:id/:specific/*" element={<Item />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
