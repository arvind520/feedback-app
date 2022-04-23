import "./index.css";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import { v4 as uuidv4 } from "uuid";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";
import AboutPageLink from "./components/AboutPageLink";
import Post from "./components/pages/Post";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteHandle = (id) => {
    if (window.confirm("Are you sure want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

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
                <FeedbackForm addFeedback={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} deleteHandle={deleteHandle} />
              </>
            }
          ></Route>

          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/post/:id/:name" element={<Post />} /> */}
        </Routes>
      </div>
      <AboutPageLink />
    </Router>
  );
}

export default App;
