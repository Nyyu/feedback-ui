import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import List from "./components/Feedback/List";
import Stats from "./components/Feedback/Stats";
import Form from "./components/Feedback/Form";
import About from "./components/Pages/About/About";
import AboutLink from "./components/Pages/About/AboutLink";
import Item from "./components/Pages/Item/Item";
import { FeedbackProvider } from "./Context/FeedbackContext";

function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <>
                                    <Form />
                                    <Stats />
                                    <List />
                                    <AboutLink />
                                </>
                            }
                        />
                        <Route path="/about" element={<About />} />
                        <Route
                            path="/item/:id/:specific/*"
                            element={<Item />}
                        />
                    </Routes>
                </div>
            </Router>
        </FeedbackProvider>
    );
}

export default App;
